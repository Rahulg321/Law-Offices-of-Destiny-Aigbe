import WhyUsCard from "@/components/WhyUsCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `ThreeNormalCards`.
 */
export type ThreeNormalCardsProps =
  SliceComponentProps<Content.ThreeNormalCardsSlice>;

/**
 * Component for "ThreeNormalCards" Slices.
 */
const ThreeNormalCards = ({ slice }: ThreeNormalCardsProps): JSX.Element => {
  const cardBackground = slice.primary.card_background;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space", {
        "bg-card": cardBackground === true,
      })}
    >
      <div className="big-container">
        <div className="text-center mb-6">
          <h1 className="mb-4 md:mb-6 text-mainC">{slice.primary.heading}</h1>
          <p className="">{slice.primary.tagline}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WhyUsCard
            imageField="/undraw.svg"
            heading="Saves time"
            tagline="No need to spend hours implementing different variations of colors. Decide right away!"
          />
          <WhyUsCard
            imageField="/undraw2.svg"
            heading="It’s Realistic"
            tagline="Color Palettes make it hard to pick. This tool distributes the colors on a real website."
          />
          <WhyUsCard
            imageField="/undraw3.svg"
            heading="It’s simple"
            tagline="Push a few buttons, and there you have it! Your very own branding colors, ready to export."
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeNormalCards;
