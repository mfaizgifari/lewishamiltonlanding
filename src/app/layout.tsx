import type { Metadata, Viewport } from "next";
import { Outfit, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-oswald", // keep css variable name same
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lewis Hamilton | Seven-Time F1 World Champion",
  description:
    "A cinematic portfolio dedicated to the racing legend, Lewis Hamilton. Inspired by Formula 1 aesthetics and Ferrari design language.",
  openGraph: {
    title: "Lewis Hamilton | Seven-Time F1 World Champion",
    description:
      "A cinematic tribute to the most successful driver in Formula 1 history — now racing for Scuderia Ferrari.",
    type: "website",
    images: ["/heropics.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis Hamilton | Seven-Time F1 World Champion",
    description:
      "A cinematic tribute to the most successful driver in Formula 1 history.",
    images: ["/heropics.avif"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${barlowCondensed.variable} antialiased bg-[#0A0A0A] text-[#ededed]`}
      >
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
