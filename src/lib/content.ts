import type { Language } from './i18n';
import type { HomeContent } from '@/types/content';

// Simulated content data
const contentData: Record<Language, HomeContent> = {
  en: {
    introduction: {
      frontmatter: {
        title: 'Sprunki lily - The Magical Game Character',
        subtitle: 'Your complete guide to understanding and mastering Sprunki lily\'s world'
      },
      content: `Sprunki lily emerges as one of the most captivating characters in modern gaming...`
    },
    features: {
      frontmatter: {
        title: 'Character Features and Abilities',
        abilities: [
          {
            title: 'Magical Transformation Capabilities',
            description: 'Transform into different forms with unique powers'
          }
        ]
      },
      content: ''
    },
    forms: {
      frontmatter: {
        title: 'Character Forms and Transformations',
        forms: [
          {
            title: 'Base Form',
            description: 'The original state of Sprunki lily'
          }
        ]
      },
      content: ''
    },
    videos: {
      frontmatter: {
        title: 'Popular Videos',
        videos: [
          {
            title: 'Gameplay Video',
            url: 'https://youtube.com/embed/xxxx'
          }
        ]
      },
      content: ''
    },
    gameModules: {
      frontmatter: {
        title: 'Game Modules',
        modules: [
          {
            title: 'Story Mode',
            description: 'Experience the complete narrative'
          }
        ]
      },
      content: ''
    },
    footer: {
      frontmatter: {
        copyright: '© 2024 Sprunki lily',
        message: 'Follow us for updates'
      },
      content: ''
    }
  }
};

export async function getHomeContent(lang: Language = 'en'): Promise<HomeContent> {
  return contentData[lang] || contentData.en;
}