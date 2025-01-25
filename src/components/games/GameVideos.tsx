import { YouTubeEmbed } from '@next/third-parties/google'

interface GameVideosProps {
  videos: {
    title: string;
    url: string;
  }[];
  locale: any;
}

export default function GameVideos({ videos, locale }: GameVideosProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-4 border border-secondary/10">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{locale.videos}</h2>
      <div className="relative w-full aspect-video  rounded-lg overflow-hidden mb-12">
        {videos.map((video) => (
          <div key={video.title} className="aspect-video">
            <YouTubeEmbed videoid={video.url} style='w-full h-[315px] rounded-lg'></YouTubeEmbed>
          </div>
        ))}
      </div>
    </section>
  );
}