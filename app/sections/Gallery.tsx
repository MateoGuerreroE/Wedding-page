import { Camera, Heart } from "lucide-react";
import { getPhotos, sampleEven } from "@/lib/photos";
import PhotoCarousel from "@/components/photo-carousel";

export default function Gallery() {
  const { couple, general } = getPhotos();

  return (
    <div className="w-full bg-[#FFE2CE] flex justify-center">
      <div className="max-w-350 w-full py-16 md:py-20 px-4 md:px-10 flex flex-col md:flex-row md:divide-x md:divide-black/10">
        <PhotoCarousel
          id="general-photos"
          icon={<Camera size={22} color="#CF2224" />}
          title="Fotos generales"
          basePath="/photos/protocol"
          previewPhotos={sampleEven(general, 9)}
          allPhotos={general}
        />
        <PhotoCarousel
          id="couple-photos"
          icon={<Heart size={22} color="#CF2224" />}
          title="Fotos de la pareja"
          basePath="/photos"
          previewPhotos={sampleEven(couple, 9)}
          allPhotos={couple}
        />
      </div>
    </div>
  );
}
