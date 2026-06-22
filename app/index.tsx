import { createFileRoute } from "@tanstack/react-router";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { loadPrismicSingle } from "@/lib/prismic-page";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async () => {
    const page = await loadPrismicSingle("homepage");
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.page.data.meta_title ?? "Aigbe Law Firm",
      },
      {
        name: "description",
        content:
          loaderData?.page.data.meta_description ??
          "The Law Offices of Destiny Aigbe",
      },
    ],
  }),
});

function HomePage() {
  const { page } = Route.useLoaderData();

  return <SliceZone slices={page.data.slices} components={components} />;
}
