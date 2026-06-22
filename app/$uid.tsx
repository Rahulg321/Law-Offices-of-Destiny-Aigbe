import { createFileRoute } from "@tanstack/react-router";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { loadAllPrismicByType, loadPrismicDocumentByUid } from "@/lib/prismic-page";

export const Route = createFileRoute("/$uid")({
  component: GenericPage,
  loader: async ({ params }) => {
    const page = await loadPrismicDocumentByUid("page", params.uid);
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.page.data.meta_title ?? "Aigbe Law Firm",
      },
      {
        name: "description",
        content: loaderData?.page.data.meta_description ?? "",
      },
    ],
  }),
});

function GenericPage() {
  const { page } = Route.useLoaderData();

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getStaticPaths() {
  const pages = await loadAllPrismicByType("page");
  return pages.map((page) => ({ uid: page.uid }));
}
