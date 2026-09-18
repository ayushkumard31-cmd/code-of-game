"use client";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { interviewCategories, interviewQuestions } from "../data/interviewData";

export default function InterviewPrepPage() {
  const { stats, recordSolvedProblem } = usePlayer();
  const [selectedCat, setSelectedCat] = useState("all");
  const [activeQuestionId, setActiveQuestionId] = useState(interviewQuestions[0].id);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [revealedHint, setRevealedHint] = useState(false);
  const [revealedCode, setRevealedCode] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => setTimerSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  const filteredQuestions = interviewQuestions.filter((q) => {
    if (selectedCat === "all") return true;
    if (selectedCat === "easy" || selectedCat === "medium" || selectedCat === "hard") {
      return q.difficulty === selectedCat;
    }
    return q.category === selectedCat;
  });

  const activeQuestion = interviewQuestions.find((q) => q.id === activeQuestionId) || interviewQuestions[0];
  const isSolved = !!stats?.solvedProblems?.[activeQuestion.id];

  function handleSolve() {
    recordSolvedProblem(activeQuestion.id, "interview", 80);
    setToast("🎉 Problem Mastered! +80 XP recorded in your profile");
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
          <small>FAANG & HIGH-GROWTH TECH TRACK</small>
          <h1>🧠 Interview Preparation</h1>
          <p>
            Curated high-frequency coding interview questions tagged by difficulty and company (Google, Amazon, Meta, Uber) with mock timer and evaluation rubrics.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="nexus-tabs">
          {interviewCategories.map((cat) => (
            <button
              key={cat.id}
              className={`nexus-tab-btn ${selectedCat === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCat(cat.id)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Layout: Question List + Active Question Workspace */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "340px minmax(0, 1fr)",
          gap: 28,
          alignItems: "start"
        }}>
          {/* Question List Sidebar */}
          <div style={{ display: "grid", gap: 10 }}>
            {filteredQuestions.map((q) => {
              const isSelected = q.id === activeQuestion.id;
              const solved = !!stats?.solvedProblems?.[q.id];
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setActiveQuestionId(q.id);
                    setRevealedHint(false);
                    setRevealedCode(false);
                  }}
                  type="button"
                  style={{
                    padding: "16px 18px",
                    borderRadius: 6,
                    border: `1px solid ${isSelected ? "#a9ff43" : "#222b24"}`,
                    background: isSelected ? "#141c14" : "#0d110e",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span className={`tag-badge ${
                      q.difficulty === "easy" ? "tag-easy" : q.difficulty === "medium" ? "tag-medium" : "tag-hard"
                    }`}>
                      {q.difficulty.toUpperCase()}
                    </span>
                    <span style={{ color: "#747d75", fontSize: 10, fontFamily: "var(--font-mono)" }}>
                      Asked: {q.frequency}
                    </span>
                  </div>

                  <b style={{ display: "block", color: isSelected ? "#a9ff43" : "#d8dfd9", fontSize: 13, marginBottom: 4 }}>
                    {q.title}
                  </b>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "#6a736c" }}>
                    <span>🏢 {q.company}</span>
                    {solved && <span style={{ color: "#a9ff43", fontWeight: 800 }}>✓ Solved</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Workspace */}
          <div className="nexus-card">
            {/* Header with Mock Interview Timer */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #202922",
              paddingBottom: 16,
              marginBottom: 20,
              flexWrap: "wrap",
              gap: 12
            }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className={`tag-badge ${
                  activeQuestion.difficulty === "easy" ? "tag-easy" : activeQuestion.difficulty === "medium" ? "tag-medium" : "tag-hard"
                }`}>
                  {activeQuestion.difficulty.toUpperCase()}
                </span>
                <span className="tag-badge tag-dsa">Top Asked: {activeQuestion.company}</span>
              </div>

              {/* Mock Timer */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#0a0e0b",
                padding: "6px 12px",
                borderRadius: 6,
                border: "1px solid #1c261e"
              }}>
                <span style={{ fontSize: 11, color: "#79827a", fontFamily: "var(--font-mono)" }}>
                  MOCK TIMER:
                </span>
                <b style={{ color: "#a9ff43", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                  {formatTime(timerSeconds)}
                </b>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  type="button"
                  style={{
                    background: isTimerRunning ? "#ff5340" : "#a9ff43",
                    color: "#0b0d0c",
                    border: 0,
                    borderRadius: 4,
                    padding: "3px 8px",
                    fontWeight: 800,
                    fontSize: 9,
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)"
                  }}
                >
                  {isTimerRunning ? "PAUSE" : "START"}
                </button>
              </div>
            </div>

            <h2 style={{ fontSize: 24, color: "#fff", fontWeight: 800, margin: "0 0 14px" }}>
              {activeQuestion.title}
            </h2>

            <p style={{ color: "#9ea69f", fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              {activeQuestion.description}
            </p>

            {/* Complexity Targets */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 24
            }}>
              <div style={{ padding: "10px 14px", borderRadius: 6, background: "#090d0a", border: "1px solid #1c241e", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                <span style={{ color: "#7a847b", display: "block" }}>TARGET TIME COMPLEXITY:</span>
                <b style={{ color: "#a9ff43", fontSize: 13 }}>{activeQuestion.timeComplexity}</b>
              </div>
              <div style={{ padding: "10px 14px", borderRadius: 6, background: "#090d0a", border: "1px solid #1c241e", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                <span style={{ color: "#7a847b", display: "block" }}>TARGET SPACE COMPLEXITY:</span>
                <b style={{ color: "#ffb627", fontSize: 13 }}>{activeQuestion.spaceComplexity}</b>
              </div>
            </div>

            {/* Rubric */}
            <div style={{ marginBottom: 24 }}>
              <b style={{ display: "block", color: "#fff", fontSize: 12, fontFamily: "var(--font-mono)", marginBottom: 8 }}>
                INTERVIEW EVALUATION RUBRIC:
              </b>
              <div style={{ display: "grid", gap: 6 }}>
                {activeQuestion.rubric.map((rule, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 8, fontSize: 12, color: "#8c948d" }}>
                    <span style={{ color: "#a9ff43" }}>✓</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint & Solution Toggles */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <button
                className="btn-secondary"
                onClick={() => setRevealedHint(!revealedHint)}
                type="button"
                style={{ fontSize: 11 }}
              >
                💡 {revealedHint ? "Hide Interviewer Hint" : "Get Interviewer Hint"}
              </button>
              <button
                className="btn-secondary"
                onClick={() => setRevealedCode(!revealedCode)}
                type="button"
                style={{ fontSize: 11 }}
              >
                📝 {revealedCode ? "Hide Optimal Solution" : "View Optimal Solution"}
              </button>
            </div>

            {revealedHint && (
              <div style={{
                padding: "14px 18px",
                borderRadius: 6,
                background: "#181409",
                border: "1px solid #423512",
                color: "#ffc84b",
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                marginBottom: 20
              }}>
                <b>Hint from Interviewer:</b> {activeQuestion.hint}
              </div>
            )}

            {revealedCode && (
              <div className="code-block-viewer">
                <div className="code-block-header">
                  <span>OPTIMAL SOLUTION TEMPLATE</span>
                  <span>{activeQuestion.timeComplexity}</span>
                </div>
                <pre>{activeQuestion.starterCode}</pre>
              </div>
            )}

            {/* Action Bar */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
              <button className="btn-primary" onClick={handleSolve} type="button">
                {isSolved ? "✓ Solved & Recorded" : "Mark as Mastered (+80 XP)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
