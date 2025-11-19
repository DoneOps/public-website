import React from 'react'

const SkipLinks: React.FC = () => {
  return (
    <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:left-4 focus-within:z-50">
      <a
        href="#main-content"
        className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 mr-4"
      >
        Skip to main content
      </a>
      <a
        href="#contactus"
        className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Skip to contact
      </a>
    </div>
  )
}

export default SkipLinks
