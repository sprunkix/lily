  interface GameVideosProps {
  videos: {
    title: string;
    url: string;
    thumbnail: string;
  }[];
  locale: any;
}

export default function GameVideos({ videos, locale }: GameVideosProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">{locale.videos}</h2>
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-12">
        {videos.map((video) => (
          <div key={video.title} className="aspect-video">
            <iframe 
              className="w-full h-[600px] rounded-lg"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}