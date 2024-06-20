import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import React from "react";

type RichTextFieldProps = {
  description: RichTextField;
  classname?: string;
};

const TextField = ({ description, classname }: RichTextFieldProps) => {
  return (
    <div
      className={clsx(
        "prose md:prose-lg merriFont lg:prose-xl w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-p:text-black",
        classname
      )}
    >
      <PrismicRichText field={description} />
    </div>
  );
};

export default TextField;
