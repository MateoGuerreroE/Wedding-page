import { Menu } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-[#FFE2CE] h-24 md:h-32 shadow-lg w-full p-4 px-6 md:p-6 md:px-10 flex justify-between items-center xl:pr-36 fixed top-0 z-40">
      <Image
        src="/logo.svg"
        alt="logo"
        width={300}
        height={300}
        className="w-32 h-16 md:w-40 md:h-20"
      />
      <Menu color="#CF2224" size={32} className="md:hidden" />
      <div className="font-primary md:text-base lg:text-lg gap-4 lg:gap-8 h-full items-end text-[#323232] hidden md:flex">
        <a href="#home" className="hover:cursor-pointer hover:font-bold">
          Inicio
        </a>
        <a href="#itinerary" className="hover:cursor-pointer hover:font-bold">
          Itinerario
        </a>
        <a className="hover:cursor-pointer hover:font-bold">
          Código de vestimenta
        </a>
        <a className="hover:cursor-pointer hover:font-bold">Lluvia de cartas</a>
        <a className="hover:cursor-pointer hover:font-bold">Cómo llegar</a>
      </div>
    </nav>
  );
}
