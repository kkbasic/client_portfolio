// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion"; // ✅ add this

// const Annotation = ({ label, x, direction }: any) => {
//   const isUp = direction === "up";

//   return (
//     <div
//       className="absolute flex flex-col items-center"
//       style={{
//         left: x,
//         [isUp ? "bottom" : "top"]: "100%",
//       }}
//     >
//       <span
//         className={`text-s tracking-widest uppercase text-gray-400 ${
//           isUp ? "mb-2" : "mt-2"
//         }`}
//       >
//         {label}
//       </span>

//       <div className="w-[1px] h-16 bg-white opacity-50" />
//       <div className="w-2 h-2 bg-white opacity-80 rounded-full" />
//     </div>
//   );
// };

// export default function DarkSectionPage({ active }: { active: string }) {
//   const sections = [
//     "northface",
//     "DarkConceptPage",
//     "DarkSectionPage",
//     "DarkGalleryPage",
//     "DarkFinalHeroPage",
//   ];

//   return (
//     <motion.div
//       className="min-h-screen bg-[#f8f5f0] flex flex-col bg-[url('/dark_texture.png')] bg-repeat"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* TOP LABELS */}
//       <div className="flex justify-between px-6 md:px-12 pt-14">
//         <h1 className="text-2xl tracking-[0.3em] font-bold text-white">
//           SECTION BB'
//         </h1>

//         <h1 className="text-2xl tracking-[0.3em] font-bold text-white">
//           SECTION AA'
//         </h1>
//       </div>

//       {/* IMAGE */}
//       <div className="flex-1 flex items-center">
//         <div className="relative w-full h-[320px]">
//           <Image
//             src="/d_sectionbb.png"
//             alt="Architectural section"
//             fill
//             className="object-cover"
//             priority
//           />

//           {/* ANNOTATIONS */}
//           <Annotation label="Dining area" x="10%" direction="up" />
//           <Annotation label="Display shelf" x="28%" direction="up" />
//           <Annotation label="Accent wall" x="55%" direction="up" />
//           <Annotation label="Outdoor area" x="82%" direction="up" />

//           <Annotation label="Door to Utility" x="22%" direction="down" />
//           <Annotation label="Kitchen" x="40%" direction="down" />
//           <Annotation label="Staircase" x="65%" direction="down" />
//           <Annotation label="Seating" x="90%" direction="down" />
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center text-sm text-gray-400 px-6 md:px-12 pb-6">
//         <div>Residence</div>

//         {/* DOTS */}
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
//                   : "bg-gray-300 hover:bg-white hover:scale-125"
//               }`}
//             />
//           ))}
//         </div>

//         <div>07</div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
          uppercase text-gray-300 text-[10px] md:text-xs tracking-widest
          ${isUp ? "mb-1 md:mb-2" : "mt-1 md:mt-2"}
        `}
      >
        {label}
      </span>

      {/* 🔹 shorter on mobile */}
      <div className="w-[1px] h-6 md:h-12 bg-white opacity-50" />

      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
    </div>
  );
};

export default function DarkSectionPage({ active }: { active: string }) {
  const sections = [
    "northface",
    "DarkConceptPage",
    "DarkSectionPage",
    "DarkGalleryPage",
    "DarkFinalHeroPage",
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#2b2b2b] flex flex-col bg-[url('/dark_texture.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🔹 TOP LABELS */}
      <div className="flex justify-between px-4 md:px-12 pt-10 md:pt-14">
        <h1 className="text-base md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-bold text-white">
          SECTION BB'
        </h1>

        <h1 className="text-base md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-bold text-white">
          SECTION AA'
        </h1>
      </div>

      {/* 🔹 IMAGE */}
      <div className="flex-1 flex items-center px-2 md:px-0">
        <div className="relative w-full h-[220px] md:h-[320px]">
          <Image
            src="/d_sectionbb.png"
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
          <Annotation label="Door to Utility" x="22%" direction="down" />
          <Annotation label="Kitchen" x="40%" direction="down" />
          <Annotation label="Staircase" x="65%" direction="down" />
          <Annotation label="Seating" x="90%" direction="down" />
        </div>
      </div>

      {/* 🔹 FOOTER */}
      <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 px-4 md:px-12 pb-6 mt-6">
        <div>Retail Store</div>

        {/* 🔥 DOT NAV */}
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

        <div>12</div>
      </div>
    </motion.div>
  );
}
