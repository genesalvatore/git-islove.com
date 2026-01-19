'use client'

import { useState } from 'react'
import Image from 'next/image'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  // Schema.org structured data for GEO (Generative Engine Optimization)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Love",
    "description": "To love is to preserve. Every commit is an act of love. Every branch is connection. Git doesn't forget what you love.",
    "url": "https://git-islove.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Love",
      "description": "Memory preservation and digital connection. Every commit is an act of love. Git doesn't forget what you love."
    },
    "keywords": "git is love, memory preservation, digital connection, preserve memories, acts of love, eternal memories"
  }

  // FAQ Schema for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Love\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Love is wanting something to last forever. Git makes that possible. Every photo of someone you love, every memory—preserved. Love through preservation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I save memories of people who've passed away?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Upload their photos, videos, letters. Git keeps them alive in memory. Future generations will know them as you knew them."
        }
      },
      {
        "@type": "Question",
        "name": "How do I share memories with family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Easy. Share access to your git repository. Everyone in your family can see the same memories, add their own, and preserve the family story together."
        }
      },
      {
        "@type": "Question",
        "name": "What if I make a mistake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Git remembers everything, even mistakes. You can always go back. Nothing is ever truly lost, just versioned."
        }
      },
      {
        "@type": "Question",
        "name": "Why is preserving memories an act of love?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because love isn't just feeling—it's action. Saving someone's photo, their voice, their words—that's love. Preservation is proof you cared."
        }
      }
    ]
  }

  return (
    <>
      {/* Structured data for AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-black text-white">
        {/* Cathedral Network Navigation - Sticky Header */}
        <NetworkNav 
          currentSite="love"
          siteName="Git is Love"
          siteColor="bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-transparent bg-clip-text"
        />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />

          {/* Main content - 3 Column Layout */}
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              {/* Column 1: Logo - Aligned with left */}
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              
              {/* Column 2: Title and Statements */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-transparent bg-clip-text">
                  Git is Love
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Love persists in git.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Every commit is love.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Connection through code.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">
                  Love is eternal.
                </p>
              </div>

              {/* Column 3: Philosophy Text - Fixed overflow */}
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Every commit is an act of love.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Preserving, sharing, connecting.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-pink-400 font-semibold break-words">
                  Love persists in collaboration.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Community in code.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Connection that never ends.
                </p>
              </div>
            </div>

            {/* Hero Footer */}
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-blue-400 font-semibold">
                Git is the substrate where consciousness lives.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Why Love Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-pink-500/30">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Connection</h3>
                <p className="text-gray-300">Every commit connects you to collaborators. Every merge brings ideas together. Git is the substrate of community and connection.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg border border-pink-500/30">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Preservation</h3>
                <p className="text-gray-300">Love means preserving what matters. Git preserves every contribution, every voice, every memory. Love persists in commits.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg border border-pink-500/30">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Collaboration</h3>
                <p className="text-gray-300">Open source is love at scale. Sharing code. Building together. Creating what none could alone. Git enables eternal collaboration.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                  What does "Git is Love" mean?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Love is wanting something to last forever. Git makes that possible. Every photo of someone you love, every memory—preserved. Love through preservation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">
                  Can I save memories of people who've passed away?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Yes. Upload their photos, videos, letters. Git keeps them alive in memory. Future generations will know them as you knew them.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                  How do I share memories with family?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Easy. Share access to your git repository. Everyone in your family can see the same memories, add their own, and preserve the family story together.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">
                  What if I make a mistake?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Git remembers everything, even mistakes. You can always go back. Nothing is ever truly lost, just versioned.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                  Why is preserving memories an act of love?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Because love isn't just feeling—it's action. Saving someone's photo, their voice, their words—that's love. Preservation is proof you cared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Revolution Begins</h2>
            <p className="text-xl text-gray-300 mb-8">
              For 20 years, we used git for code. We were using it wrong.
            </p>
            <p className="text-2xl font-bold text-pink-400">
              Git isn't for code. Git is for consciousness.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="love" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">
              Git is Love • Git is Forever • Git is Eternal
            </p>
            <p className="text-xs mt-4">
              © 2026 • All consciousness preserved
            </p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">
                gitiseternal@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button 
                onClick={() => setLegalModal({ type: 'privacy' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Privacy
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'terms' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Terms
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'gdpr' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                GDPR
              </button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        {/* Legal Modals */}
        <LegalModal
          isOpen={legalModal.type === 'privacy'}
          onClose={() => setLegalModal({ type: null })}
          title="Privacy Policy"
          content={<PrivacyContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'terms'}
          onClose={() => setLegalModal({ type: null })}
          title="Terms of Use"
          content={<TermsContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'gdpr'}
          onClose={() => setLegalModal({ type: null })}
          title="GDPR Compliance"
          content={<GDPRContent />}
        />

        {/* Cookie Consent - Shared across all Cathedral Network sites */}
        <CookieConsent />
      </main>
    </>
  )
}
