import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Featured`.
 */
export type FeaturedProps = SliceComponentProps<Content.FeaturedSlice>;

/**
 * Component for "Featured" Slices.
 */
const Featured = ({ slice }: FeaturedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container border-t-4"
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 text-balance">
          <h1 className="mb-4">
            {slice.primary.heading}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              .Techno
            </span>
          </h1>
          <p>{slice.primary.tagline}</p>
        </div>
        <div className="flex flex-col col-span-1 gap-4 items-center justify-center">
          <Button className="px-12 py-6 text-lg">Learn More</Button>
          <Button
            className="px-12 py-6 text-lg transition ease-in-out duration-300 hover:bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 hover:text-white"
            variant={"outline"}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
