import React from 'react'

import { SubLayout } from '../../components/layout/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render () {
    return (
      <SubLayout>
        <div
          className='relative h-64 bg-cover bg-center flex items-center justify-center'
          style={{
            backgroundImage: "url('/img/blog.jpg')"
          }}
        >
          <h1 className='text-4xl lg:text-5xl font-bold text-white bg-primary-600 px-8 py-4 rounded-lg shadow-lg'>
            Latest Stories
          </h1>
        </div>
        <section className='py-20 bg-white dark:bg-slate-900'>
          <div className='container mx-auto px-8'>
            <BlogRoll />
          </div>
        </section>
      </SubLayout>
    )
  }
}
