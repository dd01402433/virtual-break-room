import type { Metadata } from "next";
import Link from "next/link";

// redeploy trigger
export const metadata: Metadata = {
  title: "도파민 사이트 모음 TOP 10 — Z세대 힐링, 무료 도파민 | 담배런",
  description: "가짜 배달, 온라인 담타, AI 채팅, 랜덤 채팅, 가상 카페 등 한국 Z세대가 가장 많이 찾는 도파민 사이트 TOP 10 완벽 정리. 무료 도파민, 번아웃 탈출.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "도파민 사이트 모음 TOP 10 — Z세대 힐링, 무료 도파민",
    description: "가짜 배달, 온라인 담타, AI 채팅 등 한국 Z세대 도파민 사이트 완벽 정리.",
    url: "https://virtual-break-room-318.vercel.app/dopamine",
    siteName: "담배런",
    locale: "ko_KR",
    type: "website",
  },
};

const pages = [
  { slug: "online-damta", title: "온라인 담타, 퇴근 후 담배 한 대 피는 기분" },
  { slug: "fake-delivery", title: "가짜 배달로 스트레스 해소, 배달 대리만족 도파민" },
  { slug: "fake-shopping", title: "가짜 쇼핑몰로 즐기는 쇼핑 대리만족, 윈도우 쇼핑의 진화" },
  { slug: "ai-chat", title: "AI 채팅이 한국 Z세대 도파민을 지배하는 이유" },
  { slug: "random-chat", title: "랜덤 채팅과 익명 대화가 주는 도파민" },
  { slug: "virtual-cafe", title: "가상 카페에서 온라인 힐링, 백색소음과 함께 집중력 UP" },
  { slug: "quit-work-timer", title: "퇴근 타이머, 칼퇴 카운트다운으로 버티는 직장인 도파민" },
  { slug: "stress-game", title: "스트레스 해소 게임, 분노 해소 부수기 게임으로 도파민 충전" },
  { slug: "online-together", title: "같이 있는 느낌, 온라인 모각공과 실시간 접속자의 위로" },
];

export default function Page() {
  return (
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"담배런","item":"https://virtual-break-room-318.vercel.app"},{"@type":"ListItem","position":2,"name":"도파민 사이트 TOP 10","item":"https://virtual-break-room-318.vercel.app/dopamine"}]})}}
      />

      <h1 style={{fontSize:30,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:12}}>
        도파민 사이트 TOP 10 — Z세대 힐링 완벽 정리
      </h1>
      <p style={{fontSize:16,color:"rgba(235,230,220,0.6)",lineHeight:1.7,marginBottom:32}}>
        2026년 한국 Z세대 사이에서 폭발적 인기. 가짜 배달, 온라인 담타, AI 채팅까지 —
        <strong style={{color:"#d4a860"}}>돈 한 푼 안 들이고 스트레스 해소하는 도파민 사이트</strong>를 총정리했습니다.
      </p>

      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {pages.map((p, i) => (
          <Link
            key={p.slug}
            href={`/dopamine/${p.slug}`}
            style={{display:"block",padding:"20px 24px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:10,textDecoration:"none"}}
          >
            <span style={{fontSize:11,color:"rgba(212,168,96,0.6)",marginBottom:4,display:"block"}}>TOP {i + 1}</span>
            <span style={{fontSize:17,fontWeight:600,color:"#f0e0c0",lineHeight:1.4}}>{p.title}</span>
          </Link>
        ))}
      </div>

      <div style={{marginTop:48,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          도파민 사이트의 정점, 담배런
        </p>
        <p style={{fontSize:14,color:"rgba(235,230,220,0.6)",marginBottom:16,marginTop:0}}>
          회원가입 없이 바로 접속, 실시간 익명 채팅
        </p>
        <Link href="/" style={{display:"inline-block",padding:"10px 32px",background:"rgba(212,168,96,0.2)",color:"#d4a860",borderRadius:8,textDecoration:"none",fontSize:15,fontWeight:600,border:"1px solid rgba(212,168,96,0.3)"}}>
          담배런 바로 접속하기
        </Link>
      </div>
    </main>
  );
}