// "use client";

// import Image from "next/image";

// const projects = [
//   {
//     id: "01",
//     title: "Shoonya House",
//     subtitle: "Residential",
//     img: "/b.png",
//   },
//   {
//     id: "02",
//     title: "Northface x GoPro",
//     subtitle: "Retail Concept",
//     img: "/a.png",
//   },
//   {
//     id: "03",
//     title: "Snow Ski Cabin",
//     subtitle: "Iceland",
//     img: "/c.png",
//   },
//   {
//     id: "04",
//     title: "Tim Burton Chair",
//     subtitle: "Furniture Study",
//     img: "/d.png",
//   },
//   {
//     id: "05",
//     title: "Technical Drawings",
//     subtitle: "Cabinetry Detail",
//     img: "/e.png",
//   },
// ];

// export default function ContentPage() {
//   return (
//     <div className="bg-[#f4f1ea] min-h-screen bg-[url('/t2.png')] bg-repeat">
//       <div className="max-w-[1400px] mx-auto flex flex-col py-20">
//         {/* HEADER */}
//         <div className="flex items-center gap-8 mb-32">
//           <h1 className="text-6xl tracking-[0.3em] uppercase font-medium">
//             CONTENT
//           </h1>
//           <div className="h-[1px] bg-gray-400 flex-1" />
//         </div>

//         {/* PROJECTS */}
//         <div className="grid grid-cols-5 gap-12 mb-24">
//           {projects.map((p) => (
//             <div key={p.id} className="flex flex-col items-center gap-4">
//               <div className="relative w-full h-[180px] overflow-hidden">
//                 <Image
//                   src={p.img}
//                   alt={p.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="text-[48px] font-medium">{p.id}</div>
//               <div className="text-[20px] font-semibold text-center">
//                 {p.title}
//               </div>
//               <div className="text-[16px] text-gray-600 font-medium text-center">
//                 {p.subtitle}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FOOTER */}
//         <div className="flex justify-between items-center text-sm text-gray-600">
//           <div>Interior Portfolio</div>
//           <div>03</div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "House",
    subtitle: "Residential",
    img: "/bed1.png",
  },
  {
    id: "02",
    title: "Concept",
    subtitle: "House Concept",
    img: "/b5.png",
  },
  {
    id: "03",
    title: "Section",
    subtitle: "Details",
    img: "/c.png",
  },
  {
    id: "04",
    title: "Gallery",
    subtitle: "Gallery Section",
    img: "/d.png",
  },
  {
    id: "05",
    title: "Technical Drawings",
    subtitle: "Layout Detail",
    img: "/e.png",
  },
];

export default function ContentPage() {
  return (
    <div className="bg-[#f4f1ea] min-h-screen bg-[url('/t2.png')] bg-repeat">
      <div className="max-w-[1400px] mx-auto flex flex-col px-4 md:px-8 py-12 md:py-20">
        {/* HEADER */}
        <div className="flex items-center gap-4 md:gap-8 mb-16 md:mb-32">
          <h1 className="text-3xl md:text-6xl tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
            CONTENT
          </h1>
          <div className="h-[1px] bg-gray-400 flex-1" />
        </div>

        {/* PROJECTS */}
        <div
          className="
          grid 
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
          gap-6 md:gap-12 
          mb-16 md:mb-24
        "
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center gap-3 md:gap-4"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ID */}
              <div className="text-2xl md:text-[48px] font-medium">{p.id}</div>

              {/* TITLE */}
              <div className="text-sm md:text-[20px] font-semibold text-center">
                {p.title}
              </div>

              {/* SUBTITLE */}
              <div className="text-xs md:text-[16px] text-gray-600 font-medium text-center">
                {p.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-xs md:text-sm text-gray-600">
          <div>Interior Portfolio</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}
