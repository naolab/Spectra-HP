'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ja', label: '日本語' },
        { code: 'es', label: 'Español' },
        { code: 'zh', label: '中文' },
    ];

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-sm text-sm font-medium"
            >
                <Globe size={16} />
                <span className="uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition ${locale === lang.code ? 'text-white bg-white/5' : 'text-gray-400'
                                }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
