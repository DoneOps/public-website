import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import SubLayout from '../components/layout/Layout'

class TagRoute extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className='is-size-2'>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const { tag } = this.props.pageContext
    const { title } = this.props.data.site.siteMetadata
    const { totalCount } = this.props.data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <SubLayout>
        <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <div className='columns text-center'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='font-semibold text-xl'>{tagHeader}</h3>
                <ul className='taglist'>{postLinks}</ul>
                <p>
                  <Link to='/tags/'>Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </SubLayout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
