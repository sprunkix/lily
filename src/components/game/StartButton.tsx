'use client'

interface StartButtonProps {
  onClick: () => void;
}

export default function StartButton({ onClick }: StartButtonProps) {
  return (
    <div className="w-full h-[600px] rounded-lg bg-accent/20 flex items-center justify-center border border-secondary/20">
      <button
        onClick={onClick}
        className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-secondary transition-colors shadow-md"
      >
        Start Game
      </button>
    </div>
  );
}