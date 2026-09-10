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
    <section id="top">
      <div className="flex items-center justify-between px-6 py-8 md:px-10 md:py-10">
        <span className="font-display text-lg tracking-[0.06em] text-ink">SIX TRAVEL</span>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="link-underline hidden text-sm text-ink sm:inline-block">
            Enquire
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="flex flex-col gap-1.5 md:hidden">
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-xl text-ink">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="link-underline w-fit text-sm text-ink">
              Enquire
            </a>
          </div>
        </div>
      )}

      <div className="px-6 pb-16 pt-8 text-center md:px-10 md:pb-24 md:pt-12">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>
        <h1 className="font-display mx-auto max-w-3xl text-5xl leading-[1.08] text-ink md:text-7xl">
          {hero.headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
          {hero.paragraph}
        </p>
      </div>

      <div className="relative h-[70vh] min-h-[420px] w-full">
        <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
      </div>

      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="grid grid-cols-1 divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-y-0">
          {hero.quickFacts.map((fact) => (
            <div key={fact.label} className="py-8 text-center sm:border-l sm:border-line sm:first:border-l-0">
              <p className="eyebrow mb-2">{fact.label}</p>
              <p className="text-sm text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}