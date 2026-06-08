import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="max-w-350 w-full gap-10 md:gap-0 p-10 md:p-20 flex flex-col md:flex-row justify-between scroll-mt-24 md:scroll-mt-32"
    >
      <div className="md:max-w-1/2 flex justify-center">
        <div className="flex flex-col max-w-100 gap-4 relative">
          <Image
            className="absolute top-1/3 -left-40"
            src="/material/dots1.svg"
            alt="Dots"
            width={200}
            height={200}
          />
          <Image
            src="/material/rings.svg"
            alt="Rings"
            width={120}
            height={120}
            className="absolute top-1/4 -right-24"
          />
          <Image
            src="/banner-a.svg"
            alt="Main Banner"
            width={500}
            height={500}
            className="w-100 z-20 md:size-auto size-60"
          />
          <div className="hidden md:flex flex-col font-primary text-black text-center gap-5">
            <div className="z-20">
              <h5 className="font-bold text-2xl">04 • 07 • 2026</h5>
              <div className="flex text-lg pt-5">
                <div className="flex flex-col w-1/2 items-start">
                  <p>SÁBADO 4 DE JULIO</p>
                  <p>12:30 P.M.</p>
                </div>
                <div className="flex flex-col w-1/2 items-end">
                  <p>ZIPAQUIRÁ</p>
                  <p>Cra. 6 #3 - 33</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-1/2 flex items-center flex-col">
        <div className="relative">
          <Image
            src="/material/yellow_star.svg"
            alt="Yellow Star"
            width={70}
            height={70}
            className="absolute top-3/4 -left-12"
          />
          <Image
            src="/material/hearts.svg"
            alt="Hearts"
            width={65}
            className="absolute -top-2 -right-12"
            height={65}
          />
          <Image
            src="/material/orange_stars.svg"
            alt="Orange Stars"
            width={80}
            height={80}
            className="absolute bottom-0 right-1/3"
          />
          <Image
            src="/material/dual_yellow_star.svg"
            alt="Dual Yellow Star"
            width={130}
            height={130}
            className="absolute right-1/2 top-0 md:size-auto size-22"
          />
          <Image
            src="/main_photo.png"
            alt="Main Photo"
            width={500}
            height={500}
          />
        </div>
        <div className="md:hidden w-full flex mt-10 flex-col font-primary text-black text-center gap-5">
          <div className="z-20">
            <h5 className="font-bold text-2xl">04 • 07 • 2026</h5>
            <div className="flex text-base pt-4">
              <div className="flex flex-col w-1/2 items-start">
                <p>SÁBADO 4 DE JULIO</p>
                <p>12:30 P.M.</p>
              </div>
              <div className="flex flex-col w-1/2 items-end">
                <p>ZIPAQUIRÁ</p>
                <p>Cra. 6 #3 - 33</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
