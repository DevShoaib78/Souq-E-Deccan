import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SmoothScroll } from '@/components/smooth-scroll'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Souq-E-Deccan | The Deccan Market of Heritage & Craft',
  description: 'A premium cultural expo celebrating the rich heritage and artistry of the Deccan region. Experience tradition, craftsmanship, and timeless elegance through food, crafts, fashion, lifestyle, and art.',
  keywords: ['cultural expo', 'Hyderabad', 'Deccan heritage', 'Deccan market', 'crafts', 'art', 'fashion', 'food', 'Souq-E-Deccan'],
  authors: [{ name: 'Souq-E-Deccan' }],
  openGraph: {
    title: 'Souq-E-Deccan | The Deccan Market of Heritage & Craft',
    description: 'A premium cultural expo celebrating the rich heritage and artistry of the Deccan region.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5B1F1F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

