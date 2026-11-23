import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] ${className}`}>{children}</div>;
}

/** Etiqueta de sección: "02 / El programa". */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`label-mono flex items-center gap-3 text-xs ${tone === "dark" ? "text-muted" : "text-subtle"}`}>
      <span aria-hidden="true" className="h-px w-7 bg-current" />
      {children}
    </p>
  );
}

/** Palabra resaltada en serif itálica dentro de un titular. */
export function Accent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-accent text-[1.1em] tracking-[-0.01em] ${className}`}>{children}</span>;
}

/** Titular de sección (h2) con la tipografía expandida. */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(40px,5.4vw,80px)] leading-[0.92] tracking-[-0.03em] ${className}`}
    >
      {children}
    </h2>
  );
}

const variants = {
  accent: "bg-accent text-ink",
  outline: "border border-line-2 text-paper",
  ink: "bg-ink text-paper",
};

const sizes = {
  sm: "h-[46px] px-[22px] text-sm",
  md: "h-14 px-7 text-base",
  lg: "h-[62px] px-8 text-[17px]",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  size = "md",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-bold transition-transform duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrowUpRight" strokeWidth={2} className="size-[18px]" />}
    </a>
  );
}
