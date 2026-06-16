import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "가짜 배달 도파민 — 배달 대리만족, 가상 주문의 세계 | 도파민 사이트",
  description: "음식만안와요 같은 가짜 배달 앱이 한국 Z세대에게 인기. 가상 주문으로 스트레스 해소하고 칼로리 0원 0의 도파민을 얻는 방법.",
  robots: { index: true, follow: true },
  alternates: { languages: { "ko-KR": "https://virtual-break-room-318.vercel.app/dopamine/fake-delivery" } },
  openGraph: {
    title: "가짜 배달 도파민 — 배달 대리만족, 가상 주문의 세계 | 도파민 사이트",
    description: "음식만안와요 같은 가짜 배달 앱이 한국 Z세대에게 인기. 가상 주문으로 스트레스 해소하고 칼로리 0원 0의 도파민을 얻는 방법.",
    url: "https://virtual-break-room-318.vercel.app/dopamine/fake-delivery",
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
  "itemListElement": [{"@type": "ListItem", "position": 1, "name": "담배런", "item": "https://virtual-break-room-318.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "도파민 사이트 TOP 10", "item": "https://virtual-break-room-318.vercel.app/dopamine"}, {"@type": "ListItem", "position": 3, "name": "fake-delivery"}]
})}}
      />
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <div style={{marginBottom:8}}>
        <Link href="/dopamine" style={{fontSize:13,color:"#d4a860",textDecoration:"none"}}>
          ← 도파민 사이트 모음
        </Link>
      </div>

      <h1 style={{fontSize:28,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:16,marginTop:12}}>
        가짜 배달로 스트레스 해소, 배달 대리만족 도파민
      </h1>

      <div style={{marginBottom:40,display:"flex",flexWrap:"wrap",gap:6}}>
        <span key="가짜 배달" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#가짜 배달</span><span key="배달 대리만족" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#배달 대리만족</span><span key="가상 주문" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#가상 주문</span><span key="음식만안와요" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#음식만안와요</span><span key="도파민 사이트" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#도파민 사이트</span><span key="스트레스 해소" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#스트레스 해소</span>
      </div>

                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>가짜 배달 앱이란?</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>가짜 배달 앱은 실제 배달의민족과 똑같은 UI로 음식을 고르고 장바구니에 담고 주문까지 하지만, 실제로는 어떤 음식도 배달되지 않고 결제도 이루어지지 않는 도파민 사이트입니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>왜 한국인은 가짜 배달에 열광하나</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>2026년 한국 외식 물가는 전년 대비 4.2% 상승했습니다. Z세대는 주문하는 기분만으로 도파민을 얻고 실제 지출은 0원으로 유지합니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>가짜 배달에서 담배런으로</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>배달 대리만족도 좋지만, 진짜 사람들과의 소통이 주는 위로는 비교할 수 없습니다. 담배런에서는 실시간 접속자와 함께 퇴근 후 담배 한 대 하며 하루를 마무리할 수 있어요.</p>
                </section>
      <div style={{marginTop:48,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          담배런에서 진짜 사람들과 소통하기
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
          <Link key="online-damta" href="/dopamine/online-damta" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>온라인 담타, 퇴근 후 담배 한 대 피는 기분</Link><Link key="fake-shopping" href="/dopamine/fake-shopping" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 쇼핑몰로 즐기는 쇼핑 대리만족, 윈도우 쇼핑의 진화</Link><Link key="ai-chat" href="/dopamine/ai-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>AI 채팅이 한국 Z세대 도파민을 지배하는 이유</Link><Link key="random-chat" href="/dopamine/random-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>랜덤 채팅과 익명 대화가 주는 도파민</Link><Link key="virtual-cafe" href="/dopamine/virtual-cafe" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가상 카페에서 온라인 힐링, 백색소음과 함께 집중력 UP</Link><Link key="quit-work-timer" href="/dopamine/quit-work-timer" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>퇴근 타이머, 칼퇴 카운트다운으로 버티는 직장인 도파민</Link><Link key="stress-game" href="/dopamine/stress-game" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>스트레스 해소 게임, 분노 해소 부수기 게임으로 도파민 충전</Link><Link key="online-together" href="/dopamine/online-together" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>같이 있는 느낌, 온라인 모각공과 실시간 접속자의 위로</Link>
        </div>
      </div>
    </main>
    </>
  );
}
