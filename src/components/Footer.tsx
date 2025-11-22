import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="py-12 bg-black text-gray-400 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-white font-bold text-lg mb-1">Spectra</h3>
                    <p className="text-sm">{t('copyright')}</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/naolab/Spectra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <Github size={24} />
                    </a>
                    <a href="https://x.com/nao_u7589422" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
