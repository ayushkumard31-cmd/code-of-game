"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";
import usePlayer from "../usePlayer";

const dsaTopics = [
  { name: "Arrays", icon: "[ ]", detail: "Indexing, traversal and array operations", level: 0 },
  { name: "Linked Lists", icon: "→", detail: "Nodes, pointers and list operations", level: 5 },
  { name: "Stacks", icon: "▤", detail: "LIFO operations and applications", level: 1 },
  { name: "Queues", icon: "⇥", detail: "FIFO, circular and priority queues", level: 2 },
  { name: "Searching", icon: "⌕", detail: "Linear and binary search", level: 3 },
  { name: "Sorting", icon: "≋", detail: "Core sorting algorithms and complexity", level: 8 },
  { name: "Trees", icon: "⌘", detail: "Binary trees, BSTs and traversal", level: 4 },
  { name: "Hash Tables", icon: "#", detail: "Hashing, buckets and collisions", level: 6 },
  { name: "Graphs", icon: "◇", detail: "BFS, DFS and shortest paths", level: 7 },
  { name: "Recursion", icon: "↻", detail: "Base cases and recursive thinking", level: 9 },
];

function QueueInteractiveVisualizer() {
  const [items, setItems] = useState([14, 28, 42]);
  const [status, setStatus] = useState("FIFO: Front exits first");
  function enqueue() {
    if (items.length >= 6) { setStatus("QUEUE FULL (MAX 6)"); return; }
    const val = Math.floor(Math.random() * 90) + 10;
    setItems((curr) => [...curr, val]);
    setStatus(`ENQUEUE ${val} AT REAR`);
  }
  function dequeue() {
    if (!items.length) { setStatus("QUEUE EMPTY (UNDERFLOW)"); return; }
    const val = items[0];
    setItems((curr) => curr.slice(1));
    setStatus(`DEQUEUE ${val} FROM FRONT`);
  }
  return (
    <div className="queue-lab">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <small style={{ color: "#46d8e7", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "1.5px" }}>INTERACTIVE FIFO QUEUE LAB</small>
        <code style={{ color: "#46d8e7", fontSize: 10 }}>{status}</code>
      </div>
      <div className="queue-lane">
        <span className="queue-tag">FRONT →</span>
        {items.map((it, idx) => (
          <div key={`${it}-${idx}`} className="queue-item">
            {it}
          </div>
        ))}
        {!items.length && <span style={{ color: "#555", fontSize: 11 }}>[ EMPTY QUEUE ]</span>}
        <span className="queue-tag" style={{ marginLeft: "auto" }}>← REAR</span>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={enqueue} className="adm-btn adm-btn-primary" type="button">+ ENQUEUE (REAR)</button>
        <button onClick={dequeue} className="adm-btn" type="button" disabled={!items.length}>− DEQUEUE (FRONT)</button>
      </div>
    </div>
  );
}

