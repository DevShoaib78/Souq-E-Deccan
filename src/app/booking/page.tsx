'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Info, Check, X } from 'lucide-react'
import { StallGrid, Legend, BookingSummary } from '@/components/booking'
import { getStallsByRow, eventDetails } from '@/data'
import type { Stall } from '@/types'

export default function BookingPage() {
  const [selectedStalls, setSelectedStalls] = useState<Stall[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  const stallsByRow = useMemo(() => getStallsByRow(), [])

  const handleStallSelect = useCallback((stall: Stall) => {
    setSelectedStalls((prev) => {
      const isAlreadySelected = prev.some((s) => s.id === stall.id)
      if (isAlreadySelected) {
        return prev.filter((s) => s.id !== stall.id)
      }
      return [...prev, stall]
    })
  }, [])

  const handleRemoveStall = useCallback((stallId: string) => {
    setSelectedStalls((prev) => prev.filter((s) => s.id !== stallId))
  }, [])

  const handleProceed = useCallback(() => {
    setShowConfirmation(true)
  }, [])

  const totalPrice = selectedStalls.reduce((sum, stall) => sum + stall.price, 0)

  return (
    <>
      <div className="min-h-screen bg-sand">
        {/* Header */}
        <div className="bg-maroon pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="container-heritage">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-body text-sm tracking-wide transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Book Your Stall
              </h1>
              <p className="font-body text-white/60 text-lg max-w-2xl">
                Select your preferred stalls from the layout below. Choose from various
                sizes and locations to showcase your craft at Souq-E-Deccan.
              </p>
            </motion.div>

            {/* Event Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-white/50 font-body text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                to be announced soon
              </span>
              <span className="hidden md:block">·</span>
              <span>{eventDetails.venue.name}</span>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-heritage py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Stall Grid Section */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 bg-teal/10 border border-teal/20 mb-8"
              >
                <Info className="text-teal flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-body text-coffee text-sm">
                    <strong className="text-teal">Tap or click</strong> on any available stall
                    to select it. Tap again to deselect. Selected stalls will be highlighted.
                  </p>
                </div>
              </motion.div>

              {/* Legend */}
              <div className="mb-8">
                <Legend />
              </div>

              {/* The Stall Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gold/20 p-6 md:p-8 overflow-x-auto"
              >
                <div className="min-w-[600px] pl-8 md:pl-12">
                  <StallGrid
                    stalls={stallsByRow}
                    selectedStalls={selectedStalls}
                    onStallSelect={handleStallSelect}
                  />
                </div>
              </motion.div>

              {/* Zoom Hint for Mobile */}
              <p className="mt-4 text-center font-body text-xs text-coffee/40 md:hidden">
                Scroll horizontally to view the entire layout
              </p>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <BookingSummary
                  selectedStalls={selectedStalls}
                  onRemoveStall={handleRemoveStall}
                  onProceed={handleProceed}
                />

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 p-4 bg-sand-50 border border-gold/10"
                >
                  <h4 className="font-heading font-semibold text-maroon mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2 font-body text-sm text-coffee/70">
                    <li className="flex items-start gap-2">
                      <Check className="text-teal flex-shrink-0 mt-0.5" size={14} />
                      <span>All 3 days of the expo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-teal flex-shrink-0 mt-0.5" size={14} />
                      <span>Basic furniture and setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-teal flex-shrink-0 mt-0.5" size={14} />
                      <span>Electricity and lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-teal flex-shrink-0 mt-0.5" size={14} />
                      <span>Stall signage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-teal flex-shrink-0 mt-0.5" size={14} />
                      <span>Marketing & promotion</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Contact for Help */}
                <div className="mt-4 p-4 border border-dashed border-gold/30 text-center">
                  <p className="font-body text-sm text-coffee/60">
                    Need help choosing?
                  </p>
                  <a
                    href="tel:9703539316"
                    className="font-body text-teal font-medium hover:underline"
                  >
                    Call us: 9703539316 / 7075806460
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-maroon/80 backdrop-blur-sm"
              onClick={() => setShowConfirmation(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-sand border border-gold/30 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute top-4 right-4 p-2 text-coffee/40 hover:text-maroon transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Success Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-teal flex items-center justify-center">
                  <Check className="text-white" size={32} />
                </div>

                <h2 className="font-heading font-bold text-2xl text-maroon mb-2">
                  Booking Request Received!
                </h2>
                <p className="font-body text-coffee/70 mb-6">
                  Thank you for your interest in Souq-E-Deccan. Our team will
                  contact you shortly to confirm your booking.
                </p>

                {/* Summary */}
                <div className="bg-maroon/5 p-4 mb-6 text-left">
                  <h3 className="font-heading font-semibold text-maroon mb-3">
                    Your Selection
                  </h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span className="text-coffee/60">Stalls Selected:</span>
                      <span className="text-coffee font-medium">
                        {selectedStalls.map(s => s.id).join(', ')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-coffee/60">Total Amount:</span>
                      <span className="text-teal font-bold">
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-xs text-coffee/50 mb-6">
                  A confirmation email will be sent to your registered email address.
                  <br />
                  For queries, call us at 9703539316 / 7075806460
                </p>

                <button
                  onClick={() => setShowConfirmation(false)}
                  className="w-full py-3 bg-maroon text-white font-body font-semibold tracking-wide hover:bg-maroon-600 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

