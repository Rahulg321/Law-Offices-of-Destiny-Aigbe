"use client";

import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * Props for `HeadingContent`.
 */
export type HeadingContentProps =
  SliceComponentProps<Content.HeadingContentSlice>;

/**
 * Component for "HeadingContent" Slices.
 */
const HeadingContent = ({ slice }: HeadingContentProps): JSX.Element => {
  const container = useRef(null);
  const narrowBackground = slice.primary.narrow_background;

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".content",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1.5,
          transformOrigin: "left top",
          scrollTrigger: {
            trigger: ".content",
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
      className={clsx("block-space bg-[#003B6F] text-white", {
        "big-container": narrowBackground === true,
      })}
      ref={container}
    >
      <div className="narrow-container text-pretty content">
        <h1>{slice.primary.heading}</h1>
        <div className="mt-4 md:mt-6 lg:mt-8 prose md:prose-lg lg:prose-xl prose-p:text-white prose-ul:text-white w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default HeadingContent;
