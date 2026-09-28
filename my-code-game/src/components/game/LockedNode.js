"use client";

export default function LockedNode({ title, icon = "🔒" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        opacity: 0.7
      }}
    >
      <div
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: "linear-gradient(180deg, #37464f 0%, #2b353b 100%)",
          boxShadow: "0 7px 0 #1c2327",
          border: "none",
          display: "grid",
          placeItems: "center",
          color: "#6b7d87",
          fontSize: 26,
          cursor: "not-allowed",
          userSelect: "none"
        }}
        title={`Locked: ${title || "Complete previous lessons"}`}
      >
        <span>{icon}</span>
      </div>
      {title && (
        <span
          style={{
            marginTop: 8,
            fontSize: 12,
            fontWeight: 700,
            color: "#6b7d87",
            fontFamily: "var(--font-display), sans-serif"
          }}
        >
          {title}
        </span>
      )}
    </div>
  );
}
