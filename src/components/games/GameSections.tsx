interface GameSectionsProps {
    locale: {
        title: string;
    };
    games: {
        gameUrl: string;
        ogImage: string;
        title:string;
    }[];
  }
  
  export default function GameSections({ locale, games }: GameSectionsProps) {
    return (
      <section className="bg-white rounded-xl shadow-sm p-8 mb-4 border border-secondary/20">
        <h2 className="text-3xl font-bold text-text-primary mb-4">{locale.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
           <a 
           href={game.gameUrl}
           className="block group hover:opacity-95 transition-opacity"
           target="_blank"
           rel="noopener noreferrer"
         >
           <div className="relative aspect-video rounded-lg overflow-hidden border border-secondary/20">
             <img 
               src={game.ogImage} 
               alt={game.title}
               className="w-full h-full object-cover"
             />
           </div>
           <h3 className="mt-2 text-text-primary font-medium group-hover:text-primary transition-colors">
             {game.title}
           </h3>
         </a>
          ))}
        </div>
      </section>
    );
  }