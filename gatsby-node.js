const { kebabCase } = require('change-case')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading markdown files', result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog post pages
  posts.forEach((edge) => {
    const { id } = edge.node
    const templateKey = edge.node.frontmatter.templateKey
    const slug = edge.node.fields.slug

    if (!templateKey) {
      reporter.warn(`No templateKey found for post: ${slug}`)
      return
    }

    reporter.info(`Creating page: ${slug} with template: ${templateKey}`)

    createPage({
      path: slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(`src/templates/${String(templateKey)}.js`),
      context: {
        id
      }
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((edge) => {
    if (edge?.node?.frontmatter?.tags) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = [...new Set(tags)]

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${kebabCase(tag)}/`

    reporter.info(`Creating tag page: ${tagPath}`)

    createPage({
      path: tagPath,
      component: path.resolve('src/templates/tags.js'),
      context: {
        tag
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    
    reporter.info(`Creating slug for node: ${value}`)
    
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}

// Improve build performance
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@templates': path.resolve(__dirname, 'src/templates'),
      }
    }
  })
}
