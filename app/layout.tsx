import type { Metadata } from "next";

const GEIST_URL =
  "https://cdn.jsdelivr.net/npm/geist-font@1.1.0/css/geist-sans.min.css";

const SITE_URL = "https://virtual-break-room-318.vercel.app";

export const metadata: Metadata = {
  title: "공유 담배 채팅 플랫폼 | 온라인 담타 — 가상 흡연실",
  description:
    "퇴근 후 담배 한 대 피는 기분, 공유 담배 채팅 플랫폼. 회원가입 없이 바로 접속하는 익명 채팅 가상 흡연실. 실시간 접속자와 함께 스트레스 해소, Z세대 힐링 도파민 사이트.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "온라인 담타",
    "담배런",
    "가상 흡연실",
    "퇴근 후 담배",
    "익명 채팅",
    "스트레스 해소",
    "Z세대 힐링",
    "도파민 사이트",
    "실시간 접속자",
    "번아웃 탈출",
    "무료 도파민",
    "온라인 휴게실",
  ],
  openGraph: {
    title: "담배런 | 온라인 담타 — 퇴근 후 담배 한 대 피는 기분",
    description:
      "회원가입 없는 익명 채팅 가상 흡연실. 퇴근 후 담배 한 대, 실시간 접속자와 함께 스트레스 해소. Z세대 힐링 도파민 사이트.",
    url: SITE_URL,
    siteName: "담배런",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "담배런 | 온라인 담타",
    description:
      "퇴근 후 담배 한 대. 회원가입 없이 바로 접속하는 익명 가상 흡연실. 스트레스 해소 도파민 사이트.",
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
  name: "담배런",
  url: SITE_URL,
  description:
    "퇴근 후 담배 한 대 피는 기분, 온라인 담타 담배런. 회원가입 없는 익명 채팅 가상 흡연실, 실시간 접속자와 함께하는 Z세대 힐링 도파민 사이트.",
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
