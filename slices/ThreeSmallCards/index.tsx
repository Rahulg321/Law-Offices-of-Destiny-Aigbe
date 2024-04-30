"use client";

import SmallCard from "@/components/SmallCard";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Props for `ThreeSmallCards`.
 */
export type ThreeSmallCardsProps =
  SliceComponentProps<Content.ThreeSmallCardsSlice>;

/**
 * Component for "ThreeSmallCards" Slices.
 */
const ThreeSmallCards = ({ slice }: ThreeSmallCardsProps): JSX.Element => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".card",
        // from -100 to 100
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          stagger: {
            each: 0.2,
          },
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".card",
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
      className="big-container block-space"
      ref={container}
    >
      <div className="text-center mb-4">
        <h1 className="mb-2 text-mainC">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
        <SmallCard
          tagline="Examples of Color from Popular Sites"
          classname="card"
        />
        <SmallCard tagline="How to Select Colors" classname="card" />
        <SmallCard tagline="Learn more about the releases" classname="card" />
      </div>
    </section>
  );
};

export default ThreeSmallCards;
