import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../../static/img/logo-left.svg'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{ zIndex: '50' }}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center">
        <a href="/" style={{ color: 'black' }}>
          <img
            src={LogoIcon}
            alt="DONEOPS"
            style={{ width: '10em', height: '5em' }}
          />
          </a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features" style={{"font-weight": "bold"}}>
          Why DoneOps?
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#testimonials" style={{"font-weight": "bold"}}>
          Customers
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#toolkit" style={{"font-weight": "bold"}}>
          Capabilities
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="/blog" style={{"font-weight": "bold"}}>Blog</a>
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
    <div className="flex items-center">
        <a href="/" style={{ color: 'black' }}>
          <img
            src={LogoIcon}
            alt="DONEOPS"
            style={{ width: '10em', height: '5em' }}
          />
          </a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features" style={{"font-weight": "bold"}}>
          Why DoneOps?
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#toolkit" style={{"font-weight": "bold"}}>
          Capabilities
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="/blog" style={{"font-weight": "bold"}}>Blog</a>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Contact Us</Button>
      </div>
    </div>
  </header>
)

// export const SubHeader
