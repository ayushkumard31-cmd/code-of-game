"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/path", label: "Learn", icon: "🏠" },
  { href: "/lectures", label: "Lectures", icon: "🗣️" },
  { href: "/leaderboard", label: "Leaderboard", icon: "🏆" },
  { href: "/quests", label: "Quests", icon: "🎯" },
  { href: "/rewards", label: "Shop", icon: "🛒" },
  { href: "/practice", label: "Practice", icon: "⚡" },
  { href: "/notes", label: "Notes", icon: "📝" },
  { href: "/projects", label: "Projects", icon: "🛠️" },
  { href: "/profile", label: "Profile", icon: "👤" }
];

export default function GameSidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 250,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "#131f24",
        borderRight: "2px solid #202f36",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        zIndex: 100,
        boxSizing: "border-box",
        fontFamily: "var(--font-display), Arial, sans-serif",
        overflowY: "auto"
      }}
    >
      {/* Brand Logo */}
      <Link
        href="/path"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          paddingLeft: 12,
          marginBottom: 8
        }}
      >
        <span style={{ fontSize: 28 }}>⚡</span>
        <span
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: "#58cc02",
            letterSpacing: -1,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          mycode
        </span>
      </Link>

      {/* Nav Menu */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.href === "/path");
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "11px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 14,
                color: isActive ? "#1cb0f6" : "#84959f",
                background: isActive ? "rgba(28, 176, 246, 0.12)" : "transparent",
                border: isActive ? "2px solid #1cb0f6" : "2px solid transparent",
                transition: "all 0.15s ease",
                boxSizing: "border-box"
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
