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
    <section id="top" className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone/70 via-stone/20 to-stone" />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-10">
          <span className="font-display text-lg tracking-[0.1em] text-ink">SIX TRAVEL</span>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="flex flex-col gap-1.5 md:hidden">
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-16 z-20 mx-4 border border-line bg-stone-2 p-6 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-xl text-ink">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 -mt-32 px-6 pb-20 text-center md:-mt-40 md:px-10">
        <p className="font-script text-2xl md:text-3xl">{hero.eyebrow}</p>
        <h1 className="font-display mt-2 text-5xl leading-[1.05] text-ink md:text-7xl">
          {hero.headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ink-soft md:text-base">
          {hero.paragraph}
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-line">
          {hero.quickFacts.map((fact) => (
            <div key={fact.label} className="px-4">
              <p className="font-display text-2xl text-ink md:text-3xl">{fact.value}</p>
              <p className="eyebrow mt-1">{fact.label}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="link-underline mt-12 inline-block text-sm">
          Enquire Today &rarr;
        </a>
      </div>
    </section>
  );
}