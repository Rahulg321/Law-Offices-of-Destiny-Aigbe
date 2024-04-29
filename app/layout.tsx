import type { Metadata } from "next";
import { work_sans, merriweather } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Destiny Aigbe | The Law Offices of Destiny Aigbe",
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
    </html>
  );
}
