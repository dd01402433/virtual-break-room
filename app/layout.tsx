import type { Metadata } from "next";

const GEIST_URL =
  "https://cdn.jsdelivr.net/npm/geist-font@1.1.0/css/geist-sans.min.css";

const SITE_URL = "https://virtual-break-room-318.vercel.app";

export const metadata: Metadata = {
  title: "多巴胺集中營 | 線上虛擬休息室 — 隨時進來喘口氣",
  description:
    "華語圈最 chill 的線上虛擬休息室。免註冊、免下載，打開網頁就能抽根煙、聊天放鬆。隨時進來，和陌生人一起喘口氣。",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "多巴胺集中營 — 線上抽煙聊天室，隨時進來喘口氣",
    description:
      "華語圈最 chill 的線上虛擬休息室。免註冊、免下載，打開網頁就能抽根煙、聊天放鬆。",
    url: SITE_URL,
    siteName: "多巴胺集中營",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "多巴胺集中營",
    description:
      "線上虛擬休息室，隨時進來抽根煙、聊天放鬆。免註冊、免下載。",
  },
  alternates: {
    languages: {
      "zh-TW": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "多巴胺集中營",
  url: SITE_URL,
  description:
    "華語圈最 chill 的線上虛擬休息室。免註冊，隨時進來抽煙聊天。",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={GEIST_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, background: "#0a0a0b" }}>{children}</body>
    </html>
  );
}
