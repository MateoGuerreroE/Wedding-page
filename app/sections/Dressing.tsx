import Image from "next/image";

export default function Dressing() {
  return (
    <div
      id="dressing"
      className="w-full bg-linear-to-b from-[#F9F9F9] to-[#FFE7F0] from-20% flex justify-center"
    >
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
        <div className="flex flex-col w-full items-center text-center mt-10 md:text-lg md:px-10 p-4 relative">
          <Image
            src="/material/orange_star.svg"
            alt="Orange Star"
            width={150}
            height={150}
            className="hidden md:block absolute -top-32 left-0 xl:size-auto size-20"
          />
          <Image
            src="/material/orange_star.svg"
            alt="Orange Star"
            width={150}
            height={150}
            className="hidden md:block absolute -bottom-12 right-0 xl:-right-20 xl:size-auto size-20"
          />
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

        <div className="relative">
          <div className="mt-16 md:mt-26 flex flex-col items-center">
            <Image
              src="/titles/samples.svg"
              alt="Samples"
              width={650}
              height={500}
            />
          </div>
          <div className="mt-10 md:mt-16 md:px-8">
            <Image
              src="/desktop_examples.png"
              alt="Desktop Examples"
              width={2000}
              height={2000}
              className="hidden md:block w-full"
            />
            <Image
              src="/mobile_examples.png"
              alt="Mobile Examples"
              width={800}
              height={800}
              className="md:hidden w-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center pt-32 md:pt-46 relative">
          <Image
            src="/material/three_stars.svg"
            alt="Three Stars"
            width={270}
            height={90}
            className="absolute top-12 md:w-67.5 w-50"
          />
          <Image
            src="/material/left_flowers.png"
            alt="Left Flowers"
            width={310}
            height={260}
            className="absolute md:top-20 left-0 w-20 md:w-60 xl:w-auto"
          />
          <Image
            src="/material/right_flowers.png"
            alt="Right Flowers"
            width={310}
            height={260}
            className="absolute md:top-20 right-0 w-20 md:w-60 xl:w-auto"
          />
          <div
            id="letter"
            className="md:w-full w-1/2 flex items-center content-center self-center justify-center"
          >
            <Image
              src="/titles/letters.svg"
              alt="Letters"
              width={211}
              height={100}
            />
          </div>
          <p className="w-2/3 md:w-1/3 text-center font-primary mt-10 md:mt-14">
            Esta será tu entrada a este día tan importante para nosotros
          </p>
          <div className="mt-8 md:mt-16 px-3 md:px-6 flex items-center justify-center relative w-full">
            <div className="absolute flex flex-col z-20 items-center gap-10 md:w-1/2 w-4/5 text-center md:text-lg xl:text-xl text-base">
              <p>
                Ese día tendremos una lluvia de cartas. Queremos que escribas a
                mano una carta para nosotros, con recuerdos, consejos, deseos o
                palabras para esta nueva etapa
              </p>
              <p>
                <b>
                  Nos gustaría pedirte con mucho cariño que la carta sea
                  personal e individual
                </b>
                . Aunque vengas en pareja o en familia, nos haría mucha ilusión
                recibir una carta por persona, escrita desde la voz, recuerdos y
                corazón de cada una/o
              </p>
              <p>
                Puedes escribir sobre: un recuerdo, un consejo, una anécdota, un
                deseo para el futuro, unas palabras desde el corazón
              </p>
            </div>
            <Image
              src="/material/Board.png"
              alt="Board"
              width={2000}
              height={2000}
              className="w-full z-10 md:px-20 h-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
