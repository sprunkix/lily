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