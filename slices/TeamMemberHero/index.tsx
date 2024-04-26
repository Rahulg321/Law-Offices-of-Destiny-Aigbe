import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamMemberHero`.
 */
export type TeamMemberHeroProps =
  SliceComponentProps<Content.TeamMemberHeroSlice>;

/**
 * Component for "TeamMemberHero" Slices.
 */
const TeamMemberHero = ({ slice }: TeamMemberHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="flex">
        <div className="basis-1/2">
          <h3>Joseph Kentucky</h3>
        </div>
        <div className="relative basis-1/2 aspect-h-1 aspect-w-3">
          <PrismicNextImage
            field={slice.primary.member_image}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMemberHero;
