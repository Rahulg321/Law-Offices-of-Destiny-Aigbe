import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowWeOperate`.
 */
export type HowWeOperateProps = SliceComponentProps<Content.HowWeOperateSlice>;

/**
 * Component for "HowWeOperate" Slices.
 */
const HowWeOperate = ({ slice }: HowWeOperateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-card block-space"
    >
      <div className="big-container">
        <div className="rounded-md bg-background p-4 md:p-6 grid md:grid-cols-3 grid-cols-1 min-h-[60vh]">
          <div>
            <h1 className="leading-normal">
              How Does It{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Work?
              </span>
            </h1>
            <span className="font-semibold">
              Get your personalized color palette in 4 steps
            </span>
          </div>
          <div className="col-span-2 grid grid-cols-1  md:grid-cols-2 gap-6">
            <div className="flex gap-2">
              <div className="text-4xl text-accent font-bold">1</div>
              <div className="">
                <span className="leading-loose text-lg">
                  Start with two neutral colors for the text and the background.
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-accent font-bold">2</div>
              <div>
                <span className="leading-loose text-lg">
                  Choose your primary and secondary colors. Primary is for main
                  CTAs and sections, and Secondary is for less important buttons
                  and info cards.
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-accent font-bold">3</div>
              <div>
                <span className="leading-loose text-lg">
                  Accent color is an additional color. It appears in images,
                  highlights, hyperlinks, boxes, cards, etc.
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-accent font-bold">4</div>
              <div>
                <span className="leading-loose text-lg">
                  Happy with the results? Press on “Export” and choose among
                  different options to export in various formats, like .zip,
                  .png, CSS, SCSS, QR Code, and more.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeOperate;
