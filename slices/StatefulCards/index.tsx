"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";
import { statefulValues } from "@/lib/values";
import clsx from "clsx";
/**
 * Props for `StatefulCards`.
 */
export type StatefulCardsProps =
  SliceComponentProps<Content.StatefulCardsSlice>;

/**
 * Component for "StatefulCards" Slices.
 */
const StatefulCards = ({ slice }: StatefulCardsProps): JSX.Element => {
  const [card, setCard] = useState(1);
  console.log("card", card);
  let selectedCard;

  selectedCard = statefulValues.find((e) => e.id === card);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="">
        <div className="narrow-container mb-12">
          <h1 className="text-mainC text-center mb-4">Our Values</h1>
          <p>
            Our Firm is built on certain core principles that allow us to
            provide our clients the support and team work that is needed to
            adjust to changes in their businesses, fluctuations in the economic
            environment and to better manage the regulatory landscape. We
            provide a comprehensive and sustained focus on service at the
            highest levels to meet and anticipate our clients’ evolving needs.
            Quite simply, our entrepreneurial spirit, relentless business focus,
            proactive problem solving ability, and our constant desire to find
            fresh ways to add value is the core of who we are as a firm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 big-container mb-6">
          <div>
            {statefulValues.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCard(e.id);
                  }}
                  className="cursor-pointer border-l-4 py-4 pl-4"
                >
                  <h3
                    className={clsx("", {
                      "text-mainC underline-offset-8 underline decoration-4":
                        e.id === card,
                    })}
                  >
                    {e.heading}
                  </h3>
                </div>
              );
            })}
          </div>
          <div>
            <div className="bg-card p-4 md:p-6 lg:p-8">
              <h2 className="text-mainC mb-2">{selectedCard?.heading}</h2>
              <p>{selectedCard?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatefulCards;
