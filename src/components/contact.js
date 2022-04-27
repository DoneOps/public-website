import React from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import fetch from 'node-fetch'
// import Layout from './layout/Layout'

const RECAPTCHA_KEY = '6LdFXNkUAAAAAETK8WJo2LBk8t974hRunbG-lkyR'
// if (typeof RECAPTCHA_KEY === 'undefined') {
//   throw new Error(`
//   Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined!
//   You probably forget to set it in your Netlify build environment variables.
//   Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
//   Note this demo is specifically for Recaptcha v2
//   `)
// }

function encode (data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function Contact () {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error)) // eslint-disable-line no-undef
  }

  return (
    <form
      name='contact-recaptcha'
      method='post'
      action='/success'
      data-netlify='true'
      data-netlify-recaptcha='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      <p className='hidden'>
        <label htmlFor='bot'>
          Don’t fill this out if youre human:{' '}
          <input type='text' name='bot-field' />
        </label>
      </p>
      <p>
        <label htmlFor='name'>
          Your name:
          <br />
          <input type='text' name='name' onChange={handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor='email'>
          Your email:
          <br />
          <input type='email' name='email' onChange={handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor='message'>
          Message:
          <br />
          <textarea name='message' onChange={handleChange} />
        </label>
      </p>
      <Recaptcha theme='light' ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
      <p>
        <button
          type='submit'
          className={`
            py-4 px-12
            bg-primary
            hover:bg-primary-darker
            rounded
            text-white
        `}
        >
          Send
        </button>
      </p>
    </form>
  )
}
