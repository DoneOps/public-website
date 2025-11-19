import React from 'react'
import { kebabCase } from 'change-case'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout/Layout'
import { Seo } from '../../components/Seo'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Layout>
    <section className='section'>
      <div className='container content'>
        <div className='columns'>
          <div
            className='column text-center is-10'
            style={{ marginBottom: '6rem' }}
          >
            <h1 className='title is-size-2 is-bold-light'>Tags</h1>
            <ul className='taglist'>
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const Head = ({ data }) => {
  const title = data.site.siteMetadata.title
  return <Seo title={`Tags | ${title}`} />
}

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`
