import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import SizeGuide from './pages/SizeGuide'
import Contact from './pages/Contact'
import Loader from './components/Loader'

function ScrollToTop({ lenisRef }) {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const lenis = lenisRef.current

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, search, lenisRef])

  return null
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    lenisRef.current = lenis

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <ScrollToTop lenisRef={lenisRef} />
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
