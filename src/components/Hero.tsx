"use client";

import { useState } from "react";
import Image from "next/image";
import site from "@/content/site.json";

const NAV = [
  { label: "The Standard", href: "#standard" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Reach", href: "#reach" },
];

export default function Hero() {
  const { hero } = site;
  const [open, setOpen] = useState(false);

  return (
    <section id="top" className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-x-6 top-24 bottom-16 border border-white/25 bg-black/20 backdrop-blur-sm md:inset-x-16 md:top-28 md:bottom-20" />
      </div>

      <div className="absolute inset-x-6 top-24 z-10 flex items-center justify-between px-6 py-2 md:inset-x-16 md:top-28 md:px-10">
        <span className="font-display text-lg font-bold tracking-[0.06em] text-white">
          SIX <span className="font-normal">TRAVEL</span>
        </span>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="flex flex-col gap-1.5 md:hidden">
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-6 top-16 z-20 border border-white/25 bg-black/60 p-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-xl text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <h1 className="pointer-events-none absolute inset-x-0 z-[5] text-center font-sans text-[22vw] font-black uppercase leading-none tracking-tight text-white/90 md:text-[16vw]">
        {hero.bigWord}
      </h1>

      <div className="relative z-10 mt-24 flex flex-col items-center px-6 text-center md:mt-32">
        <p className="max-w-md text-sm text-white/90 md:text-base">
          {hero.paragraph}
        </p>
        <a href="#contact" className="mt-8 rounded-full border border-white/70 px-8 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black">
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}