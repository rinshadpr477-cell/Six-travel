import site from "@/content/site.json";

export default function Curation() {
  const { curation } = site;

  return (
    <section id="experience" className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-12">{curation.eyebrow}</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {curation.blocks.map((block) => (
            <div key={block.title}>
              <p className="eyebrow mb-3 !text-ink-soft normal-case tracking-normal">
                {block.title}
              </p>
              <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                {block.heading}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft md:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}