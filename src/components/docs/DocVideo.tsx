export function DocVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      controls
      className="w-full rounded-xl my-4"
    />
  );
}

export function DocYouTube({ embedId }: { embedId: string }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      className="w-full h-[400px] rounded-xl my-4"
      allowFullScreen
    />
  );
}