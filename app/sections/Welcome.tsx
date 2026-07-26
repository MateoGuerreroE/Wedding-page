import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full bg-background flex justify-center relative overflow-hidden">
      <Image
        src="/material/flower_paper.svg"
        alt=""
        width={220}
        height={220}
        className="absolute -left-16 bottom-0 opacity-20 size-40 md:size-56"
      />
      <Image
        src="/material/right_flowers.svg"
        alt=""
        width={220}
        height={220}
        className="absolute -right-16 top-0 opacity-20 size-40 md:size-56"
      />

      <div className="max-w-350 w-full py-20 md:py-28 px-8 flex flex-col items-center text-center gap-5 relative z-10">
        <p className="font-script text-[#CF2224] text-2xl md:text-3xl">
          Bienvenidos a nuestro álbum ♡
        </p>
        <h2 className="font-primary font-bold text-black text-2xl md:text-3xl max-w-2xl">
          Revive con nosotros cada instante de nuestro día más especial
        </h2>
        <p className="font-primary text-black/80 max-w-xl md:text-lg">
          Gracias por acompañarnos y ser parte de este sueño. Aquí
          encontrarán algunos de los momentos que vivimos con tanto amor,
          alegría y gratitud.
        </p>
        <p className="font-primary text-black/80">Con todo nuestro cariño,</p>
        <p className="font-script text-[#CF2224] text-3xl">Pau &amp; Teo ♡</p>
      </div>
    </div>
  );
}
