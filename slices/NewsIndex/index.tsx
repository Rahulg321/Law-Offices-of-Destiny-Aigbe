import NewsCard from "@/components/NewsCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `NewsIndex`.
 */
export type NewsIndexProps = SliceComponentProps<Content.NewsIndexSlice>;

/**
 * Component for "NewsIndex" Slices.
 */
const NewsIndex = ({ slice }: NewsIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <Suspense fallback={<p>Loading...</p>}>
          <FetchNewsArticles />
        </Suspense>
      </div>
    </section>
  );
};

export default NewsIndex;

async function FetchNewsArticles() {
  const client = createClient();
  const news = await client.getAllByType("news");
  return (
    <div className="">
      {news.map((e) => {
        return <NewsCard key={e.id} post={e} />;
      })}
    </div>
  );
}
