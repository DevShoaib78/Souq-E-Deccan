import type { Stall, ExpoCategory, EventDetails, ContactInfo, SocialLink, NavLink, StallCategory } from '@/types'

// Navigation links
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Book Stall', href: '/booking', isButton: true },
]

// Event details
export const eventDetails: EventDetails = {
  name: 'Souq-E-Deccan',
  tagline: 'The Deccan Market of Heritage & Craft',
  dates: {
    start: '2025-02-26',
    end: '2025-02-28',
  },
  venue: {
    name: 'Kings Crown Convention & Kings Classic Garden',
    address: 'Guddi Malkapur – Mehdipatnam',
    city: 'Hyderabad',
  },
  timings: '4:00 PM – 4:00 AM',
}

// Contact information
export const contactInfo: ContactInfo = {
  email: 'souqedeccan@gmail.com',
  phone: '7416812288, 7416483737',
  address: 'Kings Crown Convention & Kings Classic Garden, Guddi Malkapur – Mehdipatnam',
  city: 'Hyderabad, Telangana',
  pincode: '500028',
}

// Social links
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/souqedeccan', icon: 'instagram' },
  { platform: 'WhatsApp', url: 'https://wa.me/917416812288', icon: 'whatsapp' },
]

// Expo categories
export const expoCategories: ExpoCategory[] = [
  {
    id: 'fashion',
    name: 'Heritage Fashion',
    description: 'Traditional attire meets contemporary design. From Khada Dupatta to modern fusion wear.',
    icon: 'shirt',
    imageUrl: '/images/fashion.jpg',
    stallCount: 50,
  },
  {
    id: 'lifestyle',
    name: 'Deccan Lifestyle',
    description: 'Home décor, fragrances, and accessories that bring the essence of Hyderabad into your space.',
    icon: 'home',
    imageUrl: '/images/lifestyle.jpg',
    stallCount: 35,
  },
  {
    id: 'art',
    name: 'Visual Arts',
    description: 'Paintings, sculptures, and contemporary art inspired by the rich cultural tapestry of the region.',
    icon: 'paintbrush',
    imageUrl: '/images/art.jpg',
    stallCount: 30,
  },
  {
    id: 'realestate',
    name: 'Real Estate Zone',
    description: 'Dedicated space featuring approximately 50 premium real estate projects and property showcases.',
    icon: 'building',
    imageUrl: '/images/realestate.jpg',
    stallCount: 50,
  },
  {
    id: 'shopping',
    name: 'Shopping Arcade',
    description: 'A curated marketplace with 200+ stalls offering a diverse shopping experience.',
    icon: 'shopping',
    imageUrl: '/images/shopping.jpg',
    stallCount: 200,
  },
  {
    id: 'foodcourt',
    name: 'Food Court',
    description: 'Spacious dining area with comfortable seating to enjoy authentic Deccani and diverse cuisines.',
    icon: 'restaurant',
    imageUrl: '/images/foodcourt.jpg',
    stallCount: 25,
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Live talk shows, Faltu Baat, Q&A sessions, lucky draws, and Urdu Mushaira throughout the event.',
    icon: 'mic',
    imageUrl: '/images/entertainment.jpg',
    stallCount: 0,
  },
  {
    id: 'playarea',
    name: 'Play Area & Game Zones',
    description: 'Fun-filled play areas and game zones for children and families in the Shopping Arcade and Food Court.',
    icon: 'gamepad',
    imageUrl: '/images/playarea.jpg',
    stallCount: 0,
  },
]

// Stall size details
export const stallSizes: Record<string, { dimensions: string; price: number; amenities: string[] }> = {
  small: {
    dimensions: '6ft × 6ft',
    price: 15000,
    amenities: ['1 Table', '2 Chairs', 'Power Socket', 'Basic Lighting'],
  },
  medium: {
    dimensions: '8ft × 8ft',
    price: 25000,
    amenities: ['2 Tables', '4 Chairs', 'Power Socket', 'Spotlight', 'Signage Board'],
  },
  large: {
    dimensions: '10ft × 10ft',
    price: 40000,
    amenities: ['3 Tables', '6 Chairs', 'Power Sockets', 'Premium Lighting', 'Signage Board', 'Storage Unit'],
  },
  corner: {
    dimensions: '12ft × 12ft (Corner)',
    price: 55000,
    amenities: ['4 Tables', '8 Chairs', 'Multiple Power Sockets', 'Premium Lighting', 'Large Signage', 'Storage Unit', 'Extra Visibility'],
  },
}

// Generate mock stall data
const generateStalls = (): Stall[] => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F']
  const categories: StallCategory[] = ['food', 'crafts', 'fashion', 'lifestyle', 'art', 'premium']
  const stalls: Stall[] = []

  rows.forEach((row, rowIndex) => {
    const stallsInRow = row === 'A' || row === 'F' ? 8 : 10 // Corner rows have fewer stalls

    for (let num = 1; num <= stallsInRow; num++) {
      // Determine stall size based on position
      let size: 'small' | 'medium' | 'large' | 'corner' = 'medium'
      if ((num === 1 || num === stallsInRow) && (row === 'A' || row === 'F')) {
        size = 'corner'
      } else if (num % 3 === 0) {
        size = 'large'
      } else if (num % 2 === 0) {
        size = 'small'
      }

      // Randomly assign booked status (about 35% booked)
      const randomBooked = Math.random() < 0.35

      // Assign category based on row
      const category = categories[rowIndex] || 'crafts'

      const sizeDetails = stallSizes[size]

      stalls.push({
        id: `${row}${num}`,
        row,
        number: num,
        status: randomBooked ? 'booked' : 'available',
        category,
        size,
        price: sizeDetails.price,
        dimensions: sizeDetails.dimensions,
        amenities: sizeDetails.amenities,
      })
    }
  })

  return stalls
}

export const stallData: Stall[] = generateStalls()

// Get stalls grouped by row
export const getStallsByRow = (): Record<string, Stall[]> => {
  return stallData.reduce((acc, stall) => {
    if (!acc[stall.row]) {
      acc[stall.row] = []
    }
    acc[stall.row].push(stall)
    return acc
  }, {} as Record<string, Stall[]>)
}

// Category display names
export const categoryNames: Record<StallCategory, string> = {
  food: 'Food & Cuisine',
  crafts: 'Artisan Crafts',
  fashion: 'Fashion & Textiles',
  lifestyle: 'Lifestyle & Home',
  art: 'Art & Gallery',
  premium: 'Premium Collection',
}

// Category colors for stall display
export const categoryColors: Record<StallCategory, string> = {
  food: 'bg-amber-100 border-amber-400',
  crafts: 'bg-teal-100 border-teal-400',
  fashion: 'bg-rose-100 border-rose-400',
  lifestyle: 'bg-blue-100 border-blue-400',
  art: 'bg-purple-100 border-purple-400',
  premium: 'bg-gold-100 border-gold-400',
}

