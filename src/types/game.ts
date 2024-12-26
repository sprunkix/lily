export interface GameFeature {
  title: string;
  description: string;
  icon: string;
}

export interface GameVideo {
  title: string;
  url: string;
  thumbnail: string;
}

export interface GameFAQ {
  question: string;
  answer: string;
}

export interface GameData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  gameUrl: string;
  features: GameFeature[];
  videos: GameVideo[];
  faqs: GameFAQ[];
}