"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import { rewardBadges } from "../rewardsData";
import usePlayer from "../usePlayer";
import "../../components/game/duolingo-map.css";

export default function RewardsPage() {
  const { user, stats, claimReward, togglePerk } = usePlayer();
  const [toast, setToast] = useState("");

  const totalClearedLevels = Object.values(stats?.campaigns || {}).reduce(
    (total, run) => total + (run.completedLevels?.length || 0),
    0
  );

  function triggerToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#ffc800", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                IN-GAME SHOP & POWER-UPS
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🛒 Shop & Rewards
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={stats?.streak || 1} />
              <XPBar xp={stats?.totalXp || 0} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Rewards & Perks Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {rewardBadges.map((badge) => {
              const isClaimed = stats?.claimedRewards?.includes(badge.id);
              const isPerk = badge.type === "perk" || badge.type === "theme";
              const isEquipped = isPerk && stats?.equippedPerks?.includes(badge.id);

              const meetsReq =
                badge.reqType === "xp"
                  ? (stats?.totalXp || 0) >= badge.reqVal
                  : totalClearedLevels >= badge.reqVal;

              return (
                <div
                  key={badge.id}
                  style={{
                    background: "#131f24",
                    border: `2px solid ${meetsReq ? "#58cc02" : "#202f36"}`,
                    borderRadius: 20,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontSize: 36 }}>{badge.icon}</span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          padding: "4px 10px",
                          borderRadius: 10,
                          background: "#202f36",
                          color: "#1cb0f6"
                        }}
                      >
                        {badge.category}
                      </span>
                    </div>
                    <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#fff", fontWeight: 800 }}>{badge.name}</h3>
                    <p style={{ margin: "0 0 16px", color: "#84959f", fontSize: 13, lineHeight: 1.5 }}>{badge.desc}</p>
                  </div>

                  <div>
                    <div style={{ fontSize: 12, color: "#84959f", marginBottom: 14, fontWeight: 700 }}>
                      REQUIREMENT: <span style={{ color: "#ffc800" }}>{badge.reqVal} {badge.reqType === "xp" ? "XP" : "Levels"}</span>
                    </div>

                    {!isClaimed ? (
                      <button
                        onClick={() => {
                          if (meetsReq) {
                            claimReward(badge.id);
                            triggerToast(`🎉 Unlocked ${badge.name}!`);
                          } else {
                            triggerToast(`🔒 Requires ${badge.reqVal} ${badge.reqType.toUpperCase()}`);
                          }
                        }}
                        type="button"
                        style={{
                          width: "100%",
                          padding: "12px",
                          borderRadius: 14,
                          background: meetsReq ? "#58cc02" : "#202f36",
                          color: meetsReq ? "#fff" : "#6b7d87",
                          border: "none",
                          fontWeight: 900,
                          fontSize: 13,
                          cursor: meetsReq ? "pointer" : "not-allowed"
                        }}
                      >
                        {meetsReq ? "CLAIM REWARD" : "LOCKED"}
                      </button>
                    ) : isPerk ? (
                      <button
                        onClick={() => {
                          togglePerk(badge.id);
                          triggerToast(isEquipped ? "Perk Unequipped" : "⚡ Perk Equipped!");
                        }}
                        type="button"
                        style={{
                          width: "100%",
                          padding: "12px",
                          borderRadius: 14,
                          background: isEquipped ? "#1cb0f6" : "#202f36",
                          color: "#fff",
                          border: "none",
                          fontWeight: 900,
                          fontSize: 13,
                          cursor: "pointer"
                        }}
                      >
                        {isEquipped ? "EQUIPPED ✓" : "EQUIP PERK"}
                      </button>
                    ) : (
                      <div
                        style={{
                          padding: "12px",
                          borderRadius: 14,
                          background: "rgba(88,204,2,0.15)",
                          color: "#58cc02",
                          textAlign: "center",
                          fontWeight: 900,
                          fontSize: 13
                        }}
                      >
                        UNLOCKED ✓
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 9999, background: "#58cc02", color: "#fff", padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14 }}>
          {toast}
        </div>
      )}
    </div>
  );
}
