import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

export default async function sitemap() {
  const client = createClient();
  const baseUrl = "https://aigbelaw.com";

  const blogposts = await client.getAllByType("blogpost");
  const practiceAreas = await client.getAllByType("practice_areas");
  const teamMembers = await client.getAllByType("team_member");
  const ourFirmPages = await client.getAllByType("our_firm");

  const blogpostsURLS =
    blogposts.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.uid}`,
      lastModified: blog.last_publication_date,
    })) ?? [];

  const practiceAreasURLS =
    practiceAreas.map((page) => ({
      url: `${baseUrl}/practice-areas/${page.uid}`,
      lastModified: page.last_publication_date,
    })) ?? [];

  const ourFirmURLS =
    ourFirmPages.map((page) => ({
      url: `${baseUrl}/our-firm/${page.uid}`,
      lastModified: page.last_publication_date,
    })) ?? [];

  const teamMembersURLS =
    teamMembers.map((page) => ({
      url: `${baseUrl}/team-members/${page.uid}`,
      lastModified: page.last_publication_date,
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/our-firm`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team-members`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/transactions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogpostsURLS,
    ...teamMembersURLS,
    ...practiceAreasURLS,
    ...ourFirmURLS,
  ];
}
