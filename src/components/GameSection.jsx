import React from 'react';

export default function GameSection() {
  return (
    <section id="game" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Play Sprunki lily</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          className="w-full h-[600px] rounded-lg"
          src="https://game.sprunkix.com/game/sprunki-extra-characters/index.html"
          title="Play Sprunki lily"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
}