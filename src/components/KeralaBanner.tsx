import Image from "next/image";
import site from "@/content/site.json";

export default function KeralaBanner() {
  const { keralaBanner } = site;

  return (
    <section className="relative flex h-[70vh] min-h-[420px] w-full items-center justify-center overflow-hidden">
      <Image
        src={keralaBanner.image.src}
        alt={keralaBanner.image.alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <h2 className="font-display relative z-10 text-7xl italic text-white drop-shadow-lg md:text-9xl">
        {keralaBanner.word}
      </h2>
    </section>
  );
}