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
      // gsap code here...
      gsap.fromTo(
        ".box",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.in",
          paused: true,
          stagger: { each: 0.2, from: "end" },
          scrollTrigger: {
            trigger: ".image-container",
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
