"use client";

import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
      gsap.fromTo(
        ".image-card",
        // from -100 to 100
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            scrub: 1,
            trigger: ".image-card",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={container}
    >
      <div className="image-card">
        <div
          className={clsx("flex flex-col lg:flex-row ", {
            "lg:flex-row-reverse": imageRight === true,
          })}
        >
          <div className="basis-3/5 aspect-w-1 aspect-h-1 lg:aspect-h-1 lg:aspect-w-3">
            <PrismicNextImage
              field={slice.primary.featured_image}
              fill
              className="object-cover"
            />
          </div>

          <div
            className={clsx("basis-2/5 p-4 md:p-10 lg:p-12 text-pretty", {
              "bg-card": cardBackground === true,
            })}
          >
            <h1 className="text-center text-[#003B6F] mb-4 md:mb-6 lg:mb-8 text-pretty">
              {" "}
              {slice.primary.heading}
            </h1>
            <TextField description={slice.primary.content} />
            <div className="mt-8 md:mt-12">
              {hasButton && (
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="bg-mainC text-white merriFont rounded-md mt-6 md:text-xl p-4 md:p-6"
                >
                  {slice.primary.button_label}
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageContent;
