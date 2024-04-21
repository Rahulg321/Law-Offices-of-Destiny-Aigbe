import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsletterSlice`.
 */
export type NewsletterSliceProps =
  SliceComponentProps<Content.NewsletterSliceSlice>;

/**
 * Component for "NewsletterSlice" Slices.
 */
const NewsletterSlice = ({ slice }: NewsletterSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.heading}
      {slice.primary.tagline}
      <NewsletterSubscribeForm />
    </section>
  );
};

export default NewsletterSlice;
