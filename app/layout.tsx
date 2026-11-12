import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://logicnimbus.com"),
  title: "LogicNimbus Pvt. Ltd. – AI based product company",
  description: "LogicNimbus builds AI products that help businesses work faster and smarter. Makers of Tunk, voice to text.",
  openGraph: { title: "LogicNimbus – Harvesting the power of AI", description: "AI products for businesses of every size.", url: "https://logicnimbus.com", type: "website" },
};
export const viewport: Viewport = { themeColor: "#FFFFFF", viewportFit: "cover", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
