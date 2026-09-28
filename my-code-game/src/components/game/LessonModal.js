"use client";

import { useState } from "react";

const sampleLessonData = {
  id: "pb-1",
  title: "Arrays & Contiguous Memory",
  subtitle: "Array Memory & Pointer Allocation",
  xpReward: 50,
  questions: [
    {
      id: "q1",
      question: "What is the time complexity to access an element at index i in a contiguous array?",
      mascotText: "arr[i] address = Base + (i * sizeof(elem))",
      options: ["O(1) Constant Time", "O(N) Linear Time", "O(log N) Logarithmic Time", "O(N^2) Quadratic Time"],
      correct: 0,
      explanation: "Arrays store elements in contiguous memory slots. Using base address + offset arithmetic, access takes O(1) time!"
    },
    {
      id: "q2",
      question: "In C/C++, if an integer array int arr[5] starts at address 1000, what is the address of arr[2]? (Assume 4 bytes per int)",
      mascotText: "Base = 1000, Index = 2, Size = 4 bytes",
      options: ["1002", "1004", "1008", "1012"],
      correct: 2,
      explanation: "Formula: Address = Base + (Index × Size). Here 1000 + (2 × 4) = 1008!"
    },
    {
      id: "q3",
      question: "Which data structure follows First-In, First-Out (FIFO) ordering?",
      mascotText: "First-In, First-Out execution queue",
      options: ["Stack", "Queue", "Binary Tree", "Heap"],
      correct: 1,
      explanation: "A Queue operates on FIFO (First-In, First-Out) principle, just like a line of people!"
    }
  ]
};

