import React, { useEffect, useRef, useState, Suspense, lazy } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const Collections = lazy(() => import('./pages/Collections'))
const About = lazy(() => import('./pages/About'))
const SizeGuide = lazy(() => import('./pages/SizeGuide'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop({ lenisRef }) {
  const { pathname, search } = useLocation()

  useEffect(() => {
    requestAnimationFrame(() => {
      const lenis = lenisRef.current

      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }, [pathname, search, lenisRef])

  return null
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger to prevent jitter
    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    // Disable GSAP lag smoothing to strictly sync with Lenis
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return (
    <HashRouter>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease', willChange: 'opacity' }}>
        <ScrollToTop lenisRef={lenisRef} />
        <div className="custom-cursor-wrapper">
          <Cursor />
        </div>
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  )
}
