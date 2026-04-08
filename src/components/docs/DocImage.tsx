import Image from "next/image";

export function DocImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={500}
      className="rounded-xl my-4"
      loading="eager"
    />
  );
}