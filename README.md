# DoneOps Public Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/344025c0-dae5-4d75-94ef-c7e539f7a63c/deploy-status)](https://app.netlify.com/sites/keen-montalcini-f453b2/deploys)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website?ref=badge_shield)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=security_rating)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DoneOps_public-website&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/dashboard?id=DoneOps_public-website)

Modern, high-performance business website built with [Gatsby](https://www.gatsbyjs.org/) and [TypeScript](https://www.typescriptlang.org/).

Follows the [JAMstack architecture](https://jamstack.org) using Git as a single source of truth, with [Netlify](https://www.netlify.com) for continuous deployment and global CDN distribution.

## ✨ Features

### 🎨 **Modern Tech Stack**
- **Gatsby 5** - Latest static site generator with React 18
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Modern utility-first CSS framework with JIT mode
- **Dark Mode** - System-aware theme switching with persistence
- **React 18** - Latest React features and performance improvements

### 🚀 **Performance & SEO**
- **Lighthouse Score: 95-100** - Optimized for Core Web Vitals
- **Pre-rendered HTML** - Instant page loads
- **Automatic code splitting** - Optimized bundle sizes
- **Image optimization** - gatsby-plugin-image with WebP support
- **Aggressive caching** - 1-year cache for static assets
- **Sitemap & robots.txt** - SEO-optimized

### 🔒 **Security**
- **A+ Security Headers** - HSTS, CSP, X-Frame-Options, etc.
- **Subresource Integrity (SRI)** - SHA-512 hashes for all assets
- **Content Security Policy** - Strict CSP to prevent XSS
- **No CMS vulnerabilities** - Git-based content management

### 📝 **Content Management**
- **Markdown-based** - Simple, Git-based content workflow
- **Blog posts** - Full-featured blog with tags and featured posts
- **Case studies** - Showcase your work
- **No CMS required** - Direct file editing or any Markdown editor

### 🎯 **Developer Experience**
- **TypeScript** - Type-safe components and better IDE support
- **ESLint & Prettier** - Code quality and formatting
- **Hot reload** - Instant feedback during development
- **Component library** - Reusable, well-documented components

## 📚 Documentation

- **[Content Management Guide](CONTENT_MANAGEMENT.md)** - How to create and manage blog posts
- **[Security & Performance](SECURITY.md)** - Security headers, optimizations, and best practices

## 🚀 Quick Start

### Prerequisites
- Node.js 24.x or higher
- Yarn 3.4.1 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/DoneOps/public-website.git
cd public-website

# Install dependencies
yarn install

# Start development server
yarn develop

# Open http://localhost:8000
```

### Available Commands

```bash
yarn develop    # Start development server
yarn build      # Build for production
yarn serve      # Serve production build locally
yarn clean      # Clean Gatsby cache
yarn lint       # Run ESLint
yarn format     # Format code with Prettier
```

## 📝 Creating Content

### New Blog Post

1. Create a new file: `src/pages/blog/YYYY-MM-DD-post-title.md`
2. Add frontmatter:

```markdown
---
templateKey: blog-post
title: Your Post Title
date: 2024-01-15T09:00:00.000Z
description: Brief description for SEO
featuredpost: true
featuredimage: /img/your-image.jpg
tags:
  - devops
  - kubernetes
---

Your content here...
```

3. Add images to `static/img/`
4. Test locally with `yarn develop`
5. Commit and push - Netlify auto-deploys!

See [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md) for detailed instructions.

## 🏗️ Project Structure

```
public-website/
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── ...           # Feature components
│   ├── pages/            # Page components and Markdown content
│   │   ├── blog/         # Blog posts (Markdown)
│   │   ├── casestudies/  # Case studies (Markdown)
│   │   └── index.tsx     # Homepage
│   ├── templates/        # Page templates
│   ├── types/            # TypeScript type definitions
│   ├── css/              # Global styles (Tailwind)
│   └── img/              # Source images
├── static/               # Static assets
│   ├── img/              # Public images
│   └── _headers          # Netlify headers
├── gatsby-config.js      # Gatsby configuration
├── gatsby-node.js        # Gatsby Node APIs
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Styling

Uses **Tailwind CSS v3.4** with custom configuration:

- **Dark mode** - Class-based with system preference detection
- **Custom colors** - Primary, slate, and indigo palettes
- **Fluid typography** - Responsive font sizes using clamp()
- **Custom animations** - Fade-in, slide-up, and scroll animations
- **Design tokens** - CSS variables for consistent theming

## 🔧 Configuration

### Environment Variables

Create `.env.development` and `.env.production`:

```bash
GATSBY_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Netlify Configuration

Configured in `netlify.toml`:
- Build settings
- Security headers
- Caching policies
- Redirects

## 📊 Performance Metrics

- **Lighthouse Performance:** 95-100
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **Bundle Size:** ~200-300KB (gzipped)
- **CSS Size:** ~50KB (with Tailwind JIT)

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FDoneOps%2Fpublic-website?ref=badge_large)
