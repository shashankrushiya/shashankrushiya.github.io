import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import dynamic from "next/dynamic";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import Header to prevent SSR issues
const Header = dynamic(() => import("@/components/layout/header").then(mod => ({ default: mod.Header })), { ssr: false });

export const metadata: Metadata = {
  title: "Shashank - Test Automation Engineer",
  description: "Test Automation Engineer specializing in building robust automation frameworks, BDD tests, and cloud CI/CD integration. Expert in Python, Selenium, AWS, and Jenkins.",
  keywords: ["Test Automation", "Python", "Selenium", "AWS", "Jenkins", "BDD", "CI/CD"],
  authors: [{ name: "Shashank" }],
  creator: "Shashank",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashank-portfolio.com",
    title: "Shashank - Test Automation Engineer",
    description: "Test Automation Engineer specializing in building robust automation frameworks, BDD tests, and cloud CI/CD integration.",
    siteName: "Shashank Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank - Test Automation Engineer",
    description: "Test Automation Engineer specializing in building robust automation frameworks, BDD tests, and cloud CI/CD integration.",
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
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 