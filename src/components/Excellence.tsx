import Image from "next/image";
import site from "@/content/site.json";

export default function Excellence() {
  const { excellence } = site;

  return (
    <section id="philosophy" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative h-72 overflow-hidden md:h-[420px]">
          <Image src={excellence.image.src} alt={excellence.image.alt} fill className="object-cover" />
        </div>

        <div>
          <p className="eyebrow mb-6">{excellence.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            {excellence.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">{excellence.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {excellence.pairs.map((pair) => (
              <div key={pair.less} className="flex items-center gap-3 text-sm">
                <span className="text-ink-soft">Less {pair.less}</span>
                <span className="text-line">/</span>
                <span className="font-display text-lg text-ink">More {pair.more}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}