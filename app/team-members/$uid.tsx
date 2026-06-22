import { createFileRoute } from "@tanstack/react-router";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import {
  loadAllPrismicByType,
  loadPrismicDocumentByUid,
} from "@/lib/prismic-page";

export const Route = createFileRoute("/team-members/$uid")({
  component: TeamMemberPage,
  loader: async ({ params }) => {
    const page = await loadPrismicDocumentByUid("team_member", params.uid);
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
    links: loaderData
      ? [
          {
            rel: "canonical",
            href: `/team-members/${loaderData.page.uid}`,
          },
        ]
      : [],
  }),
});

function TeamMemberPage() {
  const { page } = Route.useLoaderData();

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getStaticPaths() {
  const pages = await loadAllPrismicByType("team_member");
  return pages.map((page) => ({ uid: page.uid }));
}
