// // "use client";

// // import Image from "next/image";
// // import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

// // /* ================= MAIN ================= */
// // export default function AboutMe() {
// //   return (
// //     <div className="min-h-screen w-full bg-[#f4f4f2]  bg-[url('/t2.png')] bg-repeat">
// //       <div className="min-h-screen w-full border border-gray-300 flex">
// //         {/* ================= LEFT ================= */}
// //         <div className="flex-1  border-gray-300 flex justify-center items-center">
// //           <div className="w-full max-w-md flex flex-col gap-8">
// //             <h1 className="text-5xl font-bold uppercase tracking-[0.2em]">
// //               ABOUT ME
// //             </h1>

// //             <div className="relative w-full h-96 overflow-hidden">
// //               <Image
// //                 src="/aboutme.png"
// //                 alt="profile"
// //                 fill
// //                 className="object-cover grayscale"
// //               />
// //             </div>

// //             <div>
// //               <h2 className="text-2xl font-bold">VAISHNAVI KABRA</h2>
// //               <p className="text-sm text-gray-600 italic">Interior Designer</p>
// //             </div>

// //             <p className="text-sm text-gray-700 leading-relaxed">
// //               I’m an aspiring interior designer eager to expand my industry
// //               experience and unlock new opportunities. My portfolio spans
// //               residential, retail, and commercial projects, showcasing my talent
// //               for crafting comfortable and functional spaces that enhance human
// //               well-being. With an eye for detail and a passion for bringing
// //               imagination to life, I find joy in seeing spaces evolve from
// //               concepts to designs
// //             </p>
// //           </div>
// //         </div>

// //         {/* ================= MIDDLE ================= */}
// //         <div className="flex-1  border-gray-300 flex justify-center items-center">
// //           <div className="w-full max-w-md flex flex-col gap-10">
// //             {/* EDUCATION */}
// //             <Section title="EDUCATION">
// //               <div className="space-y-6 text-sm">
// //                 <EduRow
// //                   year="2021–2025"
// //                   title="B.Des in Interior & Furniture Design"
// //                   subtitle="Unitedworld Institute of Design, Gandhinagar"
// //                 />

// //                 <EduRow
// //                   year="2014–2021"
// //                   title="Shanti Asiatic School"
// //                   subtitle="Higher Secondary Education"
// //                 />

// //                 <EduRow
// //                   year="2009–2014"
// //                   title="Karnavati Public School"
// //                   subtitle="Secondary Education"
// //                 />

// //                 <EduRow
// //                   year="2015–2019"
// //                   title="Kanoria Centre of Arts"
// //                   subtitle="4-Year Art Course"
// //                 />
// //               </div>
// //             </Section>
// //             {/* SOFTWARE */}
// //             <Section title="SOFTWARE SKILLS">
// //               <Skill name="AutoCAD" level={4} />
// //               <Skill name="SketchUp" level={4} />
// //               <Skill name="V-Ray" level={3} />
// //               <Skill name="Photoshop" level={4} />
// //               <Skill name="3ds Max" level={4} />
// //             </Section>
// //             {/* ANALOGUE */}
// //             <Section title="ANALOGUE SKILLS">
// //               <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
// //                 <p>Rendering</p>
// //                 <p>Drafting</p>
// //                 <p>Coordination</p>
// //                 <p>Space Planning</p>
// //                 <p>3D Modeling</p>
// //                 <p>Empathize</p>
// //               </div>
// //             </Section>
// //           </div>
// //         </div>

// //         {/* ================= RIGHT ================= */}
// //         <div className="flex-1 flex justify-center items-center">
// //           <div className="w-full max-w-md flex flex-col gap-10">
// //             <Section title="INTERESTS">
// //               <div className="flex gap-3 text-xl">
// //                 <span>🎨</span>
// //                 <span>📸</span>
// //                 <span>🍳</span>
// //                 <span>💃</span>
// //                 <span>🎬</span>
// //               </div>
// //             </Section>

