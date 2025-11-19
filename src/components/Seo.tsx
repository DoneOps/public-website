import React from 'react'
import { withPrefix } from 'gatsby'

interface SeoProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

export const Seo: React.FC<SeoProps> = ({ title, description, children }) => {
  const defaultTitle = 'DoneOps. Your Ops, Done!'
  const defaultDescription = 'Your Ops? Done. Your DevOps? Done. Your DevSecOps? Done.'
  
  const siteTitle = title || defaultTitle
  const siteDescription = description || defaultDescription

  return (
    <>
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

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

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/logo-cloud.png`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
      
      {children}
    </>
  )
}

