"use client";

import { createClient } from "@/prismicio";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import clsx from "clsx";

export default async function BlogPostsIndex({
  classname,
}: {
  classname?: string;
}) {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? 1;
  const client = createClient();
  const blogposts = await client.getByType("blogpost", {
    page: Number(currentPage),
    pageSize: 10,
  });

  return (
    <div className={clsx("flex flex-col py-6", classname)}>
      <h1 className="text-mainC text-center">All Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 md:gap-8 lg:gap-12">
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
