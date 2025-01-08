'use client'

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'development') {
  return (
    <>
    <script 
      dangerouslySetInnerHTML={{
        __html: `
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
        `
    }}
    />
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
	  <script defer data-domain="sprunkilily.com" src="https://app.pageview.app/js/script.js" />
	  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0831789447587581" crossOrigin="anonymous" />
    <script dangerouslySetInnerHTML={{
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}}
    />
    <script dangerouslySetInnerHTML={{
      __html: `
          (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8751550,document.createElement('script'))
           `}}
    />
    <script dangerouslySetInnerHTML={{
        __html: `
            function consentGrantedAdStorage() {
                gtag('consent', 'update', {
                  'ad_storage': 'granted'
                });
              }
            `}}
      />
    </>
  )
  } else {
    return null
  }
}