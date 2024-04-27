import Image from "next/image";
import React from "react";
import SVG from "@/public/undraw.svg";

type WhyUsCardProps = {
  heading: string;
  tagline: string;
  imageField: string;
};

const WhyUsCard = ({ heading, tagline, imageField }: WhyUsCardProps) => {
  return (
    <div className="bg-background rounded-xl">
      <div className="mb-4">
        <div className="relative aspect-w-4 aspect-h-3 ">
          <Image
            src={imageField}
            alt="Developer Productivity"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-mainC">{heading}</h3>
        </div>
        <div>
          <p className="">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
