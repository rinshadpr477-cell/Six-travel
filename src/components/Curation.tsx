import Image from "next/image";
import site from "@/content/site.json";

export default function Curation() {
  const { curation } = site;

  return (
    <section id="experience" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="absolute inset-0">
        <Image src={curation.image.src} alt={curation.image.alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-stone/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-12">{curation.eyebrow}</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {curation.blocks.map((block) => (
            <div key={block.title} className="border border-line bg-stone/90 p-6 backdrop-blur-sm md:p-8">
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