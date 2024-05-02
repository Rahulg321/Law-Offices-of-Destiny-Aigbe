/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/prismicio";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Aigbe Law | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={page?.data.featured_image + "&w=1200&h=630&auto=format&q=75"}
            alt={page?.data.meta_description!!}
          />
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          <div tw="text-7xl font-bold">{page?.data.meta_title}</div>
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            {page.tags.map((e, index) => (
              <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" key={index}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
