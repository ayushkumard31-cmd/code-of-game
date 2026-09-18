"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import usePlayer from "./usePlayer";

const ADMIN_UIDS = ["ayush1212"];
const ADMIN_EMAILS = ["ayushkumard31@gmail.com"];

export function isAdminUser(user) {
  if (!user) return false;
  if (ADMIN_UIDS.includes(user.uid)) return true;
  if (user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())) return true;
  return false;
}

export default function Navbar({ onOpenLogin, onLaunchMode }) {
  const pathname = usePathname();
  const router = useRouter();
  const {
    user,
    stats,
    loading,
    login,
    loginWithPassword,
    createAccount,
    resetPassword,
    logout,
  } = usePlayer();

  const [loginOpen, setLoginOpen] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const totalCleared = Object.values(stats?.campaigns || {}).reduce(
    (total, run) => total + (run.completedLevels?.length || 0),
    0
  );

  async function handleGoogleLogin() {
    setAuthError("");
    try {
      await login();
      setLoginOpen(false);
    } catch (error) {
      if (error?.code !== "auth/popup-closed-by-user") {
        setAuthError("Google sign-in failed. Please try again.");
      }
    }
  }

  async function handlePasswordLogin(event) {
    event.preventDefault();
    setAuthError("");
    try {
      if (createMode) await createAccount(email.trim(), password);
      else await loginWithPassword(email.trim(), password);
      setLoginOpen(false);
    } catch (error) {
      const messages = {
        "auth/invalid-credential": "Wrong password or invalid credentials.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "The password is incorrect.",
        "auth/email-already-in-use": "This email already has an account.",
        "auth/weak-password": "Password must be at least 6 characters.",
        "auth/invalid-email": "Enter a valid email address.",
        "auth/network-request-failed": "Network error. Check connection.",
      };
      setAuthError(messages[error?.code] || `Authentication failed (${error?.code || "unknown"}).`);
    }
  }

  async function handlePasswordReset() {
    setAuthError("");
    if (!email.trim()) { setAuthError("Enter your email above first."); return; }
    try {
      await resetPassword(email.trim());
      setAuthError("Password reset email sent. Check inbox.");
    } catch {
      setAuthError("Failed to send reset email.");
    }
  }

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/path", label: "Learning Path", icon: "🗺️" },
    { href: "/lectures", label: "Lectures", icon: "🎥" },
    { href: "/notes", label: "Notes", icon: "📖" },
    { href: "/practice", label: "Practice", icon: "💻" },
    { href: "/projects", label: "Projects", icon: "🛠️" },
    { href: "/interview", label: "Interview", icon: "🧠" },
    { href: "/quests", label: "Quests", icon: "🎯" },
    { href: "/leaderboard", label: "Leaderboard", icon: "🥇" },
    { href: "/rewards", label: "Badges", icon: "🏆" },
    { href: "/profile", label: "Profile", icon: "👤" },
  ];

  const activePath = pathname;

  return (
    <>
      <header className="topbar">
        <Link href="/" className="wordmark">
          <span>&lt;/&gt;</span> CODE NEXUS
        </Link>
        <nav className="topbar-nav-scroll">
          {navItems.map((item) => {
            const isActive = activePath === item.href || (item.href !== "/" && activePath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`topbar-nav-link ${isActive ? "active" : ""}`}
              >
                <span style={{ marginRight: 4 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
          {isAdminUser(user) && (
            <Link href="/admin" className="admin-nav-btn">
              ⚙ ADMIN
            </Link>
          )}
        </nav>

        <div className="account">
          <Link href="/profile" className="hud-pill streak-pill" title="Daily Streak">
            🔥 <b>{stats?.streak || 1}d</b>
          </Link>
          <Link href="/profile" className="hud-pill xp-pill" title="Total XP">
            ⭐ <b>{stats?.totalXp || 0}</b>
          </Link>
          <Link href="/rewards" className="hud-pill badge-pill" title="Badges">
            🏆 <b>{(stats?.unlockedBadges?.length || 1) + (stats?.claimedRewards?.length || 0)}</b>
          </Link>

          {loading ? (
            <span className="account-loading">LOADING...</span>
          ) : user ? (
            <div className="user-menu">
              <Link href="/profile" className="avatar" title="View Profile">
                {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "P"}
              </Link>
              <div className="user-name">
                <Link href="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                  <b>{user.displayName || user.email?.split("@")[0] || "Player"}</b>
                </Link>
                <small>{stats?.totalXp || 0} XP</small>
              </div>
              <button onClick={handleLogout} type="button">LOG OUT</button>
            </div>
          ) : (
            <button
              className="login-nav"
              type="button"
              onClick={() => {
                if (onOpenLogin) onOpenLogin();
                else setLoginOpen(true);
              }}
            >
              SIGN IN
            </button>
          )}
        </div>
      </header>

      {loginOpen && (
        <div className="login-backdrop" role="dialog" aria-modal="true" aria-labelledby="login-title">
          <div className="login-modal">
            <button className="modal-close" onClick={() => setLoginOpen(false)} aria-label="Close">×</button>
            <span className="login-logo">DS</span>
            <p>PLAYER ACCESS</p>
            <h2 id="login-title">{createMode ? "Create your account" : "Sign in to play"}</h2>
            <span className="login-copy">Save your XP, claimed rewards, perks, and learning progress.</span>
            <button className="google-login" onClick={handleGoogleLogin}>
              <b>G</b> CONTINUE WITH GOOGLE
            </button>
            <div className="auth-divider"><span>OR USE EMAIL</span></div>
            <form className="email-login" onSubmit={handlePasswordLogin}>
              <label>
                EMAIL
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="player@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                PASSWORD
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="6 or more characters"
                  autoComplete={createMode ? "new-password" : "current-password"}
                  minLength="6"
                  required
                />
              </label>
              <button type="submit">
                {createMode ? "CREATE ACCOUNT" : "SIGN IN WITH PASSWORD"}
              </button>
            </form>
            {!createMode && (
              <button className="forgot-password" onClick={handlePasswordReset} type="button">
                FORGOT PASSWORD?
              </button>
            )}
            {authError && (
              <small className={authError.includes("sent") ? "auth-success" : "auth-error"}>
                {authError}
              </small>
            )}
            <button
              className="auth-switch"
              type="button"
              onClick={() => { setCreateMode(!createMode); setAuthError(""); }}
            >
              {createMode ? "Already registered? Sign in" : "New player? Create an account"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
