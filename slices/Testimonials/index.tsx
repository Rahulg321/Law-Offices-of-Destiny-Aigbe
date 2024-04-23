import TestimonialCard from "@/components/TestimonialCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div className="text-center mb-4 md:mb-6 lg:mb-8">
        <h1 className="tracking-wider mb-2">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <TestimonialCard
          name="Cool User"
          designation="Product Designer"
          content="Wow! I love this site. Realtime Colors is all websites at the same time."
        />
        <TestimonialCard
          name="Creative Person"
          designation="Product Owner"
          content="Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."
        />
        <TestimonialCard
          name="Real Reviewer"
          designation="Developer"
          content="Astonished. This product is so cool. You should try it and upgrade to Enterprise plan. No kidding."
        />
      </div>
    </section>
  );
};

export default Testimonials;
