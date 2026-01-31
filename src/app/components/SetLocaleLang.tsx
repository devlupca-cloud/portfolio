'use client';

import { useEffect } from 'react';
import type { Locale } from '@/i18n';

export default function SetLocaleLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);
  return null;
}
