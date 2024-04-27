import PriceCard from "@/components/PriceCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { IoIosCheckmarkCircle } from "react-icons/io";

/**
 * Props for `PlanInfo`.
 */
export type PlanInfoProps = SliceComponentProps<Content.PlanInfoSlice>;

/**
 * Component for "PlanInfo" Slices.
 */
const PlanInfo = ({ slice }: PlanInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <h1 className="text-center text-mainC mb-6 md:mb-8 lg:mb-12">
        {slice.primary.heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PriceCard heading="Hobby" description="Start your next side project">
          <PriceCardCheck tagline="Support for 35+ Frameworks" />
          <PriceCardCheck tagline="Fast Globally (Edge Network)" />
          <PriceCardCheck tagline="Automatic CI/CD (Git Integration)" />
          <PriceCardCheck tagline="Functions (Serverless, Edge)" />
          <PriceCardCheck tagline="Starter Database (KV, Postgres)" />
          <PriceCardCheck tagline="Web Analytics" />
          <PriceCardCheck tagline="Community Support" />
        </PriceCard>
        <PriceCard
          heading="Pro"
          description="Everything in Hobby, plus higher limits and team features"
        >
          <PriceCardCheck tagline="Unlimited Environments" />
          <PriceCardCheck tagline="More Functions (Serverless, Edge)" />
          <PriceCardCheck tagline="Support for 35+ Frameworks" />
          <PriceCardCheck
            tagline="More Databases (KV, Postgres)

"
          />
          <PriceCardCheck tagline="Support for 35+ Frameworks" />
          <PriceCardCheck tagline="More Web Analytics Events" />
          <PriceCardCheck tagline="More Experimentation (Edge Config, Middleware" />
        </PriceCard>
        <PriceCard
          heading="Enterprise"
          description="For teams with more security, support, and performance needs."
        >
          <PriceCardCheck tagline="99.99% SLA" />
          <PriceCardCheck tagline="IP Allow & Block Rules" />
          <PriceCardCheck tagline="Isolated Builds & Deployments" />
          <PriceCardCheck tagline="Additional Role & Access Controls" />
          <PriceCardCheck tagline="High-Performance Edge Network" />
          <PriceCardCheck tagline="SAML Single-Sign-On (SSO)" />
          <PriceCardCheck tagline="Advanced DDoS Mitigation" />
        </PriceCard>
      </div>
    </section>
  );
};

export default PlanInfo;

function PriceCardCheck({ tagline }: { tagline: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="text-2xl text-mainC">
        <IoIosCheckmarkCircle />
      </div>
      <span className="text-muted-foreground">{tagline}</span>
    </div>
  );
}
