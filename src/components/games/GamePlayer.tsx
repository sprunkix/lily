
import GameFrame from '../game/GameFrame';
import StartButton from '../game/StartButton';
import ShareButtons from '../share/ShareButtons';

interface GamePlayerProps {
  gameUrl: string;
  title: string;
  description: string;
  locale: any;
}

export default function GamePlayer({ gameUrl, title, description, locale }: GamePlayerProps) {

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.playNow}</h2>
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-12">
        <StartButton />
        <GameFrame url={gameUrl} />
       </div>
       <ShareButtons 
          url={shareUrl}
          title={title}
          description={description}
        />
    </section>
  );
}