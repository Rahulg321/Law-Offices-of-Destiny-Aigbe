import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Values`.
 */
export type ValuesProps = SliceComponentProps<Content.ValuesSlice>;

/**
 * Component for "Values" Slices.
 */
const Values = ({ slice }: ValuesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for values (variation: {slice.variation}) Slices
    </section>
  );
};

export default Values;
