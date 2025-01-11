
import GameFrame from './GameFrame';
import StartButton from './StartButton';

export default function GameSection({gameUrl, locale}:{gameUrl:string, locale:any}) {
  return (
    <section id="game" className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Play Sprunki lily</h2>
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <StartButton />
        <GameFrame url={gameUrl} />
      </div>
    </section>
  );
}