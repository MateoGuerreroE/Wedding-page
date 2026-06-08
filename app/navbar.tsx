"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#FFE2CE] h-24 md:h-32 shadow-lg w-full p-4 px-6 md:p-6 md:px-10 flex justify-between items-center xl:pr-36 fixed top-0 z-40">
      <Image
        src="/logo.svg"
        alt="logo"
        width={300}
        height={300}
        className="w-32 h-16 md:w-40 md:h-20"
      />
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button>
            <Menu color="#CF2224" size={32} className="md:hidden" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0 mr-2">
          <div className="flex flex-col gap-2 font-primary text-sm p-4 bg-[#F9F9F9]">
            <a href="#home" onClick={() => setOpen(false)}>
              Inicio
            </a>

            <a href="#itinerary" onClick={() => setOpen(false)}>
              Itinerario
            </a>

            <a href="#dressing" onClick={() => setOpen(false)}>
              Código de vestimenta
            </a>

            <a href="#letter" onClick={() => setOpen(false)}>
              Lluvia de cartas
            </a>

            <a href="#location" onClick={() => setOpen(false)}>
              Cómo llegar
            </a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="font-primary md:text-base lg:text-lg gap-4 lg:gap-8 h-full items-end text-[#323232] hidden md:flex">
        <a href="#home" className="hover:cursor-pointer hover:font-bold">
          Inicio
        </a>
        <a href="#itinerary" className="hover:cursor-pointer hover:font-bold">
          Itinerario
        </a>
        <a href="#dressing" className="hover:cursor-pointer hover:font-bold">
          Código de vestimenta
        </a>
        <a href="#letter" className="hover:cursor-pointer hover:font-bold">
          Lluvia de cartas
        </a>
        <a href="#location" className="hover:cursor-pointer hover:font-bold">
          Cómo llegar
        </a>
      </div>
    </nav>
  );
}
