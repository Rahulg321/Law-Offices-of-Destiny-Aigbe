import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/exit-preview")({
  server: {
    handlers: {
      GET: () => {
        return new Response(null, {
          status: 307,
          headers: {
            Location: "/",
            "Set-Cookie":
              "io.prismic.preview=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
          },
        });
      },
    },
  },
});
