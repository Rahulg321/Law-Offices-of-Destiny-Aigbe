import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@/prismicio";
import { BlogPostsIndex } from "@/components/BlogPostsIndex";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  validateSearch: (search: Record<string, unknown>) => ({
    page: Number(search.page ?? 1),
  }),
  loader: async ({ location }) => {
    const page = Number(
      new URLSearchParams(location.searchStr).get("page") ?? 1,
    );
    const client = createClient();
    const blogPosts = await client.getByType("blogpost", {
      pageSize: 25,
      page,
    });

    return {
      blogPosts: blogPosts.results,
      totalPages: blogPosts.total_pages,
    };
  },
  head: () => ({
    meta: [
      {
        title: "Latest Blogs by Aigbe Law Firm",
      },
      {
        name: "description",
        content:
          "Explore Destiny Aigbe's insightful blogs on U.S. securities law. Stay updated with the latest trends, regulations, and legal insights from a trusted securities lawyer based in the USA.",
      },
    ],
  }),
});

function BlogsPage() {
  const { page } = Route.useSearch();
  const { blogPosts, totalPages } = Route.useLoaderData();

  return (
    <BlogPostsIndex
      pageNumber={page}
      blogPosts={blogPosts}
      totalPages={totalPages}
    />
  );
}
