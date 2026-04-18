// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function DarkFinalHeroPage({ active }: { active: string }) {
//   const sections = [
//     "northface",
//     "DarkConceptPage",
//     "DarkSectionPage",
//     "DarkGalleryPage",
//     "DarkFinalHeroPage",
//   ];

//   return (
//     <motion.div
//       id="DarkFinalHeroPage" // 🔥 IMPORTANT (must match Home + sections array)
//       className="h-screen bg-[#f8f5f0] p-6 md:p-12 flex flex-col bg-[url('/t2.png')] bg-repeat"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* 🔹 TOP IMAGE */}
//       <div className="relative w-full flex-1">
//         <Image
//           src="/d_hero.png"
//           alt="Dining and kitchen"
//           fill
//           className="object-cover"
//           priority
//         />

//         <span className="absolute top-6 right-6 text-xs tracking-[0.25em] text-white/80">
//           DINING & KITCHEN
//         </span>
//       </div>

//       {/* 🔹 FOOTER */}
//       <div className="flex items-center justify-between mt-16 text-sm text-gray-600">
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

//         <div>15</div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DarkFinalHeroPage({ active }: { active: string }) {
  const sections = [
    "northface",
    "DarkConceptPage",
    "DarkSectionPage",
    "DarkGalleryPage",
    "DarkFinalHeroPage",
  ];

  return (
    <motion.div
      id="DarkFinalHeroPage"
      className="h-screen bg-[#2b2b2b] flex flex-col md:p-12 bg-[url('/dark_texture.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative w-full flex-1">
        <Image
          src="/d_hero.png"
          alt="Dining and kitchen"
          fill
          className="object-cover"
          priority
        />

        {/* 🔹 LABEL */}
        <span className="absolute top-4 md:top-6 right-4 md:right-6 text-[10px] md:text-xs tracking-[0.25em] text-white/80">
          DINING & KITCHEN
        </span>

        {/* 🔥 MOBILE FOOTER OVERLAY */}
        <div className="md:hidden absolute bottom-6 left-4 right-4 flex justify-between items-center text-xs text-white">
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
                className={`w-2 h-2 rounded-full ${
                  active === id ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <div>15</div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:flex items-center justify-between mt-16 text-sm text-gray-400">
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

        <div>15</div>
      </div>
    </motion.div>
  );
}
