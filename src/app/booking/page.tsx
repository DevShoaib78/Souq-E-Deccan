'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Info, CheckCircle2 } from 'lucide-react'
import { 
  StallMapOverlay, 
  BookingForm, 
  StallLegend, 
  LayoutSelector 
} from '@/components/booking'
import { getStallsByLayout } from '@/data/stall-maps'
import type { StallData, LayoutType } from '@/types/booking'
import { eventDetails } from '@/data'

export default function BookingPage() {
  // State
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('lifestyle')
  const [selectedStall, setSelectedStall] = useState<StallData | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Get stalls for the selected layout
  // In future: This would fetch from backend API with real availability status
  const stalls = useMemo(() => getStallsByLayout(selectedLayout), [selectedLayout])

  // Handlers
  const handleLayoutChange = useCallback((layout: LayoutType) => {
    setSelectedLayout(layout)
    setSelectedStall(null) // Clear selection when changing layout
  }, [])

  const handleStallSelect = useCallback((stall: StallData) => {
    setSelectedStall(stall)
    setShowForm(true)
  }, [])

  const handleStallDeselect = useCallback(() => {
    setSelectedStall(null)
    setShowForm(false)
  }, [])

  const handleFormClose = useCallback(() => {
    setShowForm(false)
    setSelectedStall(null)
  }, [])

  const handleFormSuccess = useCallback(() => {
    setShowForm(false)
    setShowSuccess(true)
    // Auto-hide success message after delay
    setTimeout(() => {
      setShowSuccess(false)
      setSelectedStall(null)
    }, 4000)
  }, [])

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
                Select a zone below, then tap on any available stall to book your spot at Souq-E-Deccan.
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
                {new Date(eventDetails.dates.start).toLocaleDateString('en-IN', { 
                  month: 'long', 
                  day: 'numeric' 
                })} - {new Date(eventDetails.dates.end).toLocaleDateString('en-IN', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="hidden md:block">·</span>
              <span>{eventDetails.venue.name}</span>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-heritage py-8 md:py-12">
          {/* Layout Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <LayoutSelector
              selectedLayout={selectedLayout}
              onLayoutChange={handleLayoutChange}
            />
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3 p-4 bg-teal/10 border border-teal/20 mb-6"
          >
            <Info className="text-teal flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-body text-coffee text-sm">
                <strong className="text-teal">Tap</strong> on any available stall (highlighted in gold) to select it. 
                Use the zoom controls to navigate the layout. A form will appear to collect your details.
              </p>
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <StallLegend showBooked={true} />
          </motion.div>

          {/* Stall Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-gold/20 p-4 md:p-6"
          >
            <StallMapOverlay
              layout={selectedLayout}
              stalls={stalls}
              selectedStallId={selectedStall?.id ?? null}
              onStallSelect={handleStallSelect}
              onStallDeselect={handleStallDeselect}
            />
          </motion.div>

          {/* Selected Stall Info (shown when selected but form not open) */}
          <AnimatePresence>
            {selectedStall && !showForm && !showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-0 left-0 right-0 md:relative md:mt-6 p-4 bg-maroon border-t md:border border-gold/30 shadow-lg md:shadow-none z-30"
              >
                <div className="container-heritage md:p-0">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="font-body text-white/70 text-sm">Selected Stall</p>
                      <p className="font-heading font-bold text-xl text-gold">
                        {selectedStall.label}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={handleStallDeselect}
                        className="px-5 py-2.5 border border-white/30 text-white font-body text-sm hover:bg-white/10 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setShowForm(true)}
                        className="px-5 py-2.5 bg-gold text-maroon font-body font-semibold text-sm hover:bg-gold-300 transition-colors"
                      >
                        Book This Stall
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 border border-dashed border-gold/30 text-center"
          >
            <p className="font-body text-sm text-coffee/60 mb-1">
              Need help or have questions?
            </p>
            <a 
              href="tel:+919885421522" 
              className="font-body text-teal font-medium hover:underline"
            >
              Call us: +91 98854 21522
            </a>
          </motion.div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showForm && selectedStall && (
          <BookingForm
            stall={selectedStall}
            onClose={handleFormClose}
            onSuccess={handleFormSuccess}
          />
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-teal text-white shadow-xl"
          >
            <CheckCircle2 size={24} />
            <div>
              <p className="font-body font-semibold">Booking Request Sent!</p>
              <p className="font-body text-sm text-white/80">
                We&apos;ll contact you shortly to confirm.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