// //             <Section title="EXPERIENCE">
// //               <div className="space-y-6">
// //                 <ExpRow left="TEDx 2022" right="Hospitality Team" />
// //                 <div className="h-4" />
// //                 <ExpRow left="Praxis 5.0 2023" right="Installation Team" />
// //               </div>
// //             </Section>
// //             <Section title="LANGUAGES">
// //               <div className="flex justify-between text-m text-gray-700 max-w-55">
// //                 <span>English</span>
// //                 <span>Gujarati</span>
// //                 <span>Hindi</span>
// //               </div>
// //             </Section>
// //             <Section title="CONTACTS">
// //               <div className="flex flex-col gap-4 text-sm text-gray-700 mt-6">
// //                 <ContactRow
// //                   icon={<Mail size={14} />}
// //                   text="Vaishnavikabra@gmail.com"
// //                 />
// //                 <ContactRow icon={<Phone size={14} />} text="9512512385" />
// //                 <ContactRow
// //                   icon={<MapPin size={14} />}
// //                   text="Ahmedabad, Gujarat"
// //                 />
// //                 <ContactRow
// //                   icon={<Briefcase size={14} />}
// //                   text="Designer : Vaishnavi kabra"
// //                 />
// //                 <ContactRow
// //                   icon={<Briefcase size={14} />}
// //                   text="Vaishnaviii_"
// //                 />
// //               </div>
// //             </Section>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ================= SECTION HEADER (WITH LINE) ================= */
// // function Section({ title, children }: any) {
// //   return (
// //     <div className="w-full flex flex-col">
// //       {/* HEADER */}
// //       <div className="flex items-center gap-4">
// //         <h2 className="text-lg font-bold tracking-widest whitespace-nowrap">
// //           {title}
// //         </h2>

// //         <div className="flex-1 h-px bg-gray-400" />
// //       </div>

// //       {/* SPACE (IMPORTANT: NOT RELYING ON mt-*) */}
// //       <div className="h-5" />

// //       {/* CONTENT */}
// //       <div className="flex flex-col gap-4">{children}</div>
// //     </div>
// //   );
// // }
// // function ContactRow({ icon, text }: { icon: React.ReactNode; text: string }) {
// //   return (
// //     <div className="flex items-center gap-3">
// //       {/* ICON COLUMN */}
// //       <div className="w-5 flex justify-center text-gray-600">{icon}</div>

// //       {/* TEXT COLUMN */}
// //       <div className="text-gray-700">{text}</div>
// //     </div>
// //   );
// // }
// // function ExpRow({ left, right }: { left: string; right: string }) {
// //   return (
// //     <div className="flex justify-between gap-6 text-sm">
// //       {/* LEFT SIDE */}
// //       <div className="text-gray-500 w-32">{left}</div>

// //       {/* RIGHT SIDE */}
// //       <div className="flex-1 text-black">{right}</div>
// //     </div>
// //   );
// // }
// // /* ================= EDUCATION ROW ================= */
// // function EduRow({
// //   year,
// //   title,
// //   subtitle,
// // }: {
// //   year: string;
// //   title: string;
// //   subtitle: string;
// // }) {
// //   return (
// //     <div className="flex gap-6">
// //       {/* YEAR */}
// //       <div className="w-24 text-gray-500">{year}</div>

// //       {/* CONTENT */}
// //       <div className="flex-1">
// //         <p className="text-black font-medium">{title}</p>
// //         <p className="text-gray-600">{subtitle}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ================= SKILL ================= */
// // function Skill({ name, level }: { name: string; level: number }) {
// //   return (
// //     <div className="flex items-center justify-between text-sm mb-2">
// //       <span className="text-gray-700">{name}</span>
// //       <div className="flex gap-1">
// //         {Array.from({ length: 5 }).map((_, i) => (
// //           <span
// //             key={i}
// //             className={`w-2 h-2 rounded-full ${
// //               i < level ? "bg-black" : "bg-gray-300"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

// /* ================= MAIN ================= */
// export default function AboutMe() {
//   return (
//     <div className="min-h-screen w-full bg-[#f4f4f2] bg-[url('/t2.png')] bg-repeat">
//       <div className="min-h-screen w-full border border-gray-300 flex flex-col md:flex-row">
//         {/* ================= LEFT ================= */}
//         <div className="flex-1 border-gray-300 flex justify-center items-center px-6 md:px-0 py-10">
//           <div className="w-full max-w-md flex flex-col gap-6 md:gap-8">
//             <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em]">
//               ABOUT ME
//             </h1>

//             <div className="relative w-full h-64 md:h-96 overflow-hidden">
//               <Image
//                 src="/aboutme.png"
//                 alt="profile"
//                 fill
//                 className="object-cover grayscale"
//               />
//             </div>

