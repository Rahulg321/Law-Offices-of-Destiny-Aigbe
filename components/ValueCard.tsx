import { KeyTextField, RichTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";
import TextField from "./TextField";

type ValueCardProps = {
  cardHeading: KeyTextField;
  cardDescription: RichTextField;
  classname?: string;
};

const ValueCard = ({
  classname,
  cardHeading,
  cardDescription,
}: ValueCardProps) => {
  return (
    <div className={clsx("bg-card p-4 lg:px-12 lg:py-8 ", classname)}>
      <h3 className="text-mainC mb-4">{cardHeading}</h3>
      <TextField description={cardDescription} />
    </div>
  );
};

export default ValueCard;
