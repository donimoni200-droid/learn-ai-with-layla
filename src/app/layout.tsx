import type { Metadata } from "next";
import { Anton, Oswald, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./site.css";
import { Toaster } from "@/components/ui/toaster";

const anton = Anton({
  variable: "--font-anton-load",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald-load",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans-load",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-load",
  weight: ["500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learn AI With Layla — Master AI Before Monday",
  description:
    "Free AI guides, tutorials, and the Weekend AI Bootcamp. Real workflows, no fluff.",
  openGraph: {
    title: "Learn AI With Layla",
    description: "Free AI guides, tutorials, and the Weekend AI Bootcamp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${oswald.variable} ${openSans.variable} ${playfair.variable} site-body antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
