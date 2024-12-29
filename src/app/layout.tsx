import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
const GA_MEASUREMENT_ID = 'G-J81W601FNV' // Replace with your actual GA4 measurement ID
import { defaultLocale } from "@/lib/i18n";
import Navigation from '@/components/navigation/Navigation'
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Sprunki lily - Complete Character Guide and Game Information',
  description: 'Discover Sprunki lily - the enchanting game character. Explore character details, features, forms, gallery, popular YouTube videos, and related game modules.',
  keywords: 'Sprunki lily, Sprunki lily game, Sprunki lily character, Sprunki lily features, Sprunki lily gameplay'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang={ defaultLocale}>
      <head>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
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
