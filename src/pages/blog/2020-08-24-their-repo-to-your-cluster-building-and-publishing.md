---
templateKey: blog-post
title: From their repository to your cluster - part 2
date: 2020-07-20T15:04:10.000Z
description: How - the nuts and bolts of building and publishing
featuredpost: true
featuredimage: /img/building.jpg
tags:
  - devops
  - devsecops
---

![](/img/building.jpg)

In the [first installment](/blog/2020-07-22-from-their-repository-to-your-cluster/), we discussed how to select a tool and what considerations to take into account when choosing a tool. Now it’s time to get to work and make it happen.

# Image creation and collaboration

The first step was to fork the repository in GitHub. Ideally, we don’t want to assume maintenance of this project, but we do need a platform to collaborate with the upstream maintainer.

In our example, the tool is designed to be installed as a script onto a Linux host and run from cron on a scheduled basis. To run this from a Kubernetes cluster, we really want to deploy a docker image. So we needed to add a DockerFile - although the example is simple, some choices still needed to be made.

The first choice was ‘which base image to build on?’ I originally chose an Ubuntu image because this tends to be full-featured and will run most things without needing to install additional dependencies. But the resulting container is a bit more bloated than I’d like, and that means a higher potential for vulnerabilities. Alpine is the oft-recommended base image for many projects, but [less so for Python][1]. After carefully looking at the dependencies for this project and the expected deployment/update frequency, I settled on python:alpine3.11; slower build times aren’t as much of a consideration here as the total size of the resulting image is.

The resulting DockerFile is at https://github.com/WTPascoe/cloudflare-ddns-client/blob/master/Dockerfile, and because we chose a project with a collaborative maintainer, you’ll see that this has been merged into the upstream repository.

Now we need to decide where to host our resulting image, and how to update it when the project source code is updated.

# Automated building and publishing

