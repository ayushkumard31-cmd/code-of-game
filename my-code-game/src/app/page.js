"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import { buildCampaign, getRank, tierConfig, getActiveTierConfig } from "./questionBank";
import usePlayer from "./usePlayer";

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

function GameContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState("dsa");
  const [level, setLevel] = useState(0);
  const [choice, setChoice] = useState(null);
  const [lives, setLives] = useState(3);
  const [xp, setXp] = useState(0);
  const [hint, setHint] = useState(false);
  const [message, setMessage] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [pendingMode, setPendingMode] = useState("dsa");
  const [pendingLevel, setPendingLevel] = useState(null);
  const [eliminatedChoices, setEliminatedChoices] = useState([]);

  const {
    user,
    stats,
    loading,
    login,
    saveRun,
    completeLevel,
    finishRun,
  } = usePlayer();

  const isGoogleSignedIn = Boolean(
    user && (user.providerData?.length ? user.providerData.some((p) => p.providerId === "google.com") : true)
  );

  const campaign = buildCampaign(mode);
  const current = campaign[level] || campaign[0];
  const rank = getRank(xp);
  const tier = tierConfig[current?.tier || 0] || tierConfig[0];
  const hasResumed = useRef(false);

  const hasExtraHeartPerk = stats?.equippedPerks?.includes("perk-extra-heart") && stats?.claimedRewards?.includes("perk-extra-heart");
  const maxLives = hasExtraHeartPerk ? 4 : 3;
  const has5050Perk = stats?.equippedPerks?.includes("perk-50-50") && stats?.claimedRewards?.includes("perk-50-50");
  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  // Handle URL parameters (e.g. from Map page redirect)
  useEffect(() => {
    const qMode = searchParams.get("mode");
    const qLevel = searchParams.get("level");
    if (qMode) {
      const parsedLevel = qLevel ? parseInt(qLevel, 10) : 0;
      enterCampaign(qMode, parsedLevel);
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  // Resume in-progress game
  useEffect(() => {
    if (hasResumed.current) return;
    if (!loading && user) {
      const activeGame = stats?.activeGame;
      if (activeGame && activeGame.currentLevel < buildCampaign(activeGame.mode).length) {
        hasResumed.current = true;
        const run = activeGame;
        const resume = window.setTimeout(() => {
          setMode(run.mode);
          setLevel(run.currentLevel || 0);
          setLives(run.lives || maxLives);
          setXp(run.xp || 0);
          setChoice(Number.isInteger(run.selectedChoice) ? run.selectedChoice : null);
          setHint(Boolean(run.hint));
          setScreen("game");
        }, 0);
        return () => window.clearTimeout(resume);
      } else {
        hasResumed.current = true;
      }
    }
  }, [loading, user, stats?.activeGame, maxLives]);

  // Save game progress on each step
  useEffect(() => {
    if (user && screen === "game") {
      saveRun(mode, { currentLevel: level, lives, xp, selectedChoice: choice, hint });
    }
  }, [choice, hint, level, lives, mode, saveRun, screen, user, xp]);

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
    saveRun(campaignMode, run);
  }

  async function handleCardClick(modeName, targetHref) {
    if (!isGoogleSignedIn) {
      try {
        const signedUser = await login();
        if (signedUser) {
          if (targetHref) {
            router.push(targetHref);
          } else if (modeName === "dsa") {
            router.push("/map");
          } else if (modeName) {
            enterCampaign(modeName, 0);
          }
        }
      } catch (error) {
        if (error?.code !== "auth/popup-closed-by-user") {
          setLoginOpen(true);
        }
      }
      return;
    }

    if (targetHref) {
      router.push(targetHref);
    } else if (modeName === "dsa") {
      router.push("/map");
    } else if (modeName) {
      enterCampaign(modeName, 0);
    }
  }

  function start(nextMode = "dsa") {
    if (!isGoogleSignedIn) {
      handleCardClick(nextMode, nextMode === "dsa" ? "/map" : null);
      return;
    }
    if (nextMode === "dsa") {
      router.push("/map");
      return;
    }
    enterCampaign(nextMode, 0);
  }

  function use5050Lifeline() {
    if (!current || eliminatedChoices.length > 0) return;
    const wrongIndices = current.choices
      .map((_, i) => i)
      .filter((i) => i !== current.answer);
    const toEliminate = wrongIndices.slice(0, 2);
    setEliminatedChoices(toEliminate);
    setMessage("🔮 ORACLE ELIMINATED 2 WRONG CHOICES");
  }

  function next() {
    if (level === campaign.length - 1) {
      finishRun(mode);
      setScreen("win");
    } else {
      setLevel(level + 1);
      setChoice(null);
      setHint(false);
      setMessage("");
      setEliminatedChoices([]);
    }
  }

  function submit() {
    if (choice === current.answer) {
      const alreadyCompleted = stats?.campaigns?.[mode]?.completedLevels?.includes(level);
      const earned = alreadyCompleted ? 0 : current.xpReward;
      const nextXp = xp + earned;
      setXp(nextXp);
      completeLevel(mode, level, { currentLevel: level + 1, lives, xpReward: current.xpReward });
      setMessage(`LEVEL CLEAR  +${earned} XP`);
      setTimeout(next, 650);
      return;
    }
    const remaining = lives - 1;
    setLives(remaining);
    setChoice(null);
    saveRun(mode, { currentLevel: level, lives: remaining, xp });
    setMessage(remaining ? "LIFE LOST — TRY AGAIN" : "OUT OF LIVES");
    if (!remaining) setTimeout(() => setScreen("lost"), 700);
  }

  return (
    <main className={`shell ${screen === "home" ? "storefront" : ""} ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      {screen === "home" && (
        <Navbar
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
          onOpenLogin={() => setLoginOpen(true)}
        />
      )}

      {/* Quests Campaign Home View */}
      {screen === "home" && (
        <section className="hs-quests" style={{ borderTop: 0, paddingTop: 48 }}>
          <div className="hs-inner">
            <div className="hs-head">
              <small>CAMPAIGNS & BOSS RAIDS</small>
              <h2>Pick your quest type</h2>
              <p>Four challenge modes for mastering DSA in C from novice trials to the Final DSA Boss Test.</p>
            </div>

            {/* Compulsory Google Sign-In Banner if not signed in */}
            {!loading && !isGoogleSignedIn && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 14,
                  padding: "16px 20px",
                  marginBottom: 28,
                  border: "1px solid #4285f466",
                  background: "linear-gradient(90deg, rgba(66, 133, 244, 0.12), rgba(66, 133, 244, 0.04))",
                  borderRadius: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#fff",
                      color: "#4285f4",
                      font: "900 15px Arial",
                      flexShrink: 0,
                    }}
                  >
                    G
                  </span>
                  <div>
                    <b style={{ display: "block", color: "#fff", font: "700 14px var(--font-display)", letterSpacing: "-0.3px" }}>
                      Google Sign-In Required
                    </b>
                    <span style={{ color: "#a5b4fc", font: "11px var(--font-mono)" }}>
                      Sign in with your Google account to unlock and select game cards, tracks, and lab quests.
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCardClick(null, null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    border: "1px solid #4285f4",
                    background: "#4285f4",
                    color: "#fff",
                    font: "800 11px var(--font-mono)",
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                  }}
                >
                  SIGN IN WITH GOOGLE →
                </button>
              </div>
            )}

            <div className="mode-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {[
                { mode: "dsa", icon: "?", label: "DSA Trial", sub: "Concept quizzes across all core DSA topics", color: "#a9ff43", href: "/map" },
                { mode: "code", icon: "</>", label: "Code Forge", sub: "Complete fragments of real C code", color: "#46d8e7" },
                { mode: "bugs", icon: "!", label: "Bug Hunt", sub: "Spot and fix common memory & pointer bugs", color: "#ff7875" },
                { mode: "boss", icon: "👹", label: "Final DSA Test", sub: "10-Stage Boss Raid: Time attacks & complexity battles", color: "#ff5340", isBoss: true }
              ].map((m) => (
                <button
                  key={m.mode}
                  type="button"
                  className={`mode-card ${m.isBoss ? "boss-mode-card" : ""}`}
                  style={{ "--mc": m.color }}
                  onClick={() => handleCardClick(m.mode, m.href)}
                >
                  <i>{m.icon}</i>
                  <b>{m.label}</b>
                  <span>{m.sub}</span>
                  <em>START QUEST →</em>
                </button>
              ))}
            </div>

            <div className="tier-info">
              {getActiveTierConfig().map((t, i) => (
                <div key={i} className="tier-info-row" style={{ borderLeftColor: t.color }}>
                  <b style={{ color: t.color }}>{t.name}</b>
                  <span>{t.count} questions · +{t.xp} XP each</span>
                </div>
              ))}
            </div>

            {/* Quick Link Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 40 }}>
              <Link
                href="/practice"
                className="mode-card"
                style={{ "--mc": "#a9ff43" }}
                onClick={(e) => {
                  if (!isGoogleSignedIn) {
                    e.preventDefault();
                    handleCardClick(null, "/practice");
                  }
                }}
              >
                <i>◉</i>
                <b>Practice Hub (0 XP)</b>
                <span>Subjective deep-dive & self-evaluation</span>
                <em>EXPLORE PRACTICE →</em>
              </Link>
              <Link
                href="/rewards"
                className="mode-card"
                style={{ "--mc": "#ffb627" }}
                onClick={(e) => {
                  if (!isGoogleSignedIn) {
                    e.preventDefault();
                    handleCardClick(null, "/rewards");
                  }
                }}
              >
                <i>♜</i>
                <b>Rewards & Perks</b>
                <span>Claim badges & equip Heart Containers</span>
                <em>VIEW REWARDS →</em>
              </Link>
              <Link
                href="/map"
                className="mode-card"
                style={{ "--mc": "#4ec9e8" }}
                onClick={(e) => {
                  if (!isGoogleSignedIn) {
                    e.preventDefault();
                    handleCardClick(null, "/map");
                  }
                }}
              >
                <i>◇</i>
                <b>Dungeon Map</b>
                <span>Interactive Stack, Queue & List labs</span>
                <em>OPEN MAP →</em>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* In-Game Quest Mode */}
      {screen === "game" && (
        <section className="game">
          <aside>
            <small>CURRENT CAMPAIGN</small>
            <h3>{current.type}</h3>
            <div className="tier-badge" style={{ borderColor: tier.color, color: tier.color }}>
              {tier.name}
            </div>
            <div className="counter">
              <b>{String(current.tierQuestion || level + 1).padStart(2, "0")}</b> / {String(current.tierTotal || campaign.length).padStart(2, "0")}
            </div>
            <div className="bar">
              <i style={{ width: `${((level + 1) / campaign.length) * 100}%` }} />
            </div>
            <div className="player-stats">
              <span>XP <b>{xp}</b></span>
              <span>RANK <b>{rank.name}</b></span>
            </div>
            <div className="rank-progress">
              <i style={{ width: `${Math.min(100, (xp / rank.next) * 100)}%` }} />
              <small>{rank.name === "LEGEND" ? "MAX RANK" : `${rank.next - xp} XP TO NEXT RANK`}</small>
            </div>
            <div className="life">
              <span className="hearts">
                {"♥".repeat(lives)}
                {"♡".repeat(Math.max(0, maxLives - lives))}
              </span>
              <span>
                <b>{lives} LIVES LEFT {hasExtraHeartPerk ? "(HEART CONTAINER ACTIVE)" : ""}</b>
                <small>WRONG ANSWERS COST ONE</small>
              </span>
            </div>
            <button onClick={() => setScreen("home")} type="button">× EXIT QUEST</button>
          </aside>

          <article>
            <div className="panel-head">
              <span>QUESTION {level + 1} / {campaign.length}</span>
              <b>REWARD +{current.xpReward} XP</b>
            </div>
            <h2>{current.title}</h2>
            {current.code && (
              <div className="editor">
                <div><i /><i /><i /><span>challenge.c</span></div>
                <pre>{current.code}</pre>
              </div>
            )}
            <p className="instruction">{current.prompt}</p>

            {current.title === "Stack behavior" && (
              <StackQuestionVisual key={`${mode}-${level}`} prompt={current.prompt} />
            )}

            <div className="options">
              {current.choices.map((item, i) => {
                const isEliminated = eliminatedChoices.includes(i);
                return (
                  <button
                    key={item}
                    type="button"
                    className={`${choice === i ? "active" : ""} ${isEliminated ? "option-hidden" : ""}`}
                    disabled={isEliminated}
                    onClick={() => setChoice(i)}
                  >
                    <b>{String.fromCharCode(65 + i)}</b>
                    {item}
                    <i>→</i>
                  </button>
                );
              })}
            </div>

            <div className="submit">
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button className="hint-button" type="button" onClick={() => setHint(!hint)}>
                  💡 {hint ? "HIDE HINT" : "USE HINT"}
                </button>
                {has5050Perk && (
                  <button
                    type="button"
                    className="lifeline-5050"
                    disabled={eliminatedChoices.length > 0}
                    onClick={use5050Lifeline}
                  >
                    🔮 50/50 LIFELINE
                  </button>
                )}
              </div>
              <span className={message.includes("CLEAR") ? "success" : "error"}>{message}</span>
              <button
                className="primary"
                type="button"
                disabled={choice === null || message.includes("CLEAR")}
                onClick={submit}
              >
                CONFIRM →
              </button>
            </div>
            {hint && <p className="hint">// HINT: {current.hint}</p>}
          </article>
        </section>
      )}

      {/* Ending Screen */}
      {(screen === "win" || screen === "lost") && (
        <section className={`ending ${screen === "lost" ? "lost" : ""}`}>
          <code>{screen === "win" ? "CAMPAIGN_COMPLETE" : "RUN_ENDED"}</code>
          <h2>{screen === "win" ? "QUEST\nCLEARED." : "OUT OF\nLIVES."}</h2>
          <p>
            {screen === "win"
              ? `You earned ${xp} XP and finished as ${rank.name}.`
              : `You reached ${rank.name} with ${xp} XP. Refill your hearts and try again.`}
          </p>
          <button className="primary" onClick={() => start(mode)} type="button">PLAY AGAIN</button>
          <button className="ghost" onClick={() => setScreen("home")} type="button">LOBBY</button>
        </section>
      )}

      {screen === "home" && (
        <footer>
          <span>© 2026 DSA DUNGEON</span>
          <span>LEARN C · MASTER DSA · CLAIM REWARDS · FIX BUGS</span>
        </footer>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="adm-loading">LOADING DUNGEON...</div>}>
      <GameContent />
    </Suspense>
  );
}
