interface GameFrameProps {
  url: string;
}

export default function GameFrame({ url }: GameFrameProps) {
  return (
    <iframe id="gameIframe"
      className="w-full h-[600px] rounded-lg opacity-10"
      src={url}
      title="Play Sprunki lily"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}