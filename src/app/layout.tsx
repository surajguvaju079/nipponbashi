import type { Metadata } from "next";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font */

export const metadata: Metadata = {
  title: {
    default: "Japanese Language Classes in Bhaktapur | NipponBashi",
    template: "%s | NipponBashi",
  },
  description:
    "Learn Japanese in Suryabinayak, Bhaktapur. Explore NipponBashi JLPT N5, N4 and N3 language courses and focused JLPT preparation.",
  keywords: [
    "Japanese language institute Bhaktapur",
    "Japanese classes Bhaktapur",
    "JLPT preparation",
    "Japanese conversation",
    "NipponBashi",
  ],
  openGraph: {
    title: "Japanese Language Classes in Bhaktapur | NipponBashi",
    description:
      "Explore JLPT N5, N4 and N3 Japanese language courses and focused JLPT preparation at NipponBashi in Bhaktapur.",
    url: "https://www.nipponbashi.com.np/",
    images: [
      {
        url: "/logo.jpeg",
        width: 1600,
        height: 769,
        alt: "NipponBashi Japanese Language Institute",
      },
    ],
    siteName: "NipponBashi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Language Classes in Bhaktapur | NipponBashi",
    description:
      "Explore JLPT N5, N4 and N3 Japanese language courses and focused JLPT preparation in Bhaktapur.",
    images: ["/logo.jpeg"],
  },
  metadataBase: new URL("https://www.nipponbashi.com.np"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "NipponBashi Japanese Language Institute",
  url: "https://www.nipponbashi.com.np/",
  logo: "https://www.nipponbashi.com.np/logo.jpeg",
  email: "mailto:nipponbashi05@gmail.com",
  telephone: ["01-5708096", "9841113804", "9768519494", "9768519405"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pandubazaar, near Everest Bank",
    addressLocality: "Suryabinayak",
    addressRegion: "Bhaktapur",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
