import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-up' | 'bounce-subtle'
  delay?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0
}) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  })

  const animationClass = hasIntersected ? `animate-${animation}` : 'animate-on-scroll'

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
