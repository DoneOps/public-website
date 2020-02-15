import React from 'react'
import LogoIcon from '../../../static/img/logo-cloud.svg'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={LogoIcon} alt="DoneOps" style={{ width: '2em', height: '2em' }} />
        </div>
        DoneOps
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="/">Home</a>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Contact Us</Button>
      </div>
    </div>
  </header>
)

export default Header
