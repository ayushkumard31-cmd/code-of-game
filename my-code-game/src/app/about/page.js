"use client";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";

export default function AboutPage() {
  const { stats } = usePlayer();
  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  return (
    <main className={`shell storefront ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      <Navbar />

      <section className="hs-about" style={{ borderTop: 0, paddingTop: 48 }}>
        <div className="hs-inner">
          <div className="hs-head">
            <small>HOW IT WORKS</small>
            <h2>Master Data Structures in 3 Dimensions</h2>
            <p>Your step-by-step roadmap to conquering the coding dungeon.</p>
          </div>
          <div className="steps-grid">
            {[
              {
                n: "01",
                icon: "⌘",
                title: "Visualizer & 0 XP Practice",
                body: "Play with live Stack, Queue and Linked List machines. Complete 0 XP subjective concept tests to hone your mental models without ranking pressure."
              },
              {
                n: "02",
                icon: "◎",
                title: "Campaign Quests",
                body: "Solve concept trials, complete real C code, and fix pointer bugs without running out of lives. Earn XP per cleared tier."
              },
              {
                n: "03",
                icon: "★",
                title: "Boss Raids & Perks",
                body: "Fight the Algorithmic Overlord in the 10-stage Final DSA Test, claim unlockable badges, and equip Heart Containers (+1 Life) and 50/50 sight."
              }
            ].map((s) => (
              <div key={s.n} className="step-card">
                <div className="step-num">{s.n}</div>
                <i>{s.icon}</i>
                <b>{s.title}</b>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
