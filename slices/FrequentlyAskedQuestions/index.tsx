import FaqAccordian from "@/components/FaqAccordian";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
  SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>;

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions = ({
  slice,
}: FrequentlyAskedQuestionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-card block-space"
    >
      <div className="text-center big-container">
        <h1 className="mb-4">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
        <div className="narrow-container mt-8">
          <FaqAccordian />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
