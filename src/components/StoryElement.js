import React from "react";
import Image from "next/legacy/image";

function StoryElement({ src, nama, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        // style={{ objectFit: "cover" }} //gakguna
        objectFit="cover"
        layout="fixed"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        // style={{ layout: "fill" }} //gakguna
        layout="fill"
        width={80}
        height={160}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white font-bold text-sm truncate">
        {nama}
      </p>
    </div>
  );
}

export default StoryElement;
