'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GameCommentsProps {
  gameSlug: string;
  locale: any;
  lang: string;
}

export default function GameComments({ gameSlug, locale,lang }: GameCommentsProps) {
  const { theme } = useTheme();

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.comments}</h2>
      <Giscus
        id="comments"
        repo="sprunkix/sprunkix"
        repoId="R_kgDONNMsvA"
        category="Sprunki Game"
        categoryId="DIC_kwDONNMsvM4ClkiU"
        mapping="title"
        term={gameSlug}
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang={lang}
        loading='lazy'
        strict="0"
      />
    </section>
  );
}