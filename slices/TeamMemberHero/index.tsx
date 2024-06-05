import { createClient } from "@/prismicio";
import { Content, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
        <div className="basis-1/2 bg-gradient-to-r content-center  from-[#1A202C]  to-[#1F66B1] p-12">
          <div className="border-l-4 border-[#4EADFF] text-white px-12 py-10">
            <div className="mb-8">
              <h1 className="mb-2">{slice.primary.name}</h1>
              <span className="text-2xl text-slate-300">
                {slice.primary.designation}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <BioComponent icon={<MdEmail />} text={slice.primary.email} />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <BioComponent
                  icon={<FaPhoneAlt />}
                  text={slice.primary.phone_number}
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <BioComponent
                  icon={<FaLinkedin />}
                  text="Linkedin Profile"
                  link={slice.primary.linkedin_profile_link}
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <BioComponent
                  icon={<FaSquareXTwitter />}
                  text="Twitter Profile"
                  link={slice.primary.twitter_profile_link}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative aspect-w-1 aspect-h-1 lg:aspect-w-4 lg:aspect-h-2">
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

function BioComponent({
  icon,
  text,
  link,
}: {
  icon: any;
  text: string | KeyTextField;
  link?: LinkField;
}) {
  return (
    <PrismicNextLink field={link} className="flex items-center gap-4">
      <div className="text-lg">{icon}</div>
      <span className="underline hover:no-underline transition cursor-pointer text-lg text-slate-300">
        {text}
      </span>
    </PrismicNextLink>
  );
}
