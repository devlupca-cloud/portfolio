'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function HomeHero({ locale }: { locale: Locale }) {
  const t = getContent(locale).hero;
  const [showMouse, setShowMouse] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowMouse(window.scrollY < 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--brand-background)] overflow-hidden pt-20">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/african-american-manager-analyzing-marketing-statistics-working-overhours-project-strategy-startup-office-entrepreneur-planning-business-investment-help-increase-company-profit.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        aria-hidden
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--brand-primary)_15%,transparent)]" />
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-start">
        <div className="w-full max-w-2xl flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Image
              src="/devlup_logo_final.svg"
              alt="Devlup"
              width={500}
              height={500}
              className="h-20 md:h-28 w-auto"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
          >
            <span className="text-white">{t.headline}</span>
            <br />
            <span className="text-[var(--brand-primary)]">{t.headlineAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-[var(--text-muted)] text-base max-w-xl mb-8"
          >
            {t.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-semibold hover:bg-[var(--brand-primary-strong)] transition-colors text-center"
            >
              {t.ctaConsult}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="px-6 py-3 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] rounded-lg font-semibold hover:bg-[var(--brand-primary)] hover:text-white transition-colors text-center"
            >
              {t.ctaProjects}
            </Link>
          </motion.div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-center pb-8 z-10 transition-all duration-500 ${
          showMouse ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="relative flex items-center justify-start" style={{ width: 32, height: 54 }}>
          <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="1.5"
              y="1.5"
              width="29"
              height="51"
              rx="14.5"
              stroke="currentColor"
              strokeWidth="3"
              className="text-white"
              style={{
                strokeDasharray: 160,
                strokeDashoffset: showMouse ? 0 : 160,
                transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          </svg>
          <svg
            className={`absolute left-1/2 bottom-1 text-[var(--brand-primary)] ${showMouse ? 'hero-mouse-arrow' : ''}`}
            style={{ transform: 'translate(-50%, -50%)' }}
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 9L8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
