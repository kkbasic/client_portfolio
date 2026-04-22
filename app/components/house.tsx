"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShoonyaHouse({ active }: { active: string }) {
  const sections = ["shoonya", "concept", "section", "gallery", "final"];

  return (
    <motion.div
      className="min-h-screen bg-[#f8f5f0] bg-[url('/t2.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-screen px-4 md:pl-12 md:pr-0 py-10 bg-[url('/t2.png')] bg-repeat">
        {/* GRID */}
        <div
          className="
          grid 
          grid-cols-1 md:grid-cols-[0.35fr_0.65fr] 
          gap-10 md:gap-0 
          min-h-[85vh]
        "
        >
          {/* LEFT */}
          <div className="flex flex-col md:pr-10 pt-6 md:pt-10">
            {/* TITLE */}
            <h1
              className="
              text-2xl md:text-5xl 
              tracking-[0.15em] md:tracking-[0.2em] 
              font-semibold leading-[1.2]
              text-center md:text-left
            "
            >
              HOUSE
            </h1>

            {/* DETAILS */}
            <div
              className="
              mt-6 md:mt-8 
              space-y-3 md:space-y-4 
              text-xs md:text-sm text-gray-700
              text-center md:text-left
            "
            >
              <div>
                <div className="font-semibold">Type</div>
                <div className="font-light">Japandi style residence</div>
              </div>
              <div>
                <div className="font-semibold">Project timeline</div>
                <div className="font-light">Dec 2022 – Jan 2023</div>
              </div>
              <div>
                <div className="font-semibold">Area</div>
                <div className="font-light">200 m²</div>
              </div>
            </div>

            {/* SMALL IMAGE */}
            <div className="mt-10 md:mt-16 flex justify-center md:justify-start">
              <Image
                src="/bed1.jpg"
                alt="Concept"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end pt-4 md:pt-10">
            <Image
              src="/house.png"
              alt="Render"
              width={1200}
              height={600}
              className="
                w-full 
                max-h-[300px] md:max-h-none 
                object-cover
              "
            />
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
          flex justify-between items-center 
          mt-6 md:mt-12 
          text-xs md:text-sm text-gray-600
        "
        >
          <div>Residence</div>

          {/* DOT NAV */}
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

          <div>04</div>
        </div>
      </div>
    </motion.div>
  );
}
