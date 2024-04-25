import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";

type TeamMemberCardProps = {
  member: Content.TeamMemberDocument;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-background dark:bg-secondary text-balance grid grid-cols-1 lg:grid-cols-2 dark:text-white">
      <div className="relative aspect-w-4 aspect-h-4">
        <PrismicNextImage
          field={member.data.member_image}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <span className="mb-2 block text-3xl font-bold">
          {member.data.name}
        </span>
        <span className="block font-semibold mb-4 text-xl md:text-2xl">
          {member.data.designation}
        </span>

        <Link
          className="flex justify-center items-center gap-1 text-xl hover:underline"
          href={`team-members/${member.uid}`}
        >
          <span>View Bio</span>
          <div>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
