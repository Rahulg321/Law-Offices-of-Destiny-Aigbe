import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ColorGrid`.
 */
export type ColorGridProps = SliceComponentProps<Content.ColorGridSlice>;

/**
 * Component for "ColorGrid" Slices.
 */
const ColorGrid = ({ slice }: ColorGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div className="grid grid-cols-5 min-h-[70vh] gap-2">
        <div className="col-span-4 bg-primary flex flex-col gap-2 items-center justify-center text-background rounded-xl">
          <span className="block text-6xl font-bold">300K+ Users</span>
          <span className="block text-2xl font-semibold">and counting....</span>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center justify-center bg-secondary rounded-xl">
          <span className="block text-4xl font-bold">100% Free!</span>
          <span className="block text-xl font-semibold">Forever.</span>
        </div>
        <div className="col-span-3 flex flex-col gap-2 items-center justify-center rounded-xl bg-black text-background dark:bg-[#E5E6E6]">
          <span className="block text-5xl font-bold">19K+ Plugin Users</span>
          <span className="block text-xl font-semibold">
            Check it out on Figma
          </span>
        </div>
        <div className="col-span-2 flex flex-col gap-2 items-center justify-center rounded-xl bg-accent text-background">
          <span className="block text-4xl font-bold">200+ Product Upvotes</span>
          <span className="block text-xl font-semibold">Leave a Review</span>
        </div>
      </div>
    </section>
  );
};

export default ColorGrid;
