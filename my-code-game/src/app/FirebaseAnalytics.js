"use client";

import { useEffect } from "react";
import { initializeFirebaseAnalytics } from "../lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    initializeFirebaseAnalytics().catch((error) => {
      if (process.env.NODE_ENV === "development") {
        console.warn("Firebase Analytics could not start:", error);
      }
    });
  }, []);

  return null;
}
