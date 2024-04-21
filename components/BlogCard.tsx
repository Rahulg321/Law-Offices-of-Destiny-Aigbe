import { Content } from "@prismicio/client";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="p-4 text-balance">
      <Link href={`/blogs/${post.uid}`}>
        <span className="text-sm">Engineering</span>
        <h3 className="mt-1 mb-2">{post.data.title}</h3>
      </Link>
      <span className="font-semibold">Apr. 17th 2024</span>
    </article>
  );
};

export default BlogCard;
