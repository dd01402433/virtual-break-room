import Script from "next/script";

// Geist from CDN — no npm needed
const GEIST_URL =
  "https://cdn.jsdelivr.net/npm/geist-font@1.1.0/css/geist-sans.min.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <title>多巴胺集中營</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={GEIST_URL} />
      </head>
      <body style={{ margin: 0, background: "#0a0a0b" }}>{children}</body>
    </html>
  );
}
