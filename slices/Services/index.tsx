"use client";

import ServiceCard from "@/components/ServiceCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { FaRecycle } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
      ref={container}
    >
      <div className="text-balance md:text-center mb-6 md:mb-8 lg:mb-12">
        <h2 className="mb-2 text-mainC">{slice.primary.heading}</h2>
        <p>{slice.primary.tagline}</p>
      </div>
      <div className="grid grid-cols-1 service-container md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <ServiceCard
          icon={<FaPeopleGroup />}
          heading="Going Public"
          description="Our attorneys and staff are well equipped to guide you through your going public transaction whether it be an old fashioned initial public offering, de-SPAC, direct listing or reverse merger transaction."
          classname="box"
        />
        <ServiceCard
          icon={<GoChecklist />}
          heading="Registration Statements"
          description="Our firm has vast experience in all forms of registration statements under both the Securities Act and Exchange Act."
          classname="box"
        />
        <ServiceCard
          icon={<FaRecycle />}
          heading="Listing on National Exchange"
          description="Our exclients time and money with their listing on a national exchange such as Nasdaq, the NYSE or NYSE MKT"
          classname="box"
        />
        <ServiceCard
          icon={<AiOutlineGlobal />}
          heading="OTC Markets"
          description="Anthony L.G., PLLC, is a premium service provider with OTC Markets and is a registered OTCQB and OTCQX sponsor."
          classname="box"
        />
        <ServiceCard
          icon={<LiaFileInvoiceDollarSolid />}
          heading="Mergers & Acquistions"
          description="Our team has completed over $6 billion in Merger & Acquisition transactions and can efficiently and effectively guide your company to a successful and timely completion"
          classname="box"
        />
        <ServiceCard
          icon={<FaHandshake />}
          heading="Reverse Mergers"
          description="Our attorneys have cost-effectively assisted clients in reverse mergers as a means of funding growth, paying off debts, going public and/or elevating public profile."
          classname="box"
        />
      </div>
    </section>
  );
};

export default Services;
