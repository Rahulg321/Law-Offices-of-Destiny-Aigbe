import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadingContent`.
 */
export type HeadingContentProps =
  SliceComponentProps<Content.HeadingContentSlice>;

/**
 * Component for "HeadingContent" Slices.
 */
const HeadingContent = ({ slice }: HeadingContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space  bg-card"
    >
      <div className="narrow-container text-balance text-center">
        <h2>{slice.primary.heading}</h2>
        <div className="mt-4 md:mt-6 lg:mt-8 prose md:prose-lg lg:prose-xl w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default HeadingContent;
