import clsx from "clsx";
import React from "react";

type SalesCardProps = {
  heading: string;
  percent: string;
  tagline: string;
  classname?: string;
};

const SalesCard = ({
  heading,
  percent,
  tagline,
  classname,
}: SalesCardProps) => {
  return (
    <div
      className={clsx(
        "border-2 p-6 bg-card rounded-lg text-center shadow-md",
        classname
      )}
    >
      <h3 className="">{heading}</h3>
      <span className="block text-4xl font-bold my-2">{percent}</span>
      <span className="block text-muted-foreground text-2xl font-semibold">
        {tagline}
      </span>
    </div>
  );
};

export default SalesCard;
