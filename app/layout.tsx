import type { Metadata } from "next";

const GEIST_URL =
  "https://cdn.jsdelivr.net/npm/geist-font@1.1.0/css/geist-sans.min.css";

const SITE_URL = "https://virtual-break-room-318.vercel.app";

export const metadata: Metadata = {
  title: "도파민 캠프 | 온라인 가상 휴게실 — 언제든지 한숨 돌리세요",
  description:
    "한국에서 가장 자유로운 가상 휴게실. 회원가입도 다운로드도 필요 없어요. 웹페이지를 열고 담배 한 대 피우며 편하게 대화하세요.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "도파민 캠프 — 온라인 흡연 채팅방, 언제든지 들러서 한숨 돌리세요",
    description:
      "한국에서 가장 자유로운 가상 휴게실. 회원가입 불필요, 웹만 열면 담배 한 대 피우며 대화할 수 있어요.",
    url: SITE_URL,
    siteName: "도파민 캠프",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "도파민 캠프",
    description:
      "온라인 가상 휴게실, 언제든지 담배 한 대 피우며 대화하세요. 회원가입 불필요.",
  },
  alternates: {
    languages: {
      "ko-KR": SITE_URL,
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
  name: "도파민 캠프",
  url: SITE_URL,
  description:
    "한국에서 가장 자유로운 온라인 가상 휴게실. 회원가입 없이 언제든지 담배를 피우며 대화할 수 있습니다.",
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
    <html lang="ko">
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
