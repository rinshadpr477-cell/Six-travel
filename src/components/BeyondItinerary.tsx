import Image from "next/image";
import site from "@/content/site.json";

export default function BeyondItinerary() {
  const { beyondItinerary } = site;

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-t border-line py-20 md:py-28">
      <Image src={beyondItinerary.image.src} alt={beyondItinerary.image.alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6 !text-white/75">{beyondItinerary.eyebrow}</p>
        <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
          {beyondItinerary.body}
        </p>
      </div>
    </section>
  );
}