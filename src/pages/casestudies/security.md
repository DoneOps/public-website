---
templateKey: case-study
title: Security
date: 2022-05-27T15:04:10.000Z
description: 
featuredpost: true
featuredimage: /img/cloudsecurity-locks.jpg
tags:
  - devops
  - security
  
---

![Cloud Migrations](/img/cloudsecurity-locks.jpg)

## Introduction

Authentication and authorization are essential parts of any application, especially those accessible via public networks. Laws like [GDPR](https://gdpr-info.eu/) and [CCPA](https://oag.ca.gov/privacy/ccpa) provide harsh penalties for firms who do not adequately protect end-user information. The reputational impact of a system breach can effectively destroy a business.

Reworking security implementations can be time-consuming and expensive, so DoneOps works with clients to conduct reviews and choose the right solutions early in the product lifecycle. Security choices feed into ISO or SOC attestations, and the right decisions can simplify reporting for fundraising due diligence.

As with most other aspects of Google's cloud offering, some security implementation considerations are the customer's responsibility, while Google is responsible for others. While Google [document this clearly](https://services.google.com/fh/files/misc/gcp_pci_srm__apr_2019.pdf), it can be overwhelming for clients to know what is available to them and what they need to implement.

## Client and requirements

The client is a security focussed online learning platform with a requirement to

* authenticate end-users to the various application components
* allow internal users to manage content, including performance measurement, user journey insights, etc.
* provide least privilege access to developers and administrators for deployment and operation of the platform

The nature of the client means that illegitimate users frequently target their services, attempting to gain unauthorized access to their systems.

No regulatory standards such as PCI or HIPAA were in scope for this case study. Still, Google makes it simple to satisfy these requirements where present, as seen in the shared responsibility document mentioned above.

## Approach and Solution

We first needed to define the various actors and their roles in the client's use-cases and then identify tools that could be used to grant them the access they need safely.

### Developer and administration access

The development and administration of the platform was the most straightforward use case to address due to Google Cloud's strong Identity and Access Management (IAM) offering. This offering outshines competitor solutions because service accounts and user permissions only need to be added in one place and can be referenced across the whole of GCP without needing to add permissions in multiple locations.

There is also no need to assume different roles in different projects. Your user email address provides access and permissions as defined at many levels, from a single resource to a project, to a folder, and even at the organization level.

DoneOps believes that developers should not require access to production environments with the correct choices. By implementing an automated CI/CD solution based on [Prow](​​https://github.com/kubernetes/test-infra/tree/master/prow) and [Flux](​​https://fluxcd.io/), developers can release quickly and confidently without needing to access cloud components directly.

The last gap for this client was developers needing credentials or access tokens for development resources such as databases or 3rd party integrations. We chose [Skaffold](https://skaffold.dev/) to allow developers to work directly within GKE clusters. Skaffold and GKE enabled us to manage secrets centrally without sharing them with developers. It also allows the client to rotate these secrets without coordinating with multiple developers and use the same solution for development and production environments.

### Internal business users

The client is a Google customer beyond cloud services which meant that much of the structure required to identify internal users was already in place via their Google organization. Choosing [Google's identity-aware proxy](https://cloud.google.com/iap) was an easy sell in light of this.

Protecting cloud resources required minimal effort as the client already had a strong organization and layout in Google Workspace, and the tight integration requires less configuration than other 3rd party provided tools. In addition, administration becomes simpler because changes are implemented using tools with which the organization is already familiar. This simplicity reduces the risk of overprovisioning access or forgetting to revoke cloud access as part of employee offboarding processes.

### End users

The client had an identity management platform in place, but the vendor costs were high, and there were issues with scaling as their userbase grew. The existing solution provided what the client needed today but not what they would need for their future plans.

[Google's Identity Platform](https://cloud.google.com/identity-platform) allowed the client to migrate their users from their existing identity and access management platform with no downtime and worked well partly because of their existing investment in the Google ecosystem. In addition, ongoing management is simple as they are already familiar with concepts and tools, and developers are already familiar with Google platforms, so it was easy to move quickly but safely.

After the migration, the client could also offer [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) to corporate customers, and this task was straightforward compared to the existing vendor's limited API functionality.

## Summary

When DoneOps works with customers, we're not just thinking about functionality but also cost, compliance, and reputation. Choosing the correct solutions will grow with our clients and feed into reporting processes for security reviews and investor due diligence to support fundraising.

While Google wasn't first with IAM, their work in the IAM space to remove duplication and centralize provisioning allows for easy granting, revoking, and auditing of access. As a result, there is less duplication, so there is a lower risk of overprovisioning or failing to offboard a user correctly.

The built-in tools and services from Google, the tight integration between Google Workspace and Google Cloud, and the ease of integrating 3rd party tools with platforms built and hosted on Google make it easy for customers to secure all aspects of their implementations.

## Credits

Photo by [Jon Moore](https://unsplash.com/@thejmoore) on [Unsplash](https://unsplash.com/s/photos/options?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
