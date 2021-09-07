import React from 'react'

const ToolsBox = ({ image, altText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">
      <img
              src={image}
              alt={altText}
              style={{ width: '2em', height: '2em', margin: 'auto' }}
            />
    </p>
  </>
)

export default ToolsBox
