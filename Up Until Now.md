# Souq-E-Deccan - Project Status & Documentation

> **Last Updated:** December 27, 2025  
> **Live URL:** https://souq-e-deccan.vercel.app  
> **Repository:** https://github.com/DevShoaib78/Souq-E-Deccan

---

## 📋 Project Overview

**Souq-E-Deccan** is a premium cultural expo website celebrating the rich heritage and artistry of the Deccan region. The website serves two main purposes:

1. **Landing Page** - Showcase the expo details, highlights, team, and event information
2. **Stall Booking System** - Allow exhibitors to select and book stalls via WhatsApp

### Event Details
- **Dates:** 26-28 February 2026
- **Venue:** Kings Crown Convention & Kings Classic Garden, Hyderabad
- **Entry:** Free

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| Supabase | Latest | Backend-as-a-Service (Auth + Database) |
| Vercel | - | Hosting & Deployment |

---

## ✅ Implemented Features

### 1. Landing Page (Complete)
- Hero section with event details
- About/Heritage section with animated counters
- Multi-phase event display (Hyderabad, Qatar, Saudi Arabia)
- Expo highlights with 8 categories
- Key features section
- Team showcase
- CTA sections
- Footer with contact info and social links
- Fully responsive design
- Beautiful animations and transitions

### 2. Stall Booking Flow (Complete)
- Two layout categories:
  - **Lifestyle Zone** - Fashion, accessories, home décor
  - **Real Estate & Food Zone** - Real estate showcases and food court
- Interactive stall map with:
  - Zoom in/out controls
  - Pan/drag navigation
  - Click-to-select stalls
  - Visual status indicators (Available/Selected/Booked)
- Booking form that generates WhatsApp message
- Direct WhatsApp integration for deal closure

### 3. Admin System (Implemented, Needs Testing)
- Protected admin route (`/admin`)
- Admin login with Supabase Auth
- Admin dashboard to view/manage stalls
- Ability to mark stalls as Available/Booked
- Database seeding functionality
- Real-time status updates

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── booking/
│   │   └── page.tsx                # Stall booking page
│   ├── admin/
│   │   ├── page.tsx                # Admin dashboard (protected)
│   │   ├── login/
│   │   │   └── page.tsx            # Admin login page
│   │   └── components/
│   │       └── AdminDashboard.tsx  # Dashboard UI component
│   └── api/
│       └── admin/
│           ├── seed/
│           │   └── route.ts        # API to seed database
│           └── stalls/
│               └── route.ts        # API to manage stalls
├── components/
│   ├── booking/
│   │   ├── BookingForm.tsx         # Form for stall booking
│   │   ├── LayoutSelector.tsx      # Zone selection UI
│   │   ├── StallMapOverlay.tsx     # Interactive stall map
│   │   ├── StallLegend.tsx         # Legend component
│   │   └── index.ts                # Barrel exports
│   ├── landing/                    # Landing page sections
│   └── common/                     # Shared components
├── data/
│   ├── stall-maps.ts               # Stall coordinate mappings
│   └── index.ts                    # Event data
├── hooks/
│   └── useStalls.ts                # React hook for stall data
├── lib/
│   └── supabase/
│       ├── client.ts               # Browser Supabase client
│       ├── server.ts               # Server Supabase client
│       ├── types.ts                # Database types
│       └── index.ts                # Exports
├── types/
│   └── booking.ts                  # TypeScript types for booking
└── middleware.ts                   # Auth middleware for protected routes

public/
├── logo.png                        # Main logo
├── BH Events Layout 11 (Lifestyle).webp
├── BH Events Layout 12 (Real Estate and Food).webp
└── ...                             # Other assets

supabase/
├── schema.sql                      # Database schema (run in Supabase SQL Editor)
└── seed.sql                        # Seed data (optional, can use API instead)
```

---

## 🗄 Database Setup (Supabase)

### Project Details
- **Project Name:** souq-e-deccan
- **Project ID:** kcoydebzmrzxomnvhooq
- **Region:** (Check Supabase dashboard)

### Tables

#### `stalls` Table
| Column | Type | Description |
|--------|------|-------------|
| id | TEXT (PK) | Unique stall ID (e.g., 'L-106', 'RE-S32') |
| layout | ENUM | 'lifestyle' or 'real-estate-food' |
| label | TEXT | Display label |
| category | ENUM | 'lifestyle', 'real-estate', or 'food' |
| status | ENUM | 'available' or 'booked' |
| position | JSONB | { left, top, width, height, rotation } |
| stall_type | ENUM | 'one-side-open', 'two-side-open', 'standard' |
| size | TEXT | Size description |
| created_at | TIMESTAMPTZ | Auto-generated |
| updated_at | TIMESTAMPTZ | Auto-updated |

### Row Level Security (RLS)
- **SELECT:** Public (anyone can view stalls)
- **UPDATE:** Authenticated users only (admin)
- **ALL:** Service role (for seeding)

### Realtime
Realtime is enabled on the `stalls` table for live updates.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kcoydebzmrzxomnvhooq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3lkZWJ6bXJ6eG9tbnZob29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MTM4NzcsImV4cCI6MjA4MjM4OTg3N30.N4JUtNpDNJdmteYkwSYMyA_pBHiQrNxdtfGj26n2u1g
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3lkZWJ6bXJ6eG9tbnZob29xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjgxMzg3NywiZXhwIjoyMDgyMzg5ODc3fQ.Cy5qFjxPizvyS7sJdhAijIno4ZjO6jW54GACF0_FdgI
```

