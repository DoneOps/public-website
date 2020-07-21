---
templateKey: blog-post
title: From their repository to your cluster
date: 2020-07-20T15:04:10.000Z
description: What, why and how to choose.
featuredpost: false
tags:
  - devops
  - devsecops
---

![](/img/options.jpg)

### Where to start.

This multipart series examines the options and process behind making software from third parties available in your Kubernetes cluster.

Most developers are already familiar with using external libraries and frameworks within their end product, and the processes around managing these dependencies are increasingly mature. What’s less standardised is how to take full advantage of existing utilities instead of reinventing the wheel.

The example utility I’ll talk about here is somewhat contrived, but being small and simple makes it easy to iterate on and use as an example. So let’s look at how we’d take a tool to update Cloudflare DNS on IP address change and make it a part of our cluster.

The first question to answer when evaluating any new tool is what functionality you need from it. In this case, my requirement is pretty simple - a tool that, on a scheduled basis or when home internet public IP address changes, will update a DNS entry in Cloudflare. There are a plethora of tools on GitHub that will do this, so now that we know our requirement, what’s next?

In my opinion, when choosing a tool, these factors are a must include:
How closely does the functionality match your requirements?
What are the system requirements?
Do you require support for PodSecurityPolicies, Network Policies, Service Accounts / RBAC, etc
Does a tool exist that is packaged in a compatible way with your existing environment?
How is it packaged? Helm vs yml vs CRD/Operator, etc.
Will it need special node types in Kubernetes?
How actively maintained is the tool?
Do major issues remain open for long periods of time?
Is the utility maintainer open to external submissions?
What license is the tool provided under?
Security Requirements
Will this be running in a production cluster with potential access to sensitive information?
Where is the docker image hosted?
How often is it updated to deal with CVEs and other security issues?
What is the base image? Alpine vs distroless, etc

Now comes the challenging part, and only experience will help you master the selection process. It is not a typical selection process where you pick the solution that meets most of your functionality requirements. For example, a tool that only matches 80% of your functionality requirement, but has a maintainer that is receptive to accepting changes and already packaged in a format that you are able to deploy into your existing environment is often a more suitable candidate than a tool that 100% matches your current environment, but where you would be responsible for all packaging and deployment. This is because upgrades and future versions of the tool may consume more resources to onboard than modifying the 80% matching tool once.

Projects with active maintainers are often better choices because they enable you to reduce your technical debt by having the project own any changes in the future. It’s also important to remember that these developers don’t work for you; your goals and motivations may differ, and these engagements have to be approached with respect.

Software licensing is a minefield that has tripped up many companies. It is vitally important to ensure that the tools and utilities you use do not expose you to legal risks or obligations that you are not prepared to comply with. Having a list of approved licenses for both 3rd party libraries and external tools that will be part of the deployment process or deployed product is something that will make selecting tools in the future simpler, and we strongly advise that this is done as early as possible.

So with that in mind, I’ve selected https://github.com/LINKIWI/cloudflare-ddns-client as the tool I’ll use to meet my requirement. Let us walk through the factors mentioned above with regard to the selected project.

How closely does the functionality meet our requirements?
This utility is able to update a Cloudflare DNS entry on a schedule, but it doesn’t currently run on any part of my network stack that would allow it to receive a notification when the public IP address changes. Some changes will be needed to cache the Cloudflare IP address so that it can be run frequently without abusing the Cloudflare API, but the code is clear and this should be an easy change.

What are the system requirements?
The system requirements are relatively straightforward - a Unix host with Python 3 and cron is all you need to run it.

Is the maintainer open to submissions?
The original project was only able to be run as a cronjob on a Unix host. This didn’t meet my requirements of being deployable to a Kubernetes cluster.

The first step in packaging this in a more suitable format, I created a simple Dockerfile. The maintainer was very receptive and accepted the change.

How is the utility packaged?
Now that the utility is packaged as a Docker file, I still needed to deploy it securely to a Kubernetes cluster. This was possible via a very lightweight docker file and a Kubernetes configmap configuration with a secret for the sensitive Cloudflare API token. Because the code is a one-shot currently, it is meant to be run as a Cronjob. It’s not suitable to be run as a deployment or StatefulSet.

What license is the tool provided under?
LINKIWI/cloudflare-ddns-client is licensed under the MIT License which means we can use it free of charge. It’s also a developer-friendly license that would allow us to include this component should we distribute our final product.

Security Requirements.
For this example, we are not too concerned with the security requirements as it will not be going into any production environment, just a testing sandbox. However, we see the image is based on the official alpine python image which means it will be updated regularly with regards to CVEs and other updates. We will cover how to pull in these updates in another part.

As you can see, there are lots of considerations to account for, but by breaking down the requirements and doing our homework now, we are setting ourselves up for success in the implementation phase and hopefully avoiding any complications that may cause us to scrap the selected tool later due to unforeseen requirements.

In future parts of this series, we will discuss what we needed to change, how we automated our builds of the Docker image, and the toolset we chose and how this will be deployed to our cluster.

We’ll also talk about different versioning options, and why we chose one of the other.

<span>Photo by <a href="https://unsplash.com/@victoriano?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Victoriano Izquierdo</a> on <a href="https://unsplash.com/s/photos/options?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
