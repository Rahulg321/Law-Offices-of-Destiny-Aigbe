import clsx from "clsx";
import React from "react";

type SmallCardProps = {
  tagline: string;
  classname?: string;
};

const SmallCard = ({ tagline, classname }: SmallCardProps) => {
  return (
    <div
      className={clsx(
        "bg-card px-8 py-8 rounded-xl shadow-xl dark:border-2",
        classname
      )}
    >
      <span className="text-lg font-semibold text-mainC">{tagline}</span>
    </div>
  );
};

export default SmallCard;
