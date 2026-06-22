import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@/prismicio";

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: async () => {
        const client = createClient();
        const baseUrl = "https://aigbelaw.com";

        const [blogposts, practiceAreas, teamMembers, ourFirmPages] =
          await Promise.all([
            client.getAllByType("blogpost"),
            client.getAllByType("practice_areas"),
            client.getAllByType("team_member"),
            client.getAllByType("our_firm"),
          ]);

        const urls = [
          { url: baseUrl, lastModified: new Date().toISOString() },
          {
            url: `${baseUrl}/our-firm`,
            lastModified: new Date().toISOString(),
          },
          {
            url: `${baseUrl}/practice-areas`,
            lastModified: new Date().toISOString(),
          },
          {
            url: `${baseUrl}/blogs`,
            lastModified: new Date().toISOString(),
          },
          {
            url: `${baseUrl}/team-members`,
            lastModified: new Date().toISOString(),
          },
          {
            url: `${baseUrl}/transactions`,
            lastModified: new Date().toISOString(),
          },
          {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
          },
          ...blogposts.map((blog) => ({
            url: `${baseUrl}/blogs/${blog.uid}`,
            lastModified: blog.last_publication_date,
          })),
          ...teamMembers.map((page) => ({
            url: `${baseUrl}/team-members/${page.uid}`,
            lastModified: page.last_publication_date,
          })),
          ...practiceAreas.map((page) => ({
            url: `${baseUrl}/practice-areas/${page.uid}`,
            lastModified: page.last_publication_date,
          })),
          ...ourFirmPages.map((page) => ({
            url: `${baseUrl}/our-firm/${page.uid}`,
            lastModified: page.last_publication_date,
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
