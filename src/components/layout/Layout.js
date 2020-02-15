import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header, { SubHeader } from './Header'
//import SubHeader from './Header'
import '../all.sass'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <LayoutHelmet />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

export const SubLayout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <LayoutHelmet />
      <SubHeader />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  )
}

// export const SubLayout

export const LayoutHelmet = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
    </Helmet>
  )
}
