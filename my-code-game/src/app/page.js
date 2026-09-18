"use client";
<<<<<<< HEAD
=======
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef, useState, Suspense, Component } from "react";
import { useSearchParams, useRouter } from "next/navigation";
>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01
import Link from "next/link";
import Navbar from "./Navbar";
import usePlayer from "./usePlayer";
import MobileGamifiedApp from "./MobileGamifiedApp";

export default function HomePage() {
  const { stats, user } = usePlayer();

<<<<<<< HEAD
  const totalXp = stats?.totalXp || 0;
  const streak = stats?.streak || 1;
  const currentRank = totalXp >= 5000 ? "Legendary Grandmaster" :
                    totalXp >= 3000 ? "Boss Slayer" :
                    totalXp >= 1500 ? "Systems Architect" :
                    totalXp >= 500 ? "Algorithm Knight" : "Novice Explorer";

  const dailyGoalTarget = 100;
  const dailyGoalCurrent = Math.min(dailyGoalTarget, (totalXp % 200));
  const dailyPercent = Math.round((dailyGoalCurrent / dailyGoalTarget) * 100);

  const hubs = [
    {
      title: "Learning Path",
      icon: "🗺️",
      href: "/path",
      tag: "4 TRACKS",
      color: "#a9ff43",
      desc: "Structured roadmaps from computational basics and C/C++/Java/Python to DSA and advanced distributed systems.",
      stats: "5 Modules · 18 Milestones"
    },
    {
      title: "Video Lectures",
      icon: "🎥",
      href: "/lectures",
      tag: "CLASSROOM",
      color: "#46d8e7",
      desc: "Curated engineering video lectures with timestamped chapters, key takeaways, and sidecar code snippets.",
      stats: "5 Core Lectures · +XP Rewards"
    },
    {
      title: "Theory / Notes",
      icon: "📖",
      href: "/notes",
      tag: "HANDBOOK",
      color: "#ffb627",
      desc: "Digital cheat sheets, asymptotic Big-O matrices, process memory segments, and multi-language comparisons.",
      stats: "Verified Reference Guide"
    },
    {
      title: "Code Practice",
      icon: "💻",
      href: "/practice",
      tag: "4 MODES",
      color: "#f052b5",
      desc: "Interactive drills spanning MCQs, output prediction puzzles, bug forensics, and algorithmic problem solving.",
      stats: "MCQ · Output · Debug · Coding"
    },
    {
      title: "Real-World Projects",
      icon: "🛠️",
      href: "/projects",
      tag: "3 TIERS",
      color: "#ff5340",
      desc: "Build production-caliber software: CLI expression calculators, custom malloc allocators, and mini-Redis engines.",
      stats: "Beginner · Intermediate · Advanced"
    },
    {
      title: "Interview Preparation",
      icon: "🧠",
      href: "/interview",
      tag: "FAANG & TOP TECH",
      color: "#6c35e8",
      desc: "Curated interview questions tagged by difficulty and company (Google, Amazon, Meta, Uber) with mock timer.",
      stats: "Easy · Medium · Hard · Company Tags"
    },
    {
      title: "Gamified Quests",
      icon: "🎯",
      href: "/quests",
      tag: "DUNGEON CAMPAIGN",
      color: "#a9ff43",
      desc: "High-stakes gamified dungeon trials with life hearts, combo multipliers, perks, and interactive stack machines.",
      stats: "4 Trial Modes · Live Hearts"
    },
    {
      title: "Global Leaderboard",
      icon: "🥇",
      href: "/leaderboard",
      tag: "HALL OF FAME",
      color: "#ffd700",
      desc: "Compare your streak, XP, and solved challenges against developers and algorithm masters worldwide.",
      stats: "Weekly & All-Time Rankings"
    },
    {
      title: "Developer Profile",
      icon: "👤",
      href: "/profile",
      tag: "PORTFOLIO",
      color: "#46d8e7",
      desc: "Personal statistics cockpit: streak flame calendar, mastery breakdown chart, and unlocked badge showcase.",
      stats: "Level & Badges Showcase"
    }
  ];
=======
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
>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01

  return (
    <main className="shell">
      <div className="grid-bg" />
<<<<<<< HEAD
      <Navbar />
=======
      {screen === "home" && (
        <Navbar
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
          onOpenLogin={() => setLoginOpen(true)}
        />
      )}
>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01

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

<<<<<<< HEAD
            <h1 style={{
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              margin: "0 0 18px",
              color: "#fff"
            }}>
              MASTER COMPUTER SCIENCE <br />
              <span style={{ color: "#a9ff43" }}>FROM FIRST PRINCIPLES.</span>
            </h1>
=======
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
>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01

            <p style={{
              fontSize: 16,
              color: "#9ca59e",
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "0 0 28px"
            }}>
              Accelerate your engineering journey. Navigate structured learning paths, dive into systems lectures and cheat sheets, solve interactive coding drills, and construct production-grade projects.
            </p>

<<<<<<< HEAD
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/path" className="btn-primary" style={{ padding: "14px 26px", fontSize: 13 }}>
                🗺️ Explore Learning Paths
              </Link>
              <Link href="/practice" className="btn-secondary" style={{ padding: "14px 26px", fontSize: 13 }}>
                💻 Code Practice Arena
              </Link>
              <Link href="/quests" className="btn-secondary" style={{ padding: "14px 26px", fontSize: 13 }}>
                🎯 Enter Dungeon Quest
              </Link>
            </div>
          </div>

          {/* Gamification HUD Panel */}
          <div className="nexus-card" style={{
            background: "linear-gradient(145deg, #151c16, #0e120f)",
            border: "1px solid #28382a",
            boxShadow: "0 12px 40px rgba(0,0,0,0.6)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 11, color: "#a9ff43", fontFamily: "var(--font-mono)", fontWeight: 800, letterSpacing: 1 }}>
                DEVELOPER COCKPIT
              </span>
              <span className="tag-badge tag-dsa">{currentRank}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#090c0a", padding: "14px", borderRadius: 8, border: "1px solid #1c261e" }}>
                <small style={{ color: "#7a847b", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>ACTIVE STREAK</small>
                <b style={{ color: "#ff7047", fontSize: 24, fontFamily: "var(--font-mono)" }}>🔥 {streak} Days</b>
              </div>
              <div style={{ background: "#090c0a", padding: "14px", borderRadius: 8, border: "1px solid #1c261e" }}>
                <small style={{ color: "#7a847b", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>TOTAL EXPERIENCE</small>
                <b style={{ color: "#ffb627", fontSize: 24, fontFamily: "var(--font-mono)" }}>⭐ {totalXp} XP</b>
              </div>
            </div>

            {/* Daily Goal */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "var(--font-mono)", marginBottom: 6 }}>
                <span style={{ color: "#8a948b" }}>DAILY GOAL (100 XP)</span>
                <b style={{ color: "#a9ff43" }}>{dailyGoalCurrent} / {dailyGoalTarget} XP</b>
              </div>
              <div style={{ height: 6, background: "#1c231d", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${dailyPercent}%`, background: "#a9ff43" }} />
              </div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 12,
              borderTop: "1px solid #1f2a21",
              fontSize: 11
            }}>
              <span style={{ color: "#788279", fontFamily: "var(--font-mono)" }}>
                Logged in as <b>{user?.displayName || user?.email?.split("@")[0] || "Guest Pioneer"}</b>
              </span>
              <Link href="/profile" style={{ color: "#a9ff43", textDecoration: "none", fontWeight: 700 }}>
                Profile →
=======
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
>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01
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
              🎯 TODAY'S SPOTLIGHT CHALLENGE
            </span>
            <h3 style={{ margin: "4px 0 6px", fontSize: 22, color: "#fff", fontWeight: 800 }}>
              Two Sum & Hash Table Traversal
            </h3>
            <p style={{ margin: 0, color: "#8a9792", fontSize: 13, maxWidth: 540 }}>
              Solve today's featured algorithmic challenge in under 15 minutes to earn +80 XP and maintain your daily flame streak.
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
<<<<<<< HEAD
=======

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


>>>>>>> aeb82adccf954e0918731b89c99fab344ed49a01
