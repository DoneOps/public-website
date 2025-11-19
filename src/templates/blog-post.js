import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { SubLayout } from '../components/layout/Layout'
import { BlogPostTemplate } from '../components/BlogPostTemplate'
import { HTMLContent } from '../components/Content'
import { Seo } from '../components/Seo'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <SubLayout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </SubLayout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const Head = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Seo
      title={`${post.frontmatter.title} | DoneOps Blog`}
      description={post.frontmatter.description}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
