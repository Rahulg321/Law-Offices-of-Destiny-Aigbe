"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { useGSAP } from "@gsap/react";
import { KeyTextField } from "@prismicio/client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/5 bg-mainC lg:relative  px-12 py-16 flex items-center justify-center text-white">
          <div className="prose md:prose-xl prose-p:text-white prose-ul:text-white w-full max-w-none dark:prose-invert prose-img:rounded-xl  prose-headings:text-white prose-a:text-blue-600">
            <PrismicRichText field={slice.primary.content} />
          </div>
        </div>
        <div className="basis-2/5 lg:relative lg:top-[-150px]">
          <PrismicNextImage field={slice.primary.pic} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
