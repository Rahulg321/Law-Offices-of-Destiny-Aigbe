import { Content } from "@prismicio/client";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

type BlogPostsIndexProps = {
  pageNumber: number;
  blogPosts: Content.BlogpostDocument[];
  totalPages: number;
};

export function BlogPostsIndex({
  pageNumber,
  blogPosts,
  totalPages,
}: BlogPostsIndexProps) {
  return (
    <div className="narrow-container block-space space-y-6">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      <BlogPagination
        itemsPerPage={10}
        totalPages={totalPages}
        currentPage={pageNumber}
      />
    </div>
  );
}
