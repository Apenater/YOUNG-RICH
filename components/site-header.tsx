import { ButtonLink } from "@/components/ui";

const links = [
  { href: "#programa", label: "Programa" },
  { href: "#mentores", label: "Mentores" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Principal"
        className="flex w-full max-w-[1240px] items-center justify-between gap-3 rounded-full border border-paper/12 bg-ink-2/80 py-2 pr-2 pl-5 backdrop-blur-lg sm:gap-4 sm:pl-6"
      >
        <a
          href="#top"
          className="font-display whitespace-nowrap text-base tracking-[-0.01em] text-paper sm:text-lg"
        >
          Young <span className="font-accent text-[19px] text-accent sm:text-[22px]">&amp;</span> Rich
        </a>
        <ul className="label-mono hidden items-center gap-8 text-xs md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted-2 transition-colors hover:text-paper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href="#ticket" size="sm" arrow className="max-sm:px-4">
          Reservar cupo
        </ButtonLink>
      </nav>
    </header>
  );
}
