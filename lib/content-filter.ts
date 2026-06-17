// Content moderation — keyword-based filter for NSFW / violence / hate
// Extensible: can be replaced with an external API (Perspective, OpenAI Moderation, etc.)

const BLOCKED_PATTERNS: RegExp[] = [
  // Korean profanity / slurs
  /씨발|시발|^ㅅㅂ$|ㅆㅂ|병신|ㅄ|ㅂㅅ|개새끼|미친놈|미친년|꺼져|뒤져|죽어|니애미|느금마|엿|좆|보지|자지|십창|썅|fuck|shit|bitch|asshole|bastard|dick|pussy|cunt|whore|slut|retard|nigger|faggot|kys|kill yourself/i,

  // Violence / threats
  /살인|죽일|칼로|총으로|폭탄|테러|협박|kill you|murder|massacre|shooting|bomb/i,

  // Sexual / NSFW
  /섹스|성관계|자위|야동|포르노|porn|sex|nude|naked|onlyfans/i,
];

const ALLOWED_PATTERNS: RegExp[] = [
  // False positive exceptions
  /시발점|출발점/i,    // "starting point" — not profanity
];

export interface FilterResult {
  passed: boolean;
  reason?: string;
}

export function filterContent(name: string, text: string): FilterResult {
  const combined = `${name} ${text}`;

  // Check whitelist first
  for (const pattern of ALLOWED_PATTERNS) {
    if (pattern.test(combined)) {
      return { passed: true };
    }
  }

  // Check blacklist
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(combined)) {
      return { passed: false, reason: "부적절한 내용이 포함되어 있습니다" };
    }
  }

  // Filter dangerous Unicode
  const dangerousUnicode = /[\u200B-\u200F\u202A-\u202E\u0300-\u036F]/g;
  const stripped = combined.replace(dangerousUnicode, "");
  const zalgoRatio = (combined.length - stripped.length) / Math.max(combined.length, 1);
  if (zalgoRatio > 0.3) {
    return { passed: false, reason: "과도한 특수문자가 포함되어 있습니다" };
  }

  return { passed: true };
}
