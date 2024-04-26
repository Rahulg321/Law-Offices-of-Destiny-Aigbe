import clsx from "clsx";
import React, { ServerContext } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

type ServiceCardProps = {
  icon: any;
  heading: string;
  description: string;
  classname?: string;
};

const ServiceCard = ({
  heading,
  description,
  icon,
  classname,
}: ServiceCardProps) => {
  return (
    <div
      className={clsx(
        "border-4 bg-card px-4 py-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-2 shadow-lg",
        classname
      )}
    >
      <div className="flex items-center justify-center text-5xl">{icon}</div>
      <div className="col-span-2">
        <h4>{heading}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
