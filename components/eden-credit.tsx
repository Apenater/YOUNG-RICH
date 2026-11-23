import Image from "next/image";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { eden } from "@/lib/content";

// Degradado de la página de JP: pasa del fondo oscuro a blanco con paradas graduales
// para que no se noten bandas. Solo se usa como transición: el contenido va debajo, sobre
// blanco, para que siempre se lea.
const FADE_TO_WHITE =
  "linear-gradient(var(--color-ink) 0%, rgb(12 12 12) 4%, rgb(18 18 18) 9%, rgb(24 24 24) 14%, rgb(31 31 31) 20%, rgb(40 40 40) 26%, rgb(51 51 51) 32%, rgb(64 64 64) 38%, rgb(80 80 80) 44%, rgb(100 100 100) 50%, rgb(122 122 122) 56%, rgb(148 148 148) 62%, rgb(173 173 173) 68%, rgb(196 196 196) 74%, rgb(216 216 216) 80%, rgb(232 232 232) 86%, rgb(242 242 242) 91%, rgb(249 249 249) 95%, rgb(252 252 252) 98%, rgb(255 255 255) 100%)";

/**
 * Franja final "Desarrollado por": transición a blanco y, debajo, el logo de Eden, un
 * texto centrado y el botón "Conoce más". Es el destino de la insignia flotante.
 */
export function EdenCredit() {
  return (
    <section id="desarrollado-por" className="relative bg-white">
      <div aria-hidden="true" className="h-32 sm:h-40" style={{ backgroundImage: FADE_TO_WHITE }} />
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-12">
        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex min-w-0 flex-1 flex-col gap-8 sm:flex-row sm:items-center sm:gap-10 lg:gap-12">
            <div className="flex shrink-0 flex-col gap-3 text-center sm:text-left">
              <p className="text-[10px] font-semibold tracking-[0.35em] text-neutral-500 uppercase">
                Desarrollado por
              </p>
              <a
                href={eden.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${eden.name} (se abre en una pestaña nueva)`}
                className="inline-flex justify-center rounded-sm transition-opacity hover:opacity-85 sm:justify-start"
              >
                <Image
                  src={eden.logo}
                  alt={eden.name}
                  width={640}
                  height={360}
                  className="h-16 w-auto max-w-64 object-contain sm:h-[4.25rem] sm:max-w-72 md:h-18"
                />
              </a>
            </div>
            <p className="mx-auto max-w-xl flex-1 self-center text-center text-sm leading-relaxed font-light text-neutral-600 lg:max-w-md">
              Desarrollamos la experiencia digital de Young &amp; Rich: tecnología que acerca la
              educación financiera a quienes buscan transformar su futuro.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3 lg:items-end">
            <a
              href={eden.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800"
            >
              Conoce más
              <Icon name="arrowRight" strokeWidth={2} className="size-4" />
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
            <a
              href={`mailto:${eden.email}`}
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-800"
            >
              {eden.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
