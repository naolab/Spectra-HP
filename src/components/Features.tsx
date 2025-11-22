import React from 'react';
import { Monitor, Cpu, Layers, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Features = () => {
    const t = useTranslations('Features');

    const features = [
        {
            icon: <Layers className="w-8 h-8 text-purple-500" />,
            title: t('gui.title'),
            description: t('gui.description')
        },
        {
            icon: <Cpu className="w-8 h-8 text-blue-500" />,
            title: t('mcp.title'),
            description: t('mcp.description')
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: t('multiClient.title'),
            description: t('multiClient.description')
        },
        {
            icon: <Monitor className="w-8 h-8 text-green-500" />,
            title: t('native.title'),
            description: t('native.description')
        }
    ];

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 group">
                            <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
