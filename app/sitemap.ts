import type { MetadataRoute } from "next";

import { siteUrl } from "@/app/(pages)/(home)/_components/home-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
