import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import BlogPostsIndex from "@/components/BlogPostsIndex";
import { Suspense } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";

type Params = { uid: string };

export default async function Page({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageNumber = searchParams.page
    ? parseInt(searchParams.page as string)
    : 1;

  console.log("page number in server component is", pageNumber);

  return (
    <>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        }
      >
        <BlogPostsIndex pageNumber={pageNumber} />
      </Suspense>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: "Latest Blogs by Aigbe Law Firm",
    description:
      "Explore Destiny Aigbe's insightful blogs on U.S. securities law. Stay updated with the latest trends, regulations, and legal insights from a trusted securities lawyer based in the USA.",
  };
}
