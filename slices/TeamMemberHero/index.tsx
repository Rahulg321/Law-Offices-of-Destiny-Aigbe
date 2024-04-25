import { Content } from "@prismicio/client";
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
    >
      Placeholder component for team_member_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TeamMemberHero;
