"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalPage({ active }: { active: string }) {
  const sections = ["technical", "techConcept"];

  const items = [
    { name: "COB / RCB", icon: "circle" },
    { name: "Button Light", icon: "dot" },
    { name: "Magnetic Track", icon: "line" },
    { name: "WiFi", icon: "wifi" },
    { name: "Split AC", icon: "rect" },
    { name: "Switch Board", icon: "switch" },
    { name: "Ceiling Fan", icon: "fan" },
    { name: "Wall Light", icon: "wall" },
    { name: "Pendant Light", icon: "pendant" },
  ];

  return (
    <motion.div
      id="techConcept"
      className="min-h-screen bg-[#f8f5f0]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:flex min-h-screen">
        {/* LEFT */}
        <div className="w-[80%] flex flex-col">
          <div className="px-6 md:px-12 pt-8">
            <h1 className="text-2xl md:text-4xl tracking-[0.25em] font-semibold text-gray-800">
              INTERIOR DESIGNS
            </h1>
          </div>

          <div className="flex flex-1 mt-6 px-6 md:px-12 gap-6">
            <div className="relative w-1/2 h-full">
              <Image
                src="/i1.png"
                alt="Electrical plan"
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="relative w-1/2 h-full">
              <Image
                src="/i2.png"
                alt="Utility plan"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center text-sm text-gray-600 px-6 md:px-12 pb-6">
            <div>Technical drawing</div>

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

            <div>27</div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[20%] bg-[#2f2f2f] text-white flex items-center justify-center">
          <div className="w-[80%] border border-white/20">
            <div className="text-center py-4 border-b-2 border-white/30">
              <h2 className="text-xs tracking-[0.3em]">NOMENCLATURE</h2>
            </div>

            <table className="w-full text-xs">
              <tbody>
                {items.map((item, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-3 w-[35%] border-r border-white/20">
                      <div className="flex items-center justify-center">
                        {item.icon === "line" && (
                          <div className="w-6 h-[2px] bg-white" />
                        )}
                        {item.icon === "dot" && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                        {item.icon === "rect" && (
                          <div className="w-4 h-3 border border-white" />
                        )}
                        {item.icon === "wall" && (
                          <div className="w-3 h-3 border-l-2 border-white" />
                        )}
                        {item.icon === "circle" && (
                          <div className="w-3 h-3 border border-white rounded-full" />
                        )}
                      </div>
                    </td>

                    <td className="py-3 pl-4 tracking-[0.15em] text-left">
                      {item.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (YOUR DESIGN) ================= */}
      <div className="md:hidden flex flex-col bg-[url('/t2.png')] bg-repeat">
        {/* TITLE */}
        <div className="px-4 pt-8">
          <h1 className="text-lg tracking-[0.25em] font-semibold text-gray-800">
            INTERIOR TECHNOLOGY
          </h1>
        </div>

        {/* IMAGES */}
        <div className="flex flex-col mt-6 px-4 gap-6">
          <div className="relative w-full h-[50vh] rounded-xl overflow-hidden bg-white shadow-sm">
            <Image
              src="/i1.png"
              alt="Electrical plan"
              fill
              className="object-contain p-4"
            />
          </div>

          <div className="relative w-full h-[50vh] rounded-xl overflow-hidden bg-white shadow-sm">
            <Image
              src="/i2.png"
              alt="Utility plan"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* NOMENCLATURE */}
        <div className="px-4 mt-10">
          <h2 className="text-[10px] tracking-[0.3em] text-gray-500 mb-4">
            NOMENCLATURE
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
              >
                <div className="w-6 flex justify-center">
                  {item.icon === "line" && (
                    <div className="w-4 h-[2px] bg-black" />
                  )}
                  {item.icon === "dot" && (
                    <div className="w-2 h-2 bg-black rounded-full" />
                  )}
                  {item.icon === "rect" && (
                    <div className="w-3 h-2 border border-black" />
                  )}
                  {item.icon === "wall" && (
                    <div className="w-2 h-2 border-l-2 border-black" />
                  )}
                  {item.icon === "circle" && (
                    <div className="w-2 h-2 border border-black rounded-full" />
                  )}
                </div>

                <span className="text-[11px] text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-xs text-gray-600 px-4 pb-6 mt-10">
          <div>Technical drawing</div>

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
                  active === id ? "bg-red-500 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div>27</div>
        </div>
      </div>
    </motion.div>
  );
}
