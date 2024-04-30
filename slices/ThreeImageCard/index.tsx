"use client";

import ImageCard from "@/components/ImageCard";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `ThreeImageCard`.
 */
export type ThreeImageCardProps =
  SliceComponentProps<Content.ThreeImageCardSlice>;

/**
 * Component for "ThreeImageCard" Slices.
 */
const ThreeImageCard = ({ slice }: ThreeImageCardProps): JSX.Element => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        // from -100 to 100
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
          scrollTrigger: {
            trigger: ".image-container",
            toggleActions: "restart pause resume none",
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
      className="block-space"
      ref={container}
    >
      <div className="big-container">
        <h1 className="mb-6 text-center text-[#003B6F]">
          {slice.primary.heading}
        </h1>
        <div className="grid grid-cols-1 image-container md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {slice.items.map((e, index) => {
            return (
              <ImageCard
                key={index}
                heading={e.card_heading}
                tagline={e.tagline}
                btnLabel={e.button_label}
                btnLink={e.button_link}
                classname="box"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeImageCard;
