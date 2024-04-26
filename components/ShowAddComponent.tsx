"use client";

import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

type ShowAddComponentProps = {
  heading: KeyTextField;
  description: RichTextField;
};

const ShowAddComponent = ({ heading, description }: ShowAddComponentProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="mt-8 md:mt-10 border-b-4 last:border-none">
      <div
        className="flex justify-between cursor-pointer items-center mb-4 md:mb-6"
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        <div className="p-4">
          <span className="text-4xl font-semibold text-[#003B6F]">
            {heading}
          </span>
        </div>
        <div className="text-4xl font-bold  text-[#003B6F]">
          {showDescription ? <GrSubtractCircle /> : <IoMdAdd />}
        </div>
      </div>
      {showDescription && (
        <div className="p-4 text-pretty">
          <div className="prose md:prose-lg lg:prose-xl prose-stone w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 ">
            <PrismicRichText field={description} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowAddComponent;
