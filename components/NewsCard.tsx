import { Content } from "@prismicio/client";
import React from "react";
import { Button } from "./ui/button";
import { PrismicImage } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

const NewsCard = ({ post }: { post: Content.NewsDocument }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-1/2 relative aspect-w-1 aspect-h-1 md:aspect-h-1 md:aspect-w-4">
        <PrismicNextImage field={post.data.featured_image} className="" fill />
      </div>
      <div className="basis-1/2 content-center p-4 space-y-2">
        <span>{post.first_publication_date}</span>
        <h3 className="text-mainC">{post.data.title}</h3>
        <Button asChild className="bg-mainC">
          <Link href={`/news/${post.uid}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
