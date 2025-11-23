'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const HowItWorks = () => {
    const t = useTranslations('HowItWorks');

    return (
        <section className="py-24 bg-zinc-900 text-white relative">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('title')}</h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    {/* Step 1 */}
                    <div className="flex-1 w-full p-8 rounded-2xl bg-black border border-white/10 relative z-10">
                        <div className="text-sm font-mono text-purple-400 mb-2">{t('step1.label')}</div>
                        <h3 className="text-2xl font-bold mb-4">{t('step1.title')}</h3>
                        <p className="text-gray-400">
                            {t('step1.description')}
                        </p>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:flex items-center justify-center text-gray-600">
                        <ArrowRight size={32} />
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 w-full p-8 rounded-2xl bg-black border border-white/10 relative z-10">
                        <div className="text-sm font-mono text-blue-400 mb-2">{t('step2.label')}</div>
                        <h3 className="text-2xl font-bold mb-4">{t('step2.title')}</h3>
                        <p className="text-gray-400">
                            {t('step2.description')}
                        </p>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:flex items-center justify-center text-gray-600">
                        <ArrowRight size={32} />
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 w-full p-8 rounded-2xl bg-black border border-white/10 relative z-10">
                        <div className="text-sm font-mono text-green-400 mb-2">{t('step3.label')}</div>
                        <h3 className="text-2xl font-bold mb-4">{t('step3.title')}</h3>
                        <p className="text-gray-400">
                            {t('step3.description')}
                        </p>
                    </div>

                    {/* Connecting Line for Desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 hidden md:block -z-0 transform -translate-y-1/2" />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
