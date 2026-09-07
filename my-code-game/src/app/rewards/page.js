"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import { rewardBadges } from "../rewardsData";
import { getRank } from "../questionBank";
import usePlayer from "../usePlayer";

export default function RewardsPage() {
  const { user, stats, claimReward, togglePerk } = usePlayer();
  const [toast, setToast] = useState("");

  const totalClearedLevels = Object.values(stats?.campaigns || {}).reduce(
    (total, run) => total + (run.completedLevels?.length || 0),
    0
  );

  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  function triggerToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  return (
    <main className={`shell storefront ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      <Navbar />
      {toast && <div className="adm-toast">{toast}</div>}

      <section className="hs-benefits" style={{ borderTop: 0, paddingTop: 48 }}>
        <div className="hs-inner">
          <div className="hs-head">
            <small>WORKABLE REWARDS & SHOP</small>
            <h2>Claim Badges, Equip In-Game Perks</h2>
            <p>Earn XP and clear levels to unlock badges, life containers, and tactical lifelines.</p>
          </div>

          {/* Rewards Grid */}
          <div className="rewards-grid">
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
                  className={`reward-card ${meetsReq ? "unlocked" : ""} ${isClaimed ? "claimed" : ""}`}
                  style={{ "--rc": badge.color }}
                >
                  <div className="reward-head">
                    <div className="reward-icon">{badge.icon}</div>
                    <span className="reward-type-chip">{badge.category}</span>
                  </div>
                  <b>{badge.name}</b>
                  <p>{badge.desc}</p>
                  <div className="reward-perk">⚡ {badge.perk}</div>
                  <div className="reward-req">
                    <span>REQUIREMENT:</span>
                    <b>
                      {badge.reqType === "xp"
                        ? `${badge.reqVal.toLocaleString()} XP (${stats?.totalXp || 0}/${badge.reqVal})`
                        : `${badge.reqVal} Levels Cleared (${totalClearedLevels}/${badge.reqVal})`}
                    </b>
                  </div>

                  {!isClaimed ? (
                    <button
                      type="button"
                      className="reward-action-btn"
                      disabled={!meetsReq}
                      onClick={() => {
                        if (!user) { triggerToast("Please sign in first to claim rewards."); return; }
                        claimReward(badge.id);
                        triggerToast(`🎉 Claimed reward: ${badge.name}!`);
                      }}
                    >
                      {meetsReq ? "CLAIM REWARD" : "LOCKED"}
                    </button>
                  ) : isPerk ? (
                    <button
                      type="button"
                      className={`reward-action-btn ${isEquipped ? "btn-perk-active" : "btn-claimed"}`}
                      onClick={() => {
                        togglePerk(badge.id);
                        triggerToast(isEquipped ? `Unequipped ${badge.name}` : `⚡ Equipped ${badge.name}!`);
                      }}
                    >
                      {isEquipped ? "EQUIPPED ⚡ (CLICK TO UNEQUIP)" : "EQUIP PERK"}
                    </button>
                  ) : (
                    <button type="button" className="reward-action-btn btn-claimed" disabled>
                      CLAIMED ✓
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Rank Ladder */}
          <div className="rank-ladder">
            {[
              { name: "ROOKIE", xp: 0, color: "#7d827c" },
              { name: "CODE EXPLORER", xp: 500, color: "#58d68d" },
              { name: "ALGORITHM KNIGHT", xp: 1200, color: "#4ec9e8" },
              { name: "BUG SLAYER", xp: 2500, color: "#b377ff" },
              { name: "CODE MASTER", xp: 4500, color: "#ffb627" },
              { name: "LEGEND", xp: 5500, color: "#ff5340" },
            ].map((r, i) => (
              <div
                key={i}
                className={`rank-row${getRank(stats?.totalXp || 0).name === r.name ? " rank-active" : ""}`}
                style={{ "--rc": r.color }}
              >
                <span className="rank-num">{String(i + 1).padStart(2, "0")}</span>
                <b>{r.name}</b>
                <em>{r.xp === 0 ? "Starting rank" : `${r.xp.toLocaleString()}+ XP required`}</em>
                {getRank(stats?.totalXp || 0).name === r.name && <mark>YOUR RANK</mark>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
