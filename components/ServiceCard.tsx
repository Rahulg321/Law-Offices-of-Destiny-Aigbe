import React, { ServerContext } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

type ServiceCardProps = {
  heading: string;
  description: string;
};

const ServiceCard = ({ heading, description }: ServiceCardProps) => {
  return (
    <div className="border px-4 py-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-2 shadow-lg">
      <div className="flex items-center justify-center text-5xl">
        <AiOutlineGlobal />
      </div>
      <div className="col-span-2">
        <h4>{heading}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
