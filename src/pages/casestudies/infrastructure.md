---
templateKey: case-study
title: Infrastructure
date: 2022-04-26T15:04:10.000Z
description: Migrating client infrastructure to the cloud is seldom successfull with on-prem thinking alone
featuredpost: true
featuredimage: /img/path.jpg
tags:
  - devops
  - infrastructure
  
---

![Infrastructure](/img/infrastructure-tunnel.jpg)

## Introduction

I.T. underpins almost all modern firms regardless of whether they're technology startups, manufacturing organizations, or government departments, and infrastructure is what I.T. functions are built on.

The cloud doesn't remove the need for infrastructure, but it does change what parts you're responsible for. Gone are the days of managing racks, physical computers, and network equipment. Even the need for virtualised computers running full operating systems is being eroded by advances in serverless approaches.

This case study examines a DoneOps client with several different needs and illustrates how DoneOps added value to this client.

## Client and requirements

The client is an established online learning company. Their technology stack is relatively modern, but has a large number of different use-cases and requires different solutions to serve these.

The key infrastructure needs that the client had in the earlier stages were:

* Multiple developer environments to allow developers to work on their components with recent versions of other components
* A unified staging area to allow QA and previews on upcoming deployments
* Specialised developer environments for groups such as data science
* A highly available and reliable production environment

DoneOps worked with the client to understand their current infrastructure needs, the business needs that were driving infrastructure, and what changes in the business would be coming in the future that may change these. This, combined with our Google Cloud expertise allowed us to provide the client with a solution that used the right tools for each function and allowed extension into the future.

Understanding what parts of the requirement were duplicated and which parts were unique allowed us to create standardised hosting environments for development, staging and production.

## Solutions

### CI -> artifact creation

The first task was to identify an approach to making code artifacts available to all of these environments. Google's project approach to service and resource grouping meant that we could create a single project where CI systems transform source code into containers using [Cloud Build](https://cloud.google.com/build), then store these artifacts in the [Artifact Registry](https://cloud.google.com/artifact-registry). Doing this work in a single project meant that we could carry out these tasks once, and make the results available to all other environments. Google's IAM implementation shines here compared to competitors' approaches to achieving the same outcome.

DoneOps strongly believes that what you test is what you should run, and by using the above tools alongside Google project permissions, we can make the same images available in development, testing, and production with no duplicate rebuilds between stages.

### Deploying and running code

Having solved the build and artifact storage infrastructure issues, we then moved on to execution environments. For this client, we chose Kubernetes via [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine). This allowed us to define the execution environment infrastructure in code, and simply modify components as required for various environments such as scale, security functions or deployment approaches.

DoneOps' value proposition beyond a standard GKE deployment is our familiarity and expertise with various tools that allow clusters to be used in different ways. The fact that we provided a centralised build and artifact approach in earlier steps means that we could use the same image in different ways, but we can also just integrate developers directly with their own cluster resources instead of working locally. [Skaffold](https://skaffold.dev/) means that developers write code in a local IDE, but then observe the output, execution, and debugging in an environment identical to prod. This results in a much higher first-time-deployment success rate by eliminating differences between environments.

[Flux](https://fluxcd.io/) allows us to automatically deploy images that were built earlier, and reside in the central artifact repository. First, it's deployed to staging, and then to production using [GitOps](https://about.gitlab.com/topics/gitops/) approaches based on developer interaction with their source code repository. Merge to a specific branch? That's off to staging. Add a tag? Production will be updated in minutes.

The combination of the above approaches allowed DoneOps to provide an Infrastructure as Code approach to the client environments that is repeatable, consistent, and can easily be reused for the different development and business functions that we identified.

### And then it changed

As the client is in the learning industry, over time they identified a need to provide completely different tools and functions to their learners. These requirements required completely different infrastructure to their production and development environments, and in an on-prem approach, would have required significant capital expenditure as well as delays related to procurement in a time of chip shortages and other supply chain issues.

For this use case, the client required multiple different Linux operating system images that could be instantiated on-demand for learners to carry out hands-on lab activities.

Because the client was already onboarded to Google Cloud, we were able to meet these requirements in multiple environments in weeks instead of months.

Again, our expertise in the wider DevOps tooling ecosystem allowed us to quickly select tools like [Hashicorp Packer](https://www.packer.io/) that allowed us to leverage [existing images](https://cloud.google.com/compute/docs/images) in Google Cloud to create custom images for a variety of scenarios. This approach to layered infrastructure means that we can deliver client value without starting from scratch. This benefits the client in a faster turnaround but also knowing that their images are based on well tested and reputable images.

In summary, DoneOps's familiarity with Google Cloud services, best practices in cloud infrastructure, and our client's business needs allowed us to

* Select best-of-breed infrastructure that minimised duplication while ensuring re-use of components
* Create repeatable deployments that are resilient to environment failures
* Guarantee that production code was the same as the image tested
* Delivered flexibility in approach to new use-cases

## Credits

Photo by [Engin Akyurt](https://unsplash.com/@enginakyurt) on [Unsplash](https://unsplash.com/s/photos/options?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
