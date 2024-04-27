"use client";

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
      className={clsx("block-space")}
      ref={container}
    >
      <div className="\">
        <div
          className={clsx("flex flex-col lg:flex-row image-card", {
            "lg:flex-row-reverse": imageRight === true,
          })}
        >
          <div className="relative top-[50px] basis-1/2 aspect-h-1 aspect-w-3">
            <PrismicNextImage
              field={slice.primary.featured_image}
              fill
              className="object-cover"
            />
          </div>

          <div
            className={clsx("basis-1/2 p-12 text-pretty text-center", {
              "bg-card": cardBackground === true,
            })}
          >
            <h1 className="text-center text-[#003B6F] mb-4 md:mb-6 lg:mb-8 text-pretty">
              {" "}
              {slice.primary.heading}
            </h1>
            <div className="prose md:prose-lg lg:prose-xl w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-p:text-black">
              <PrismicRichText field={slice.primary.content} />
            </div>
            {hasButton && (
              <Button className="bg-mainC mt-6 text-xl p-8">
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
