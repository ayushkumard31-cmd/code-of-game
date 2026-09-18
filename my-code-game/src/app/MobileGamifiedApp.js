"use client";

import "./responsive-platform.css";
import { useState, useEffect, useCallback } from "react";
import {
  ALL_UNITS,
  LEADERBOARD_USERS,
  SHOP_ITEMS,
  ACHIEVEMENTS,
} from "./curriculumData";
import usePlayer from "./usePlayer";

const HEART_REFILL_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes in milliseconds
const MAX_HEARTS = 5;

export default function MobileGamifiedApp() {
  const { user, login, logout, loading: authLoading } = usePlayer();

  const [mobileTab, setMobileTab] = useState("path"); // "path" | "leaderboard" | "shop" | "profile"
  const [selectedUnitId, setSelectedUnitId] = useState(1); // Start at Unit 1 for new player
  const [isUnitSelectorOpen, setIsUnitSelectorOpen] = useState(false);
  const [isHeartModalOpen, setIsHeartModalOpen] = useState(false);
  const [nextHeartCountdown, setNextHeartCountdown] = useState("Full");

  // Beginner Player Default Metrics (Hearts default to 5)
  const defaultPlayerState = {
    streak: 0,
    coins: 0,
    xp: 0,
    hearts: 5,
    maxHearts: 5,
    lastHeartRefillTime: Date.now(),
    completedNodeIds: [],
    inventory: [],
  };

  const [playerData, setPlayerData] = useState(defaultPlayerState);
  const [hasLoadedAccount, setHasLoadedAccount] = useState(false);

  // Modal & Challenge state
  const [selectedPathNode, setSelectedPathNode] = useState(null);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isChallengeActive, setIsChallengeActive] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizIsCorrect, setQuizIsCorrect] = useState(false);
  const [shopNotification, setShopNotification] = useState("");

  // Determine storage key based on Google account UID
  const getAccountStorageKey = useCallback(() => {
    return user ? `gamified_dsa_account_${user.uid}` : "gamified_dsa_guest";
  }, [user]);

  // Load progression tied to Google Account and compute offline heart regeneration
  useEffect(() => {
    if (authLoading) return;
    const key = getAccountStorageKey();
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        let hearts = typeof parsed.hearts === "number" ? parsed.hearts : 5;
        let lastRefill = parsed.lastHeartRefillTime || Date.now();

        // If player has 0 hearts from previous reset with no completed nodes, give beginner default of 5 hearts
        if (hearts === 0 && (!parsed.completedNodeIds || parsed.completedNodeIds.length === 0)) {
          hearts = 5;
        }

        // Catch-up: calculate elapsed 15-minute intervals if hearts were not full
        if (hearts < MAX_HEARTS) {
          const now = Date.now();
          const elapsed = now - lastRefill;
          if (elapsed >= HEART_REFILL_INTERVAL_MS) {
            const heartsToAdd = Math.floor(elapsed / HEART_REFILL_INTERVAL_MS);
            hearts = Math.min(MAX_HEARTS, hearts + heartsToAdd);
            lastRefill =
              hearts >= MAX_HEARTS
                ? now
                : lastRefill + heartsToAdd * HEART_REFILL_INTERVAL_MS;
          }
        }

        setPlayerData({
          ...defaultPlayerState,
          ...parsed,
          hearts,
          lastHeartRefillTime: lastRefill,
        });
      } else {
        // Fresh new player initialization (5 hearts default)
        setPlayerData({
          ...defaultPlayerState,
          hearts: 5,
          lastHeartRefillTime: Date.now(),
        });
      }
    } catch {
      setPlayerData({
        ...defaultPlayerState,
        hearts: 5,
        lastHeartRefillTime: Date.now(),
      });
    }
    setHasLoadedAccount(true);
  }, [user, authLoading, getAccountStorageKey]);

  // Save progression whenever stats change
  useEffect(() => {
    if (!hasLoadedAccount || authLoading) return;
    const key = getAccountStorageKey();
    try {
      localStorage.setItem(key, JSON.stringify(playerData));
    } catch (e) {
      console.warn("Error saving account progression:", e);
    }
  }, [playerData, hasLoadedAccount, authLoading, getAccountStorageKey]);

  // Active 15-Minute Heart Regeneration Live Timer (awards +1 heart every 15 mins up to 5)
  useEffect(() => {
    if (!hasLoadedAccount) return;

    function updateHeartTimer() {
      if (playerData.hearts >= MAX_HEARTS) {
        setNextHeartCountdown("Full");
        return;
      }

      const now = Date.now();
      const lastRefill = playerData.lastHeartRefillTime || now;
      const elapsed = now - lastRefill;

      if (elapsed >= HEART_REFILL_INTERVAL_MS) {
        const heartsToAdd = Math.floor(elapsed / HEART_REFILL_INTERVAL_MS);
        const newHearts = Math.min(MAX_HEARTS, playerData.hearts + heartsToAdd);
        const newRefillTime =
          newHearts >= MAX_HEARTS
            ? now
            : lastRefill + heartsToAdd * HEART_REFILL_INTERVAL_MS;

        setPlayerData((prev) => ({
          ...prev,
          hearts: newHearts,
          lastHeartRefillTime: newRefillTime,
        }));

        if (newHearts >= MAX_HEARTS) {
          setNextHeartCountdown("Full");
        }
      } else {
        const remainingMs = Math.max(0, HEART_REFILL_INTERVAL_MS - elapsed);
        const totalSeconds = Math.floor(remainingMs / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        setNextHeartCountdown(
          `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        );
      }
    }

    updateHeartTimer();
    const timerInterval = setInterval(updateHeartTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [playerData.hearts, playerData.lastHeartRefillTime, hasLoadedAccount]);

  // Handle Google Sign-in with diagnostic error handling
  async function handleGoogleSignIn() {
    try {
      const signedInUser = await login();
      if (signedInUser) {
        setShopNotification(`Welcome, ${signedInUser.displayName || "Scholar"}! Connected via Google.`);
        setTimeout(() => setShopNotification(""), 4000);
      }
    } catch (err) {
      console.error("Firebase Google Auth Error:", err);
      const currentHost = typeof window !== "undefined" ? window.location.hostname : "your IP";

      if (err?.code === "auth/unauthorized-domain") {
        alert(
          `⚠️ Firebase Auth Error (auth/unauthorized-domain):\n\n` +
          `The domain/IP "${currentHost}" is not authorized in Firebase Console.\n\n` +
          `How to fix:\n` +
          `1. Go to console.firebase.google.com -> Your Project (code-of-game) -> Authentication -> Settings -> Authorized domains\n` +
          `2. Add "${currentHost}"\n\n` +
          `Or test on PC via http://localhost:3000 (which is authorized by default).`
        );
      } else if (err?.code === "auth/popup-blocked") {
        alert(
          `⚠️ Pop-up Blocked:\n\n` +
          `Your browser blocked the Google sign-in window. Please enable pop-ups in your browser settings for this page and try again.`
        );
      } else if (err?.code === "auth/popup-closed-by-user") {
        setShopNotification("ℹ️ Google sign-in popup was closed.");
        setTimeout(() => setShopNotification(""), 3000);
      } else if (err?.code === "auth/operation-not-allowed") {
        alert(
          `⚠️ Firebase Configuration Error:\n\n` +
          `Google Sign-In is not enabled in Firebase Console. Please enable Google provider in Firebase Console -> Authentication -> Sign-in method.`
        );
      } else {
        alert(`Google Sign-In failed: ${err?.message || err?.code || "Unknown error"}`);
      }
    }
  }

  // Handle Sign out
  async function handleSignOut() {
    try {
      await logout();
      setShopNotification("Signed out of Google account.");
      setTimeout(() => setShopNotification(""), 3000);
    } catch (err) {
      console.error(err);
    }
  }

  // Get active unit
  const activeUnit = ALL_UNITS.find((u) => u.id === selectedUnitId) || ALL_UNITS[0];

  function getNodeStatus(node) {
    if (playerData.completedNodeIds.includes(node.id)) return "completed";
    return "active"; // Every level is accessible to explore
  }

  function handleNodeClick(node) {
    if (node.type === "chest") {
      if (!node.claimed) {
        setPlayerData((prev) => ({
          ...prev,
          coins: prev.coins + node.coins,
          xp: prev.xp + node.xp,
        }));
        node.claimed = true;
        setShopNotification(`🎉 Treasure Claimed! +${node.coins} Coins & +${node.xp} XP added to your account.`);
        setTimeout(() => setShopNotification(""), 3500);
      }
      return;
    }

    setSelectedPathNode(node);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
    setIsChallengeActive(false);
    setIsLessonModalOpen(true);
  }

  function startChallenge() {
    if (playerData.hearts <= 0) {
      alert(`💔 You have 0 hearts! Your next heart will arrive in ${nextHeartCountdown}.`);
      return;
    }
    setIsChallengeActive(true);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  }

  function handleMobileQuizSubmit() {
    if (selectedQuizOption === null || !selectedPathNode?.quiz) return;
    const isCorrect = selectedPathNode.quiz.options[selectedQuizOption]?.correct;
    setQuizSubmitted(true);
    setQuizIsCorrect(isCorrect);

    if (isCorrect) {
      const earnedXp = selectedPathNode.xp || 25;
      const earnedCoins = selectedPathNode.coins || 15;
      setPlayerData((prev) => ({
        ...prev,
        xp: prev.xp + earnedXp,
        coins: prev.coins + earnedCoins,
        streak: prev.streak === 0 ? 1 : prev.streak, // Start 1-day streak on first win
        completedNodeIds: prev.completedNodeIds.includes(selectedPathNode.id)
          ? prev.completedNodeIds
          : [...prev.completedNodeIds, selectedPathNode.id],
      }));
    } else {
      setPlayerData((prev) => {
        const newHearts = Math.max(0, prev.hearts - 1);
        const lastRefill =
          prev.hearts >= MAX_HEARTS
            ? Date.now()
            : prev.lastHeartRefillTime || Date.now();
        return {
          ...prev,
          hearts: newHearts,
          lastHeartRefillTime: lastRefill,
        };
      });
    }
  }

  function handleBuyItem(item) {
    if (playerData.coins < item.cost) {
      alert("Not enough coins! Earn more golden coins by completing practice levels.");
      return;
    }
    setPlayerData((prev) => ({
      ...prev,
      coins: prev.coins - item.cost,
      hearts: item.id === "heart-refill" ? MAX_HEARTS : prev.hearts,
      lastHeartRefillTime:
        item.id === "heart-refill" ? Date.now() : prev.lastHeartRefillTime,
      inventory: [...prev.inventory, item.id],
    }));
    setShopNotification(`Purchased ${item.title}! Saved to account.`);
    setTimeout(() => setShopNotification(""), 3000);
  }

  const displayName = user?.displayName || "New Player";
  const userEmail = user?.email || "Guest (Sign in to sync)";
  const userAvatar = user?.photoURL ? (
    <img
      src={user.photoURL}
      alt={displayName}
      style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid #58cc02" }}
    />
  ) : (
    <span style={{ fontSize: "50px" }}>🦉</span>
  );

  // 1. Sleek Loading State while Firebase checks Google Auth session
  if (authLoading) {
    return (
      <div className="mobile-gamified-root">
        <div
          className="gamified-mobile-app"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "64px", animation: "flame-pulse 1.2s infinite ease-in-out" }}>🦉</span>
          <h3 style={{ color: "#f8fafc", marginTop: "16px", fontSize: "20px", fontWeight: "700" }}>
            Loading DSA Quest...
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "6px" }}>
            Preparing your learning journey
          </p>
        </div>
      </div>
    );
  }

  // 2. Compulsory Google Sign-In Gate when the link is opened
  if (!user) {
    return (
      <div className="mobile-gamified-root">
        <div
          className="gamified-mobile-app"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100vh",
            padding: "48px 24px 36px",
            textAlign: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "340px", margin: "auto 0" }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "18px" }}>
              <span style={{ fontSize: "80px", display: "inline-block", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }}>
                🦉
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "-8px",
                  fontSize: "26px",
                }}
              >
                ✨
              </span>
            </div>

            <h1
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#58cc02",
                margin: "0 0 8px",
                letterSpacing: "0.5px",
              }}
            >
              DSA Quest
            </h1>

            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.5", margin: "0 0 24px" }}>
              Master Data Structures & Algorithms through bite-sized, interactive gamified lessons.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                background: "#151d2d",
                border: "2px solid #243249",
                borderRadius: "18px",
                padding: "16px",
                marginBottom: "28px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#f8fafc" }}>
                <span>⚡</span>
                <span><b>25+ Interactive Challenges</b> across 5 Units</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#f8fafc" }}>
                <span>🔥</span>
                <span><b>Streak & XP Tracking</b> tied to your account</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#f8fafc" }}>
                <span>❤️</span>
                <span><b>5 Hearts to start</b> (15-min auto-refill)</span>
              </div>
            </div>

            <button
              type="button"
              id="btn-compulsory-google-login"
              onClick={handleGoogleSignIn}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                background: "#ffffff",
                color: "#1e293b",
                border: "none",
                borderRadius: "16px",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: "800",
                cursor: "pointer",
                boxShadow: "0 5px 0 #cbd5e1",
                width: "100%",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>SIGN IN WITH GOOGLE</span>
            </button>

            <small style={{ display: "block", marginTop: "14px", fontSize: "11px", color: "#64748b" }}>
              Google Sign-In is required to play and save your progression.
            </small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-gamified-root">
      <div className="gamified-mobile-app">
        {/* Minimal Top Status Bar (Duolingo Dark Mode Header) */}
        <header className="gamified-topbar">
          <button
            type="button"
            className="gamified-flag-pill"
            onClick={() => setIsUnitSelectorOpen(true)}
          >
            <span>{activeUnit.icon}</span>
            <b>Unit {activeUnit.number} ▾</b>
          </button>

          <div className="gamified-stats-cluster">
            <div
              className="gamified-stat-item streak"
              title="Daily Continuous Streak"
              onClick={() => alert(`🔥 ${playerData.streak} Day Streak! Win a lesson today to increase your streak!`)}
            >
              <span className="flame-wiggle">🔥</span>
              <b>{playerData.streak}</b>
            </div>

            <div
              className="gamified-stat-item coins"
              title="Golden Coins"
              onClick={() => setMobileTab("shop")}
            >
              <span>🪙</span>
              <b>{playerData.coins}</b>
            </div>

            <div
              className="gamified-stat-item hearts"
              title="Practice Hearts"
              onClick={() => setIsHeartModalOpen(true)}
            >
              <span>❤️</span>
              <b>{playerData.hearts}</b>
            </div>

            <div className="gamified-stat-item xp" title="Learning XP">
              <span>⚡</span>
              <b>{playerData.xp}</b>
            </div>

            {/* Quick Google Profile Avatar / Login trigger */}
            <button
              type="button"
              onClick={() => (user ? setMobileTab("profile") : handleGoogleSignIn())}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              title={user ? `Signed in as ${user.displayName}` : "Sign in with Google"}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Account"
                  style={{ width: "28px", height: "28px", borderRadius: "50%", border: "2px solid #1cb0f6" }}
                />
              ) : (
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#243249",
                    color: "#f8fafc",
                    fontSize: "12px",
                    fontWeight: "700",
                    border: "1px solid #334155",
                  }}
                >
                  G
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Global Notification Banner */}
        {shopNotification && (
          <div
            style={{
              background: "#163810",
              color: "#86efac",
              padding: "10px 16px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "13px",
              borderBottom: "2px solid #22c55e",
            }}
          >
            {shopNotification}
          </div>
        )}

        {/* TAB 1: GAMIFIED LINEAR LEARNING PATH */}
        {mobileTab === "path" && (
          <div>
            {/* Unit Header Card */}
            <div className="gamified-unit-banner">
              <div className="gamified-unit-header">
                <span className="gamified-unit-subtitle">{activeUnit.badge} • 5 Lessons</span>
                <button
                  type="button"
                  className="gamified-unit-guidebook-btn"
                  onClick={() => setIsUnitSelectorOpen(true)}
                >
                  🔄 Switch Unit
                </button>
              </div>
              <h2 className="gamified-unit-title">{activeUnit.title}</h2>

              <div className="gamified-mascot-row">
                <span className="gamified-mascot-avatar">🦉</span>
                <div className="gamified-mascot-speech">
                  <b>Duo says:</b> "{activeUnit.tip}"
                </div>
              </div>
            </div>

            {/* Vertical Winding Learning Path */}
            <div className="gamified-path-container">
              {activeUnit.nodes.map((node) => {
                const status = getNodeStatus(node);
                const isChest = node.type === "chest";
                const isBoss = node.type === "boss";

                let buttonClass = `gamified-circle-node ${status}`;
                if (isChest) buttonClass += " chest";
                if (isBoss) buttonClass += " boss";

                return (
                  <div
                    key={node.id}
                    className="gamified-node-wrapper"
                    style={{ transform: `translateX(${node.offset}px)` }}
                  >
                    {/* Floating "PLAY" Tooltip on First Active Node */}
                    {status === "active" && !isChest && (
                      <div className="gamified-start-tooltip">PLAY +{node.xp} XP</div>
                    )}

                    {/* Stars Above Completed Nodes */}
                    {status === "completed" && (
                      <div className="gamified-crown-stars">
                        <span>⭐</span>
                        <span>👑</span>
                        <span>⭐</span>
                      </div>
                    )}

                    <button
                      type="button"
                      id={`btn-node-${node.id}`}
                      className={buttonClass}
                      onClick={() => handleNodeClick(node)}
                      style={{ touchAction: "manipulation" }}
                    >
                      <span className="gamified-node-icon">
                        {isChest
                          ? node.claimed
                            ? "✨"
                            : "🎁"
                          : status === "completed"
                          ? "✓"
                          : node.icon}
                      </span>
                    </button>

                    <span className="gamified-node-label">{node.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: LEADERBOARDS (LEAGUES - NOT AVAILABLE AT THE MOMENT) */}
        {mobileTab === "leaderboard" && (
          <div
            className="gamified-screen-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "65vh",
              padding: "40px 20px",
            }}
          >
            <span style={{ fontSize: "72px", marginBottom: "16px", display: "inline-block" }}>🏆</span>
            <h2 className="gamified-screen-title" style={{ marginBottom: "6px" }}>
              Leagues
            </h2>
            <div
              style={{
                display: "inline-block",
                padding: "8px 18px",
                borderRadius: "14px",
                background: "#243249",
                color: "#ffc800",
                fontWeight: "800",
                fontSize: "14px",
                margin: "10px 0 16px",
                border: "1px solid #334155",
              }}
            >
              Not available at the moment
            </div>
            <p
              className="gamified-screen-desc"
              style={{ maxWidth: "300px", margin: "0 auto 28px", color: "#94a3b8", lineHeight: "1.5" }}
            >
              Weekly tournament leagues and divisions are currently being designed. Check back in a future update!
            </p>
            <button
              type="button"
              className="duo-btn green"
              onClick={() => setMobileTab("path")}
              style={{ maxWidth: "240px" }}
            >
              CONTINUE LEARNING →
            </button>
          </div>
        )}

        {/* TAB 3: IN-GAME SHOP */}
        {mobileTab === "shop" && (
          <div className="gamified-screen-container">
            <h2 className="gamified-screen-title">In-Game Store 🏪</h2>
            <p className="gamified-screen-desc">
              Spend golden coins to equip streak freezes, restore hearts, and boost XP!
            </p>

            <div className="shop-cards-grid">
              {SHOP_ITEMS.map((item) => {
                const isPurchased = playerData.inventory?.includes(item.id) && item.id !== "heart-refill";
                return (
                  <div key={item.id} className="shop-card">
                    <div className="shop-card-info">
                      <span className="shop-card-icon">{item.icon}</span>
                      <div>
                        <h4 className="shop-card-title">{item.title}</h4>
                        <p className="shop-card-desc">{item.description}</p>
                      </div>
                    </div>

                    <div className="shop-card-action">
                      {isPurchased ? (
                        <button type="button" className="duo-btn gray" disabled>
                          EQUIPPED
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="duo-btn green"
                          onClick={() => handleBuyItem(item)}
                        >
                          🪙 {item.cost}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: LEARNER PROFILE & GOOGLE SYNC */}
        {mobileTab === "profile" && (
          <div className="gamified-screen-container">
            <div className="profile-hero">
              <div className="profile-avatar-big">{userAvatar}</div>
              <h2 className="profile-name">{displayName}</h2>
              <p className="profile-joined">{userEmail}</p>

              {/* Google Sign-in / Sign-out Action Card */}
              <div style={{ marginTop: "16px" }}>
                {!user ? (
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      background: "#ffffff",
                      color: "#1e293b",
                      border: "none",
                      borderRadius: "14px",
                      padding: "12px 20px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      boxShadow: "0 4px 0 #cbd5e1",
                      width: "100%",
                      maxWidth: "280px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Sign In with Google</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSignOut}
                    style={{
                      background: "#243249",
                      color: "#f8fafc",
                      border: "1px solid #334155",
                      borderRadius: "12px",
                      padding: "8px 16px",
                      fontSize: "12px",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    🚪 Sign Out of Google
                  </button>
                )}
              </div>
            </div>

            {/* Metrics Dashboard (Synchronized & Tied to Account) */}
            <div className="profile-stats-grid">
              <div className="profile-stat-box">
                <span style={{ fontSize: "24px" }}>🔥</span>
                <div>
                  <b>{playerData.streak} Days</b>
                  <span>Streak Flame</span>
                </div>
              </div>
              <div className="profile-stat-box">
                <span style={{ fontSize: "24px" }}>⚡</span>
                <div>
                  <b>{playerData.xp} XP</b>
                  <span>Lightning XP</span>
                </div>
              </div>
              <div className="profile-stat-box">
                <span style={{ fontSize: "24px" }}>🪙</span>
                <div>
                  <b>{playerData.coins}</b>
                  <span>Golden Coins</span>
                </div>
              </div>
              <div
                className="profile-stat-box"
                onClick={() => setIsHeartModalOpen(true)}
                style={{ cursor: "pointer" }}
                title="Practice Hearts"
              >
                <span style={{ fontSize: "24px" }}>❤️</span>
                <div>
                  <b>{playerData.hearts} / 5</b>
                  <span>Hearts / Lives</span>
                </div>
              </div>
            </div>

            <h3 style={{ margin: "0 0 12px", fontSize: "18px", fontWeight: "700" }}>
              Mastery Achievements
            </h3>
            <div className="achievements-list">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="achievement-card">
                  <span className="achievement-icon">{ach.icon}</span>
                  <div>
                    <h4 className="achievement-title">{ach.title}</h4>
                    <p className="achievement-desc">{ach.desc}</p>
                  </div>
                  <span className="achievement-badge">{ach.progress}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UNIT SELECTOR DRAWER */}
        {isUnitSelectorOpen && (
          <div
            className="duo-modal-backdrop"
            onClick={() => setIsUnitSelectorOpen(false)}
            style={{ zIndex: 1100 }}
          >
            <div
              className="duo-modal-card"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "85vh", overflowY: "auto" }}
            >
              <div className="duo-modal-pill" />
              <div className="duo-modal-header">
                <h3 className="duo-modal-title">Select Learning Unit</h3>
                <button
                  type="button"
                  className="duo-modal-close"
                  onClick={() => setIsUnitSelectorOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: "grid", gap: "10px", margin: "16px 0" }}>
                {ALL_UNITS.map((unit) => {
                  const isSelected = unit.id === selectedUnitId;
                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => {
                        setSelectedUnitId(unit.id);
                        setIsUnitSelectorOpen(false);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "16px",
                        borderRadius: "18px",
                        border: isSelected ? "3px solid #58cc02" : "2px solid #243249",
                        background: isSelected ? "#163810" : "#151d2d",
                        textAlign: "left",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        color: "#f8fafc",
                      }}
                    >
                      <span style={{ fontSize: "32px" }}>{unit.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "800", fontSize: "16px", color: isSelected ? "#86efac" : "#f8fafc" }}>
                          Unit {unit.number}: {unit.title}
                        </div>
                        <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>
                          {unit.subtitle}
                        </div>
                      </div>
                      {isSelected && (
                        <span style={{ color: "#22c55e", fontWeight: "900", fontSize: "20px" }}>
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* HEART DETAILS & 15-MINUTE REGENERATION MODAL */}
        {isHeartModalOpen && (
          <div
            className="duo-modal-backdrop"
            onClick={() => setIsHeartModalOpen(false)}
            style={{ zIndex: 1100 }}
          >
            <div className="duo-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="duo-modal-pill" />
              <div className="duo-modal-header">
                <h3 className="duo-modal-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>❤️</span> Hearts & Lives
                </h3>
                <button
                  type="button"
                  className="duo-modal-close"
                  onClick={() => setIsHeartModalOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", fontSize: "28px", margin: "14px 0" }}>
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <span
                      key={idx}
                      style={{
                        transform: idx <= playerData.hearts ? "scale(1.15)" : "scale(0.85)",
                        opacity: idx <= playerData.hearts ? 1 : 0.25,
                        filter: idx <= playerData.hearts ? "drop-shadow(0 0 8px rgba(255, 75, 75, 0.6))" : "grayscale(100%)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      ❤️
                    </span>
                  ))}
                </div>

                <h4 style={{ margin: "6px 0", fontSize: "17px", color: "#f8fafc", fontWeight: "700" }}>
                  {playerData.hearts >= MAX_HEARTS
                    ? "Full 5 Hearts Available!"
                    : `${playerData.hearts} / 5 Hearts Remaining`}
                </h4>

                {playerData.hearts < MAX_HEARTS ? (
                  <div
                    style={{
                      margin: "14px 0 18px",
                      background: "#101622",
                      border: "1px solid #243249",
                      borderRadius: "14px",
                      padding: "14px",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.5px" }}>
                      NEXT HEART RESTORED IN
                    </div>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#ff4b4b",
                        margin: "4px 0",
                      }}
                    >
                      ⏱️ {nextHeartCountdown}
                    </div>
                  </div>
                ) : (
                  <p style={{ fontSize: "13px", color: "#94a3b8", margin: "14px 0 20px" }}>
                    Your hearts are fully charged. Keep practicing to maintain your streak!
                  </p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    type="button"
                    className="duo-btn gray"
                    onClick={() => setIsHeartModalOpen(false)}
                  >
                    GOT IT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Duolingo Slide-Up Lesson Modal & Challenge */}
        {isLessonModalOpen && selectedPathNode && (
          <div
            className="duo-modal-backdrop"
            onClick={() => setIsLessonModalOpen(false)}
            style={{ zIndex: 1000 }}
          >
            <div className="duo-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="duo-modal-pill" />

              {!isChallengeActive ? (
                <div>
                  <div className="duo-modal-header">
                    <h3 className="duo-modal-title">{selectedPathNode.title}</h3>
                    <button
                      type="button"
                      className="duo-modal-close"
                      onClick={() => setIsLessonModalOpen(false)}
                    >
                      ✕
                    </button>
                  </div>

                  <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#94a3b8", lineHeight: "1.5" }}>
                    {selectedPathNode.summary}
                  </p>

                  <div className="duo-reward-pills">
                    <span className="duo-reward-pill xp">⚡ +{selectedPathNode.xp} XP</span>
                    <span className="duo-reward-pill coins">🪙 +{selectedPathNode.coins} Coins</span>
                  </div>

                  {playerData.hearts > 0 ? (
                    <button
                      type="button"
                      id="btn-duo-start-lesson"
                      className="duo-btn green"
                      onClick={startChallenge}
                    >
                      START PLAYING (+{selectedPathNode.xp} XP)
                    </button>
                  ) : (
                    <div style={{ marginTop: "12px" }}>
                      <div
                        style={{
                          background: "#3d1414",
                          border: "1px solid #7f1d1d",
                          borderRadius: "12px",
                          padding: "10px",
                          textAlign: "center",
                          color: "#fca5a5",
                          fontSize: "13px",
                          fontWeight: "700",
                          marginBottom: "10px",
                        }}
                      >
                        💔 Out of hearts! Next heart in ⏱️ {nextHeartCountdown}
                      </div>
                      <button type="button" className="duo-btn gray" disabled>
                        LIVES DEPLETED (WAIT FOR REFILL)
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="duo-challenge-screen">
                  <div className="duo-challenge-bar">
                    <div className="duo-challenge-track">
                      <div
                        className="duo-challenge-fill"
                        style={{ width: quizSubmitted && quizIsCorrect ? "100%" : "60%" }}
                      />
                    </div>
                    <span className="duo-hearts-count">❤️ {playerData.hearts}</span>
                  </div>

                  <div className="duo-question-prompt">
                    {selectedPathNode.quiz.question}
                  </div>

                  {selectedPathNode.quiz.code && (
                    <pre className="duo-code-snippet">{selectedPathNode.quiz.code}</pre>
                  )}

                  <div className="duo-cards-grid">
                    {selectedPathNode.quiz.options.map((opt, idx) => {
                      let cardClass = "duo-card-option";
                      if (selectedQuizOption === idx) cardClass += " selected";
                      if (quizSubmitted) {
                        if (opt.correct) cardClass += " correct";
                        else if (selectedQuizOption === idx) cardClass += " wrong";
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          id={`duo-opt-${idx}`}
                          className={cardClass}
                          onClick={() => {
                            if (!quizSubmitted) setSelectedQuizOption(idx);
                          }}
                        >
                          <span style={{ fontWeight: "800", color: "#38bdf8" }}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div
                      className={`duo-result-banner ${quizIsCorrect ? "success" : "fail"}`}
                    >
                      {quizIsCorrect ? (
                        <div>
                          🎉 <b>EXCELLENT!</b> That is correct! (+{selectedPathNode.xp} XP)
                          <div style={{ fontSize: "12px", marginTop: "4px", color: "#cbd5e1" }}>
                            {selectedPathNode.quiz.explanation}
                          </div>
                        </div>
                      ) : (
                        <div>
                          💔 <b>NOT QUITE!</b>
                          <div style={{ fontSize: "12px", marginTop: "4px", color: "#cbd5e1" }}>
                            {selectedPathNode.quiz.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!quizSubmitted ? (
                    <button
                      type="button"
                      id="btn-duo-check"
                      className="duo-btn green"
                      disabled={selectedQuizOption === null}
                      onClick={handleMobileQuizSubmit}
                    >
                      CHECK ANSWER
                    </button>
                  ) : (
                    <button
                      type="button"
                      id="btn-duo-continue"
                      className="duo-btn green"
                      onClick={() => {
                        setIsLessonModalOpen(false);
                        setIsChallengeActive(false);
                      }}
                    >
                      CONTINUE →
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sticky Bottom Navigation Bar (Duolingo 4-Tab Bar) */}
        <nav className="gamified-bottom-nav">
          <button
            type="button"
            id="tab-path"
            className={`gamified-nav-btn ${mobileTab === "path" ? "active" : ""}`}
            onClick={() => setMobileTab("path")}
          >
            <span className="gamified-nav-icon">🗺️</span>
            <span>Learn</span>
          </button>

          <button
            type="button"
            id="tab-leaderboard"
            className={`gamified-nav-btn ${mobileTab === "leaderboard" ? "active" : ""}`}
            onClick={() => {
              setMobileTab("leaderboard");
              setShopNotification("🏆 Leagues are not available at the moment.");
              setTimeout(() => setShopNotification(""), 3500);
            }}
          >
            <span className="gamified-nav-icon">🏆</span>
            <span>League</span>
          </button>

          <button
            type="button"
            id="tab-shop"
            className={`gamified-nav-btn ${mobileTab === "shop" ? "active" : ""}`}
            onClick={() => setMobileTab("shop")}
          >
            <span className="gamified-nav-icon">🏪</span>
            <span>Shop</span>
          </button>

          <button
            type="button"
            id="tab-profile"
            className={`gamified-nav-btn ${mobileTab === "profile" ? "active" : ""}`}
            onClick={() => setMobileTab("profile")}
          >
            <span className="gamified-nav-icon">👤</span>
            <span>Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
