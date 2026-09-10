import site from "@/content/site.json";

export default function Portfolio() {
  const { portfolio } = site;

  return (
    <section id="portfolio" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="eyebrow mb-4 text-center">{portfolio.eyebrow}</p>
        <h2 className="font-display mx-auto max-w-xl text-center text-4xl leading-tight text-ink md:text-5xl">
          {portfolio.heading}
        </h2>

        <div className="mt-20 divide-y divide-line">
          {portfolio.ways.map((way) => (
            <div key={way.title} className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-12">
              <div>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{way.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{way.tagline}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-ink-soft md:text-base">{way.body}</p>
                <a href="#contact" className="link-underline mt-5 inline-block text-sm text-ink">
                  {way.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}