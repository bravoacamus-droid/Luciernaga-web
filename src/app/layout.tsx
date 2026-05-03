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
  metadataBase: new URL("https://luciernaga.pe"),
  title: {
    default: "Luciérnaga | Consultora de Comunicación Estratégica, Marketing Digital e IA",
    template: "%s | Luciérnaga",
  },
  description:
    "Consultora estratégica que ilumina el camino de líderes, empresas y organizaciones en la era digital. Especialistas en Comunicación Estratégica, Marketing Digital, Inteligencia Artificial, Branding, Producción Audiovisual, Gestión de Crisis y Desarrollo Web. Más de 10 años transformando marcas con resultados medibles.",
  keywords: [
    "consultora de comunicación",
    "comunicación estratégica",
    "marketing digital",
    "inteligencia artificial",
    "branding",
    "identidad de marca",
    "relaciones públicas",
    "marca personal",
    "comunicación corporativa",
    "comunicación interna",
    "comunicación política",
    "gestión de crisis",
    "prevención de crisis",
    "producción audiovisual",
    "posicionamiento en medios",
    "responsabilidad social",
    "desarrollo web",
    "SEO",
    "SEM",
    "consultoría estratégica",
    "agencia de comunicación Perú",
    "Luciérnaga Comunicaciones",
  ],
  authors: [{ name: "Luciérnaga Consultora" }],
  creator: "Luciérnaga Consultora",
  publisher: "Luciérnaga Comunicaciones",
  category: "Consultoría de Comunicación y Marketing Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Luciérnaga | Iluminamos tu camino en la era digital",
    description:
      "Consultora especializada en Comunicación Estratégica, Marketing Digital e Inteligencia Artificial. Transformamos marcas con estrategias de alto impacto. Más de 10 años de experiencia.",
    type: "website",
    locale: "es_PE",
    url: "https://luciernaga.pe",
    siteName: "Luciérnaga",
    images: [
      {
        url: "/icon.png",
        width: 212,
        height: 226,
        alt: "Luciérnaga — Consultora de Comunicación Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciérnaga | Iluminamos tu camino en la era digital",
    description:
      "Consultora estratégica en Comunicación, Marketing Digital e IA. Transformamos marcas con resultados medibles.",
    images: ["/icon.png"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: "https://luciernaga.pe",
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
