import type { MetadataRoute } from "next";

const SITE = "https://rrstrength.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
