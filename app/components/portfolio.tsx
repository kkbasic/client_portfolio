// "use client";

// import Image from "next/image";

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen bg-[#f8f5f0] overflow-x-hidden bg-[url('/t2.png')] bg-repeat">
//       <div
//         className="
//         w-full min-h-screen
//         px-0
//         grid grid-cols-[0.65fr_1.38fr_3.1fr]
//         grid-rows-[auto_auto_1fr_auto]
//       "
//       >
//         {/* Column 1 */}
//         <div className="col-start-1 row-span-full border-r border-[#3a3a3a] flex flex-col justify-end items-center pl-4">
//           <div className="pb-6 text-lg tracking-wider text-center">
//             Vaishnavi kabra
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="col-start-2 row-span-full border-r border-[#3a3a3a] grid grid-rows-[auto_auto_1fr_auto] pt-50">
//           {/* PORT */}
//           <div>
//             <h1
//               className="
//                 m-0 p-0 -ml-4
//                 text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]
//                 leading-[0.95]
//                 tracking-[-0.02em]
//                 scale-x-[1.6]
//                 origin-left
//                 font-light
//                 text-gray-500
//               "
//               style={{ fontFamily: "var(--font-montserrat)" }}
//             >
//               PORT
//             </h1>
//           </div>
//           {/* Image */}
//           <div className="mt-6">
//             <Image
//               src="/building-isometric.png"
//               alt="Isometric house model"
//               width={800}
//               height={200}
//               className="w-full h-auto object-contain "
//             />
//           </div>
//           <div></div>
//         </div>

//         {/* Column 3 */}
//         <div className="col-start-3 row-span-full grid grid-rows-[auto_auto_1fr_auto] pt-50">
//           {/* FOLIO */}
//           <div>
//             <h1
//               className="
//                 m-0 p-0 -ml-4
//                 text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]
//                 leading-[0.95]
//                 tracking-[-0.02em]
//                 scale-x-[1.6]
//                 origin-left
//                 font-light
//                 text-gray-500
//               "
//               style={{ fontFamily: "var(--font-montserrat)" }}
//             >
//               FOLIO
//             </h1>

//             <div className="ml-24 mt-4 text-[1.25rem] md:text-[1.4rem] font-light">
//               Undergraduate interior design
//             </div>
//           </div>

//           <div></div>
//           <div></div>

//           {/* Year */}
//           <div className="flex items-end justify-end pb-6 text-lg tracking-wider pr-6">
//             2021 — 2025
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] overflow-x-hidden bg-[url('/t2.png')] bg-repeat">
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div
        className="
        hidden md:grid
        w-full min-h-screen
        px-0
        grid-cols-[0.65fr_1.38fr_3.1fr]
        grid-rows-[auto_auto_1fr_auto]
      "
      >
        {/* Column 1 */}
        <div className="col-start-1 row-span-full border-r border-[#3a3a3a] flex flex-col justify-end items-center pl-4">
          <div className="pb-6 text-lg tracking-wider text-center">
            Vaishnavi kabra
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-start-2 row-span-full border-r border-[#3a3a3a] grid grid-rows-[auto_auto_1fr_auto] pt-50 ">
          <div>
            <h1
              className="
                m-0 p-0 -ml-4
                text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem]
                leading-[0.95]
                tracking-[-0.02em]
                scale-x-[1.6]
                origin-left
                font-light
                text-gray-500
                
              "
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              PORT
            </h1>
          </div>

          <div className="mt-6">
            <Image
              src="/building-isometric.png"
              alt="Isometric house model"
              width={800}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>

          <div></div>
        </div>

        {/* Column 3 */}
        <div className="col-start-3 row-span-full grid grid-rows-[auto_auto_1fr_auto] pt-50">
          <div>
            <h1
              className="
                m-0 p-0 -ml-4
               text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem]
                leading-[0.95]
                tracking-[-0.02em]
                scale-x-[1.6]
                origin-left
                font-light
                text-gray-500
              "
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              FOLIO
            </h1>

            <div className="ml-24 mt-4 text-[1.25rem] md:text-[1.4rem] font-light">
              Undergraduate interior design
            </div>
          </div>

          <div></div>
          <div></div>

          <div className="flex items-end justify-end pb-6 text-lg tracking-wider pr-6">
            2021 — 2025
          </div>
        </div>
      </div>

      {/* ================= MOBILE (CLEAN + AESTHETIC) ================= */}
      <div className="md:hidden flex flex-col items-center justify-center px-6 py-12 text-center min-h-screen">
        {/* NAME */}
        <div className="text-[10px] tracking-[0.4em] text-gray-400 mb-8">
          VAISHNAVI KABRA
        </div>

        {/* TITLE */}
        <h1
          className="
            text-[44px]
            leading-[1]
            tracking-[0.18em]
            font-light
            text-gray-600
          "
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          PORTFOLIO
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 text-sm text-gray-500 tracking-wide">
          Undergraduate Interior Design
        </p>

        {/* IMAGE */}
        <div className="mt-12 w-full flex justify-center">
          <Image
            src="/building-isometric.png"
            alt="Isometric house model"
            width={500}
            height={300}
            className="w-full max-w-[300px] object-contain"
          />
        </div>

        {/* YEAR */}
        <div className="mt-14 text-[10px] tracking-[0.4em] text-gray-400">
          2021 — 2025
        </div>
      </div>
    </div>
  );
}
