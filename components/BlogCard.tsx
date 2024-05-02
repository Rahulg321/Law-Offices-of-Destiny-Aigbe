import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="p-4 text-balance">
      <Link href={`/blogs/${post.uid}`}>
        <span className="text-muted-foreground">{post.data.category}</span>
        <PrismicRichText field={post.data.title} />
      </Link>
      <span className="font-semibold text-muted-foreground">
        Apr. 17th 2024
      </span>
    </article>
  );
};

export default BlogCard;
