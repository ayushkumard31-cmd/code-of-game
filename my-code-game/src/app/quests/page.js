"use client";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import "../../components/game/duolingo-map.css";
import { buildCampaign, getRank, tierConfig } from "../questionBank";
import usePlayer from "../usePlayer";

function StackQuestionVisual({ prompt }) {
  const [items, setItems] = useState(() => (prompt?.match(/\d+/g) || []).slice(-3).map(Number));
  const [status, setStatus] = useState("READ FROM BOTTOM → TOP");
  function push() {
    if (items.length >= 5) { setStatus("OVERFLOW — STACK IS FULL"); return; }
    const value = Math.floor(Math.random() * 90) + 10;
    setItems((curr) => [...curr, value]);
    setStatus(`PUSHED ${value} TO TOP`);
  }
  function pop() {
    if (!items.length) { setStatus("UNDERFLOW — STACK IS EMPTY"); return; }
    const value = items[items.length - 1];
    setItems((curr) => curr.slice(0, -1));
    setStatus(`POPPED ${value} FROM TOP`);
  }
  return (
    <div className="question-stack-lab">
      <div>
        <small>LIVE STACK VISUALIZER</small>
        <b>Which item leaves first?</b>
        <p>In LIFO, the newest top item is removed first.</p>
        <code>{status}</code>
        <div>
          <button onClick={push} type="button">+ PUSH</button>
          <button onClick={pop} type="button" disabled={!items.length}>− POP</button>
        </div>
      </div>
      <div className="question-stack">
        <span>TOP ↓</span>
        <div>{[...items].reverse().map((item, index) => <i key={`${item}-${items.length - index}`}>{item}</i>)}</div>
        <strong>BOTTOM</strong>
      </div>
    </div>
  );
}

