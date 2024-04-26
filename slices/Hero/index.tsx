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

  useGSAP(
    () => {
      // gsap code here...
      gsap
        .timeline()
        .fromTo(
          ".heading",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1.2,
          }
        )
        .fromTo(
          ".tagline",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.inOut",
            duration: 1.2,
          }
        );
    },
    { scope: container }
  );

  return (
    <BackgroundImageText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[70vh]"
      childrenCSS="flex items-center justify-center"
      backgroundImage={slice.primary.background_image}
    >
      <div className="text-pretty narrow-container text-white" ref={container}>
        {/* <h1 className="mb-4">
          <span>{renderLetters(slice.primary.title, "title")}</span>
        </h1> */}
        <h1 className="mb-4 heading">{slice.primary.title}</h1>
        <span className="text-xl tagline">{slice.primary.tagline}</span>
      </div>
    </BackgroundImageText>
  );
};

export default Hero;
