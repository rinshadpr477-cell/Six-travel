import site from "@/content/site.json";

export default function Enterprise() {
  const { enterprise } = site;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{enterprise.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {enterprise.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 divide-y divide-line border-t border-line md:grid-cols-5 md:divide-x md:divide-y-0">
          {enterprise.items.map((item) => (
            <div key={item.title} className="py-8 pr-6 md:px-6 md:py-2">
              <h3 className="font-display text-lg text-ink md:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-2 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-ink-soft">{enterprise.closing}</p>
          <p className="eyebrow whitespace-nowrap">{enterprise.closingLabel}</p>
        </div>
      </div>
    </section>
  );
}