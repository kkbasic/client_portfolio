"use client";

import Image from "next/image";

/* 🔹 Annotation */
const Annotation = ({ label, x, direction }: any) => {
  const isUp = direction === "up";

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        left: x,
        [isUp ? "bottom" : "top"]: "100%",
      }}
    >
      <span
        className={`
          uppercase text-gray-700 text-[10px] md:text-xs tracking-widest
          ${isUp ? "mb-1 md:mb-2" : "mt-1 md:mt-2"}
        `}
      >
        {label}
      </span>

      {/* 🔹 shorter lines on mobile */}
      <div className="w-[1px] h-6 md:h-12 bg-gray-500 opacity-50" />

      <div className="w-1 h-1 bg-black rounded-full" />
    </div>
  );
};

export default function SectionPage({ active }: { active: string }) {
  const sections = ["shoonya", "concept", "section", "gallery", "final"];

  return (
    <div
      id="section"
      className="min-h-screen snap-start bg-[#f8f5f0] flex flex-col bg-[url('/t2.png')] bg-repeat"
    >
      {/* 🔹 TOP LABELS */}
      <div className="flex justify-between px-4 md:px-12 pt-10 md:pt-14">
        <h1 className="text-base md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-700">
          SECTION BB'
        </h1>

        <h1 className="text-base md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-700">
          SECTION AA'
        </h1>
      </div>

      {/* 🔹 IMAGE + ANNOTATIONS (SAME DESIGN BOTH) */}
      <div className="flex-1 flex items-center px-2 md:px-0">
        <div className="relative w-full h-[220px] md:h-[320px]">
          <Image
            src="/sectionbb.png"
            alt="Architectural section"
            fill
            className="object-cover"
            priority
          />

          {/* 🔹 TOP */}
          <Annotation label="Dining area" x="10%" direction="up" />
          <Annotation label="Display shelf" x="28%" direction="up" />
          <Annotation label="Accent wall" x="55%" direction="up" />
          <Annotation label="Outdoor area" x="82%" direction="up" />

          {/* 🔹 BOTTOM */}
          <Annotation label="Utility" x="22%" direction="down" />
          <Annotation label="Kitchen" x="40%" direction="down" />
          <Annotation label="Staircase" x="65%" direction="down" />
          <Annotation label="Seating" x="90%" direction="down" />
        </div>
      </div>

      {/* 🔹 FOOTER */}
      <div className="flex justify-between items-center text-xs md:text-sm text-gray-600 px-4 md:px-12 pb-6 mt-6">
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

        <div>07</div>
      </div>
    </div>
  );
}
