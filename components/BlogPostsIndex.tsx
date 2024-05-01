"use client";

import { createClient } from "@/prismicio";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

export default async function BlogPostsIndex() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? 1;
  console.log("current Page", currentPage);
  const client = createClient();
  const blogposts = await client.getByType("blogpost", {
    page: Number(currentPage),
    pageSize: 4,
  });

  return (
    <div className="">
      <h1>All Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 md:gap-8 lg:gap-12">
        {blogposts.results.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
      </div>
      <BlogPagination
        totalPages={blogposts.total_pages}
        currentPage={blogposts.page}
        itemsPerPage={blogposts.results_per_page}
        classname="mt-auto border-4"
      />
    </div>
  );
}
