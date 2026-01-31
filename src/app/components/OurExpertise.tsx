import React from 'react';
import Link from 'next/link';

const expertiseBlocks = [
  {
    title: 'Front-end',
    techs: [
      { icon: '/icons/react.png', name: 'React' },
      { icon: '/icons/react.png', name: 'React Native' },
      { icon: '/icons/typescript.png', name: 'TypeScript' },
      { icon: '/icons/javascript.png', name: 'JavaScript' },
      { icon: '/icons/tailwind.png', name: 'Tailwind' },
      { icon: '/icons/flutter.png', name: 'Flutter' },
      { icon: '/icons/dart.png', name: 'Dart' },
    ],
  },
  {
    title: 'Back-end',
    techs: [
      { icon: '/icons/node.png', name: 'Node.js' },
      { icon: '/icons/postgres.png', name: 'PostgreSQL' },
      { icon: '/icons/supabase.png', name: 'Supabase' },
      { icon: '/icons/firebase.png', name: 'Firebase' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    techs: [
      { icon: '/icons/openai.png', name: 'OpenAI' },
      { icon: '/icons/anthropic.png', name: 'Anthropic' },
      { icon: '/icons/gemini.png', name: 'Gemini' },
      { icon: '/icons/claude.png', name: 'Claude' },
    ],
  },
  {
    title: 'Analytics',
    techs: [
      { icon: '/icons/python.svg', name: 'Python' },
      { icon: '/icons/google-analytics.png', name: 'Google Analytics' },
      { icon: '/icons/looker.png', name: 'Looker Studio' },
      { icon: '/icons/powerbi.png', name: 'Power BI' },
    ],
  },
  {
    title: 'Design & UI/UX',
    techs: [
      { icon: '/icons/figma.png', name: 'Figma' },
      { icon: '/icons/photoshop.png', name: 'Photoshop' },
      { icon: '/icons/illustrator.png', name: 'Illustrator' },
      { icon: '/icons/framer.png', name: 'Framer' },
    ],
  },
  {
    title: 'Stores',
    techs: [
      { icon: '/icons/play_store.png', name: 'Google Play' },
      { icon: '/icons/app_store.png', name: 'App Store' },
    ],
  },
];

export default function OurExpertise() {
  return (
    <section className="py-20 bg-[var(--brand-background)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary)]/80 bg-clip-text text-transparent">Our</span> Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertiseBlocks.map((block) => (
            <div
              key={block.title}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-[var(--surface-2)] border border-[var(--border)] group min-h-[340px] min-w-[260px] flex items-center justify-center cursor-pointer px-24 py-24"
            >
              <h3 className="text-2xl font-bold text-[var(--brand-primary)] z-10 group-hover:opacity-0 transition-opacity duration-300 text-center w-full">
                {block.title}
              </h3>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-8">
                {block.title === 'Back-end' ? (
                  <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
                    {block.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-10 h-10 object-contain ${tech.name === 'Google Analytics' ? 'p-1 bg-white bg-opacity-90 rounded' : ''}`}
                        />
                        <span className="text-xs text-white mt-1 text-center break-words w-20">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
                    {block.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-10 h-10 object-contain ${tech.name === 'Google Analytics' ? 'p-1 bg-white bg-opacity-90 rounded' : ''}`}
                        />
                        <span className="text-xs text-white mt-1 text-center break-words w-20">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* CTA após Expertise */}
        <div className="text-center mt-12">
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] text-white rounded-md font-semibold transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Fale com um especialista
          </Link>
        </div>
      </div>
    </section>
  );
} 