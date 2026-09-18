"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../lib/firebase";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const emptyStats = {
  totalXp: 0,
  highScore: 0,
  streak: 1,
  longestStreak: 1,
  lastActiveDate: new Date().toISOString().split("T")[0],
  campaigns: {},
  activeGame: null,
  claimedRewards: [],
  unlockedBadges: ["badge-first-blood"],
  equippedPerks: ["perk-extra-heart"],
  practiceStatus: {},
  practiceNotes: {},
  completedRoadmaps: [],
  watchedLectures: [],
  solvedProblems: {},
  completedProjects: [],
};
const storageKey = (uid) => uid ? `bytequest-player-${uid}` : "bytequest-player-guest";

function calculateStreak(previousStreak = 1, lastDateStr) {
  if (!lastDateStr) return { streak: 1, date: new Date().toISOString().split("T")[0] };
  const today = new Date().toISOString().split("T")[0];
  if (lastDateStr === today) return { streak: Math.max(1, previousStreak), date: today };
  
  const last = new Date(lastDateStr);
  const now = new Date(today);
  const diffTime = Math.abs(now - last);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return { streak: previousStreak + 1, date: today };
  } else if (diffDays > 1) {
    return { streak: 1, date: today };
  }
  return { streak: Math.max(1, previousStreak), date: today };
}

function normaliseStats(value) {
  const base = { ...emptyStats, ...(value || {}) };
  return {
    ...base,
    streak: typeof base.streak === "number" ? base.streak : 1,
    longestStreak: typeof base.longestStreak === "number" ? base.longestStreak : 1,
    lastActiveDate: base.lastActiveDate || new Date().toISOString().split("T")[0],
    campaigns: base?.campaigns || {},
    activeGame: base?.activeGame || null,
    claimedRewards: Array.isArray(base?.claimedRewards) ? base.claimedRewards : [],
    unlockedBadges: Array.isArray(base?.unlockedBadges) ? base.unlockedBadges : ["badge-first-blood"],
    equippedPerks: Array.isArray(base?.equippedPerks) ? base.equippedPerks : ["perk-extra-heart"],
    practiceStatus: base?.practiceStatus || {},
    practiceNotes: base?.practiceNotes || {},
    completedRoadmaps: Array.isArray(base?.completedRoadmaps) ? base.completedRoadmaps : [],
    watchedLectures: Array.isArray(base?.watchedLectures) ? base.watchedLectures : [],
    solvedProblems: base?.solvedProblems || {},
    completedProjects: Array.isArray(base?.completedProjects) ? base.completedProjects : [],
  };
}

