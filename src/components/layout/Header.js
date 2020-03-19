import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../../static/img/logo-cloud.svg'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{ zIndex: '50' }}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img
            src={LogoIcon}
            alt="DoneOps"
            style={{ width: '2em', height: '2em' }}
          />
        </div>
        <a href="/" style={{ color: 'black' }}>
          DoneOps
        </a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          What We Do
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#yourteam">
          Meet Your Team
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <button
          type="button"
          className={`
            py-4 px-12
            bg-primary
            hover:bg-primary-darker
            rounded
            text-white
        `}
        >
          <AnchorLink href="#contactus">
            <a style={{ color: 'white' }}>Contact Us</a>
          </AnchorLink>
        </button>
      </div>
    </div>
  </header>
)
export default Header

export const SubHeader = () => (
  <header className="sticky top-0 bg-white shadow" style={{ zIndex: '50' }}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img
            src={LogoIcon}
            alt="DoneOps"
            style={{ width: '2em', height: '2em' }}
          />
        </div>
        <a href="/" style={{ color: 'black' }}>
          DoneOps
        </a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="/#features">What We Do</a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="/#yourteam">Meet Your Team</a>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Contact Us</Button>
      </div>
    </div>
  </header>
)

// export const SubHeader
