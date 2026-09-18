"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { learningPathTracks } from "../data/pathData";

export default function LearningPathPage() {
  const { stats, toggleRoadmapNode } = usePlayer();
  const [activeTrackId, setActiveTrackId] = useState("basics");
  const [toast, setToast] = useState("");

  const activeTrack = learningPathTracks.find((t) => t.id === activeTrackId) || learningPathTracks[0];
  const completedNodes = stats?.completedRoadmaps || [];

  function handleToggle(nodeId, xp) {
    const isCompleted = completedNodes.includes(nodeId);
    toggleRoadmapNode(nodeId, xp);
    setToast(isCompleted ? "Node marked as incomplete" : `🎉 Completed! +${xp} XP gained`);
    setTimeout(() => setToast(""), 2500);
  }

  const totalTrackNodes = activeTrack.levels.length;
  const completedInTrack = activeTrack.levels.filter((l) => completedNodes.includes(l.id)).length;
  const trackPercentage = Math.round((completedInTrack / totalTrackNodes) * 100);

  return (
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

      {toast && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          background: "#a9ff43",
          color: "#0b0d0c",
          padding: "12px 20px",
          borderRadius: 6,
          fontWeight: 800,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          {toast}
        </div>
      )}

      <div className="nexus-container">
        <div className="nexus-header">
          <small>CURRICULUM ROADMAP</small>
          <h1>🗺️ Learning Path</h1>
          <p>
            Master computer science step-by-step. Progress from fundamental computational logic, through systems languages, up to advanced algorithmic design and distributed systems.
          </p>
        </div>

        {/* Track Selection Tabs */}
        <div className="nexus-tabs">
          {learningPathTracks.map((track) => {
            const isSelected = track.id === activeTrackId;
            const completedCount = track.levels.filter((l) => completedNodes.includes(l.id)).length;
            return (
              <button
                key={track.id}
                className={`nexus-tab-btn ${isSelected ? "active" : ""}`}
                onClick={() => setActiveTrackId(track.id)}
                type="button"
              >
                <span>{track.icon}</span>
                <span>{track.title}</span>
                <span style={{
                  fontSize: 10,
                  padding: "2px 6px",
                  borderRadius: 4,
                  background: isSelected ? "rgba(169,255,67,0.2)" : "rgba(255,255,255,0.06)",
                  color: isSelected ? "#a9ff43" : "#7d847e"
                }}>
                  {completedCount}/{track.levels.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Track Banner */}
        <div style={{
          padding: "24px 28px",
          borderRadius: 8,
          background: `linear-gradient(135deg, ${activeTrack.color}15, rgba(16,20,17,0.85))`,
          border: `1px solid ${activeTrack.color}40`,
          marginBottom: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div>
            <span style={{
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: 4,
              fontSize: 10,
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              background: `${activeTrack.color}25`,
              color: activeTrack.color,
              marginBottom: 8
            }}>
              ACTIVE TRACK
            </span>
            <h2 style={{ margin: "0 0 6px", color: "#fff", fontSize: 24, fontWeight: 800 }}>
              {activeTrack.icon} {activeTrack.title}
            </h2>
            <p style={{ margin: 0, color: "#9ca59e", fontSize: 13, maxWidth: 580 }}>
              {activeTrack.tagline}
            </p>
          </div>

          <div style={{
            background: "#0d110e",
            padding: "16px 20px",
            borderRadius: 6,
            border: "1px solid #242c26",
            textAlign: "right",
            minWidth: 160
          }}>
            <div style={{ color: "#79827a", fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 1 }}>TRACK PROGRESS</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: activeTrack.color, fontFamily: "var(--font-mono)" }}>
              {trackPercentage}%
            </div>
            <div style={{ color: "#79827a", fontSize: 11 }}>
              {completedInTrack} of {totalTrackNodes} Completed
            </div>
          </div>
        </div>

        {/* Roadmap Milestones */}
        <div style={{ display: "grid", gap: 20 }}>
          {activeTrack.levels.map((level, idx) => {
            const isDone = completedNodes.includes(level.id);
            return (
              <div
                key={level.id}
                className="nexus-card"
                style={{
                  borderLeft: `4px solid ${isDone ? "#a9ff43" : activeTrack.color}`,
                  background: isDone ? "rgba(169, 255, 67, 0.03)" : "#101411"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span className="tag-badge" style={{ background: "rgba(255,255,255,0.06)", color: "#9ea69f" }}>
                        {level.level}
                      </span>
                      <span style={{ color: "#6a736c", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                        ⏱️ {level.duration}
                      </span>
                      <span style={{ color: "#ffb627", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                        ⭐ +{level.xp} XP
                      </span>
                    </div>

                    <h3 style={{ margin: "0 0 8px", fontSize: 19, color: "#fff", fontWeight: 700 }}>
                      {level.title}
                    </h3>

                    <p style={{ margin: "0 0 16px", color: "#8c948e", fontSize: 13, lineHeight: 1.5 }}>
                      {level.desc}
                    </p>

                    {/* Key Concepts Chips */}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {level.concepts.map((concept, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: 10,
                            fontFamily: "var(--font-mono)",
                            padding: "3px 8px",
                            borderRadius: 3,
                            background: "#080a09",
                            color: "#83cf3f",
                            border: "1px solid #1f2720"
                          }}
                        >
                          • {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
                    <button
                      className={isDone ? "btn-secondary" : "btn-primary"}
                      onClick={() => handleToggle(level.id, level.xp)}
                      type="button"
                    >
                      {isDone ? "✓ Completed" : "Mark Complete"}
                    </button>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Link href="/notes" className="btn-secondary" style={{ padding: "7px 12px", fontSize: 10 }}>
                        📖 Notes
                      </Link>
                      <Link href="/practice" className="btn-secondary" style={{ padding: "7px 12px", fontSize: 10 }}>
                        💻 Practice
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
