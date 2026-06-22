import { lazy, type ComponentType } from "react";
import type { SliceComponentType } from "@prismicio/react";

function clientOnly<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(() =>
    typeof window === "undefined"
      ? Promise.resolve({ default: (() => null) as T })
      : factory(),
  );
}

export const components = {
  benefit_headline: lazy(() => import("./BenefitHeadline")),
  blog_index: lazy(() => import("./BlogIndex")),
  career_index: lazy(() => import("./CareerIndex")),
  color_grid: clientOnly(() => import("./ColorGrid")),
  contact_form_section: lazy(() => import("./ContactFormSection")),
  featured: lazy(() => import("./Featured")),
  featured_news: lazy(() => import("./FeaturedNews")),
  four_cards_section: lazy(() => import("./SalesInfo")),
  frequently_asked_questions: lazy(
    () => import("./FrequentlyAskedQuestions"),
  ),
  heading_content: clientOnly(() => import("./HeadingContent")),
  hero: clientOnly(() => import("./Hero")),
  home_hero: lazy(() => import("./HomeHero")),
  how_we_operate: lazy(() => import("./HowWeOperate")),
  journey_end: lazy(() => import("./JourneyEnd")),
  left_image_content: clientOnly(() => import("./LeftImageContent")),
  lucosky_blue_image_content: clientOnly(
    () => import("./LucoskyBlueImageContent"),
  ),
  lucosky_featured: clientOnly(() => import("./LucoskyFeatured")),
  lucosky_left_heading_content: clientOnly(
    () => import("./LucoskyLeftHeadingContent"),
  ),
  news_index: lazy(() => import("./NewsIndex")),
  newsletter_slice: lazy(() => import("./NewsletterSlice")),
  our_offices: lazy(() => import("./OurOffices")),
  plan_info: lazy(() => import("./PlanInfo")),
  reusable_show_add_slice: lazy(() => import("./ReusableShowAddSlice")),
  services: clientOnly(() => import("./Services")),
  slide_show: lazy(() => import("./SlideShow")),
  stateful_cards: lazy(() => import("./StatefulCards")),
  team_index: lazy(() => import("./TeamIndex")),
  team_member_hero: lazy(() => import("./TeamMemberHero")),
  testimonials: clientOnly(() => import("./Testimonials")),
  text_block: lazy(() => import("./TextBlock")),
  three_image_card: clientOnly(() => import("./ThreeImageCard")),
  three_normal_cards: lazy(() => import("./ThreeNormalCards")),
  three_small_cards: lazy(() => import("./ThreeSmallCards")),
  values: clientOnly(() => import("./Values")),
} satisfies Record<string, SliceComponentType>;
