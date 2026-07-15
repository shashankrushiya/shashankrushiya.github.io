import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shashankrushiya.github.io"),
  title: "Shashank Rushiya | SDET & Automation Test Engineer",
  description: "Portfolio of an SDET building practical automation frameworks and release confidence across UI, API, and integration testing.",
  keywords: ["SDET", "Test Automation", "Python", "Playwright", "Selenium", "API Testing", "CI/CD", "OpenAI API"],
  authors: [{ name: "Shashank Rushiya" }],
  openGraph: { type: "website", locale: "en_US", url: "https://shashankrushiya.github.io", title: "Shashank Rushiya | SDET & Automation Test Engineer", description: "Portfolio of an SDET building practical automation frameworks and release confidence.", siteName: "Shashank Rushiya Portfolio" },
  twitter: { card: "summary_large_image", title: "Shashank Rushiya | SDET & Automation Test Engineer", description: "Portfolio of an SDET building practical automation frameworks and release confidence." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>{children}</body></html>;
}
