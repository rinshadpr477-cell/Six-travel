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
    <section id="top" className="px-4 pt-4 md:px-8 md:pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-line">
        <div className="relative h-[85vh] min-h-[560px] w-full">
          <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/60" />

          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-10">
            <span className="font-display text-lg tracking-[0.08em] text-stone">SIX TRAVEL</span>

            <nav className="hidden items-center gap-8 md:flex">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-stone/85 transition-colors hover:text-stone">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden rounded-full bg-stone px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-85 sm:inline-block">
                Enquire
              </a>
              <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="flex flex-col gap-1.5 md:hidden">
                <span className="h-px w-6 bg-stone" />
                <span className="h-px w-6 bg-stone" />
              </button>
            </div>
          </div>

          {open && (
            <div className="absolute inset-x-0 top-16 z-20 mx-4 rounded-2xl bg-stone p-6 md:hidden">
              <div className="flex flex-col gap-4">
                {NAV.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-xl text-ink">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center text-xs font-medium uppercase tracking-[0.1em] text-stone">
                  Enquire
                </a>
              </div>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-24 z-10 px-6 md:bottom-28 md:px-10">
            <p className="eyebrow mb-3 !text-stone/75">{hero.eyebrow}</p>
            <h1 className="font-display max-w-xl text-4xl leading-[1.05] text-stone md:text-6xl">
              {hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < hero.headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone/85 md:text-base">
              {hero.paragraph}
            </p>
          </div>
        </div>

        <div className="relative z-10 -mt-10 mx-4 mb-[-1px] rounded-2xl bg-stone md:mx-8 md:-mt-12">
          <div className="grid grid-cols-1 divide-y divide-line rounded-2xl border border-line sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:grid-cols-4">
            {hero.quickFacts.map((fact) => (
              <div key={fact.label} className="px-6 py-5">
                <p className="eyebrow mb-1.5">{fact.label}</p>
                <p className="text-sm text-ink">{fact.value}</p>
              </div>
            ))}
            <a href="#contact" className="flex items-center justify-between gap-2 rounded-b-2xl bg-ink px-6 py-5 text-stone transition-opacity hover:opacity-85 sm:rounded-none sm:rounded-r-2xl md:rounded-r-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.1em]">{hero.ctaLabel}</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}