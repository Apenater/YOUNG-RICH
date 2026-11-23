import Image from "next/image";
import { eden } from "@/lib/content";

/** Insignia flotante que lleva a los créditos de desarrollo del footer. */
export function EdenBadge() {
  return (
    <a
      href="#desarrollado-por"
      aria-label={`Ver créditos de desarrollo — ${eden.name}`}
      title={`Desarrollado por ${eden.name}`}
      className="fixed bottom-4 left-4 z-40 grid size-10 place-items-center sm:bottom-5 sm:left-5 sm:size-12 rounded-full bg-paper text-ink shadow-[0_8px_30px_rgb(0_0_0/0.45)] ring-2 ring-accent/60 transition-transform duration-200 hover:scale-105"
    >
      {/* Anillo que pulsa hacia afuera para llamar la atención sin tapar el ícono. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border-2 border-accent opacity-0 motion-safe:animate-pulse-ring"
      />
      <Image src={eden.icon} alt="" width={64} height={64} className="relative size-6 sm:size-8" />
    </a>
  );
}
