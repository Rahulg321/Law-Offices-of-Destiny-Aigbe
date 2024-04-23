import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BenefitHeadline`.
 */
export type BenefitHeadlineProps =
  SliceComponentProps<Content.BenefitHeadlineSlice>;

/**
 * Component for "BenefitHeadline" Slices.
 */
const BenefitHeadline = ({ slice }: BenefitHeadlineProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <p>{slice.primary.tagline}</p>
    </section>
  );
};

export default BenefitHeadline;
