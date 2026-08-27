import site from "@/content/site.json";

export default function Footer() {
  const { footer, nav } = site;

  return (
    <footer className="bg-ink text-stone">
      <div className="px-6 py-20 md:px-10 md:py-28">
        <p className="font-display text-4xl leading-tight md:text-6xl">
          {footer.closingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < footer.closingLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="eyebrow mt-6 !text-stone/60">{footer.closingSubline}</p>

        <div className="mt-16 flex flex-col gap-8 border-t border-stone/20 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <span className="font-display text-lg tracking-[0.08em]">SIX TRAVEL</span>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-stone/80 transition-colors hover:text-stone">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="text-sm text-stone/80 transition-colors hover:text-stone">
                Contact
              </a>
            </nav>
          </div>

          <a href={`mailto:${footer.contactEmail}`} className="text-sm text-stone/80 hover:text-stone">
            {footer.contactEmail}
          </a>
        </div>

        <p className="mt-10 text-xs text-stone/50">
          &copy; {new Date().getFullYear()} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}