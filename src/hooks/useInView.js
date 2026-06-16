import { useState, useEffect } from 'react'

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: options.threshold || 0.15, ...options })

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return inView
}
