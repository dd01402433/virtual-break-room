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
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0b",
        color: "rgba(235,230,220,0.82)",
        fontFamily: "inherit",
      }}
    >
      {/* Particles background */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              background: `rgba(220,190,140,${0.06 + Math.random() * 0.1})`,
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              bottom: -10,
              animation: `particleFloat ${12 + Math.random() * 16}s linear infinite`,
              animationDelay: -Math.random() * 18 + "s",
            }}
          />
        ))}
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 560,
          margin: "0 auto",
          padding: "80px 24px 120px",
          lineHeight: 1.8,
          fontSize: 15,
        }}
      >
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            className="title-gradient"
            style={{
              fontSize: 36,
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "0.02em",
              lineHeight: 1.3,
            }}
          >
            關於多巴胺集中營
          </h1>
          <p style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}>
            隨時進來，喘口氣。
          </p>
        </div>

        {/* Card 1 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            這裡是什麼？
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            多巴胺集中營是一個<b>免註冊、免下載</b>的線上虛擬休息室。打開網頁、
            輸入暱稱，就能立刻加入。聊天、抽煙、放空，隨你。
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            可以做什麼？
          </h2>
          <ul style={{
            paddingLeft: 0,
            margin: 0,
            fontSize: 14,
            lineHeight: 2,
            listStyle: "none",
          }}>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>01</span>
              即時聊天 — 和線上的陌生人打個招呼
            </li>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>02</span>
              虛擬抽煙 — 長按點燃、甩動彈灰，享受儀式感
            </li>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>03</span>
              遞煙社交 — 看到順眼的留言？遞根煙過去
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            目標受眾
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            華語圈的上班族、學生、任何想在工作或學習間隙喘口氣的人。特別適合
            台灣、香港、澳門及東南亞華人社群。
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            技術
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            使用 Next.js 15 構建，採用 App Router 架構。介面為繁體中文，針對
            華語使用者最佳化。
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="/"
            className="btn-gradient"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            馬上進來喘口氣
          </a>
        </div>

        <p
          style={{
            marginTop: 48,
            textAlign: "center",
            fontSize: 13,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          &copy; 2026 多巴胺集中營
        </p>
      </main>
    </div>
  );
}