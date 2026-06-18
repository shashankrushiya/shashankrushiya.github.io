import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shashankrushiya.github.io"),
  title: "Shashank Rushiya | SDET & Automation Test Engineer",
  description:
    "Smooth, informative portfolio of an SDET and automation test engineer with experience in Python, Playwright, Selenium, API testing, and CI/CD.",
  keywords: [
    "SDET",
    "Test Automation",
    "Python",
    "Playwright",
    "Selenium",
    "API Testing",
    "CI/CD",
    "OpenAI API",
  ],
  authors: [{ name: "Shashank Rushiya" }],
  creator: "Shashank Rushiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashankrushiya.github.io",
    title: "Shashank Rushiya | SDET & Automation Test Engineer",
    description:
      "Smooth, informative portfolio for an SDET and automation test engineer.",
    siteName: "Shashank Rushiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Rushiya | SDET & Automation Test Engineer",
    description:
      "Smooth, informative portfolio for an SDET and automation test engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <div className="min-h-screen bg-background">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 
