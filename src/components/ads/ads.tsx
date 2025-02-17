import { GoogleAnalytics } from '@next/third-parties/google'
const GA_MEASUREMENT_ID = 'G-J81W601FNV' // Replace with your actual GA4 measurement ID
export default function Ads() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'development') {
  return (
    <>
    <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
	  <script defer data-domain="sprunkilily.com" src="https://app.pageview.app/js/script.js" />
	  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0831789447587581" crossOrigin="anonymous" />   
    <script async src="https://fundingchoicesmessages.google.com/i/pub-0831789447587581?ers=1"></script>
    <script  dangerouslySetInnerHTML={{
        __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
      }}
      />
    </>
  )
  } else {
    return null
  }
}
//<script dangerouslySetInnerHTML={{
//  __html: `
//  (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8751550,document.createElement('script'))
//   `}}
///>
//<script dangerouslySetInnerHTML={{
//  __html: `
//  (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8754996,document.createElement('script'))`
//}}
///>