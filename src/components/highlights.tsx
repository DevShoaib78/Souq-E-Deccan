'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { UtensilsCrossed, Palette, Shirt, Home, Paintbrush, ArrowRight, Building2, CarFront, DoorOpen, Users, Shield, Building, ShoppingBag, Utensils, Mic, Gamepad2 } from 'lucide-react'
import { expoCategories } from '@/data'

const iconMap: Record<string, React.ReactNode> = {
  utensils: <UtensilsCrossed size={32} />,
  palette: <Palette size={32} />,
  shirt: <Shirt size={32} />,
  home: <Home size={32} />,
  paintbrush: <Paintbrush size={32} />,
  building: <Building size={32} />,
  shopping: <ShoppingBag size={32} />,
  restaurant: <Utensils size={32} />,
  mic: <Mic size={32} />,
  gamepad: <Gamepad2 size={32} />,
}

const keyFeatures = [
  {
    icon: <Building2 size={28} />,
    title: 'Combined Function Halls',
    description: 'Two function halls seamlessly integrated for an enhanced and spacious experience',
  },
  {
    icon: <CarFront size={28} />,
    title: 'Ample Parking & Valet',
    description: 'Generous parking space with complimentary valet service for your convenience',
  },
  {
    icon: <DoorOpen size={28} />,
    title: 'Dedicated Entry & Exit',
    description: 'Separate entry and exit points for smooth, organized visitor flow',
  },
  {
    icon: <Users size={28} />,
    title: 'Enhanced Crowd Management',
    description: 'Focused strategies ensuring a comfortable and well-managed environment',
  },
  {
    icon: <Shield size={28} />,
    title: 'Safety & Security',
    description: 'Comprehensive safety measures and trained security personnel on-site',
  },
]

export function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative bg-maroon section-padding overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-overlay opacity-10" />

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative container-heritage">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4 block font-bold">
            What Awaits You
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Expo Highlights
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            A complete family experience celebrating Deccan heritage through curated pavilions, 
            entertainment, dining, shopping, and much more.
          </p>
        </motion.div>

        {/* Category Cards - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expoCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative"
            >
              <div className="relative h-full bg-sand overflow-hidden transition-all duration-500 group-hover:shadow-2xl min-h-[280px]">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-400 to-gold" />

                {/* Pattern Background */}
                <div className="absolute inset-0 moroccan-overlay opacity-30" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Background Icon (Decorative) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-maroon/10 group-hover:text-maroon/15 transition-colors duration-500">
                      <div className="scale-[4] md:scale-[4.5]">
                        {iconMap[category.icon]}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-heading font-bold text-2xl lg:text-3xl text-maroon mb-3 group-hover:text-teal transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 font-body text-coffee/70 leading-relaxed mb-6 flex-grow">
                    {category.description}
                  </p>

                  {/* Bottom Action (keep existing hover behavior) */}
                  <div className="relative z-10 flex items-center justify-end">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gold group-hover:text-maroon">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-500" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/30 group-hover:border-gold transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/30 group-hover:border-gold transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 lg:mt-32"
        >
          {/* Section Divider */}
          <div className="w-20 h-0.5 bg-gold mx-auto mb-12" />

          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Key Features
            </h3>
            <p className="font-body text-white/60 max-w-2xl mx-auto">
              Every detail curated for your comfort and enjoyment
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group relative bg-sand/5 backdrop-blur-sm border border-gold/20 p-6 hover:bg-sand/10 hover:border-gold/40 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-gold/10 text-gold group-hover:bg-gold group-hover:text-maroon transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-heading font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 lg:p-12 bg-sand/5 backdrop-blur-sm border border-gold/20">
            <div className="text-center sm:text-left">
              <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                Ready to Be Part of the Celebration?
              </h3>
              <p className="font-body text-white/60">
                Join 200+ exhibitors and secure your space at Souq-E-Deccan
              </p>
            </div>
            <Link
              href="/booking"
              className="flex-shrink-0 px-8 py-4 bg-gold text-maroon font-body font-semibold tracking-wide hover:bg-gold-300 transition-colors duration-300"
            >
              Book Your Stall
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

