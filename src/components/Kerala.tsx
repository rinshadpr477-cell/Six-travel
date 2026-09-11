import Image from "next/image";
import site from "@/content/site.json";

export default function Kerala() {
  const { kerala } = site;

  return (
    <section id="kerala" className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{kerala.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {kerala.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
          {kerala.intro}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {kerala.regions.map((region) =>
            region.image ? (
              <div key={region.title} className="relative h-64 overflow-hidden">
                <Image src={region.image} alt={region.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl text-white">{region.title}</h3>
                  <p className="mt-1 text-xs text-white/80">{region.tagline}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">{region.body}</p>
                </div>
              </div>
            ) : (
              <div key={region.title} className="flex h-64 flex-col justify-between border border-line bg-stone p-5">
                <div>
                  <h3 className="font-display text-xl text-ink">{region.title}</h3>
                  <p className="eyebrow mt-1 !text-ink-soft normal-case tracking-normal">
                    {region.tagline}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-ink-soft">{region.body}</p>
              </div>
            )
          )}
        </div>

        <a href="#contact" className="link-underline mt-10 inline-block text-sm text-ink">
          {kerala.ctaLabel}
        </a>
      </div>
    </section>
  );
}