import ContentList from "@/components/ContentList";
import MemberCardSkeleton from "@/components/skeletons/MemberCardSkeleton";
import TeamMemberCard from "@/components/TeamMemberCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex = ({ slice }: TeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="text-center mb-4 md:mb-8  lg:mb-12 text-mainC">
          {slice.primary.heading}
        </h1>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
            </div>
          }
        >
          <TeamMembersIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default TeamIndex;

async function TeamMembersIndex() {
  const client = createClient();
  const teamMembers = await client.getAllByType("team_member");

  return <ContentList items={teamMembers} />;
}
