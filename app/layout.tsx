import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const shareDescription =
  "Seis clases en vivo para aprender a invertir, emprender y pensar con la mentalidad correcta. Inicio: 4 de enero.";

export const metadata: Metadata = {
  // Base de las URLs absolutas: WhatsApp y las redes solo muestran la portada si la URL es completa.
  metadataBase: new URL(site.url),
  title: "Young & Rich — Finanzas, inversiones y negocios desde 0",
  description:
    "Programa educativo de seis sesiones creado por dos jóvenes salvadoreños: acciones, criptomonedas, trading, negocios y la mentalidad correcta para invertir.",
  // La imagen la agrega Next.js desde app/opengraph-image.tsx.
  openGraph: {
    title: "Young & Rich",
    description: shareDescription,
    url: "/",
    siteName: "Young & Rich",
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young & Rich",
    description: shareDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        {/* Sin JavaScript no hay quien dispare los revelados: se muestra todo de inicio. */}
        <noscript>
          <style>{".rv,.rv-blur{opacity:1!important;filter:none!important;translate:none!important}.hl{background-size:100% 100%!important}"}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
