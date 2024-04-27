"use client";

import TextField from "@/components/TextField";
import RichTextField from "@/components/TextField";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type LucoskyLeftHeadingContentProps =
  SliceComponentProps<Content.LucoskyLeftHeadingContentSlice>;

const LucoskyLeftHeadingContent = ({
  slice,
}: LucoskyLeftHeadingContentProps): JSX.Element => {
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
      className="block-space"
      ref={container}
    >
      <div className="flex flex-col md:flex-row image-card">
        <div className="basis-1/2 bg-mainC relative top-[-120px] px-8 py-12 flex items-center justify-center text-white">
          <h1>{slice.primary.heading}</h1>
        </div>
        <div className="basis-1/2 bg-card px-8 py-12">
          <TextField description={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default LucoskyLeftHeadingContent;