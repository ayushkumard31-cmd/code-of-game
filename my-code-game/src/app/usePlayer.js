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

const emptyStats = { totalXp: 0, highScore: 0 };
const storageKey = (uid) => `bytequest-player-${uid}`;

export default function usePlayer() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(emptyStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    if (nextUser) {
      try {
        setStats(JSON.parse(localStorage.getItem(storageKey(nextUser.uid))) || emptyStats);
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

  function recordScore(xpEarned, runScore) {
    if (!auth.currentUser) return;
    setStats((previous) => {
      const next = {
        totalXp: previous.totalXp + xpEarned,
        highScore: Math.max(previous.highScore, runScore),
      };
      localStorage.setItem(storageKey(auth.currentUser.uid), JSON.stringify(next));
      return next;
    });
  }

  return { user, stats, loading, login, loginWithPassword, createAccount, resetPassword, logout, recordScore };
}
