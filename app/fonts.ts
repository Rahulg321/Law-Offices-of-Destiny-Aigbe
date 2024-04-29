import {
  Montserrat,
  Hind,
  Playfair_Display,
  Lato,
  Work_Sans,
  Merriweather,
} from "next/font/google";

export const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "300", "900", "700"],
  fallback: ["system-ui", "arial"],
});
