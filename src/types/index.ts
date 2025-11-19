// Global type definitions
export interface SiteMetadata {
  title: string
  description: string
  author: {
    name: string
  }
  siteUrl: string
}

export interface FeatureSection {
  title: string
  content: string
  sectionTitle?: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  github?: string
}

export interface ImageInfo {
  alt?: string
  childImageSharp?: any
  image?: any
  style?: React.CSSProperties
}

// Gatsby specific types
declare global {
  interface Window {
    ___loader: any
  }
}

export {}
