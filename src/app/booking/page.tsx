'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Info, CheckCircle2, XCircle } from 'lucide-react'
import {
  StallMapOverlay,
  BookingForm,
  StallLegend,
  LayoutSelector
} from '@/components/booking'
import { useStalls } from '@/hooks/useStalls'
import type { StallData, LayoutType } from '@/types/booking'
import { eventDetails } from '@/data'

export default function BookingPage() {
  // State
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('lifestyle')
  const [selectedStall, setSelectedStall] = useState<StallData | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showBookedError, setShowBookedError] = useState(false)

  // Get stalls for the selected layout from Supabase with real-time updates
  const { stalls, loading: stallsLoading } = useStalls(selectedLayout)

  // Handlers
  const handleLayoutChange = useCallback((layout: LayoutType) => {
    setSelectedLayout(layout)
    setSelectedStall(null) // Clear selection when changing layout
  }, [])

  const handleStallSelect = useCallback((stall: StallData) => {
    // Double-check stall availability (in case of race condition)
    if (stall.status === 'booked') {
      setShowBookedError(true)
      setTimeout(() => setShowBookedError(false), 3000)
      return
    }
    setSelectedStall(stall)
    setShowForm(true)
  }, [])

  // Handler for when user clicks a booked stall
  const handleBookedStallClick = useCallback(() => {
    setShowBookedError(true)
    setTimeout(() => setShowBookedError(false), 3000)
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
        <div className="bg-maroon pt-32 pb-12 md:pt-36 md:pb-16">
          <div className="container-heritage">
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
            {stallsLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin h-10 w-10 border-4 border-gold border-t-transparent rounded-full" />
                  <p className="font-body text-coffee/60 text-sm">Loading stalls...</p>
                </div>
              </div>
            ) : (
              <StallMapOverlay
                layout={selectedLayout}
                stalls={stalls}
                selectedStallId={selectedStall?.id ?? null}
                onStallSelect={handleStallSelect}
                onStallDeselect={handleStallDeselect}
                onBookedStallClick={handleBookedStallClick}
              />
            )}
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href="tel:7416812288"
                className="font-body text-teal font-medium hover:underline"
              >
                Call us: 7416812288
              </a>
              <span className="hidden sm:inline text-coffee/40">,</span>
              <a
                href="tel:7416483737"
                className="font-body text-teal font-medium hover:underline"
              >
                7416483737
              </a>
            </div>
          </motion.div>

          {/* Terms & Conditions Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 bg-white border border-gold/20"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon mb-6 text-center">
              Terms & Conditions
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />

            <div className="space-y-6 font-body text-coffee max-w-4xl mx-auto">
              <p className="text-coffee/70 leading-relaxed text-center mb-8">
                Please read these terms and conditions carefully before booking a stall at Souq-E-Deccan.
                By proceeding with your booking, you acknowledge and agree to the following:
              </p>

              {/* Term 1 */}
              <div className="border-l-4 border-gold pl-6 py-3 bg-sand/30">
                <h3 className="font-heading font-semibold text-lg text-maroon mb-2">
                  1. No Guarantee of Footfall or Sales
                </h3>
                <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                  The Organizer does not guarantee any specific volume of footfall, sales, or
                  business leads. Participation is at the Vendor&apos;s own risk, and no refunds or
                  compensation will be given based on the Vendor&apos;s commercial performance.
                </p>
              </div>

              {/* Term 2 */}
              <div className="border-l-4 border-gold pl-6 py-3 bg-sand/30">
                <h3 className="font-heading font-semibold text-lg text-maroon mb-2">
                  2. Limitation of Liability
                </h3>
                <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                  The Organizer&apos;s total liability to the Vendor for any claim is strictly limited
                  to the amount paid by the Vendor for the stall booking. The Organizer is not
                  liable for any indirect, consequential, or economic losses (e.g., loss of profit,
                  loss of reputation).
                </p>
              </div>

              {/* Term 3 */}
              <div className="border-l-4 border-gold pl-6 py-3 bg-sand/30">
                <h3 className="font-heading font-semibold text-lg text-maroon mb-2">
                  3. Indemnification
                </h3>
                <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                  The Vendor agrees to indemnify and hold harmless the Organizer against all
                  claims, demands, losses, costs, or damages arising from the Vendor&apos;s negligence,
                  products, display, or staff conduct.
                </p>
              </div>

              {/* Term 4 */}
              <div className="border-l-4 border-gold pl-6 py-3 bg-sand/30">
                <h3 className="font-heading font-semibold text-lg text-maroon mb-2">
                  4. Security and Safety of Goods
                </h3>
                <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                  The Organizer is not responsible for the safety, theft, or damage of the
                  Vendor&apos;s goods, cash, or personal belongings. Security provided at the venue is
                  for general crowd control only. Vendors are solely responsible for insurance and
                  security of their own stall.
                </p>
              </div>

              {/* Term 5 */}
              <div className="border-l-4 border-gold pl-6 py-3 bg-sand/30">
                <h3 className="font-heading font-semibold text-lg text-maroon mb-2">
                  5. Force Majeure
                </h3>
                <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                  If the event is cancelled, postponed, or abandoned due to acts of God, war,
                  government regulation, disaster, strikes, or civil disorder, the Organizer shall
                  not be liable for any refunds or vendor losses.
                </p>
              </div>

              {/* Footer Note */}
              <div className="mt-8 p-4 bg-maroon/5 border border-maroon/10 rounded">
                <p className="text-sm text-coffee/70 italic text-center">
                  By booking a stall, you agree to comply with all the terms and conditions outlined above.
                  For any questions or clarifications, please contact us at{' '}
                  <a href="mailto:souqedeccan@gmail.com" className="text-teal hover:underline font-medium">
                    souqedeccan@gmail.com
                  </a>{' '}
                  or call us at{' '}
                  <a href="tel:7416812288" className="text-teal hover:underline font-medium">
                    7416812288
                  </a>,{' '}
                  <a href="tel:7416483737" className="text-teal hover:underline font-medium">
                    7416483737
                  </a>.
                </p>
              </div>
            </div>
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

      {/* Booked Stall Error Toast */}
      <AnimatePresence>
        {showBookedError && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-red-600 text-white shadow-xl"
          >
            <XCircle size={24} />
            <div>
              <p className="font-body font-semibold">This stall is already booked</p>
              <p className="font-body text-sm text-white/80">
                Please select a different available stall.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
