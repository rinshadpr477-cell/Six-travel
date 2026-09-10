import site from "@/content/site.json";

export default function DifferentWay() {
  const { differentWay } = site;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6">{differentWay.eyebrow}</p>
        <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
          {differentWay.heading}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {differentWay.body}
        </p>
      </div>
    </section>
  );
}