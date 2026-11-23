"use client";

import { useEffect, useState, type ReactNode } from "react";

type Tag = "div" | "li" | "p" | "article" | "section" | "dl" | "span";

/**
 * Muestra su contenido con una animación cuando entra en pantalla (una sola vez).
 *
 * - `up`: sube y aparece. `blur`: sube, aparece y se desenfoca. `none`: solo agrega
 *   la clase `in`, para que el CSS anime a los hijos (por ejemplo, los resaltados).
 * - `delay` (ms) escalona varios elementos que aparecen a la vez.
 *
 * Los estilos están en app/globals.css (`.rv`, `.rv-blur`, `.in`). Si el usuario pidió
 * reducir movimiento, esos estilos no se aplican y todo se ve desde el inicio.
 */
export function Reveal({
  as: Component = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
}: {
  as?: Tag;
  variant?: "up" | "blur" | "none";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  const base = variant === "up" ? "rv" : variant === "blur" ? "rv-blur" : "";

  return (
    <Component
      ref={setElement}
      className={[base, shown ? "in" : "", className].filter(Boolean).join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
