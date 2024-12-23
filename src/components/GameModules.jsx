import React from 'react';

export default function GameModules() {
  const modules = [
    {
      icon: '🎮',
      title: 'Story Mode',
      description: 'Experience Sprunki lily\'s complete narrative journey'
    },
    {
      icon: '🏆',
      title: 'Challenge Mode',
      description: 'Test your skills in specialized missions'
    },
    {
      icon: '👥',
      title: 'Multiplayer Features',
      description: 'Interact with other players in the Sprunki lily universe'
    },
    {
      icon: '🎨',
      title: 'Custom Scenarios',
      description: 'Create your own adventures with Sprunki lily'
    }
  ];

  return (
    <section id="game-modules" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Game Modules and Features</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">The Sprunki lily game experience is enhanced through various specialized modules:</p>
          <ul className="space-y-4">
            {modules.map((module, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary mr-2">{module.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}