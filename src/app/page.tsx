import Introduction from '@/components/Introduction'
import CharacterFeatures from '@/components/CharacterFeatures'
import CharacterForms from '@/components/CharacterForms'
import VideoSection from '@/components/VideoSection'
import GameSection from '@/components/game/GameSection'
import GameModules from '@/components/GameModules'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
	  <VideoSection />
	  <GameSection />
	  <Introduction />
      <CharacterFeatures />
      <CharacterForms />
      <GameModules />
      <Footer />
    </div>
  )
}