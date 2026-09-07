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
  campaigns: {},
  activeGame: null,
  claimedRewards: [],
  equippedPerks: ["perk-extra-heart"],
  practiceStatus: {},
  practiceNotes: {},
};
const storageKey = (uid) => `bytequest-player-${uid}`;

function normaliseStats(value) {
  return {
    ...emptyStats,
    ...value,
    campaigns: value?.campaigns || {},
    activeGame: value?.activeGame || null,
    claimedRewards: Array.isArray(value?.claimedRewards) ? value.claimedRewards : [],
    equippedPerks: Array.isArray(value?.equippedPerks) ? value.equippedPerks : ["perk-extra-heart"],
    practiceStatus: value?.practiceStatus || {},
    practiceNotes: value?.practiceNotes || {},
  };
}

export default function usePlayer() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(emptyStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    if (nextUser) {
      try {
        setStats(normaliseStats(JSON.parse(localStorage.getItem(storageKey(nextUser.uid)))));
      } catch {
        setStats(emptyStats);
      }
    } else {
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
    if (!auth.currentUser) return;
    setStats((previous) => {
      const next = normaliseStats(updater(normaliseStats(previous)));
      localStorage.setItem(storageKey(auth.currentUser.uid), JSON.stringify(next));
      return next;
    });
  }, []);

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
      return {
        ...previous,
        totalXp: previous.totalXp + earned,
        highScore: Math.max(previous.highScore, campaign.xp),
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
    savePracticeNote
  };
}

