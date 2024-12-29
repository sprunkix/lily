
export default function StartButton() {
  return (
    <div id="gameOverlay" className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center transition-opacity duration-300 z-10">
      <button
        id="playButton"
        className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-secondary transition-colors shadow-md"
      >
      <i data-lucide="play" className="w-6 h-6"></i>
      <span>Play Now</span>
      </button>
    </div>
  );
}