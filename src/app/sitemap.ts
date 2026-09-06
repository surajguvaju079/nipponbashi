import type { MetadataRoute } from "next";

export const dynamic = "error";

export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3001/",
      lastModified: new Date().toISOString(),
    },
  ];
}
