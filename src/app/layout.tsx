import type { Metadata } from 'next'
import './globals.css'
import Ads from '@/components/ads/ads'
import { defaultLocale } from "@/lib/i18n";
import Navigation from '@/components/navigation/Navigation'
import Script from 'next/script';
import { LinkedinIcon } from 'react-share';


export const metadata: Metadata = {
  title: 'Sprunki lily - Complete Character Guide and Game Information',
  description: 'Discover Sprunki lily - the enchanting game character. Explore character details, features, forms, gallery, popular YouTube videos, and related game modules.',
  keywords: 'Sprunki lily, Sprunki lily game, Sprunki lily character, Sprunki lily features, Sprunki lily gameplay',
  alternates: {
    canonical: "https://sprunkiLily.com/", 
    languages: {
      "en": "https://sprunkiLily.com/en/",
      "ar": "https://sprunkiLily.com/ar/",
      "es": "https://sprunkiLily.com/es/",
      "fr": "https://sprunkiLily.com/fr/",
      "ja": "https://sprunkiLily.com/ja/",
      "ko": "https://sprunkiLily.com/ko/",
      "pt": "https://sprunkiLily.com/pt/",
      "ru": "https://sprunkiLily.com/ru/",
      "zh": "https://sprunkiLily.com/zh/",
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang={ defaultLocale}>
      <head>
      <Ads/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest" />
		  <meta name="google-adsense-account" content="ca-pub-0831789447587581"></meta>
      </head>
      <body className="bg-background"> 
        <Navigation /> 
        <main className="pt-16">
          {children}
        </main>
      </body>
      <Script src='/script.js'></Script>
    </html>
  )
}
