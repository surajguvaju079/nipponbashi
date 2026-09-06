import type { MetadataRoute } from "next";

export const dynamic = "error";

export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.nipponbashi.com.np/",
      lastModified: new Date().toISOString(),
    },
  ];
}
