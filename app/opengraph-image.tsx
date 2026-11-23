import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { site, ticketFacts } from "@/lib/content";

/*
 * Portada para compartir el enlace (WhatsApp, Facebook, X, LinkedIn…).
 * Next.js la genera al compilar y agrega las etiquetas og:image con su URL absoluta
 * (usa `metadataBase` de app/layout.tsx).
 */

export const alt =
  "Young & Rich: la riqueza empieza en tu mentalidad. Seis clases en vivo de finanzas, inversiones y negocios.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0b0c0a";
const PAPER = "#f2f0ea";
const ACCENT = "#cdf24b";
const MUTED = "#b9b7ae";
const SUBTLE = "#57564f";
const LINE = "#3a3b36";
const TICKET_LINE = "#c9c5b9";

// Textos de la portada. Se escriben ya en mayúsculas donde corresponde, porque la
// fuente se pide recortada a estas letras exactas.
const headline = ["LA RIQUEZA", "EMPIEZA EN TU"];
const accentWord = "mentalidad.";
const subtitle = "Finanzas, inversiones y negocios desde 0";
const ticketSubtitle = "Finanzas · Inversiones · Negocios";
const chips = [`INICIO · ${site.startLabel}`, `${site.days} · ${site.time}`].map((chip) =>
  chip.toUpperCase(),
);
const facts = ticketFacts.map((fact) => ({
  label: fact.label.toUpperCase(),
  value: fact.value.toUpperCase(),
}));
const host = new URL(site.url).host;

/** Caracteres únicos de varios textos: Google Fonts devuelve solo esos glifos. */
const glyphs = (...parts: string[]) => Array.from(new Set(parts.join(""))).join("");

/**
 * Descarga un TTF estático de Google Fonts (la portada no admite woff2 ni fuentes variables).
 * Va en caché permanente: con Cache Components, un fetch sin caché durante el prerender
 * nunca termina y el build se queda colgado.
 */
async function googleFont(family: string, text: string): Promise<ArrayBuffer> {
  "use cache";
  cacheLife("max");

  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
  ).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`Google Fonts no devolvió un TTF para ${family}`);
  const font = await fetch(url);
  if (!font.ok) throw new Error(`No se pudo descargar la fuente ${family} (${font.status})`);
  return font.arrayBuffer();
}

function loadFonts() {
  return Promise.all([
    googleFont(
      "Archivo:wdth,wght@118,800",
      glyphs("YOUNG RICH", ...headline, ...facts.map((fact) => fact.value)),
    ),
    googleFont("Instrument+Serif:ital@1", glyphs("&", accentWord)),
    googleFont("Archivo:wght@400", glyphs(subtitle, ticketSubtitle)),
    googleFont(
      "JetBrains+Mono:wght@500",
      glyphs("TICKET DE ACCESO", host, ...chips, ...facts.map((fact) => fact.label)),
    ),
  ]);
}

function Wordmark({ size: fontSize, ampersand = ACCENT }: { size: number; ampersand?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: fontSize * 0.28 }}>
      <span style={{ fontFamily: "Display", fontSize, letterSpacing: -0.5 }}>YOUNG</span>
      <span style={{ fontFamily: "Serif", fontStyle: "italic", fontSize: fontSize * 1.2, color: ampersand }}>
        &
      </span>
      <span style={{ fontFamily: "Display", fontSize, letterSpacing: -0.5 }}>RICH</span>
    </div>
  );
}

function Perforation() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        margin: "22px -28px",
        borderTop: `2px dashed ${TICKET_LINE}`,
      }}
    >
      <div
        style={{ position: "absolute", left: -15, top: -16, width: 30, height: 30, borderRadius: 15, backgroundColor: INK }}
      />
      <div
        style={{ position: "absolute", right: -15, top: -16, width: 30, height: 30, borderRadius: 15, backgroundColor: INK }}
      />
    </div>
  );
}

const barcode = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3];

function Ticket() {
  return (
    <div
      style={{
        position: "absolute",
        right: 88,
        top: 92,
        width: 340,
        display: "flex",
        flexDirection: "column",
        padding: 28,
        borderRadius: 24,
        backgroundColor: PAPER,
        color: INK,
        transform: "rotate(4deg)",
        boxShadow: "0 40px 90px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", fontFamily: "Mono", fontSize: 13, letterSpacing: 1.2, color: SUBTLE }}>
        TICKET DE ACCESO
      </div>
      <div style={{ display: "flex", marginTop: 16, color: INK }}>
        <Wordmark size={30} ampersand={INK} />
      </div>
      <div style={{ display: "flex", marginTop: 8, fontFamily: "Sans", fontSize: 16, color: SUBTLE }}>
        {ticketSubtitle}
      </div>

      <Perforation />

      <div style={{ display: "flex", flexWrap: "wrap", rowGap: 18 }}>
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            // La columna izquierda es más ancha: ahí va "LUN · JUE", el valor más largo.
            style={{ display: "flex", flexDirection: "column", width: i % 2 === 0 ? "56%" : "44%", gap: 6 }}
          >
            <div style={{ display: "flex", fontFamily: "Mono", fontSize: 11, letterSpacing: 1, color: SUBTLE }}>
              {fact.label}
            </div>
            <div style={{ display: "flex", fontFamily: "Display", fontSize: 22, lineHeight: 1 }}>{fact.value}</div>
          </div>
        ))}
      </div>

      <Perforation />

      <div style={{ display: "flex", height: 44, gap: 3 }}>
        {barcode.map((width, i) => (
          <div key={i} style={{ display: "flex", width: width * 2, height: "100%", backgroundColor: INK }} />
        ))}
      </div>
    </div>
  );
}

export default async function OpengraphImage() {
  const [displayFont, serifFont, sansFont, monoFont] = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: "60px 72px",
          backgroundColor: INK,
          backgroundImage:
            "linear-gradient(rgba(242,240,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242,240,234,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: PAPER,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 690 }}>
          <Wordmark size={30} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {headline.map((line) => (
              <div
                key={line}
                style={{ display: "flex", fontFamily: "Display", fontSize: 74, lineHeight: 0.95, letterSpacing: -2 }}
              >
                {line}
              </div>
            ))}
            <div
              style={{
                display: "flex",
                fontFamily: "Serif",
                fontStyle: "italic",
                fontSize: 96,
                lineHeight: 1,
                color: ACCENT,
              }}
            >
              {accentWord}
            </div>
            <div style={{ display: "flex", marginTop: 22, fontFamily: "Sans", fontSize: 27, color: MUTED }}>
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {chips.map((chip, i) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  height: 44,
                  padding: "0 18px",
                  borderRadius: 22,
                  border: `1px solid ${LINE}`,
                  fontFamily: "Mono",
                  fontSize: 15,
                  letterSpacing: 1,
                  color: PAPER,
                }}
              >
                {i === 0 && <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: ACCENT }} />}
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 48,
            display: "flex",
            fontFamily: "Mono",
            fontSize: 15,
            letterSpacing: 1,
            color: MUTED,
          }}
        >
          {host}
        </div>

        <Ticket />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Display", data: displayFont, weight: 800, style: "normal" },
        { name: "Serif", data: serifFont, weight: 400, style: "italic" },
        { name: "Sans", data: sansFont, weight: 400, style: "normal" },
        { name: "Mono", data: monoFont, weight: 500, style: "normal" },
      ],
    },
  );
}
