import React from 'react'

const StatsBox = ({ image, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">
      <img
              src={image}
              alt={secondaryText}
              style={{ width: '5em', height: '5em' }}
            />
    </p>
    <p className="font-semibold mb-6">{secondaryText}</p>
  </>
)

export default StatsBox
