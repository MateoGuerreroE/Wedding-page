import Image from "next/image";

export default function Dressing() {
  return (
    <div className="w-full bg-linear-to-b from-[#F9F9F9] to-[#FFE7F0] from-20% flex justify-center">
      <div className="max-w-350 p-6 md:p-10 md:py-26 py-20 relative text-black font-primary">
        <div className="flex flex-col items-center w-full">
          <Image
            src="/titles/dress_code_title.svg"
            alt="Dress Code"
            width={500}
            height={50}
          />
          <p className="text-lg">(Formal creativo)</p>
        </div>
        <div className="flex flex-col w-full items-center text-center mt-10 md:text-lg md:px-10 p-4">
          <div className="flex flex-col items-center md:max-w-3/5 gap-4">
            <h5 className="font-bold">Recomendaciones</h5>
            <p>
              Puedes jugar con colores vibrantes, cálidos o neutros que conecten
              con la energía de la celebración. Si quieres estar más cómodo/a,
              puedes usar tennis blancos o beige sin problema
            </p>
          </div>
          <Image
            src="/desktop_colors.png"
            alt="Desktop Colors"
            width={1000}
            height={1000}
            className="hidden md:block w-full mt-10"
          />
          <Image
            src="/mobile_colors.png"
            alt="Mobile Colors"
            width={500}
            height={500}
            className="md:hidden w-full mt-10"
          />
          <div className="flex flex-col items-center md:max-w-3/5 gap-4 mt-10">
            <h5 className="font-bold">Colores y prendas no permitidas</h5>
            <p>
              No uses prendas en color blanco, beige, negro y rosa en cualquiera
              de sus tonalidades. No uses jean. El blanco y beige podrán usarse
              únicamente en zapatos, tennis o camisas para hombres
            </p>
          </div>
          <Image
            src="/desktop_no_colors.png"
            alt="Desktop Prohibited Colors"
            width={1000}
            height={1000}
            className="hidden md:block w-full mt-10 px-10"
          />
          <Image
            src="/MOBILE_OTHER.png"
            alt="Mobile Prohibited Colors"
            width={500}
            height={500}
            className="md:hidden w-4/5 mt-10"
          />
        </div>

        <div className="mt-16 md:mt-26 flex flex-col items-center">
          <Image
            src="/titles/samples.svg"
            alt="Samples"
            width={650}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
