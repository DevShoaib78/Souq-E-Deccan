'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, ArrowRight } from 'lucide-react'
import type { Stall } from '@/types'
import { categoryNames, stallSizes } from '@/data'

interface BookingSummaryProps {
  selectedStalls: Stall[]
  onRemoveStall: (stallId: string) => void
  onProceed: () => void
}

export function BookingSummary({ selectedStalls, onRemoveStall, onProceed }: BookingSummaryProps) {
  const totalPrice = selectedStalls.reduce((sum, stall) => sum + stall.price, 0)
  const hasSelection = selectedStalls.length > 0

  return (
    <motion.div
      layout
      className="bg-white border border-gold/20 shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-maroon p-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="text-gold" size={20} />
          <h3 className="font-heading font-semibold text-lg text-white">
            Booking Summary
          </h3>
          {hasSelection && (
            <span className="ml-auto bg-gold text-maroon text-xs font-bold px-2 py-1 rounded-full">
              {selectedStalls.length}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence mode="popLayout">
          {hasSelection ? (
            <>
              {/* Selected Stalls List */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {selectedStalls.map((stall) => (
                  <motion.div
                    key={stall.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    className="flex items-start gap-3 p-3 bg-sand-50 border border-gold/10"
                  >
                    {/* Stall Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading font-bold text-maroon">
                          Stall {stall.id}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-gold/20 text-coffee capitalize font-body">
                          {stall.size}
                        </span>
                      </div>
                      <p className="font-body text-xs text-coffee/60 truncate">
                        {categoryNames[stall.category]} · {stallSizes[stall.size]?.dimensions}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="font-heading font-bold text-teal">
                        ₹{stall.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveStall(stall.id)}
                      className="p-1 text-coffee/40 hover:text-maroon hover:bg-maroon/10 transition-colors"
                      aria-label={`Remove stall ${stall.id}`}
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-gold/20" />

              {/* Total */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-coffee/60">Total Amount</span>
                <span className="font-heading font-bold text-2xl text-maroon">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Stalls Count */}
              <p className="font-body text-xs text-coffee/50 mb-4">
                {selectedStalls.length} stall{selectedStalls.length > 1 ? 's' : ''} selected
              </p>

              {/* Proceed Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onProceed}
                className="w-full py-4 bg-teal text-white font-body font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors"
              >
                Proceed to Book
                <ArrowRight size={18} />
              </motion.button>

              <p className="font-body text-xs text-center text-coffee/40 mt-3">
                GST and service charges will be calculated at checkout
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-sand-100 flex items-center justify-center">
                <ShoppingCart className="text-coffee/30" size={24} />
              </div>
              <p className="font-body text-coffee/60 mb-2">
                No stalls selected
              </p>
              <p className="font-body text-sm text-coffee/40">
                Click on available stalls to add them to your booking
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}



