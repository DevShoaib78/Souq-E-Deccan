'use client'

import { motion } from 'framer-motion'
import { MapPin, Shirt, Building2, UtensilsCrossed } from 'lucide-react'
import type { LayoutType } from '@/types/booking'
import { LAYOUT_CONFIGS } from '@/types/booking'

interface LayoutSelectorProps {
  selectedLayout: LayoutType
  onLayoutChange: (layout: LayoutType) => void
}

const layoutIcons: Record<LayoutType, React.ReactNode> = {
  'lifestyle': <Shirt size={20} />,
  'real-estate-food': <Building2 size={20} />,
}

export function LayoutSelector({ selectedLayout, onLayoutChange }: LayoutSelectorProps) {
  return (
    <div className="w-full">
      <h3 className="font-body text-sm font-medium text-coffee/70 mb-3 text-center md:text-left">
        Select a Zone
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {LAYOUT_CONFIGS.map((config) => {
          const isSelected = selectedLayout === config.id
          
          return (
            <motion.button
              key={config.id}
              onClick={() => onLayoutChange(config.id)}
              className={`relative p-4 md:p-5 border-2 text-left transition-all duration-300 ${
                isSelected
                  ? 'bg-maroon border-maroon'
                  : 'bg-white border-gold/30 hover:border-gold hover:bg-sand-50'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3">
                <div className={`p-2 ${isSelected ? 'bg-gold text-maroon' : 'bg-gold/10 text-gold'}`}>
                  {layoutIcons[config.id]}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-heading font-bold text-lg ${
                    isSelected ? 'text-white' : 'text-maroon'
                  }`}>
                    {config.name}
                  </h4>
                  <p className={`font-body text-xs mt-1 line-clamp-2 ${
                    isSelected ? 'text-white/70' : 'text-coffee/60'
                  }`}>
                    {config.description}
                  </p>
                </div>
              </div>

              {/* Category Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {config.categories.map((category) => (
                  <span
                    key={category}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-body ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-gold/10 text-coffee/70'
                    }`}
                  >
                    {category === 'food' && <UtensilsCrossed size={10} />}
                    {category === 'lifestyle' && <Shirt size={10} />}
                    {category === 'real-estate' && <Building2 size={10} />}
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </span>
                ))}
              </div>

              {/* Selected Indicator */}
              {isSelected && (
                <motion.div
                  layoutId="layoutIndicator"
                  className="absolute -top-0.5 -right-0.5 w-6 h-6 bg-gold flex items-center justify-center"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <svg className="w-3 h-3 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