function LinkedListInteractiveVisualizer() {
  const [nodes, setNodes] = useState([10, 25, 40]);
  const [status, setStatus] = useState("HEAD → 10 → 25 → 40 → NULL");
  function insertHead() {
    const val = Math.floor(Math.random() * 90) + 10;
    const next = [val, ...nodes];
    setNodes(next);
    setStatus(`INSERTED ${val} AT HEAD (O(1))`);
  }
  function insertTail() {
    const val = Math.floor(Math.random() * 90) + 10;
    const next = [...nodes, val];
    setNodes(next);
    setStatus(`APPENDED ${val} AT TAIL (O(1) with tail ptr)`);
  }
  function deleteHead() {
    if (!nodes.length) { setStatus("LIST IS EMPTY"); return; }
    const removed = nodes[0];
    setNodes(nodes.slice(1));
    setStatus(`DELETED HEAD NODE ${removed}`);
  }
  return (
    <div className="ll-lab">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <small style={{ color: "#b377ff", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "1.5px" }}>SINGLY LINKED LIST LAB</small>
        <code style={{ color: "#b377ff", fontSize: 10 }}>{status}</code>
      </div>
      <div className="ll-chain">
        <span style={{ color: "#a9ff43", font: "700 11px var(--font-mono)" }}>HEAD →</span>
        {nodes.map((val, idx) => (
          <div key={`${val}-${idx}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="ll-node">
              <b>{val}</b>
              <span>next*</span>
            </div>
            <span className="ll-arrow">→</span>
          </div>
        ))}
        <span style={{ color: "#ff7875", font: "700 11px var(--font-mono)" }}>NULL</span>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={insertHead} className="adm-btn" type="button">+ INSERT HEAD</button>
        <button onClick={insertTail} className="adm-btn" type="button">+ APPEND TAIL</button>
        <button onClick={deleteHead} className="adm-btn adm-btn-danger" type="button" disabled={!nodes.length}>− DELETE HEAD</button>
      </div>
    </div>
  );
}

export default function DungeonMapPage() {
  const router = useRouter();
  const { stats } = usePlayer();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [stackItems, setStackItems] = useState([12, 27, 41]);
  const [stackMessage, setStackMessage] = useState("TOP → 41");

  const totalClearedLevels = Object.values(stats?.campaigns || {}).reduce(
    (total, run) => total + (run.completedLevels?.length || 0),
    0
  );

  const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");

  function pushStack() {
    if (stackItems.length >= 5) { setStackMessage("STACK OVERFLOW — POP FIRST"); return; }
    const value = Math.floor(Math.random() * 90) + 10;
    setStackItems((items) => [...items, value]);
    setStackMessage(`PUSH ${value} — NEW TOP`);
  }

  function popStack() {
    if (!stackItems.length) { setStackMessage("STACK UNDERFLOW — NOTHING TO POP"); return; }
    const removed = stackItems[stackItems.length - 1];
    setStackItems((items) => items.slice(0, -1));
    setStackMessage(`POP ${removed} — ITEM REMOVED`);
  }

  function launchTopic(challengeMode) {
    const topicLevel = selectedTopic?.level ?? 0;
    setSelectedTopic(null);
    router.push(`/?mode=${challengeMode}&level=${topicLevel}`);
  }

  return (
    <main className={`shell storefront ${hasNeonTheme ? "neon-glow" : ""}`}>
      <div className="grid-bg" />
      <Navbar />

      <section className="dungeon-map" style={{ paddingTop: 48 }}>
        <div className="map-heading">
          <div>
            <small>THE LEARNING PATH & DUNGEON MAP</small>
            <h1>Master the dungeon, one structure at a time.</h1>
            <p>Click any node to explore interactive visualizer labs or start campaign trials.</p>
          </div>
          <div className="map-progress">
            <b>{totalClearedLevels}</b>
            <span>CHALLENGES<br />CLEARED</span>
          </div>
        </div>
        <div className="topic-path">
          {dsaTopics.map((topic, index) => (
            <button
              key={topic.name}
              type="button"
              className={`topic-node node-${index % 4}`}
              onClick={() => setSelectedTopic({ ...topic, index })}
            >
              <i>{topic.icon}</i>
              <span>
                <small>LEVEL {String(index + 1).padStart(2, "0")}</small>
                <b>{topic.name}</b>
                <em>{topic.detail}</em>
              </span>
              <strong>→</strong>
            </button>
          ))}
        </div>
      </section>

      {/* Topic modal with interactive visualizers */}
      {selectedTopic && (
        <div
          className="topic-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="topic-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedTopic(null);
          }}
        >
          <div className="topic-modal stack-topic-modal">
            <button className="topic-close" onClick={() => setSelectedTopic(null)} aria-label="Close">×</button>
            <div className="topic-symbol">{selectedTopic.icon}</div>
            <small>TOPIC LAB {String(selectedTopic.index + 1).padStart(2, "0")}</small>
            <h2 id="topic-title">{selectedTopic.name}</h2>
            <p>{selectedTopic.detail}. Test the interactive machine or launch campaign challenges.</p>

            {selectedTopic.name === "Stacks" && (
              <div className="stack-lab">
                <div className="stack-copy">
                  <small>INTERACTIVE LIFO LAB</small>
                  <b>Last in, first out</b>
                  <p>Push adds to the top. Pop removes the top item.</p>
                  <div className="stack-actions">
                    <button onClick={pushStack} type="button">+ PUSH</button>
                    <button onClick={popStack} type="button" disabled={!stackItems.length}>− POP</button>
                  </div>
                  <code>{stackMessage}</code>
                </div>
                <div className="stack-machine">
                  <span className="stack-top">TOP ↓</span>
                  <div className="stack-values">
                    {[...stackItems].reverse().map((item, index) => (
                      <i key={`${item}-${stackItems.length - index}`}>{item}</i>
                    ))}
                  </div>
                  <strong>STACK</strong>
                </div>
              </div>
            )}

            {selectedTopic.name === "Queues" && <QueueInteractiveVisualizer />}
            {selectedTopic.name === "Linked Lists" && <LinkedListInteractiveVisualizer />}

            <div className="challenge-types">
              <button onClick={() => launchTopic("dsa")} type="button">
                <i>?</i>
                <span><b>DSA Trial</b><small>Test your concepts</small></span>
                <strong>→</strong>
              </button>
              <button onClick={() => launchTopic("code")} type="button">
                <i>&lt;/&gt;</i>
                <span><b>Code Forge</b><small>Complete the C code</small></span>
                <strong>→</strong>
              </button>
              <button onClick={() => launchTopic("bugs")} type="button">
                <i>!</i>
                <span><b>Bug Hunt</b><small>Find and fix errors</small></span>
                <strong>→</strong>
              </button>
              <button onClick={() => launchTopic("boss")} type="button">
                <i>👹</i>
                <span><b>Final DSA Boss</b><small>Engage boss battle</small></span>
                <strong>→</strong>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
