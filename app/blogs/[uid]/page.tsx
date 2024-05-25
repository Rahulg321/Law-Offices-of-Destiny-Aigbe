import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Head from "next/head";
import { IoMdTime } from "react-icons/io";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prismic.asText(page.data.title),
    author: {
      "@type": "Person",
      name: prismic.asText(page.data.author),
      // The full URL must be provided, including the website's domain.
      url: new URL(
        "https://aigbelaw.com/team-members/destiny-aigbe",
        "https://aigbelaw.com"
      ),
    },
    image: prismic.asImageSrc(page.data.featured_image),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
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
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    alternates: {
      canonical: `/blogs/${page.uid}`,
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
