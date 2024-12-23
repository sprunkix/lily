import React from 'react';

export default function VideoSection() {
  return (
    <section id="videos" className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Videos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2Hi6ZOsYmCc?si=3vm1ioHKokjLm71s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}