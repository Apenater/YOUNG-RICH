import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="font-accent box-decoration-clone rounded-[0.2em] bg-accent px-[0.16em]">
      {children}
    </span>
  );
}

export function Manifesto() {
  return (
    <section className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container className="grid gap-12 lg:grid-cols-[1fr_3fr]">
        <Eyebrow tone="light">01 / La idea</Eyebrow>
        <div className="flex flex-col gap-14">
          <p className="text-[clamp(28px,3.5vw,50px)] leading-[1.14] font-medium tracking-[-0.025em]">
            <span className="font-display">Young &amp; Rich</span> no se trata únicamente de generar
            riqueza económica, sino de construir una mentalidad basada en el{" "}
            <Highlight>conocimiento</Highlight>, la <Highlight>disciplina</Highlight>, la{" "}
            <Highlight>visión</Highlight> y la capacidad de identificar{" "}
            <Highlight>oportunidades</Highlight>.
          </p>
          <div className="flex flex-wrap items-center gap-4.5 border-t border-paper-line pt-8">
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
              <strong className="text-ink">David [Apellido]</strong>, dos jóvenes salvadoreños.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
