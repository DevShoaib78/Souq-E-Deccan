'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const teamMembers = [
  {
    name: 'Shazia Saleem',
    role: 'Counselling Psychologist / Social Activist',
    image: '/Shazia Saleem.png',
  },
  {
    name: 'Md Faheem-IJI-Haq',
    role: 'Actor / Writer / Influencer',
    image: '/Md Faheem-Ul-Haq.png',
  },
  {
    name: 'Md Ameen-Ul-Haq',
    role: 'Interior Designer / Entrepreneur',
    image: '/Md Ameen-Ul-Haq.png',
  },
]

export function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative bg-sand section-padding overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 moroccan-overlay opacity-40" />

      {/* Decorative Arch at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] border-b-2 border-gold/20 rounded-b-full opacity-40" />

      {/* Content Container */}
      <div className="relative container-heritage">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-teal mb-4 block font-bold">
            The Visionaries
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-maroon mb-6">
            Meet Our Team
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-lg text-coffee/70 max-w-2xl mx-auto leading-relaxed">
            The passionate minds bringing Souq-E-Deccan to life—dedicated to celebrating 
            and preserving the rich cultural heritage of the Deccan region.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white overflow-hidden transition-all duration-500 group-hover:shadow-xl">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-maroon/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/60" />
                </div>

                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Decorative Divider */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="w-8 h-px bg-gold" />
                    <span className="mx-3 w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="w-8 h-px bg-gold" />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-bold text-2xl text-maroon mb-3 group-hover:text-teal transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="font-body text-sm text-coffee/70 leading-relaxed tracking-wide">
                    {member.role}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                </div>

                {/* Decorative Pattern Overlay on Hover */}
                <div className="absolute inset-0 moroccan-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* External Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider at Bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-16"
        />
      </div>
    </section>
  )
}

