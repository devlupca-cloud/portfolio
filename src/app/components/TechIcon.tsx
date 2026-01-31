import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechIconProps {
  name: string;
  icon?: string;
}

const iconMap: Record<string, string> = {
  'React': '/icons/React.png',
  'React Native': '/icons/React.png',
  'TypeScript': '/icons/typescript.png',
  'JavaScript': '/icons/javascript.png',
  'Tailwind': '/icons/tailwind.png',
  'Flutter': '/icons/flutter.png',
  'Dart': '/icons/Dart.png',
  'Node.js': '/icons/node.png',
  'PostgreSQL': '/icons/postgres.png',
  'Supabase': '/icons/supabase.png',
  'Firebase': '/icons/firebase.png',
  'OpenAI': '/icons/openai.png',
  'Anthropic': '/icons/anthropic.png',
  'Gemini': '/icons/gemini.png',
  'Claude': '/icons/claude.png',
  'Python': '/icons/python.svg',
  'Google Analytics': '/icons/google-analytics.png',
  'Looker Studio': '/icons/looker.png',
  'Power BI': '/icons/powerbi.png',
  'Figma': '/icons/figma.png',
  'Photoshop': '/icons/photoshop.png',
  'Illustrator': '/icons/illustrator.png',
  'Framer': '/icons/framer.png',
  'Google Play': '/icons/play_store.png',
  'App Store': '/icons/app_store.png',
  'iOS': '/icons/iOS.jpg',
  'Android': '/icons/android.webp',
  'AWS': '/icons/gcp.png',
  'Docker': '/icons/window.svg',
  'Git': '/icons/grid.svg',
  'MongoDB': '/icons/grid.svg',
};

export default function TechIcon({ name }: TechIconProps) {
  const [hovered, setHovered] = useState(false);
  const iconSrc = iconMap[name] || '/icons/grid.svg';

  return (
    <div
      className="relative flex flex-col items-center justify-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{ outline: 'none' }}
    >
      <img
        src={iconSrc}
        alt={name}
        className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-xl transition-transform duration-200 group-hover:scale-125 group-focus:scale-125"
        draggable={false}
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 bottom-8 px-6 py-3 rounded-2xl bg-black/90 text-white text-base font-bold shadow-2xl z-[9999] border-2 border-[var(--brand-primary)] pointer-events-none select-none"
            style={{
              transform: 'translateX(-50%)',
              minWidth: 120,
              maxWidth: 220,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 