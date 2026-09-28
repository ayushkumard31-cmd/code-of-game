"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import usePlayer from "../usePlayer";
import { leaderboardRanks } from "../data/leaderboardData";
import "../../components/game/duolingo-map.css";

export default function LeaderboardPage() {
  const { stats, user } = usePlayer();
  const [timeframe, setTimeframe] = useState("all-time");

  const userXp = stats?.totalXp || 0;
  const userStreak = stats?.streak || 1;
  const userName = user?.displayName || user?.email?.split("@")[0] || "You (Player)";

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#ffc800", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                GLOBAL HALL OF FAME
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🏆 Leaderboard
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={userStreak} />
              <XPBar xp={userXp} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Timeframe selector */}
          <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
            {["all-time", "weekly", "monthly"].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                type="button"
                style={{
                  padding: "10px 20px",
                  borderRadius: 14,
                  background: timeframe === tf ? "rgba(255,200,0,0.15)" : "#131f24",
                  border: `2px solid ${timeframe === tf ? "#ffc800" : "#202f36"}`,
                  color: timeframe === tf ? "#ffc800" : "#84959f",
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: "pointer",
                  textTransform: "uppercase"
                }}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
            {leaderboardRanks.slice(0, 3).map((player, idx) => {
              const medalColors = ["#ffd700", "#c0c0c0", "#cd7f32"];
              const crowns = ["🥇 1st Place", "🥈 2nd Place", "🥉 3rd Place"];
              return (
                <div
                  key={player.rank}
                  style={{
                    background: "#131f24",
                    border: `2px solid ${medalColors[idx]}`,
                    borderRadius: 20,
                    padding: "24px 20px",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{crowns[idx].split(" ")[0]}</div>
                  <h3 style={{ margin: "0 0 4px", color: "#fff", fontSize: 18, fontWeight: 900 }}>{player.name}</h3>
                  <div style={{ color: medalColors[idx], fontWeight: 800, fontSize: 14 }}>{player.xp} XP</div>
                  <div style={{ color: "#84959f", fontSize: 12, marginTop: 4 }}>🔥 {player.streak} day streak</div>
                </div>
              );
            })}
          </div>

          {/* Full Ranks List */}
          <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 20 }}>
            {/* Player's current status banner */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: 14,
                background: "rgba(88,204,2,0.12)",
                border: "2px solid #58cc02",
                marginBottom: 16
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#58cc02" }}>#42</span>
                <span style={{ fontWeight: 900, color: "#fff" }}>{userName} (YOU)</span>
              </div>
              <div style={{ fontWeight: 900, color: "#58cc02" }}>{userXp} XP</div>
            </div>

            {leaderboardRanks.map((player) => (
              <div
                key={player.rank}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  borderRadius: 14,
                  borderBottom: "1px solid #202f36"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ width: 28, fontWeight: 900, color: "#84959f", fontSize: 14 }}>#{player.rank}</span>
                  <span style={{ fontWeight: 800, color: "#fff", fontSize: 14 }}>{player.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ color: "#84959f", fontSize: 12 }}>🔥 {player.streak}d</span>
                  <span style={{ fontWeight: 900, color: "#ffc800", fontSize: 14 }}>{player.xp} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
