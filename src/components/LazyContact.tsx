import React, { Suspense } from 'react'

// Lazy load the contact component
const Contact = React.lazy(() => import('./contact'))

interface LazyContactProps {
  className?: string
}

const ContactSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-4 p-8">
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mx-auto"></div>
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
    <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
    <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-32 mx-auto"></div>
  </div>
)

const LazyContact: React.FC<LazyContactProps> = ({ className = '' }) => {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <div className={className}>
        <Contact />
      </div>
    </Suspense>
  )
}

export default LazyContact
