import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import BackgroundImageText from "@/components/BackgroundImageText";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <BackgroundImageText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[80vh]"
      childrenCSS="big-container grid grid-cols-1 lg:grid-cols-2"
      backgroundImage={slice.primary.background_image}
    >
      <div>
        <h1>{slice.primary.title}</h1>
        <span>{slice.primary.tagline}</span>
      </div>
    </BackgroundImageText>
  );
};

export default Hero;
