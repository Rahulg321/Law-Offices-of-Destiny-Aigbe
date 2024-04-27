import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type ImageCardProps = {
  heading: KeyTextField;
  tagline: KeyTextField;
  btnLabel: KeyTextField;
  btnLink: LinkField;
  classname?: string;
};

const ImageCard = ({
  heading,
  tagline,
  btnLabel,
  btnLink,
  classname,
}: ImageCardProps) => {
  return (
    <div
      className={clsx(
        "bg-[#003B6F] px-6 py-8 flex flex-col justify-between gap-2",
        classname
      )}
    >
      <h3 className={clsx("text-white")}>{heading}</h3>
      <p className="text-white mb-4">{tagline}</p>

      <PrismicNextLink
        field={btnLink}
        className="bg-white px-6 py-2 font-semibold transition text-center"
      >
        {btnLabel}
      </PrismicNextLink>
    </div>
  );
};

export default ImageCard;
