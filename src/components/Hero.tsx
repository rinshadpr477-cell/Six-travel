import Image from "next/image";
import site from "@/content/site.json";

export default function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative">
      <div className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-28 md:px-10 md:pb-32">
          <p className="eyebrow mb-4 !text-stone/80">{hero.eyebrow}</p>
          <h1 className="font-display text-6xl leading-[0.95] text-stone md:text-8xl">
            {hero.headlineLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < hero.headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="relative z-10 mx-6 -mt-16 border border-line bg-stone md:mx-10 md:-mt-20">
        <div className="grid grid-cols-2 divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          {hero.quickFacts.map((fact) => (
            <div key={fact.label} className="px-6 py-6">
              <p className="eyebrow mb-2">{fact.label}</p>
              <p className="text-sm text-ink">{fact.value}</p>
            </div>
          ))}
          <a href="#contact" className="flex items-center justify-between gap-2 bg-ink px-6 py-6 text-stone transition-opacity hover:opacity-85">
            <span className="text-sm font-medium uppercase tracking-[0.1em]">{hero.ctaLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl px-6 text-center text-sm leading-relaxed text-ink-soft md:px-10">
        {hero.paragraph}
      </p>
    </section>
  );
}