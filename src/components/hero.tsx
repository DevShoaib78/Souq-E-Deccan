'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { eventDetails } from '@/data'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  const formatDateRange = () => {
    const start = new Date(eventDetails.dates.start)
    const end = new Date(eventDetails.dates.end)
    const startDay = start.getDate()
    const endDay = end.getDate()
    const month = start.toLocaleDateString('en-US', { month: 'long' })
    const year = start.getFullYear()
    return `${startDay}-${endDay} ${month} ${year}`
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-28"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-maroon">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-800/50 via-maroon to-maroon-900" />

        {/* Moroccan Pattern Overlay */}
        <div className="absolute inset-0 moroccan-overlay opacity-20" />

        {/* Arch Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 arch-pattern" />

      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y, willChange: 'opacity, transform' }}
        className="relative z-10 container-heritage text-center px-4"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 border-2 border-gold/60 text-gold font-body text-sm font-bold tracking-[0.2em] uppercase">
            Hyderabad, Telangana
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-bold text-white mb-6"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-display-xl leading-none tracking-tight">
            Souq-E-Deccan
          </span>
        </motion.h1>

        {/* Gold Ornamental Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-heading text-gold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8"
        >
          {eventDetails.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experience the grandeur of Deccan heritage through an extraordinary
          celebration of art, craft, cuisine, and timeless traditions.
        </motion.p>

        {/* Event Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-white/70 font-body text-base font-semibold"
        >
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-gold flex-shrink-0" />
            <span>(to be announced soon)</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gold/50 rounded-full" />
          <div className="flex items-start sm:items-center gap-2">
            <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>{eventDetails.venue.name}, {eventDetails.venue.city}</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="group relative px-10 py-4 bg-gold text-maroon font-body font-semibold tracking-wide transition-all duration-300 hover:bg-gold-300 overflow-hidden"
          >
            <span className="relative z-10">Book Your Stall</span>
          </Link>
          <Link
            href="#about"
            className="px-10 py-4 border border-white/30 text-white font-body font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Discover More
          </Link>
        </motion.div>
      </motion.div>

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  )
}
