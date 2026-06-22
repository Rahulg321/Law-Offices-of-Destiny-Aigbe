import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/revalidate")({
  server: {
    handlers: {
      POST: async () => {
        return Response.json({ revalidated: true, now: Date.now() });
      },
    },
  },
});
