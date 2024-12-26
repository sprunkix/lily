interface RelatedGameProps {
  title: string;
  imageUrl: string;
  gameUrl: string;
}

export default function RelatedGame({ title, imageUrl, gameUrl }: RelatedGameProps) {
  return (
    <a 
      href={gameUrl}
      className="block group hover:opacity-95 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden border border-secondary/20">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-2 text-text-primary font-medium group-hover:text-primary transition-colors">
        {title}
      </h3>
    </a>
  );
}