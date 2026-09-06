import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NipponBashi — Japanese Language Institute",
    template: "%s | NipponBashi",
  },
  description:
    "A Japanese language institute built like a bridge — carrying you from your first hiragana stroke to fluent, confident conversation.",
  keywords: [
    "Japanese language school",
    "Japanese classes",
    "JLPT preparation",
    "Japanese conversation",
    "NipponBashi",
  ],
  openGraph: {
    title: "NipponBashi — Japanese Language Institute",
    description:
      "A Japanese language institute built like a bridge — carrying you from your first hiragana stroke to fluent, confident conversation.",
    images: [
      {
        url: "https://www.nipponbashi.com.np/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NipponBashi Japanese Language Institute",
      },
    ],
    siteName: "NipponBashi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NipponBashi — Japanese Language Institute",
    description:
      "A Japanese language institute built like a bridge — carrying you from your first hiragana stroke to fluent, confident conversation.",
  },
  metadataBase: new URL("https://nipponbashi.com.np"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nipponbashi.com.np",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
