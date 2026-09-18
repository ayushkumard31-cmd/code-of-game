"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import usePlayer from "./usePlayer";

export default function HomePage() {
  const { stats, user } = usePlayer();

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

  return (
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

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

            <p style={{
              fontSize: 16,
              color: "#9ca59e",
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "0 0 28px"
            }}>
              Accelerate your engineering journey. Navigate structured learning paths, dive into systems lectures and cheat sheets, solve interactive coding drills, and construct production-grade projects.
            </p>

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
