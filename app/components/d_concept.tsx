// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function DarkConceptPage({ active }: { active: string }) {
//   const sections = [
//     "northface",
//     "DarkConceptPage",
//     "DarkSectionPage",
//     "DarkGalleryPage",
//     "DarkFinalHeroPage",
//   ];

//   return (
//     <motion.div
//       className="min-h-screen bg-[#f8f5f0] flex flex-col bg-[url('/t2.png')] bg-repeat"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* TOP IMAGE */}
//       <div className="w-full h-[55vh] relative">
//         <Image
//           src="/d_concept.png"
//           alt="Concept interior"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* BOTTOM */}
//       <div className="flex-1 flex flex-col justify-between px-6 md:px-12 py-10">
//         {/* RIGHT TEXT */}
//         <div className="flex justify-end">
//           <div className="ml-auto max-w-[1000px]">
//             <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-semibold mb-6 mt-24 text-right">
//               CONCEPT
//             </h2>

//             <div className="text-m md:text-base text-gray-700 leading-[1.8] text-right">
//               <p>
//                 Inspired by the wabi-sabi ethos and Japandi style, the bungalow
//                 design embodies simplicity
//                 <br />
//                 natural beauty, and the celebration of imperfection. A muted
//                 color palette sets a calming tone
//                 <br />
//                 complemented by the extensive use of rattan cane, connecting the
//                 interiors with the outdoor
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="flex justify-between items-center text-sm text-gray-600 mt-10">
//           <div>Retail store</div>

//           {/* 🔥 INTERACTIVE DOTS */}
//           <div className="flex gap-2">
//             {sections.map((id) => (
//               <button
//                 key={id}
//                 onClick={() =>
//                   document.getElementById(id)?.scrollIntoView({
//                     behavior: "smooth",
//                   })
//                 }
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   active === id
//                     ? "bg-red-500 scale-125"
//                     : "bg-gray-300 hover:bg-black hover:scale-125"
//                 }`}
//               />
//             ))}
//           </div>

//           <div>11</div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DarkConceptPage({ active }: { active: string }) {
  const sections = [
    "northface",
    "DarkConceptPage",
    "DarkSectionPage",
    "DarkGalleryPage",
    "DarkFinalHeroPage",
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#f8f5f0] flex flex-col bg-[url('/t2.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🔹 TOP IMAGE */}
      <div className="w-full h-[40vh] md:h-[55vh] relative">
        <Image
          src="/d_concept.png"
          alt="Concept interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 🔹 BOTTOM */}
      <div className="flex-1 flex flex-col justify-between px-4 md:px-12 py-8 md:py-10">
        {/* 🔹 TEXT */}
        <div className="flex justify-center md:justify-end">
          <div className="max-w-[1000px] text-center md:text-right">
            {/* TITLE */}
            <h2
              className="
              text-xl md:text-3xl 
              tracking-[0.15em] md:tracking-[0.2em] 
              font-semibold 
              mb-4 md:mb-6 
              mt-6 md:mt-24
            "
            >
              CONCEPT
            </h2>

            {/* TEXT */}
            <div
              className="
              text-sm md:text-base 
              text-gray-700 
              leading-[1.6] md:leading-[1.8]
            "
            >
              <p>
                Inspired by the wabi-sabi ethos and Japandi style, the bungalow
                design embodies simplicity
                <br className="hidden md:block" />
                natural beauty, and the celebration of imperfection. A muted
                color palette sets a calming tone
                <br className="hidden md:block" />
                complemented by the extensive use of rattan cane, connecting the
                interiors with the outdoor
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 FOOTER */}
        <div className="flex justify-between items-center text-xs md:text-sm text-gray-600 mt-8 md:mt-10">
          <div>Retail store</div>

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
                    : "bg-gray-300 hover:bg-black hover:scale-125"
                }`}
              />
            ))}
          </div>

          <div>11</div>
        </div>
      </div>
    </motion.div>
  );
}
