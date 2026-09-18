"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";
import { videoLectures } from "../data/lecturesData";

export default function VideoLecturesPage() {
  const { stats, markLectureWatched } = usePlayer();
  const [selectedLecture, setSelectedLecture] = useState(videoLectures[0]);
  const [activeTopic, setActiveTopic] = useState("All");
  const [toast, setToast] = useState("");

  const watchedList = stats?.watchedLectures || [];
  const topics = ["All", "C / C++", "DSA", "Advanced Topics", "System Design"];

  const filteredLectures = videoLectures.filter(
    (l) => activeTopic === "All" || l.topic === activeTopic
  );

  function handleMarkWatched(lecture) {
    if (watchedList.includes(lecture.id)) {
      setToast("Already marked as watched!");
    } else {
      markLectureWatched(lecture.id, lecture.xpReward);
      setToast(`🎉 Lecture completed! +${lecture.xpReward} XP awarded`);
    }
    setTimeout(() => setToast(""), 2500);
  }

  const isCurrentWatched = watchedList.includes(selectedLecture.id);

  return (
    <main className="shell">
      <div className="grid-bg" />
      <Navbar />

      {toast && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          background: "#a9ff43",
          color: "#0b0d0c",
          padding: "12px 20px",
          borderRadius: 6,
          fontWeight: 800,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          {toast}
        </div>
      )}

      <div className="nexus-container">
        <div className="nexus-header">
          <small>ENGINEERING CLASSROOM</small>
          <h1>🎥 Video Lectures</h1>
          <p>
            Master complex computer science algorithms, systems programming, and multithreading with curated, high-yield video lectures and side-by-side code notes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="nexus-tabs">
          {topics.map((t) => (
            <button
              key={t}
              className={`nexus-tab-btn ${activeTopic === t ? "active" : ""}`}
              onClick={() => setActiveTopic(t)}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main Video & Details Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 360px",
          gap: 28,
          alignItems: "start"
        }}>
          {/* Active Lecture Stage */}
          <div>
            {/* Embedded Player */}
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: 8,
              border: "1px solid #283329",
              background: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
            }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0
                }}
                src={selectedLecture.embedUrl}
                title={selectedLecture.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Title & Metadata Strip */}
            <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                  <span className="tag-badge tag-dsa">{selectedLecture.topic}</span>
                  <span className="tag-badge" style={{ background: "rgba(255,255,255,0.06)", color: "#aaa" }}>
                    {selectedLecture.level}
                  </span>
                  <span style={{ color: "#79827a", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                    ⏱️ {selectedLecture.duration}
                  </span>
                </div>
                <h2 style={{ margin: "0 0 6px", color: "#fff", fontSize: 24, fontWeight: 800 }}>
                  {selectedLecture.title}
                </h2>
                <div style={{ color: "#8a948c", fontSize: 12 }}>
                  Instructor: <b>{selectedLecture.instructor}</b>
                </div>
              </div>

              <button
                className={isCurrentWatched ? "btn-secondary" : "btn-primary"}
                onClick={() => handleMarkWatched(selectedLecture)}
                type="button"
              >
                {isCurrentWatched ? "✓ Watched (+XP Earned)" : `Mark as Watched (+${selectedLecture.xpReward} XP)`}
              </button>
            </div>

            {/* Summary */}
            <div className="nexus-card" style={{ marginTop: 20 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 15, color: "#a9ff43", fontFamily: "var(--font-mono)" }}>
                LECTURE SUMMARY & KEY TAKEAWAYS
              </h3>
              <p style={{ margin: "0 0 16px", color: "#9ea69f", fontSize: 13, lineHeight: 1.6 }}>
                {selectedLecture.summary}
              </p>

              <ul style={{ margin: 0, paddingLeft: 18, color: "#d8dfd9", fontSize: 13, display: "grid", gap: 6 }}>
                {selectedLecture.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            </div>

            {/* Code Notes Viewer */}
            {selectedLecture.codeSnippet && (
              <div className="code-block-viewer">
                <div className="code-block-header">
                  <span>CODE COMPANION SNIPPET</span>
                  <span>{selectedLecture.topic}</span>
                </div>
                <pre>{selectedLecture.codeSnippet}</pre>
              </div>
            )}
          </div>

          {/* Playlist Sidebar */}
          <div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
              borderBottom: "1px solid #232a24",
              paddingBottom: 8
            }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#a9ff43", fontFamily: "var(--font-mono)" }}>
                LECTURE PLAYLIST
              </span>
              <span style={{ fontSize: 11, color: "#79827a", fontFamily: "var(--font-mono)" }}>
                {watchedList.length}/{videoLectures.length} Watched
              </span>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {filteredLectures.map((lec) => {
                const isSelected = lec.id === selectedLecture.id;
                const isWatched = watchedList.includes(lec.id);
                return (
                  <button
                    key={lec.id}
                    onClick={() => setSelectedLecture(lec)}
                    type="button"
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "12px 14px",
                      borderRadius: 6,
                      border: `1px solid ${isSelected ? "#a9ff43" : "#202821"}`,
                      background: isSelected ? "#141c14" : "#0d110e",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      background: isWatched ? "#1e331a" : "#1a211b",
                      border: `1px solid ${isWatched ? "#a9ff43" : "#303a31"}`,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 16,
                      flexShrink: 0
                    }}>
                      {isWatched ? "✓" : lec.thumbnailIcon}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <b style={{
                        display: "block",
                        color: isSelected ? "#a9ff43" : "#d8dfd9",
                        fontSize: 12,
                        marginBottom: 4,
                        lineHeight: 1.3
                      }}>
                        {lec.title}
                      </b>
                      <div style={{ display: "flex", gap: 8, fontSize: 10, color: "#747d75", fontFamily: "var(--font-mono)" }}>
                        <span>⏱️ {lec.duration}</span>
                        <span>⭐ +{lec.xpReward} XP</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Chapters of Selected Video */}
            {selectedLecture.chapters && selectedLecture.chapters.length > 0 && (
              <div className="nexus-card" style={{ marginTop: 20 }}>
                <b style={{ display: "block", fontSize: 11, color: "#a9ff43", fontFamily: "var(--font-mono)", marginBottom: 10 }}>
                  CHAPTER TIMESTAMPS
                </b>
                <div style={{ display: "grid", gap: 8 }}>
                  {selectedLecture.chapters.map((ch, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 10, fontSize: 11, color: "#9ca59e" }}>
                      <code style={{ color: "#a9ff43", background: "#0b0e0c", padding: "2px 6px", borderRadius: 3 }}>
                        {ch.time}
                      </code>
                      <span>{ch.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
