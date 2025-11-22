import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const t = useTranslations('Hero');

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
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2">
              <Download size={20} />
              {t('download')}
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition backdrop-blur-sm flex items-center justify-center gap-2">
              {t('github')}
              <ArrowRight size={20} />
            </button>
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
          <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <img
              src="/hero.png"
              alt="Spectra Interface"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </div>

          {/* Floating Elements */}
          <div className="absolute -bottom-6 -left-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm font-mono text-green-400">{t('mcpActive')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
