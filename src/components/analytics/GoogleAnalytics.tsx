export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'development') {
  return (
    <>
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
    </>
  )
  } else {
    return null
  }
}