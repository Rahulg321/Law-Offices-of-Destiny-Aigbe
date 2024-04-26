import { Montserrat, Hind, Playfair_Display, Lato } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900", "700"],
  fallback: ["system-ui", "arial"],
});

export const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});
