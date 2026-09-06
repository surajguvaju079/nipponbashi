import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NipponBashi — Japanese Language Institute",
  description:
    "A Japanese language institute built like a bridge — carrying you from your first hiragana stroke to fluent, confident conversation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}