"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { projectTiers, projectsList } from "../data/projectsData";

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
          <small>REAL-WORLD SYSTEMS LAB</small>
          <h1>🛠️ Hands-on Projects</h1>
          <p>
            Build industry-standard software from scratch: from CLI expression parsers to multi-threaded web servers and mini-Redis engines.
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="nexus-tabs">
          <button
            className={`nexus-tab-btn ${selectedTier === "all" ? "active" : ""}`}
            onClick={() => setSelectedTier("all")}
            type="button"
          >
            All Projects ({projectsList.length})
          </button>
          {projectTiers.map((tier) => (
            <button
              key={tier.id}
              className={`nexus-tab-btn ${selectedTier === tier.id ? "active" : ""}`}
              onClick={() => setSelectedTier(tier.id)}
              type="button"
            >
              <span>{tier.icon}</span>
              <span>{tier.label}</span>
            </button>
          ))}
        </div>

        {/* Layout: Project Cards Grid + Selected Deep-Dive */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(360px, 0.8fr)",
          gap: 30,
          alignItems: "start"
        }}>
          {/* Projects Shelf */}
          <div style={{ display: "grid", gap: 16 }}>
            {filteredProjects.map((proj) => {
              const isSelected = proj.id === activeProject.id;
              const isDone = completedList.includes(proj.id);
              return (
                <div
                  key={proj.id}
                  className="nexus-card"
                  onClick={() => setActiveProjectId(proj.id)}
                  style={{
                    cursor: "pointer",
                    border: `1px solid ${isSelected ? "#a9ff43" : "#222a24"}`,
                    background: isSelected ? "#141c14" : "#101411"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span className={`tag-badge ${
                        proj.tier === "beginner" ? "tag-easy" : proj.tier === "intermediate" ? "tag-medium" : "tag-hard"
                      }`}>
                        {proj.difficulty}
                      </span>
                      <span style={{ color: "#79827a", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                        ⏱️ {proj.estimatedTime}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ color: "#ffb627", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                        ⭐ +{proj.xpReward} XP
                      </span>
                      {isDone && (
                        <span style={{ color: "#a9ff43", fontSize: 11, fontWeight: 800 }}>
                          ✓ BUILT
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#fff", fontWeight: 700 }}>
                    {proj.title}
                  </h3>

                  <p style={{ margin: "0 0 14px", color: "#8a948c", fontSize: 13, lineHeight: 1.5 }}>
                    {proj.tagline}
                  </p>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {proj.languages.map((lang, lIdx) => (
                      <span
                        key={lIdx}
                        style={{
                          fontSize: 10,
                          fontFamily: "var(--font-mono)",
                          padding: "2px 7px",
                          borderRadius: 4,
                          background: "#0a0e0b",
                          border: "1px solid #1c261e",
                          color: "#9db8a0"
                        }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Details / Blueprint Panel */}
          <div className="nexus-card" style={{ position: "sticky", top: 80 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span className="tag-badge tag-dsa">PROJECT BLUEPRINT</span>
              <button
                className={isCompleted ? "btn-secondary" : "btn-primary"}
                onClick={() => handleCompleteProject(activeProject)}
                type="button"
                style={{ padding: "8px 14px", fontSize: 11 }}
              >
                {isCompleted ? "✓ Completed" : `Mark Built (+${activeProject.xpReward} XP)`}
              </button>
            </div>

            <h2 style={{ fontSize: 22, color: "#fff", fontWeight: 800, margin: "0 0 10px" }}>
              {activeProject.title}
            </h2>

            {/* Architecture flow */}
            <div style={{
              padding: "12px 14px",
              borderRadius: 6,
              background: "#080c09",
              border: "1px solid #1d281f",
              margin: "14px 0",
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              color: "#a9ff43",
              lineHeight: 1.5
            }}>
              <b style={{ color: "#fff", display: "block", marginBottom: 4 }}>System Architecture:</b>
              {activeProject.architecture}
            </div>

            {/* Step-by-Step Milestones */}
            <b style={{ display: "block", color: "#fff", fontSize: 12, fontFamily: "var(--font-mono)", margin: "16px 0 8px" }}>
              IMPLEMENTATION CHECKLIST:
            </b>
            <div style={{ display: "grid", gap: 8, marginBottom: 20 }}>
              {activeProject.milestones.map((ms, idx) => (
                <div key={idx} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, color: "#9ca59e" }}>
                  <span style={{ color: "#a9ff43", fontWeight: 800 }}>□</span>
                  <span>{ms}</span>
                </div>
              ))}
            </div>

            {/* Starter Code Skeleton */}
            <div className="code-block-viewer">
              <div className="code-block-header">
                <span>STARTER BOILERPLATE</span>
              </div>
              <pre style={{ maxHeight: 240 }}>{activeProject.starterSnippet}</pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
