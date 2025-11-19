import React from 'react'
import Footer from './Footer'
import Header, { SubHeader } from './Header'
import DarkModeToggle from '../DarkModeToggle'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="text-slate-900 dark:text-slate-100">{children}</main>
      <Footer />
      {/* Dark mode toggle positioned fixed */}
      <div className="fixed bottom-6 right-6 z-50">
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Layout

export const SubLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <SubHeader />
      <main className="text-slate-900 dark:text-slate-100">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <DarkModeToggle />
      </div>
    </div>
  )
}
