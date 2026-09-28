"use client";

export default function LessonNode({ title = "Arrays & Memory", icon = "⭐", onClick, calloutText = "START" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
    >
      {/* Callout Tooltip Above Active Node */}
      {calloutText && (
        <div
          style={{
            position: "absolute",
            top: -48,
            zIndex: 10,
            background: "#ffffff",
            color: "#1cb0f6",
            padding: "6px 16px",
            borderRadius: 14,
            fontWeight: 900,
            fontSize: 13,
            letterSpacing: 1,
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
            border: "2px solid #1cb0f6",
            fontFamily: "var(--font-display), sans-serif",
            animation: "duoBounce 1.6s infinite ease-in-out",
            whiteSpace: "nowrap"
          }}
        >
          {calloutText}
          {/* Arrow Pointer */}
          <div
            style={{
              position: "absolute",
              bottom: -7,
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: 10,
              height: 10,
              background: "#ffffff",
              borderRight: "2px solid #1cb0f6",
              borderBottom: "2px solid #1cb0f6"
            }}
          />
        </div>
      )}

      {/* Pulsing Outer Ring */}
      <div
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          border: "3px dashed #ffc800",
          animation: "duoSpin 12s linear infinite",
          pointerEvents: "none"
        }}
      />

      {/* Main Interactive Active Node Button */}
      <button
        onClick={onClick}
        type="button"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(180deg, #ffc800 0%, #ff9600 100%)",
          boxShadow: "0 9px 0 #cb7600, 0 15px 30px rgba(255, 200, 0, 0.5)",
          border: "4px solid #ffffff",
          display: "grid",
          placeItems: "center",
          color: "#ffffff",
          fontSize: 34,
          cursor: "pointer",
          outline: "none",
          position: "relative",
          zIndex: 2,
          transition: "transform 0.1s ease"
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "translateY(7px)";
          e.currentTarget.style.boxShadow = "0 2px 0 #cb7600";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 9px 0 #cb7600, 0 15px 30px rgba(255, 200, 0, 0.5)";
        }}
        title={`Start Lesson: ${title}`}
      >
        <span style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>{icon}</span>
      </button>

      {title && (
        <span
          style={{
            marginTop: 10,
            fontSize: 13,
            fontWeight: 800,
            color: "#ffc800",
            fontFamily: "var(--font-display), sans-serif",
            textShadow: "0 2px 6px rgba(0,0,0,0.9)"
          }}
        >
          {title}
        </span>
      )}
    </div>
  );
}
