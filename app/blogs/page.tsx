import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BlogPostsIndex } from "@/components/BlogPostsIndex";
import { Suspense } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import BlogPagination from "@/components/BlogPagination";
import clsx from "clsx";
import BlogCard from "@/components/BlogCard";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
  const page = searchParams.page || "1";

  return (
    <Suspense fallback={<BlogCardSkeleton />}>
      <BlogPostsIndex pageNumber={Number(page)} />
    </Suspense>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Latest Blogs by Aigbe Law Firm",
    description:
      "Explore Destiny Aigbe's insightful blogs on U.S. securities law. Stay updated with the latest trends, regulations, and legal insights from a trusted securities lawyer based in the USA.",
  };
}
