"use client";

import { useEffect, useState } from "react";
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

const emptyStats = { totalXp: 0, highScore: 0, campaigns: {}, activeGame: null };
const storageKey = (uid) => `bytequest-player-${uid}`;

function normaliseStats(value) {
  return { ...emptyStats, ...value, campaigns: value?.campaigns || {}, activeGame: value?.activeGame || null };
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

  function updateStats(updater) {
    if (!auth.currentUser) return;
    setStats((previous) => {
      const next = normaliseStats(updater(normaliseStats(previous)));
      localStorage.setItem(storageKey(auth.currentUser.uid), JSON.stringify(next));
      return next;
    });
  }

  function saveRun(mode, run) {
    updateStats((previous) => ({ ...previous, campaigns: { ...previous.campaigns, [mode]: { ...(previous.campaigns[mode] || {}), ...run } }, activeGame: { mode, ...run } }));
  }

  function completeLevel(mode, completedLevel, nextRun) {
    updateStats((previous) => {
      const oldCampaign = previous.campaigns[mode] || { completedLevels: [], xp: 0 };
      const completedLevels = [...new Set([...(oldCampaign.completedLevels || []), completedLevel])];
      const newlyCompleted = !(oldCampaign.completedLevels || []).includes(completedLevel);
      const earned = newlyCompleted ? nextRun.xpReward : 0;
      const campaign = { ...oldCampaign, ...nextRun, completedLevels, xp: (oldCampaign.xp || 0) + earned };
      return { ...previous, totalXp: previous.totalXp + earned, highScore: Math.max(previous.highScore, campaign.xp), campaigns: { ...previous.campaigns, [mode]: campaign }, activeGame: { mode, ...campaign } };
    });
  }

  function finishRun(mode) { updateStats((previous) => ({ ...previous, activeGame: previous.activeGame?.mode === mode ? null : previous.activeGame })); }

  return { user, stats, loading, login, loginWithPassword, createAccount, resetPassword, logout, saveRun, completeLevel, finishRun };
}
