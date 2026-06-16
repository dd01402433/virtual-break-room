import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "가상 카페 도파민 — 온라인 힐링, 백색소음, 집중력 | 도파민 사이트",
  description: "가상 카페, ASMR 카페, 백색소음 사이트. 카페 가고 싶은데 못 갈 때 이용하는 온라인 힐링 도파민 사이트 모음.",
  robots: { index: true, follow: true },
  alternates: { languages: { "ko-KR": "https://virtual-break-room-318.vercel.app/dopamine/virtual-cafe" } },
  openGraph: {
    title: "가상 카페 도파민 — 온라인 힐링, 백색소음, 집중력 | 도파민 사이트",
    description: "가상 카페, ASMR 카페, 백색소음 사이트. 카페 가고 싶은데 못 갈 때 이용하는 온라인 힐링 도파민 사이트 모음.",
    url: "https://virtual-break-room-318.vercel.app/dopamine/virtual-cafe",
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
  "itemListElement": [{"@type": "ListItem", "position": 1, "name": "담배런", "item": "https://virtual-break-room-318.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "도파민 사이트 TOP 10", "item": "https://virtual-break-room-318.vercel.app/dopamine"}, {"@type": "ListItem", "position": 3, "name": "virtual-cafe"}]
})}}
      />
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <div style={{marginBottom:8}}>
        <Link href="/dopamine" style={{fontSize:13,color:"#d4a860",textDecoration:"none"}}>
          ← 도파민 사이트 모음
        </Link>
      </div>

      <h1 style={{fontSize:28,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:16,marginTop:12}}>
        가상 카페에서 온라인 힐링, 백색소음과 함께 집중력 UP
      </h1>

      <div style={{marginBottom:40,display:"flex",flexWrap:"wrap",gap:6}}>
        <span key="가상 카페" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#가상 카페</span><span key="온라인 힐링" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#온라인 힐링</span><span key="ASMR 카페" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#ASMR 카페</span><span key="백색소음" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#백색소음</span><span key="집중력" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#집중력</span><span key="도파민 사이트" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#도파민 사이트</span>
      </div>

                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>가상 카페란?</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>카페 특유의 백색소음(커피 머신 소리, 잔 부딪히는 소리, 낮은 대화 소리)을 재현한 온라인 공간입니다. 실제 카페에 가지 않아도 그 분위기 속에서 공부나 업무에 집중할 수 있도록 도와주는 도파민 사이트예요.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>왜 가상 카페가 필요한가</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>카페에 4시간 있으면 아메리카노 한 잔 5,000원, 케이크까지 15,000원. 주 3회 가도 월 18만원. 가상 카페는 0원에 언제든지 자리가 있습니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>카페 분위기보다 사람 냄새, 담배런</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>백색소음으로 집중하는 것도 좋지만, 진짜 사람들이 오늘 하루 고생했다 라는 메시지를 남기는 공간은 가상 카페에서 얻을 수 없는 위로를 줍니다.</p>
                </section>
      <div style={{marginTop:48,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          카페 말고 담배런, 사람 냄새 나는 힐링
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
          <Link key="online-damta" href="/dopamine/online-damta" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>온라인 담타, 퇴근 후 담배 한 대 피는 기분</Link><Link key="fake-delivery" href="/dopamine/fake-delivery" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 배달로 스트레스 해소, 배달 대리만족 도파민</Link><Link key="fake-shopping" href="/dopamine/fake-shopping" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 쇼핑몰로 즐기는 쇼핑 대리만족, 윈도우 쇼핑의 진화</Link><Link key="ai-chat" href="/dopamine/ai-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>AI 채팅이 한국 Z세대 도파민을 지배하는 이유</Link><Link key="random-chat" href="/dopamine/random-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>랜덤 채팅과 익명 대화가 주는 도파민</Link><Link key="quit-work-timer" href="/dopamine/quit-work-timer" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>퇴근 타이머, 칼퇴 카운트다운으로 버티는 직장인 도파민</Link><Link key="stress-game" href="/dopamine/stress-game" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>스트레스 해소 게임, 분노 해소 부수기 게임으로 도파민 충전</Link><Link key="online-together" href="/dopamine/online-together" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>같이 있는 느낌, 온라인 모각공과 실시간 접속자의 위로</Link>
        </div>
      </div>
    </main>
    </>
  );
}
