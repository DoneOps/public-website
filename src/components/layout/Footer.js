import React from 'react'
// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import youtube from '../img/social/youtube.svg'
// import github from '../img/github-icon.svg'
import linkedin from '../../img/social/linkedin.svg'

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
        <li>
            <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: '1em', height: '1em' }}
              />
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/company/doneops"
            >LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/doneops" target="_new">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/doneops" target="_new">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
