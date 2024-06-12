import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedNews`.
 */
export type FeaturedNewsProps = SliceComponentProps<Content.FeaturedNewsSlice>;

/**
 * Component for "FeaturedNews" Slices.
 */
const FeaturedNews = ({ slice }: FeaturedNewsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-card"
    >
      <div className="narrow-container p-6">
        <h1 className="mb-4">Featured News</h1>
        <h2 className="text-mainC">
          Lucosky Brookman Successfully Represents Chardan Capital Markets LLC
          in connection with a $527 Millon SPAC transaction by and between
          Caravelle Group Co. Ltd. and Pacifico Acquisition Corp.
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <Button className="bg-mainC text-white merriFont rounded-md mt-6 md:text-xl p-4 md:p-6">
            View Press Release
          </Button>
          <Button className="bg-mainC text-white merriFont rounded-md mt-6 md:text-xl p-4 md:p-6">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
