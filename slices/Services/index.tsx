import ServiceCard from "@/components/ServiceCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space "
    >
      <div className="text-balance text-center mb-6 md:mb-8 lg:mb-12">
        <h1 className="mb-2">{slice.primary.heading}</h1>
        <p>{slice.primary.tagline}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <ServiceCard
          heading="Going Public"
          description="Our attorneys and staff are well equipped to guide you through your going public transaction whether it be an old fashioned initial public offering, de-SPAC, direct listing or reverse merger transaction."
        />
        <ServiceCard
          heading="Registration Statements"
          description="Our firm has vast experience in all forms of registration statements under both the Securities Act and Exchange Act."
        />
        <ServiceCard
          heading="Listing on Natiperienced team saves our onal Exhange"
          description="Our exclients time and money with their listing on a national exchange such as Nasdaq, the NYSE or NYSE MKT"
        />
        <ServiceCard
          heading="OTC Markets"
          description="Anthony L.G., PLLC, is a premium service provider with OTC Markets and is a registered OTCQB and OTCQX sponsor."
        />
        <ServiceCard
          heading="Mergers & Acquistions"
          description="Our team has completed over $6 billion in Merger & Acquisition transactions and can efficiently and effectively guide your company to a successful and timely completion"
        />
        <ServiceCard
          heading="Reverse Mergers"
          description="Our attorneys have cost-effectively assisted clients in reverse mergers as a means of funding growth, paying off debts, going public and/or elevating public profile."
        />
      </div>
    </section>
  );
};

export default Services;
