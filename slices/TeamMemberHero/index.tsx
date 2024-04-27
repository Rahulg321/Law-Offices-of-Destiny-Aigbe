import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

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
      className=""
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div className="basis-1/2 bg-mainC p-12">
          <div className="border-l-4 border-[#4EADFF] text-white px-12 py-10">
            <div className="mb-8">
              <h1 className="mb-2">Joseph Kentucky</h1>
              <span className="text-2xl text-slate-300">Managing Partner</span>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  <MdEmail />
                </div>
                <span className="text-xl underline text-slate-300">
                  rg5353070@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  <FaPhoneAlt />
                </div>
                <span className="text-xl underline text-slate-300">
                  (312) 756-1312
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  <FaLinkedin />
                </div>
                <span className="text-xl underline text-slate-300">
                  Linkedin Profile
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  <FaSquareXTwitter />
                </div>
                <span className="text-xl underline text-slate-300">
                  Twitter Profile
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  <IoPerson />
                </div>
                <span className="text-xl underline text-slate-300">
                  Read Bio
                </span>
              </div>
            </div>
          </div>
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
