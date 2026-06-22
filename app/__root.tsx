import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import appCss from "./globals.css?url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Aigbe Law Firm",
      },
      {
        name: "description",
        content: "The Law Offices of Destiny Aigbe",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
  pendingComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GoogleAnalytics />
        <main className="parent-container">
          <Header />
          <Suspense
            fallback={
              <div className="flex min-h-[50vh] items-center justify-center">
                <LoadingSpinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
          <Footer />
        </main>
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="global">
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <h1 className="mb-2">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link
          className="mt-4 inline-block border-2 px-6 py-2 font-semibold text-[#7a9e9f] transition hover:bg-[#7a9e9f] hover:text-white"
          to="/"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
}
