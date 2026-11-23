import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Young & Rich — Finanzas, inversiones y negocios desde 0",
  description:
    "Programa educativo de seis sesiones creado por dos jóvenes salvadoreños: acciones, criptomonedas, trading, negocios y la mentalidad correcta para invertir.",
  openGraph: {
    title: "Young & Rich",
    description:
      "Seis clases en vivo para aprender a invertir, emprender y pensar con la mentalidad correcta. Inicio: 4 de enero. Solo 50 cupos.",
    locale: "es_SV",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
