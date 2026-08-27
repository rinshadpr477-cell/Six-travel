import Image from "next/image";
import site from "@/content/site.json";

export default function SixExperience() {
  const { experience } = site;
  const { fly, stay, move, connect, group, manage } = experience.items;

  return (
    <section id="experience" className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-4">{experience.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {experience.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[280px_280px_180px]">
          <a href="#contact" className="group relative overflow-hidden md:col-span-7 md:row-span-2">
            <Image src={fly.image!.src} alt={fly.image!.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="eyebrow !text-stone/80">{fly.label}</p>
              <p className="mt-1 max-w-xs text-sm text-stone">{fly.body}</p>
            </div>
          </a>

          <a href="#contact" className="group relative overflow-hidden md:col-span-5 md:row-span-2">
            <Image src={stay.image!.src} alt={stay.image!.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="eyebrow !text-stone/80">{stay.label}</p>
              <p className="mt-1 max-w-xs text-sm text-stone">{stay.body}</p>
            </div>
          </a>

          <a href="#contact" className="flex flex-col justify-between border border-line bg-stone p-6 transition-colors hover:bg-ink hover:text-stone md:col-span-4">
            <p className="eyebrow !text-inherit">{move.label}</p>
            <p className="mt-6 text-sm leading-relaxed">{move.body}</p>
          </a>

          <a href="#contact" className="flex flex-col justify-between border border-line bg-stone p-6 transition-colors hover:bg-ink hover:text-stone md:col-span-4">
            <p className="eyebrow !text-inherit">{connect.label}</p>
            <p className="mt-6 text-sm leading-relaxed">{connect.body}</p>
          </a>

          <a href="#contact" className="group relative overflow-hidden md:col-span-4">
            <Image src={group.image!.src} alt={group.image!.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="eyebrow !text-stone/80">{group.label}</p>
              <p className="mt-1 max-w-xs text-sm text-stone">{group.body}</p>
            </div>
          </a>

          <a href="#contact" className="flex flex-col justify-center border border-line bg-stone p-8 transition-colors hover:bg-ink hover:text-stone md:col-span-12">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="eyebrow !text-inherit">{manage.label}</p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed">{manage.body}</p>
              </div>
              <span className="link-underline whitespace-nowrap text-sm">{manage.ctaLabel}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}