import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://beme-career-student-site.vercel.app"
  ),
  title: site.title,
  description: site.description,
  keywords: [
    "BeMeキャリア",
    "学生向けキャリア支援",
    "就活イベント",
    "学生団体",
    "長期インターン",
    "大学別Instagram"
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.jpName,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/hero-community.png",
        width: 1200,
        height: 630,
        alt: "BeMeキャリアの学生向け団体紹介ページ"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/hero-community.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eef7f6"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
