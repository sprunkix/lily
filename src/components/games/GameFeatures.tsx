interface GameFeatureProps {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  locale: any;
}

export default function GameFeatures({ features, locale }: GameFeatureProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-4 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{locale.features}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 bg-accent/10 rounded-lg">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}