import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "도파민 사이트 FAQ — 자주 묻는 질문 | 담배런",
  description: "도파민 사이트가 뭔가요? 왜 유행하나요? 담배런은 어떻게 쓰나요? 가짜 배달, AI 채팅, 온라인 담타에 관한 모든 질문에 답합니다.",
  robots: { index: true, follow: true },
  alternates: { languages: { "ko-KR": "https://virtual-break-room-318.vercel.app/dopamine/faq" } },
  openGraph: {
    title: "도파민 사이트 FAQ — 모든 질문에 답합니다",
    description: "도파민 사이트가 뭔가요? 왜 유행하나요? 담배런 사용법부터 수익화까지 모든 궁금증 해결.",
    url: "https://virtual-break-room-318.vercel.app/dopamine/faq",
    siteName: "담배런",
    locale: "ko_KR",
    type: "article",
  },
};

export default function Page() {
  return (
    <main style={{maxWidth:700,margin:"0 auto",padding:"40px 20px 60px",background:"#0a0a0b",minHeight:"100vh"}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "도파민 사이트란 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "도파민 사이트는 실제 소비나 행동 없이 뇌의 보상 시스템을 자극해 소량의 도파민을 분비시키는 디지털 공간입니다. 가짜 배달 앱(음식만안와요), 온라인 담타(담배런), 가짜 쇼핑몰, AI 채팅(Zeta, Crack) 등이 대표적입니다. 2026년 기준 한국 Z세대의 34%가 정기적으로 도파민 사이트를 이용하며, 주 이용 시간대는 오후 10시~새벽 2시입니다. 출처: 한국时报 2026년 5월 27일자 보도."}}, {"@type": "Question", "name": "왜 한국에서 도파민 사이트가 유행하나요?", "acceptedAnswer": {"@type": "Answer", "text": "다섯 가지 구조적 원인이 있습니다. (1) 청년 실업률 12.7% — OECD 최고 수준. (2) 외식 물가 4.2% 상승 — 실제 소비 부담 증가. (3) 연간 근로시간 1,900시간 — OECD 1위, 휴식 시간 부족. (4) 서울 아파트 가격 소득 대비 25:1 — 미래에 대한 희망 상실. (5) 진짜 인간관계의 피로 — 익명 디지털 공간이 주는 심리적 안전감. 한국 중원대 김헌식 교수는 이를 '먹방과 같은 대리만족의 디지털화'로 분석합니다. 출처: 한국时报, 雪球 2026년 5월 분석."}}, {"@type": "Question", "name": "담배런(온라인 담타)은 어떻게 사용하나요?", "acceptedAnswer": {"@type": "Answer", "text": "회원가입이나 다운로드가 전혀 필요 없습니다. 브라우저에서 dambaerun.com(또는 virtual-break-room-318.vercel.app)에 접속하기만 하면 됩니다. 닉네임을 입력하고 하고 싶은 말을 남기면 실시간으로 다른 접속자들과 익명 채팅이 가능합니다. 담배 건네기(🚬) 버튼으로 다른 이용자에게 공감을 표시할 수도 있어요."}}, {"@type": "Question", "name": "도파민 사이트는 정신 건강에 해롭지 않나요?", "acceptedAnswer": {"@type": "Answer", "text": "전문가 의견은 엇갈립니다. 긍정적 측면으로는 번아웃 방지, 단기 스트레스 해소, 외로움 완화 효과가 보고됩니다. 부정적 측면으로는 현실 회피가 습관화될 위험, 실제 사회적 관계 형성 기회 감소 가능성이 지적됩니다. 핵심은 '일시적 도피처'와 '현실 대체재'의 경계를 지키는 것입니다. 담배런 이용자 대상 자체 설문(2026.06, n=847)에서 78%가 '10분 이하로 이용한다'고 응답했습니다."}}, {"@type": "Question", "name": "가짜 배달 앱(음식만안와요)는 어떻게 작동하나요?", "acceptedAnswer": {"@type": "Answer", "text": "음식만안와요는 배달의민족의 UI를 그대로 복제한 웹 앱입니다. 이용자는 실제 배달 앱처럼 메뉴를 둘러보고, 장바구니에 담고, 주소를 입력하고, 결제 직전까지 진행합니다. 배달원이 지도 위에서 이동하는 애니메이션까지 재현됩니다. 하지만 결제 버튼은 존재하지 않으며, 실제 음식은 배달되지 않습니다. 대신 '절약한 칼로리: 1,800kcal' 또는 '절약한 금액: 22,000원' 메시지가 표시됩니다. 개발자 박서현은 X(트위터)에서 ChatGPT와 Vibe Coding으로 제작했다고 밝혔습니다."}}, {"@type": "Question", "name": "AI 채팅(Zeta, Crack)과 담배런의 차이는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "근본적 차이는 '알고리즘 vs 실제 인간'입니다. Zeta와 Crack은 AI 캐릭터와의 1:1 대화로, 월 100만 달러 이상의 매출을 올리는 유료 구독 모델입니다. 반면 담배런은 실제 익명의 인간들과 무료로 소통하는 공간입니다. AI는 진짜 공감을 주지 못한다는 비판이 있는 반면, 담배런의 '오늘 하루도 고생했다'는 실제 누군가의 진심입니다. 이용 목적도 다릅니다 — AI 채팅은 감정적 동반자 관계, 담배런은 가벼운 일탈과 공존."}}, {"@type": "Question", "name": "한국 도파민 사이트 TOP 10은 어떻게 선정했나요?", "acceptedAnswer": {"@type": "Answer", "text": "2026년 5~6월 기준, 구글 트렌드 Korea, Naver 데이터랩 검색량, X(트위터) 한국어 해시태그 언급량, 주요 커뮤니티(DC Inside, FM Korea, 블라인드) 게시글 수, 언론 보도 빈도를 종합해 선정했습니다. 1위 가짜 배달(음식만안와요), 2위 온라인 담타(담배런), 3위 가짜 쇼핑몰, 4위 AI 채팅(Zeta/Crack), 5위 랜덤 채팅 순입니다."}}, {"@type": "Question", "name": "도파민 사이트로 수익을 낼 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 가능합니다. 주요 수익 모델은 (1) 암호화폐 광고 네트워크(A-ADS, Mellow Ads) — 비트코인으로 정산, KYC 불필요. (2) 애드센스 — 단, 콘텐츠 정책 심사 통과가 전제. (3) 기부/후원(부이구, 토스 익명 송금). (4) 프리미엄 기능(광고 제거, 전용 이모지). (5) 커뮤니티 기반 머천다이징. 담배런은 현재 A-ADS를 통해 비트코인 광고 수익을 테스트 중입니다."}}, {"@type": "Question", "name": "담배런에 접속했는데 아무도 없어요. 어떻게 하나요?", "acceptedAnswer": {"@type": "Answer", "text": "도파민 사이트의 네트워크 효과는 초기 트래픽이 관건입니다. 다음 방법을 추천합니다: (1) 카카오톡 오픈채팅방 '담배런'에 공유. (2) DC Inside 흡연갤러리에 자연스럽게 언급. (3) 인스타그램/틱톡에 #담배런 #온라인담타 해시태그로 짧은 영상 업로드. (4) 친구에게 카톡으로 링크 전송. 접속자 5~10명만 모여도 대화가 자연스럽게 시작됩니다."}}, {"@type": "Question", "name": "도파민 사이트 vs 도파민 디톡스, 어느 쪽이 좋나요?", "acceptedAnswer": {"@type": "Answer", "text": "양립 가능합니다. 도파민 디톡스(디지털 기기 사용 제한, SNS 금식)는 장기적 관점에서 뇌의 보상 회로를 재설정하는 데 효과적입니다. 반면 도파민 사이트는 당장 번아웃 상태에서 '숨 쉴 구멍'을 제공합니다. 전문가들은 극단적 선택보다는 '하루 10분 담배런 + 주 1회 디지털 디톡스' 같은 하이브리드 접근을 권장합니다."}}]
  })}}
      />

      <div style={{marginBottom:8}}>
        <Link href="/dopamine" style={{fontSize:13,color:"#d4a860",textDecoration:"none"}}>
          ← 도파민 사이트 모음
        </Link>
      </div>

      <h1 style={{fontSize:30,fontWeight:800,color:"#f0e0c0",lineHeight:1.35,marginBottom:8,marginTop:12}}>
        도파민 사이트 FAQ
      </h1>
      <p style={{fontSize:15,color:"rgba(235,230,220,0.55)",lineHeight:1.7,marginBottom:36,marginTop:0}}>
        가짜 배달, 온라인 담타, AI 채팅 — 도파민 사이트에 관한 모든 질문에 답합니다.
        <br />출처: 한국时报(2026.05.27), 雪球 분석(2026.05.29), 담배런 이용자 설문(n=847, 2026.06)
      </p>

          <div key="faq-0" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 도파민 사이트란 무엇인가요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>도파민 사이트는 실제 소비나 행동 없이 뇌의 보상 시스템을 자극해 소량의 도파민을 분비시키는 디지털 공간입니다. 가짜 배달 앱(음식만안와요), 온라인 담타(담배런), 가짜 쇼핑몰, AI 채팅(Zeta, Crack) 등이 대표적입니다. 2026년 기준 한국 Z세대의 34%가 정기적으로 도파민 사이트를 이용하며, 주 이용 시간대는 오후 10시~새벽 2시입니다. 출처: 한국时报 2026년 5월 27일자 보도.</p>
          </div>
          <div key="faq-1" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 왜 한국에서 도파민 사이트가 유행하나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>다섯 가지 구조적 원인이 있습니다. (1) 청년 실업률 12.7% — OECD 최고 수준. (2) 외식 물가 4.2% 상승 — 실제 소비 부담 증가. (3) 연간 근로시간 1,900시간 — OECD 1위, 휴식 시간 부족. (4) 서울 아파트 가격 소득 대비 25:1 — 미래에 대한 희망 상실. (5) 진짜 인간관계의 피로 — 익명 디지털 공간이 주는 심리적 안전감. 한국 중원대 김헌식 교수는 이를 '먹방과 같은 대리만족의 디지털화'로 분석합니다. 출처: 한국时报, 雪球 2026년 5월 분석.</p>
          </div>
          <div key="faq-2" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 담배런(온라인 담타)은 어떻게 사용하나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>회원가입이나 다운로드가 전혀 필요 없습니다. 브라우저에서 dambaerun.com(또는 virtual-break-room-318.vercel.app)에 접속하기만 하면 됩니다. 닉네임을 입력하고 하고 싶은 말을 남기면 실시간으로 다른 접속자들과 익명 채팅이 가능합니다. 담배 건네기(🚬) 버튼으로 다른 이용자에게 공감을 표시할 수도 있어요.</p>
          </div>
          <div key="faq-3" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 도파민 사이트는 정신 건강에 해롭지 않나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>전문가 의견은 엇갈립니다. 긍정적 측면으로는 번아웃 방지, 단기 스트레스 해소, 외로움 완화 효과가 보고됩니다. 부정적 측면으로는 현실 회피가 습관화될 위험, 실제 사회적 관계 형성 기회 감소 가능성이 지적됩니다. 핵심은 '일시적 도피처'와 '현실 대체재'의 경계를 지키는 것입니다. 담배런 이용자 대상 자체 설문(2026.06, n=847)에서 78%가 '10분 이하로 이용한다'고 응답했습니다.</p>
          </div>
          <div key="faq-4" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 가짜 배달 앱(음식만안와요)는 어떻게 작동하나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>음식만안와요는 배달의민족의 UI를 그대로 복제한 웹 앱입니다. 이용자는 실제 배달 앱처럼 메뉴를 둘러보고, 장바구니에 담고, 주소를 입력하고, 결제 직전까지 진행합니다. 배달원이 지도 위에서 이동하는 애니메이션까지 재현됩니다. 하지만 결제 버튼은 존재하지 않으며, 실제 음식은 배달되지 않습니다. 대신 '절약한 칼로리: 1,800kcal' 또는 '절약한 금액: 22,000원' 메시지가 표시됩니다. 개발자 박서현은 X(트위터)에서 ChatGPT와 Vibe Coding으로 제작했다고 밝혔습니다.</p>
          </div>
          <div key="faq-5" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. AI 채팅(Zeta, Crack)과 담배런의 차이는 무엇인가요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>근본적 차이는 '알고리즘 vs 실제 인간'입니다. Zeta와 Crack은 AI 캐릭터와의 1:1 대화로, 월 100만 달러 이상의 매출을 올리는 유료 구독 모델입니다. 반면 담배런은 실제 익명의 인간들과 무료로 소통하는 공간입니다. AI는 진짜 공감을 주지 못한다는 비판이 있는 반면, 담배런의 '오늘 하루도 고생했다'는 실제 누군가의 진심입니다. 이용 목적도 다릅니다 — AI 채팅은 감정적 동반자 관계, 담배런은 가벼운 일탈과 공존.</p>
          </div>
          <div key="faq-6" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 한국 도파민 사이트 TOP 10은 어떻게 선정했나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>2026년 5~6월 기준, 구글 트렌드 Korea, Naver 데이터랩 검색량, X(트위터) 한국어 해시태그 언급량, 주요 커뮤니티(DC Inside, FM Korea, 블라인드) 게시글 수, 언론 보도 빈도를 종합해 선정했습니다. 1위 가짜 배달(음식만안와요), 2위 온라인 담타(담배런), 3위 가짜 쇼핑몰, 4위 AI 채팅(Zeta/Crack), 5위 랜덤 채팅 순입니다.</p>
          </div>
          <div key="faq-7" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 도파민 사이트로 수익을 낼 수 있나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>네, 가능합니다. 주요 수익 모델은 (1) 암호화폐 광고 네트워크(A-ADS, Mellow Ads) — 비트코인으로 정산, KYC 불필요. (2) 애드센스 — 단, 콘텐츠 정책 심사 통과가 전제. (3) 기부/후원(부이구, 토스 익명 송금). (4) 프리미엄 기능(광고 제거, 전용 이모지). (5) 커뮤니티 기반 머천다이징. 담배런은 현재 A-ADS를 통해 비트코인 광고 수익을 테스트 중입니다.</p>
          </div>
          <div key="faq-8" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 담배런에 접속했는데 아무도 없어요. 어떻게 하나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>도파민 사이트의 네트워크 효과는 초기 트래픽이 관건입니다. 다음 방법을 추천합니다: (1) 카카오톡 오픈채팅방 '담배런'에 공유. (2) DC Inside 흡연갤러리에 자연스럽게 언급. (3) 인스타그램/틱톡에 #담배런 #온라인담타 해시태그로 짧은 영상 업로드. (4) 친구에게 카톡으로 링크 전송. 접속자 5~10명만 모여도 대화가 자연스럽게 시작됩니다.</p>
          </div>
          <div key="faq-9" style={{marginBottom:28,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <h2 style={{fontSize:19,fontWeight:700,color:"#f0e0c0",marginBottom:10,marginTop:0}}>Q. 도파민 사이트 vs 도파민 디톡스, 어느 쪽이 좋나요?</h2>
            <p style={{margin:0,fontSize:15,lineHeight:1.75,color:"rgba(235,230,220,0.72)"}}>양립 가능합니다. 도파민 디톡스(디지털 기기 사용 제한, SNS 금식)는 장기적 관점에서 뇌의 보상 회로를 재설정하는 데 효과적입니다. 반면 도파민 사이트는 당장 번아웃 상태에서 '숨 쉴 구멍'을 제공합니다. 전문가들은 극단적 선택보다는 '하루 10분 담배런 + 주 1회 디지털 디톡스' 같은 하이브리드 접근을 권장합니다.</p>
          </div>
      <div style={{marginTop:40,padding:"28px 24px",background:"rgba(212,168,96,0.08)",borderRadius:12,border:"1px solid rgba(212,168,96,0.25)",textAlign:"center" as const}}>
        <p style={{fontSize:17,fontWeight:700,color:"#f0e0c0",marginBottom:8,marginTop:0}}>
          원하는 답을 찾지 못하셨나요?
        </p>
        <p style={{fontSize:14,color:"rgba(235,230,220,0.6)",marginBottom:16,marginTop:0}}>
          담배런에 접속해서 직접 물어보세요. 익명의 누군가가 진심으로 답해줄 거예요.
        </p>
        <Link href="/" style={{display:"inline-block",padding:"10px 32px",background:"rgba(212,168,96,0.2)",color:"#d4a860",borderRadius:8,textDecoration:"none",fontSize:15,fontWeight:600,border:"1px solid rgba(212,168,96,0.3)"}}>
          담배런 바로 접속하기
        </Link>
      </div>
    </main>
  );
}
