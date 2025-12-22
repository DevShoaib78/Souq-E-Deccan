'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { contactInfo, socialLinks, eventDetails } from '@/data'

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram size={20} />,
  whatsapp: <Phone size={20} />,
}

export function Footer() {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <footer className="bg-maroon text-white relative overflow-hidden">
      {/* Decorative Arch Pattern */}
      <div className="absolute inset-0 arch-pattern opacity-10" />

      {/* Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

      <div className="relative container-heritage section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6">
              {/* Logo */}
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="Souq-E-Deccan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Souq-E-Deccan
                </h3>
                <p className="font-body text-xs tracking-wider text-gold">
                  {eventDetails.tagline}
                </p>
              </div>
            </Link>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
              A premium cultural expo celebrating the rich heritage and artistry
              of the Deccan region. Experience tradition, taste, and timeless craftsmanship.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon transition-all duration-300"
                  aria-label={social.platform}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <Calendar size={18} className="text-gold" />
              Event Details
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold font-medium min-w-[60px]">Dates:</span>
                <span className="text-white/80">
                  26-28 February 2026
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-medium min-w-[60px]">Timings:</span>
                <span className="text-white/80">4:00 PM – 4:00 AM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-medium min-w-[60px]">Venue:</span>
                <span className="text-white/80">
                  {eventDetails.venue.name}<br />
                  {eventDetails.venue.address}<br />
                  {eventDetails.venue.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xl text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About the Expo', href: '#about' },
                { label: 'Expo Highlights', href: '#highlights' },
                { label: 'Book Your Stall', href: '/booking' },
                { label: 'Terms & Conditions', href: '#' },
                { label: 'Privacy Policy', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xl text-white mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address}<br />
                  {contactInfo.city} - {contactInfo.pincode}
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href="/booking"
              className="inline-block mt-8 px-6 py-3 bg-gold text-maroon font-body font-semibold text-sm tracking-wide hover:bg-gold-300 transition-colors duration-300"
            >
              Book Your Stall →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/50">
              © {new Date().getFullYear()} Souq-E-Deccan. All rights reserved.
            </p>
            <p className="font-body text-sm text-white/50">
              Celebrating Deccan Heritage & Culture
            </p>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 text-center pb-2">
            <p className="font-body text-sm text-white/40">
              Designed and Developed by{' '}
              <a
                href="https://shoaibdev.framer.website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors duration-300 underline decoration-white/20 hover:decoration-gold"
              >
                Mohammed Shoaib Choudry
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
