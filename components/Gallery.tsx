import Image from "next/image";
import Reveal from "@/components/Reveal";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Optional grid span for a varied, masonry-like layout. */
  wide?: boolean;
};

/**
 * Animated photo grid used as social proof on the landing page. Each
 * tile reveals on scroll and zooms gently on hover; captions stay
 * visible (not hover-only) so the context reads on touch devices too.
 */
export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={i * 80}
          className={photo.wide ? "sm:col-span-2" : ""}
        >
          <figure className="group relative overflow-hidden rounded-2xl border border-navy/5 bg-navy shadow-sm">
            <div className={`relative w-full ${photo.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.wide
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-sand/90">
              {photo.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
