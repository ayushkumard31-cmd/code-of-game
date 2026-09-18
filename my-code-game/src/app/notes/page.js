"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import { notesArticles } from "../data/notesData";

export default function NotesPage() {
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
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

      <div className="nexus-container">
        <div className="nexus-header">
          <small>DIGITAL HANDBOOK & CHEAT SHEETS</small>
          <h1>📖 Theory & Architecture Notes</h1>
          <p>
            Crisp, engineering-grade reference manuals covering asymptotic complexities, memory layouts, compiler pipelines, and system design patterns.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 28
        }}>
          <div className="nexus-tabs" style={{ margin: 0, border: 0, padding: 0 }}>
            {categories.map((c) => (
              <button
                key={c}
                className={`nexus-tab-btn ${selectedCategory === c ? "active" : ""}`}
                onClick={() => setSelectedCategory(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#0c100e",
            border: "1px solid #232a24",
            borderRadius: 6,
            padding: "8px 14px",
            minWidth: 260
          }}>
            <span style={{ marginRight: 8, color: "#6a736c" }}>🔍</span>
            <input
              type="text"
              placeholder="Search concepts, Big-O, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: "transparent",
                border: 0,
                outline: 0,
                color: "#fff",
                fontSize: 12,
                width: "100%",
                fontFamily: "var(--font-mono)"
              }}
            />
          </div>
        </div>

        {/* Layout: Sidebar list + Reader */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "320px minmax(0, 1fr)",
          gap: 30,
          alignItems: "start"
        }}>
          {/* Notes Index Sidebar */}
          <div style={{ display: "grid", gap: 10 }}>
            {filteredArticles.map((art) => {
              const isSelected = art.id === activeArticle.id;
              return (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  type="button"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "16px 18px",
                    borderRadius: 6,
                    border: `1px solid ${isSelected ? "#a9ff43" : "#212822"}`,
                    background: isSelected ? "#151e15" : "#0d110e",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span className="tag-badge tag-dsa">{art.category}</span>
                    <span style={{ color: "#6d756e", fontSize: 10, fontFamily: "var(--font-mono)" }}>
                      {art.readTime}
                    </span>
                  </div>
                  <b style={{ display: "block", color: isSelected ? "#a9ff43" : "#e0e7e1", fontSize: 13, marginBottom: 4 }}>
                    {art.title}
                  </b>
                  <p style={{ margin: 0, color: "#79827a", fontSize: 11, lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    {art.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Article Reading Pane */}
          <div className="nexus-card" style={{ padding: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, borderBottom: "1px solid #232b24", paddingBottom: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span className="tag-badge tag-dsa">{activeArticle.category}</span>
                <span style={{ color: "#79827a", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                  ⏱️ {activeArticle.readTime}
                </span>
              </div>
              <span style={{ color: "#a9ff43", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                VERIFIED REFERENCE
              </span>
            </div>

            <h2 style={{ fontSize: 28, color: "#fff", fontWeight: 800, margin: "0 0 16px" }}>
              {activeArticle.title}
            </h2>

            <p style={{ color: "#8f9990", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
              {activeArticle.summary}
            </p>

            {/* Article Content Viewer */}
            <div style={{
              color: "#d8dfd9",
              fontSize: 14,
              lineHeight: 1.8,
              whiteSpace: "pre-line",
              fontFamily: "var(--font-mono)"
            }}>
              {activeArticle.content}
            </div>

            {/* Code Snippet with Copy Action */}
            {activeArticle.codeSnippet && (
              <div className="code-block-viewer" style={{ marginTop: 24 }}>
                <div className="code-block-header">
                  <span>SAMPLE CODE & IMPLEMENTATION</span>
                  <button
                    onClick={() => copySnippet(activeArticle.codeSnippet)}
                    type="button"
                    style={{
                      background: "none",
                      border: "1px solid #323d33",
                      color: copied ? "#a9ff43" : "#adb5ae",
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontSize: 10,
                      cursor: "pointer",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    {copied ? "✓ Copied!" : "📋 Copy Code"}
                  </button>
                </div>
                <pre>{activeArticle.codeSnippet}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
