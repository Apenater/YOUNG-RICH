import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

/** Palabra resaltada: el fondo se pinta de izquierda a derecha, una tras otra (`delay` en ms). */
function Highlight({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span
      className="hl font-accent box-decoration-clone rounded-[0.2em] px-[0.16em]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}

export function Manifesto() {
  return (
    <section className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container>
        <div className="flex max-w-[960px] flex-col gap-14">
          <Reveal
            as="p"
            className="text-[clamp(28px,3.5vw,50px)] leading-[1.14] font-medium tracking-[-0.025em]"
          >
            <span className="font-display">Young &amp; Rich</span> no se trata únicamente de generar
            riqueza económica, sino de construir una mentalidad basada en el{" "}
            <Highlight delay={500}>conocimiento</Highlight>, la{" "}
            <Highlight delay={750}>disciplina</Highlight>, la <Highlight delay={1000}>visión</Highlight>{" "}
            y la capacidad de identificar <Highlight delay={1250}>oportunidades</Highlight>.
          </Reveal>
          <Reveal
            delay={200}
            className="flex flex-wrap items-center gap-4.5 border-t border-paper-line pt-8"
          >
            <div aria-hidden="true" className="flex">
              <span className="label-mono grid size-13 place-items-center rounded-full border-3 border-paper bg-ink text-[13px] text-paper">
                JP
              </span>
              <span className="label-mono -ml-3.5 grid size-13 place-items-center rounded-full border-3 border-paper bg-line text-[13px] text-paper">
                D
              </span>
            </div>
            <p className="text-[17px] leading-normal text-body">
              Creado por <strong className="text-ink">Javier Portillo</strong> y{" "}
              <strong className="text-ink">David Barrientos</strong>, dos jóvenes salvadoreños.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
