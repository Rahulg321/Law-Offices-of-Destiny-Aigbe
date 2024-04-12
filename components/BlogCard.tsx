import { Content } from "@prismicio/client";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`blogs/${post.uid}`} className="">
      <h3>{post.data.title}</h3>
    </Link>
  );
};

export default BlogCard;
