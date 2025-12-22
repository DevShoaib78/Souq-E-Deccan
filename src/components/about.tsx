'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      })

      return controls.stop
    }
  }, [isInView, count, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

const features = [
  {
    value: 400,
    suffix: '+',
    unit: 'Years',
    subtitle: 'of Cultural Legacy',
    description: 'Celebrating centuries of Deccani craftsmanship and traditions',
  },
  {
    value: 200,
    suffix: '+',
    unit: '',
    subtitle: 'Curated Stalls',
    description: 'Handpicked artisans, designers, and culinary masters',
  },
  {
    value: 50000,
    suffix: '+',
    unit: '',
    subtitle: 'Expected Visitors',
    description: 'A gathering of culture enthusiasts and heritage lovers',
  },
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-sand section-padding overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 moroccan-overlay opacity-50" />

      {/* Content Container */}
      <div className="relative container-heritage">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-teal mb-4 block font-bold">
            The Heritage
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-maroon mb-6">
            Where Tradition<br />Meets Tomorrow
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Quote Mark */}
              <span className="absolute -top-8 -left-4 text-8xl font-heading text-gold/20 leading-none">
                &ldquo;
              </span>

              <p className="editorial-text mb-8 relative z-10">
                <span className="text-maroon font-semibold">Souq-E-Deccan</span> is not just an
                exhibition—it is an immersive journey through the soul of the Deccan. Here, the
                ancient art of <span className="text-teal font-medium">Bidri</span> meets contemporary
                design, the aroma of <span className="text-teal font-medium">Hyderabadi biryani</span> fills
                the air, and the intricate patterns of <span className="text-teal font-medium">Kalamkari</span> tell
                stories passed down through generations.
              </p>

              <p className="editorial-text mb-8">
                This three-day cultural bazaar brings together over 200 artisans, designers,
                chefs, and creators who are the living custodians of Hyderabad&apos;s magnificent
                heritage. From the grandeur of Nizami architecture to the delicacy of
                Pochampally weaves, every corner of Souq celebrates the city&apos;s timeless charm.
              </p>

              <p className="editorial-text">
                Whether you seek rare handicrafts, authentic culinary experiences, or simply
                wish to be transported to an era of regal elegance—Souq-E-Deccan awaits
                you with open arms and a treasure trove of discoveries.
              </p>
            </div>
          </motion.div>

          {/* Visual Element - Arch Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Outer Arch Frame */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-t-full" />

              {/* Inner Content Area */}
              <div className="absolute inset-4 bg-maroon rounded-t-full overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 moroccan-overlay opacity-30" />

                {/* Content Inside Arch */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-body text-gold text-sm tracking-widest uppercase mb-4"
                    style={{ textShadow: '0 0 15px rgba(201, 162, 77, 0.4), 0 0 30px rgba(201, 162, 77, 0.2)' }}>
                    Celebrating
                  </span>
                  <h3 className="font-heading font-bold text-5xl md:text-6xl text-white mb-2"
                    style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>
                    Deccan
                  </h3>
                  <h3 className="font-heading font-bold text-5xl md:text-6xl text-gold mb-6"
                    style={{ textShadow: '0 0 20px rgba(201, 162, 77, 0.5), 0 0 40px rgba(201, 162, 77, 0.25)' }}>
                    Heritage
                  </h3>
                  <div className="w-16 h-px bg-gold/50 mb-6" />
                  <p className="font-body text-white/70 text-base max-w-xs italic">
                    A tribute to the artisans, creators, and dreamers who keep
                    our cultural legacy alive.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gold" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-gold" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gold" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="relative text-center p-8 group"
            >
              {/* Top Border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gold" />

              <h3 className="font-heading font-bold text-4xl md:text-5xl text-maroon mb-1">
                <AnimatedCounter value={feature.value} suffix={feature.suffix} isInView={statsInView} />
                {feature.unit && <span> {feature.unit}</span>}
              </h3>
              <p className="font-heading text-xl text-teal mb-3">
                {feature.subtitle}
              </p>
              <p className="font-body text-coffee/70 text-sm">
                {feature.description}
              </p>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold/50 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Future Phases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gold/20 pt-20"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-maroon mb-4">
              Souq-E-Deccan: A Growing Global Celebration
            </h3>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="font-body text-lg text-coffee/70 max-w-3xl mx-auto leading-relaxed">
              Experience the grandeur of Deccan heritage across three continents.
              Our multi-phase cultural journey brings the artistry and traditions of the Deccan to the world.
            </p>
          </div>

          {/* Phases Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 - Hyderabad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative group"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 moroccan-overlay opacity-20" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white via-sand-50 to-white border-2 border-gold/30 p-8 overflow-hidden group-hover:border-gold/60 transition-all duration-500">
                {/* Decorative Top Corner */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-maroon/5 rotate-45" />
                <div className="absolute -top-1 -left-1 w-16 h-16 border-t-2 border-l-2 border-gold/40" />

                {/* Phase Badge */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-gold" />
                    <span className="font-body font-bold text-xs tracking-[0.2em] uppercase text-maroon">
                      Phase One
                    </span>
                    <span className="w-8 h-0.5 bg-gold" />
                  </div>
                </div>

                {/* Location Title */}
                <h4 className="font-heading font-bold text-3xl md:text-4xl text-maroon mb-6 group-hover:text-teal transition-colors duration-300">
                  Hyderabad
                </h4>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Dates</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      to be announced soon
                    </p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Venue</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      Kings Crown Convention &<br />
                      Kings Classic Garden,<br />
                      Guddi Malkapur – Mehdipatnam
                    </p>
                  </div>
                </div>

                {/* Free Entry Badge */}
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal text-white font-body font-semibold text-sm tracking-wide">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free Entry
                  </div>
                </div>

                {/* Decorative Bottom Corner */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Phase 2 - Qatar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative group"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 moroccan-overlay opacity-20" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white via-sand-50 to-white border-2 border-gold/30 p-8 overflow-hidden group-hover:border-gold/60 transition-all duration-500">
                {/* Decorative Top Corner */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-maroon/5 rotate-45" />
                <div className="absolute -top-1 -left-1 w-16 h-16 border-t-2 border-l-2 border-gold/40" />

                {/* Phase Badge */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-gold" />
                    <span className="font-body font-bold text-xs tracking-[0.2em] uppercase text-maroon">
                      Phase Two
                    </span>
                    <span className="w-8 h-0.5 bg-gold" />
                  </div>
                </div>

                {/* Location Title */}
                <h4 className="font-heading font-bold text-3xl md:text-4xl text-maroon mb-6 group-hover:text-teal transition-colors duration-300">
                  Qatar
                </h4>

                {/* Details */}
                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Venue</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      to be revealed soon
                    </p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Dates</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      to be revealed soon
                    </p>
                  </div>
                </div>

                {/* Decorative Bottom Corner */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Phase 3 - KSA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative group"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 moroccan-overlay opacity-20" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white via-sand-50 to-white border-2 border-gold/30 p-8 overflow-hidden group-hover:border-gold/60 transition-all duration-500">
                {/* Decorative Top Corner */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-maroon/5 rotate-45" />
                <div className="absolute -top-1 -left-1 w-16 h-16 border-t-2 border-l-2 border-gold/40" />

                {/* Phase Badge */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-gold" />
                    <span className="font-body font-bold text-xs tracking-[0.2em] uppercase text-maroon">
                      Phase Three
                    </span>
                    <span className="w-8 h-0.5 bg-gold" />
                  </div>
                </div>

                {/* Location Title */}
                <h4 className="font-heading font-bold text-3xl md:text-4xl text-maroon mb-6 group-hover:text-teal transition-colors duration-300">
                  Saudi Arabia
                </h4>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Riyadh</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      13th & 14th March 2026
                    </p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-1 h-4 bg-gradient-to-b from-gold to-gold/30" />
                    <span className="text-gold font-heading font-semibold text-sm block mb-1">Jeddah</span>
                    <p className="font-body text-coffee text-base leading-relaxed">
                      17th & 18th March 2026
                    </p>
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gold/40 text-coffee/60 font-body font-medium text-sm italic">
                    Venue to be announced soon
                  </div>
                </div>

                {/* Decorative Bottom Corner */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

