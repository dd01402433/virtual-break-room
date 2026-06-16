"use client";

export default function SkeletonCard() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.04)",
        padding: "14px 16px",
        marginBottom: 10,
        animation: "pulse 1.4s ease-in-out infinite",
      }}
    >
      <div style={{
        height: 10,
        width: 56,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 4,
        marginBottom: 10,
      }} />
      <div style={{
        height: 12,
        width: "75%",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 4,
      }} />
    </div>
  );
}
