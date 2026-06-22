import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@/prismicio";

export const Route = createFileRoute("/api/blogs")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") ?? "1";
        const client = createClient();
        const blogsposts = await client.getByType("blogpost", {
          page: Number(page),
          pageSize: 20,
        });

        return Response.json({ name: "John", blogsposts });
      },
    },
  },
});
