import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../../static/img/logo-left.svg'
import Button from '../Button'

/* jscpd:ignore-start */
const Header = () => (
  <header className='sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md dark:shadow-slate-800/50 border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300'>
    <div className='container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8'>
      <div className='flex items-center'>
        <a href='/' className='transition-transform hover:scale-105'>
          <img
            src={LogoIcon}
            alt='DONEOPS'
            className='w-40 h-20 object-contain'
          />
        </a>
      </div>
      <nav className='flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0'>
        <AnchorLink
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
          href='#features'
        >
          Why DoneOps?
        </AnchorLink>
        <AnchorLink
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
          href='#toolkit'
        >
          Capabilities
        </AnchorLink>
        <a 
          href='/blog'
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
        >
          Blog
        </a>
        <div className='hidden md:block ml-4'>
          <AnchorLink href='#contactus'>
            <button
              type='button'
              className='btn btn-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200'
            >
              Contact Us
            </button>
          </AnchorLink>
        </div>
      </nav>
    </div>
  </header>
)
export default Header

export const SubHeader = () => (
  <header className='sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md dark:shadow-slate-800/50 border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300'>
    <div className='container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8'>
      <div className='flex items-center'>
        <a href='/' className='transition-transform hover:scale-105'>
          <img
            src={LogoIcon}
            alt='DONEOPS'
            className='w-40 h-20 object-contain'
          />
        </a>
      </div>
      <nav className='flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0'>
        <a
          href='/#features'
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
        >
          Why DoneOps?
        </a>
        <a
          href='/#toolkit'
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
        >
          Capabilities
        </a>
        <a 
          href='/blog'
          className='px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
        >
          Blog
        </a>
        <div className='hidden md:block ml-4'>
          <a href='/#contactus'>
            <button
              type='button'
              className='btn btn-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200'
            >
              Contact Us
            </button>
          </a>
        </div>
      </nav>
    </div>
  </header>
)
/* jscpd:ignore-end */
// export const SubHeader
