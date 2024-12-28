import React from 'react';

export default function CharacterFeatures({
    locale
  }: {
    locale: any;
  }) {
  return (
    <section id="character-features" className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-4">{locale.abilitiesTitle}</h3>
          <ul className="space-y-2 text-text-secondary">
            {locale.abilities.map((ability: any, index: any) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {ability.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-4">{locale.developmentTitle}</h3>
          <p className="text-text-secondary">
            {locale.development}
          </p>
        </div>
      </div>
    </section>
  );
}