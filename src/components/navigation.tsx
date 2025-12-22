'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks, eventDetails } from '@/data'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-sand/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
          }`}
      >
        {/* Top Accent Bar */}
        <div className={`h-0.5 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
          } bg-gradient-to-r from-transparent via-gold to-transparent`} />

        <nav className="container-heritage">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'
            }`}>
            {/* Logo & Brand */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-4 group"
              onClick={closeMobileMenu}
            >
              {/* Logo Image */}
              <div className={`relative overflow-visible transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-24 h-24'
                }`}>
                <Image
                  src="/logo.png"
                  alt="Souq-E-Deccan Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Brand Name */}
              <div className={`flex flex-col transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                <span className={`font-heading font-bold tracking-wide transition-all duration-300 ${isScrolled
                  ? 'text-xl md:text-2xl text-maroon'
                  : 'text-2xl md:text-3xl text-white'
                  }`}>
                  Souq-E-Deccan
                </span>
                <span className={`font-body text-[10px] md:text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${isScrolled ? 'text-gold-600' : 'text-gold-200'
                  }`}>
                  The Deccan Market
                </span>
              </div>

              {/* Hover Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Nav Links */}
              <div className="flex items-center gap-1">
                {navLinks.filter(link => !link.isButton).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 font-body font-medium text-sm tracking-wide uppercase transition-all duration-300 group ${isScrolled
                      ? 'text-coffee hover:text-maroon'
                      : 'text-white/80 hover:text-white'
                      }`}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Hover Background */}
                    <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isScrolled ? 'bg-maroon/5' : 'bg-white/5'
                      }`} />

                    {/* Bottom Accent */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-8 ${isScrolled ? 'bg-gold' : 'bg-gold-300'
                      }`} />
                  </Link>
                ))}
              </div>

              {/* Decorative Divider */}
              <div className={`mx-6 h-8 w-px transition-colors duration-300 ${isScrolled ? 'bg-gold/30' : 'bg-white/20'
                }`} />

              {/* CTA Button */}
              <Link
                href="/booking"
                className={`group relative flex items-center gap-2 px-6 py-3 font-body font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 ${isScrolled
                  ? 'bg-maroon text-white hover:bg-maroon-600'
                  : 'bg-gold text-maroon hover:bg-gold-300'
                  }`}
              >
                <span className="relative z-10">Book Stall</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 p-2.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-maroon text-white'
                : isScrolled
                  ? 'text-maroon hover:bg-maroon/10'
                  : 'text-white hover:bg-white/10'
                }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-maroon/30 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-sand shadow-2xl overflow-hidden"
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 moroccan-overlay opacity-20" />

              {/* Top Accent */}
              <div className="h-1 bg-gradient-to-r from-gold via-gold-400 to-gold" />

              <div className="relative h-full flex flex-col pt-24 px-8">
                {/* Logo in Mobile Menu */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gold/20">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/logo.png"
                      alt="Souq-E-Deccan Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xl text-maroon">
                      Souq-E-Deccan
                    </span>
                    <span className="block font-body text-xs text-gold-600 tracking-wider">
                      The Deccan Market
                    </span>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between py-4 border-b border-gold/10 transition-colors ${link.isButton
                          ? 'text-teal font-semibold'
                          : 'text-coffee hover:text-maroon'
                          }`}
                      >
                        <span className="font-body text-lg tracking-wide">
                          {link.label}
                        </span>
                        <ArrowRight size={18} className="text-gold/50" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/booking"
                    onClick={closeMobileMenu}
                    className="block w-full py-4 bg-maroon text-white font-body font-semibold text-center tracking-wide hover:bg-maroon-600 transition-colors"
                  >
                    Book Your Stall
                  </Link>
                </motion.div>

                {/* Bottom Section */}
                <div className="mt-auto pb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 border-t border-gold/20"
                  >
                    <p className="font-body text-sm text-coffee/60 mb-1">
                      February 26-28, 2025
                    </p>
                    <p className="font-body text-sm text-coffee/60">
                      Kings Crown Convention & Kings Classic Garden, Hyderabad
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
