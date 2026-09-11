import Image from "next/image";
import site from "@/content/site.json";

export default function WhoWeServe() {
  const { whoWeServe } = site;

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.06]">
        <Image src={whoWeServe.backgroundImage.src} alt={whoWeServe.backgroundImage.alt} fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6">{whoWeServe.eyebrow}</p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {whoWeServe.heading}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {whoWeServe.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-5 py-2 text-sm text-ink">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}