import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="prose md:prose-lg lg:prose-xl prose-zinc w-full max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-headings:text-mainC prose-a:text-blue-600">
        <PrismicRichText field={slice.primary.rich_text_content} />
      </div>
    </section>
  );
};

export default TextBlock;
