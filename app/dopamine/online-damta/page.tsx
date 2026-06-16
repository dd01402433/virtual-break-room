import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "온라인 담타 담배런 — 퇴근 후 담배 한 대, 가상 흡연실 | 도파민 사이트",
  description: "담배런은 회원가입 없는 온라인 담타 가상 흡연실입니다. 실시간 접속자와 함께 익명 채팅으로 스트레스 해소. Z세대 힐링 도파민 사이트.",
  robots: { index: true, follow: true },
  alternates: { languages: { "ko-KR": "https://virtual-break-room-318.vercel.app/dopamine/online-damta" } },
  openGraph: {
    title: "온라인 담타 담배런 — 퇴근 후 담배 한 대, 가상 흡연실 | 도파민 사이트",
    description: "담배런은 회원가입 없는 온라인 담타 가상 흡연실입니다. 실시간 접속자와 함께 익명 채팅으로 스트레스 해소. Z세대 힐링 도파민 사이트.",
    url: "https://virtual-break-room-318.vercel.app/dopamine/online-damta",
    siteName: "담배런",
    locale: "ko_KR",
    type: "article",
  },
};

export default function Page() {
  return (
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <div style={{marginBottom:8}}>
        <Link href="/dopamine" style={{fontSize:13,color:"#d4a860",textDecoration:"none"}}>
          ← 도파민 사이트 모음
        </Link>
      </div>

      <h1 style={{fontSize:28,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:16,marginTop:12}}>
        온라인 담타, 퇴근 후 담배 한 대 피는 기분
      </h1>

      <div style={{marginBottom:40,display:"flex",flexWrap:"wrap",gap:6}}>
        <span key="온라인 담타" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#온라인 담타</span><span key="담배런" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#담배런</span><span key="가상 흡연실" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#가상 흡연실</span><span key="퇴근 후 담배" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#퇴근 후 담배</span><span key="익명 채팅" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#익명 채팅</span><span key="실시간 접속자" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#실시간 접속자</span><span key="스트레스 해소" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#스트레스 해소</span><span key="도파민 사이트" style={{background:"rgba(212,168,96,0.15)",color:"#d4a860",fontSize:11,padding:"3px 8px",borderRadius:4,marginRight:4,marginBottom:4,display:"inline-block"}}>#도파민 사이트</span>
      </div>

                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>온라인 담타란?</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>온라인 담타(담배 타임)는 실제로 담배를 피지 않아도 퇴근 후 잠깐 쉬는 기분을 느낄 수 있는 가상 흡연실입니다. 회원가입도 다운로드도 필요 없이 브라우저만 열면 누구나 참여할 수 있어요.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>왜 한국 Z세대가 온라인 담타에 빠졌을까?</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>한국 2030 세대는 OECD 최장 노동시간, 치솟는 물가, 12.7% 청년 실업률 속에서 실제 휴식조차 사치가 되어버렸습니다. 온라인 담타는 0원, 0초 만에 잠깐 숨 돌리는 경험을 제공합니다.</p>
                </section>
                <section style={{marginBottom: 36}}>
                  <h2 style={{fontSize: 22, fontWeight: 700, color: "#d4a860", marginBottom: 10}}>담배런이 특별한 이유</h2>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(235,230,220,0.75)"}}>기존 온라인 담타 사이트와 달리 담배런은 실시간 접속자 수 표시, 담배 건네기 기능, 완전 익명 채팅을 제공합니다. 번아웃에 지친 직장인과 수험생들의 디지털 쉼터입니다.</p>
                </section>
      <div style={{marginTop:48,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          담배런 바로가기
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
          <Link key="fake-delivery" href="/dopamine/fake-delivery" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 배달로 스트레스 해소, 배달 대리만족 도파민</Link><Link key="fake-shopping" href="/dopamine/fake-shopping" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가짜 쇼핑몰로 즐기는 쇼핑 대리만족, 윈도우 쇼핑의 진화</Link><Link key="ai-chat" href="/dopamine/ai-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>AI 채팅이 한국 Z세대 도파민을 지배하는 이유</Link><Link key="random-chat" href="/dopamine/random-chat" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>랜덤 채팅과 익명 대화가 주는 도파민</Link><Link key="virtual-cafe" href="/dopamine/virtual-cafe" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>가상 카페에서 온라인 힐링, 백색소음과 함께 집중력 UP</Link><Link key="quit-work-timer" href="/dopamine/quit-work-timer" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>퇴근 타이머, 칼퇴 카운트다운으로 버티는 직장인 도파민</Link><Link key="stress-game" href="/dopamine/stress-game" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>스트레스 해소 게임, 분노 해소 부수기 게임으로 도파민 충전</Link><Link key="online-together" href="/dopamine/online-together" style={{fontSize:12,color:"rgba(235,230,220,0.5)",textDecoration:"none",padding:"4px 10px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,marginRight:6,marginBottom:6,display:"inline-block"}}>같이 있는 느낌, 온라인 모각공과 실시간 접속자의 위로</Link>
        </div>
      </div>
    </main>
  );
}
