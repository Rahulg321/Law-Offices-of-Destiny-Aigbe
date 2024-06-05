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

  const client = createClient();
  const blogposts = await client.getByType("blogpost", {
    page: pageNumber,
    pageSize: 20,
  });
  console.log("blog posts are ", blogposts);

  console.log("page number in server component is", pageNumber);

  return (
    <div className={clsx("flex flex-col py-6")}>
      <h1 className="text-mainC text-center">All Posts</h1>

      <div className="grid grid-cols-1 mx-auto mt-6 gap-6 md:gap-8 lg:gap-12">
        {blogposts.results.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
      </div>
      <div className="mt-auto">
        <BlogPagination
          totalPages={blogposts.total_pages}
          currentPage={blogposts.page}
          itemsPerPage={blogposts.results_per_page}
          classname=""
        />
      </div>
    </div>
  );
}

export async function generateMetadata({}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: "Latest Blogs by Aigbe Law Firm",
    description:
      "Explore Destiny Aigbe's insightful blogs on U.S. securities law. Stay updated with the latest trends, regulations, and legal insights from a trusted securities lawyer based in the USA.",
  };
}
