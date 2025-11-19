# Content Management Guide

## 📝 Managing Content with Markdown

Your site now uses a simple, Git-based content management approach. All content is managed through Markdown files in the repository.

---

## 📁 Directory Structure

```
src/pages/
├── blog/                          # Blog posts
│   ├── index.js                   # Blog listing page
│   └── YYYY-MM-DD-post-title.md   # Individual blog posts
├── casestudies/                   # Case studies
│   ├── index.js                   # Case studies listing
│   └── study-name.md              # Individual case studies
└── index.tsx                      # Homepage
```

---

## ✍️ Creating a New Blog Post

### 1. Create a new Markdown file:

**File name format:** `YYYY-MM-DD-post-title.md`

**Location:** `src/pages/blog/`

**Example:** `src/pages/blog/2024-01-15-kubernetes-best-practices.md`

### 2. Add frontmatter:

```markdown
---
templateKey: blog-post
title: Your Blog Post Title
date: 2024-01-15T09:00:00.000Z
description: A brief description of your blog post for SEO and previews
featuredpost: true
featuredimage: /img/your-image.jpg
tags:
  - devops
  - kubernetes
  - cicd
---

Your blog post content goes here...

## Heading 2

Regular paragraph text with **bold** and *italic* formatting.

### Heading 3

- Bullet point 1
- Bullet point 2
- Bullet point 3

```javascript
// Code blocks with syntax highlighting
const example = "Hello World";
console.log(example);
```

![Alt text for image](/img/your-image.jpg)

[Link text](https://example.com)
```

---

## 🎨 Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `templateKey` | ✅ Yes | Template to use | `blog-post` or `case-study` |
| `title` | ✅ Yes | Post title | `"Kubernetes Best Practices"` |
| `date` | ✅ Yes | Publication date (ISO 8601) | `2024-01-15T09:00:00.000Z` |
| `description` | ✅ Yes | SEO description | `"Learn the best practices..."` |
| `featuredpost` | ❌ No | Show in featured section | `true` or `false` |
| `featuredimage` | ❌ No | Featured image path | `/img/kubernetes.jpg` |
| `tags` | ❌ No | Post tags (array) | `[devops, kubernetes]` |

---

## 📸 Managing Images

### 1. Add images to the static directory:

**Location:** `static/img/`

**Example:** `static/img/kubernetes-architecture.jpg`

### 2. Reference in Markdown:

```markdown
![Kubernetes Architecture](/img/kubernetes-architecture.jpg)
```

### 3. Image Best Practices:

- ✅ **Optimize before upload** - Use tools like TinyPNG or ImageOptim
- ✅ **Use descriptive names** - `kubernetes-architecture.jpg` not `img123.jpg`
- ✅ **Recommended size** - Max width 2048px for blog images
- ✅ **Format** - Use JPG for photos, PNG for graphics, SVG for logos
- ✅ **Alt text** - Always include descriptive alt text for accessibility

---

## 🏷️ Managing Tags

Tags are automatically extracted from your blog posts and case studies. Tag pages are generated automatically at `/tags/[tag-name]/`.

### Available Tags:
- `devops`
- `devsecops`
- `cicd`
- `kubernetes`
- `security`
- `cloud`
- `gitops`
- `cncf`

### Adding New Tags:

Just add them to the `tags` array in your frontmatter:

```yaml
tags:
  - devops
  - kubernetes
  - new-tag
```

The tag page will be automatically created at `/tags/new-tag/`.

---

## 📄 Creating a Case Study

### 1. Create a new Markdown file:

**Location:** `src/pages/casestudies/`

**Example:** `src/pages/casestudies/acme-corp-migration.md`

### 2. Add frontmatter:

```markdown
---
templateKey: case-study
title: Acme Corp Cloud Migration
date: 2024-01-15T09:00:00.000Z
description: How we helped Acme Corp migrate to Kubernetes
featuredpost: true
featuredimage: /img/acme-migration.jpg
tags:
  - cloud
  - kubernetes
  - migration
---

## Challenge

Acme Corp needed to migrate their monolithic application...

## Solution

We implemented a phased migration approach...

## Results

- 50% reduction in infrastructure costs
- 99.9% uptime
- 10x faster deployments
```

---

## 🚀 Publishing Workflow

### Local Development:

```bash
# 1. Create your new Markdown file
touch src/pages/blog/2024-01-15-new-post.md

# 2. Add content and frontmatter

# 3. Test locally
yarn develop

# 4. View at http://localhost:8000/blog/
```

