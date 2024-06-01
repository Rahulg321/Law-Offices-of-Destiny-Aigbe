import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

type CareerCardProps = {
  post: Content.CareerDocument;
};

const CareerCard = ({ post }: CareerCardProps) => {
  return (
    <div className="bg-card p-4 rounded-lg space-y-2">
      <h2 className="text-mainC">{post.data.name}</h2>
      <div className="prose">
        <PrismicRichText field={post.data.description} />
      </div>
    </div>
  );
};

export default CareerCard;
