import React from 'react'
import github from '../../img/github-icon.svg'
import linkedin from '../../img/social/linkedin.svg'

const Footer = () => (
  <footer className='container mx-auto py-16 px-3 mt-48 mb-8 text-indigo-DEFAULT'>
    <div className='flex -mx-3'>
      <div className='flex-1 px-3'>
        <h2 className='text-lg font-semibold'>About Us</h2>
        <p className='mt-5'>
          DoneOps was founded by a group of seasoned DevOps personnel.
        </p>
      </div>
      <div className='flex-1 px-3'>
        {/* <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/terms-conditions">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul> */}
      </div>
      <div className='flex-1 px-3'>
        <h2 className='text-lg font-semibold'>Social Media</h2>
        <ul className='mt-4 leading-loose'>
          <li>
            <div style={{ float: 'left', width: '10%' }}>
              <img
                src={linkedin}
                alt='LinkedIn'
                style={{ width: '2em', height: '2em' }}
              />
            </div>
            <div style={{ float: 'right', width: '90%' }}>
              <a
                title='LinkedIn'
                href='https://www.linkedin.com/company/doneops'
              >
                LinkedIn
              </a>
            </div>
            <div style={{ clear: 'both' }} />
          </li>
          <li>
            <div style={{ float: 'left', width: '10%' }}>
              <img
                src={github}
                alt='GitHub'
                style={{ width: '2em', height: '2em' }}
              />
            </div>
            <div style={{ float: 'right', width: '90%' }}>
              <a title='GitHub' href='https://github.com/doneops'>
                GitHub
              </a>
            </div>
            <div style={{ clear: 'both' }} />
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
