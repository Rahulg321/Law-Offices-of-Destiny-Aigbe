import BlogCard from "@/components/BlogCard";
import CategoryMenu from "@/components/CategoryMenu";
import LoadMoreButton from "@/components/LoadMoreButton";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";

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
      ></Suspense>
    </section>
  );
};

export default BlogIndex;