> ⚠️ **NEVER commit `.env.local` to Git!** These are sensitive credentials.

For Vercel deployment, add these same variables in:
**Vercel Dashboard → Project → Settings → Environment Variables**

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DevShoaib78/Souq-E-Deccan.git
cd Souq-E-Deccan

# Install dependencies
npm install

# Create .env.local file (see Environment Variables section)

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

### First-Time Database Setup

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/kcoydebzmrzxomnvhooq)
2. Navigate to **SQL Editor**
3. Run the contents of `supabase/schema.sql` (if not already done)
4. Go to **Authentication → Users** and create an admin user
5. Login to `/admin` and click "Seed Database" to populate stalls

---

## 📱 User Flows

### Regular Visitor Flow
1. Visit homepage
2. Explore expo details, highlights, team
3. Click "Book Your Stall"
4. Select zone (Lifestyle or Real Estate & Food)
5. Click on available stall
6. Fill booking form
7. Submit → Opens WhatsApp with pre-filled message
8. Deal closed via personal WhatsApp conversation

### Admin Flow
1. Visit `/admin` (redirects to `/admin/login` if not authenticated)
2. Login with admin credentials
3. View all stalls by layout
4. Search/filter stalls
5. Click stall to toggle status (Available ↔ Booked)
6. Changes reflect in real-time for visitors

---

## 🎨 Design System

### Brand Colors
- **Primary Gold:** `#D4AF37` / `rgb(212, 175, 55)`
- **Dark Background:** `#0C1220` / Slate-900 variants
- **Accent:** Amber/Gold gradients

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** System fonts / Inter

### Key UI Patterns
- Glass morphism cards with backdrop blur
- Gradient borders and accents
- Smooth Framer Motion animations
- Responsive grid layouts

---

## 🐛 Known Issues & TODOs

### Needs Attention
1. **Stall Overlay Precision** - Some stall overlays may need fine-tuning for pixel-perfect alignment with the layout images
2. **Admin Dashboard Testing** - Full end-to-end testing of admin flow needed
3. **Database Seeding** - First admin login needs to seed the database

### Future Enhancements
- [ ] Email notifications for bookings
- [ ] Booking confirmation system
- [ ] Payment integration (if needed)
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PWA capabilities

---

## 📞 Contact Information

### Event Contact
- **Phone:** 7416812288, 7416483737
- **Email:** souqedeccan@gmail.com
- **Instagram:** [@souqedeccan](https://www.instagram.com/souqedeccan)
- **WhatsApp:** +91 7416812288

### Developer
- **Name:** Mohammed Shoaib Choudry
- **Portfolio:** https://shoaibdev.framer.website

---

## 📝 Commit History (Recent)

| Commit | Description |
|--------|-------------|
| `3dd8fa9` | fix: Remove strict Database typing from Supabase clients |
| `7bd51fa` | fix: Add type assertion for Supabase query result |
| `d517b2e` | fix: Escape quotes in AdminDashboard to fix ESLint error |
| `9f665e5` | feat: Add Supabase backend integration for stall booking |
| `ad53547` | fix: Update component exports |
| `8f266fc` | feat: Update event dates to 26-28 February 2026 |

---

## 🔑 Important Notes for Developers

1. **Don't modify the landing page** without explicit approval - it's considered complete
2. **Stall coordinates** are in `src/data/stall-maps.ts` - use normalized percentages (0-100)
3. **WebP images** are the source of truth for stall layouts
4. **WhatsApp number** for bookings is defined in `src/types/booking.ts`
5. **Middleware** protects `/admin` routes - check `src/middleware.ts`
6. **No user registration** - admin users are created manually in Supabase Auth

---

*This document should be updated as the project evolves.*

