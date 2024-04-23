import React from "react";

type SmallCardProps = {
  tagline: string;
};

const SmallCard = ({ tagline }: SmallCardProps) => {
  return (
    <div className="bg-card px-8 py-8 rounded-xl shadow-xl dark:border-2">
      <span className="text-lg font-semibold">{tagline}</span>
    </div>
  );
};

export default SmallCard;
