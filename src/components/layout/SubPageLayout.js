import React from 'react'
import Footer from './Footer'
import Header from './SubPageHeader'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
