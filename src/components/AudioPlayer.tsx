'use client';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <p className="mb-2 text-sm font-medium text-gray-700">{title}</p>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
