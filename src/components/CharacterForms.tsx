import React from 'react';

export default function CharacterForms({
  locale
}: {
  locale: any;
}) {

  return (
    <section id="forms" className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.title}</h2>
      <p className="text-text-secondary mb-6">
        {locale.description}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locale.forms.map((form: any, index: any) => (
          <div key={index} className="p-6 bg-accent/10 rounded-lg border border-secondary/20">
            <h3 className="font-semibold text-text-primary mb-2">{form.title}</h3>
            <p className="text-text-secondary">{form.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}