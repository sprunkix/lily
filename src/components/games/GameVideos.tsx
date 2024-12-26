interface GameVideosProps {
  videos: {
    title: string;
    url: string;
    thumbnail: string;
  }[];
}

export default function GameVideos({ videos }: GameVideosProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Game Videos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.title} className="aspect-video">
            <iframe 
              className="w-full h-full rounded-lg"
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