import CareerCard from "@/components/CareerCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `CareerIndex`.
 */
export type CareerIndexProps = SliceComponentProps<Content.CareerIndexSlice>;

/**
 * Component for "CareerIndex" Slices.
 */
const CareerIndex = ({ slice }: CareerIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="mb-4">Find Your Position</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <FetchCareers />
        </Suspense>
      </div>
    </section>
  );
};

export default CareerIndex;

async function FetchCareers() {
  const client = createClient();
  const careers = await client.getAllByType("career");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {careers.map((career) => {
        return <CareerCard key={career.id} post={career} />;
      })}
    </div>
  );
}
