import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next';
import { defaultLocale, getDictionary, localeNames } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'About Sprunki Lily - Your Ultimate Gaming Destination | Sprunki Games',
  description: 'Discover the story behind Sprunki Lily, your comprehensive platform for Sprunki games and community. Join us for endless gaming adventures and connections.',
  keywords: 'Sprunki Lily, about Sprunki Lily, Sprunki games, Sprunki community, gaming platform, online games',
  openGraph: {
    title: 'About Sprunki Lily - Your Ultimate Gaming Destination',
    description: 'Join the Sprunki Lily community for endless gaming adventures. Discover our story and connect with fellow gamers.',
    type: 'website',
  }
};
export default async function AboutUsPage() {
  const langName = defaultLocale;
  const dict = await getDictionary(langName);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-text-primary mb-8">About Sprunki Lily</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
          <p className="text-text-secondary mb-6">
            Welcome to Sprunki Lily! We&apos;re your go-to site for all things related to Sprunki Lily. 
            Here, you&apos;ll find a collection of games featuring this iconic character at the heart of it all, 
            along with additional games and content for other Sprunki characters.
          </p>

          <p className="text-text-secondary mb-6">
            At Sprunki Lily, we focus on providing you with a comprehensive platform filled with exciting 
            games centered around Sprunki Lily. But that&apos;s not all – we also offer a variety of games 
            featuring other beloved Sprunki characters, so you can dive into a wide range of experiences 
            and stories.
          </p>

          <p className="text-text-secondary mb-6">
            Our site is home to the latest and most popular games related to Sprunki Lily and other 
            Sprunki characters. Whether you&apos;re looking for classic hits or the newest releases, 
            we&apos;ve got you covered with fresh updates. You can explore different types of games 
            and enjoy endless fun right here.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Community and Connection</h2>
          
          <p className="text-text-secondary mb-6">
            At Sprunki Lily, we believe the joy of gaming comes not just from playing, but from 
            connecting with fellow players. We encourage you to share your gaming experiences, 
            participate in community discussions, and engage with others who love Sprunki Lily 
            and all the characters from the Sprunki universe.
          </p>

          <p className="text-text-secondary">
            Join our community through forums, social media, or in the comments section – we welcome 
            everyone to come together, discover new games, and make lasting connections with other fans. 
            Let&apos;s explore, play, and create more fun moments in the world of Sprunki Lily!
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-text-primary mb-4">Join Our Community</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026 13.83 13.83 0 001.226-1.963.074.074 0 00-.041-.104 13.175 13.175 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
      <Footer locale={dict.footer} currentLang={langName} />
    </div>
  )
}