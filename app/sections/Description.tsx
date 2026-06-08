import Image from "next/image";

export default function Description() {
  return (
    <div className="w-full bg-[#FFB3B0] flex justify-center">
      <div className="max-w-350 p-8 md:p-10 py-32 md:py-26 relative">
        <Image
          src="/material/red_angel.svg"
          alt="Red Angel"
          width={250}
          height={250}
          className="absolute md:-right-60 md:top-0 md:size-auto size-30 z-10 right-10 top-0"
        />
        <Image
          src="/material/hearts.svg"
          alt="Hearts"
          width={180}
          height={180}
          className="absolute md:bottom-12 md:-left-60 z-0 md:size-auto size-20 bottom-6"
        />
        <div className="flex flex-col gap-10 justify-center items-center z-20 relative">
          <Image
            src="/titles/description_title.svg"
            alt="Description Title"
            width={520}
            height={100}
          />
          <div className="flex flex-col text-center font-primary text-black max-w-150 xs:text-lg md:text-xl gap-6">
            <p>
              Acompáñanos a celebrar nuestro matrimonio en la hermosa Zipaquirá.
              La ceremonia espiritual se llevará a cabo en la{" "}
              <b>Cra. 6 #3 - 33 a las 12:30 p.m.</b>
            </p>
            <p>
              Después, los esperamos en <b>Cra. 4 #8-62 Condominio Mónaco</b>{" "}
              para brindar y festejar juntos
            </p>
            <p>
              El clima en Zipaquirá es frío al atardecer, te recomendamos traer
              un abrigo para disfrutar la noche al máximo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
