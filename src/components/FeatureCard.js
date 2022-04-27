import React from 'react'
import Card from './Card'

const FeatureCard = ({ featureSection }) => (
  <Card className='mb-8'>
    <p className='text-l font-semibold'>{featureSection.title}</p>
    <p className='mt-6'>{featureSection.content}</p>
  </Card>
)

export default FeatureCard
