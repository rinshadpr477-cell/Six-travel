import site from "@/content/site.json";

export default function Destinations() {
  const { destinations } = site;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{destinations.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {destinations.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {destinations.tiers.map((tier) => (
            <div key={tier.title} className="bg-stone p-8">
              <h3 className="font-display text-2xl text-ink md:text-3xl">{tier.title}</h3>
              <p className="eyebrow mt-2 !text-ink-soft normal-case tracking-normal">
                {tier.tagline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">{tier.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}