### Publishing to Production:

```bash
# 1. Commit your changes
git add .
git commit -m "Add new blog post: Kubernetes Best Practices"

# 2. Push to GitHub
git push origin main

# 3. Netlify automatically builds and deploys
# Your post will be live in ~2-3 minutes
```

---

## 📝 Markdown Syntax Reference

### Headings:
```markdown
# H1 - Page Title
## H2 - Section
### H3 - Subsection
#### H4 - Minor heading
```

### Text Formatting:
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

### Lists:
```markdown
- Unordered list item 1
- Unordered list item 2
  - Nested item

1. Ordered list item 1
2. Ordered list item 2
```

### Links:
```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Hover title")
```

### Images:
```markdown
![Alt text](/img/image.jpg)
![Alt text with title](/img/image.jpg "Image title")
```

### Code Blocks:
````markdown
```javascript
const greeting = "Hello World";
console.log(greeting);
```

```bash
yarn install
yarn develop
```
````

### Blockquotes:
```markdown
> This is a blockquote.
> It can span multiple lines.
```

### Horizontal Rule:
```markdown
---
```

### Tables:
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

---

## 🔍 SEO Best Practices

### 1. Title:
- Keep under 60 characters
- Include primary keyword
- Make it compelling

### 2. Description:
- Keep under 160 characters
- Include primary and secondary keywords
- Write for humans, not just search engines

### 3. URL (filename):
- Use descriptive, keyword-rich names
- Use hyphens, not underscores
- Keep it short and readable
- Example: `kubernetes-deployment-strategies.md`

### 4. Content:
- Use headings (H2, H3) to structure content
- Include relevant keywords naturally
- Add alt text to all images
- Link to related internal content
- Aim for 800+ words for better SEO

### 5. Images:
- Optimize file size (< 200KB for web)
- Use descriptive filenames
- Add alt text
- Include captions when relevant

---

## 📊 Content Checklist

Before publishing, ensure:

- [ ] Frontmatter is complete and correct
- [ ] Title is compelling and SEO-friendly
- [ ] Description is under 160 characters
- [ ] Date is in correct ISO 8601 format
- [ ] Featured image is optimized and uploaded
- [ ] All images have alt text
- [ ] Links are working
- [ ] Code blocks have syntax highlighting
- [ ] Content is proofread
- [ ] Tags are relevant and consistent
- [ ] Tested locally with `yarn develop`

---

## 🛠️ Troubleshooting

### Post not showing up?

1. Check frontmatter syntax (YAML is strict about indentation)
2. Ensure `templateKey` is correct (`blog-post` or `case-study`)
3. Verify date format is ISO 8601
4. Run `yarn clean && yarn develop`

### Images not loading?

1. Verify image is in `static/img/`
2. Check path starts with `/img/` not `img/`
3. Ensure filename matches exactly (case-sensitive)

### Build failing?

1. Check for syntax errors in Markdown
2. Verify all required frontmatter fields are present
3. Run `yarn build` locally to see detailed errors

---

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [ISO 8601 Date Format](https://en.wikipedia.org/wiki/ISO_8601)
- [SEO Best Practices](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

---

## 💡 Tips & Tricks

### Quick Date Generation:

```bash
# Get current date in ISO 8601 format
date -u +"%Y-%m-%dT%H:%M:%S.000Z"
```

### Bulk Image Optimization:

```bash
# Using ImageMagick
mogrify -resize 2048x -quality 85 static/img/*.jpg

# Using pngquant for PNGs
pngquant --quality=65-80 static/img/*.png
```

### Preview Before Publishing:

Always run `yarn develop` and check:
- Blog listing page: `http://localhost:8000/blog/`
- Your new post: `http://localhost:8000/blog/your-post-slug/`
- Tag pages: `http://localhost:8000/tags/your-tag/`

---

## 🎯 Content Strategy

### Blog Post Ideas:
- Technical tutorials
- Case studies and success stories
- Industry trends and analysis
- Best practices and tips
- Tool comparisons
- Problem-solving guides

### Posting Frequency:
- Aim for 1-2 posts per month minimum
- Quality over quantity
- Maintain consistent schedule

### Engagement:
- Respond to comments (if enabled)
- Share on social media
- Cross-link related posts
- Update old posts with new information

---

**Happy Writing! 🚀**

