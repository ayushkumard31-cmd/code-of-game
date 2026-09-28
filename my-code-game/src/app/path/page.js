"use client";

import { useState } from "react";
import Link from "next/link";
import usePlayer from "../usePlayer";
import GameSidebar from "../../components/game/GameSidebar";
import LessonNode from "../../components/game/LessonNode";
import CompletedNode from "../../components/game/CompletedNode";
import LockedNode from "../../components/game/LockedNode";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import ProgressBar from "../../components/game/ProgressBar";
import LessonModal from "../../components/game/LessonModal";
import "../../components/game/duolingo-map.css";
import { learningPathTracks } from "../data/pathData";

export default function DuolingoLearningPathPage() {
  const { stats, toggleRoadmapNode, addXp, user, login, logout } = usePlayer();
  const [activeTrackId, setActiveTrackId] = useState("basics");
  const [selectedNode, setSelectedNode] = useState(null);
  const [toast, setToast] = useState("");

  const activeTrack = learningPathTracks.find((t) => t.id === activeTrackId) || learningPathTracks[0];
  const completedNodes = stats?.completedRoadmaps || [];
  const xp = stats?.totalXp || 0;
  const streak = stats?.streak || 1;
  const hearts = 5;

  // Determine current active node index (first uncompleted node)
  const activeNodeIndex = activeTrack.levels.findIndex((level) => !completedNodes.includes(level.id));
  const currentActiveIndex = activeNodeIndex === -1 ? activeTrack.levels.length - 1 : activeNodeIndex;

  function handleNodeClick(level, isLocked) {
    if (isLocked) {
      setToast("🔒 Complete previous lessons to unlock this node!");
      setTimeout(() => setToast(""), 3000);
      return;
    }
    setSelectedNode({
      id: level.id,
      title: level.title,
      subtitle: level.desc,
      xpReward: level.xp,
      questions: [
        {
          id: `${level.id}-q1`,
          question: `What is the core concept of "${level.title}"?`,
          options: [
            level.concepts?.[0] || "Contiguous memory indexing",
            "Random pointer dereferencing without checks",
            "Garbage collection overhead",
            "Infinite stack allocation"
          ],
          correct: 0,
          explanation: `In ${level.title}, key concepts include: ${level.concepts?.join(", ") || "fundamental execution logic"}.`
        },
        {
          id: `${level.id}-q2`,
          question: `Which of the following is associated with ${level.title}?`,
          options: [
            level.concepts?.[1] || "Efficient memory spatial locality",
            "O(N^3) time complexity guarantee",
            "Hardware interrupt disabling",
            "Unsafe dangling pointer creation"
          ],
          correct: 0,
          explanation: `Best practices in ${level.title} ensure optimal memory usage and time efficiency.`
        }
      ]
    });
  }

  function handleLessonComplete(nodeId, earnedXp) {
    if (!completedNodes.includes(nodeId)) {
      toggleRoadmapNode(nodeId, earnedXp);
    }
    addXp(earnedXp);
    setToast(`🎉 Lesson Completed! +${earnedXp} XP Gained!`);
    setTimeout(() => setToast(""), 3500);
    setSelectedNode(null);
  }

  // Calculate serpentine offset positions (S-curve path)
  const offsets = [0, -50, -85, -50, 0, 50, 85, 50];

  return (
    <div className="duo-page-container">
      {/* Left Navigation Sidebar */}
      <GameSidebar />

      {/* Main Content Area */}
      <div className="duo-main-content">
        {/* Center Path Column */}
        <div className="duo-center-column">
          
          {/* Track Selection Bar */}
          <div
            style={{
              display: "flex",
              gap: 8,
              width: "100%",
              overflowX: "auto",
              paddingBottom: 16,
              marginBottom: 20,
              scrollbarWidth: "none"
            }}
          >
            {learningPathTracks.map((tr) => {
              const isSelected = tr.id === activeTrackId;
              const count = tr.levels.filter((l) => completedNodes.includes(l.id)).length;
              return (
                <button
                  key={tr.id}
                  onClick={() => setActiveTrackId(tr.id)}
                  type="button"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 16,
                    background: isSelected ? "rgba(88, 204, 2, 0.15)" : "#131f24",
                    border: `2px solid ${isSelected ? "#58cc02" : "#202f36"}`,
                    color: isSelected ? "#58cc02" : "#84959f",
                    fontWeight: 800,
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span>{tr.icon}</span>
                  <span>{tr.title}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 6px",
                      borderRadius: 10,
                      background: isSelected ? "rgba(88, 204, 2, 0.25)" : "#202f36",
                      color: isSelected ? "#ffffff" : "#6b7d87"
                    }}
                  >
                    {count}/{tr.levels.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Unit Top Header Banner (Duolingo Style Banner) */}
          <div
            style={{
              width: "100%",
              background: `linear-gradient(135deg, ${activeTrack.color}dd, ${activeTrack.color}aa)`,
              borderRadius: 20,
              padding: "24px 28px",
              marginBottom: 40,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#ffffff",
              boxShadow: `0 10px 30px ${activeTrack.color}33`,
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1.5, opacity: 0.9 }}>
                SECTION 1, UNIT {learningPathTracks.findIndex((t) => t.id === activeTrackId) + 1}
              </div>
              <h1 style={{ margin: "4px 0 6px", fontSize: 24, fontWeight: 900 }}>
                {activeTrack.title}
              </h1>
              <p style={{ margin: 0, fontSize: 14, opacity: 0.95, fontWeight: 700, maxWidth: 360 }}>
                {activeTrack.tagline}
              </p>
            </div>
            <button
              type="button"
              style={{
                padding: "12px 20px",
                borderRadius: 16,
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
            >
              <span>📖</span>
              <span>Guidebook</span>
            </button>
          </div>

          {/* Serpentine Winding Path of Nodes */}
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 52,
              paddingTop: 20
            }}
          >
            {activeTrack.levels.map((level, idx) => {
              const isCompleted = completedNodes.includes(level.id);
              const isActive = idx === currentActiveIndex;
              const isLocked = !isCompleted && !isActive;
              const xOffset = offsets[idx % offsets.length];

              // Icons for nodes
              const nodeIcons = ["⭐", "📖", "🎧", " Dumbbell ", "🏆", "📦"];
              const nodeIcon = nodeIcons[idx % nodeIcons.length];

              return (
                <div
                  key={level.id}
                  style={{
                    transform: `translateX(${xOffset}px)`,
                    position: "relative",
                    transition: "transform 0.3s ease"
                  }}
                >
                  {/* Vertical Path Line Connecting to Next Node */}
                  {idx < activeTrack.levels.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 75,
                        left: "50%",
                        width: 8,
                        height: 54,
                        background: isCompleted ? "#58cc02" : "#202f36",
                        transform: `translateX(-50%) rotate(${(offsets[(idx + 1) % offsets.length] - xOffset) * 0.35}deg)`,
                        transformOrigin: "top center",
                        zIndex: 0,
                        borderRadius: 4
                      }}
                    />
                  )}

                  {/* Mascot Placement near Active Node */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: xOffset < 0 ? 110 : -130,
                        top: -10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pointerEvents: "none"
                      }}
                    >
                      <div
                        style={{
                          fontSize: 64,
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))",
                          animation: "duoBounce 2s infinite ease-in-out"
                        }}
                      >
                        🐻
                      </div>
                    </div>
                  )}

                  {/* Render Node State Component */}
                  {isCompleted ? (
                    <CompletedNode
                      title={level.title}
                      icon="✓"
                      xp={level.xp}
                      onClick={() => handleNodeClick(level, false)}
                    />
                  ) : isActive ? (
                    <LessonNode
                      title={level.title}
                      icon={nodeIcon}
                      calloutText="START"
                      onClick={() => handleNodeClick(level, false)}
                    />
                  ) : (
                    <LockedNode
                      title={level.title}
                      icon="🔒"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (Stats, Streaks, Daily Quests & Profile Box) */}
        <div className="duo-right-column">
          
          {/* Header Stats Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              padding: "12px 16px",
              background: "#131f24",
              borderRadius: 20,
              border: "2px solid #202f36"
            }}
          >
            <Streak count={streak} />
            <XPBar xp={xp} />
            <Hearts count={hearts} />
          </div>

          {/* Unlock Challenges Box */}
          <div
            style={{
              background: "#131f24",
              borderRadius: 20,
              border: "2px solid #202f36",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#ffffff" }}>
              Unlock Leaderboards
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "#202f36",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24
                }}
              >
                🔒
              </div>
              <div style={{ fontSize: 13, color: "#84959f", fontWeight: 700 }}>
                Complete 2 more lessons to unlock global competition
              </div>
            </div>
          </div>

          {/* Daily Quests Box */}
          <div
            style={{
              background: "#131f24",
              borderRadius: 20,
              border: "2px solid #202f36",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#ffffff" }}>
                Daily Quests
              </h3>
              <Link href="/quests" style={{ fontSize: 12, color: "#1cb0f6", fontWeight: 800, textDecoration: "none" }}>
                View All
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>⚡</span>
              <div style={{ flex: 1 }}>
                <ProgressBar
                  value={Math.min(10, Math.floor((xp % 100) / 10))}
                  max={10}
                  color="#ffc800"
                  showChest={true}
                  label="Earn 10 Points"
                />
              </div>
            </div>
          </div>

          {/* Profile & Firebase Auth Box */}
          <div
            style={{
              background: "#131f24",
              borderRadius: 20,
              border: "2px solid #202f36",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 14
            }}
          >
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#ffffff" }}>
              Create a Profile to Save Your Progress!
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: "#84959f", fontWeight: 600, lineHeight: 1.4 }}>
              Save your streaks, XP, badges and compete on global leaderboards.
            </p>

            {user ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#58cc02",
                      color: "#000",
                      fontWeight: 900,
                      display: "grid",
                      placeItems: "center"
                    }}
                  >
                    {user.email?.[0]?.toUpperCase() || "U"}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800 }}>{user.displayName || user.email}</div>
                    <div style={{ fontSize: 10, color: "#58cc02", fontWeight: 800 }}>FIREBASE SYNCED</div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  type="button"
                  style={{
                    padding: "6px 12px",
                    borderRadius: 10,
                    background: "#202f36",
                    border: "none",
                    color: "#ff4b4b",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer"
                  }}
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  onClick={login}
                  type="button"
                  style={{
                    padding: "14px",
                    borderRadius: 14,
                    background: "#58cc02",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "0 4px 0 #46a302",
                    fontWeight: 900,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  Create Profile (Google)
                </button>
                <button
                  onClick={login}
                  type="button"
                  style={{
                    padding: "14px",
                    borderRadius: 14,
                    background: "#1cb0f6",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "0 4px 0 #1899d6",
                    fontWeight: 900,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "#58cc02",
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: 20,
            fontWeight: 900,
            fontSize: 14,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            border: "2px solid #ffffff",
            fontFamily: "var(--font-display), sans-serif"
          }}
        >
          {toast}
        </div>
      )}

      {/* Interactive DSA Lesson Modal */}
      {selectedNode && (
        <LessonModal
          nodeData={selectedNode}
          onClose={() => setSelectedNode(null)}
          onComplete={handleLessonComplete}
        />
      )}
    </div>
  );
}
