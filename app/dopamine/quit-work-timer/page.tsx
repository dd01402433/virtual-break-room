import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "퇴근 타이머 도파민 — 칼퇴 카운트, 월급 루팡 타이머 | 도파민 사이트",
  description: "퇴근 타이머, 칼퇴 카운트다운, 월급 루팡 시계. 퇴근까지 남은 시간을 초 단위로 보며 버티는 직장인들의 도파민 사이트.",
  robots: { index: true, follow: true },
  alternates: { languages: { "ko-KR": "https://virtual-break-room-318.vercel.app/dopamine/quit-work-timer" } },
  openGraph: {
    title: "퇴근 타이머 도파민 — 칼퇴 카운트, 월급 루팡 타이머 | 도파민 사이트",
    description: "퇴근 타이머, 칼퇴 카운트다운, 월급 루팡 시계. 퇴근까지 남은 시간을 초 단위로 보며 버티는 직장인들의 도파민 사이트.",
    url: "https://virtual-break-room-318.vercel.app/dopamine/quit-work-timer",
    siteName: "담배런",
    locale: "ko_KR",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"@type": "ListItem", "position": 1, "name": "담배런", "item": "https://virtual-break-room-318.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "도파민 사이트 TOP 10", "item": "https://virtual-break-room-318.vercel.app/dopamine"}, {"@type": "ListItem", "position": 3, "name": "quit-work-timer"}]
})}}
      />
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <div style={{marginBottom:8}}>
        <Link href="/dopamine" style={{fontSize:13,color:"#d4a860",textDecoration:"none"}}>
          ← 도파민 사이트 모음
        </Link>
      </div>

      <h1 style={{fontSize:28,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:16,marginTop:12}}>
        퇴근 타이머, 칼퇴 카운트다운으로 버티는 직장인 도파민
      </h1>

      <div style={{marginBottom:40,display:"flex",flexWrap:"wrap",gap:6}}>
        <span key="퇴근 타이머" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#퇴근 타이머</span><span key="퇴근 카운트" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#퇴근 카운트</span><span key="칼퇴" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#칼퇴</span><span key="월급 루팡" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#월급 루팡</span><span key="도파민 사이트" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#도파민 사이트</span><span key="직장인 힐링" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#직장인 힐링</span>
      </div>

                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>퇴근 타이머란?</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>퇴근까지 남은 시간을 시:분:초로 보여주는 웹사이트입니다. 2025년 한국 직장인 익명 커뮤니티 블라인드에서 시작된 밈에서 탄생했고, 지금은 수많은 사이트가 생겨났습니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>왜 퇴근 타이머가 도파민인가</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>한국 직장인 평균 근로시간은 주 52시간. 퇴근까지 남은 시간을 숫자로 보는 것만으로 끝이 있다는 안도감을 줍니다. 월급 루팡 계열은 실시간 급여 계산까지 보여줍니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>퇴근 후엔 담배런</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>퇴근 타이머로 버텼다면, 퇴근 후엔 담배런에서 오늘도 살아남았다 한마디 남기세요. 같은 처지의 직장인들이 실시간으로 공감해줍니다.</p>
                </section>
      <div style={{marginTop:48,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          퇴근했으면 담배런에서 한숨 돌리기
        </p>
        <p style={{fontSize:14,color:"rgba(235,230,220,0.6)",marginBottom:16,marginTop:0}}>
          회원가입 없이 바로 접속, 완전 익명 채팅
        </p>
        <Link href="/" style={{display:"inline-block",padding:"10px 32px",background:"rgba(212,168,96,0.2)",color:"#d4a860",borderRadius:8,textDecoration:"none",fontSize:15,fontWeight:600,border:"1px solid rgba(212,168,96,0.3)"}}>
          담배런 바로 접속하기
        </Link>
      </div>

      <div style={{marginTop:48,paddingTop:24,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.2)",margin:0,marginBottom:12}}>함께 볼만한 도파민 사이트</p>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Link key="online-damta" href="/dopamine/online-damta" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>온라인 담타, 퇴근 후 담배 한 대 피는 기분</Link><Link key="fake-delivery" href="/dopamine/fake-delivery" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 배달로 스트레스 해소, 배달 대리만족 도파민</Link><Link key="fake-shopping" href="/dopamine/fake-shopping" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 쇼핑몰로 즐기는 쇼핑 대리만족, 윈도우 쇼핑의 진화</Link><Link key="ai-chat" href="/dopamine/ai-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>AI 채팅이 한국 Z세대 도파민을 지배하는 이유</Link><Link key="random-chat" href="/dopamine/random-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>랜덤 채팅과 익명 대화가 주는 도파민</Link><Link key="virtual-cafe" href="/dopamine/virtual-cafe" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가상 카페에서 온라인 힐링, 백색소음과 함께 집중력 UP</Link><Link key="stress-game" href="/dopamine/stress-game" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>스트레스 해소 게임, 분노 해소 부수기 게임으로 도파민 충전</Link><Link key="online-together" href="/dopamine/online-together" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>같이 있는 느낌, 온라인 모각공과 실시간 접속자의 위로</Link>
        </div>
      </div>
    </main>
    </>
  );
}
