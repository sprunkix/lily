import React from 'react';

export default function VideoSection() {
  return (
    <section id="videos" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Videos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-[315px] rounded-lg"
            src="https://www.youtube.com/embed/2Hi6ZOsYmCc?si=3vm1ioHKokjLm71s" 
            title="Sprunki lily Gameplay"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-[315px] rounded-lg"
            src="https://www.youtube.com/embed/videoseries?list=PLyyy" 
            title="Sprunki lily Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
}