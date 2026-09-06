import type { MetadataRoute } from "next";

export const dynamic = "error";

export const revalidate = 0;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "http://localhost:3001/sitemap.xml",
  };
}
