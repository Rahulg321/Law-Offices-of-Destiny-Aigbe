import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@/prismicio";

export const Route = createFileRoute("/api/preview")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const client = createClient();
        const url = new URL(request.url);
        const token = url.searchParams.get("token");
        const documentId = url.searchParams.get("documentId");

        if (!token || !documentId) {
          return new Response("Missing token or documentId", { status: 400 });
        }

        const previewUrl = await client.resolvePreviewURL({
          linkResolver: (doc) => {
            if (doc.type === "homepage") return "/";
            if (doc.type === "page" && "uid" in doc) return `/${doc.uid}`;
            if ("uid" in doc) return `/${doc.type}/${doc.uid}`;
            return "/";
          },
          defaultURL: "/",
          previewToken: token,
          documentID: documentId,
        });

        return new Response(null, {
          status: 307,
          headers: {
            Location: previewUrl,
            "Set-Cookie": `io.prismic.preview=${token}; Path=/; HttpOnly; SameSite=Lax`,
          },
        });
      },
    },
  },
});
