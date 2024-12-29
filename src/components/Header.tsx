import LanguageDropdown from './LanguageSelector/Dropdown' 


export default function Header({
  locale,
}: {
  locale: any;
}) {
  return (
    <header className="text-center bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h1 className="text-4xl font-bold text-text-primary mb-4">{locale.title}</h1>
      <p className="text-lg text-text-secondary">{locale.description}</p>
    </header>
  )
}