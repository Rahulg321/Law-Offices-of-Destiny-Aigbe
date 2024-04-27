import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type BackgroundImageTextProps = {
  children?: React.ReactNode;
  className?: string;
  childrenCSS?: string;
  backgroundImage: ImageField;
};

const BackgroundImageText = ({
  children,
  className,
  childrenCSS,
  backgroundImage,
}: BackgroundImageTextProps) => {
  return (
    <section
      className={clsx("relative overflow-hidden bg-slate-900", className)}
    >
      <div className={clsx("absolute inset-0 z-10", childrenCSS)}>
        {children}
      </div>
      <PrismicNextImage
        className="absolute left-0 right-0 opacity-80 aspect-1 object-cover"
        field={backgroundImage}
        fill
      />
    </section>
  );
};

export default BackgroundImageText;
