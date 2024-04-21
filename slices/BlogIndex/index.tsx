import BlogCard from "@/components/BlogCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense, useEffect } from "react";

/**
 * Props for `BlogIndex`.
 */
export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

/**
 * Component for "BlogIndex" Slices.
 */
const BlogIndex = ({ slice }: BlogIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              loading blog postsss
            </div>
          }
        >
          <BlogPostsIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default BlogIndex;

async function BlogPostsIndex() {
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");
  const blogpostCategories = await client.getAllByType("blog_post_category");

  console.log("blogposts", blogposts);
  console.log("blogpost categories", blogpostCategories);

  return (
    <div>
      <h1>All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-8">
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
