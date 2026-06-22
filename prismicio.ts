import * as prismic from "@prismicio/client";
import config from "./slicemachine.config.json";

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

const routes: prismic.ClientConfig["routes"] = [
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

export const createClient = (
  options: prismic.ClientConfig = {},
) => {
  return prismic.createClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    // Avoid Next.js-only cache modes (e.g. force-cache) — unsupported on Cloudflare Workers.
    fetchOptions:
      process.env.NODE_ENV === "development"
        ? { cache: "no-store" as RequestCache }
        : undefined,
    ...options,
  });
};
