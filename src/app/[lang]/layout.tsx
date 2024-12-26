import type { Metadata } from 'next'
import '../globals.css'
import { SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n'
import LanguageSelector from '@/components/LanguageSelector'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({
    lang,
  }));
}

export const metadata: Metadata = {
  title: 'Sprunki lily - Complete Character Guide and Game Information',
  description: 'Discover Sprunki lily - the enchanting game character. Explore character details, features, forms, gallery, popular YouTube videos, and related game modules.',
  keywords: 'Sprunki lily, Sprunki lily game, Sprunki lily character, Sprunki lily features, Sprunki lily gameplay'
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  return (
    <html lang={params.lang}>
      <head>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </head>
      <body className="bg-background relative">
        <LanguageSelector />
        {children}
      </body>
    </html>
  )
}