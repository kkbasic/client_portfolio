"use client";

import Image from "next/image";

export default function GalleryPage({ active }: { active: string }) {
  const sections = ["shoonya", "concept", "section", "gallery", "final"];

  const images = [
    { src: "/bed1.jpg", label: "BEDROOM 2" },
    { src: "/mirror.png", label: "BEDROOM 3" },
    { src: "/staircase.png", label: "STAIRCASE" },
    { src: "/livingroom.png", label: "LIBRARY" },
  ];

  return (
    <div className="min-h-screen snap-start bg-[#f8f5f0] flex flex-col px-4 md:p-12 bg-[url('/t2.png')] bg-repeat">
      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-[18px] flex-1">
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-full">
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 right-4 text-xs tracking-[0.2em] text-white">
              {img.label}
            </span>
          </div>
        ))}
      </div>

      {/* ================= MOBILE STACK ================= */}
      <div className="md:hidden flex flex-col gap-4 flex-1 mt-4">
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[55vh] overflow-hidden">
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />

            {/* 🔥 Overlay label */}
            <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-white bg-black/30 px-2 py-1">
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 FOOTER */}
      <div className="flex justify-between items-center text-xs md:text-sm text-gray-600 mt-6">
        <div>Residence</div>

        <div className="flex gap-2">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === id
                  ? "bg-red-500 scale-125"
                  : "bg-gray-300 hover:bg-black hover:scale-125"
              }`}
            />
          ))}
        </div>

        <div>08</div>
      </div>
    </div>
  );
}
