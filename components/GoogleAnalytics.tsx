"use client";

import { useEffect } from "react";

const GA_ID = "G-SHVZSHZ31J";

export default function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
