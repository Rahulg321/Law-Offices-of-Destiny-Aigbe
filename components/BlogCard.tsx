import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${post.uid}`}>
      <article className="mb-4">
        <span className="text-muted-foreground font-semibold text-lg">
          {post.data.category}
        </span>
        <div className="prose prose-xl">
          <PrismicRichText field={post.data.title} />
        </div>
        <span className="font-semibold text-lg text-muted-foreground">
          {post.first_publication_date.match(/\d{4}-\d{2}-\d{2}/)}
        </span>
      </article>
    </Link>
  );
};

export default BlogCard;
