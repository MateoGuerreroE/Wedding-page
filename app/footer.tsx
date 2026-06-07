import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#FFE2CE] flex justify-center">
      <div className="max-w-350 w-full flex md:flex-row flex-row-reverse justify-between font-primary text-black p-10 md:p-18 text-sm md:text-base">
        <div className="flex flex-col gap-0 max-w-[320px] md:text-lg">
          <p>Este día existe gracias al amor… </p>
          <p>y a las personas que han hecho parte de nuestra historia</p>
        </div>
        <Image src="/logo.svg" alt="Logo" width={170} height={150} />
      </div>
    </div>
  );
}
