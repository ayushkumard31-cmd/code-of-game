"use client";
import { useEffect, useRef, useState, Suspense, Component } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import usePlayer from "./usePlayer";
import MobileGamifiedApp from "./MobileGamifiedApp";
import { buildCampaign, getRank, tierConfig } from "./questionBank";


const hubs = [
  {
    title: "Coding Quests",
    desc: "Interactive C programming and data structure trials with live code editors and life management.",
    href: "/quests",
    color: "#a9ff43",
    icon: "⚔️",
    tag: "GAMIFIED TRIALS",
    stats: "30+ Challenge Levels",
  },
  {
    title: "Dungeon Topic Map",
    desc: "Visual topic tree mapping core DSA concepts: Stacks, Queues, Linked Lists, Trees, and Graphs.",
    href: "/map",
    color: "#46d8e7",
    icon: "🗺️",
    tag: "TOPIC TREE",
    stats: "Interactive Visualizers",
  },
  {
    title: "Practice Hub",
    desc: "Zero-XP subjective problem solving with step-by-step model solutions and self-evaluation checklists.",
    href: "/practice",
    color: "#ffb627",
    icon: "🎯",
    tag: "SELF-EVALUATION",
    stats: "Subjective Drills",
  },
  {
    title: "Rewards & Perks",
    desc: "Earn XP, unlock achievement badges, and equip active power-ups like extra heart containers and 50/50 lifelines.",
    href: "/rewards",
    color: "#ff7875",
    icon: "🏆",
    tag: "POWER-UPS",
    stats: "Badges & Perks",
  },
  {
    title: "Build Projects",
    desc: "Hands-on software projects in C: build shell interpreters, memory allocators, and game engines.",
    href: "/projects",
    color: "#b377ff",
    icon: "🛠️",
    tag: "SYSTEM PROJECTS",
    stats: "Real-world C Apps",
  },
  {
    title: "Leaderboard & Ranks",
    desc: "Compete with fellow coders, climb rank tiers from Novice to Grandmaster, and track your global standing.",
    href: "/leaderboard",
    color: "#58d68d",
    icon: "📊",
    tag: "COMPETITIVE",
    stats: "Rankings & Tiers",
  },
];

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
    <main className="shell">
      <div className="grid-bg" />
      {screen === "home" && (
        <Navbar
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
          onOpenLogin={() => setLoginOpen(true)}
        />
      )}

      <div className="nexus-container">
        {/* Hero Section */}
        <section style={{
          padding: "40px 0 30px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.3fr) minmax(320px, 0.7fr)",
          gap: 36,
          alignItems: "center"
        }}>
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              borderRadius: 9999,
              background: "rgba(169, 255, 67, 0.1)",
              border: "1px solid rgba(169, 255, 67, 0.3)",
              color: "#a9ff43",
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              fontWeight: 800,
              marginBottom: 16
            }}>
              <span>⚡</span> ALL-IN-ONE CODE LEARNING ECOSYSTEM
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

            <p style={{
              fontSize: 16,
              color: "#9ca59e",
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "0 0 28px"
            }}>
              Accelerate your engineering journey. Navigate structured learning paths, dive into systems lectures and cheat sheets, solve interactive coding drills, and construct production-grade projects.
            </p>

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

        {/* Platform Modules Hubs Grid */}
        <section style={{ marginTop: 40 }}>
          <div style={{ marginBottom: 24 }}>
            <small style={{ color: "#a9ff43", fontSize: 10, letterSpacing: 2, fontFamily: "var(--font-mono)", fontWeight: 800 }}>
              PLATFORM DIRECTORY
            </small>
            <h2 style={{ fontSize: 28, color: "#fff", fontWeight: 800, margin: "6px 0 0" }}>
              Explore Platform Modules
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20
          }}>
            {hubs.map((hub) => (
              <Link
                key={hub.title}
                href={hub.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="nexus-card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderLeft: `3px solid ${hub.color}`,
                    transition: "transform 0.2s, border-color 0.2s"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontSize: 28 }}>{hub.icon}</span>
                      <span className="tag-badge" style={{ background: `${hub.color}15`, color: hub.color, border: `1px solid ${hub.color}35` }}>
                        {hub.tag}
                      </span>
                    </div>

                    <h3 style={{ margin: "0 0 8px", fontSize: 19, color: "#fff", fontWeight: 800 }}>
                      {hub.title}
                    </h3>

                    <p style={{ margin: "0 0 16px", color: "#8d968e", fontSize: 13, lineHeight: 1.5 }}>
                      {hub.desc}
                    </p>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 12,
                    borderTop: "1px solid #1a221b",
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    color: "#747d75"
                  }}>
                    <span>{hub.stats}</span>
                    <span style={{ color: hub.color, fontWeight: 800 }}>Open →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Daily Challenge Spotlight */}
        <section style={{
          marginTop: 60,
          padding: "32px 36px",
          borderRadius: 12,
          background: "linear-gradient(135deg, rgba(70, 216, 231, 0.08), #101411)",
          border: "1px solid #1f3336",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20
        }}>
          <div>
            <span className="tag-badge tag-dsa" style={{ marginBottom: 8 }}>
              🎯 TODAY&apos;S SPOTLIGHT CHALLENGE
            </span>
            <h3 style={{ margin: "4px 0 6px", fontSize: 22, color: "#fff", fontWeight: 800 }}>
              Two Sum & Hash Table Traversal
            </h3>
            <p style={{ margin: 0, color: "#8a9792", fontSize: 13, maxWidth: 540 }}>
              Solve today&apos;s featured algorithmic challenge in under 15 minutes to earn +80 XP and maintain your daily flame streak.
            </p>
          </div>

          <Link href="/practice" className="btn-primary" style={{ padding: "14px 24px" }}>
            Start Challenge Now →
          </Link>
        </section>
      </div>
    </main>
  );
}

class SafeBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("View boundary caught error:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default function Home() {
  return (
    <>
      <div className="desktop-website-wrapper">
        <SafeBoundary fallback={null}>
          <Suspense fallback={<div className="adm-loading">LOADING DUNGEON...</div>}>
            <GameContent />
          </Suspense>
        </SafeBoundary>
      </div>
      <div className="mobile-gamified-wrapper">
        <SafeBoundary fallback={<div style={{ padding: 20, color: "#444" }}>Loading mobile experience...</div>}>
          <MobileGamifiedApp />
        </SafeBoundary>
      </div>
    </>
  );
}
