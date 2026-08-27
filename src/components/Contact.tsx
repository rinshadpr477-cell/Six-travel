import ContactForm from "./ContactForm";
import site from "@/content/site.json";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="eyebrow mb-4">{contact.eyebrow}</p>
        <h2 className="font-display max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {contact.heading}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
          {contact.paragraph}
        </p>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}