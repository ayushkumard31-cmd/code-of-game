"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import { subjectivePracticeQuestions } from "../practiceData";
import usePlayer from "../usePlayer";

export default function PracticePage() {
  const { stats, setPracticeStatus, savePracticeNote } = usePlayer();
  const [practiceTopic, setPracticeTopic] = useState("All");
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [revealedHints, setRevealedHints] = useState({});
  const [checkedRubrics, setCheckedRubrics] = useState({});
  const [writtenAnswers, setWrittenAnswers] = useState({});
  const [toast, setToast] = useState("");

  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  function triggerToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  const filteredPractices = subjectivePracticeQuestions.filter(
    (q) => practiceTopic === "All" || q.topic === practiceTopic
  );

  const masteredCount = Object.values(stats?.practiceStatus || {}).filter((s) => s === "mastered").length;

  return (
    <main className={`shell storefront ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      <Navbar />
      {toast && <div className="adm-toast">{toast}</div>}

      <section className="hs-practice" style={{ borderTop: 0, paddingTop: 48 }}>
        <div className="hs-inner">
          <div className="zero-xp-badge">
            <span>0 XP</span> · <b>TEST YOUR LEARNING (NO XP / NO PRESSURE)</b>
          </div>
          <div className="hs-head">
            <small>SUBJECTIVE DSA DEEP DIVE</small>
            <h2>Self-Evaluation & Conceptual Mastery</h2>
            <p>
              Type out your algorithmic approach, proof of complexity, and architectural trade-offs.
              The primary purpose of this section is testing genuine conceptual depth.
            </p>
          </div>

          <div className="practice-progress-strip">
            <div>
              <span>YOUR MASTERY TRACKER</span>
              <b style={{ display: "block", marginTop: 4 }}>
                {masteredCount} / {subjectivePracticeQuestions.length} Questions Mastered (
                {Math.round((masteredCount / subjectivePracticeQuestions.length) * 100)}%)
              </b>
            </div>
            <button
              className="adm-btn adm-sm"
              type="button"
              onClick={() => {
                const allKeys = subjectivePracticeQuestions.map((q) => q.id);
                const allOpen = allKeys.every((k) => revealedSolutions[k]);
                const next = {};
                allKeys.forEach((k) => { next[k] = !allOpen; });
                setRevealedSolutions(next);
              }}
            >
              TOGGLE ALL SOLUTIONS
            </button>
          </div>

          {/* Topic filter bar */}
          <div className="practice-filter-bar">
            {[
              "All",
              "Arrays & Memory",
              "Linked Lists",
              "Stacks & Queues",
              "Trees & BST",
              "Hash Tables",
              "Graphs & Searching",
              "Sorting & Complexity",
              "System & Architecture",
            ].map((top) => (
              <button
                key={top}
                type="button"
                className={`practice-pill ${practiceTopic === top ? "active" : ""}`}
                onClick={() => setPracticeTopic(top)}
              >
                {top}
              </button>
            ))}
          </div>

          {/* Practice Questions */}
          <div className="practice-list">
            {filteredPractices.map((q) => {
              const isRevealed = Boolean(revealedSolutions[q.id]);
              const isHintRevealed = Boolean(revealedHints[q.id]);
              const currentStatus = stats?.practiceStatus?.[q.id] || "unattempted";
              const savedNote = writtenAnswers[q.id] ?? (stats?.practiceNotes?.[q.id] || "");

              return (
                <div key={q.id} className="practice-card">
                  <div className="practice-card-head">
                    <span className="practice-topic-tag">{q.topic}</span>
                    <span className={`practice-diff diff-${q.difficulty}`}>{q.difficulty}</span>
                  </div>
                  <h3>{q.title}</h3>
                  <p className="practice-prompt">{q.prompt}</p>

                  <textarea
                    className="practice-textarea"
                    placeholder="Type your explanation, algorithmic approach, and time/space complexity analysis..."
                    value={savedNote}
                    onChange={(e) => {
                      const val = e.target.value;
                      setWrittenAnswers((prev) => ({ ...prev, [q.id]: val }));
                      savePracticeNote(q.id, val);
                    }}
                  />

                  <div className="practice-actions-row">
                    <button
                      type="button"
                      className="practice-hint-btn"
                      onClick={() => setRevealedHints((prev) => ({ ...prev, [q.id]: !isHintRevealed }))}
                    >
                      💡 {isHintRevealed ? "HIDE HINT" : "SHOW HINT"}
                    </button>
                    <button
                      type="button"
                      className="practice-reveal-btn"
                      onClick={() => setRevealedSolutions((prev) => ({ ...prev, [q.id]: !isRevealed }))}
                    >
                      {isRevealed ? "HIDE MODEL SOLUTION" : "👁️ CHECK CONCEPTS & REVEAL SOLUTION"}
                    </button>
                  </div>

                  {isHintRevealed && (
                    <p className="hint" style={{ marginBottom: 16 }}>
                      // HINT: {q.hint}
                    </p>
                  )}

                  {isRevealed && (
                    <div className="practice-solution-box">
                      <h4>KEY CONCEPTS CHECKLIST (Did you cover these?):</h4>
                      <div className="checklist-group">
                        {q.keyConcepts.map((item, idx) => {
                          const checkKey = `${q.id}-rubric-${idx}`;
                          const isChecked = Boolean(checkedRubrics[checkKey]);
                          return (
                            <label key={checkKey} className={`checklist-item ${isChecked ? "checked" : ""}`}>
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => {
                                  setCheckedRubrics((prev) => ({ ...prev, [checkKey]: e.target.checked }));
                                }}
                              />
                              <span>{item}</span>
                            </label>
                          );
                        })}
                      </div>

                      <h4>DETAILED ARCHITECTURE & MODEL PROOF:</h4>
                      <pre className="practice-model-code">{q.modelAnswer}</pre>

                      <div className="self-eval-box">
                        <span>SELF EVALUATION:</span>
                        <button
                          type="button"
                          className={`self-eval-btn ${currentStatus === "mastered" ? "eval-active-mastered" : ""}`}
                          onClick={() => {
                            setPracticeStatus(q.id, "mastered");
                            triggerToast(`Marked "${q.title}" as Mastered!`);
                          }}
                        >
                          🟢 Mastered Concept
                        </button>
                        <button
                          type="button"
                          className={`self-eval-btn ${currentStatus === "review" ? "eval-active-review" : ""}`}
                          onClick={() => {
                            setPracticeStatus(q.id, "review");
                            triggerToast(`Marked "${q.title}" for Practice`);
                          }}
                        >
                          🟡 Needs Practice
                        </button>
                        <button
                          type="button"
                          className={`self-eval-btn ${currentStatus === "revisit" ? "eval-active-revisit" : ""}`}
                          onClick={() => {
                            setPracticeStatus(q.id, "revisit");
                            triggerToast(`Marked "${q.title}" to Revisit Later`);
                          }}
                        >
                          ⏳ Revisit Later
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
