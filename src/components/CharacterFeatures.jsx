import React from 'react';

export default function CharacterFeatures() {
  const abilities = [
    'Magical Transformation Capabilities',
    'Special Movement Techniques',
    'Strategic Combat Skills',
    'Environmental Interaction Powers'
  ];

  return (
    <section id="character-features" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Character Features and Abilities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unique Abilities</h3>
          <ul className="space-y-2 text-gray-600">
            {abilities.map((ability, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {ability}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Character Development</h3>
          <p className="text-gray-600">
            Sprunki lily's character progression system allows players to enhance abilities and unlock new features throughout their gaming journey. Each advancement brings new strategic options and gameplay possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}