import Image from "next/image";
import site from "@/content/site.json";

export default function GlobalReach() {
  const { reach } = site;

  return (
    <section id="reach" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          {reach.badges.map((badge, i) => (
            <span key={badge} className="flex items-center gap-4">
              <span className="eyebrow">{badge}</span>
              {i < reach.badges.length - 1 && <span className="h-1 w-1 rounded-full bg-ink-soft" />}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            {reach.headlineParts[0]}
          </h2>
          <div className="hidden flex-1 items-center px-6 md:flex">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-ink-soft" />
            <span className="mx-2 h-px flex-1 border-t border-dashed border-line" />
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            </span>
            <span className="mx-2 h-px flex-1 border-t border-dashed border-line" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-ink-soft md:text-right md:text-6xl">
            {reach.headlineParts[1]}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">{reach.eyebrow}</p>
            <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">{reach.heading}</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{reach.paragraph}</p>
            <a href="#contact" className="link-underline mt-6 w-fit text-sm text-ink">{reach.ctaLabel}</a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {reach.featuredCities.map((city, i) => (
              <div
                key={city.name}
                className={`group relative h-40 overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-56" : ""}`}
              >
                <Image src={city.image.src} alt={city.image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-stone/90 text-ink transition-colors group-hover:bg-stone">
                  <span aria-hidden="true" className="text-sm">&#8599;</span>
                </span>
                <div className="absolute bottom-3 left-4">
                  <p className="font-display text-lg text-stone">{city.name}</p>
                  <p className="text-xs text-stone/75">Curated by Six Travel</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-3 gap-y-3 border-t border-line pt-10">
          {reach.allCities.map((city, i) => (
            <span key={city} className="flex items-center gap-3">
              <span className="text-sm text-ink">{city}</span>
              {i < reach.allCities.length - 1 && <span className="h-1 w-1 rounded-full bg-line" />}
            </span>
          ))}
          <span className="text-sm text-ink-soft">&nbsp;— {reach.closingNote}</span>
        </div>
      </div>
    </section>
  );
}