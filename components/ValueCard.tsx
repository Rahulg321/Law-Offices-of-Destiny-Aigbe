import {
  BooleanField,
  KeyTextField,
  LinkField,
  RichTextField,
} from "@prismicio/client";
import clsx from "clsx";
import React from "react";
import TextField from "./TextField";
import { Button } from "./ui/button";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type ValueCardProps = {
  cardHeading: KeyTextField | string;
  cardContent?: string;
  cardDescription?: RichTextField;
  needButton?: BooleanField | boolean;
  btnLabel?: KeyTextField;
  btnLink?: any;
  classname?: string;
};

const ValueCard = ({
  classname,
  cardHeading,
  cardDescription,
  cardContent,
  needButton,
  btnLabel,
  btnLink,
}: ValueCardProps) => {
  return (
    <div className={clsx("bg-card p-4 lg:px-12 lg:py-8 h-fit", classname)}>
      <h3 className="text-mainC mb-4">{cardHeading}</h3>
      {cardDescription && <TextField description={cardDescription} />}
      {cardContent && <p>{cardContent}</p>}
      <div className="mt-6 text-center">
        {needButton && (
          <Link
            href={`practice-areas/${btnLink?.uid}`}
            className="bg-mainC text-white md:text-xl px-4 rounded-md py-2 md:px-12 md:py-2"
          >
            {btnLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ValueCard;
