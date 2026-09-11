import Image from "next/image";
import site from "@/content/site.json";

export default function DifferentWay() {
  const { differentWay } = site;

  return (
   <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24 md:py-32">
      <Image src={differentWay.image.src} alt={differentWay.image.alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6 !text-white/75">{differentWay.eyebrow}</p>
        <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
          {differentWay.heading}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          {differentWay.body}
        </p>
      </div>
    </section>
  );
}