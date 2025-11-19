import React from 'react'

const sizes = {
  default: 'py-3 px-8',
  lg: 'py-4 px-12',
  xl: 'py-5 px-16 text-lg'
}

interface ButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  size = 'default',
  variant = 'primary',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'btn font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