//             <div>
//               <h2 className="text-xl md:text-2xl font-bold">VAISHNAVI KABRA</h2>
//               <p className="text-sm text-gray-600 italic">Interior Designer</p>
//             </div>

//             <p className="text-sm text-gray-700 leading-relaxed">
//               I’m an aspiring interior designer eager to expand my industry
//               experience and unlock new opportunities. My portfolio spans
//               residential, retail, and commercial projects, showcasing my talent
//               for crafting comfortable and functional spaces.
//             </p>
//           </div>
//         </div>

//         {/* ================= MIDDLE ================= */}
//         <div className="flex-1 border-gray-300 flex justify-center items-center px-6 md:px-0 py-10">
//           <div className="w-full max-w-md flex flex-col gap-8 md:gap-10">
//             {/* EDUCATION */}
//             <Section title="EDUCATION">
//               <div className="space-y-4 md:space-y-6 text-sm">
//                 <EduRow
//                   year="2025–2026"
//                   title="Bonfire Institute of Design"
//                   subtitle="Advanced Design Program"
//                 />
//                 <EduRow
//                   year="2022–2023"
//                   title="Instituto Design Innovation"
//                   subtitle="Interior Design Program"
//                 />
//               </div>
//             </Section>

//             {/* SOFTWARE */}
//             <Section title="SOFTWARE SKILLS">
//               <Skill name="AutoCAD" level={4} />
//               <Skill name="SketchUp" level={4} />
//               <Skill name="V-Ray" level={3} />
//             </Section>

//             {/* ANALOGUE */}
//             <Section title="ANALOGUE SKILLS">
//               <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
//                 <p>Rendering</p>
//                 <p>Drafting</p>
//                 <p>Coordination</p>
//                 <p>Space Planning</p>
//               </div>
//             </Section>
//           </div>
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div className="flex-1 flex justify-center items-center px-6 md:px-0 py-10">
//           <div className="w-full max-w-md flex flex-col gap-8 md:gap-10">
//             <Section title="INTERESTS">
//               <div className="flex gap-3 text-xl">
//                 <span>🎨</span>
//                 <span>📸</span>
//                 <span>🍳</span>
//                 <span>💃</span>
//                 <span>🎬</span>
//               </div>
//             </Section>

//             <Section title="EXPERIENCE">
//               <div className="space-y-4">
//                 <ExpRow left="TEDx 2022" right="Hospitality Team" />
//                 <ExpRow left="Praxis 5.0 2023" right="Installation Team" />
//               </div>
//             </Section>

//             <Section title="LANGUAGES">
//               <div className="flex justify-between text-sm text-gray-700">
//                 <span>English</span>
//                 <span>Telugu</span>
//                 <span>Hindi</span>
//               </div>
//             </Section>

//             <Section title="CONTACTS">
//               <div className="flex flex-col gap-3 text-sm text-gray-700">
//                 <ContactRow icon={<Mail size={14} />} text="Vaishnavikabra98@gmail.com" />
//                 <ContactRow icon={<Phone size={14} />} text="7207877056" />
//                 <ContactRow icon={<MapPin size={14} />} text="Hyderabad" />
//                 <ContactRow icon={<Briefcase size={14} />} text="Designer" />
//               </div>
//             </Section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= COMPONENTS ================= */

// function Section({ title, children }: any) {
//   return (
//     <div className="w-full flex flex-col">
//       <div className="flex items-center gap-4">
//         <h2 className="text-base md:text-lg font-bold tracking-widest whitespace-nowrap">
//           {title}
//         </h2>
//         <div className="flex-1 h-px bg-gray-400" />
//       </div>

//       <div className="h-4 md:h-5" />
//       <div className="flex flex-col gap-3 md:gap-4">{children}</div>
//     </div>
//   );
// }

// function ContactRow({ icon, text }: any) {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="w-5 flex justify-center text-gray-600">{icon}</div>
//       <div className="text-gray-700">{text}</div>
//     </div>
//   );
// }

// function ExpRow({ left, right }: any) {
//   return (
//     <div className="flex justify-between gap-4 text-sm">
//       <div className="text-gray-500 w-24">{left}</div>
//       <div className="flex-1 text-black">{right}</div>
//     </div>
//   );
// }

