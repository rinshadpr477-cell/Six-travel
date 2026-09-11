import Image from "next/image";
import site from "@/content/site.json";

export default function Portfolio() {
  const { portfolio } = site;

  return (
    <section id="portfolio" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4 text-center">{portfolio.eyebrow}</p>
        <h2 className="font-display mx-auto max-w-xl text-center text-4xl leading-tight text-ink md:text-5xl">
          {portfolio.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.ways.map((way, i) => (
            <a key={way.title} href="#contact" className={`group relative overflow-hidden rounded-sm ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
              <div className={`relative w-full ${i === 0 ? "h-72 md:h-96" : "h-72"}`}>
                <Image src={way.image.src} alt={way.image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-white md:text-3xl">{way.title}</h3>
                <p className="mt-1 text-sm text-white/80">{way.tagline}</p>
                <span className="mt-4 inline-block border-b border-white/60 pb-0.5 text-xs uppercase tracking-[0.1em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {way.ctaLabel}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}