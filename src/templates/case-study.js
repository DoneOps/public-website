import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { SubLayout } from '../components/layout/Layout'
import { CaseStudyTemplate } from '../components/CaseStudyTemplate'
import { HTMLContent } from '../components/Content'
import { Seo } from '../components/Seo'

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <SubLayout>
      <CaseStudyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </SubLayout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default CaseStudy

export const Head = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Seo
      title={`${post.frontmatter.title} | DoneOps Case Studies`}
      description={post.frontmatter.description}
    />
  )
}

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
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
