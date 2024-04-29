"use client";

import OfficeCard from "@/components/OfficeCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";

/**
 * Props for `OurOffices`.
 */
export type OurOfficesProps = SliceComponentProps<Content.OurOfficesSlice>;

/**
 * Component for "OurOffices" Slices.
 */
const OurOffices = ({ slice }: OurOfficesProps): JSX.Element => {
  const container = useRef(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
      ref={container}
    >
      <div className="big-container">
        <h1 className="mb-4 md:mb-6 lg:mb-8 text-mainC text-center">
          Our Offices
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {slice.items.map((e) => (
            <OfficeCard
              emailAddress={e.email}
              heading={e.heading}
              contactNumber={e.phone_number}
              address={e.address}
              fax={e.fax_number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
