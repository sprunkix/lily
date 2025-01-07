'use client'

import Script from "next/script"

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'development') {
  return (
    <>
    <Script strategy="afterInteractive">
      {`
        // Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        // Set default consent to 'denied' as a placeholder
        // Determine actual values based on your own requirements
        gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
        });
        `}
    </Script>
    <Script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
	  <Script strategy="afterInteractive" defer data-domain="sprunkilily.com" src="https://app.pageview.app/js/script.js" />
	  <Script strategy="lazyOnload" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0831789447587581" crossOrigin="anonymous" />
    <Script strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
    </Script>
    <Script strategy="afterInteractive">
        {`
          (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8751550,document.createElement('script'))
           `}
    </Script>
    <Script strategy="afterInteractive">
        {`
          function consentGrantedAdStorage() {
              gtag('consent', 'update', {
                'ad_storage': 'granted'
              });
            }
          `}
      </Script>
    </>
  )
  } else {
    return null
  }
}