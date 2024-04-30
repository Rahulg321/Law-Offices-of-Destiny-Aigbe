"use client";

import { Content } from "@prismicio/client";
import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import TeamMemberCard from "./TeamMemberCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ContentListProps = {
  items: Content.TeamMemberDocument[];
};

const ContentList = ({ items }: ContentListProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".member-card",
        // from -100 to 100
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          stagger: {
            each: 0.2,
          },
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".member-card",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-6 lg:gap-8" ref={container}>
      {items.map((e, index) => {
        return (
          <div key={index}>
            <TeamMemberCard key={e.uid} member={e} classname="member-card" />
          </div>
        );
      })}
    </div>
  );
};

export default ContentList;
