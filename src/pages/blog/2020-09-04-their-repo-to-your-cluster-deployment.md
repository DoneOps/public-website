---
templateKey: blog-post
title: From their repository to your cluster - part 3
date: 2020-09-04T09:00:00.000Z
description: Running in your cluster
featuredpost: true
featuredimage: /img/integration.jpg
tags:
  - devops
  - devsecops
---

![](/img/integration.jpg)

In parts 1 and 2, we went through the process of choosing a tool and building it in a way we can easily maintain and deploy it. In this part, we’ll finally begin running it in our target (local in this case) cluster.

There are some parts about this specific tool’s configuration that we won’t go into - this is more about how to get something running in Kubernetes than it is about this particular tool.

You’ll remember that this is a simple tool designed to be run on a schedule. This means that in its current state, we need to find a way to schedule this task instead of running it as a long running process.

Fortunately, Kubernetes has a [CronJob feature](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/). This uses the familiar crontab job definition format, and creates jobs on a given scheduler. It's important to note that jobs will be created in the timezone of the `kube-controller` manager.

## Namespaces

If you're not already familiar with Kubernetes namespaces, you should definitely [read this page](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/). Namespaces are an important component in separating users within a single Kubernetes environment, or deploying applications into a self contained environment. They'll become more important as we expand this series and look at tools like [cert-manager](https://cert-manager.io/docs/). For this example, we'll use a namespace called `cloudflare-ddns-client`, based on the application name.

You can create this with `kubectl create ns cloudflare-ddns-client`. Once created, you need to ensure that it's explicitly set as a flag to all Kubernetes commands:
`—namespace=cloudflare-ddns-client` or `-n cloudflare-ddns-client`
or make it your default context by doing:
`kubectl config set-context --current --namespace=cloudflare-ddns-client`

## Application Components

This application requires a configuration file containing a secret (credentials to modify a CloudFlare DNS entry) to run, and the CronJob definition mentioned earlier. A more complex application would use Deployments for long running services, Services to allow components to interact with each other, and Ingress to allow connections to your environment. An example of this kind an application will be covered in an upcoming post.

Let's look at each of the components we're using for this simple example in more detail.

### Secrets and credentials

The secret in this case is a token that is able to modify a DNS zone in [Cloudflare](https://cloudflare.com) - Cloudflare allows you to create multiple different tokens to ensure fine-grained access to their API, and in this case we've created a token that is allowed to list and read and write DNS entries in our domain.

Secrets are sensitive objects, and much like any other application environment, these must be protected. We would encourage you to read [Aqua's](https://blog.aquasec.com/managing-kubernetes-secrets#:~:text=Use%20SSL%2FTLS%E2%80%94when%20running,files%2C%20the%20secret%20is%20compromised.) page on this.

For production credentials, you should ensure that your cloud provider enables you to automatically encrypt the etcd storage using one of their services. Alternatively, you could consider a cloud-agnostic solution such as [HashiCorp Vault](https://www.vaultproject.io) or manually integrate with your cloud provider tooling to do this.

For this example, we'll use etcd.

[Kubernetes secret contents](https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/) need to be base64-encoded if you're going to manually create secrets, and it's important to note that you should use `echo -n` when creating these as a newline in the encoded secret can be a challenge to diagnose.

So assuming that our Cloudflare token is 'abc1234', we'd encode this with `echo -n 'abc1234' | base64` and copy the resulting string. Our `cloudflare-ddns-client-secret.yaml` file will now be as follows:

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: cloudflare-token
type: Opaque
data:
  password: YWJjMTIzNA==
```

It's important to note that this is currently a file in your filesystem that contains data that is sensitive and it should not be commited to an SCM!

### Configuration files

Kubernetes allows you to create a [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) containing your configuration information, and then mount this so that it is treated like a file in pods. This way you can manage your config data in a way that doesn't require persistent storage across all hosts that pods will run on, but also not have to bake this into your images.

Our `cloudflare-ddns-client-configmap.yaml` will be quite simple as the application doesn't require much complex configuration.

```yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: cloudflare-ddns
  namespace: cloudflare-ddns-client
data:
  .cloudflare-ddns: |+
    [Cloudflare DDNS]auth_type = tokendomains = myhost.mydomain.com
```

### Task definition

Last, but certainly not least is our task definition. In this case it will be a CronJob that runs a task on a scheduled basis, but it could be a [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) or any other supported Kubernetes type.

For this example, we'll use this content in `cloudflare-ddns-client-cronjob.yaml`

```yaml
---
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: cloudflare-ddns-client-cronjob
spec:
  schedule: '0 */4 * * *'
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: cloudflare-ddns-client-cronjob
              image: wtpascoe/cloudflare-ddns-client:2.0
              volumeMounts:
                - name: config-cloudflare-ddns-client
                  mountPath: /home/cloudflare-ddns-client/.cloudflare-ddns
                  subPath: '.cloudflare-ddns'
              env:
                - name: API_TOKEN
                  valueFrom:
                    secretKeyRef:
                      name: cloudflare-token
                      key: password
          volumes:
            - name: config-cloudflare-ddns-client
              configMap:
                name: cloudflare-ddns
          restartPolicy: Never
```

There are a few important things to note here. Firstly, you can see that we reference both the secret and the configmap we defined earlier.

#### Secret

The secret is used to set an environment variable at runtime, which the application will then use for authentication. This snippet takes the value of the `password` key from the `cloudflare-token` secret and sets it as the `API_TOKEN` environment variable.

```yaml
env:
- name: API_TOKEN
    valueFrom:
    secretKeyRef:
        name: cloudflare-token
        key: password
```

#### ConfigMap volume and use

The ConfigMap is defined as a [volume](https://kubernetes.io/docs/concepts/storage/volumes/) which can then be mounted into a running pod. There are many different types of volumes available, but this uses configuration data instead of requiring persistent storage shared across all nodes.

This snippet defines a volume named `config-cloudflare-ddns-client`:

```yaml
volumes:
  - name: config-cloudflare-ddns-client
configMap:
  name: cloudflare-ddns
```

With the volume defined, we can then include it in our container definition so that the content of the configmap appears in the filesystem where the application expects it to be:

```yaml
containers:
  - name: cloudflare-ddns-client-cronjob
    image: wtpascoe/cloudflare-ddns-client:2.0
    volumeMounts:
      - name: config-cloudflare-ddns-client
        mountPath: /home/cloudflare-ddns-client/.cloudflare-ddns
        subPath: '.cloudflare-ddns'
```

## Putting it all together

### Deployment

We'll now use the 3 files created above to deploy this application and to verify that it's running. I've set my context to `cloudflare-ddns-client` but if you haven't, you should include `--namespace cloudflare-ddns-client` or `kubectl -n cloudflare-ddns-client` in each command. You may prefer this as it's more explicit and makes it clear which namespace you're impacting.

```shell
kubectl -n cloudflare-ddns-client create -f cloudflare-ddns-client-secret.yaml
kubectl -n cloudflare-ddns-client create -f cloudflare-ddns-client-configmap.yaml
kubectl -n cloudflare-ddns-client create -f cloudflare-ddns-client-cronjob.yaml
```

If you wanted to use (apply) _all_ of the files in a folder instead of one at a time as above, you could instead run

```shell
kubectl -n cloudflare-ddns-client apply -f
```

### Verification

Once you've done this, you can check the components in the cluster with `kubectl -n cloudflare-ddns-client get all`

Immediately after running, my output looks like this:

```shell
NAME                                           SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
cronjob.batch/cloudflare-ddns-client-cronjob   0 */4 * * *   False     0        <none>          29s
```

Wait, what? Where are the pods? Where are the secrets? Where are the ConfigMaps? We told kubectl to get _all_. There's a [lengthy discussion](https://github.com/kubernetes/kubectl/issues/151) about this on GitHub, but suffice to say that `get all` does not return _everything_. And there are no pods because the CronJob has not yet run.

We can get specific items with commands like `kubectl -n cloudflare-ddns-client get secret` or `kubectl -n cloudflare-ddns-client get configmap`. More importantly, we can look for actions and failures with `kubectl -n cloudflare-ddns-client get events`.

### Forcing things to run instead of waiting for the schedule

There won't be much here until we've run for the first time, so let's speed the world up. We can trigger a job to run immediately by creating a job from a CronJob definition. In this example, let's run `kubectl -n cloudflare-ddns-client create job --from=cronjob.batch/cloudflare-ddns-client-cronjob cloudflare-ddns-client-manual-001`. `--from` refers to the job definition we've already created and the last argument is the name of this job - you can see this in the output when you run `kubectl -n cloudflare-ddns-client get all` now.

```shell
% kubectl -n cloudflare-ddns-client get all
NAME                                          READY   STATUS      RESTARTS   AGE
pod/cloudflare-ddns-client-manual-001-zqbbk   0/1     Completed   0          60s

NAME                                          COMPLETIONS   DURATION   AGE
job.batch/cloudflare-ddns-client-manual-001   1/1           6s         60s

NAME                                           SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
cronjob.batch/cloudflare-ddns-client-cronjob   0 */4 * * *   False     0        <none>          8m6s
```

There's now a job and a pod named based on the last argument we used above, and we can check the pod logs to see how things ran with `kubectl -n cloudflare-ddns-client logs cloudflare-ddns-client-manual-001-zqbbk`

### Cleanup

Our application is configured, our manual run succeeded, so all that's left to do is some housekeeping and we're done. We can delete the job that ran with `kubectl -n cloudflare-ddns-client job cloudflare-ddns-client-manual-001`, and you'll see that this also deletes the associated pod.

## Conclusion

In this series we've gone from needing a tool through selection, building and versioning to deployment into your environment. We hope you found this useful, and if you have questions or ideas for future content, please reach out to us on [Twitter](https://twitter.com/doneops)

#### Credits

<span>Photo by <a href="https://unsplash.com/@pluyar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Shane Aldendorff
</a> on <a href="https://unsplash.com/s/photos/fixing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
