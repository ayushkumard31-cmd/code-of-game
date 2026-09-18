"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../Navbar";
import DynamicIsland from "../../components/smoothui/dynamic-island/index.jsx";
import { buildCampaign, getRank, tierConfig, getActiveTierConfig } from "../questionBank";
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
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

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
    <main className={`shell ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      <Navbar />

      {screen === "lobby" && (
        <div className="nexus-container">
          <div className="nexus-header">
            <small>GAMIFIED ALGORITHMIC DUNGEONS</small>
            <h1>🎯 Quest Campaigns</h1>
            <p>
              High-stakes gamified coding trials. Choose your trial path, manage your life hearts, deploy perks, and conquer expert algorithmic challenges.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 40
          }}>
            {[
              {
                id: "dsa",
                title: "Data Structures Trial",
                icon: "🗺️",
                desc: "Traverse stacks, queues, trees, and linked list mechanics.",
                color: "#a9ff43"
              },
              {
                id: "code",
                title: "C Systems Trial",
                icon: "⚡",
                desc: "Pointers, memory bounds, bitwise shifts, and runtime limits.",
                color: "#46d8e7"
              },
              {
                id: "bugs",
                title: "Bug Hunter Trial",
                icon: "🐛",
                desc: "Diagnose logic flaws, dangling pointers, and off-by-one errors.",
                color: "#ffb627"
              },
              {
                id: "boss",
                title: "Boss Raid Challenge",
                icon: "👹",
                desc: "Expert-tier graph traversals, dynamic programming, and complexity puzzles.",
                color: "#ff5340"
              }
            ].map((trial) => {
              const run = stats?.campaigns?.[trial.id];
              const cleared = run?.completedLevels?.length || 0;
              return (
                <div
                  key={trial.id}
                  className="nexus-card"
                  style={{
                    borderLeft: `4px solid ${trial.color}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{trial.icon}</div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 20, color: "#fff", fontWeight: 700 }}>
                      {trial.title}
                    </h3>
                    <p style={{ margin: "0 0 16px", color: "#8b948c", fontSize: 13, lineHeight: 1.5 }}>
                      {trial.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#778077", fontFamily: "var(--font-mono)", marginBottom: 14 }}>
                      <span>PROGRESS</span>
                      <b style={{ color: trial.color }}>{cleared} Completed</b>
                    </div>
                    <button
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                      onClick={() => enterCampaign(trial.id)}
                      type="button"
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
        <section className="game">
          <aside>
            <small>DUNGEON QUEST</small>
            <h3>{mode.toUpperCase()} TRIAL</h3>
            <div className="counter">
              <span>TRIAL LEVEL</span>
              <b>{level + 1}</b>
            </div>
            <div className="bar">
              <i style={{ width: `${Math.min(100, ((level + 1) / campaign.length) * 100)}%` }} />
            </div>
            <div className="life">
              {"♥".repeat(lives)}
              {"♡".repeat(Math.max(0, maxLives - lives))}
              <span>
                <b>{lives} / {maxLives} HEARTS</b>
                <small>{hasExtraHeartPerk ? "+1 Perk Life Active" : "Standard HP"}</small>
              </span>
            </div>

            <div style={{ marginTop: 24, padding: "12px 14px", background: "#0a0e0b", border: "1px solid #1c241e", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-mono)" }}>
              <span style={{ color: "#7a847b", display: "block" }}>QUEST REWARD:</span>
              <b style={{ color: "#a9ff43" }}>+{current.xp || 50} XP per clearance</b>
            </div>

            <button onClick={() => setScreen("lobby")} type="button" style={{ marginTop: "auto", color: "#7a847b", background: "none", border: 0, cursor: "pointer", fontSize: 11 }}>
              ← Return to Quest Lobby
            </button>
          </aside>

          <article>
            <div className="panel-head">
              <span>{tier.label}</span>
              <span>{current.topic}</span>
            </div>

            <h2>{current.question}</h2>

            {current.type === "stack" && (
              <StackQuestionVisual prompt={current.question} />
            )}

            {current.snippet && (
              <div className="editor" style={{ marginBottom: 20 }}>
                <div>
                  <i /><i /><i />
                  <span>{current.language || "C"}</span>
                </div>
                <pre>{current.snippet}</pre>
              </div>
            )}

            {/* Choices */}
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
                  >
                    <b>{String.fromCharCode(65 + index)}</b>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* 50/50 Perk Button */}
            {has5050Perk && eliminatedChoices.length === 0 && (
              <div style={{ marginTop: 16 }}>
                <button className="lifeline-5050" onClick={handle5050} type="button">
                  🔮 Use Oracle's Sight (50/50)
                </button>
              </div>
            )}

            {message && (
              <div style={{ margin: "18px 0 0", color: "#ffb627", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                {message}
              </div>
            )}

            <div className="submit">
              <button
                className="primary"
                disabled={choice === null}
                onClick={submitAnswer}
                type="button"
              >
                SUBMIT ANSWER
              </button>
            </div>
          </article>
        </section>
      )}

      {screen === "victory" && (
        <div className="ending">
          <code>MISSION ACCOMPLISHED</code>
          <h2>TRIAL CONQUERED!</h2>
          <p>You have demonstrated flawless mastery across all trial levels!</p>
          <button className="primary" onClick={() => setScreen("lobby")} type="button">
            Return to Quests
          </button>
        </div>
      )}

      {screen === "defeat" && (
        <div className="ending lost">
          <code>HEALTH DEPLETED</code>
          <h2>QUEST FAILED</h2>
          <p>You ran out of hearts in this dungeon trial. Study up and try again!</p>
          <button className="primary" onClick={() => enterCampaign(mode, 0)} type="button">
            Retry Trial
          </button>
          <button className="ghost" onClick={() => setScreen("lobby")} type="button">
            Back to Lobby
          </button>
        </div>
      )}
    </main>
  );
}

export default function QuestsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, color: "#a9ff43" }}>Loading Quests...</div>}>
      <QuestsContent />
    </Suspense>
  );
}