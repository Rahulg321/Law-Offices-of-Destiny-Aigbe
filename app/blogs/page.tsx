import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import BlogPostsIndex from "@/components/BlogPostsIndex";
import { Suspense } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import BlogPagination from "@/components/BlogPagination";
import clsx from "clsx";
import BlogCard from "@/components/BlogCard";

type Params = { uid: string };

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const pageNumber = Number(searchParams?.page) || 1;

  console.log("page number in server component is", pageNumber);

  return (
    <div className={clsx("flex flex-col py-6")}>
      <h1 className="text-mainC text-center">All Posts</h1>

      <Suspense key={pageNumber} fallback={"loading blogs...."}>
        <BlogPostsIndex pageNumber={pageNumber} />
      </Suspense>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Latest Blogs by Aigbe Law Firm",
    description:
      "Explore Destiny Aigbe's insightful blogs on U.S. securities law. Stay updated with the latest trends, regulations, and legal insights from a trusted securities lawyer based in the USA.",
  };
}
