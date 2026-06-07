import Image from "next/image";

export default function Itinerary() {
  return (
    <div id="itinerary" className="w-full bg-[#F6E9D2] flex justify-center">
      <div className="max-w-350 w-full p-8 md:p-20 py-16 md:py-20 relative">
        <div className="w-full flex md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/3 px-6 justify-center flex">
            <Image
              src="/titles/itinerary_title.svg"
              alt="Itinerary"
              width={500}
              height={500}
              className="z-20"
            />
            <Image
              src="/material/dots2.svg"
              alt="Dots"
              width={500}
              height={500}
              className="absolute md:bottom-0 md:left-0 md:size-80 z-10 size-150 top-1/3"
            />
          </div>
          <div className="text-center md:text-start md:w-2/3 flex flex-col font-primary text-black px-12 md:text-lg md:gap-8 relative z-20 gap-10">
            <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-6 items-start md:items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/material/pin.svg"
                  alt="Pin"
                  width={100}
                  height={100}
                  className="h-22"
                />
              </div>
              <div className="flex flex-col justify-center max-w-150">
                <span className="font-bold">12:30 PM Llegada y bienvenida</span>
                <p>
                  Nos encontraremos en el restaurante graná{" "}
                  <b>Cra. 6 #3 - 33</b> para comenzar esta celebración juntos
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-6 items-start md:items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/material/conv_heart.svg"
                  alt="Conversation Heart"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center max-w-150">
                <span className="font-bold">1:00 PM Ceremonia espiritual</span>
                <p>
                  Tendremos una ceremonia pequeña e íntima en un espacio privado
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-6 items-start md:items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/material/cupcake.svg"
                  alt="Cupcake"
                  width={100}
                  height={100}
                  className="h-26"
                />
              </div>
              <div className="flex flex-col justify-center max-w-150">
                <span className="font-bold">1:30 PM Almuerzo</span>
                <p>
                  Compartiremos el almuerzo, conversaciones largas y una tarde
                  tranquila juntos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-6 items-start md:items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/material/camera.svg"
                  alt="Camera"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center max-w-150">
                <span className="font-bold">3:00 PM Ruta de recuerdos</span>
                <p>
                  Una pequeña aventura por Zipaquirá con juegos, pistas y
                  lugares importantes para nosotros
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-6 items-start md:items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/material/flower_paper.svg"
                  alt="Flower Paper"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center max-w-150">
                <span className="font-bold">5:00 PM Celebración en casa</span>
                <p>
                  Cerraremos el día con juegos, música, snacks y muchos momentos
                  especiales en <b>Cra. 4 #8-62 Condominio Mónaco</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
