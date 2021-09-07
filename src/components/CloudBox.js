import React from 'react'

const CloudBox = ({ image, altText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">
      <img
              src={image}
              alt={altText}
              style={{ width: '3em', height: '3em', margin: 'auto'}}
            />
    </p>
    <p className="font-semibold mb-6">{altText}</p>
  </>
)

export default CloudBox
