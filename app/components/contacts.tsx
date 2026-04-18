// "use client";

// import Image from "next/image";
// import { Mail, Phone } from "lucide-react";

// export default function CONTACTS() {
//   return (
//     <div className="h-screen bg-[#f8f5f0] overflow-hidden bg-[url('/t2.png')] bg-repeat">
//       <div
//         className="
//           w-full h-full
//           px-0
//           border border-[#3a3a3a]
//           grid grid-cols-[0.90fr_0.95fr_3.1fr]
//           grid-rows-[0.7fr_auto_auto_auto]
//         "
//       >
//         {/* COLUMN 1 - Full Height Border */}
//         <div className="col-start-1 row-span-full border-r border-[#3a3a3a] flex items-end justify-center pb-6">
//           <div className="text-lg tracking-wider text-center">
//             Vaishnavi kabra
//           </div>
//         </div>

//         {/* COLUMN 2 - IMAGE */}
//         <div className="col-start-2 row-span-full border-r border-[#3a3a3a] flex items-start justify-center pt-40">
//           <Image
//             src="/building-isometric.png"
//             alt="Isometric house model"
//             width={800}
//             height={200}
//             className="w-full h-auto object-contain"
//           />
//         </div>

//         {/* LET'S (COLUMN 2) */}
//         <div className="col-start-2 row-start-2 flex items-center w-full ">
//           <h1 className="w-full flex justify-between text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-light text-gray-500 -translate-x-2">
//             <span>L</span>
//             <span>E</span>
//             <span>T</span>
//             <span>'</span>
//             <span>S</span>
//           </h1>
//         </div>

//         {/* CONNECT (COLUMN 3) */}
//         <div className="col-start-3 row-start-2 flex items-center w-full ">
//           <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-light text-gray-500 tracking-[0.25em] pl-6 -translate-x-2">
//             CONNECT
//           </h1>
//         </div>

//         {/* COLUMN 3 - CONTACT INFO */}
//         <div className="col-start-3 row-start-3 flex flex-col gap-3 text-base md:text-lg text-gray-700 pl-40">
//           <div className="flex items-center gap-4">
//             <Mail size={16} />
//             <span>Vaishnavikabra@gmail.com</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Phone size={16} />
//             <span>9512512385</span>
//           </div>
//         </div>

//         {/* YEAR */}
//         <div className="col-start-3 row-start-4 flex items-end justify-end pb-6 pr-6 text-lg tracking-wider">
//           2026
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function CONTACTS() {
  return (
    <div className="h-screen bg-[#f8f5f0] overflow-hidden bg-[url('/t2.png')] bg-repeat">
      {/* ================= DESKTOP (EXACT ORIGINAL) ================= */}
      <div
        className="
        hidden md:grid
        w-full h-full
        px-0
        border border-[#3a3a3a]
        grid-cols-[0.90fr_0.95fr_3.1fr]
        grid-rows-[0.7fr_auto_auto_auto]
      "
      >
        {/* COLUMN 1 */}
        <div className="col-start-1 row-span-full border-r border-[#3a3a3a] flex items-end justify-center pb-6">
          <div className="text-lg tracking-wider text-center">
            Vaishnavi kabra
          </div>
        </div>

        {/* COLUMN 2 IMAGE */}
        <div className="col-start-2 row-span-full border-r border-[#3a3a3a] flex items-start justify-center pt-40">
          <Image
            src="/building-isometric.png"
            alt="Isometric house model"
            width={800}
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* LET'S */}
        <div className="col-start-2 row-start-2 flex items-center w-full">
          <h1 className="w-full flex justify-between text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-light text-gray-500 -translate-x-2">
            <span>L</span>
            <span>E</span>
            <span>T</span>
            <span>'</span>
            <span>S</span>
          </h1>
        </div>

        {/* CONNECT */}
        <div className="col-start-3 row-start-2 flex items-center w-full">
          <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-light text-gray-500 tracking-[0.25em] pl-6 -translate-x-2">
            CONNECT
          </h1>
        </div>

        {/* CONTACT INFO */}
        <div className="col-start-3 row-start-3 flex flex-col gap-3 text-base md:text-lg text-gray-700 pl-40">
          <div className="flex items-center gap-4">
            <Mail size={16} />
            <span>Vaishnavikabra@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={16} />
            <span>9512512385</span>
          </div>
        </div>

        {/* YEAR */}
        <div className="col-start-3 row-start-4 flex items-end justify-end pb-6 pr-6 text-lg tracking-wider">
          2026
        </div>
      </div>

      {/* ================= MOBILE (KEEP YOUR DESIGN) ================= */}
      <div className="md:hidden flex flex-col h-full px-6 py-10">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-[28px] tracking-[0.35em] font-light text-gray-500">
            LET’S CONNECT
          </h1>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-10">
          <Image
            src="/building-isometric.png"
            alt="Isometric house model"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        {/* NAME */}
        <div className="text-center text-sm tracking-wider mb-6 text-gray-600">
          Vaishnavi kabra
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-4 text-sm text-gray-700 items-center">
          <div className="flex items-center gap-3">
            <Mail size={14} />
            <span>Vaishnavikabra@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={14} />
            <span>9512512385</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-auto flex justify-center text-sm text-gray-600 pt-10">
          2026
        </div>
      </div>
    </div>
  );
}