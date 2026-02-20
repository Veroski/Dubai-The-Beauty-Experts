import type { Metadata } from "next";
import { Montserrat, Lexend_Giga } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700", "900"],
});

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebeautyexpertsdubai.com"),
  title: "The Beauty Experts Dubai 2026 | International Congress & Championship PMU | SMP",
  description: "The Beauty Experts Dubai 2026: International Congress & Championship PMU | SMP. Join elite artists, championship teams, and world-class speakers in Dubai.",
  keywords: ["micropigmentation", "Dubai 2026", "PMU congress", "PMU championship", "beauty experts", "permanent makeup", "SMP"],
  icons: {
    icon: "/icon.webp",
  },
  openGraph: {
    title: "The Beauty Experts Dubai 2026 | International Congress & Championship PMU | SMP",
    description: "International Congress & Championship PMU | SMP in Dubai. Competition, conferences, demos, and premium networking with global leaders.",
    url: "https://thebeautyexpertsdubai.com", // Replace with actual URL if known
    siteName: "The Beauty Experts Dubai",
    images: [
      {
        url: "/icon.webp",
        width: 800,
        height: 600,
        alt: "The Beauty Experts Dubai 2026",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai | The beauty experts",
    description: "The Beauty Experts Dubai 2026. International Congress & Championship PMU | SMP.",
    images: ["/icon.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lexendGiga.variable} font-sans antialiased selection:bg-goldenBeige/30`}>
        {children}
      </body>
    </html>
  );
}
