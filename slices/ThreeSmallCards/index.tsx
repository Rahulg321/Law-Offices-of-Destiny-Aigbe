import SmallCard from "@/components/SmallCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeSmallCards`.
 */
export type ThreeSmallCardsProps =
  SliceComponentProps<Content.ThreeSmallCardsSlice>;

/**
 * Component for "ThreeSmallCards" Slices.
 */
const ThreeSmallCards = ({ slice }: ThreeSmallCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <div className="text-center mb-4">
        <h1 className="mb-2 text-mainC">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
        <SmallCard tagline="Examples of Color from Popular Sites" />
        <SmallCard tagline="How to Select Colors" />
        <SmallCard tagline="Learn more about the releases" />
      </div>
    </section>
  );
};

export default ThreeSmallCards;
