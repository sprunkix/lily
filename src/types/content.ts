export interface ContentSection {
  frontmatter: Record<string, any>;
  content: string;
}

export interface HomeContent {
  introduction: ContentSection;
  features: ContentSection;
  forms: ContentSection;
  videos: ContentSection;
  gameModules: ContentSection;
  footer: ContentSection;
}