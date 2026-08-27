"use client";

import { useState } from "react";
import site from "@/content/site.json";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-stone/90 backdrop-blur">
      <div className="mx-auto grid grid-cols-3 items-center px-6 py-5 md:px-10">
        <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm text-ink justify-self-start">
          <span className="flex flex-col gap-1">
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </span>
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#top" className="justify-self-center">
          <span className="font-display text-xl tracking-[0.08em] text-ink">SIX TRAVEL</span>
        </a>

        <a href="#contact" className="justify-self-end bg-ink px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-stone transition-opacity hover:opacity-85">
          {site.nav.cta}
        </a>
      </div>

      {open && (
        <div className="border-t border-line bg-stone px-6 py-6 md:px-10">
          <div className="flex flex-col gap-4">
            {site.nav.links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-2xl text-ink">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}