import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LucoskyFeatured`.
 */
export type LucoskyFeaturedProps =
  SliceComponentProps<Content.LucoskyFeaturedSlice>;

/**
 * Component for "LucoskyFeatured" Slices.
 */
const LucoskyFeatured = ({ slice }: LucoskyFeaturedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container bg-[#003B6F] p-4 md:py-14 md:px-10 rounded-md">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="text-white">
            <h2 className="mb-4">{slice.primary.heading}</h2>
            <p className="text-white">{slice.primary.tagline}</p>
          </div>

          <PrismicNextLink
            field={slice.primary.button_link}
            className="bg-white h-fit font-semibold transition text-center p-2  md:p-6 md:text-xl"
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default LucoskyFeatured;
