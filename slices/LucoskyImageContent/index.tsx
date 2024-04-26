import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `LucoskyImageContent`.
 */
export type LucoskyImageContentProps =
  SliceComponentProps<Content.LucoskyImageContentSlice>;

/**
 * Component for "LucoskyImageContent" Slices.
 */
const LucoskyImageContent = ({
  slice,
}: LucoskyImageContentProps): JSX.Element => {
  const hasButton = slice.primary.need_button;
  const imageRight = slice.primary.image_right;
  const blueContentBackground = slice.primary.blue_content_background;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative pb-16"
    >
      <div
        className={clsx("flex", {
          "flex-row-reverse": imageRight === true,
        })}
      >
        <div className={clsx("basis-1/2 px-8 py-6 text-pretty")}>
          <h1 className="mb-4 text-[#003B6F]">{slice.primary.heading}</h1>
          <div className="prose mb-8 prose-p:text-black">
            <PrismicRichText field={slice.primary.content} />
          </div>
          {hasButton && (
            <PrismicNextLink
              field={slice.primary.button_link}
              className="px-6 py-4 hover:scale-105 hover:bg-[#003B6F] transition rounded-none bg-[#003B6F] text-white"
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          )}
        </div>
        <div className="basis-1/2 relative aspect-w-3 aspect-h-1">
          <PrismicNextImage
            field={slice.primary.image}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default LucoskyImageContent;
