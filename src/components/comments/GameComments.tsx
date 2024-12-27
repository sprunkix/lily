'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GameCommentsProps {
  gameSlug: string;
}

export default function GameComments({ gameSlug }: GameCommentsProps) {
  const { theme } = useTheme();

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Comments</h2>
      <Giscus
        id="comments"
        repo="your-github-username/your-repo-name"
        repoId="YOUR_REPOSITORY_ID"
        category="Games"
        categoryId="YOUR_CATEGORY_ID"
        mapping="specific"
        term={gameSlug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </section>
  );
}