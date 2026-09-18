"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { leaderboardRanks } from "../data/leaderboardData";

export default function LeaderboardPage() {
  const { stats, user } = usePlayer();
  const [timeframe, setTimeframe] = useState("all-time");

  const userXp = stats?.totalXp || 0;
  const userStreak = stats?.streak || 1;
  const userName = user?.displayName || user?.email?.split("@")[0] || "You (Player)";

  return (
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

      <div className="nexus-container">
        <div className="nexus-header">
          <small>GLOBAL HALL OF FAME</small>
          <h1>🥇 Developer Leaderboard</h1>
          <p>
            Compete with engineers worldwide. Climb the ranks by solving practice problems, watching lectures, building systems projects, and conquering daily quests.
          </p>
        </div>

        {/* Timeframe Filter */}
        <div className="nexus-tabs">
          {["all-time", "weekly", "monthly"].map((tf) => (
            <button
              key={tf}
              className={`nexus-tab-btn ${timeframe === tf ? "active" : ""}`}
              onClick={() => setTimeframe(tf)}
              type="button"
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 36
        }}>
          {leaderboardRanks.slice(0, 3).map((player, idx) => {
            const medalColors = ["#ffd700", "#c0c0c0", "#cd7f32"];
            const crowns = ["🥇 1st Place", "🥈 2nd Place", "🥉 3rd Place"];
            return (
              <div
                key={player.rank}
                className="nexus-card"
                style={{
                  textAlign: "center",
                  borderTop: `4px solid ${medalColors[idx]}`,
                  background: `linear-gradient(180deg, ${medalColors[idx]}10, #101411)`
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800, color: medalColors[idx], fontFamily: "var(--font-mono)", marginBottom: 12 }}>
                  {crowns[idx]}
                </div>

                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: medalColors[idx],
                  color: "#0b0d0c",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 20,
                  fontWeight: 900,
                  margin: "0 auto 12px"
                }}>
                  {player.avatar}
                </div>

                <h3 style={{ margin: "0 0 4px", fontSize: 17, color: "#fff" }}>
                  {player.name}
                </h3>
                <span className="tag-badge" style={{ background: "rgba(255,255,255,0.06)", color: "#a9ff43", marginBottom: 14 }}>
                  {player.badge}
                </span>

                <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 14, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                  <span style={{ color: "#ffb627" }}>⭐ {player.xp} XP</span>
                  <span style={{ color: "#ff7047" }}>🔥 {player.streak}d</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* User Rank Spotlight Banner */}
        <div style={{
          padding: "18px 24px",
          borderRadius: 8,
          background: "#162217",
          border: "1px solid #a9ff4340",
          marginBottom: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#a9ff43",
              color: "#0b0d0c",
              display: "grid",
              placeItems: "center",
              fontSize: 16,
              fontWeight: 900
            }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <b style={{ color: "#fff", fontSize: 15 }}>{userName}</b>
              <div style={{ color: "#8b948c", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                Your Standing: Ranked #8 Globally · Keep going to reach the podium!
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, fontFamily: "var(--font-mono)", fontSize: 14 }}>
            <span style={{ color: "#ffb627" }}>⭐ {userXp} XP</span>
            <span style={{ color: "#ff7047" }}>🔥 {userStreak}d Streak</span>
          </div>
        </div>

        {/* Full Table */}
        <div className="nexus-card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "60px minmax(0, 1fr) 140px 100px 100px",
            padding: "14px 20px",
            background: "#0d100e",
            borderBottom: "1px solid #202721",
            color: "#6e776f",
            fontSize: 10,
            fontFamily: "var(--font-mono)",
            letterSpacing: 1
          }}>
            <span>RANK</span>
            <span>CODER</span>
            <span>RANK BADGE</span>
            <span>STREAK</span>
            <span style={{ textAlign: "right" }}>XP</span>
          </div>

          {leaderboardRanks.map((item) => (
            <div
              key={item.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "60px minmax(0, 1fr) 140px 100px 100px",
                padding: "16px 20px",
                borderBottom: "1px solid #1a211b",
                alignItems: "center",
                fontSize: 13
              }}
            >
              <b style={{ color: item.rank <= 3 ? "#a9ff43" : "#7c857e", fontFamily: "var(--font-mono)" }}>
                #{item.rank}
              </b>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#161c17",
                  border: "1px solid #2d382f",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "#a9ff43"
                }}>
                  {item.avatar}
                </span>
                <span style={{ color: "#fff", fontWeight: 700 }}>{item.name}</span>
              </div>

              <span style={{ color: "#8a948b", fontSize: 11 }}>{item.badge}</span>
              <span style={{ color: "#ff7047", fontFamily: "var(--font-mono)", fontSize: 12 }}>🔥 {item.streak}d</span>
              <b style={{ textAlign: "right", color: "#ffb627", fontFamily: "var(--font-mono)" }}>{item.xp}</b>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
