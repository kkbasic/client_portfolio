// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function TechnicalDrawings({ active }: { active: string }) {
//   const sections = ["technical", "techConcept"];

//   return (
//     <motion.div
//       id="technical"
//       className="min-h-screen bg-[#f8f5f0] pl-6 md:pl-12 pr-0 py-10 bg-[url('/t2.png')] bg-repeat"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="grid grid-cols-[0.35fr_0.65fr] min-h-[85vh]">
//         <div className="flex flex-col justify-start pr-10 pt-10">
//           <div>
//             <h1 className="text-3xl md:text-5xl tracking-[0.2em] font-semibold leading-[1.1]">
//               Technical
//               <br />
//               Drawings
//             </h1>

//             <div className="mt-8 space-y-4 text-sm md:text-base text-gray-700">
//               <div>
//                 <div className="font-semibold">Type</div>
//                 <div className="font-light">Hybrid retail store</div>
//               </div>

//               <div>
//                 <div className="font-semibold">Project timeline</div>
//                 <div className="font-light">Dec 2022 – Jan 2023</div>
//               </div>

//               <div>
//                 <div className="font-semibold">Area</div>
//                 <div className="font-light">200 m²</div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-60">
//             <Image
//               src="/a.png"
//               alt="Concept sketch"
//               width={200}
//               height={200}
//               className="object-contain"
//             />
//           </div>
//         </div>

//         <div className="flex items-start justify-end pt-10 pr-0">
//           <Image
//             src="/drawing.png"
//             alt="Interior render"
//             width={1200}
//             height={600}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-8 text-sm text-gray-600 pr-6">
//         <div>Technical Drawings</div>

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

//         <div>25</div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalDrawings({ active }: { active: string }) {
  const sections = ["technical", "techConcept"];

  return (
    <motion.div
      id="technical"
      className="min-h-screen bg-[#f8f5f0] bg-[url('/t2.png')] bg-repeat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-screen px-4 md:pl-12 md:pr-0 py-10">
        {/* ================= GRID ================= */}
        <div
          className="
          grid 
          grid-cols-1 md:grid-cols-[0.35fr_0.65fr] 
          gap-10 md:gap-0 
          min-h-[85vh]
        "
        >
          {/* ================= LEFT ================= */}
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
              TECHNICAL <br /> DRAWINGS
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
                <div className="font-light">
                  Interior technical documentation
                </div>
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
                src="/a.png"
                alt="Concept sketch"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center md:justify-end pt-4 md:pt-10">
            <Image
              src="/drawing.png"
              alt="Technical drawing"
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

        {/* ================= FOOTER ================= */}
        <div
          className="
          flex justify-between items-center 
          mt-6 md:mt-12 
          text-xs md:text-sm text-gray-600
        "
        >
          <div>Technical Drawings</div>

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

          <div>25</div>
        </div>
      </div>
    </motion.div>
  );
}
