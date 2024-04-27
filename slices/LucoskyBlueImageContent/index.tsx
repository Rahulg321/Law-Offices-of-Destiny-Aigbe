import TextField from "@/components/TextField";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LucoskyBlueImageContent`.
 */
export type LucoskyBlueImageContentProps =
  SliceComponentProps<Content.LucoskyBlueImageContentSlice>;

/**
 * Component for "LucoskyBlueImageContent" Slices.
 */
const LucoskyBlueImageContent = ({
  slice,
}: LucoskyBlueImageContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="flex">
        <div className="basis-1/2 bg-mainC p-12">
          <TextField
            description={slice.primary.main_content}
            classname="prose-p:text-white"
          />
        </div>
        <div className="basis-1/2 relative aspect-h-1 aspect-w-3 top-[-100px]">
          <PrismicNextImage
            field={slice.primary.main_image}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default LucoskyBlueImageContent;
