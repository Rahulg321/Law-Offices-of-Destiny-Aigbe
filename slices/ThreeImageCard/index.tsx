import ImageCard from "@/components/ImageCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeImageCard`.
 */
export type ThreeImageCardProps =
  SliceComponentProps<Content.ThreeImageCardSlice>;

/**
 * Component for "ThreeImageCard" Slices.
 */
const ThreeImageCard = ({ slice }: ThreeImageCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="mb-6 text-center text-[#003B6F]">
          {slice.primary.heading}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {slice.items.map((e, index) => {
            return (
              <ImageCard
                key={index}
                heading={e.card_heading}
                tagline={e.tagline}
                btnLabel={e.button_label}
                btnLink={e.button_link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeImageCard;
