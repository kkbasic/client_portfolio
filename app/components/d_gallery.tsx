// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function DarkGalleryPage({ active }: { active: string }) {
//   const sections = [
//     "northface",
//     "DarkConceptPage",
//     "DarkSectionPage",
//     "DarkGalleryPage",
//     "DarkFinalHeroPage",
//   ];

//   return (
//     <motion.div
//       className="min-h-screen bg-[#f8f5f0] flex flex-col p-6 md:p-12 bg-[url('/t2.png')] bg-repeat"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* IMAGE GRID */}
//       <div className="grid grid-cols-2 grid-rows-2 gap-[18px] flex-1">
//         {/* TOP LEFT */}
//         <div className="relative w-full h-full">
//           <Image
//             src="/camera.png"
//             alt="Bedroom 2"
//             fill
//             className="object-cover"
//           />
//           <span className="absolute top-4 right-4 text-xs tracking-[0.2em] text-white">
//             BEDROOM 2
//           </span>
//         </div>

//         {/* TOP RIGHT */}
//         <div className="relative w-full h-full">
//           <Image
//             src="/rockclimbing.png"
//             alt="Bedroom 3"
//             fill
//             className="object-cover"
//           />
//           <span className="absolute top-4 right-4 text-xs tracking-[0.2em] text-white">
//             BEDROOM 3
//           </span>
//         </div>

//         {/* BOTTOM LEFT */}
//         <div className="relative w-full h-full">
//           <Image src="/ar.png" alt="Staircase" fill className="object-cover" />
//           <span className="absolute top-4 right-4 text-xs tracking-[0.2em] text-white">
//             STAIRCASE
//           </span>
//         </div>

//         {/* BOTTOM RIGHT */}
//         <div className="relative w-full h-full">
//           <Image
//             src="/cameratesting.png"
//             alt="Library"
//             fill
//             className="object-cover"
//           />
//           <span className="absolute top-4 right-4 text-xs tracking-[0.2em] text-white">
//             LIBRARY
//           </span>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
//         <div>Residence</div>

//         {/* 🔥 INTERACTIVE DOTS */}
//         <div className="flex gap-2">
//           {sections.map((id) => (
//             <button
//               key={id}
//               onClick={() =>
//                 document.getElementById(id)?.scrollIntoView({
//                   behavior: "smooth",
//                 })
//               }
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 active === id
//                   ? "bg-red-500 scale-125"
//                   : "bg-gray-300 hover:bg-black hover:scale-125"
//               }`}
//             />
//           ))}
//         </div>

//         <div>14</div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DarkGalleryPage({ active }: { active: string }) {
  const sections = [
    "northface",
    "DarkConceptPage",
    "DarkSectionPage",
    "DarkGalleryPage",
    "DarkFinalHeroPage",
  ];

  const images = [
    { src: "/camera.png", label: "CAMERA ZONE" },
    { src: "/rockclimbing.png", label: "CLIMB WALL" },
    { src: "/ar.png", label: "AR EXPERIENCE" },
    { src: "/cameratesting.png", label: "TESTING LAB" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#2b2b2b] flex flex-col px-4 md:p-12 bg-[url('/dark_texture.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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

            {/* 🔥 overlay label */}
            <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-white bg-black/40 px-2 py-1">
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 mt-6">
        <div>Retail Store</div>

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
                  : "bg-gray-500 hover:bg-white hover:scale-125"
              }`}
            />
          ))}
        </div>

        <div>14</div>
      </div>
    </motion.div>
  );
}
