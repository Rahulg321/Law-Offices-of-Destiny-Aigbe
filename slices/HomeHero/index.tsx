import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Logo from "@/public/logoDesign-removebg-preview.png";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  // const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".hero-animation",
  //       // from -100 to 100
  //       { x: -100, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         ease: "power4.out",
  //         duration: 2,
  //         transformOrigin: "left top",
  //         stagger: { each: 0.2 },
  //       }
  //     );
  //   },
  //   { scope: container }
  // );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[80dvh] bg-gray-100"
    >
      <div className="relative min-h-full content-center overflow-hidden bg-[rgba(0,0,0,0.3)]">
        <div className="z-[10] absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-center">Relationships Built.</h2>
          <h2 className="text-white text-center">Results Delivered.</h2>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 z-[1] min-h-full min-w-full object-cover"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/bgvideolaw.mp4?alt=media&token=52124f09-c752-469c-b149-e678da6da280"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeHero;
