"use client";

import SalesCard from "@/components/SalesCard";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Props for `FourCardsSection`.
 */
export type FourCardsSectionProps =
  SliceComponentProps<Content.FourCardsSectionSlice>;

/**
 * Component for "FourCardsSection" Slices.
 */
const FourCardsSection = ({ slice }: FourCardsSectionProps): JSX.Element => {
  const container = useRef(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
      ref={container}
    >
      <div>
        <div className="text-center mb-4 md:mb-6 lg:mb-8">
          <span className="text-center text-xl font-bold tracking-widest text-mainC">
            TRUSTED BY THE BEST FRONTEND TEAMS
          </span>
        </div>
        <div className="grid grid-cols-1 sale-card-container md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SalesCard
            heading="NETFLIX"
            percent="20days"
            classname="sale-card"
            tagline="Saved on Daily Basis"
          />
          <SalesCard
            heading="TRIP ADVISOR"
            percent="98%"
            classname="sale-card"
            tagline="faster time to market"
          />
          <SalesCard
            heading="DESENIO"
            percent="34%"
            classname="sale-card"
            tagline="Higher Conversion Rate"
          />
          <SalesCard heading="PLEX" percent="6x" tagline="site impressions" />
        </div>
      </div>
    </section>
  );
};

export default FourCardsSection;
