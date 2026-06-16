import type { Metadata } from "next";

const SITE_URL = "https://virtual-break-room-318.vercel.app";

export const metadata: Metadata = {
  title: "關於多巴胺集中營 | 虛擬休息室介紹",
  description:
    "多巴胺集中營是一個免註冊的線上虛擬休息室。打開網頁就能抽根煙、放鬆聊天，隨時進來喘口氣。",
  openGraph: {
    title: "關於多巴胺集中營",
    description:
      "免註冊的華語線上休息室，隨時進來抽根煙、聊天放鬆。",
    url: `${SITE_URL}/about`,
    siteName: "多巴胺集中營",
  },
};

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: 560,
        margin: "0 auto",
        padding: "80px 24px 120px",
        color: "rgba(235,230,220,0.82)",
        lineHeight: 1.8,
        fontSize: 15,
      }}
    >
      <h1
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#d4a860",
          marginBottom: 28,
          letterSpacing: "0.02em",
        }}
      >
        關於多巴胺集中營
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, color: "#c49a5a", marginBottom: 10 }}>
          這裡是什麼？
        </h2>
        <p>
          多巴胺集中營是一個<b>免註冊、免下載</b>的線上虛擬休息室。打開網頁、
          輸入暱稱，就能立刻加入。聊天、抽煙、放空，隨你。
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, color: "#c49a5a", marginBottom: 10 }}>
          可以做什麼？
        </h2>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>即時聊天 — 和線上的陌生人打個招呼</li>
          <li>虛擬抽煙 — 長按點燃、甩動彈灰，享受儀式感</li>
          <li>遞煙社交 — 看到順眼的留言？遞根煙過去</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, color: "#c49a5a", marginBottom: 10 }}>
          目標受眾
        </h2>
        <p>
          華語圈的上班族、學生、任何想在工作或學習間隙喘口氣的人。特別適合
          台灣、香港、澳門及東南亞華人社群。
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, color: "#c49a5a", marginBottom: 10 }}>
          技術
        </h2>
        <p>
          使用 Next.js 15 構建，採用 App Router 架構。介面為繁體中文，針對
          華語使用者最佳化。
        </p>
      </section>

      <p
        style={{
          marginTop: 40,
          fontSize: 13,
          color: "rgba(255,255,255,0.2)",
        }}
      >
        &copy; 2026 多巴胺集中營
      </p>
    </main>
  );
}
