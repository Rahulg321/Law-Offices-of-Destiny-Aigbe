"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Logo from "@/public/logo-LB-blue.svg";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-animation",
        // from -100 to 100
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power4.out",
          duration: 2,
          transformOrigin: "left top",
          stagger: { each: 0.2 },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      ref={container}
    >
      <div className="big-container text-center hero-animation">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Logo for AIGBE LAW"
          className="mx-auto object-cover"
          priority
        />
        <span className="text-[clamp(3rem,10vmin,18rem)] hero-animation font-semibold text-mainC">
          Relationship <span className="font-extrabold">Focused</span>.
          <br />
          Results <span className="font-extrabold">Driven</span>.
        </span>
      </div>
    </section>
  );
};

export default HomeHero;
