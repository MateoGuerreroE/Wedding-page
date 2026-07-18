import Image from "next/image";
import React from "react";

type Props = {};

export default function Main() {
  return (
    <div className="w-full h-[85vh] overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        width={1800}
        height={1600}
        src={`/api/photo?filename=${encodeURIComponent("DSC07092.jpg")}`}
        alt="main-photo"
        unoptimized
      />
    </div>
  );
}
