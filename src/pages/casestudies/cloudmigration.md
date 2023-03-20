---
templateKey: case-study
title: Cloud Migrations
date: 2022-04-26T15:04:10.000Z
description:
featuredpost: true
featuredimage: /img/cloudmigration-network.jpg
tags:
  - devops
  - infrastructure
---

![Cloud Migrations](/img/cloudmigration-network.jpg)

## Introduction

We see two types of cloud migrations with the clients we work with:

- Migrations from on-prem (production or proof of concept) to the cloud
- Migrations from one cloud provider to another

This case study examines a DoneOps client who consolidated several different solutions with Google Cloud.

## Client and requirements

The client is a supply chain management firm that marries physical warehousing and logistics functions with technology to create an e-commerce platform that enables brands and manufacturers to increase sales with data-backed decision-making.

Their existing software deployments included some cloud functionality but also many physical components as well as piecemeal components across many different deployment mediums. This led to a complex, multistage deployment pipeline that required a dedicated team to manage. Their requirement was for a single-cloud solution to remove complexity from their environment.

## Approach

There are many approaches to cloud migrations, including:

- lift-and-shift - replicate existing infrastructure in a like-for-like fashion using cloud analogs for on-prem.
- modernize - modify all components to use cloud-native functionality on day 1
- hybrid - choose lift and shift or modernize on a case-by-case basis

A common pitfall of lift-and-shift approaches is that the impetus to truly benefit from the cloud is lost once the offering is live in the cloud. However, moving to a completely cloud-native solution can be time and resource-consuming, and the appropriate engineering skills may not exist in the organization at the start of the project.

DoneOps has learned from working with different clients that there usually are opportunities for quick wins in modernization while still delivering cloud migrations on time.

## Solution

Some of the client's existing software was developed in a way that made containerizing it relatively simple. Software that can be containerized can immediately benefit from the cloud by removing the need to operate compute resources and is much simpler to make highly available.

The client already had parts of their platform that were implemented as multi-step workflows with Google [Cloud Functions](https://cloud.google.com/functions) and [Pub/Sub](https://cloud.google.com/pubsub)., This worked well by allowing component owners to focus on their problem domain without worrying about the impact of tightly-coupled interfaces. However, developers were finding themselves trying to run the entire app to test new features. With the multiple google services and some legacy on-prem servers, this was nearly impossible for even the most experienced developers.

This is an example of adopting only part of a cloud-native system. The client went all-in on cloud functions, but did not have the experience of the tools to understand the impact of how developers would code, or how these could be used efficiently to test with other siloed parts of the app that were running on-prem and in different formats.

Google provides several different ways to deploy containers, and choosing [GKE](https://cloud.google.com/kubernetes-engine) enabled the client to take advantage of horizontal scalability and reliability without any significant architectural changes. We also decided to migrate them off of cloud functions and into CloudRun / GKE for a unified deployment architecture. This architecture allows for an increase in automation and optimizing developers workflows by removing barriers for them to test their changes against a representative “stack” instead of running emulation tools locally to get the full experience.

DoneOps' expertise was essential in guiding the client through this migration and consolidation of platforms. We also helped the client design sustainable scaling patterns based on queue depth of Pub/Sub workflows while still enforcing limits that ensure service costs do not scale linearly with request volume.

## Summary

DoneOps enabled this client to consolidate many different infrastructure components on a single cloud platform and added value beyond infrastructure.

Our understanding of modern design patterns helped the customer to scale where needed while managing costs effectively and enabled their developers to simplify their development, testing, and deployment.

## Credits

Photo by [Jordan Harrison](https://unsplash.com/@jordanharrison) on [Unsplash](https://unsplash.com/s/photos/options?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
