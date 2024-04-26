import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `LucoskyHeadingContent`.
 */
export type LucoskyHeadingContentProps =
  SliceComponentProps<Content.LucoskyHeadingContentSlice>;

/**
 * Component for "LucoskyHeadingContent" Slices.
 */
const LucoskyHeadingContent = ({
  slice,
}: LucoskyHeadingContentProps): JSX.Element => {
  const narrowBlue = slice.primary.narrow_blue;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("bg-[#003B6F] block-space text-white", {
        "big-container": narrowBlue === true,
      })}
    >
      <div className="narrow-container">
        <h1 className="mb-12">{slice.primary.heading}</h1>
        <div className="prose md:prose-lg lg:prose-xl prose-p:text-white prose-ul:text-white w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default LucoskyHeadingContent;
