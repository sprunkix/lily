import React from 'react';

export default function CharacterForms() {
  const forms = [
    { title: 'Base Form', description: 'The original state of Sprunki lily' },
    { title: 'Enhanced Form', description: 'Powered-up version with increased capabilities' },
    { title: 'Special Forms', description: 'Situation-specific transformations' },
    { title: 'Ultimate Form', description: 'The most powerful state achievable' }
  ];

  return (
    <section id="forms" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Character Forms and Transformations</h2>
      <p className="text-gray-600 mb-6">
        Sprunki lily possesses the unique ability to adapt and transform, featuring multiple forms that players can utilize in different situations:
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {forms.map((form, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">{form.title}</h3>
            <p className="text-gray-600">{form.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}