For simplicity, I’ve chosen to publish to [DockerHub](https://hub.docker.com/repository/docker/wtpascoe/cloudflare-ddns-client) and to automate my build using [Google Cloud Build](https://cloud.google.com/cloud-build). This is fine for an example like this, but you are more likely to want to publish to a private repository, and we’ll talk more about those in future posts. The main considerations for both the build tools and the image hosting are

- Accessibility
- Cost
- Privacy
- Security

Google Cloud Build is well documented, and once you’ve connected your project to your source repository, all you need is some secret management, and then you are ready to set up your build configuration.

## Secret Management

The first step here is to [create a secret](https://cloud.google.com/blog/products/identity-security/introducing-google-clouds-secret-manager) in the Google Cloud console with a descriptive name and all other values set to defaults. The value of this secret should be your _DockerHub CLI token_. This secret will be used in your build configuration later, but that’s all you need.

## Build configuration

It’s time to make another important decision that will feed into how you release your code or build updated images - do you want continuous deployment with frequent releases, or do you want releases to follow a more standard versioning system? This choice will define how you trigger builds and the naming of your images.
I’ve chosen a versioned approach using [semantic versioning](https://semver.org/), and I’ll be making new releases whenever a tag is added to my GitHub repository that matches a particular pattern.

## Triggering builds on code changes

As I said above, I’ve decided to do new releases whenever there’s a new tag that matches a particular pattern (my next version), and I’ve added a [trigger](https://cloud.google.com/cloud-build/docs/automating-builds/create-manage-triggers) to Cloud Build to accomplish this.

Instead of using the _‘New tag pushed to repo’_ I could have selected _‘Push to a branch’_ and created a new build each time any code is pushed to the main project branch.

If this were a more actively developed project with an internal QA process, we would use a mix of both of these approaches - all pushes to a develop or QA branch would result in builds automatically deployed to a test environment, with tagged builds from the main branch generating images that are used for production deployments. We would have a separate trigger for each.

My trigger has the following values

- Event: Push a new tag
- Source: ^([0-9]+)\.([0-9]+)\.|([0.9]+)\$
- File type: Cloud build configuration file
- Cloud Build configuration file location: /cloudbuild.yaml
- Substitution variables
  - \_DOCKER_ACCOUNT: wtpascoe
  - \_DOCKER_TOKEN: The name of the secret you created earlier

The substitution variables will be used to populate the cloudbuild.yaml file at build time, so we don’t need to expose any secrets or hardcode any content that we may wish to change from build to build.

The source in the trigger configuration is important - this means that only tags that match a particular pattern will result in builds. This is a very primitive pattern, and it won’t match semver options that include anything beyond digit(s).digit(s).digit(s).

## Building and publishing

It’s time to put it all together and build a Docker image from this project and publish it. Google Cloud Build is set up and integrated with GitHub, a trigger is in place, and if we add a tag in GitHub, _something_ will happen. But what is that something and how do we make it do what we want?

This project’s configuration is at https://github.com/WTPascoe/cloudflare-ddns-client/blob/master/cloudbuild.yaml and it does the following:

- Get our DockerHub token and store it in a temporary file

```
- name: gcr.io/cloud-builders/gcloud
  entrypoint: 'bash'
  args: [ '-c', 'gcloud secrets versions access latest --secret=$_DOCKER_TOKEN > docker_token.txt' ]
```

- Logs into DockerHub using the token above

```
- name: 'gcr.io/cloud-builders/docker'
  entrypoint: 'bash'
  args: ['-c', 'docker login --username=$_DOCKER_ACCOUNT --password-stdin < docker_token.txt']

```

- Stores values for major and minor components of the new version in temporary files that can be consumed later

```
- name: 'ubuntu'
  entrypoint: 'bash'
  args:
  - '-c'
  - |
    echo $TAG_NAME | sed -e "s#[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)#\1#" > major
    echo $TAG_NAME | sed -e "s#[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)#\2#" > minor
```

- Builds the image from current source with tags for latest, major, major.minor and major.minor.patch
  - This uses the temporary files for major and minor versions created in the previous step
  - major.minor.patch uses the complete tag pushed to GitHub, so no temporary files are used for this
  - E.g. foo:latest, foo:2, foo:2.1, and foo:2.1.1

```
args:
    - '-c'
    - |
      docker build -t $_DOCKER_ACCOUNT/$PROJECT_ID:$TAG_NAME -t $_DOCKER_ACCOUNT/$PROJECT_ID:latest -t $_DOCKER_ACCOUNT/$PROJECT_ID:$(cat major).$(cat minor) -t $_DOCKER_ACCOUNT/$PROJECT_ID:$(cat major) .
```

- Pushes all tags to DockerHub

```
docker push $_DOCKER_ACCOUNT/$PROJECT_ID:$TAG_NAME
docker push $_DOCKER_ACCOUNT/$PROJECT_ID:$(cat major)
docker push $_DOCKER_ACCOUNT/$PROJECT_ID:$(cat major).$(cat minor)
docker push $_DOCKER_ACCOUNT/$PROJECT_ID:latest
```

Whenever a tag is pushed in GitHub that matches the pattern in our trigger, Google Cloud executes this `cloudbuild.yaml` and generates and publishes a Docker image.

# Part 2 Conclusion

After choosing a project in [part 1](/blog/2020-07-22-from-their-repository-to-your-cluster/), we’ve now automated the build and publishing process. Publishing updated Docker images to the repository of our choice is now as simple as adding a tag in GitHub.

In part 3, we’ll deploy this to a Kubernetes cluster, so stay tuned!

[1]: <https://pythonspeed.com/articles/alpine-docker-python/ > 'Alpine Docker Python'

## Credits

<span>Photo by <a href="https://unsplash.com/@danist07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">贝莉儿 DANIST</a> on <a href="https://unsplash.com/s/photos/build?utm_source=build&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
