import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden px-4 pt-18 pb-6 sm:px-8">
      <Container>
        <Reveal variant="blur">
          <p className="font-display text-center whitespace-nowrap text-[clamp(44px,10.6vw,168px)] leading-[0.85] tracking-[-0.045em] [font-stretch:100%]">
            Young <span className="font-accent text-accent">&amp;</span> Rich
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
