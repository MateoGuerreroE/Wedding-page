import Image from "next/image";
import { getPhotos, sampleEven } from "@/lib/photos";

export default function Highlights() {
  const { couple, general } = getPhotos();
  const coupleHighlights = sampleEven(couple, 3);
  const generalHighlights = sampleEven(general, 2);

  const highlights = [
    { file: coupleHighlights[0], basePath: "/photos" },
    { file: coupleHighlights[1], basePath: "/photos" },
    { file: generalHighlights[0], basePath: "/photos/protocol" },
    { file: coupleHighlights[2], basePath: "/photos" },
    { file: generalHighlights[1], basePath: "/photos/protocol" },
  ].filter((item) => item.file);

  return (
    <div className="w-full bg-background flex justify-center">
      <div className="max-w-350 w-full py-16 md:py-20 px-6 md:px-10 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-primary font-bold text-black text-2xl md:text-3xl">
            Momentos destacados
          </h2>
          <span className="w-14 h-0.5 bg-[#CF2224]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full">
          {highlights.map(({ file, basePath }) => (
            <div
              key={file}
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={`${basePath}/${file}`}
                alt="Momento destacado"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <a
          href="#couple-photos"
          className="font-primary border border-black/30 text-black px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#FFE2CE] transition-colors"
        >
          VER TODAS LAS FOTOS ⊞
        </a>
      </div>
    </div>
  );
}
