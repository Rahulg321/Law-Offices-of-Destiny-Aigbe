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
      className="block-space"
      ref={container}
    >
      <div className="flex flex-col md:flex-row image-card">
        <div className="basis-1/2 bg-mainC lg:relative lg:top-[-150px] px-8 py-16 flex items-center justify-center text-white">
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
