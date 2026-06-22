"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";
import { useRouter, useSearch } from "@tanstack/react-router";
import React, { useCallback } from "react";

type BlogPaginationProps = {
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  classname?: string;
};

const BlogPagination = ({
  totalPages,
  currentPage,
  classname,
}: BlogPaginationProps) => {
  const router = useRouter();
  const search = useSearch({ strict: false }) as { page?: number };

  const pageElements = Array.from({ length: totalPages }, (_, index) => (
    <PaginationItem
      key={index}
      className={clsx("cursor-pointer", {
        "bg-neutral-300 rounded-md": currentPage === index + 1,
      })}
    >
      <PaginationLink
        onClick={() => {
          setPageNumber(index + 1);
        }}
      >
        {index + 1}
      </PaginationLink>
    </PaginationItem>
  ));

  const setPageNumber = (pageNumber: number) => {
    router.navigate({
      to: "/blogs",
      search: { page: pageNumber },
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPageNumber(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPageNumber(currentPage + 1);
    }
  };

  return (
    <div className={clsx(classname)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className="cursor-pointer"
            />
          </PaginationItem>
          {pageElements}
          <PaginationItem>
            <PaginationNext onClick={handleNext} className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
