import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Dubai | Architecture & Design",
  description: "Modern architecture and design in the heart of Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-goldenBeige/30`}>
        {children}
      </body>
    </html>
  );
}
