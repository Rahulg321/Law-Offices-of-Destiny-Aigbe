import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Logo from "@/public/logo-LB-blue.svg";
import Image from "next/image";

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen bg-gray-300 flex items-center justify-center"
    >
      <div className="big-container text-center">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Logo for AIGBE LAW"
          className="mx-auto object-cover"
        />
        <span className="text-[clamp(3rem,10vmin,18rem)] font-semibold text-mainC">
          Relationship <span className="font-extrabold">Focused</span>.
          <br />
          Results <span className="font-extrabold">Driven</span>.
        </span>
      </div>
    </section>
  );
};

export default HomeHero;
