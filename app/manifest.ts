import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aigbe Law Firm",
    short_name: "Aigbe Law Firm",
    description:
      "Navigate complex transactions & propel your business forward. Seasoned attorney Destiny Aigbe secures funding, guides public listings & mergers. Contact us today!",
    start_url: "/home",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
