'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GameCommentsProps {
  gameSlug: string;
  locale: any;
}

export default function GameComments({ gameSlug, locale }: GameCommentsProps) {
  const { theme } = useTheme();

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.comments}</h2>
      <Giscus
        id="comments"
        repo="sprunkix/sprunkix"
        repoId="R_kgDONNMsvA"
        category="sprunki-game"
        categoryId="DIC_kwDONNMsvM4ClkiU"
        mapping="pathname"
        term={gameSlug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        strict="0"
      />
    </section>
  );
}