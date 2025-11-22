import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spectra - AI Screen Sharing Interface",
  description: "The bridge between your screen and AI Agents. See. Select. Solve.",
  metadataBase: new URL('https://naolab.github.io/Spectra-HP'),
  openGraph: {
    title: "Spectra - AI Screen Sharing Interface",
    description: "The bridge between your screen and AI Agents. See. Select. Solve.",
    url: 'https://naolab.github.io/Spectra-HP',
    siteName: 'Spectra',
    images: [
      {
        url: '/Spectra-HP/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spectra - AI Screen Sharing Interface',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spectra - AI Screen Sharing Interface",
    description: "The bridge between your screen and AI Agents. See. Select. Solve.",
    images: ['/Spectra-HP/og-image.png'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Load messages directly for static export
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