export default function LessonModal({ nodeData = sampleLessonData, onClose, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hearts, setHearts] = useState(5);

  const questions = nodeData?.questions || sampleLessonData.questions;
  const currentQ = questions[currentIndex];

  function handleSubmit() {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.correct) {
      setScore((prev) => prev + 1);
    } else {
      setHearts((prev) => Math.max(0, prev - 1));
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      const earnedXp = nodeData?.xpReward || 50;
      onComplete?.(nodeData?.id, earnedXp);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#0e181c",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "var(--font-display), Arial, sans-serif"
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 40px 16px",
          maxWidth: 1000,
          width: "100%",
          margin: "0 auto",
          gap: 20
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          style={{
            background: "none",
            border: "none",
            color: "#6b7d87",
            fontSize: 26,
            cursor: "pointer",
            fontWeight: 800,
            padding: 4
          }}
          title="Exit Lesson"
        >
          ✕
        </button>

        {/* Center Green Progress Bar */}
        <div
          style={{
            flex: 1,
            height: 16,
            borderRadius: 10,
            background: "#202f36",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <div
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              height: "100%",
              background: "#58cc02",
              borderRadius: 10,
              transition: "width 0.35s ease",
              boxShadow: "0 0 12px rgba(88,204,2,0.4)"
            }}
          />
        </div>

        {/* Hearts Life Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "#ff4b4b",
            fontWeight: 900,
            fontSize: 18
          }}
        >
          <span style={{ fontSize: 22, filter: "drop-shadow(0 2px 4px rgba(255,75,75,0.4))" }}>❤️</span>
          <span>{hearts}</span>
        </div>
      </div>

      {/* Main Question Body */}
      {!isFinished ? (
        <div
          style={{
            maxWidth: 680,
            width: "100%",
            margin: "0 auto",
            padding: "20px 24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {/* Concept Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#c77dff",
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: 1,
              marginBottom: 8,
              textTransform: "uppercase"
            }}
          >
            <span>✦</span>
            <span>NEW CONCEPT • DSA QUESTION</span>
          </div>

          {/* Question Heading */}
          <h1
            style={{
              fontSize: 26,
              fontWeight: 900,
              lineHeight: 1.35,
              margin: "0 0 28px",
              color: "#ffffff"
            }}
          >
            {currentQ.question}
          </h1>

          {/* Mascot Character with Speech Bubble (Matching Screenshots) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 36
            }}
          >
            {/* Mascot Character Graphic */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff9600, #ffc800)",
                display: "grid",
                placeItems: "center",
                fontSize: 40,
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                border: "3px solid #ffffff",
                flexShrink: 0
              }}
            >
              🧔🏻‍♂️
            </div>

            {/* Speech Bubble */}
            <div
              style={{
                position: "relative",
                background: "#131f24",
                border: "2px solid #202f36",
                borderRadius: 18,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)"
              }}
            >
              {/* Pointer Triangle */}
              <div
                style={{
                  position: "absolute",
                  left: -9,
                  top: "50%",
                  transform: "translateY(-50%) rotate(45deg)",
                  width: 14,
                  height: 14,
                  background: "#131f24",
                  borderLeft: "2px solid #202f36",
                  borderBottom: "2px solid #202f36"
                }}
              />
              <span style={{ fontSize: 20 }}>🔊</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: "#1cb0f6" }}>
                {currentQ.mascotText || "Select the correct answer below"}
              </span>
            </div>
          </div>

          {/* Option Cards Stack (Matching Screenshot 2 style with Number Badges) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let bg = "#131f24";
              let border = "#202f36";
              let textColor = "#ffffff";
              let numBg = "#202f36";
              let numColor = "#84959f";

              if (isSubmitted) {
                if (idx === currentQ.correct) {
                  bg = "rgba(88, 204, 2, 0.15)";
                  border = "#58cc02";
                  textColor = "#58cc02";
                  numBg = "#58cc02";
                  numColor = "#ffffff";
                } else if (isSelected && idx !== currentQ.correct) {
                  bg = "rgba(255, 75, 75, 0.15)";
                  border = "#ff4b4b";
                  textColor = "#ff4b4b";
                  numBg = "#ff4b4b";
                  numColor = "#ffffff";
                }
              } else if (isSelected) {
                bg = "rgba(28, 176, 246, 0.15)";
                border = "#1cb0f6";
                textColor = "#1cb0f6";
                numBg = "#1cb0f6";
                numColor = "#ffffff";
              }

              return (
                <button
                  key={opt}
                  onClick={() => !isSubmitted && setSelectedOption(idx)}
                  type="button"
                  style={{
                    padding: "16px 22px",
                    borderRadius: 18,
                    background: bg,
                    border: `2px solid ${border}`,
                    color: textColor,
                    fontWeight: 800,
                    fontSize: 16,
                    textAlign: "left",
                    cursor: isSubmitted ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    transition: "all 0.15s ease",
                    boxShadow: isSelected ? "0 4px 16px rgba(28,176,246,0.2)" : "none"
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: numBg,
                      color: numColor,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 14,
                      fontWeight: 900,
                      flexShrink: 0
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span style={{ flex: 1, textAlign: "center", transform: "translateX(-16px)" }}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Finished Screen */
        <div style={{ textAlign: "center", padding: "40px 20px", margin: "auto" }}>
          <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#58cc02", margin: "0 0 10px" }}>
            Lesson Complete!
          </h2>
          <p style={{ color: "#84959f", fontSize: 17, margin: "0 0 28px" }}>
            You answered {score} out of {questions.length} questions correctly!
          </p>

          <div
            style={{
              display: "inline-flex",
              gap: 28,
              background: "#131f24",
              padding: "20px 36px",
              borderRadius: 24,
              border: "2px solid #202f36",
              marginBottom: 36
            }}
          >
            <div>
              <small style={{ color: "#84959f", display: "block", fontWeight: 800 }}>TOTAL XP</small>
              <b style={{ color: "#ffc800", fontSize: 24, fontWeight: 900 }}>+{nodeData?.xpReward || 50} 💎</b>
            </div>
            <div style={{ borderLeft: "2px solid #202f36", paddingLeft: 28 }}>
              <small style={{ color: "#84959f", display: "block", fontWeight: 800 }}>ACCURACY</small>
              <b style={{ color: "#58cc02", fontSize: 24, fontWeight: 900 }}>
                {Math.round((score / questions.length) * 100)}%
              </b>
            </div>
          </div>

          <div>
            <button
              onClick={onClose}
              type="button"
              style={{
                padding: "18px 54px",
                borderRadius: 20,
                background: "#58cc02",
                color: "#ffffff",
                border: "none",
                boxShadow: "0 6px 0 #46a302",
                fontWeight: 900,
                fontSize: 17,
                cursor: "pointer"
              }}
            >
              CLAIM REWARDS & CONTINUE
            </button>
          </div>
        </div>
      )}

      {/* Bottom Fixed Action Footer Bar */}
      {!isFinished && (
        <div
          style={{
            background: isSubmitted
              ? selectedOption === currentQ.correct
                ? "rgba(88, 204, 2, 0.18)"
                : "rgba(255, 75, 75, 0.18)"
              : "#131f24",
            borderTop: `2px solid ${
              isSubmitted
                ? selectedOption === currentQ.correct
                  ? "#58cc02"
                  : "#ff4b4b"
                : "#202f36"
            }`,
            padding: "20px 40px",
            transition: "all 0.2s ease"
          }}
        >
          <div
            style={{
              maxWidth: 720,
              width: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20
            }}
          >
            {/* Feedback text when submitted */}
            {isSubmitted ? (
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 32 }}>
                  {selectedOption === currentQ.correct ? "🎉" : "❌"}
                </span>
                <div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 18,
                      color: selectedOption === currentQ.correct ? "#58cc02" : "#ff4b4b"
                    }}
                  >
                    {selectedOption === currentQ.correct ? "Excellent!" : "Incorrect Answer"}
                  </div>
                  <div style={{ color: "#84959f", fontSize: 13, marginTop: 2 }}>
                    {currentQ.explanation}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ color: "#84959f", fontSize: 14, fontWeight: 700 }}>
                Select an option to proceed
              </div>
            )}

            {/* Action button */}
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                type="button"
                style={{
                  padding: "16px 38px",
                  borderRadius: 18,
                  background: selectedOption === null ? "#202f36" : "#58cc02",
                  color: selectedOption === null ? "#52656d" : "#ffffff",
                  border: "none",
                  boxShadow: selectedOption === null ? "none" : "0 5px 0 #46a302",
                  fontWeight: 900,
                  fontSize: 16,
                  cursor: selectedOption === null ? "not-allowed" : "pointer"
                }}
              >
                CHECK ANSWER
              </button>
            ) : (
              <button
                onClick={handleNext}
                type="button"
                style={{
                  padding: "16px 38px",
                  borderRadius: 18,
                  background: selectedOption === currentQ.correct ? "#58cc02" : "#ff4b4b",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: `0 5px 0 ${selectedOption === currentQ.correct ? "#46a302" : "#cb3b3b"}`,
                  fontWeight: 900,
                  fontSize: 16,
                  cursor: "pointer"
                }}
              >
                CONTINUE →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
