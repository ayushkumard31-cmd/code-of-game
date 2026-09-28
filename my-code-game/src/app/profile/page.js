"use client";

import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import { rewardBadges } from "../rewardsData";
import usePlayer from "../usePlayer";
import "../../components/game/duolingo-map.css";

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
  const userEmail = user?.email || "Guest Account";

  // 14-day activity heat-map
  const days = Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    active: i >= 14 - streak
  }));

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#1cb0f6", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                PLAYER PROFILE & STATS
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                👤 User Profile
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={streak} />
              <XPBar xp={totalXp} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Profile Identity Banner */}
          <div
            style={{
              padding: "28px 32px",
              borderRadius: 20,
              background: "#131f24",
              border: "2px solid #202f36",
              marginBottom: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "#58cc02",
                  color: "#000",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 32,
                  fontWeight: 900
                }}
              >
                {userName[0]?.toUpperCase()}
              </div>
              <div>
                <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#fff" }}>{userName}</h2>
                <div style={{ color: "#84959f", fontSize: 13 }}>{userEmail}</div>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: "#84959f", fontWeight: 800 }}>LEVEL {currentLevel} CODING MAGE</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#ffc800" }}>{totalXp} XP</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 16, padding: 20, textAlign: "center" }}>
              <small style={{ color: "#84959f", fontWeight: 800 }}>STREAK</small>
              <h3 style={{ margin: "6px 0 0", color: "#ff9600", fontSize: 26, fontWeight: 900 }}>🔥 {streak} Days</h3>
            </div>
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 16, padding: 20, textAlign: "center" }}>
              <small style={{ color: "#84959f", fontWeight: 800 }}>PROBLEM SOLVED</small>
              <h3 style={{ margin: "6px 0 0", color: "#58cc02", fontSize: 26, fontWeight: 900 }}>{solvedProblems}</h3>
            </div>
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 16, padding: 20, textAlign: "center" }}>
              <small style={{ color: "#84959f", fontWeight: 800 }}>LECTURES WATCHED</small>
              <h3 style={{ margin: "6px 0 0", color: "#1cb0f6", fontSize: 26, fontWeight: 900 }}>{watchedLectures}</h3>
            </div>
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 16, padding: 20, textAlign: "center" }}>
              <small style={{ color: "#84959f", fontWeight: 800 }}>PATH NODES</small>
              <h3 style={{ margin: "6px 0 0", color: "#ffc800", fontSize: 26, fontWeight: 900 }}>{completedRoadmaps}</h3>
            </div>
          </div>

          {/* Activity Heatmap */}
          <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 24, marginBottom: 32 }}>
            <h3 style={{ margin: "0 0 16px", color: "#fff", fontSize: 16, fontWeight: 900 }}>14-Day Activity Heatmap</h3>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {days.map((d) => (
                <div
                  key={d.day}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: d.active ? "#58cc02" : "#202f36",
                    display: "grid",
                    placeItems: "center",
                    color: d.active ? "#fff" : "#6b7d87",
                    fontWeight: 900,
                    fontSize: 13
                  }}
                  title={`Day ${d.day}: ${d.active ? "Active" : "Inactive"}`}
                >
                  D{d.day}
                </div>
              ))}
            </div>
          </div>

          {/* Unlocked Badges */}
          <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 24 }}>
            <h3 style={{ margin: "0 0 16px", color: "#fff", fontSize: 16, fontWeight: 900 }}>Achievement Badges</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {rewardBadges.map((badge) => {
                const isUnlocked = unlockedBadges.includes(badge.id) || claimedRewards.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    style={{
                      padding: 16,
                      borderRadius: 16,
                      background: isUnlocked ? "rgba(88,204,2,0.12)" : "#18262d",
                      border: `2px solid ${isUnlocked ? "#58cc02" : "#202f36"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 14
                    }}
                  >
                    <span style={{ fontSize: 28, filter: isUnlocked ? "none" : "grayscale(1)" }}>{badge.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: isUnlocked ? "#fff" : "#6b7d87", fontSize: 13 }}>{badge.name}</div>
                      <div style={{ fontSize: 11, color: isUnlocked ? "#58cc02" : "#6b7d87" }}>
                        {isUnlocked ? "UNLOCKED ✓" : "LOCKED"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
