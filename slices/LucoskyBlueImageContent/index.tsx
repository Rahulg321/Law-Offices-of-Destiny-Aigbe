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

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".image-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          paused: true,
          stagger: { each: 0.2, from: "end" },
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
      className="block-space"
      ref={container}
    >
      <div className="flex image-card">
        <div className="basis-1/2 bg-mainC p-12">
          <TextField
            description={slice.primary.main_content}
            classname="prose-p:text-white"
          />
        </div>
        <div className="basis-1/2 relative aspect-h-1 aspect-w-3 top-[-100px]">
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
