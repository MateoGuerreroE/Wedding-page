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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GROUP_SIZE = 2;

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );
}

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
  const [expanded, setExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = expanded ? allPhotos : previewPhotos;
  const groups = chunk(photos, GROUP_SIZE);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    api?.scrollTo(0);
  }, [expanded, api]);

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
        <span className="text-sm text-[#CF2224]">
          {allPhotos.length} fotos
        </span>
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
                      setLightboxIndex(groupIndex * GROUP_SIZE + cellIndex)
                    }
                    className="relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-lg"
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
        onClick={() => setExpanded((value) => !value)}
        className="font-primary border-[#CF2224]/40 text-black hover:bg-[#FFE2CE]"
      >
        {expanded ? "Ver menos" : "Ver galería completa"}
      </Button>

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent
          showCloseButton
          className="w-[92vw] max-w-4xl bg-black/95 p-2 ring-0 sm:max-w-4xl"
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {lightboxIndex !== null && (
            <div className="relative">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={`${basePath}/${photos[lightboxIndex]}`}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 56rem, 92vw"
                  quality={95}
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() =>
                  setLightboxIndex(
                    (idx) => ((idx ?? 0) - 1 + photos.length) % photos.length,
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
                  setLightboxIndex((idx) => ((idx ?? 0) + 1) % photos.length)
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
