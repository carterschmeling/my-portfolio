import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carter's Web Design | Affordable Websites for Small Businesses",
  description:
    "Professional, mobile-ready websites starting at $10/mo. Fast delivery, custom designs, and SEO optimized.",
  openGraph: {
    title: "Carter's Web Design",
    description:
      "Affordable Websites for Small Businesses | Starting at $10/mo",
    url: "https://my-portfolio-nine-xi-48.vercel.app",
    siteName: "Carter's Web Design",
    images: [
      {
        url: "https://my-portfolio-nine-xi-48.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carter's Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carter's Web Design",
    description: "Affordable Websites for Small Businesses",
    images: [
      "https://my-portfolio-nine-xi-48.vercel.app/og-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
