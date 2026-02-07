import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AngleLock LLC | Breakthrough Structural Aluminum Technology",
  description:
    "AngleLock is a patented breakthrough in structural aluminum — 14x stiffer, 10x stronger than T-slot, with zero maintenance. 100+ patents across 10+ countries. Replacing a $47B industry.",
  keywords: [
    "AngleLock",
    "structural aluminum",
    "breakthrough technology",
    "T-slot alternative",
    "modular framing",
    "vibration resistant",
    "patented aluminum system",
  ],
  openGraph: {
    title: "AngleLock LLC | Breakthrough Structural Aluminum Technology",
    description:
      "We didn't improve T-slot. We replaced it. 100+ patents, 14x stiffer, zero maintenance.",
    url: "https://anglelockllc.com",
    siteName: "AngleLock LLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
