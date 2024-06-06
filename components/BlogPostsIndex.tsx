import { createClient } from "@/prismicio";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import clsx from "clsx";

export default async function BlogPostsIndex({
  pagenumber,
}: {
  pagenumber: number;
}) {
  // const params = useSearchParams();
  // const pageNumber = params.get("page") ?? 1;

  console.log("page number is ", pagenumber);

  return <></>;
}
