"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { useGSAP } from "@gsap/react";
import { KeyTextField } from "@prismicio/client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  const container = useRef(null);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".test-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.in",
          paused: true,
          stagger: { each: 0.2, from: "end" },
          scrollTrigger: {
            trigger: ".testimonial-container",
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
    >
      <div className="text-center mb-4 md:mb-6 lg:mb-8">
        <h1 className="tracking-wider mb-2">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
      </div>
      <div
        className="grid grid-cols-1 .testimonial-container lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        ref={container}
      >
        <TestimonialCard
          name="Cool User"
          designation="Product Designer"
          content="Wow! I love this site. Realtime Colors is all websites at the same time."
          classname="test-card"
        />
        <TestimonialCard
          name="Creative Person"
          designation="Product Owner"
          content="Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."
          classname="test-card"
        />
        <TestimonialCard
          name="Real Reviewer"
          designation="Developer"
          content="Astonished. This product is so cool. You should try it and upgrade to Enterprise plan. No kidding."
          classname="test-card"
        />
      </div>
    </section>
  );
};

export default Testimonials;
