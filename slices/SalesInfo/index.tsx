import SalesCard from "@/components/SalesCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FourCardsSection`.
 */
export type FourCardsSectionProps =
  SliceComponentProps<Content.FourCardsSectionSlice>;

/**
 * Component for "FourCardsSection" Slices.
 */
const FourCardsSection = ({ slice }: FourCardsSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        <div className="text-center mb-4 md:mb-6 lg:mb-8">
          <span className="text-center font-semibold tracking-widest">
            TRUSTED BY THE BEST FRONTEND TEAMS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SalesCard
            heading="NETFLIX"
            percent="20days"
            tagline="Saved on Daily Basis"
          />
          <SalesCard
            heading="TRIP ADVISOR"
            percent="98%"
            tagline="faster time to market"
          />
          <SalesCard
            heading="DESENIO"
            percent="34%"
            tagline="Higher Conversion Rate"
          />
          <SalesCard heading="PLEX" percent="6x" tagline="site impressions" />
        </div>
      </div>
    </section>
  );
};

export default FourCardsSection;
