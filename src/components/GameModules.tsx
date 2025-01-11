export default function GameModules({
  locale
}: {
  locale: any;
}) {
  return (
    <section id="game-modules" className="bg-white rounded-xl shadow-sm p-8 mb-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{locale.title}</h2>
      
        <div>
          <p className="text-gray-600 mb-4">{locale.description}</p>
          <ul className="space-y-4 grid md:grid-cols-2">
            {locale.modules.map((module: any, index: any ) => (
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
    </section>
  );
}