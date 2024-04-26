import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `HeadingContent`.
 */
export type HeadingContentProps =
  SliceComponentProps<Content.HeadingContentSlice>;

/**
 * Component for "HeadingContent" Slices.
 */
const HeadingContent = ({ slice }: HeadingContentProps): JSX.Element => {
  const cardBackground = slice.primary.card_background;

  console.log("card background is ", cardBackground);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space", {
        "bg-card": cardBackground === true,
      })}
    >
      <div className="narrow-container text-pretty">
        <h1>{slice.primary.heading}</h1>
        <div className="mt-4 md:mt-6 lg:mt-8 prose md:prose-lg lg:prose-xl w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default HeadingContent;
