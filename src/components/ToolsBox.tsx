import React from 'react'

interface ToolsBoxProps {
  image: string
  altText: string
  className?: string
}

const ToolsBox: React.FC<ToolsBoxProps> = ({ image, altText, className = '' }) => (
  <div className={`flex items-center justify-center p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-medium transition-all duration-200 hover:-translate-y-1 ${className}`}>
    <img
      src={image}
      alt={altText}
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  </div>
)

export default ToolsBox
