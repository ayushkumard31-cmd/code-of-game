"use client";

export default function ProgressBar({ value = 0, max = 100, color = "#ffc800", showChest = false, label = "" }) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 700, color: "#a0aab0" }}>
          <span>{label}</span>
          <span style={{ color: "#fff" }}>{value} / {max}</span>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
        <div
          style={{
            flex: 1,
            height: 16,
            borderRadius: 10,
            background: "#202f36",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: "100%",
              borderRadius: 10,
              background: `linear-gradient(90deg, ${color}, #ff9600)`,
              boxShadow: `0 0 12px ${color}88`,
              transition: "width 0.4s ease-in-out",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "rgba(255, 255, 255, 0.25)",
                borderRadius: "10px 10px 0 0"
              }}
            />
          </div>
        </div>
        {showChest && (
          <span
            style={{
              fontSize: 22,
              filter: percentage >= 100 ? "drop-shadow(0 0 8px #ffc800)" : "grayscale(0.6)",
              transition: "transform 0.2s ease"
            }}
            title={percentage >= 100 ? "Chest ready to open!" : "Reach goal to unlock chest"}
          >
            🎁
          </span>
        )}
      </div>
    </div>
  );
}
