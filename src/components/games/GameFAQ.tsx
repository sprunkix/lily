interface GameFAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function GameFAQ({ faqs }: GameFAQProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-secondary/20 pb-6 last:border-0">
            <h3 className="text-xl font-semibold text-text-primary mb-2">{faq.question}</h3>
            <p className="text-text-secondary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}