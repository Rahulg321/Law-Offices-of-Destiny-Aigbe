import { createClient } from "@/prismicio";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? 1;
  const client = createClient();
  const blogsposts = await client.getByType("blogpost", {
    page: Number(page),
    pageSize: 20,
  });
  console.log("searchParams", searchParams);
  return Response.json({ name: "John", blogsposts });
}
