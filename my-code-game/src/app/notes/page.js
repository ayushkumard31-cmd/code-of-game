"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import { notesArticles } from "../data/notesData";
import usePlayer from "../usePlayer";
import "../../components/game/duolingo-map.css";

export default function NotesPage() {
  const { stats } = usePlayer();
  const [activeArticleId, setActiveArticleId] = useState(notesArticles[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copied, setCopied] = useState(false);

  const categories = ["All", "DSA", "C / C++", "Languages", "Advanced"];

  const filteredArticles = notesArticles.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeArticle = notesArticles.find((art) => art.id === activeArticleId) || notesArticles[0];

  function copySnippet(code) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#1cb0f6", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                DIGITAL CHEAT SHEETS
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                📝 Theory & Notes
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={stats?.streak || 1} />
              <XPBar xp={stats?.totalXp || 0} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  type="button"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 14,
                    background: selectedCategory === c ? "rgba(28,176,246,0.15)" : "#131f24",
                    border: `2px solid ${selectedCategory === c ? "#1cb0f6" : "#202f36"}`,
                    color: selectedCategory === c ? "#1cb0f6" : "#84959f",
                    fontWeight: 800,
                    fontSize: 13,
                    cursor: "pointer"
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search notes & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "10px 16px", borderRadius: 14, background: "#131f24", border: "2px solid #202f36", color: "#fff", outline: "none", fontSize: 13, minWidth: 240 }}
            />
          </div>

          {/* Main Grid: Article List + Reader */}
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredArticles.map((art) => {
                const isSelected = activeArticleId === art.id;
                return (
                  <button
                    key={art.id}
                    onClick={() => setActiveArticleId(art.id)}
                    type="button"
                    style={{
                      padding: "16px",
                      borderRadius: 16,
                      background: isSelected ? "rgba(28,176,246,0.12)" : "#131f24",
                      border: `2px solid ${isSelected ? "#1cb0f6" : "#202f36"}`,
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#1cb0f6", fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>
                      {art.category} • {art.readTime}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{art.title}</div>
                    <div style={{ fontSize: 12, color: "#84959f", lineHeight: 1.4 }}>{art.summary}</div>
                  </button>
                );
              })}
            </div>

            {/* Article Reader Box */}
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 32 }}>
              <small style={{ color: "#58cc02", fontWeight: 800, textTransform: "uppercase" }}>{activeArticle.category}</small>
              <h2 style={{ color: "#fff", fontSize: 24, margin: "6px 0 16px", fontWeight: 900 }}>{activeArticle.title}</h2>
              <p style={{ color: "#84959f", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{activeArticle.summary}</p>

              {activeArticle.snippets?.map((snip, idx) => (
                <div key={idx} style={{ marginBottom: 24 }}>
                  <div style={{ color: "#ffc800", fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{snip.label}</div>
                  <div style={{ position: "relative", background: "#0b0d0c", border: "2px solid #202f36", borderRadius: 14, overflow: "hidden" }}>
                    <button
                      onClick={() => copySnippet(snip.code)}
                      type="button"
                      style={{ position: "absolute", top: 12, right: 12, padding: "6px 12px", borderRadius: 8, background: "#202f36", border: 0, color: "#fff", fontSize: 11, fontWeight: 800, cursor: "pointer" }}
                    >
                      {copied ? "COPIED ✓" : "COPY CODE"}
                    </button>
                    <pre style={{ margin: 0, padding: 20, color: "#a9ff43", fontFamily: "var(--font-mono)", fontSize: 13, overflowX: "auto" }}>
                      {snip.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
