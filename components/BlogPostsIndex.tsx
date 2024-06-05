import { createClient } from "@/prismicio";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import clsx from "clsx";

export default async function BlogPostsIndex({
  classname,
  pageNumber,
}: {
  classname?: string;
  pageNumber: number;
}) {
  console.log("page number is ", pageNumber);
  const client = createClient();
  const blogposts = await client.getByType("blogpost", {
    page: pageNumber,
    pageSize: 20,
  });
  console.log("blog posts are ", blogposts);

  return (
    <div className={clsx("flex flex-col py-6", classname)}>
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
