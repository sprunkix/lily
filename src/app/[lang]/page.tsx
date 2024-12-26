import { getHomeContent } from '@/lib/i18n'
import Introduction from '@/components/Introduction'
import CharacterFeatures from '@/components/CharacterFeatures'
import CharacterForms from '@/components/CharacterForms'
import VideoSection from '@/components/VideoSection'
import GameSection from '@/components/game/GameSection'
import GameModules from '@/components/GameModules'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Language } from '@/lib/i18n'

export default function Home({ params }: { params: { lang: Language } }) {
  const content = getHomeContent(params.lang);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header 
        title={content.introduction.frontmatter.title}
        subtitle={content.introduction.frontmatter.subtitle}
      />
      <Introduction content={content.introduction.content} />
      <CharacterFeatures {...content.features.frontmatter} />
      <CharacterForms {...content.forms.frontmatter} />
      <VideoSection {...content.videos.frontmatter} />
      <GameSection />
      <GameModules {...content.gameModules.frontmatter} />
      <Footer {...content.footer.frontmatter} />
    </div>
  )
}