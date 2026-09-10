import site from "@/content/site.json";

export default function Selective() {
  const { selective } = site;

  return (
    <section className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow mb-8">{selective.eyebrow}</p>
        <p className="font-display text-3xl leading-snug text-ink md:text-5xl">
          {selective.heading}
        </p>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {selective.body}
        </p>
        <p className="eyebrow mt-10 !text-ink">{selective.closing}</p>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {selective.process.map((step, i) => (
            <div key={step} className="flex items-start gap-3 border border-line px-4 py-3">
              <span className="font-mono text-xs text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}