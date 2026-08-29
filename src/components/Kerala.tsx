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

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
          {kerala.regions.map((region) => (
            <div key={region.title} className="bg-stone-2 p-6">
              <h3 className="font-display text-xl text-ink md:text-2xl">{region.title}</h3>
              <p className="eyebrow mt-2 !text-ink-soft normal-case tracking-normal">
                {region.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{region.body}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="link-underline mt-10 inline-block text-sm text-ink">
          {kerala.ctaLabel}
        </a>
      </div>
    </section>
  );
}