import site from "@/content/site.json";

export default function Philosophy() {
  const { philosophy } = site;

  return (
    <section id="philosophy" className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow mb-8">{philosophy.eyebrow}</p>
        <p className="font-display text-3xl leading-snug text-ink md:text-5xl">
          {philosophy.headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < philosophy.headingLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="mx-auto mt-10 max-w-xl space-y-1 text-base leading-relaxed text-ink-soft md:text-lg">
          {philosophy.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="eyebrow mt-10 !text-ink">{philosophy.closing}</p>
      </div>
    </section>
  );
}