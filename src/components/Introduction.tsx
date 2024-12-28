export default function Introduction({
  locale
}: {
  locale: any;
}) {
  return (
    <section id="introduction" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{locale.title}</h2>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">{locale.description}</p>
      </div>
    </section>
  )
}