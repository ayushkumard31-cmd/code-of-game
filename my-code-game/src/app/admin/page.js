"use client";
import { useEffect, useState, useCallback } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../../lib/firebase";
import {
  tierConfig as defaultTiers,
  getCustomQuestions,
  saveCustomQuestions,
  getCustomTiers,
  saveCustomTiers,
  getActiveTierConfig,
  buildCampaign,
  getRank,
} from "../questionBank";

const ADMIN_UIDS = ["ayush1212"];
const ADMIN_EMAILS = ["ayushkumard31@gmail.com"];

export function isAdmin(u) {
  if (!u) return false;
  if (ADMIN_UIDS.includes(u.uid)) return true;
  if (u.email && ADMIN_EMAILS.includes(u.email.toLowerCase())) return true;
  return false;
}

const auth = getAuth(firebaseApp);
const playerKey = (uid) => `bytequest-player-${uid}`;

const MODES = [
  { id: "dsa", label: "DSA Trial", icon: "?", color: "#a9ff43" },
  { id: "code", label: "Code Forge", icon: "</>", color: "#46d8e7" },
  { id: "bugs", label: "Bug Hunt", icon: "!", color: "#ff7875" },
  { id: "boss", label: "Final DSA Boss", icon: "👹", color: "#ff5340" },
];

const emptyQuestion = () => ({
  id: Date.now().toString(36) + Math.random().toString(36).slice(2),
  type: "DSA TRIAL",
  title: "",
  prompt: "",
  choices: ["", "", "", ""],
  answer: 0,
  hint: "",
  code: "",
  xpReward: 50,
});

