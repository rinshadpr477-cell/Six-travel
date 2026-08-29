import site from "@/content/site.json";

export default function Portfolio() {
  const { portfolio } = site;

  return (
    <section id="portfolio" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{portfolio.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {portfolio.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {portfolio.ways.map((way) => (
            <div key={way.title} className="flex flex-col justify-between bg-stone p-8">
              <div>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{way.title}</h3>
                <p className="eyebrow mt-2 !text-ink-soft normal-case tracking-normal">
                  {way.tagline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{way.body}</p>
              </div>
              <a href="#contact" className="link-underline mt-8 w-fit text-sm text-ink">
                {way.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}