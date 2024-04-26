"use client";

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
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".image-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 2,
          transformOrigin: "left top",
          scrollTrigger: {
            trigger: ".image-card",
            toggleActions: "play pause resume reset",
          },
        }
      ); // <-- automatically reverted
    },
    { scope: container }
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space", {
        "bg-card": cardBackground === true,
      })}
      ref={container}
    >
      <div className="big-container">
        <div
          className={clsx(
            "flex flex-col lg:flex-row  gap-4 md:gap-6 lg:gap-12 image-card",
            {
              "lg:flex-row-reverse": imageRight === true,
            }
          )}
        >
          <div className="basis-1/3">
            <div className="relative aspect-h-1 aspect-w-1">
              <PrismicNextImage
                field={slice.primary.featured_image}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="basis-1/2 ">
            <h1 className="text-center mb-4 md:mb-6 lg:mb-8 text-pretty">
              {" "}
              {slice.primary.heading}
            </h1>
            <div className="prose md:prose-lg lg:prose-xl prose-zinc w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
              <PrismicRichText field={slice.primary.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageContent;