// function EduRow({ year, title, subtitle }: any) {
//   return (
//     <div className="flex gap-4">
//       <div className="w-20 text-gray-500">{year}</div>
//       <div className="flex-1">
//         <p className="text-black font-medium">{title}</p>
//         <p className="text-gray-600">{subtitle}</p>
//       </div>
//     </div>
//   );
// }

// function Skill({ name, level }: any) {
//   return (
//     <div className="flex items-center justify-between text-sm">
//       <span className="text-gray-700">{name}</span>
//       <div className="flex gap-1">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <span
//             key={i}
//             className={`w-2 h-2 rounded-full ${
//               i < level ? "bg-black" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

/* ================= MAIN ================= */
export default function AboutMe() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f2] bg-[url('/t2.png')] bg-repeat">
      <div className="min-h-screen w-full border border-gray-300 flex flex-col md:flex-row">
        {/* ================= LEFT ================= */}
        <div className="flex-1 border-gray-300 flex justify-center items-center px-6 md:px-0 py-10">
          <div className="w-full max-w-md flex flex-col gap-6 md:gap-8">
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em]">
              ABOUT ME
            </h1>

            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              <Image
                src="/aboutme.png"
                alt="profile"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold">VAISHNAVI KABRA</h2>
              <p className="text-sm text-gray-600 italic">Interior Designer</p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              I’m an aspiring interior designer eager to expand my industry
              experience and unlock new opportunities. My portfolio spans
              residential, retail, and commercial projects, showcasing my talent
              for crafting comfortable and functional spaces.
            </p>
          </div>
        </div>

        {/* ================= MIDDLE ================= */}
        <div className="flex-1 border-gray-300 flex justify-center items-center px-6 md:px-0 py-10">
          <div className="w-full max-w-md flex flex-col gap-10 md:gap-12">
            {/* EDUCATION */}
            <Section title="EDUCATION">
              <div className="space-y-4 md:space-y-6 text-sm">
                <EduRow
                  year="2025–2026"
                  title="Bonfire Institute of Design"
                  subtitle="Advanced Design Program"
                />
                <EduRow
                  year="2022–2023"
                  title="Instituto Design Innovation"
                  subtitle="Interior Design Program"
                />
              </div>
            </Section>

            {/* SOFTWARE */}
            <Section title="SOFTWARE SKILLS">
              <Skill name="AutoCAD" level={4} />
              <Skill name="SketchUp" level={4} />
              <Skill name="V-Ray" level={3} />
            </Section>

            {/* ANALOGUE */}
            <Section title="ANALOGUE SKILLS">
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p>Rendering</p>
                <p>Drafting</p>
                <p>Coordination</p>
                <p>Space Planning</p>
              </div>
            </Section>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-0 py-10">
          <div className="w-full max-w-md flex flex-col gap-10 md:gap-14">
            {/* INTERESTS */}
            <Section title="INTERESTS">
              <div className="flex gap-4 text-2xl md:text-3xl opacity-80">
                <span>🎨</span>
                <span>📸</span>
                <span>🍳</span>
                <span>💃</span>
                <span>🎬</span>
              </div>
            </Section>

            {/* LANGUAGES */}
            <Section title="LANGUAGES">
              <div className="flex justify-between text-sm text-gray-700">
                <span>English</span>
                <span>Telugu</span>
                <span>Hindi</span>
              </div>
            </Section>

            {/* CONTACTS */}
            <Section title="CONTACTS">
              <div className="flex flex-col gap-4 text-sm text-gray-700">
                <ContactRow
                  icon={<Mail size={14} />}
                  text="Vaishnavikabra98@gmail.com"
                />
                <ContactRow icon={<Phone size={14} />} text="7207877056" />
                <ContactRow icon={<MapPin size={14} />} text="Hyderabad" />
                <ContactRow icon={<Briefcase size={14} />} text="Designer" />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }: any) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center gap-4">
        <h2 className="text-base md:text-lg font-bold tracking-widest whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-400" />
      </div>

      <div className="h-4 md:h-5" />
      <div className="flex flex-col gap-3 md:gap-4">{children}</div>
    </div>
  );
}

function ContactRow({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 flex justify-center text-gray-600">{icon}</div>
      <div className="text-gray-700">{text}</div>
    </div>
  );
}

function EduRow({ year, title, subtitle }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-20 text-gray-500">{year}</div>
      <div className="flex-1">
        <p className="text-black font-medium">{title}</p>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

function Skill({ name, level }: any) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-700">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
