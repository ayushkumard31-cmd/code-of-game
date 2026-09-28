"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import { projectTiers, projectsList } from "../data/projectsData";
import usePlayer from "../usePlayer";
import "../../components/game/duolingo-map.css";

export default function ProjectsHubPage() {
  const { stats, recordProjectCompleted } = usePlayer();
  const [selectedTier, setSelectedTier] = useState("all");
  const [activeProjectId, setActiveProjectId] = useState(projectsList[0].id);
  const [toast, setToast] = useState("");

  const completedList = stats?.completedProjects || [];

  const filteredProjects = projectsList.filter(
    (p) => selectedTier === "all" || p.tier === selectedTier
  );

  const activeProject = projectsList.find((p) => p.id === activeProjectId) || projectsList[0];
  const isCompleted = completedList.includes(activeProject.id);

  function handleCompleteProject(project) {
    if (completedList.includes(project.id)) {
      setToast("Project already marked as completed!");
    } else {
      recordProjectCompleted(project.id, project.xpReward);
      setToast(`🎉 Project Milestone Unlocked! +${project.xpReward} XP`);
    }
    setTimeout(() => setToast(""), 2500);
  }

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#58cc02", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                REAL-WORLD SYSTEMS LAB
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🛠️ Hands-on Projects
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={stats?.streak || 1} />
              <XPBar xp={stats?.totalXp || 0} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Tier selector */}
          <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
            <button
              onClick={() => setSelectedTier("all")}
              type="button"
              style={{
                padding: "10px 18px",
                borderRadius: 14,
                background: selectedTier === "all" ? "rgba(88,204,2,0.15)" : "#131f24",
                border: `2px solid ${selectedTier === "all" ? "#58cc02" : "#202f36"}`,
                color: selectedTier === "all" ? "#58cc02" : "#84959f",
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer"
              }}
            >
              All Projects
            </button>
            {projectTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                type="button"
                style={{
                  padding: "10px 18px",
                  borderRadius: 14,
                  background: selectedTier === tier.id ? "rgba(88,204,2,0.15)" : "#131f24",
                  border: `2px solid ${selectedTier === tier.id ? "#58cc02" : "#202f36"}`,
                  color: selectedTier === tier.id ? "#58cc02" : "#84959f",
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: "pointer"
                }}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 24 }}>
            {/* Project List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredProjects.map((proj) => {
                const isSelected = activeProjectId === proj.id;
                const isDone = completedList.includes(proj.id);
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectId(proj.id)}
                    type="button"
                    style={{
                      padding: "16px",
                      borderRadius: 16,
                      background: isSelected ? "rgba(88,204,2,0.12)" : "#131f24",
                      border: `2px solid ${isSelected ? "#58cc02" : "#202f36"}`,
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 12
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{isDone ? "✅" : "🔨"}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{proj.title}</div>
                      <div style={{ fontSize: 11, color: "#84959f" }}>{proj.difficulty} • +{proj.xpReward} XP</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Project Viewer */}
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <small style={{ color: "#58cc02", fontWeight: 800, textTransform: "uppercase" }}>{activeProject.tier.toUpperCase()} PROJECT</small>
                  <h2 style={{ color: "#fff", fontSize: 24, margin: "4px 0 0", fontWeight: 900 }}>{activeProject.title}</h2>
                </div>
                <button
                  onClick={() => handleCompleteProject(activeProject)}
                  type="button"
                  style={{
                    padding: "12px 20px",
                    borderRadius: 14,
                    background: isCompleted ? "#202f36" : "#58cc02",
                    color: "#fff",
                    border: "none",
                    fontWeight: 900,
                    fontSize: 13,
                    cursor: "pointer"
                  }}
                >
                  {isCompleted ? "✓ COMPLETED" : `COMPLETE PROJECT (+${activeProject.xpReward} XP)`}
                </button>
              </div>

              <p style={{ color: "#84959f", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{activeProject.tagline}</p>

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 900, marginBottom: 12 }}>Architecture Specs</h3>
                <ul style={{ color: "#84959f", fontSize: 14, lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
                  {activeProject.milestones?.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ color: "#ffc800", fontSize: 16, fontWeight: 900, marginBottom: 12 }}>Starter Template</h3>
                <div style={{ background: "#0b0d0c", border: "2px solid #202f36", borderRadius: 14, padding: 20 }}>
                  <pre style={{ margin: 0, color: "#a9ff43", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                    {activeProject.starterSnippet || "// Implementation template available in repository"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 9999, background: "#58cc02", color: "#fff", padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14 }}>
          {toast}
        </div>
      )}
    </div>
  );
}
