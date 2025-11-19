// Import Tailwind CSS
import './src/css/tailwind.css'

// Scroll animation observer
const scrollAnimationObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return
  }

  const elements = document.querySelectorAll('.animate-on-scroll')
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  elements.forEach((el) => observer.observe(el))
}

// Initialize on client entry
export const onClientEntry = () => {
  // Preload fonts
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = 'https://fonts.googleapis.com'
    document.head.appendChild(link)
  }
}

// Initialize scroll animations on route update
export const onRouteUpdate = () => {
  scrollAnimationObserver()
}

// Service Worker registration for offline support
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. Reload to display the latest version?'
  )
  if (answer === true) {
    window.location.reload()
  }
}

// Prefetch resources on hover
export const onPrefetchPathname = ({ pathname }) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = pathname
      document.head.appendChild(link)
    })
  }
}
