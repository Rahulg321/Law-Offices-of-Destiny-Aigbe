import ShowAddComponent from "@/components/ShowAddComponent";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ReusableShowAddSlice`.
 */
export type ReusableShowAddSliceProps =
  SliceComponentProps<Content.ReusableShowAddSliceSlice>;

/**
 * Component for "ReusableShowAddSlice" Slices.
 */
const ReusableShowAddSlice = ({
  slice,
}: ReusableShowAddSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <h1 className="mb-4 md:mb-6 lg:mb-12">{slice.primary.heading}</h1>
        {slice.items.map((e) => {
          return (
            <ShowAddComponent
              heading={e.show_component}
              description={e.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ReusableShowAddSlice;
