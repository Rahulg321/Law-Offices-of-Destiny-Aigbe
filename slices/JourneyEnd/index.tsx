import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `JourneyEnd`.
 */
export type JourneyEndProps = SliceComponentProps<Content.JourneyEndSlice>;

/**
 * Component for "JourneyEnd" Slices.
 */
const JourneyEnd = ({ slice }: JourneyEndProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <div className="text-center">
        <h1>
          Your{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Journey
          </span>{" "}
          Shouldn't End Here.
        </h1>
        <span className="my-4 block text-2xl font-semibold">
          Follow me on social media to stay tuned on more projects.
        </span>
        <Button className="mx-auto px-6 py-6 text-lg">Stay Tuned</Button>
      </div>
    </section>
  );
};

export default JourneyEnd;
