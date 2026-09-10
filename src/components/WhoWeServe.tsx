import site from "@/content/site.json";

export default function WhoWeServe() {
  const { whoWeServe } = site;

  return (
    <section className="border-t border-line bg-stone-2 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
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