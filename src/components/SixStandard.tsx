import Image from "next/image";
import site from "@/content/site.json";

const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export default function SixStandard() {
  const { standard } = site;
  const [p1, p2, p3, p4, p5, p6] = standard.principles;

  const Hex = ({ p }: { p: (typeof standard.principles)[number] }) => (
    <a href="#contact" className="group relative block h-40 w-36 shrink-0 overflow-hidden transition-transform hover:scale-[1.03] md:h-48 md:w-44" style={{ clipPath: HEX_CLIP }}>
      <Image src={p.image} alt={p.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
        <span className="font-mono text-[10px] text-white/70">{p.number}</span>
        <h3 className="font-display mt-1 text-lg text-white md:text-xl">{p.title}</h3>
        <p className="mt-1 text-[11px] leading-snug text-white/80">{p.line}</p>
      </div>
    </a>
  );

  return (
    <section id="standard" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="eyebrow mb-4">{standard.eyebrow}</p>
        <h2 className="font-display mx-auto max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {standard.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-ink-soft">{standard.intro}</p>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex gap-3 md:gap-4">
            <Hex p={p1} />
            <Hex p={p2} />
            <Hex p={p3} />
          </div>
          <div className="-mt-8 flex gap-3 md:-mt-10 md:gap-4">
            <Hex p={p4} />
            <Hex p={p5} />
          </div>
          <div className="-mt-8 md:-mt-10">
            <Hex p={p6} />
          </div>
        </div>
      </div>
    </section>
  );
}