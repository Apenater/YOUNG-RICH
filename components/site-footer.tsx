import { Container } from "@/components/ui";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden px-4 pt-18 pb-8 sm:px-8">
      <Container className="flex flex-col gap-10">
        <p
          aria-hidden="true"
          className="font-display text-center whitespace-nowrap text-[clamp(44px,10.6vw,168px)] leading-[0.85] tracking-[-0.045em] [font-stretch:100%]"
        >
          Young <span className="font-accent text-accent">&amp;</span> Rich
        </p>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-7 text-sm text-muted">
          <span>© {site.copyrightYear} Young &amp; Rich</span>
          <span className="hidden sm:inline">Un programa de Javier Portillo y David [Apellido]</span>
          <div className="flex gap-6">
            <a href={site.links.instagram} className="transition-colors hover:text-paper">
              Instagram
            </a>
            <a href={site.links.whatsapp} className="transition-colors hover:text-paper">
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
