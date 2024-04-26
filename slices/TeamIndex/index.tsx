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
        <h1 className="text-center mb-4">{slice.primary.heading}</h1>
        <Suspense fallback={<div className="">loading blog postsss</div>}>
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
      {teamMembers.map((e) => {
        return <TeamMemberCard key={e.uid} member={e} />;
      })}
      {teamMembers.map((e) => {
        return <TeamMemberCard key={e.uid} member={e} />;
      })}
      {teamMembers.map((e) => {
        return <TeamMemberCard key={e.uid} member={e} />;
      })}
      {teamMembers.map((e) => {
        return <TeamMemberCard key={e.uid} member={e} />;
      })}
    </div>
  );
}