function QuestsContent() {
  const searchParams = useSearchParams();
  const [screen, setScreen] = useState("lobby");
  const [mode, setMode] = useState("dsa");
  const [level, setLevel] = useState(0);
  const [choice, setChoice] = useState(null);
  const [lives, setLives] = useState(3);
  const [xp, setXp] = useState(0);
  const [hint, setHint] = useState(false);
  const [message, setMessage] = useState("");
  const [eliminatedChoices, setEliminatedChoices] = useState([]);

  const {
    user,
    stats,
    loading,
    saveRun,
    completeLevel,
    finishRun,
    addXp,
  } = usePlayer();

  const campaign = buildCampaign(mode);
  const current = campaign[level] || campaign[0];
  const rank = getRank(xp);
  const tier = tierConfig[current?.tier || 0] || tierConfig[0];
  const hasResumed = useRef(false);

  const hasExtraHeartPerk = stats?.equippedPerks?.includes("perk-extra-heart") && stats?.claimedRewards?.includes("perk-extra-heart");
  const maxLives = hasExtraHeartPerk ? 4 : 3;
  const has5050Perk = stats?.equippedPerks?.includes("perk-50-50") && stats?.claimedRewards?.includes("perk-50-50");
  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  useEffect(() => {
    const qMode = searchParams.get("mode");
    const qLevel = searchParams.get("level");
    if (qMode) {
      const parsedLevel = qLevel ? parseInt(qLevel, 10) : 0;
      enterCampaign(qMode, parsedLevel);
    }
  }, [searchParams]);

  function enterCampaign(nextMode, targetLevel = null) {
    const campaignMode = nextMode || "dsa";
    const saved = stats?.campaigns?.[campaignMode];
    const canResume = saved && saved.currentLevel < buildCampaign(campaignMode).length;
    const startingHearts = hasExtraHeartPerk ? 4 : 3;
    const run = {
      currentLevel: targetLevel ?? (canResume ? saved.currentLevel : 0),
      lives: canResume ? (saved.lives || startingHearts) : startingHearts,
      xp: canResume ? (saved.xp || 0) : 0,
      selectedChoice: null,
      hint: false,
      completedLevels: saved?.completedLevels || []
    };
    setMode(campaignMode);
    setScreen("game");
    setLevel(run.currentLevel);
    setChoice(null);
    setLives(run.lives);
    setXp(run.xp);
    setHint(false);
    setMessage("");
    setEliminatedChoices([]);
  }

  function handle5050() {
    if (!has5050Perk || eliminatedChoices.length > 0) return;
    const correct = current.answer;
    const wrong = [0, 1, 2, 3].filter((i) => i !== correct);
    const toEliminate = wrong.slice(0, 2);
    setEliminatedChoices(toEliminate);
    setMessage("Oracle's Sight activated! 2 incorrect options eliminated.");
  }

  function submitAnswer() {
    if (choice === null) return;
    const isCorrect = choice === current.answer;
    if (isCorrect) {
      const earnedXp = current.xp || 50;
      const nextLevel = level + 1;
      const nextXp = xp + earnedXp;
      completeLevel(mode, level, {
        currentLevel: nextLevel,
        lives,
        xpReward: earnedXp,
        completedLevels: [level]
      });
      setXp(nextXp);
      addXp(earnedXp);

      if (nextLevel >= campaign.length) {
        setScreen("victory");
      } else {
        setLevel(nextLevel);
        setChoice(null);
        setHint(false);
        setMessage("Correct! + " + earnedXp + " XP");
        setEliminatedChoices([]);
      }
    } else {
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) {
        setScreen("defeat");
      } else {
        setMessage("Incorrect! -1 Heart. " + nextLives + " lives remain.");
      }
    }
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
                GAMIFIED ALGORITHMIC DUNGEONS
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🎯 Quests & Challenges
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={stats?.streak || 1} />
              <XPBar xp={stats?.totalXp || 0} />
              <Hearts count={lives} max={maxLives} />
            </div>
          </div>

          {screen === "lobby" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
                {[
                  { id: "dsa", title: "Data Structures Trial", icon: "🗺️", desc: "Traverse stacks, queues, trees, and linked list mechanics.", color: "#a9ff43" },
                  { id: "code", title: "C Systems Trial", icon: "⚡", desc: "Pointers, memory bounds, bitwise shifts, and runtime limits.", color: "#46d8e7" },
                  { id: "bugs", title: "Bug Hunter Trial", icon: "🐛", desc: "Diagnose logic flaws, dangling pointers, and off-by-one errors.", color: "#ffb627" },
                  { id: "boss", title: "Boss Raid Challenge", icon: "👹", desc: "Expert-tier graph traversals, dynamic programming, and complexity puzzles.", color: "#ff5340" }
                ].map((trial) => {
                  const run = stats?.campaigns?.[trial.id];
                  const cleared = run?.completedLevels?.length || 0;
                  return (
                    <div
                      key={trial.id}
                      style={{
                        background: "#131f24",
                        border: `2px solid ${trial.color}`,
                        borderRadius: 20,
                        padding: 24,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 32, marginBottom: 12 }}>{trial.icon}</div>
                        <h3 style={{ margin: "0 0 8px", fontSize: 20, color: "#fff", fontWeight: 800 }}>{trial.title}</h3>
                        <p style={{ margin: "0 0 16px", color: "#84959f", fontSize: 13, lineHeight: 1.5 }}>{trial.desc}</p>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#84959f", marginBottom: 14, fontWeight: 700 }}>
                          <span>PROGRESS</span>
                          <b style={{ color: trial.color }}>{cleared} Completed</b>
                        </div>
                        <button
                          onClick={() => enterCampaign(trial.id)}
                          type="button"
                          style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: 14,
                            background: trial.color,
                            color: "#000",
                            border: "none",
                            fontWeight: 900,
                            fontSize: 14,
                            cursor: "pointer"
                          }}
                        >
                          Enter Trial →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {screen === "game" && current && (
            <section className="game" style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 24, padding: 32 }}>
              <aside style={{ borderRight: "1px solid #202f36", paddingRight: 24 }}>
                <small style={{ color: "#58cc02", fontWeight: 800 }}>DUNGEON QUEST</small>
                <h3 style={{ margin: "8px 0 20px", color: "#fff" }}>{mode.toUpperCase()} TRIAL</h3>
                <div className="counter">
                  <span style={{ fontSize: 12, color: "#84959f" }}>LEVEL</span>
                  <b style={{ fontSize: 42, color: "#58cc02" }}>{level + 1}</b>
                </div>
                <div className="bar" style={{ margin: "16px 0 24px" }}>
                  <i style={{ width: `${Math.min(100, ((level + 1) / campaign.length) * 100)}%` }} />
                </div>
                <button onClick={() => setScreen("lobby")} type="button" style={{ color: "#84959f", background: "none", border: 0, cursor: "pointer", fontSize: 13, fontWeight: 800 }}>
                  ← Return to Quest Lobby
                </button>
              </aside>

              <article style={{ background: "none", border: 0, boxShadow: "none" }}>
                <div className="panel-head" style={{ borderBottom: "1px solid #202f36", paddingBottom: 12 }}>
                  <span style={{ color: "#58cc02", fontWeight: 800 }}>{tier.label}</span>
                  <span style={{ color: "#84959f" }}>{current.topic}</span>
                </div>

                <h2 style={{ color: "#fff", margin: "24px 0" }}>{current.question}</h2>

                {current.type === "stack" && <StackQuestionVisual prompt={current.question} />}

                {current.snippet && (
                  <div className="editor" style={{ marginBottom: 20 }}>
                    <div><i /><i /><i /><span>{current.language || "C"}</span></div>
                    <pre>{current.snippet}</pre>
                  </div>
                )}

                <div className="options">
                  {current.options.map((opt, index) => {
                    const isEliminated = eliminatedChoices.includes(index);
                    return (
                      <button
                        key={index}
                        className={`${choice === index ? "active" : ""} ${isEliminated ? "option-hidden" : ""}`}
                        disabled={isEliminated}
                        onClick={() => setChoice(index)}
                        type="button"
                        style={{ borderRadius: 14, padding: "14px 18px", border: "2px solid #202f36" }}
                      >
                        <b>{String.fromCharCode(65 + index)}</b>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {message && (
                  <div style={{ margin: "18px 0 0", color: "#ffc800", fontSize: 13, fontWeight: 800 }}>
                    {message}
                  </div>
                )}

                <div className="submit" style={{ marginTop: 24 }}>
                  <button
                    className="primary"
                    disabled={choice === null}
                    onClick={submitAnswer}
                    type="button"
                    style={{ borderRadius: 14, padding: "14px 28px", background: "#58cc02", color: "#fff", border: "none", fontWeight: 900, cursor: "pointer" }}
                  >
                    SUBMIT ANSWER
                  </button>
                </div>
              </article>
            </section>
          )}

          {screen === "victory" && (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "#131f24", borderRadius: 24, border: "2px solid #58cc02" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🏆</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#58cc02", margin: "0 0 12px" }}>TRIAL CONQUERED!</h2>
              <p style={{ color: "#84959f", fontSize: 16, margin: "0 0 28px" }}>You have completed all levels in this trial!</p>
              <button onClick={() => setScreen("lobby")} type="button" style={{ padding: "16px 36px", borderRadius: 16, background: "#58cc02", color: "#fff", border: "none", fontWeight: 900, fontSize: 16, cursor: "pointer" }}>
                Return to Quests
              </button>
            </div>
          )}

          {screen === "defeat" && (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "#131f24", borderRadius: 24, border: "2px solid #ff4b4b" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>💔</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#ff4b4b", margin: "0 0 12px" }}>QUEST FAILED</h2>
              <p style={{ color: "#84959f", fontSize: 16, margin: "0 0 28px" }}>You ran out of hearts. Try again!</p>
              <button onClick={() => enterCampaign(mode, 0)} type="button" style={{ padding: "16px 36px", borderRadius: 16, background: "#ff4b4b", color: "#fff", border: "none", fontWeight: 900, fontSize: 16, cursor: "pointer" }}>
                Retry Trial
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QuestsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, color: "#58cc02" }}>Loading Quests...</div>}>
      <QuestsContent />
    </Suspense>
  );
}