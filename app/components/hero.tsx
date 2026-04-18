"use client";

import Image from "next/image";

export default function FinalHeroPage({ active }: { active: string }) {
  const sections = ["shoonya", "concept", "section", "gallery", "final"];

  return (
    <div className="h-screen snap-start bg-[#f8f5f0] flex flex-col md:p-12 bg-[url('/t2.png')] bg-repeat">
      {/* ================= IMAGE ================= */}
      <div className="relative w-full flex-1">
        <Image
          src="/hero.png"
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
          <div>Residence</div>

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

          <div>09</div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:flex items-center justify-between mt-16 text-sm text-gray-600">
        <div>Residence</div>

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

        <div>09</div>
      </div>
    </div>
  );
}
