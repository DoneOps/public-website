# DoneOps Public Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/344025c0-dae5-4d75-94ef-c7e539f7a63c/deploy-status)](https://app.netlify.com/sites/keen-montalcini-f453b2/deploys)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website?ref=badge_shield)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=security_rating)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)

This repo contains a business website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, About, Product, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website?ref=badge_large)
