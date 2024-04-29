"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import BackgroundImageText from "@/components/BackgroundImageText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KeyTextField } from "@prismicio/client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const container = useRef(null);

  return (
    <BackgroundImageText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[80vh]"
      childrenCSS="flex items-center justify-center"
      backgroundImage={slice.primary.background_image}
    >
      <div className="text-pretty big-container text-white" ref={container}>
        {/* <h1 className="mb-4">
          <span>{renderLetters(slice.primary.title, "title")}</span>
        </h1> */}
        <h1 className="">{slice.primary.title}</h1>
        <span className="text-xl tagline">{slice.primary.tagline}</span>
      </div>
    </BackgroundImageText>
  );
};

export default Hero;
