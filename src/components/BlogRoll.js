import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              key={post.id}
              className={`bg-white dark:bg-slate-800 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden ${
                post.frontmatter.featuredpost ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {post.frontmatter.featuredimage && (
                <div className='h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden'>
                  <img
                    src={post.frontmatter.featuredimage}
                    alt={`featured image thumbnail for post ${post.frontmatter.title}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
              <div className='p-6'>
                <header className='mb-4'>
                  <Link
                    className='text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors'
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <p className='text-sm text-slate-500 dark:text-slate-400 mt-2'>
                    {post.frontmatter.date}
                  </p>
                </header>
                <p className='text-slate-700 dark:text-slate-300 mb-4 line-clamp-4'>
                  {post.excerpt}
                </p>
                <Link 
                  className='inline-block btn btn-primary text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform'
                  to={post.fields.slug}
                >
                  Keep Reading →
                </Link>
              </div>
            </article>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                featuredpost
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
