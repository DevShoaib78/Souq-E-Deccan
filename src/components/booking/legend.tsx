'use client'

import { motion } from 'framer-motion'

const legendItems = [
  {
    status: 'available',
    label: 'Available',
    className: 'bg-gradient-to-br from-sand-100 to-sand-200 border-gold/30',
  },
  {
    status: 'selected',
    label: 'Selected',
    className: 'bg-teal border-teal',
  },
  {
    status: 'booked',
    label: 'Booked',
    className: 'bg-coffee/10 border-coffee/20 opacity-60',
  },
]

const sizeItems = [
  { size: 'Small', dimensions: '6×6 ft', price: '₹15,000' },
  { size: 'Medium', dimensions: '8×8 ft', price: '₹25,000' },
  { size: 'Large', dimensions: '10×10 ft', price: '₹40,000' },
  { size: 'Corner', dimensions: '12×12 ft', price: '₹55,000' },
]

export function Legend() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-sand-50 border border-gold/20 p-6"
    >
      <h3 className="font-heading font-semibold text-lg text-maroon mb-4">
        Legend
      </h3>
      
      {/* Status Legend */}
      <div className="mb-6">
        <h4 className="font-body text-sm text-coffee/60 mb-3 uppercase tracking-wider">
          Stall Status
        </h4>
        <div className="flex flex-wrap gap-4">
          {legendItems.map((item) => (
            <div key={item.status} className="flex items-center gap-2">
              <div className={`w-6 h-6 border-2 ${item.className}`}>
                {item.status === 'booked' && (
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-px bg-coffee/30 transform rotate-45" />
                    </div>
                  </div>
                )}
              </div>
              <span className="font-body text-sm text-coffee">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Size & Pricing Legend */}
      <div>
        <h4 className="font-body text-sm text-coffee/60 mb-3 uppercase tracking-wider">
          Stall Sizes & Pricing
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sizeItems.map((item) => (
            <div 
              key={item.size} 
              className="p-3 bg-white/50 border border-gold/10 text-center"
            >
              <span className="block font-heading font-semibold text-maroon">
                {item.size}
              </span>
              <span className="block font-body text-xs text-coffee/60 mt-1">
                {item.dimensions}
              </span>
              <span className="block font-body text-sm text-teal font-medium mt-1">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}



