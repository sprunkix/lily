
import Introduction from '@/components/Introduction'
import CharacterFeatures from '@/components/CharacterFeatures'
import CharacterForms from '@/components/CharacterForms'
import VideoSection from '@/components/VideoSection'
import GameSection from '@/components/game/GameSection'
import GameModules from '@/components/GameModules'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Language } from '@/lib/i18n'
import { getGameData } from '@/lib/content'


export default function Home({ params }: { params: { lang: Language } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      <Introduction />
      <CharacterFeatures/>
      <CharacterForms />
      <VideoSection />
      <GameSection />
      <GameModules  />
      <Footer />
    </div>
  )
}