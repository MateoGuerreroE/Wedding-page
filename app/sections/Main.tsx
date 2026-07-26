import Image from "next/image";

export default function Main() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <Image
        className="object-cover"
        src="/photos/DSC07092.jpg"
        alt="Pau y Teo"
        fill
        priority
        quality={90}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-transparent" />

      <Image
        src="/material/hearts.svg"
        alt="Hearts"
        width={80}
        height={80}
        className="absolute top-1/3 right-10 md:right-24 opacity-90 size-14 md:size-20"
      />

      <div className="relative z-10 h-full flex flex-col justify-center gap-6 px-8 md:px-20 max-w-2xl">
        <h1 className="font-primary font-bold text-white text-4xl md:text-5xl leading-tight">
          Nuestro recuerdo
          <br />
          para siempre
        </h1>
        <p className="font-script text-[#FFD9B3] text-4xl md:text-5xl">
          Pau &amp; Teo ♡
        </p>
        <p className="font-primary text-white/90 uppercase tracking-wide text-sm md:text-base">
          04 de julio de 2026 &nbsp;·&nbsp; Zipaquirá
        </p>
        <a
          href="#couple-photos"
          className="font-primary w-fit bg-[#FFD9B3] text-[#3B2A20] px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#FFC98F] transition-colors"
        >
          VER FOTOS →
        </a>
      </div>
    </div>
  );
}
