import Image from "next/image";
import site from "@/content/site.json";

export default function Enterprise() {
  const { enterprise } = site;

  return (
    <section className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <p className="eyebrow mb-4">{enterprise.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            {enterprise.heading}
          </h2>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {enterprise.items.map((item) => (
              <div key={item.title} className="py-5">
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{enterprise.closing}</p>
            <p className="eyebrow whitespace-nowrap">{enterprise.closingLabel}</p>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden md:h-[500px]">
          <Image src={enterprise.image.src} alt={enterprise.image.alt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}