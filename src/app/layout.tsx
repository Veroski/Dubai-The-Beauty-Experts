import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thebeautyexpertsdubai.com"),
  title: "Dubai | The beauty experts",
  description: "International Micropigmentation Congress Dubai 2026. The most prestigious PMU event, now in the heart of Dubai. Join elite artists and world-class speakers.",
  keywords: ["micropigmentation", "Dubai 2026", "PMU congress", "beauty experts", "permanent makeup", "masterclass"],
  icons: {
    icon: "/icon.webp",
  },
  openGraph: {
    title: "Dubai | The beauty experts",
    description: "International Micropigmentation Congress Dubai 2026. Training, technique, and professional growth with international specialists.",
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
    description: "International Micropigmentation Congress Dubai 2026. Join the elite in Dubai.",
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
      <body className="antialiased selection:bg-goldenBeige/30">
        {children}
      </body>
    </html>
  );
}
