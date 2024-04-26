import { ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type ImageCardProps = {
  img: ImageField;
  heading: KeyTextField;
};

const ImageCard = ({ img, heading }: ImageCardProps) => {
  return (
    <div className={clsx("relative aspect-h-1 aspect-w-1 bg-slate-900")}>
      <div className={clsx("absolute inset-0 z-10")}>{heading}</div>
      <PrismicNextImage className=" object-cover opacity-75" field={img} fill />
    </div>
  );
};

export default ImageCard;
