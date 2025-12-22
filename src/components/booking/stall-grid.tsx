'use client'

import { motion } from 'framer-motion'
import type { Stall, StallCategory } from '@/types'
import { categoryNames } from '@/data'

interface StallGridProps {
  stalls: Record<string, Stall[]>
  selectedStalls: Stall[]
  onStallSelect: (stall: Stall) => void
}

const getCategoryGradient = (category: StallCategory): string => {
  const gradients: Record<StallCategory, string> = {
    food: 'from-amber-50 to-amber-100',
    crafts: 'from-teal-50 to-teal-100',
    fashion: 'from-rose-50 to-rose-100',
    lifestyle: 'from-blue-50 to-blue-100',
    art: 'from-purple-50 to-purple-100',
    premium: 'from-gold-50 to-gold-100',
  }
  return gradients[category] || 'from-sand-100 to-sand-200'
}

export function StallGrid({ stalls, selectedStalls, onStallSelect }: StallGridProps) {
  const rows = Object.keys(stalls).sort()
  const selectedIds = selectedStalls.map(s => s.id)

  const getStallClasses = (stall: Stall) => {
    const baseClasses = 'relative flex flex-col items-center justify-center p-2 md:p-3 transition-all duration-300 cursor-pointer border-2'
    
    if (stall.status === 'booked') {
      return `${baseClasses} bg-coffee/10 border-coffee/20 cursor-not-allowed opacity-60`
    }
    
    if (selectedIds.includes(stall.id)) {
      return `${baseClasses} bg-teal border-teal text-white shadow-lg scale-105 z-10`
    }
    
    return `${baseClasses} bg-gradient-to-br ${getCategoryGradient(stall.category)} border-gold/30 hover:border-gold hover:shadow-md hover:scale-102`
  }

  const getSizeClasses = (size: string) => {
    const sizes: Record<string, string> = {
      small: 'w-14 h-14 md:w-16 md:h-16',
      medium: 'w-16 h-16 md:w-20 md:h-20',
      large: 'w-20 h-20 md:w-24 md:h-24',
      corner: 'w-24 h-24 md:w-28 md:h-28',
    }
    return sizes[size] || sizes.medium
  }

  return (
    <div className="relative">
      {/* Grid Header - Stage/Entrance Indicator */}
      <div className="relative mb-8">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <div className="px-8 py-3 bg-maroon text-white font-body text-sm tracking-widest uppercase">
            Main Stage
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>

      {/* Stall Layout */}
      <div className="space-y-6">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={row}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: rowIndex * 0.1 }}
            className="relative"
          >
            {/* Row Label */}
            <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-maroon text-white font-heading font-bold text-sm md:text-base">
              {row}
            </div>

            {/* Row Category Label */}
            <div className="mb-2 pl-1">
              <span className="font-body text-xs text-coffee/60 tracking-wide">
                {categoryNames[stalls[row][0]?.category] || 'General'}
              </span>
            </div>

            {/* Stalls */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-start">
              {stalls[row].map((stall) => (
                <motion.button
                  key={stall.id}
                  whileTap={{ scale: stall.status === 'booked' ? 1 : 0.95 }}
                  onClick={() => stall.status !== 'booked' && onStallSelect(stall)}
                  className={`${getStallClasses(stall)} ${getSizeClasses(stall.size)}`}
                  disabled={stall.status === 'booked'}
                  aria-label={`Stall ${stall.id} - ${stall.status === 'booked' ? 'Booked' : selectedIds.includes(stall.id) ? 'Selected' : 'Available'}`}
                >
                  {/* Stall Number */}
                  <span className={`font-heading font-bold text-sm md:text-base ${
                    selectedIds.includes(stall.id) ? 'text-white' : stall.status === 'booked' ? 'text-coffee/40' : 'text-maroon'
                  }`}>
                    {stall.id}
                  </span>
                  
                  {/* Price Badge */}
                  <span className={`text-[10px] md:text-xs font-body ${
                    selectedIds.includes(stall.id) ? 'text-white/80' : stall.status === 'booked' ? 'text-coffee/30' : 'text-coffee/60'
                  }`}>
                    ₹{(stall.price / 1000).toFixed(0)}k
                  </span>

                  {/* Booked Indicator */}
                  {stall.status === 'booked' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-px bg-coffee/30 transform rotate-45" />
                    </div>
                  )}

                  {/* Selected Checkmark */}
                  {selectedIds.includes(stall.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-maroon rounded-full flex items-center justify-center"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Size Indicator for Large/Corner */}
                  {(stall.size === 'large' || stall.size === 'corner') && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-body uppercase tracking-wider ${
                      selectedIds.includes(stall.id) ? 'text-gold' : 'text-gold/70'
                    }`}>
                      {stall.size}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid Footer - Exit Indicator */}
      <div className="relative mt-8">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <div className="px-8 py-3 border border-gold/30 text-coffee font-body text-sm tracking-widest uppercase">
            Entry / Exit
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>
    </div>
  )
}



