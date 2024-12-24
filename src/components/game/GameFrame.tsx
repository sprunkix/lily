'use client'

interface GameFrameProps {
  url: string;
}

export default function GameFrame({ url }: GameFrameProps) {
  return (
    <iframe 
      className="w-full h-[600px] rounded-lg"
      src={url}
      title="Play Sprunki lily"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}