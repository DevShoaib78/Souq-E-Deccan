'use client'

import { X, Check } from 'lucide-react'

interface StallLegendProps {
  showBooked?: boolean
}

export function StallLegend({ showBooked = true }: StallLegendProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 bg-white/50 border border-gold/20">
      {/* Available */}
      <div className="flex items-center gap-2">
        <div 
          className="w-6 h-6 border-2 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(201, 162, 77, 0.15)',
            borderColor: 'rgba(201, 162, 77, 0.5)',
          }}
        />
        <span className="font-body text-sm text-coffee">Available</span>
      </div>

      {/* Selected */}
      <div className="flex items-center gap-2">
        <div 
          className="w-6 h-6 border-2 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(46, 124, 122, 0.6)',
            borderColor: 'rgba(46, 124, 122, 1)',
          }}
        >
          <Check className="text-white" size={12} strokeWidth={3} />
        </div>
        <span className="font-body text-sm text-coffee">Selected</span>
      </div>

      {/* Booked */}
      {showBooked && (
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 border-2 flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(220, 38, 38, 0.4)',
              borderColor: 'rgba(220, 38, 38, 0.8)',
            }}
          >
            <X className="text-red-600" size={12} strokeWidth={3} />
          </div>
          <span className="font-body text-sm text-coffee">Booked</span>
        </div>
      )}
    </div>
  )
}





