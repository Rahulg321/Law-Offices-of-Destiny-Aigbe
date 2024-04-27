import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { CgPlayButtonO } from "react-icons/cg";

type TeamMemberCardProps = {
  member: Content.TeamMemberDocument;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="bg-[#003B6F] text-balance flex text-white">
      <div className="relative aspect-w-6 aspect-h-2 basis-1/3">
        <PrismicNextImage
          field={member.data.member_image}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-8 py-8 text-center basis-2/3">
        <div className="border-b-2">
          <h2 className="mb-2 text-right block text-3xl font-bold">
            {member.data.name}
          </h2>
        </div>
        <span className="block text-right  mb-4 text-xl md:text-2xl">
          {member.data.designation}
        </span>
        <div className="text-right">
          <span className="block mb-2 text-slate-300 text-lg">
            {member.data.email_address}
          </span>
          <span className="block mb-2 text-slate-300 text-lg">
            {member.data.contact_number}
          </span>
        </div>
        <div className="text-right flex items-center  hover:text-yellow-400 cursor-pointer justify-end gap-1">
          <Link
            href={`/team-members/${member.uid}`}
            className="text-lg transition "
          >
            Read Bio{" "}
          </Link>
          <div className="text-xl">
            <CgPlayButtonO />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
