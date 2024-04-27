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
      className="block-space bg-white"
    >
      <div className="big-container">
        <h1 className="mb-4 md:mb-6 lg:mb-12">{slice.primary.heading}</h1>
        <div className="bg-card px-4 md:px-12 py-8">
          {slice.items.map((e) => {
            return (
              <ShowAddComponent
                heading={e.show_component}
                description={e.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReusableShowAddSlice;
