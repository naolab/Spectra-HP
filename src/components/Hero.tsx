'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const t = useTranslations('Hero');
  const [downloadUrl, setDownloadUrl] = useState('https://github.com/naolab/Spectra/releases');

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('https://api.github.com/repos/naolab/Spectra/releases/latest');
        if (!res.ok) return;
        const data = await res.json();
        const asset = data.assets.find((a: any) => a.name.endsWith('.dmg')) ||
          data.assets.find((a: any) => a.name.endsWith('.zip'));
        if (asset) setDownloadUrl(asset.browser_download_url);
      } catch (e) {
        // Keep default URL
      }
    }
    fetchLatestRelease();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            {t('badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            {t('subtitle')}
            <br />
            <span className="text-white font-medium">{t('tagline')}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={downloadUrl}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t('download')}
            </a>
            <a
              href="https://github.com/naolab/Spectra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition backdrop-blur-sm flex items-center justify-center gap-2"
            >
              {t('github')}
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{t('supports')}</span>
            <div className="flex gap-3">
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Claude</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Gemini</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Codex</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Hero Image */}
          <div className="relative group flex justify-center z-20">
            <img
              src="/herod.png"
              alt="Spectra Interface"
              className="w-full md:w-[150%] md:max-w-none translate-x-0 md:translate-x-20 object-contain opacity-90 group-hover:opacity-100 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
