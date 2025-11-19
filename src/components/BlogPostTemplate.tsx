import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'change-case'
import { Link } from 'gatsby'
import Content, { HTMLContent } from './Content'

interface BlogPostTemplateProps {
  content: any
  contentComponent?: React.ComponentType<any>
  description?: string
  tags?: string[]
  title?: string
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content

  return (
    <article className='py-12 lg:py-20 bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Article Header */}
          <header className='mb-8 lg:mb-12'>
            <h1 className='text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight'>
              {title}
            </h1>
            {description && (
              <p className='text-xl text-slate-600 dark:text-slate-400 leading-relaxed'>
                {description}
              </p>
            )}
          </header>

          {/* Article Content */}
          <div className='prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-slate-900 dark:prose-headings:text-slate-100
            prose-p:text-slate-700 dark:prose-p:text-slate-300
            prose-a:text-primary-600 dark:prose-a:text-primary-400
            prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 dark:prose-strong:text-slate-100
            prose-code:text-primary-600 dark:prose-code:text-primary-400
            prose-code:bg-slate-100 dark:prose-code:bg-slate-800
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950
            prose-img:rounded-lg prose-img:shadow-lg
            prose-blockquote:border-primary-500 dark:prose-blockquote:border-primary-400
            prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300'>
            <PostContent content={content} />
          </div>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <footer className='mt-12 pt-8 border-t border-slate-200 dark:border-slate-800'>
              <h4 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4'>
                Tags
              </h4>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Link
                    key={`${tag}tag`}
                    to={`/tags/${kebabCase(tag)}/`}
                    className='inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors'
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </footer>
          )}
        </div>
      </div>
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string
}
