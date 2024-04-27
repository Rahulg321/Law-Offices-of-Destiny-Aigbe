import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

type RichTextFieldProps = {
  description: RichTextField;
};

const TextField = ({ description }: RichTextFieldProps) => {
  return (
    <div className="prose md:prose-lg lg:prose-xl w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-p:text-black">
      <PrismicRichText field={description} />
    </div>
  );
};

export default TextField;
