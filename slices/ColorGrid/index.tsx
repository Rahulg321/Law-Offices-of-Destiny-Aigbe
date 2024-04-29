"use client";

import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `ColorGrid`.
 */
export type ColorGridProps = SliceComponentProps<Content.ColorGridSlice>;

/**
 * Component for "ColorGrid" Slices.
 */
const ColorGrid = ({ slice }: ColorGridProps): JSX.Element => {
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".grid-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,

          paused: true,
          stagger: { each: 0.2, from: "random", ease: "power3.inOut" },
          scrollTrigger: {
            trigger: ".color-grid-container",
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
      className="block-space big-container"
      ref={container}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[70vh] lg:gap-2 color-grid-container">
        <div className="lg:col-span-4 grid-card bg-primary flex flex-col gap-2 items-center justify-center text-background lg:rounded-xl">
          <span className="block text-6xl font-bold">300K+ Users</span>
          <span className="block text-2xl font-semibold">and counting....</span>
        </div>
        <div className="lg:col-span-1 flex grid-card flex-col gap-2 items-center justify-center bg-secondary lg:rounded-xl">
          <span className="block text-4xl font-bold">100% Free!</span>
          <span className="block text-xl font-semibold">Forever.</span>
        </div>
        <div className="lg:col-span-3 flex flex-col grid-card gap-2 items-center justify-center lg:rounded-xl bg-black text-background dark:bg-[#E5E6E6]">
          <span className="block text-5xl font-bold">19K+ Plugin Users</span>
          <span className="block text-xl font-semibold">
            Check it out on Figma
          </span>
        </div>
        <div className="lg:col-span-2 grid-card flex flex-col gap-2 items-center justify-center lg:rounded-xl bg-accent text-background">
          <span className="block text-4xl font-bold">200+ Product Upvotes</span>
          <span className="block text-xl font-semibold">Leave a Review</span>
        </div>
      </div>
    </section>
  );
};

export default ColorGrid;

function ColorBox({ classname }: { classname?: string }) {
  return <div className={clsx("", classname)}></div>;
}
