import type { Metadata, Viewport } from "next";
import { League_Spartan, Public_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luciérnaga | Comunicación Estratégica, Marketing Digital e IA",
  description:
    "Consultora especializada en iluminar el camino de líderes, empresas y organizaciones en la era digital. Comunicación Estratégica, Marketing Digital e Inteligencia Artificial.",
  keywords: [
    "comunicación estratégica",
    "marketing digital",
    "inteligencia artificial",
    "branding",
    "relaciones públicas",
    "consultoría",
    "marca personal",
    "comunicación corporativa",
  ],
  authors: [{ name: "Luciérnaga Consultora" }],
  openGraph: {
    title: "Luciérnaga | Iluminamos tu camino en la era digital",
    description:
      "Todo lo que necesitas para liderar en la nueva era digital, en un solo lugar.",
    type: "website",
    locale: "es_ES",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#010b14" },
    { media: "(prefers-color-scheme: dark)", color: "#010b14" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${leagueSpartan.variable} ${publicSans.variable} antialiased font-sans`}
      >
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* Noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true" />
        </LenisProvider>
      </body>
    </html>
  );
}
