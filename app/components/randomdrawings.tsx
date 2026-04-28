
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DrawingSection({ active }: { active: string }) {
  const drawings = ["/i1.png", "/i2.png", "/i1.png", "/i2.png"];

  return (
    <motion.div
      id="random"
      className="min-h-screen bg-[#f8f5f0] flex flex-col justify-center bg-[url('/t2.png')] bg-repeat py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🔹 HEADER (LEFT ALIGNED ONLY) */}
      <div className="w-full px-4 md:px-12">
        <h1
          className="
            text-2xl md:text-5xl 
            tracking-[0.15em] md:tracking-[0.2em] 
            font-semibold 
            text-left
            mb-10
          "
        >
          DRAWINGS
        </h1>
      </div>

      {/* 🔹 GRID (CENTERED) */}
      <div className="w-full flex justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[900px]">
          {drawings.map((src, i) => (
            <div
              key={i}
              className="
                w-full 
                bg-white 
                border border-gray-200 
                rounded-md 
                p-3
              "
            >
              <Image
                src={src}
                alt={`Drawing ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
