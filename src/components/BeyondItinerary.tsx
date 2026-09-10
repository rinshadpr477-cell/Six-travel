import site from "@/content/site.json";

export default function BeyondItinerary() {
  const { beyondItinerary } = site;

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6">{beyondItinerary.eyebrow}</p>
        <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
          {beyondItinerary.body}
        </p>
      </div>
    </section>
  );
}