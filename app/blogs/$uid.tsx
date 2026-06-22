import { createFileRoute } from "@tanstack/react-router";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { components } from "@/slices";
import { IoMdTime } from "react-icons/io";
import {
  loadAllPrismicByType,
  loadPrismicDocumentByUid,
} from "@/lib/prismic-page";

export const Route = createFileRoute("/blogs/$uid")({
  component: BlogPostPage,
  loader: async ({ params }) => {
    const page = await loadPrismicDocumentByUid("blogpost", params.uid);
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
            href: `/blogs/${loaderData.page.uid}`,
          },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: prismic.asText(loaderData.page.data.title),
              author: {
                "@type": "Person",
                name: prismic.asText(loaderData.page.data.author),
                url: "https://aigbelaw.com/team-members/destiny-aigbe",
              },
              image: prismic.asImageSrc(loaderData.page.data.featured_image),
              datePublished: loaderData.page.first_publication_date,
              dateModified: loaderData.page.last_publication_date,
            }),
          },
        ]
      : [],
  }),
});

function BlogPostPage() {
  const { page } = Route.useLoaderData();

  return (
    <div className="block-space narrow-container">
      <h1 className="text-mainC">{prismic.asText(page.data.title)}</h1>
      <div className="mt-4">
        <span className="text font-bold flex items-center text-2xl gap-2">
          <IoMdTime className="font-bold" />
          {page.first_publication_date.match(/\d{4}-\d{2}-\d{2}/)}
        </span>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await loadAllPrismicByType("blogpost");
  return pages.map((page) => ({ uid: page.uid }));
}
