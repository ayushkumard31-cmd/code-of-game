(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-code-game/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable react/jsx-no-comment-textnodes */ var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/questionBank.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const dsaTopics = [
    {
        name: "Arrays",
        icon: "[ ]",
        detail: "Indexing, traversal and array operations",
        level: 0
    },
    {
        name: "Linked Lists",
        icon: "→",
        detail: "Nodes, pointers and list operations",
        level: 5
    },
    {
        name: "Stacks",
        icon: "▤",
        detail: "LIFO operations and applications",
        level: 1
    },
    {
        name: "Queues",
        icon: "⇥",
        detail: "FIFO, circular and priority queues",
        level: 2
    },
    {
        name: "Searching",
        icon: "⌕",
        detail: "Linear and binary search",
        level: 3
    },
    {
        name: "Sorting",
        icon: "≋",
        detail: "Core sorting algorithms and complexity",
        level: 8
    },
    {
        name: "Trees",
        icon: "⌘",
        detail: "Binary trees, BSTs and traversal",
        level: 4
    },
    {
        name: "Hash Tables",
        icon: "#",
        detail: "Hashing, buckets and collisions",
        level: 6
    },
    {
        name: "Graphs",
        icon: "◇",
        detail: "BFS, DFS and shortest paths",
        level: 7
    },
    {
        name: "Recursion",
        icon: "↻",
        detail: "Base cases and recursive thinking",
        level: 9
    }
];
function StackQuestionVisual({ prompt }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StackQuestionVisual.useState": ()=>(prompt.match(/\d+/g) || []).slice(-3).map(Number)
    }["StackQuestionVisual.useState"]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("READ FROM BOTTOM → TOP");
    function push() {
        if (items.length >= 5) {
            setStatus("OVERFLOW — STACK IS FULL");
            return;
        }
        const value = Math.floor(Math.random() * 90) + 10;
        setItems((currentItems)=>[
                ...currentItems,
                value
            ]);
        setStatus(`PUSHED ${value} TO TOP`);
    }
    function pop() {
        if (!items.length) {
            setStatus("UNDERFLOW — STACK IS EMPTY");
            return;
        }
        const value = items[items.length - 1];
        setItems((currentItems)=>currentItems.slice(0, -1));
        setStatus(`POPPED ${value} FROM TOP`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "question-stack-lab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "LIVE STACK VISUALIZER"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 51
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Which item leaves first?"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "In LIFO, the newest top item is removed first."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 118
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 171
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: push,
                                type: "button",
                                children: "+ PUSH"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 25,
                                columnNumber: 197
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pop,
                                type: "button",
                                disabled: !items.length,
                                children: "− POP"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 25,
                                columnNumber: 249
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 192
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 25,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "question-stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "TOP ↓"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 368
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            ...items
                        ].reverse().map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: item
                            }, `${item}-${items.length - index}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 25,
                                columnNumber: 434
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 386
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "BOTTOM"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 495
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 25,
                columnNumber: 336
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_s(StackQuestionVisual, "FY/TzQK9jc4NDhzVZ7iijnEgGME=");
_c = StackQuestionVisual;
function Home() {
    _s1();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home"), [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa"), [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3), [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [hint, setHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [loginOpen, setLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [pendingMode, setPendingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa"), [pendingLevel, setPendingLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [stackItems, setStackItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        12,
        27,
        41
    ]), [stackMessage, setStackMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("TOP → 41"), [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [createMode, setCreateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user, stats, loading, login, loginWithPassword, createAccount, resetPassword, logout, saveRun, completeLevel, finishRun } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const campaign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(mode), current = campaign[level], rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRank"])(xp), tier = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierConfig"][current?.tier || 0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!loading && user && stats.activeGame && stats.activeGame.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(stats.activeGame.mode).length) {
                const run = stats.activeGame;
                const resume = window.setTimeout({
                    "Home.useEffect.resume": ()=>{
                        setMode(run.mode);
                        setLevel(run.currentLevel || 0);
                        setLives(run.lives || 3);
                        setXp(run.xp || 0);
                        setChoice(Number.isInteger(run.selectedChoice) ? run.selectedChoice : null);
                        setHint(Boolean(run.hint));
                        setScreen("game");
                    }
                }["Home.useEffect.resume"], 0);
                return ({
                    "Home.useEffect": ()=>window.clearTimeout(resume)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        loading,
        user,
        stats.activeGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (user && screen === "game") saveRun(mode, {
                currentLevel: level,
                lives,
                xp,
                selectedChoice: choice,
                hint
            });
        }
    }["Home.useEffect"], [
        choice,
        hint
    ]); // Save in-progress quiz interaction without replacing level-completion checkpoints.
    function enterCampaign(nextMode, targetLevel = null) {
        const queuedTopic = typeof nextMode === "string" && nextMode.startsWith("topic:") ? nextMode.split(":") : null;
        const queuedLevel = queuedTopic ? Number(queuedTopic[2]) : typeof nextMode === "string" && nextMode.startsWith("level:") ? Number(nextMode.split(":")[1]) : null;
        const campaignMode = queuedTopic ? queuedTopic[1] : queuedLevel === null ? nextMode : "dsa";
        const selectedLevel = targetLevel ?? queuedLevel;
        const saved = stats.campaigns?.[campaignMode];
        const canResume = saved && saved.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(campaignMode).length;
        const run = {
            currentLevel: selectedLevel ?? (canResume ? saved.currentLevel : 0),
            lives: canResume ? saved.lives || 3 : 3,
            xp: canResume ? saved.xp || 0 : 0,
            selectedChoice: null,
            hint: false,
            completedLevels: saved?.completedLevels || []
        };
        setMode(campaignMode);
        setScreen("game");
        setLevel(run.currentLevel);
        setChoice(null);
        setLives(run.lives);
        setXp(run.xp);
        setHint(false);
        setMessage("");
        saveRun(campaignMode, run);
    }
    function start(nextMode = "dsa") {
        const mapLevel = screen === "home" ? ({
            dsa: 0,
            code: 1,
            bugs: 2
        })[nextMode] : null;
        const campaignMode = mapLevel === null || mapLevel === undefined ? nextMode : "dsa";
        if (!user) {
            setPendingMode(mapLevel === null || mapLevel === undefined ? campaignMode : `level:${mapLevel}`);
            setPendingLevel(mapLevel ?? null);
            setLoginOpen(true);
            return;
        }
        enterCampaign(campaignMode, mapLevel);
    }
    function launchTopic(challengeMode) {
        const topicLevel = selectedTopic?.level ?? 0;
        if (!user) {
            setPendingMode(`topic:${challengeMode}:${topicLevel}`);
            setPendingLevel(topicLevel);
            setSelectedTopic(null);
            setLoginOpen(true);
            return;
        }
        setSelectedTopic(null);
        enterCampaign(challengeMode, topicLevel);
    }
    function pushStack() {
        if (stackItems.length >= 5) {
            setStackMessage("STACK OVERFLOW — POP FIRST");
            return;
        }
        const value = Math.floor(Math.random() * 90) + 10;
        setStackItems((items)=>[
                ...items,
                value
            ]);
        setStackMessage(`PUSH ${value} — NEW TOP`);
    }
    function popStack() {
        if (!stackItems.length) {
            setStackMessage("STACK UNDERFLOW — NOTHING TO POP");
            return;
        }
        const removed = stackItems[stackItems.length - 1];
        setStackItems((items)=>items.slice(0, -1));
        setStackMessage(`POP ${removed} — ITEM REMOVED`);
    }
    async function handleLogin() {
        setAuthError("");
        try {
            await login();
            setLoginOpen(false);
            enterCampaign(pendingMode, pendingLevel);
        } catch (error) {
            if (error?.code !== "auth/popup-closed-by-user") setAuthError("Google sign-in failed. Please try again.");
        }
    }
    async function handlePasswordLogin(event) {
        event.preventDefault();
        setAuthError("");
        try {
            if (createMode) await createAccount(email.trim(), password);
            else await loginWithPassword(email.trim(), password);
            setLoginOpen(false);
            enterCampaign(pendingMode);
        } catch (error) {
            const messages = {
                "auth/invalid-credential": "Wrong password, or this email only uses Google login. Try Google or create a password account.",
                "auth/user-not-found": "No password account exists for this email. Create an account first.",
                "auth/wrong-password": "The password is incorrect. Use Forgot password to reset it.",
                "auth/email-already-in-use": "This email already has an account. Sign in or use Google.",
                "auth/weak-password": "Use a password with at least 6 characters.",
                "auth/invalid-email": "Enter a valid email address.",
                "auth/operation-not-allowed": "Email/password login is disabled in Firebase Console. Enable it under Authentication → Sign-in method.",
                "auth/network-request-failed": "Network error. Check your connection and try again.",
                "auth/too-many-requests": "Too many attempts. Wait a moment or reset your password."
            };
            setAuthError(messages[error?.code] || `Firebase sign-in failed (${error?.code || "unknown error"}).`);
        }
    }
    async function handlePasswordReset() {
        setAuthError("");
        if (!email.trim()) {
            setAuthError("Enter your email above before requesting a reset.");
            return;
        }
        try {
            await resetPassword(email.trim());
            setAuthError("Password reset email sent. Check your inbox and spam folder.");
        } catch (error) {
            const messages = {
                "auth/invalid-email": "Enter a valid email address.",
                "auth/operation-not-allowed": "Email/password login is disabled in Firebase Console.",
                "auth/too-many-requests": "Too many requests. Please wait and try again."
            };
            setAuthError(messages[error?.code] || `Password reset failed (${error?.code || "unknown error"}).`);
        }
    }
    async function handleLogout() {
        await logout();
        setProfileOpen(false);
        setScreen("home");
    }
    function navigateTo(id) {
        setScreen("home");
        window.setTimeout(()=>document.getElementById(id)?.scrollIntoView({
                behavior: "smooth"
            }), 0);
    }
    function next() {
        if (level === campaign.length - 1) {
            finishRun(mode);
            setScreen("win");
        } else {
            setLevel(level + 1);
            setChoice(null);
            setHint(false);
            setMessage("");
        }
    }
    function submit() {
        if (choice === current.answer) {
            const alreadyCompleted = stats.campaigns?.[mode]?.completedLevels?.includes(level);
            const earned = alreadyCompleted ? 0 : current.xpReward;
            const nextXp = xp + earned;
            setXp(nextXp);
            completeLevel(mode, level, {
                currentLevel: level + 1,
                lives,
                xpReward: current.xpReward
            });
            setMessage(`LEVEL CLEAR  +${earned} XP`);
            setTimeout(next, 650);
            return;
        }
        const remaining = lives - 1;
        setLives(remaining);
        setChoice(null);
        saveRun(mode, {
            currentLevel: level,
            lives: remaining,
            xp
        });
        setMessage(remaining ? "LIFE LOST — TRY AGAIN" : "OUT OF LIVES");
        if (!remaining) setTimeout(()=>setScreen("lost"), 700);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `shell ${screen === "home" ? "storefront" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 54,
                columnNumber: 77
            }, this),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "profile-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "PROFILE"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 54,
                        columnNumber: 148
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: user.displayName || user.email?.split("@")[0] || "Player"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 54,
                                columnNumber: 179
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    stats.totalXp,
                                    " XP · ",
                                    Object.values(stats.campaigns || {}).reduce((total, run)=>total + (run.completedLevels?.length || 0), 0),
                                    " / 150 LEVELS CLEARED"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 54,
                                columnNumber: 245
                            }, this),
                            [
                                "dsa",
                                "code",
                                "bugs"
                            ].map((campaignMode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        campaignMode.toUpperCase(),
                                        ": ",
                                        stats.campaigns?.[campaignMode]?.completedLevels?.length || 0,
                                        " / 50 COMPLETE"
                                    ]
                                }, campaignMode, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 54,
                                    columnNumber: 455
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 54,
                        columnNumber: 174
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 54,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "wordmark",
                        onClick: ()=>navigateTo("top"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "DS"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 55,
                                columnNumber: 95
                            }, this),
                            " DSA DUNGEON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 55,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("quests"),
                                children: "Quests"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 55,
                                columnNumber: 136
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("benefits"),
                                children: "Rewards"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 55,
                                columnNumber: 196
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("about"),
                                children: "How it works"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 55,
                                columnNumber: 259
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 55,
                        columnNumber: 131
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "account",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "account-loading",
                            children: "LOADING..."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 55,
                            columnNumber: 366
                        }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "avatar",
                                    children: user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "P"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 55,
                                    columnNumber: 454
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "user-name",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: user.displayName || user.email?.split("@")[0] || "Player"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 55,
                                            columnNumber: 603
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                stats.totalXp,
                                                " XP · HIGH ",
                                                stats.highScore
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 55,
                                            columnNumber: 669
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 55,
                                    columnNumber: 575
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    children: "LOG OUT"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 55,
                                    columnNumber: 734
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 55,
                            columnNumber: 427
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "login-nav",
                            onClick: ()=>{
                                setPendingMode("dsa");
                                setLoginOpen(true);
                            },
                            children: "SIGN IN"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 55,
                            columnNumber: 790
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 55,
                        columnNumber: 330
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dungeon-map",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "THE LEARNING PATH"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 94
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "Master the dungeon, one structure at a time."
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Choose a topic, then pick how you want to train."
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 179
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 56,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-progress",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: Object.values(stats.campaigns || {}).reduce((total, run)=>total + (run.completedLevels?.length || 0), 0)
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 270
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "CHALLENGES",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 56,
                                                columnNumber: 401
                                            }, this),
                                            "CLEARED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 385
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 56,
                                columnNumber: 240
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 56,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topic-path",
                        children: dsaTopics.map((topic, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `topic-node node-${index % 4}`,
                                onClick: ()=>setSelectedTopic({
                                        ...topic,
                                        index
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: topic.icon
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 615
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    "LEVEL ",
                                                    String(index + 1).padStart(2, "0")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 56,
                                                columnNumber: 640
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: topic.name
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 56,
                                                columnNumber: 697
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: topic.detail
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 56,
                                                columnNumber: 716
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 634
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 56,
                                        columnNumber: 746
                                    }, this)
                                ]
                            }, topic.name, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 56,
                                columnNumber: 493
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 56,
                        columnNumber: 432
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 56,
                columnNumber: 27
            }, this),
            selectedTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topic-backdrop",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "topic-title",
                onMouseDown: (event)=>{
                    if (event.target === event.currentTarget) setSelectedTopic(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `topic-modal ${selectedTopic.name === "Stacks" ? "stack-topic-modal" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "topic-close",
                            onClick: ()=>setSelectedTopic(null),
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 305
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "topic-symbol",
                            children: selectedTopic.icon
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 405
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: [
                                "LEVEL ",
                                String(selectedTopic.index + 1).padStart(2, "0")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 461
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "topic-title",
                            children: selectedTopic.name
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 532
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                selectedTopic.detail,
                                ". Choose your challenge type."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 578
                        }, this),
                        selectedTopic.name === "Stacks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack-lab",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stack-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "INTERACTIVE LIFO LAB"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 727
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Last in, first out"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 762
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Push adds to the top. Pop removes the top item."
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 787
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stack-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: pushStack,
                                                    children: "+ PUSH"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 872
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: popStack,
                                                    disabled: !stackItems.length,
                                                    children: "− POP"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 915
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 841
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: stackMessage
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 699
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stack-machine",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stack-top",
                                            children: "TOP ↓"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1056
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stack-values",
                                            children: [
                                                ...stackItems
                                            ].reverse().map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: item
                                                }, `${item}-${stackItems.length - index}`, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1174
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1096
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "STACK"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1240
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 1025
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 672
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "challenge-types",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("dsa"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1351
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "DSA Trial"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1365
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Test your concepts"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1381
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1359
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 1308
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("code"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "</>"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1492
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Code Forge"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1514
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Complete the C code"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1531
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1508
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1572
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 1448
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("bugs"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "!"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1643
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Bug Hunt"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1657
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Find and fix errors"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 1672
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1651
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 57,
                                            columnNumber: 1713
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 1599
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 1275
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 57,
                    columnNumber: 212
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 57,
                columnNumber: 23
            }, this),
            screen === "game" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "game",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "CURRENT CAMPAIGN"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 60
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: current.type
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tier-badge",
                                style: {
                                    borderColor: tier.color,
                                    color: tier.color
                                },
                                children: tier.name
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 114
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "counter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: String(current.tierQuestion).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 234
                                    }, this),
                                    " / ",
                                    String(current.tierTotal).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 209
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    style: {
                                        width: `${(level + 1) / campaign.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 58,
                                    columnNumber: 360
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 339
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-stats",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "XP ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: xp
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 469
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 460
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "RANK ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: rank.name
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 498
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 487
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 430
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rank-progress",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            width: `${Math.min(100, xp / rank.next * 100)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 560
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: rank.name === "LEGEND" ? "MAX RANK" : `${rank.next - xp} XP TO NEXT RANK`
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 622
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 529
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "life",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hearts",
                                        children: [
                                            "♥".repeat(lives),
                                            "♡".repeat(3 - lives)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 740
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    lives,
                                                    " LIVES LEFT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 818
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "WRONG ANSWERS COST ONE"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 843
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 812
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 718
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setScreen("home"),
                                children: "× EXIT QUEST"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 893
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 58,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "QUESTION ",
                                            level + 1,
                                            " / ",
                                            campaign.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1001
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "REWARD +",
                                            current.xpReward,
                                            " XP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1054
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 973
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: current.title
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1096
                            }, this),
                            current.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1166
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1170
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1174
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "challenge.c"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1178
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1161
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        children: current.code
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1208
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "instruction",
                                children: current.prompt
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1240
                            }, this),
                            current.title === "Stack behavior" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackQuestionVisual, {
                                prompt: current.prompt
                            }, `${mode}-${level}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1326
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "options",
                                children: current.choices.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: choice === i ? "active" : "",
                                        onClick: ()=>setChoice(i),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: String.fromCharCode(65 + i)
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1546
                                            }, this),
                                            item,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 58,
                                                columnNumber: 1588
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1457
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1398
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "submit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hint-button",
                                        onClick: ()=>setHint(!hint),
                                        children: [
                                            "💡 ",
                                            hint ? "HIDE HINT" : "USE HINT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1637
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: message.includes("CLEAR") ? "success" : "error",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1745
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "primary",
                                        disabled: choice === null || message.includes("CLEAR"),
                                        onClick: submit,
                                        children: "CONFIRM →"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 1827
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1613
                            }, this),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint",
                                children: [
                                    "// HINT: ",
                                    current.hint
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 1961
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 58,
                        columnNumber: 964
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 58,
                columnNumber: 27
            }, this),
            (screen === "win" || screen === "lost") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `ending ${screen === "lost" ? "lost" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: screen === "win" ? "CAMPAIGN_COMPLETE" : "RUN_ENDED"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: screen === "win" ? "QUEST\nCLEARED." : "OUT OF\nLIVES."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: screen === "win" ? `You earned ${xp} XP and finished as ${rank.name}.` : `You reached ${rank.name} with ${xp} XP. Refill your hearts and try again.`
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 247
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary",
                        onClick: ()=>start(mode),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 404
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ghost",
                        onClick: ()=>setScreen("home"),
                        children: "LOBBY"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 479
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 59,
                columnNumber: 49
            }, this),
            loginOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-backdrop",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "login-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "login-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close",
                            onClick: ()=>setLoginOpen(false),
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 142
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-logo",
                            children: "DS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 239
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "PLAYER ACCESS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 277
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "login-title",
                            children: createMode ? "Create your account" : "Sign in to play"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-copy",
                            children: "Save your XP, highest score, and rank with Firebase."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 379
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "google-login",
                            onClick: handleLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 60,
                                    columnNumber: 522
                                }, this),
                                " CONTINUE WITH GOOGLE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 467
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-divider",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OR USE EMAIL"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 60,
                                columnNumber: 590
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 560
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "email-login",
                            onSubmit: handlePasswordLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "EMAIL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (event)=>setEmail(event.target.value),
                                            placeholder: "player@example.com",
                                            autoComplete: "email",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 60,
                                            columnNumber: 694
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 60,
                                    columnNumber: 682
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "PASSWORD",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (event)=>setPassword(event.target.value),
                                            placeholder: "6 or more characters",
                                            autoComplete: createMode ? "new-password" : "current-password",
                                            minLength: "6",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 60,
                                            columnNumber: 867
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 60,
                                    columnNumber: 852
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    children: createMode ? "CREATE ACCOUNT" : "SIGN IN WITH PASSWORD"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 60,
                                    columnNumber: 1093
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 621
                        }, this),
                        !createMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "forgot-password",
                            onClick: handlePasswordReset,
                            children: "FORGOT PASSWORD?"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 1204
                        }, this),
                        authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: authError.includes("sent") ? "auth-success" : "auth-error",
                            children: authError
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 1310
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "auth-switch",
                            onClick: ()=>{
                                setCreateMode(!createMode);
                                setAuthError("");
                            },
                            children: createMode ? "Already registered? Sign in" : "New player? Create an account"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 1408
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "Login is required before entering a campaign."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 60,
                            columnNumber: 1593
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 60,
                    columnNumber: 113
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 60,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 DSA DUNGEON"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LEARN C · MASTER DSA · FIX BUGS"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 61,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 61,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
_s1(Home, "1ypxtxCWQnc/TUKgmGTqHqUTKlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "StackQuestionVisual");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/app/questionBank.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCampaign",
    ()=>buildCampaign,
    "getRank",
    ()=>getRank,
    "tierConfig",
    ()=>tierConfig
]);
const tierConfig = [
    {
        name: "LEVEL 1 · BEGINNER",
        count: 20,
        xp: 50,
        color: "#58d68d"
    },
    {
        name: "LEVEL 2 · INTERMEDIATE",
        count: 15,
        xp: 100,
        color: "#4ec9e8"
    },
    {
        name: "LEVEL 3 · ADVANCED",
        count: 10,
        xp: 175,
        color: "#b377ff"
    },
    {
        name: "LEVEL 4 · EXPERT",
        count: 5,
        xp: 300,
        color: "#ff6b5f"
    }
];
const rotate = (choices, correct, shift)=>{
    const amount = shift % choices.length;
    const moved = [
        ...choices.slice(amount),
        ...choices.slice(0, amount)
    ];
    return {
        choices: moved,
        answer: (correct - amount + choices.length) % choices.length
    };
};
function question(type, title, prompt, choices, correct, hint, code, index) {
    return {
        type,
        title,
        prompt,
        hint,
        code,
        ...rotate(choices, correct, index)
    };
}
const dsaQuestion = (i, tier)=>{
    const n = 8 + i * 2;
    const set = [
        [
            "Array access",
            `What is the time complexity of reading array index ${i % 7}?`,
            [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n²)"
            ],
            0,
            "Direct indexing does not scan the array."
        ],
        [
            "Stack behavior",
            `After pushing ${i + 2}, ${i + 3}, ${i + 4}, which value is popped first?`,
            [
                `${i + 4}`,
                `${i + 2}`,
                `${i + 3}`,
                "None"
            ],
            0,
            "A stack is last-in, first-out."
        ],
        [
            "Queue behavior",
            `After enqueueing ${i + 1}, ${i + 2}, ${i + 3}, which leaves first?`,
            [
                `${i + 1}`,
                `${i + 3}`,
                `${i + 2}`,
                "None"
            ],
            0,
            "A queue is first-in, first-out."
        ],
        [
            "Binary search",
            `At most how many halvings are needed to search about ${2 ** (4 + i % 6)} sorted items?`,
            [
                `${4 + i % 6}`,
                `${2 ** (4 + i % 6)}`,
                "1",
                `${8 + i % 6}`
            ],
            0,
            "Binary search halves the remaining range."
        ],
        [
            "Tree structure",
            "What is the maximum number of children of a binary-tree node?",
            [
                "2",
                "1",
                "3",
                "Unlimited"
            ],
            0,
            "Binary means at most two branches."
        ],
        [
            "Linked lists",
            `To insert at the head of a singly linked list, what must the new node point to?`,
            [
                "The old head",
                "NULL always",
                "The tail",
                "Itself"
            ],
            0,
            "Preserve the existing chain."
        ],
        [
            "Hash tables",
            `Which event usually hurts hash-table lookup performance?`,
            [
                "Many collisions",
                "A small key",
                "FIFO order",
                "Recursion"
            ],
            0,
            "Several keys competing for one bucket requires extra work."
        ],
        [
            "Graph traversal",
            `Which traversal finds shortest paths in an unweighted graph with ${n} vertices?`,
            [
                "BFS",
                "DFS",
                "Inorder",
                "Quicksort"
            ],
            0,
            "Explore equally distant neighbors together."
        ],
        [
            "Sorting",
            `Which bound describes merge sort on ${n} values?`,
            [
                "O(n log n)",
                "O(n²)",
                "O(1)",
                "O(log n)"
            ],
            0,
            "It divides, then performs linear merging."
        ],
        [
            "Recursion",
            `What prevents a recursive function from calling itself forever?`,
            [
                "A base case",
                "A hash key",
                "A queue",
                "A compiler flag"
            ],
            0,
            "It is the stopping condition."
        ]
    ][i % 10];
    const expert = tier === 3 ? "Analyze carefully: " : "";
    return question("DSA TRIAL", set[0], expert + set[1], set[2], set[3], set[4], null, i);
};
const codeQuestion = (i, tier)=>{
    const x = 3 + i;
    const set = [
        [
            "Print a value",
            `int x = ${x};\n_____`,
            `Which line prints ${x}?`,
            [
                `printf("%d", x);`,
                "printf(x);",
                "print(x);",
                "cout << x;"
            ],
            0,
            "C printf needs a format specifier."
        ],
        [
            "Loop boundary",
            `int a[${i % 5 + 3}];\nfor (int j = 0; _____; j++)`,
            "Choose the safe boundary.",
            [
                `j < ${i % 5 + 3}`,
                `j <= ${i % 5 + 3}`,
                "j > 0",
                "j != -1"
            ],
            0,
            "The array size is one more than its final index."
        ],
        [
            "Pointer read",
            `int score = ${x};\nint *p = &score;\n_____`,
            "How do you print the pointed-to value?",
            [
                `printf("%d", *p);`,
                `printf("%d", p);`,
                "printf(*score);",
                "p = score;"
            ],
            0,
            "Use * to dereference p."
        ],
        [
            "Even check",
            `int value = ${x * 2};\nif (_____) puts("even");`,
            "Complete the condition.",
            [
                "value % 2 == 0",
                "value / 2 == 0",
                "value = 2",
                "value % 2 == 1"
            ],
            0,
            "Even numbers leave remainder zero."
        ],
        [
            "Array sum",
            `int total = 0;\nfor(int j=0;j<${i % 4 + 2};j++) _____;`,
            "Accumulate every element of a.",
            [
                "total += a[j]",
                "total = a",
                "a[j] += total",
                "total++"
            ],
            0,
            "Add the current element into total."
        ],
        [
            "String length",
            `char word[] = "code";\nint n = _____;`,
            "Get the string length.",
            [
                "strlen(word)",
                "sizeof(char)",
                "word.length",
                "length(word)"
            ],
            0,
            "The C string library provides strlen."
        ],
        [
            "Allocate memory",
            `int *items = _____;`,
            `Allocate space for ${x} integers.`,
            [
                `malloc(${x} * sizeof(int))`,
                `malloc(${x})`,
                `new int[${x}]`,
                "alloc(int)"
            ],
            0,
            "Multiply the element count by the element size."
        ],
        [
            "Swap values",
            `int temp = a;\na = b;\n_____`,
            "Complete the swap.",
            [
                "b = temp;",
                "temp = b;",
                "a = temp;",
                "b = a;"
            ],
            0,
            "The saved original a belongs in b."
        ],
        [
            "Function result",
            `int square(int n) {\n  _____\n}`,
            "Return the square of n.",
            [
                "return n * n;",
                "print(n*n);",
                "n * n;",
                "return n + n;"
            ],
            0,
            "A non-void function must return its result."
        ],
        [
            "Linked node",
            `struct Node *node = malloc(sizeof *node);\n_____`,
            "Initialize its next pointer safely.",
            [
                "node->next = NULL;",
                "node.next = NULL;",
                "next->node = 0;",
                "node = NULL;"
            ],
            0,
            "Use -> through a structure pointer."
        ]
    ][i % 10];
    return question("CODE FORGE", set[0], set[2], set[3], set[4], set[5], set[1], i + tier);
};
const bugQuestion = (i, tier)=>{
    const size = 3 + i % 6;
    const set = [
        [
            "Off-by-one",
            `int a[${size}];\nfor(int j=0; j<=${size}; j++) a[j]=j;`,
            "Which change prevents the out-of-bounds write?",
            [
                `Use j < ${size}`,
                `Use j <= ${size}`,
                "Start at 1",
                "Remove j++"
            ],
            0,
            "The final valid index is size - 1."
        ],
        [
            "Null dereference",
            "struct Node *head = NULL;\nprintf(\"%d\", head->data);",
            "What must happen before dereferencing head?",
            [
                "Check head != NULL",
                "Increment head",
                "Free head",
                "Cast head"
            ],
            0,
            "NULL does not refer to an object."
        ],
        [
            "Memory leak",
            `char *text = malloc(${size * 8});\nstrcpy(text, "quest");\nreturn;`,
            "What cleanup is missing?",
            [
                "free(text);",
                "delete text;",
                "text = 0 only;",
                "free(*text);"
            ],
            0,
            "Every successful malloc needs a matching free."
        ],
        [
            "Wrong allocation",
            `int *a = malloc(${size});`,
            `Why may this allocation be too small for ${size} integers?`,
            [
                "It omits sizeof(int)",
                "malloc cannot allocate ints",
                "It needs calloc only",
                "The pointer must be char"
            ],
            0,
            "malloc receives bytes, not an element count."
        ],
        [
            "Assignment in condition",
            "if (score = 100) puts(\"max\");",
            "Which fix performs comparison?",
            [
                "score == 100",
                "score != 100",
                "score := 100",
                "score equals 100"
            ],
            0,
            "One equals assigns; two compare."
        ],
        [
            "Uninitialized value",
            "int total;\ntotal += 5;",
            "How should total be fixed?",
            [
                "Initialize total to 0",
                "Make total a pointer",
                "Free total",
                "Use a float"
            ],
            0,
            "The first += reads the old value."
        ],
        [
            "Use after free",
            "int *p = malloc(sizeof(int));\nfree(p);\nprintf(\"%d\", *p);",
            "Which operation is invalid?",
            [
                "Dereferencing p after free",
                "Calling malloc",
                "Calling free",
                "Declaring p"
            ],
            0,
            "Freed storage no longer belongs to the program."
        ],
        [
            "Buffer overflow",
            `char name[${size}];\nstrcpy(name, "long-player-name");`,
            "What is the core problem?",
            [
                "The source may exceed the buffer",
                "name is too large",
                "strcpy only copies ints",
                "The array needs free"
            ],
            0,
            "strcpy does not know the destination capacity."
        ],
        [
            "Integer division",
            "float ratio = 5 / 2;",
            "Why does ratio become 2 instead of 2.5?",
            [
                "Both operands are integers",
                "ratio must be int",
                "Division is unsupported",
                "5 is too small"
            ],
            0,
            "Convert at least one operand to floating point."
        ],
        [
            "Missing terminator",
            "char word[4] = {'c','o','d','e'};\nprintf(\"%s\", word);",
            "What makes %s unsafe here?",
            [
                "There is no null terminator",
                "The array is constant",
                "%s needs an int",
                "printf frees word"
            ],
            0,
            "C strings end with \\0."
        ]
    ][i % 10];
    return question("BUG HUNT", set[0], set[2], set[3], set[4], set[5], set[1], i + tier * 2);
};
const builders = {
    dsa: dsaQuestion,
    code: codeQuestion,
    bugs: bugQuestion
};
function buildCampaign(mode) {
    let globalIndex = 0;
    return tierConfig.flatMap((tier, tierIndex)=>Array.from({
            length: tier.count
        }, (_, localIndex)=>({
                ...builders[mode](globalIndex++, tierIndex),
                tier: tierIndex,
                tierQuestion: localIndex + 1,
                tierTotal: tier.count,
                xpReward: tier.xp
            })));
}
function getRank(xp) {
    if (xp >= 5500) return {
        name: "LEGEND",
        next: 5500
    };
    if (xp >= 4500) return {
        name: "CODE MASTER",
        next: 5500
    };
    if (xp >= 2500) return {
        name: "BUG SLAYER",
        next: 4500
    };
    if (xp >= 1200) return {
        name: "ALGORITHM KNIGHT",
        next: 2500
    };
    if (xp >= 500) return {
        name: "CODE EXPLORER",
        next: 1200
    };
    return {
        name: "ROOKIE",
        next: 500
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export x as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__GoogleAuthProvider$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export f as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__getAuth$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export D as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export _ as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__sendPasswordResetEmail$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export a9 as sendPasswordResetEmail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__af__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export af as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ai__as__signInWithPopup$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export ai as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ak__as__signOut$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/auth/dist/esm/index-CvXU3_1x.js [app-client] (ecmascript) <export ak as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/lib/firebase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__getAuth$3e$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseApp"]);
const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
provider.setCustomParameters({
    prompt: "select_account"
});
const emptyStats = {
    totalXp: 0,
    highScore: 0,
    campaigns: {},
    activeGame: null
};
const storageKey = (uid)=>`bytequest-player-${uid}`;
function normaliseStats(value) {
    return {
        ...emptyStats,
        ...value,
        campaigns: value?.campaigns || {},
        activeGame: value?.activeGame || null
    };
}
function usePlayer() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyStats);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayer.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(auth, {
                "usePlayer.useEffect": (nextUser)=>{
                    setUser(nextUser);
                    if (nextUser) {
                        try {
                            setStats(normaliseStats(JSON.parse(localStorage.getItem(storageKey(nextUser.uid)))));
                        } catch  {
                            setStats(emptyStats);
                        }
                    } else {
                        setStats(emptyStats);
                    }
                    setLoading(false);
                }
            }["usePlayer.useEffect"])
    }["usePlayer.useEffect"], []);
    async function login() {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ai__as__signInWithPopup$3e$__["signInWithPopup"])(auth, provider);
        return result.user;
    }
    async function loginWithPassword(email, password) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__af__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(auth, email, password);
        return result.user;
    }
    async function createAccount(email, password) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(auth, email, password);
        return result.user;
    }
    async function resetPassword(email) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__sendPasswordResetEmail$3e$__["sendPasswordResetEmail"])(auth, email);
    }
    async function logout() {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ak__as__signOut$3e$__["signOut"])(auth);
    }
    function updateStats(updater) {
        if (!auth.currentUser) return;
        setStats((previous)=>{
            const next = normaliseStats(updater(normaliseStats(previous)));
            localStorage.setItem(storageKey(auth.currentUser.uid), JSON.stringify(next));
            return next;
        });
    }
    function saveRun(mode, run) {
        updateStats((previous)=>({
                ...previous,
                campaigns: {
                    ...previous.campaigns,
                    [mode]: {
                        ...previous.campaigns[mode] || {},
                        ...run
                    }
                },
                activeGame: {
                    mode,
                    ...run
                }
            }));
    }
    function completeLevel(mode, completedLevel, nextRun) {
        updateStats((previous)=>{
            const oldCampaign = previous.campaigns[mode] || {
                completedLevels: [],
                xp: 0
            };
            const completedLevels = [
                ...new Set([
                    ...oldCampaign.completedLevels || [],
                    completedLevel
                ])
            ];
            const newlyCompleted = !(oldCampaign.completedLevels || []).includes(completedLevel);
            const earned = newlyCompleted ? nextRun.xpReward : 0;
            const campaign = {
                ...oldCampaign,
                ...nextRun,
                completedLevels,
                xp: (oldCampaign.xp || 0) + earned
            };
            return {
                ...previous,
                totalXp: previous.totalXp + earned,
                highScore: Math.max(previous.highScore, campaign.xp),
                campaigns: {
                    ...previous.campaigns,
                    [mode]: campaign
                },
                activeGame: {
                    mode,
                    ...campaign
                }
            };
        });
    }
    function finishRun(mode) {
        updateStats((previous)=>({
                ...previous,
                activeGame: previous.activeGame?.mode === mode ? null : previous.activeGame
            }));
    }
    return {
        user,
        stats,
        loading,
        login,
        loginWithPassword,
        createAccount,
        resetPassword,
        logout,
        saveRun,
        completeLevel,
        finishRun
    };
}
_s(usePlayer, "dZn87G6OXOP2w9xL0zjOSzLcvrE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-code-game_src_app_0hr1h_s._.js.map