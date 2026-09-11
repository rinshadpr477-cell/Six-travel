import Image from "next/image";
import site from "@/content/site.json";

export default function SixStandard() {
  const { standard } = site;

  return (
    <section id="standard" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src={standard.backgroundImage.src}
          alt={standard.backgroundImage.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{standard.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {standard.heading}
        </h2>
        <p className="mt-6 max-w-lg text-ink-soft">{standard.intro}</p>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {standard.principles.map((p) => (
            <div key={p.number} className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-12">
              <span className="font-display text-3xl text-ink-soft md:text-4xl">{p.number}</span>
              <div>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{p.title}</h3>
                <p className="eyebrow mt-2 !text-ink-soft normal-case tracking-normal">{p.line}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft md:text-base">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}