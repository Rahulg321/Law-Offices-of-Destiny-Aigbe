import React from "react";

type SalesCardProps = {
  heading: string;
  percent: string;
  tagline: string;
};

const SalesCard = ({ heading, percent, tagline }: SalesCardProps) => {
  return (
    <div className="border-2 p-6 rounded-lg text-center shadow-md">
      <h3>{heading}</h3>
      <span className="block text-4xl font-bold my-2">{percent}</span>
      <span className="block text-muted-foreground text-2xl font-semibold">
        {tagline}
      </span>
    </div>
  );
};

export default SalesCard;
