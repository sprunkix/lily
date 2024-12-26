import type { Video } from '@/types/video';

interface VideoSectionProps {
  videos?: Video[];
}

export default function VideoSection({ videos = [
  {
    title: 'Sprunki lily Gameplay',
    url: 'https://www.youtube.com/embed/videoseries?list=PLxxx',
    type: 'gameplay'
  },
  {
    title: 'Sprunki lily Tutorial',
    url: 'https://www.youtube.com/embed/videoseries?list=PLyyy',
    type: 'tutorial'
  }
] }: VideoSectionProps) {
  return (
    <section id="videos" className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Popular Videos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.title} className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-[315px] rounded-lg"
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