"use client";

import { useState } from "react";
import GameSidebar from "../../components/game/GameSidebar";
import Streak from "../../components/game/Streak";
import XPBar from "../../components/game/XPBar";
import Hearts from "../../components/game/Hearts";
import usePlayer from "../usePlayer";
import { videoLectures } from "../data/lecturesData";
import "../../components/game/duolingo-map.css";

export default function VideoLecturesPage() {
  const { stats, markLectureWatched } = usePlayer();
  const [selectedLecture, setSelectedLecture] = useState(videoLectures[0]);
  const [activeTopic, setActiveTopic] = useState("All");
  const [toast, setToast] = useState("");

  const watchedList = stats?.watchedLectures || [];
  const xp = stats?.totalXp || 0;
  const streak = stats?.streak || 1;
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
    <div className="duo-page-container">
      <GameSidebar />

      <div className="duo-main-content" style={{ padding: "30px 40px", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ width: "100%" }}>
          
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <div>
              <small style={{ color: "#58cc02", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                ENGINEERING CLASSROOM
              </small>
              <h1 style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                🎥 Video Lectures
              </h1>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Streak count={streak} />
              <XPBar xp={xp} />
              <Hearts count={5} />
            </div>
          </div>

          {/* Topic filter tabs */}
          <div style={{ display: "flex", gap: 10, marginBottom: 24, overflowX: "auto" }}>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                type="button"
                style={{
                  padding: "10px 18px",
                  borderRadius: 14,
                  background: activeTopic === t ? "rgba(88,204,2,0.15)" : "#131f24",
                  border: `2px solid ${activeTopic === t ? "#58cc02" : "#202f36"}`,
                  color: activeTopic === t ? "#58cc02" : "#84959f",
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: "pointer"
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Player & Lecture Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
            {/* Video Player Box */}
            <div style={{ background: "#131f24", border: "2px solid #202f36", borderRadius: 20, padding: 24 }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", background: "#000", marginBottom: 20 }}>
                <iframe
                  src={selectedLecture.embedUrl || `https://www.youtube.com/embed/${selectedLecture.youtubeId || "dQw4w9WgXcQ"}`}
                  title={selectedLecture.title}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <div>
                  <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 900, color: "#fff" }}>
                    {selectedLecture.title}
                  </h2>
                  <p style={{ margin: 0, color: "#84959f", fontSize: 14, lineHeight: 1.5 }}>
                    {selectedLecture.description}
                  </p>
                </div>
                <button
                  onClick={() => handleMarkWatched(selectedLecture)}
                  type="button"
                  style={{
                    padding: "12px 20px",
                    borderRadius: 14,
                    background: isCurrentWatched ? "#202f36" : "#58cc02",
                    color: "#fff",
                    border: "none",
                    fontWeight: 900,
                    fontSize: 13,
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  {isCurrentWatched ? "✓ WATCHED" : `MARK WATCHED (+${selectedLecture.xpReward} XP)`}
                </button>
              </div>
            </div>

            {/* Playlist Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#fff" }}>
                Playlist ({filteredLectures.length})
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 520, overflowY: "auto" }}>
                {filteredLectures.map((lecture) => {
                  const isSelected = selectedLecture.id === lecture.id;
                  const isWatched = watchedList.includes(lecture.id);

                  return (
                    <button
                      key={lecture.id}
                      onClick={() => setSelectedLecture(lecture)}
                      type="button"
                      style={{
                        padding: "14px 16px",
                        borderRadius: 16,
                        background: isSelected ? "rgba(28,176,246,0.12)" : "#131f24",
                        border: `2px solid ${isSelected ? "#1cb0f6" : "#202f36"}`,
                        color: "#fff",
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 12
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{isWatched ? "✅" : "▶️"}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 800, fontSize: 13, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                          {lecture.title}
                        </div>
                        <div style={{ fontSize: 11, color: "#84959f" }}>
                          {lecture.duration} • +{lecture.xpReward} XP
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 9999, background: "#58cc02", color: "#fff", padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14 }}>
          {toast}
        </div>
      )}
    </div>
  );
}
