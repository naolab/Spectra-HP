'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function RootPage() {
  useEffect(() => {
    // Detect user's preferred language
    const userLang = navigator.language.split('-')[0];
    const supportedLocales = ['en', 'ja', 'es', 'zh'];
    const locale = supportedLocales.includes(userLang) ? userLang : 'en';

    window.location.href = `/Spectra/${locale}`;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <p>Redirecting...</p>
    </div>
  );
}
