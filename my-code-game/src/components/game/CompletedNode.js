"use client";

export default function CompletedNode({ title, icon = "✓", onClick, xp = 50 }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
    >
      <button
        onClick={onClick}
        type="button"
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "linear-gradient(180deg, #58cc02 0%, #46a302 100%)",
          boxShadow: "0 8px 0 #3b8702, 0 12px 20px rgba(88, 204, 2, 0.4)",
          border: "none",
          display: "grid",
          placeItems: "center",
          color: "#ffffff",
          fontSize: 28,
          cursor: "pointer",
          transition: "transform 0.1s ease, filter 0.2s ease",
          outline: "none",
          position: "relative"
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "translateY(6px)";
          e.currentTarget.style.boxShadow = "0 2px 0 #3b8702";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 8px 0 #3b8702, 0 12px 20px rgba(88, 204, 2, 0.4)";
        }}
        title={`Completed: ${title} (+${xp} XP)`}
      >
        <div
          style={{
            position: "absolute",
            inset: 4,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.3)",
            pointerEvents: "none"
          }}
        />
        <span>{icon}</span>
      </button>
      {title && (
        <span
          style={{
            marginTop: 8,
            fontSize: 12,
            fontWeight: 800,
            color: "#58cc02",
            fontFamily: "var(--font-display), sans-serif",
            textShadow: "0 2px 4px rgba(0,0,0,0.8)"
          }}
        >
          {title}
        </span>
      )}
    </div>
  );
}
