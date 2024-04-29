"use client";

import TextField from "@/components/TextField";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `LucoskyBlueImageContent`.
 */
export type LucoskyBlueImageContentProps =
  SliceComponentProps<Content.LucoskyBlueImageContentSlice>;

/**
 * Component for "LucoskyBlueImageContent" Slices.
 */
const LucoskyBlueImageContent = ({
  slice,
}: LucoskyBlueImageContentProps): JSX.Element => {
  const container = useRef(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
      ref={container}
    >
      <div className="flex image-card flex-col-reverse md:flex-row">
        <div className="basis-1/2 bg-mainC p-12">
          <TextField
            description={slice.primary.main_content}
            classname="prose-p:text-white"
          />
        </div>
        <div className="basis-1/2 lg:relative aspect-h-1 aspect-w-3 lg:top-[-100px]">
          <PrismicNextImage
            field={slice.primary.main_image}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default LucoskyBlueImageContent;
