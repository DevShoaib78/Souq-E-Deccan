// =============================================================================
// STALL BOOKING TYPES
// =============================================================================
// These types are designed to be backend-ready. When integrating with a backend,
// stall statuses can be fetched from an API and the StallData interface can be
// extended with additional fields like booking details, timestamps, etc.
// =============================================================================

/**
 * Stall availability status
 * - 'available': Can be selected by users
 * - 'booked': Already reserved, cannot be selected
 * - 'selected': Currently selected by the user (UI state only)
 */
export type StallStatus = 'available' | 'booked' | 'selected'

/**
 * Categories of stalls available for booking
 */
export type StallCategory = 'lifestyle' | 'food' | 'real-estate'

/**
 * Layout identifier for the two venue layouts
 */
export type LayoutType = 'lifestyle' | 'real-estate-food'

/**
 * Position coordinates for stall overlay placement
 * All values are percentages (0-100) relative to the image dimensions
 */
export interface StallPosition {
  /** Left position as percentage of image width */
  left: number
  /** Top position as percentage of image height */
  top: number
  /** Width as percentage of image width */
  width: number
  /** Height as percentage of image height */
  height: number
  /** Optional rotation in degrees for angled stalls */
  rotation?: number
}

/**
 * Core stall data structure
 * Designed to be extended with backend data when integrated
 */
export interface StallData {
  /** Unique identifier for the stall (e.g., "L-101", "RE-S1", "F-1") */
  id: string
  /** Display label shown on the stall (e.g., "101", "RE S1", "F1") */
  label: string
  /** Which layout this stall belongs to */
  layout: LayoutType
  /** Category of the stall */
  category: StallCategory
  /** Current availability status */
  status: StallStatus
  /** Position coordinates for the overlay */
  position: StallPosition
  /** Optional: Stall type (e.g., "one-side-open", "two-side-open") */
  stallType?: 'one-side-open' | 'two-side-open' | 'standard'
  /** Optional: Price (for future use) */
  price?: number
  /** Optional: Size description */
  size?: string
}

/**
 * User booking form data
 */
export interface BookingFormData {
  /** User's full name */
  name: string
  /** Business or brand name */
  businessName: string
  /** Selected category */
  category: StallCategory
  /** Contact phone number */
  phone: string
}

/**
 * Complete booking submission data
 */
export interface BookingSubmission {
  /** Selected stall information */
  stall: StallData
  /** User form data */
  formData: BookingFormData
  /** Timestamp of submission */
  submittedAt: Date
}

/**
 * Layout configuration for each venue map
 */
export interface LayoutConfig {
  /** Layout identifier */
  id: LayoutType
  /** Display name */
  name: string
  /** Image path */
  imagePath: string
  /** Categories available in this layout */
  categories: StallCategory[]
  /** Description of the layout */
  description: string
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const WHATSAPP_NUMBER = '+919885421522'

export const CATEGORY_LABELS: Record<StallCategory, string> = {
  'lifestyle': 'Lifestyle',
  'food': 'Food',
  'real-estate': 'Real Estate',
}

export const LAYOUT_CONFIGS: LayoutConfig[] = [
  {
    id: 'lifestyle',
    name: 'Lifestyle Zone',
    imagePath: '/BH Events Layout 11 (Lifestyle).webp',
    categories: ['lifestyle'],
    description: 'Fashion, accessories, home décor, and lifestyle products',
  },
  {
    id: 'real-estate-food',
    name: 'Real Estate & Food Zone',
    imagePath: '/BH Events Layout 12 (Real Estate and Food).webp',
    categories: ['real-estate', 'food'],
    description: 'Real estate showcases and food court',
  },
]




