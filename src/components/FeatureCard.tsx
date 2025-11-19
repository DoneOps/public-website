import React from 'react'
import Card from './Card'
import type { FeatureSection } from '../types'

interface FeatureCardProps {
  featureSection: FeatureSection
}

const FeatureCard: React.FC<FeatureCardProps> = ({ featureSection }) => (
  <Card className='mb-8'>
    <p className='text-l font-semibold'>{featureSection.title}</p>
    <p className='mt-6'>{featureSection.content}</p>
  </Card>
)

export default FeatureCard
