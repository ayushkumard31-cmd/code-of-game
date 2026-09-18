"use client";
import Link from "next/link";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { rewardBadges } from "../rewardsData";

export default function ProfilePage() {
  const { stats, user } = usePlayer();

  const totalXp = stats?.totalXp || 0;
  const streak = stats?.streak || 1;
  const longestStreak = stats?.longestStreak || 1;
  const unlockedBadges = stats?.unlockedBadges || ["badge-first-blood"];
  const claimedRewards = stats?.claimedRewards || [];
  const solvedProblems = Object.keys(stats?.solvedProblems || {}).length;
  const watchedLectures = (stats?.watchedLectures || []).length;
  const completedProjects = (stats?.completedProjects || []).length;
  const completedRoadmaps = (stats?.completedRoadmaps || []).length;

  const currentLevel = Math.floor(totalXp / 500) + 1;
  const xpInCurrentLevel = totalXp % 500;
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / 500) * 100));

  const userName = user?.displayName || user?.email?.split("@")[0] || "Code Pioneer";
  const userEmail = user?.email || "Guest Account (Local Storage Active)";

  // 14-day activity heat-map mock generator
  const days = Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    active: i >= 14 - streak
  }));

  return (
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

      <div className="nexus-container">
        {/* Profile Identity Banner */}
        <div style={{
          padding: "32px 36px",
          borderRadius: 12,
          background: "linear-gradient(135deg, rgba(169,255,67,0.1), #101411)",
          border: "1px solid #29362a",
          marginBottom: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a9ff43, #46d8e7)",
              color: "#0b0d0c",
              display: "grid",
              placeItems: "center",
              fontSize: 28,
              fontWeight: 900
            }}>
              {userName.charAt(0).toUpperCase()}
            </div>

            <div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                <h1 style={{ margin: 0, fontSize: 26, color: "#fff", fontWeight: 800 }}>
                  {userName}
                </h1>
                <span className="tag-badge tag-dsa">
                  LEVEL {currentLevel} ARCHITECT
                </span>
              </div>
              <div style={{ color: "#7a847c", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                {userEmail}
              </div>
            </div>
          </div>

          {/* Quick HUD stats */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center", background: "#0b0e0c", padding: "12px 18px", borderRadius: 8, border: "1px solid #1c241e" }}>
              <small style={{ display: "block", color: "#6e7770", fontSize: 10, fontFamily: "var(--font-mono)" }}>ACTIVE STREAK</small>
              <b style={{ fontSize: 22, color: "#ff7047", fontFamily: "var(--font-mono)" }}>🔥 {streak}d</b>
            </div>
            <div style={{ textAlign: "center", background: "#0b0e0c", padding: "12px 18px", borderRadius: 8, border: "1px solid #1c241e" }}>
              <small style={{ display: "block", color: "#6e7770", fontSize: 10, fontFamily: "var(--font-mono)" }}>TOTAL XP</small>
              <b style={{ fontSize: 22, color: "#ffb627", fontFamily: "var(--font-mono)" }}>⭐ {totalXp}</b>
            </div>
            <div style={{ textAlign: "center", background: "#0b0e0c", padding: "12px 18px", borderRadius: 8, border: "1px solid #1c241e" }}>
              <small style={{ display: "block", color: "#6e7770", fontSize: 10, fontFamily: "var(--font-mono)" }}>LONGEST STREAK</small>
              <b style={{ fontSize: 22, color: "#46d8e7", fontFamily: "var(--font-mono)" }}>⚡ {longestStreak}d</b>
            </div>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div className="nexus-card" style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b style={{ color: "#fff", fontSize: 13, fontFamily: "var(--font-mono)" }}>
              LEVEL {currentLevel} PROGRESSION
            </b>
            <span style={{ color: "#a9ff43", fontSize: 12, fontFamily: "var(--font-mono)" }}>
              {xpInCurrentLevel} / 500 XP to Level {currentLevel + 1} ({progressPercent}%)
            </span>
          </div>
          <div style={{ height: 8, background: "#1c231d", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progressPercent}%`, background: "#a9ff43", transition: "width 0.3s" }} />
          </div>
        </div>

        {/* 2-Column Grid: Activity Heatmap + Learning Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 36 }}>
          {/* Daily Streak Flame Heatmap */}
          <div className="nexus-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 16, color: "#fff" }}>
              🔥 Streak Activity Calendar
            </h3>
            <p style={{ margin: "0 0 16px", color: "#7a847b", fontSize: 12 }}>
              Consistency is key. Each day you complete a problem, watch a lecture, or advance a quest, your flame stays ignited.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "14px 0" }}>
              {days.map((d) => (
                <div
                  key={d.day}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: d.active ? "#ff7047" : "#141a15",
                    border: `1px solid ${d.active ? "#ff9270" : "#242d25"}`,
                    color: d.active ? "#fff" : "#555",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700
                  }}
                  title={d.active ? "Day Completed" : "Inactive"}
                >
                  {d.active ? "🔥" : d.day}
                </div>
              ))}
            </div>
            <small style={{ color: "#ff8b67", fontSize: 11, fontFamily: "var(--font-mono)" }}>
              {streak} Days Streak Maintained! Don't break the chain!
            </small>
          </div>

          {/* Activity Breakdown Breakdown */}
          <div className="nexus-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 16, color: "#fff" }}>
              📊 Mastery Breakdown
            </h3>
            <p style={{ margin: "0 0 16px", color: "#7a847b", fontSize: 12 }}>
              Overview of problems solved, lectures completed, and systems projects authored.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: "12px 14px", borderRadius: 6, background: "#0b0f0c", border: "1px solid #1c241e" }}>
                <span style={{ color: "#79827a", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>PROBLEMS SOLVED</span>
                <b style={{ color: "#a9ff43", fontSize: 18 }}>{solvedProblems}</b>
              </div>
              <div style={{ padding: "12px 14px", borderRadius: 6, background: "#0b0f0c", border: "1px solid #1c241e" }}>
                <span style={{ color: "#79827a", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>LECTURES WATCHED</span>
                <b style={{ color: "#46d8e7", fontSize: 18 }}>{watchedLectures}</b>
              </div>
              <div style={{ padding: "12px 14px", borderRadius: 6, background: "#0b0f0c", border: "1px solid #1c241e" }}>
                <span style={{ color: "#79827a", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>PROJECTS BUILT</span>
                <b style={{ color: "#ffb627", fontSize: 18 }}>{completedProjects}</b>
              </div>
              <div style={{ padding: "12px 14px", borderRadius: 6, background: "#0b0f0c", border: "1px solid #1c241e" }}>
                <span style={{ color: "#79827a", fontSize: 10, fontFamily: "var(--font-mono)", display: "block" }}>ROADMAP NODES</span>
                <b style={{ color: "#f052b5", fontSize: 18 }}>{completedRoadmaps}</b>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Trophy Shelf */}
        <div className="nexus-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, color: "#fff" }}>
                🏆 Unlocked Badges & Perks Shelf
              </h3>
              <p style={{ margin: 0, color: "#79827a", fontSize: 12 }}>
                Milestone achievements and cosmetic trophies earned along your coding journey.
              </p>
            </div>
            <Link href="/rewards" className="btn-secondary" style={{ fontSize: 11 }}>
              Shop & Rewards Hub →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {rewardBadges.map((b) => {
              const isUnlocked = unlockedBadges.includes(b.id) || claimedRewards.includes(b.id);
              return (
                <div
                  key={b.id}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 8,
                    border: `1px solid ${isUnlocked ? b.color : "#222a23"}`,
                    background: isUnlocked ? `${b.color}0f` : "#0b0e0c",
                    opacity: isUnlocked ? 1 : 0.45,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start"
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 8,
                    background: isUnlocked ? `${b.color}25` : "#141a15",
                    border: `1px solid ${isUnlocked ? b.color : "#333"}`,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 20,
                    flexShrink: 0
                  }}>
                    {b.icon}
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <b style={{ color: isUnlocked ? "#fff" : "#777", fontSize: 13 }}>{b.name}</b>
                      {isUnlocked && <span style={{ color: b.color, fontSize: 10 }}>✓</span>}
                    </div>
                    <small style={{ display: "block", color: "#8a948c", fontSize: 11, lineHeight: 1.3 }}>
                      {b.desc}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
