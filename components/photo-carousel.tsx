"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const GROUP_SIZE = 2;

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );
}

type Lightbox = {
  photos: string[];
  index: number;
};

type PhotoCarouselProps = {
  id: string;
  icon: ReactNode;
  title: string;
  basePath: string;
  previewPhotos: string[];
  allPhotos: string[];
};

export default function PhotoCarousel({
  id,
  icon,
  title,
  basePath,
  previewPhotos,
  allPhotos,
}: PhotoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [fullGalleryOpen, setFullGalleryOpen] = useState(false);
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  const groups = chunk(previewPhotos, GROUP_SIZE);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div
      id={id}
      className="flex w-full flex-col items-center gap-5 px-4 md:px-8 py-4 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="flex flex-col items-center gap-1 font-primary text-black">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-lg">{title}</span>
        </div>
        <span className="text-sm text-[#CF2224]">{allPhotos.length} fotos</span>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {groups.map((group, groupIndex) => (
            <CarouselItem key={group[0]} className="basis-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.map((file, cellIndex) => (
                  <button
                    key={file}
                    type="button"
                    onClick={() =>
                      setLightbox({
                        photos: previewPhotos,
                        index: groupIndex * GROUP_SIZE + cellIndex,
                      })
                    }
                    className="relative block aspect-3/2 w-full cursor-zoom-in overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`${basePath}/${file}`}
                      alt={title}
                      fill
                      sizes="(min-width: 640px) 40vw, 92vw"
                      quality={90}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/85 hover:bg-white" />
        <CarouselNext className="right-2 bg-white/85 hover:bg-white" />
      </Carousel>

      {groups.length <= 20 ? (
        <div className="flex flex-wrap justify-center gap-1.5">
          {groups.map((group, i) => (
            <span
              key={group[0]}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                i === selected ? "bg-[#CF2224]" : "bg-black/15",
              )}
            />
          ))}
        </div>
      ) : (
        <p className="font-primary text-xs text-black/60">
          {selected + 1} / {groups.length}
        </p>
      )}

      <Button
        variant="outline"
        onClick={() => setFullGalleryOpen(true)}
        className="font-primary border-[#CF2224]/40 text-black hover:bg-[#FFE2CE]"
      >
        Ver galería completa
      </Button>

      <Dialog open={fullGalleryOpen} onOpenChange={setFullGalleryOpen}>
        <DialogContent
          showCloseButton
          className="max-h-[90vh] w-[95vw] max-w-350 overflow-y-auto sm:max-w-350"
        >
          <DialogTitle className="sticky -top-4 -mx-4 -mt-4 bg-popover px-4 pt-4 pb-3 font-primary text-black">
            {title} <span className="text-[#CF2224]">({allPhotos.length})</span>
          </DialogTitle>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {allPhotos.map((file, index) => (
              <button
                key={file}
                type="button"
                onClick={() => setLightbox({ photos: allPhotos, index })}
                className="relative block aspect-3/2 w-full cursor-zoom-in overflow-hidden rounded-lg bg-black/5"
              >
                <Image
                  src={`${basePath}/${file}`}
                  alt={`${title} ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 23vw, 45vw"
                  quality={80}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => !open && setLightbox(null)}
      >
        <DialogContent
          showCloseButton={false}
          className="h-[95vh] w-[95vw] max-w-none bg-black/95 p-2 ring-0 sm:max-w-none"
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {lightbox && (
            <div className="relative h-full w-full">
              <Image
                src={`${basePath}/${lightbox.photos[lightbox.index]}`}
                alt={title}
                fill
                sizes="95vw"
                quality={95}
                className="object-contain"
              />
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setLightbox(null)}
                className="absolute right-2 top-2 rounded-full bg-white/85 p-2 hover:bg-white"
              >
                <X />
              </button>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() =>
                  setLightbox((current) =>
                    current
                      ? {
                          ...current,
                          index:
                            (current.index - 1 + current.photos.length) %
                            current.photos.length,
                        }
                      : current,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 hover:bg-white"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Foto siguiente"
                onClick={() =>
                  setLightbox((current) =>
                    current
                      ? {
                          ...current,
                          index: (current.index + 1) % current.photos.length,
                        }
                      : current,
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 hover:bg-white"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
