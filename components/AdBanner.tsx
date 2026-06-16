"use client";

export default function AdBanner() {
  return (
    <div
      style={{
        width: "100%",
        margin: "10px auto",
        position: "relative",
        zIndex: 0,
        minHeight: 50,
      }}
    >
      <iframe
        data-aa="2444559"
        src="//acceptable.a-ads.com/2444559/?size=Adaptive"
        style={{
          border: 0,
          padding: 0,
          width: "100%",
          height: "auto",
          overflow: "hidden",
          display: "block",
          margin: "auto",
        }}
        title="AADS Ad Unit"
      />
    </div>
  );
}