export default function usePlayer() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(storageKey(null));
        if (stored) return normaliseStats(JSON.parse(stored));
      } catch {}
    }
    return emptyStats;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    const key = storageKey(nextUser ? nextUser.uid : null);
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        setStats(normaliseStats(JSON.parse(saved)));
      } else if (!nextUser) {
        setStats((prev) => prev || emptyStats);
      }
    } catch {
      setStats(emptyStats);
    }
    setLoading(false);
  }), []);

  async function login() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  }

  async function loginWithPassword(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  async function createAccount(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  }

  async function logout() {
    await signOut(auth);
  }

  const updateStats = useCallback((updater) => {
    setStats((previous) => {
      const next = normaliseStats(updater(normaliseStats(previous)));
      const key = storageKey(auth.currentUser ? auth.currentUser.uid : null);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  }, []);

  const addXp = useCallback((amount) => {
    updateStats((previous) => {
      const newXp = (previous.totalXp || 0) + Number(amount);
      const { streak, date } = calculateStreak(previous.streak, previous.lastActiveDate);
      const longest = Math.max(previous.longestStreak || 1, streak);
      
      // Auto badges check
      const unlocked = new Set(previous.unlockedBadges || []);
      if (newXp >= 100) unlocked.add("badge-first-blood");
      if (newXp >= 500) unlocked.add("badge-stack-master");
      if (newXp >= 1500) unlocked.add("badge-tree-sage");
      if (newXp >= 3000) unlocked.add("badge-boss-slayer");
      if (newXp >= 5000) unlocked.add("badge-legend");
      if (streak >= 7) unlocked.add("badge-streak-7");
      if (streak >= 30) unlocked.add("badge-streak-30");

      return {
        ...previous,
        totalXp: newXp,
        highScore: Math.max(previous.highScore || 0, newXp),
        streak,
        longestStreak: longest,
        lastActiveDate: date,
        unlockedBadges: Array.from(unlocked),
      };
    });
  }, [updateStats]);

  const saveRun = useCallback((mode, run) => {
    updateStats((previous) => ({
      ...previous,
      campaigns: { ...previous.campaigns, [mode]: { ...(previous.campaigns[mode] || {}), ...run } },
      activeGame: { mode, ...run }
    }));
  }, [updateStats]);

  function completeLevel(mode, completedLevel, nextRun) {
    updateStats((previous) => {
      const oldCampaign = previous.campaigns[mode] || { completedLevels: [], xp: 0 };
      const completedLevels = [...new Set([...(oldCampaign.completedLevels || []), completedLevel])];
      const newlyCompleted = !(oldCampaign.completedLevels || []).includes(completedLevel);
      const earned = newlyCompleted ? nextRun.xpReward : 0;
      const campaign = { ...oldCampaign, ...nextRun, completedLevels, xp: (oldCampaign.xp || 0) + earned };
      const newTotalXp = previous.totalXp + earned;
      const { streak, date } = calculateStreak(previous.streak, previous.lastActiveDate);

      return {
        ...previous,
        totalXp: newTotalXp,
        highScore: Math.max(previous.highScore, campaign.xp),
        streak,
        longestStreak: Math.max(previous.longestStreak || 1, streak),
        lastActiveDate: date,
        campaigns: { ...previous.campaigns, [mode]: campaign },
        activeGame: { mode, ...campaign }
      };
    });
  }

  function finishRun(mode) {
    updateStats((previous) => ({
      ...previous,
      activeGame: previous.activeGame?.mode === mode ? null : previous.activeGame
    }));
  }

  function claimReward(rewardId) {
    updateStats((previous) => ({
      ...previous,
      claimedRewards: [...new Set([...(previous.claimedRewards || []), rewardId])],
    }));
  }

  function togglePerk(perkId) {
    updateStats((previous) => {
      const current = previous.equippedPerks || [];
      const next = current.includes(perkId)
        ? current.filter((id) => id !== perkId)
        : [...current, perkId];
      return { ...previous, equippedPerks: next };
    });
  }

  function setPracticeStatus(questionId, status) {
    updateStats((previous) => ({
      ...previous,
      practiceStatus: { ...(previous.practiceStatus || {}), [questionId]: status }
    }));
  }

  function savePracticeNote(questionId, note) {
    updateStats((previous) => ({
      ...previous,
      practiceNotes: { ...(previous.practiceNotes || {}), [questionId]: note }
    }));
  }

  function toggleRoadmapNode(nodeId, xpReward = 50) {
    updateStats((previous) => {
      const current = previous.completedRoadmaps || [];
      const exists = current.includes(nodeId);
      const next = exists ? current.filter((id) => id !== nodeId) : [...current, nodeId];
      const xpGained = !exists ? xpReward : 0;
      return {
        ...previous,
        completedRoadmaps: next,
        totalXp: previous.totalXp + xpGained,
      };
    });
  }

  function markLectureWatched(lectureId, xpReward = 50) {
    updateStats((previous) => {
      const current = previous.watchedLectures || [];
      if (current.includes(lectureId)) return previous;
      return {
        ...previous,
        watchedLectures: [...current, lectureId],
        totalXp: previous.totalXp + xpReward,
      };
    });
  }

  function recordSolvedProblem(problemId, type, xpReward = 40) {
    updateStats((previous) => {
      const current = previous.solvedProblems || {};
      const wasAlreadySolved = !!current[problemId];
      const next = {
        ...current,
        [problemId]: { type, passedAt: new Date().toISOString() }
      };
      return {
        ...previous,
        solvedProblems: next,
        totalXp: previous.totalXp + (wasAlreadySolved ? 5 : xpReward),
      };
    });
  }

  function recordProjectCompleted(projectId, xpReward = 200) {
    updateStats((previous) => {
      const current = previous.completedProjects || [];
      if (current.includes(projectId)) return previous;
      return {
        ...previous,
        completedProjects: [...current, projectId],
        totalXp: previous.totalXp + xpReward,
      };
    });
  }

  return {
    user,
    stats,
    loading,
    login,
    loginWithPassword,
    createAccount,
    resetPassword,
    logout,
    saveRun,
    completeLevel,
    finishRun,
    claimReward,
    togglePerk,
    setPracticeStatus,
    savePracticeNote,
    addXp,
    toggleRoadmapNode,
    markLectureWatched,
    recordSolvedProblem,
    recordProjectCompleted,
  };
}

