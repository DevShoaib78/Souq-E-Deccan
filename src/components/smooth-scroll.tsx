'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      duration: isMobile ? 0.8 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
      touchMultiplier: isMobile ? 1.5 : 2,
      wheelMultiplier: 1,
      infinite: false,
    })

    // Optimized RAF loop with throttle
    let rafId: number
    function raf(time: number) {
      lenisRef.current?.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          if (targetElement) {
            lenisRef.current?.scrollTo(targetElement as HTMLElement, {
              offset: -80, // Account for fixed navbar
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      lenisRef.current?.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}