export default function AdminPanel() {
  const [user, setUser] = useState(undefined); // undefined = still loading
  const [tab, setTab] = useState("dashboard");
  const [qMode, setQMode] = useState("dsa");
  const [customQs, setCustomQs] = useState([]);
  const [tiers, setTiers] = useState(defaultTiers);
  const [myStats, setMyStats] = useState(null);
  const [editQ, setEditQ] = useState(null);   // question being edited
  const [newQ, setNewQ] = useState(null);     // new question form
  const [toast, setToast] = useState("");
  const [tierSaved, setTierSaved] = useState(false);

  // auth listener
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u || null)), []);

  // load data when user confirmed
  useEffect(() => {
    if (!isAdmin(user)) return;
    try {
      const raw = localStorage.getItem(playerKey(user.uid));
      if (raw) setMyStats(JSON.parse(raw));
    } catch {}
    setTiers(getActiveTierConfig());
  }, [user]);

  // reload custom questions when mode tab changes
  useEffect(() => {
    if (!isAdmin(user)) return;
    setCustomQs(getCustomQuestions(qMode));
    setEditQ(null);
    setNewQ(null);
  }, [qMode, user]);


  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }, []);

  function saveQ(q) {
    const updated = customQs.some((x) => x.id === q.id)
      ? customQs.map((x) => (x.id === q.id ? q : x))
      : [...customQs, q];
    saveCustomQuestions(qMode, updated);
    setCustomQs(updated);
    setEditQ(null);
    setNewQ(null);
    showToast("Question saved!");
  }

  function deleteQ(id) {
    if (!confirm("Delete this custom question?")) return;
    const updated = customQs.filter((x) => x.id !== id);
    saveCustomQuestions(qMode, updated);
    setCustomQs(updated);
    showToast("Question deleted.");
  }

  function saveTiers() {
    saveCustomTiers(tiers);
    setTierSaved(true);
    setTimeout(() => setTierSaved(false), 2000);
    showToast("Tier config saved!");
  }

  function resetTiers() {
    if (!confirm("Reset tiers to defaults?")) return;
    localStorage.removeItem("bytequest-tiers");
    setTiers(defaultTiers);
    showToast("Tiers reset to defaults.");
  }

  function updateTier(i, field, value) {
    setTiers((prev) => prev.map((t, idx) => idx === i ? { ...t, [field]: field === "count" || field === "xp" ? Number(value) : value } : t));
  }

  function updateChoice(q, setQ, idx, val) {
    const choices = [...q.choices];
    choices[idx] = val;
    setQ({ ...q, choices });
  }

  /* ── access denied ── */
  if (user === undefined) return <div className="adm-loading">LOADING...</div>;
  if (!user || !isAdmin(user)) return (
    <div className="adm-denied">
      <div className="adm-denied-box">
        <span>DS</span>
        <h1>ACCESS DENIED</h1>
        <p>Admin panel requires authorized admin account (<code>ayushkumard31@gmail.com</code> or UID <code>ayush1212</code>).</p>
        {user ? (
          <p className="adm-uid">
            Signed in as: <code>{user.email || user.uid}</code>
          </p>
        ) : null}
        <div className="adm-denied-btns">
          {user && <button onClick={() => signOut(auth)}>Sign Out</button>}
          <button onClick={() => window.location.href = "/"}>← Back to Game</button>
        </div>
      </div>
    </div>
  );

  const totalCustom = MODES.reduce((s, m) => s + getCustomQuestions(m.id).length, 0);
  const totalBuiltIn = MODES.reduce((s, m) => {
    const all = buildCampaign(m.id);
    return s + all.filter((q) => !q.isCustom).length;
  }, 0);
  const myRank = getRank(myStats?.totalXp || 0);
  const totalCleared = Object.values(myStats?.campaigns || {}).reduce((t, c) => t + (c.completedLevels?.length || 0), 0);

  /* ── question editor form ── */
  function QForm({ q, setQ, onSave, onCancel }) {
    return (
      <div className="adm-qform">
        <div className="adm-qform-row">
          <label>Title<input value={q.title} onChange={(e) => setQ({ ...q, title: e.target.value })} placeholder="e.g. Array access" /></label>
          <label>Type<select value={q.type} onChange={(e) => setQ({ ...q, type: e.target.value })}>
            <option>DSA TRIAL</option><option>CODE FORGE</option><option>BUG HUNT</option>
          </select></label>
          <label>XP Reward<input type="number" value={q.xpReward} onChange={(e) => setQ({ ...q, xpReward: Number(e.target.value) })} min={1} /></label>
        </div>
        <label className="adm-full">Prompt / Question<textarea rows={2} value={q.prompt} onChange={(e) => setQ({ ...q, prompt: e.target.value })} placeholder="The question text shown to the player" /></label>
        <label className="adm-full">Code snippet (optional — leave blank if none)<textarea rows={3} value={q.code || ""} onChange={(e) => setQ({ ...q, code: e.target.value || null })} placeholder="int x = 5;\n_____" className="adm-mono" /></label>
        <div className="adm-choices">
          {q.choices.map((c, idx) => (
            <label key={idx} className={`adm-choice${q.answer === idx ? " adm-correct" : ""}`}>
              <span>{String.fromCharCode(65 + idx)}</span>
              <input value={c} onChange={(e) => updateChoice(q, setQ, idx, e.target.value)} placeholder={`Choice ${String.fromCharCode(65 + idx)}`} />
              <button type="button" className={q.answer === idx ? "adm-mark-correct active" : "adm-mark-correct"} onClick={() => setQ({ ...q, answer: idx })} title="Mark as correct answer">✓</button>
            </label>
          ))}
        </div>
        <label className="adm-full">Hint<input value={q.hint} onChange={(e) => setQ({ ...q, hint: e.target.value })} placeholder="A helpful hint shown when player asks for one" /></label>
        <div className="adm-qform-actions">
          <button className="adm-btn adm-btn-primary" onClick={() => onSave(q)} disabled={!q.title || !q.prompt || q.choices.some((c) => !c)}>SAVE QUESTION</button>
          <button className="adm-btn adm-btn-ghost" onClick={onCancel}>CANCEL</button>
        </div>
      </div>
    );
  }

  return (
    <div className="adm-shell">
      {/* Sidebar */}
      <aside className="adm-sidebar">
        <div className="adm-logo">
          <span>DS</span>
          <div><b>ADMIN PANEL</b><small>DSA DUNGEON</small></div>
        </div>
        <nav className="adm-nav">
          {[
            { id: "dashboard", icon: "⊞", label: "Dashboard" },
            { id: "questions", icon: "?", label: "Questions" },
            { id: "tiers", icon: "◈", label: "Tier Config" },
          ].map((t) => (
            <button key={t.id} className={`adm-nav-btn${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id)}>
              <i>{t.icon}</i>{t.label}
            </button>
          ))}
        </nav>
        <div className="adm-sidebar-footer">
          <div className="adm-user-chip">
            <span className="adm-avatar">{user.displayName?.charAt(0).toUpperCase() || "A"}</span>
            <div><b>{user.displayName || user.email?.split("@")[0]}</b><small>Admin · {user.uid}</small></div>
          </div>
          <div className="adm-sidebar-actions">
            <button className="adm-btn adm-btn-ghost adm-sm" onClick={() => window.location.href = "/"}>← Game</button>
            <button className="adm-btn adm-btn-ghost adm-sm" onClick={() => signOut(auth).then(() => window.location.href = "/")}>Sign Out</button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="adm-main">
        {toast && <div className="adm-toast">{toast}</div>}

        {/* ── DASHBOARD ── */}
        {tab === "dashboard" && (
          <div className="adm-content">
            <h1 className="adm-title">Dashboard</h1>
            <p className="adm-subtitle">Overview of the DSA Dungeon question bank and your player stats.</p>

            <div className="adm-stat-grid">
              <div className="adm-stat-card">
                <small>TOTAL BUILT-IN QUESTIONS</small>
                <b>{totalBuiltIn}</b>
                <span>across all 3 modes</span>
              </div>
              <div className="adm-stat-card adm-stat-green">
                <small>CUSTOM QUESTIONS ADDED</small>
                <b>{totalCustom}</b>
                <span>admin-created</span>
              </div>
              <div className="adm-stat-card adm-stat-purple">
                <small>MY XP</small>
                <b>{myStats?.totalXp || 0}</b>
                <span>Rank: {myRank.name}</span>
              </div>
              <div className="adm-stat-card adm-stat-cyan">
                <small>MY LEVELS CLEARED</small>
                <b>{totalCleared}</b>
                <span>out of 150 total</span>
              </div>
            </div>

            <h2 className="adm-section-title">Questions per Mode</h2>
            <div className="adm-mode-grid">
              {MODES.map((m) => {
                const all = buildCampaign(m.id);
                const custom = getCustomQuestions(m.id).length;
                const builtin = all.length - custom;
                return (
                  <div key={m.id} className="adm-mode-card" style={{ "--mc": m.color }}>
                    <i>{m.icon}</i>
                    <b>{m.label}</b>
                    <div className="adm-mode-stats">
                      <span>{builtin} built-in</span>
                      <span className="adm-custom-count">{custom} custom</span>
                    </div>
                    <div className="adm-mode-bar"><div style={{ width: `${(builtin / (builtin + custom || 1)) * 100}%` }} /></div>
                    <button className="adm-btn adm-btn-sm" onClick={() => { setQMode(m.id); setTab("questions"); }}>Manage →</button>
                  </div>
                );
              })}
            </div>

            <h2 className="adm-section-title">Active Tier Config</h2>
            <div className="adm-tier-preview">
              {getActiveTierConfig().map((t, i) => (
                <div key={i} className="adm-tier-row" style={{ borderColor: t.color }}>
                  <b style={{ color: t.color }}>{t.name}</b>
                  <span>{t.count} questions</span>
                  <span>+{t.xp} XP each</span>
                  <span className="adm-tier-dot" style={{ background: t.color }} />
                </div>
              ))}
            </div>
            {getCustomTiers() && <p className="adm-notice">⚠ Custom tier config is active. <button onClick={resetTiers}>Reset to defaults</button></p>}
          </div>
        )}

        {/* ── QUESTIONS ── */}
        {tab === "questions" && (
          <div className="adm-content">
            <h1 className="adm-title">Question Bank</h1>
            <p className="adm-subtitle">View all built-in questions and add/edit/delete your own custom questions.</p>

            <div className="adm-mode-tabs">
              {MODES.map((m) => (
                <button key={m.id} className={`adm-mode-tab${qMode === m.id ? " active" : ""}`} style={{ "--mc": m.color }} onClick={() => setQMode(m.id)}>
                  <i>{m.icon}</i> {m.label}
                  {getCustomQuestions(m.id).length > 0 && <mark>{getCustomQuestions(m.id).length}</mark>}
                </button>
              ))}
            </div>

            {/* Add new */}
            {!newQ ? (
              <button className="adm-btn adm-btn-primary adm-add-btn" onClick={() => { setNewQ(emptyQuestion()); setEditQ(null); }}>+ ADD CUSTOM QUESTION</button>
            ) : (
              <div className="adm-qcard adm-qcard-new">
                <h3>New Custom Question</h3>
                <QForm q={newQ} setQ={setNewQ} onSave={saveQ} onCancel={() => setNewQ(null)} />
              </div>
            )}

            {/* Custom questions */}
            {customQs.length > 0 && (
              <div className="adm-q-section">
                <h2 className="adm-section-title">Custom Questions ({customQs.length})</h2>
                {customQs.map((q) => (
                  <div key={q.id} className="adm-qcard adm-qcard-custom">
                    {editQ?.id === q.id ? (
                      <>
                        <h3>Editing: {q.title}</h3>
                        <QForm q={editQ} setQ={setEditQ} onSave={saveQ} onCancel={() => setEditQ(null)} />
                      </>
                    ) : (
                      <>
                        <div className="adm-qcard-head">
                          <div>
                            <small>{q.type}</small>
                            <b>{q.title}</b>
                          </div>
                          <div className="adm-qcard-actions">
                            <button className="adm-btn adm-btn-sm" onClick={() => { setEditQ({ ...q }); setNewQ(null); }}>EDIT</button>
                            <button className="adm-btn adm-btn-danger adm-btn-sm" onClick={() => deleteQ(q.id)}>DELETE</button>
                          </div>
                        </div>
                        <p className="adm-qprompt">{q.prompt}</p>
                        <div className="adm-qchoices">
                          {q.choices.map((c, i) => <span key={i} className={i === q.answer ? "adm-qanswer" : ""}>{String.fromCharCode(65 + i)}. {c}</span>)}
                        </div>
                        {q.hint && <p className="adm-qhint">💡 {q.hint}</p>}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Built-in questions (read-only) */}
            <div className="adm-q-section">
              <h2 className="adm-section-title">Built-in Questions ({buildCampaign(qMode).filter((q) => !q.isCustom).length})</h2>
              <p className="adm-notice">Built-in questions are read-only. Add custom questions above to extend the bank.</p>
              <div className="adm-builtin-list">
                {buildCampaign(qMode).filter((q) => !q.isCustom).map((q, i) => (
                  <div key={i} className="adm-builtin-row">
                    <span className="adm-builtin-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <b>{q.title}</b>
                      <small>{q.prompt.slice(0, 80)}{q.prompt.length > 80 ? "…" : ""}</small>
                    </div>
                    <span className="adm-builtin-xp">+{q.xpReward} XP</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TIERS ── */}
        {tab === "tiers" && (
          <div className="adm-content">
            <h1 className="adm-title">Tier Configuration</h1>
            <p className="adm-subtitle">Edit difficulty tiers — name, question count, and XP reward per correct answer.</p>
            {getCustomTiers() && <p className="adm-notice adm-notice-warn">Custom tier config is currently active.</p>}

            <div className="adm-tier-editor">
              {tiers.map((t, i) => (
                <div key={i} className="adm-tier-edit-row" style={{ borderLeftColor: t.color }}>
                  <div className="adm-tier-index" style={{ color: t.color }}>{String(i + 1).padStart(2, "0")}</div>
                  <label>Name<input value={t.name} onChange={(e) => updateTier(i, "name", e.target.value)} /></label>
                  <label>Questions<input type="number" value={t.count} min={1} max={50} onChange={(e) => updateTier(i, "count", e.target.value)} /></label>
                  <label>XP per correct<input type="number" value={t.xp} min={1} max={1000} onChange={(e) => updateTier(i, "xp", e.target.value)} /></label>
                  <label>Color<input type="color" value={t.color} onChange={(e) => updateTier(i, "color", e.target.value)} className="adm-color-pick" /></label>
                </div>
              ))}
            </div>

            <div className="adm-tier-summary">
              <b>Total questions per mode:</b> {tiers.reduce((s, t) => s + t.count, 0)}
              <b>Max XP per mode:</b> {tiers.reduce((s, t) => s + t.count * t.xp, 0).toLocaleString()}
            </div>

            <div className="adm-tier-btns">
              <button className={`adm-btn adm-btn-primary${tierSaved ? " adm-btn-saved" : ""}`} onClick={saveTiers}>
                {tierSaved ? "✓ SAVED!" : "SAVE TIER CONFIG"}
              </button>
              <button className="adm-btn adm-btn-ghost" onClick={resetTiers}>RESET TO DEFAULTS</button>
            </div>

            <div className="adm-tier-preview-box">
              <h3>Preview</h3>
              {tiers.map((t, i) => (
                <div key={i} className="adm-tier-preview-row">
                  <span style={{ color: t.color }}>●</span>
                  <b>{t.name}</b>
                  <span>{t.count} questions × {t.xp} XP = {(t.count * t.xp).toLocaleString()} XP total</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
