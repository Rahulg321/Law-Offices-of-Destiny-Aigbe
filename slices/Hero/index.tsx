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

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".main-title",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power4.out",
          duration: 1,
          transformOrigin: "left top",
        }
      );
    },
    { scope: container }
  );

  return (
    <BackgroundImageText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[60vh]  md:min-h-[80vh]"
      childrenCSS="flex items-center justify-center"
      backgroundImage={slice.primary.background_image}
    >
      <div className="text-pretty big-container text-white" ref={container}>
        <h1 className="main-title">{slice.primary.title}</h1>
        <span className="text-xl tagline">{slice.primary.tagline}</span>
      </div>
    </BackgroundImageText>
  );
};

export default Hero;
