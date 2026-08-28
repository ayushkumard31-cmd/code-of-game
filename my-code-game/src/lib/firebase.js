import { getApp, getApps, initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCGM9VSm2hxI9H9SxGSUSBhx9P8mOAktEI",
  authDomain: "code-of-game.firebaseapp.com",
  projectId: "code-of-game",
  storageBucket: "code-of-game.firebasestorage.app",
  messagingSenderId: "116431841767",
  appId: "1:116431841767:web:bdfc1c1ee21c311c75b542",
  measurementId: "G-P394F37DM6",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export async function initializeFirebaseAnalytics() {
  if (typeof window === "undefined") return null;

  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (!(await isSupported())) return null;

  return getAnalytics(firebaseApp);
}
