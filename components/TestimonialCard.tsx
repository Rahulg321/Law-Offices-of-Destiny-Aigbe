import Image from "next/image";
import React from "react";
import Zach from "@/public/zach_buer.jpg";
import { IoMdStar } from "react-icons/io";
import clsx from "clsx";

type TestimonialCardProps = {
  name: string;
  designation: string;
  content: string;
  classname?: string;
};

const TestimonialCard = ({
  name,
  designation,
  content,
  classname,
}: TestimonialCardProps) => {
  return (
    <div
      className={clsx("bg-card border rounded-xl p-4 md:p-6 lg:p-8", classname)}
    >
      <div className="flex gap-4">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src={Zach}
            className="rounded-full object-cover"
            alt="face forward pic of zach buer"
            fill
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-muted-foreground">{designation}</span>
        </div>
      </div>
      <div className="flex gap-2 my-4">
        <div className="text-accent text-5xl">
          <IoMdStar />
        </div>
        <div className="text-accent text-5xl">
          <IoMdStar />
        </div>
        <div className="text-accent text-5xl">
          <IoMdStar />
        </div>
        <div className="text-accent text-5xl">
          <IoMdStar />
        </div>
        <div className="text-accent text-5xl">
          <IoMdStar />
        </div>
      </div>
      <div className="mt-4">
        <span className="leading-loose text-lg">{content}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
