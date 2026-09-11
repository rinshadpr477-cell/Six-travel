import Image from "next/image";
import site from "@/content/site.json";

export default function Selective() {
  const { selective } = site;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative order-2 h-72 overflow-hidden md:order-1 md:h-[440px]">
          <Image src={selective.image.src} alt={selective.image.alt} fill className="object-cover" />
        </div>

        <div className="order-1 md:order-2">
          <p className="eyebrow mb-6">{selective.eyebrow}</p>
          <h2 className="font-display text-3xl leading-snug text-ink md:text-4xl">
            {selective.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">{selective.body}</p>
          <p className="eyebrow mt-6 !text-ink">{selective.closing}</p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
      </div>
    </section>
  );
}