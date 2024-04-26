import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import { Card } from "./ui/card";
import { FaLinkedin } from "react-icons/fa";

type TeamMemberCardProps = {
  member: Content.TeamMemberDocument;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="bg-card text-balance grid grid-cols-1 dark:text-white">
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
        <div>
          <Link
            href={`/team-members/${member.uid}`}
            className="hover:underline transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
