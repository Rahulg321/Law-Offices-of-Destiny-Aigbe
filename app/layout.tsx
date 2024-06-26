import type { Metadata } from "next";
import { work_sans, merriweather } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import clsx from "clsx";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://aigbelaw.com"),
  title: {
    default: "Aigbe Law Firm",
    template: `%s | Aigbe Law Firm`,
  },
  description: "The Law Offices of Destiny Aigbe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(work_sans.variable, merriweather.variable)}>
      <body className={`min-h-screen bg-background font-sans antialiased`}>
        <main className="parent-container">
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-SHVZSHZ31J" />
    </html>
  );
}
