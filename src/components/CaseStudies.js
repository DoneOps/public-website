import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CaseStudies extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='columns is-multiline'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-6' key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage
                    ? (
                      <div className='featured-thumbnail'>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`
                          }}
                        />
                      </div>
                      )
                    : null}
                  <p className='post-meta'>
                    <Link
                      className='title has-text-primary is-size-4'
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &nbsp; </span>
                    <span className='subtitle is-size-5 is-block'>
                      <i>{post.frontmatter.description}</i>
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className='button' to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

CaseStudies.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudiesQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudies data={data} count={count} />}
  />
)
