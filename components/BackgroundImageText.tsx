import { ImageField } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
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
    <section className={clsx("relative overflow-hidden bg-white", className)}>
      <div className={clsx("absolute inset-0 z-10", childrenCSS)}>
        {children}
      </div>
      <PrismicImage
        className="absolute inset-0 h-full w-full object-cover"
        field={backgroundImage}
      />
    </section>
  );
};

export default BackgroundImageText;
