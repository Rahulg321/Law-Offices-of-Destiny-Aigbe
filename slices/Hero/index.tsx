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
      className="min-h-[60vh]"
      childrenCSS="flex items-center justify-center"
      backgroundImage={slice.primary.background_image}
    >
      <div className="text-pretty narrow-container text-white">
        <h1 className="mb-4">{slice.primary.title}</h1>
        <span className="text-xl">{slice.primary.tagline}</span>
      </div>
    </BackgroundImageText>
  );
};

export default Hero;
