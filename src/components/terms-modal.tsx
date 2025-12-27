'use client'

import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TermsModalProps {
    isOpen: boolean
    onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal - Properly Centered */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-3xl max-h-[90vh] bg-sand border-2 border-gold/30 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gold/20 bg-maroon flex-shrink-0">
                            <h2 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-white">
                                Terms & Conditions
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded flex-shrink-0"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content - Scrollable */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                            <div className="space-y-6 font-body text-coffee">
                                <p className="text-coffee/70 leading-relaxed text-sm md:text-base">
                                    Please read these terms and conditions carefully before booking a stall at Souq-E-Deccan.
                                    By proceeding with your booking, you acknowledge and agree to the following:
                                </p>

                                {/* Term 1 */}
                                <div className="border-l-4 border-gold pl-4 md:pl-6 py-2">
                                    <h3 className="font-heading font-semibold text-base md:text-lg text-maroon mb-2">
                                        1. No Guarantee of Footfall or Sales
                                    </h3>
                                    <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                                        The Organizer does not guarantee any specific volume of footfall, sales, or
                                        business leads. Participation is at the Vendor&apos;s own risk, and no refunds or
                                        compensation will be given based on the Vendor&apos;s commercial performance.
                                    </p>
                                </div>

                                {/* Term 2 */}
                                <div className="border-l-4 border-gold pl-4 md:pl-6 py-2">
                                    <h3 className="font-heading font-semibold text-base md:text-lg text-maroon mb-2">
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
                                <div className="border-l-4 border-gold pl-4 md:pl-6 py-2">
                                    <h3 className="font-heading font-semibold text-base md:text-lg text-maroon mb-2">
                                        3. Indemnification
                                    </h3>
                                    <p className="text-coffee/80 leading-relaxed text-sm md:text-base">
                                        The Vendor agrees to indemnify and hold harmless the Organizer against all
                                        claims, demands, losses, costs, or damages arising from the Vendor&apos;s negligence,
                                        products, display, or staff conduct.
                                    </p>
                                </div>

                                {/* Term 4 */}
                                <div className="border-l-4 border-gold pl-4 md:pl-6 py-2">
                                    <h3 className="font-heading font-semibold text-base md:text-lg text-maroon mb-2">
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
                                <div className="border-l-4 border-gold pl-4 md:pl-6 py-2">
                                    <h3 className="font-heading font-semibold text-base md:text-lg text-maroon mb-2">
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
                                    <p className="text-xs md:text-sm text-coffee/70 italic">
                                        By booking a stall, you agree to comply with all the terms and conditions outlined above.
                                        For any questions or clarifications, please contact us at{' '}
                                        <a href="mailto:souqedeccan@gmail.com" className="text-teal hover:underline font-medium">
                                            souqedeccan@gmail.com
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 md:p-6 border-t border-gold/20 bg-white flex-shrink-0">
                            <button
                                onClick={onClose}
                                className="w-full md:w-auto px-8 py-3 bg-maroon text-white font-body font-semibold hover:bg-maroon-600 transition-colors"
                            >
                                I Understand
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
