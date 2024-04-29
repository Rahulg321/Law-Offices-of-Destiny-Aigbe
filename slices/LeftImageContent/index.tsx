"use client";

import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `LeftImageContent`.
 */
export type LeftImageContentProps =
  SliceComponentProps<Content.LeftImageContentSlice>;

/**
 * Component for "LeftImageContent" Slices.
 */
const LeftImageContent = ({ slice }: LeftImageContentProps): JSX.Element => {
  const cardBackground = slice.primary.is_card_background;
  const imageRight = slice.primary.image_right;
  const hasButton = slice.primary.need_button;
  const container = useRef(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("")}
      ref={container}
    >
      <div className="\">
        <div
          className={clsx("flex flex-col lg:flex-row image-card", {
            "lg:flex-row-reverse": imageRight === true,
          })}
        >
          <div className="basis-1/2 aspect-w-1 aspect-h-1 lg:aspect-h-1 lg:aspect-w-3">
            <PrismicNextImage
              field={slice.primary.featured_image}
              fill
              className="object-cover"
            />
          </div>

          <div
            className={clsx("basis-1/2 p-4 md:p-10 lg:p-12 text-pretty", {
              "bg-card": cardBackground === true,
            })}
          >
            <h1 className="text-center text-[#003B6F] mb-4 md:mb-6 lg:mb-8 text-pretty">
              {" "}
              {slice.primary.heading}
            </h1>
            <TextField description={slice.primary.content} />
            {hasButton && (
              <Button className="bg-mainC mt-6 md:text-xl p-4 md:p-8">
                {slice.primary.button_label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageContent;
