import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import type { ImageInfo } from '../types'

interface PreviewCompatibleImageProps {
  imageInfo: ImageInfo
}

const PreviewCompatibleImage: React.FC<PreviewCompatibleImageProps> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
        style={imageStyle}
      />
    )
  }

  if (childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        alt={alt}
        style={imageStyle}
      />
    )
  }

  if (!!image && typeof image === 'string') {
    return <img style={imageStyle} src={image} alt={alt} />
  }

  return null
}

export default PreviewCompatibleImage
