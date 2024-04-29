"use client";

import TextField from "@/components/TextField";
import ValueCard from "@/components/ValueCard";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Values`.
 */
export type ValuesProps = SliceComponentProps<Content.ValuesSlice>;

/**
 * Component for "Values" Slices.
 */
const Values = ({ slice }: ValuesProps): JSX.Element => {
  const container = useRef(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
      ref={container}
    >
      <div className="narrow-container mb-6 md:mb-8 lg:md:mb-12">
        <h1 className="text-mainC mb-4">{slice.primary.heading}</h1>
        <TextField description={slice.primary.content} />
      </div>

      <div className="big-container value-container grid grid-cols-1 gap-2 lg:grid-cols-2 md:gap-6">
        {slice.items.map((e, index) => {
          return (
            <ValueCard
              key={index}
              cardHeading={e.card_heading}
              cardDescription={e.card_description}
              classname="value-card"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Values;
