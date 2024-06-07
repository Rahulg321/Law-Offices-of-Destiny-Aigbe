import { createClient } from "@/prismicio";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import clsx from "clsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

import React, { useCallback } from "react";
import BlogPagination from "./BlogPagination";

export async function BlogPostsIndex({ pageNumber }: { pageNumber: number }) {
  const client = createClient();
  const blogPosts = await client.getByType("blogpost", {
    pageSize: 25,
    page: pageNumber,
  });

  // const response = await fetch("http://localhost:3000/api/blogs");
  // const data = await response.json();
  // console.log("data is ", data);

  return (
    <div className="narrow-container block-space space-y-6">
      {blogPosts.results.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      <BlogPagination
        itemsPerPage={10}
        totalPages={blogPosts.total_pages}
        currentPage={pageNumber}
      />
    </div>
  );
}

// const BlogPagination = ({
//   totalPages,
//   itemsPerPage,
//   currentPage,
//   classname,
// }: BlogPaginationProps) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const searchParams = useSearchParams();

//   const pageElements = Array.from({ length: totalPages }, (_, index) => (
//     <PaginationItem
//       key={index}
//       className={clsx("cursor-pointer", {
//         "bg-neutral-300 rounded-md": currentPage === index + 1,
//       })}
//     >
//       <PaginationLink
//         onClick={() => {
//           setPageNumber(index + 1);
//         }}
//       >
//         {index + 1}
//       </PaginationLink>
//     </PaginationItem>
//   ));

//   const createQueryString = useCallback(
//     (name: string, value: string) => {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set(name, value);

//       return params.toString();
//     },
//     [searchParams]
//   );

//   const setPageNumber = (pageNumber: number) => {
//     const selectedPageNumber = String(pageNumber);
//     router.push(pathname + "?" + createQueryString("page", selectedPageNumber));
//   };

//   const handlePrevious = () => {
//     console.log("previous page clicked");
//     if (currentPage > 1) {
//       const nextpageNumber = String(currentPage - 1);
//       router.push(pathname + "?" + createQueryString("page", nextpageNumber));
//     } else {
//       console.log("do something else first");
//     }
//   };

//   const handleNext = () => {
//     console.log("next page clicked");
//     if (currentPage < totalPages) {
//       const nextpageNumber = String(currentPage + 1);
//       router.push(pathname + "?" + createQueryString("page", nextpageNumber));
//     } else {
//       console.log("cant update the page because you are already at the end");
//     }
//   };

//   return (
//     <div className={clsx(classname)}>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={handlePrevious}
//               className="cursor-pointer"
//             />
//           </PaginationItem>
//           {pageElements}
//           <PaginationItem>
//             <PaginationNext onClick={handleNext} className="cursor-pointer" />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };
