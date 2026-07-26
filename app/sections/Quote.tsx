import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <div className="w-full bg-background flex justify-center">
      <div className="max-w-350 w-full py-16 md:py-20 px-8 flex flex-col items-center text-center gap-4">
        <QuoteIcon size={28} className="text-[#FFB3B0]" />
        <p className="font-primary text-black text-lg md:text-xl max-w-xl">
          Que este sea solo el comienzo
          <br />
          de todos los recuerdos que nos faltan por crear.
        </p>
        <span className="text-[#CF2224]">♡</span>
      </div>
    </div>
  );
}
