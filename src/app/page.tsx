import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Highlights } from '@/components/highlights'
import { Team } from '@/components/team'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <Team />

      {/* Final CTA Section */}
      <section className="relative bg-sand section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 moroccan-overlay opacity-40" />

        {/* Decorative Arch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border-b-2 border-gold/20 rounded-b-full opacity-50" />

        <div className="relative container-heritage text-center">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-teal mb-4 block font-bold">
            Join the Celebration
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-maroon mb-6">
            Be Part of<br />Something Grand
          </h2>
          <p className="font-body text-lg text-coffee/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re an artisan looking to showcase your craft, a brand
            seeking cultural exposure, or a visitor eager to experience the Deccan&apos;s
            heritage—Souq-E-Deccan welcomes you.
          </p>

          {/* Decorative Divider */}
          <div className="divider-ornate max-w-xs mx-auto mb-10">
            <span className="text-gold">✦</span>
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10 text-coffee/60 font-body">
            <div className="text-center">
              <span className="block text-3xl font-heading font-bold text-maroon">26-28</span>
              <span className="text-sm">February 2025</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold/30" />
            <div className="text-center">
              <span className="block text-3xl font-heading font-bold text-maroon">200+</span>
              <span className="text-sm">Curated Stalls</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold/30" />
            <div className="text-center">
              <span className="block text-3xl font-heading font-bold text-maroon">3</span>
              <span className="text-sm">Days of Wonder</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booking"
              className="btn-primary inline-block"
            >
              Book Your Stall
            </a>
            <a
              href="mailto:souqedeccan@gmail.com"
              className="btn-heritage group"
            >
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

