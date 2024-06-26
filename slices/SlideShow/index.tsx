"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import fade from "embla-carousel-fade";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";

/**
 * Props for `SlideShow`.
 */
export type SlideShowProps = SliceComponentProps<Content.SlideShowSlice>;

/**
 * Component for "SlideShow" Slices.
 */
const SlideShow = ({ slice }: SlideShowProps): JSX.Element => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3500,
        }),
        fade({
          active: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {slice.items.map((e, index) => (
          <CarouselItem
            key={index}
            className="relative min-h-[90dvh] overflow-hidden bg-white"
          >
            <div
              className={
                "absolute inset-0 z-10 flex items-center justify-center"
              }
            >
              <div className="big-container">
                <Heading size="lg" className="text-white">
                  {e.slideshow_text}
                </Heading>
              </div>
            </div>
            <PrismicNextImage
              field={e.backgroundimage}
              fill
              className="absolute w-full inset-0 object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SlideShow;
