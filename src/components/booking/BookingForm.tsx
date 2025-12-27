'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Send, X, User, Building2, Phone, Tag } from 'lucide-react'
import type { StallData, BookingFormData, StallCategory } from '@/types/booking'
import { CATEGORY_LABELS, WHATSAPP_NUMBER } from '@/types/booking'

interface BookingFormProps {
  stall: StallData
  onClose: () => void
  onSuccess: () => void
}

const initialFormData: BookingFormData = {
  name: '',
  businessName: '',
  category: 'lifestyle',
  phone: '',
}

export function BookingForm({ stall, onClose, onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    ...initialFormData,
    // Pre-select category based on stall category
    category: stall.category,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business/Brand name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  // Handle input changes
  const handleInputChange = useCallback((
    field: keyof BookingFormData,
    value: string | StallCategory
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  // Generate WhatsApp message
  const generateWhatsAppMessage = useCallback((): string => {
    const message = `Name: ${formData.name.trim()}
Name of your business/brand: ${formData.businessName.trim()}
Category: ${CATEGORY_LABELS[formData.category]}
Phone number: ${formData.phone.trim()}

Stall ID: ${stall.label}
Layout: ${stall.layout === 'lifestyle' ? 'Lifestyle Zone' : 'Real Estate & Food Zone'}`

    return encodeURIComponent(message)
  }, [formData, stall])

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Generate WhatsApp URL
    const phoneNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 300))

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    onSuccess()
  }, [validateForm, generateWhatsAppMessage, onSuccess])

  // Available categories based on the selected stall's layout
  const availableCategories: StallCategory[] = stall.layout === 'lifestyle'
    ? ['lifestyle']
    : ['food', 'real-estate']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-maroon/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-sand border border-gold/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-maroon px-6 py-5">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Close form"
          >
            <X size={20} />
          </button>

          <h2 className="font-heading font-bold text-2xl text-white mb-1">
            Book Your Stall
          </h2>
          <p className="font-body text-white/70 text-sm">
            You selected: <span className="text-gold font-medium">{stall.label}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name Field */}
          <div>
            <label className="flex items-center gap-2 font-body text-sm font-medium text-coffee mb-2">
              <User size={16} className="text-teal" />
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 bg-white border font-body text-coffee placeholder-coffee/40 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
                errors.name ? 'border-red-400' : 'border-gold/30 focus:border-teal'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Business Name Field */}
          <div>
            <label className="flex items-center gap-2 font-body text-sm font-medium text-coffee mb-2">
              <Building2 size={16} className="text-teal" />
              Business / Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              className={`w-full px-4 py-3 bg-white border font-body text-coffee placeholder-coffee/40 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
                errors.businessName ? 'border-red-400' : 'border-gold/30 focus:border-teal'
              }`}
              placeholder="Enter your business or brand name"
            />
            {errors.businessName && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.businessName}</p>
            )}
          </div>

          {/* Category Field */}
          <div>
            <label className="flex items-center gap-2 font-body text-sm font-medium text-coffee mb-2">
              <Tag size={16} className="text-teal" />
              Category <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleInputChange('category', category)}
                  className={`px-4 py-2 font-body text-sm border transition-all duration-200 ${
                    formData.category === category
                      ? 'bg-teal text-white border-teal'
                      : 'bg-white text-coffee border-gold/30 hover:border-gold'
                  }`}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
            {availableCategories.length === 1 && (
              <p className="mt-2 font-body text-xs text-coffee/50">
                Category is pre-selected based on the layout
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="flex items-center gap-2 font-body text-sm font-medium text-coffee mb-2">
              <Phone size={16} className="text-teal" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 bg-white border font-body text-coffee placeholder-coffee/40 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
                errors.phone ? 'border-red-400' : 'border-gold/30 focus:border-teal'
              }`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="mt-1 font-body text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-teal text-white font-body font-semibold tracking-wide hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send via WhatsApp
              </>
            )}
          </button>

          {/* WhatsApp Note */}
          <p className="text-center font-body text-xs text-coffee/50">
            You will be redirected to WhatsApp with your booking details
          </p>
        </form>
      </motion.div>
    </motion.div>
  )
}





