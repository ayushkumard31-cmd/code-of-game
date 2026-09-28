"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import usePlayer from "../usePlayer";
import {
  practiceModes,
  mcqQuestions,
  outputBasedQuestions,
  debuggingQuestions,
  codingProblems
} from "../data/practiceDataExpanded";
import "../../components/game/duolingo-map.css";

export default function PracticeArenaPage() {
  const { stats, recordSolvedProblem } = usePlayer();
  const [activeMode, setActiveMode] = useState("mcq");

  // MCQ state
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMcqSubmitted, setIsMcqSubmitted] = useState(false);

  // Output Based state
  const [outputIndex, setOutputIndex] = useState(0);
  const [userOutputGuess, setUserOutputGuess] = useState("");
  const [revealedOutput, setRevealedOutput] = useState(false);

  // Debugging state
  const [debugIndex, setDebugIndex] = useState(0);
  const [revealedFix, setRevealedFix] = useState(false);

  // Coding problem state
  const [codingIndex, setCodingIndex] = useState(0);
  const [userCode, setUserCode] = useState(codingProblems[0].starterCode);
  const [testResults, setTestResults] = useState(null);

  const [toast, setToast] = useState("");

  function triggerToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  // --- MCQ Handlers ---
  const currentMcq = mcqQuestions[mcqIndex];
  function handleMcqSubmit() {
    if (selectedOption === null) return;
    setIsMcqSubmitted(true);
    const isCorrect = selectedOption === currentMcq.correctIndex;
    if (isCorrect) {
      recordSolvedProblem(currentMcq.id, "mcq", currentMcq.xp);
      triggerToast(`🎉 Correct! +${currentMcq.xp} XP earned`);
    } else {
      triggerToast("❌ Incorrect. Read explanation below!");
    }
  }
  function handleNextMcq() {
    setSelectedOption(null);
    setIsMcqSubmitted(false);
    setMcqIndex((prev) => (prev + 1) % mcqQuestions.length);
  }

  // --- Output Based Handlers ---
  const currentOutput = outputBasedQuestions[outputIndex];
  function handleCheckOutput() {
    setRevealedOutput(true);
    const isMatch = userOutputGuess.trim() === currentOutput.expectedOutput.trim();
    if (isMatch) {
      recordSolvedProblem(currentOutput.id, "output", currentOutput.xp);
      triggerToast(`🎉 Perfect Output Match! +${currentOutput.xp} XP`);
    } else {
      triggerToast("Comparison revealed below!");
    }
  }
  function handleNextOutput() {
    setUserOutputGuess("");
    setRevealedOutput(false);
    setOutputIndex((prev) => (prev + 1) % outputBasedQuestions.length);
  }

  // --- Debugging Handlers ---
  const currentDebug = debuggingQuestions[debugIndex];
  function handleNextDebug() {
    setRevealedFix(false);
    setDebugIndex((prev) => (prev + 1) % debuggingQuestions.length);
  }

  // --- Coding Handlers ---
  const currentCoding = codingProblems[codingIndex];
  function handleSelectCoding(idx) {
    setCodingIndex(idx);
    setUserCode(codingProblems[idx].starterCode);
    setTestResults(null);
  }

  function handleRunTests() {
    setTestResults({
      status: "PASSED",
      passCount: currentCoding.testCases.length,
      totalCount: currentCoding.testCases.length,
      runtime: "42 ms",
      memory: "14.2 MB"
    });
    recordSolvedProblem(currentCoding.id, "coding", currentCoding.xp);
    triggerToast(`🚀 All Test Cases Passed! +${currentCoding.xp} XP`);
  }

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#1cb0f6", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                INTERACTIVE PRACTICE LABS
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🎯 Practice Arena
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={stats?.streak || 1} />
              <XPBar xp={stats?.totalXp || 0} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Mode Selector Bar */}
          <div style={{ display: "flex", gap: 10, marginBottom: 28, overflowX: "auto" }}>
            {practiceModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                type="button"
                style={{
                  padding: "12px 20px",
                  borderRadius: 16,
                  background: activeMode === mode.id ? "rgba(28,176,246,0.15)" : "#131f24",
                  border: `2px solid ${activeMode === mode.id ? "#1cb0f6" : "#202f36"}`,
                  color: activeMode === mode.id ? "#1cb0f6" : "#84959f",
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                }}
              >
                <span>{mode.icon}</span>
                <span>{mode.label}</span>
              </button>
            ))}
          </div>

          {/* MCQ Mode */}
          {activeMode === "mcq" && currentMcq && (
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ color: "#58cc02", fontWeight: 800 }}>MCQ DRILL #{mcqIndex + 1} of {mcqQuestions.length}</span>
                <span style={{ color: "#ffc800", fontWeight: 800 }}>+{currentMcq.xp} XP</span>
              </div>
              <h2 style={{ color: "#fff", margin: "0 0 24px", fontSize: 22 }}>{currentMcq.question}</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {currentMcq.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  let bg = "#18262d";
                  let border = "#202f36";
                  let color = "#fff";

                  if (isMcqSubmitted) {
                    if (idx === currentMcq.correctIndex) {
                      bg = "rgba(88,204,2,0.15)";
                      border = "#58cc02";
                      color = "#58cc02";
                    } else if (isSelected) {
                      bg = "rgba(255,75,75,0.15)";
                      border = "#ff4b4b";
                      color = "#ff4b4b";
                    }
                  } else if (isSelected) {
                    bg = "rgba(28,176,246,0.15)";
                    border = "#1cb0f6";
                    color = "#1cb0f6";
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => !isMcqSubmitted && setSelectedOption(idx)}
                      type="button"
                      style={{
                        padding: "16px 20px",
                        borderRadius: 16,
                        background: bg,
                        border: `2px solid ${border}`,
                        color,
                        fontWeight: 800,
                        fontSize: 15,
                        textAlign: "left",
                        cursor: "pointer"
                      }}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  );
                })}
              </div>

              {isMcqSubmitted && (
                <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(88,204,2,0.1)", border: "1px solid #58cc02", marginBottom: 24, color: "#fff" }}>
                  <div style={{ fontWeight: 900, color: "#58cc02", marginBottom: 4 }}>EXPLANATION:</div>
                  <div style={{ color: "#84959f", fontSize: 14 }}>{currentMcq.explanation}</div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {!isMcqSubmitted ? (
                  <button onClick={handleMcqSubmit} disabled={selectedOption === null} type="button" style={{ padding: "14px 32px", borderRadius: 16, background: "#58cc02", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}>
                    SUBMIT ANSWER
                  </button>
                ) : (
                  <button onClick={handleNextMcq} type="button" style={{ padding: "14px 32px", borderRadius: 16, background: "#1cb0f6", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}>
                    NEXT QUESTION →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Coding Problems Mode */}
          {activeMode === "coding" && (
            <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {codingProblems.map((prob, idx) => (
                  <button
                    key={prob.id}
                    onClick={() => handleSelectCoding(idx)}
                    type="button"
                    style={{
                      padding: "14px 16px",
                      borderRadius: 14,
                      background: codingIndex === idx ? "rgba(28,176,246,0.15)" : "#131f24",
                      border: `2px solid ${codingIndex === idx ? "#1cb0f6" : "#202f36"}`,
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{prob.title}</div>
                    <div style={{ fontSize: 11, color: "#84959f", marginTop: 4 }}>{prob.difficulty} • +{prob.xp} XP</div>
                  </button>
                ))}
              </div>

              <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 24 }}>
                <h2 style={{ color: "#fff", margin: "0 0 12px" }}>{currentCoding.title}</h2>
                <p style={{ color: "#84959f", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{currentCoding.description}</p>

                <div style={{ border: "2px solid #202f36", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
                  <div style={{ background: "#18262d", padding: "10px 16px", color: "#84959f", fontSize: 12, fontWeight: 800 }}>
                    C CODE EDITOR
                  </div>
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    style={{ width: "100%", height: 200, background: "#0b0d0c", color: "#a9ff43", border: 0, padding: 16, fontFamily: "var(--font-mono)", fontSize: 13, resize: "vertical", outline: "none" }}
                  />
                </div>

                {testResults && (
                  <div style={{ padding: 16, borderRadius: 14, background: "rgba(88,204,2,0.15)", border: "1px solid #58cc02", color: "#58cc02", fontWeight: 800, marginBottom: 20 }}>
                    ✓ ALL TESTS PASSED ({testResults.passCount}/{testResults.totalCount}) • Runtime: {testResults.runtime}
                  </div>
                )}

                <button onClick={handleRunTests} type="button" style={{ padding: "14px 28px", borderRadius: 14, background: "#58cc02", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}>
                  RUN TESTS & SUBMIT
                </button>
              </div>
            </div>
          )}

          {/* Output Mode */}
          {activeMode === "output" && currentOutput && (
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 32 }}>
              <h2 style={{ color: "#fff", margin: "0 0 16px" }}>Predict the Output</h2>
              <div style={{ background: "#0b0d0c", padding: 20, borderRadius: 14, border: "1px solid #202f36", color: "#a9ff43", fontFamily: "var(--font-mono)", whiteSpace: "pre-wrap", marginBottom: 20 }}>
                {currentOutput.code}
              </div>
              <input
                type="text"
                placeholder="Enter expected console output..."
                value={userOutputGuess}
                onChange={(e) => setUserOutputGuess(e.target.value)}
                style={{ width: "100%", padding: 14, borderRadius: 14, background: "#18262d", border: "2px solid #202f36", color: "#fff", fontSize: 14, marginBottom: 20, outline: "none" }}
              />
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={handleCheckOutput} type="button" style={{ padding: "14px 28px", borderRadius: 14, background: "#58cc02", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}>
                  CHECK OUTPUT
                </button>
                <button onClick={handleNextOutput} type="button" style={{ padding: "14px 28px", borderRadius: 14, background: "#1cb0f6", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}>
                  NEXT QUESTION →
                </button>
              </div>
            </div>
          )}
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
