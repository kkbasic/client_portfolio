"use client";

import { useEffect, useState } from "react";

import PortfolioPage from "./components/portfolio";
import AboutMe from "./components/about";
import ContentPage from "./components/content";

import ShoonyaHouse from "./components/house";
import ConceptPage from "./components/concept";
import SectionPage from "./components/sectionbb";
import GalleryPage from "./components/gallery";
import FinalHeroPage from "./components/hero";

import Northface from "./components/north";
import DarkConceptPage from "./components/d_concept";
import DarkSectionPage from "./components/d_section";
import DarkGalleryPage from "./components/d_gallery";
import DarkFinalHeroPage from "./components/d_hero";
import TechnicalDrawings from "./components/drawing";
import TechnicalPage from "./components/interior";
import CONTACTS from "./components/contacts";

export default function Home() {
  const sections = [
    "portfolio",
    "about",
    "content",

    // Shoonya flow
    "shoonya",
    "concept",
    "section",
    "gallery",
    "final",

    // Northface flow
    "northface",
    "DarkConceptPage",
    "DarkSectionPage",
    "DarkGalleryPage",
    "DarkFinalHeroPage",

    //Technical
    "technical",
    "techConcept",
  ];

  const [active, setActive] = useState("portfolio");

  // 🔥 PERFECT SCROLL SPY (NO BUGS)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("ACTIVE:", entry.target.id);
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    // 🔥 FIX: use setTimeout to wait for DOM render
    const timeout = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        } else {
          console.log("❌ NOT FOUND:", id);
        }
      });
    }, 300); // small delay fixes it

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* 🔹 BASIC */}
      <section id="portfolio" className="snap-start min-h-screen">
        <PortfolioPage />
      </section>
      <section id="about" className="snap-start min-h-screen">
        <AboutMe />
      </section>
      <section id="content" className="snap-start min-h-screen">
        <ContentPage />
      </section>
      {/* 🔹 SHOONYA FLOW */}
      <section id="shoonya" className="snap-start min-h-screen">
        <ShoonyaHouse active={active} />
      </section>
      <section id="concept" className="snap-start min-h-screen">
        <ConceptPage active={active} />
      </section>
      <section id="section" className="snap-start min-h-screen">
        <SectionPage active={active} />
      </section>
      <section id="gallery" className="snap-start min-h-screen">
        <GalleryPage active={active} />
      </section>
      <section id="final" className="snap-start min-h-screen">
        <FinalHeroPage active={active} />
      </section>
      {/* 🔹 NORTHFACE FLOW */}
      <section id="northface" className="snap-start min-h-screen">
        <Northface active={active} />
      </section>
      <section id="DarkConceptPage" className="snap-start min-h-screen">
        <DarkConceptPage active={active} />
      </section>
      <section id="DarkSectionPage" className="snap-start min-h-screen">
        <DarkSectionPage active={active} />
      </section>
      <section id="DarkGalleryPage" className="snap-start min-h-screen">
        <DarkGalleryPage active={active} />
      </section>
      <section id="DarkFinalHeroPage" className="snap-start min-h-screen">
        <DarkFinalHeroPage active={active} />
      </section>
      <section id="technical" className="snap-start min-h-screen">
        <TechnicalDrawings active={active} />
      </section>
      <section id="techConcept" className="snap-start min-h-screen">
        <TechnicalPage active={active} />
      </section>
      <section className="snap-start min-h-screen">
        <CONTACTS />
      </section>
    </div>
  );
}
