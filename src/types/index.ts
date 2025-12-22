// Stall types for the booking system
export type StallStatus = 'available' | 'booked' | 'selected'

export type StallCategory = 'food' | 'crafts' | 'fashion' | 'lifestyle' | 'art' | 'premium'

export type StallSize = 'small' | 'medium' | 'large' | 'corner'

export interface Stall {
  id: string
  row: string
  number: number
  status: StallStatus
  category: StallCategory
  size: StallSize
  price: number
  dimensions: string
  amenities: string[]
}

export interface StallBookingState {
  selectedStalls: Stall[]
  totalPrice: number
}

// Expo category for highlights section
export interface ExpoCategory {
  id: string
  name: string
  description: string
  icon: string
  imageUrl: string
  stallCount: number
}

// Navigation link type
export interface NavLink {
  label: string
  href: string
  isButton?: boolean
}

// Contact information
export interface ContactInfo {
  email: string
  phone: string
  address: string
  city: string
  pincode: string
}

// Social links
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// Event details
export interface EventDetails {
  name: string
  tagline: string
  dates: {
    start: string
    end: string
  }
  venue: {
    name: string
    address: string
    city: string
  }
  timings: string
}



