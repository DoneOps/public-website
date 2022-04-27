import React from 'react'

import { SubLayout } from '../../components/layout/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render () {
    return (
      <SubLayout>
        <div
          className='full-width-image-container margin-top-0'
          style={{
            backgroundImage: "url('/img/blog.jpg')"
          }}
        >
          <h1
            className='has-text-weight-bold is-size-1'
            style={{
              boxShadow: '0.5rem 0 0 #a4c1e2, -0.5rem 0 0 #23827f',
              backgroundColor: '#a4c1e2',
              color: 'black',
              padding: '1rem'
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <BlogRoll />
            </div>
          </div>
        </section>
      </SubLayout>
    )
  }
}
