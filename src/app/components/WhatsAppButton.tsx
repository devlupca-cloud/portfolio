'use client';
import { useMemo } from 'react';

export default function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const href = useMemo(() => {
    if (!phone) return '';
    const url = new URL('https://wa.me/' + phone);
    const msg = 'Olá! Gostaria de conversar sobre um projeto com a Devlup.';
    url.searchParams.set('text', msg);
    return url.toString();
  }, [phone]);

  if (!phone) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-full shadow-lg transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.19c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.42 1.03 2.79 1.17 2.98.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33z" />
      </svg>
      WhatsApp
    </a>
  );
}

