"use client";

export default function XPBar({ xp = 0, size = "md" }) {
  const isCompact = size === "sm";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: isCompact ? "4px 10px" : "6px 14px",
        borderRadius: 20,
        background: "rgba(28, 176, 246, 0.12)",
        border: "1.5px solid rgba(28, 176, 246, 0.35)",
        color: "#1cb0f6",
        fontWeight: 800,
        fontSize: isCompact ? 12 : 14,
        fontFamily: "var(--font-display), sans-serif",
        boxShadow: "0 2px 8px rgba(28, 176, 246, 0.15)",
        userSelect: "none",
        transition: "transform 0.2s ease"
      }}
      title={`${xp} Total XP`}
    >
      <span style={{ fontSize: isCompact ? 14 : 18, filter: "drop-shadow(0 2px 4px rgba(28,176,246,0.4))" }}>💎</span>
      <span>{xp}</span>
    </div>
  );
}
