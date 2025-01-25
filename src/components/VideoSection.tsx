import { YouTubeEmbed } from '@next/third-parties/google'
export default function VideoSection({
  locale
}: {
  locale: any;
}) {
  return (
    <section id="videos" className="bg-white rounded-xl shadow-sm p-8 mb-4 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{locale.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {locale.videos.map((video: any) => (
          <div key={video.title} className="aspect-w-16 aspect-h-9">
            <YouTubeEmbed videoid={video.url} style='w-full h-[315px] rounded-lg'></YouTubeEmbed>
          </div>
        ))}
      </div>
    </section>
  );
}