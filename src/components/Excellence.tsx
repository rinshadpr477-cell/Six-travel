import site from "@/content/site.json";

export default function Excellence() {
  const { excellence } = site;

  return (
    <section id="philosophy" className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6">{excellence.eyebrow}</p>
        <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
          {excellence.heading}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {excellence.body}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {excellence.pairs.map((pair) => (
            <div key={pair.less} className="flex items-center gap-3 text-sm">
              <span className="text-ink-soft">Less {pair.less}</span>
              <span className="text-line">/</span>
              <span className="font-display text-lg text-ink">More {pair.more}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}