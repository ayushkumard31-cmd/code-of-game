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
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$rewardsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/rewardsData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$practiceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/practiceData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
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
        "StackQuestionVisual.useState": ()=>(prompt?.match(/\d+/g) || []).slice(-3).map(Number)
    }["StackQuestionVisual.useState"]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("READ FROM BOTTOM → TOP");
    function push() {
        if (items.length >= 5) {
            setStatus("OVERFLOW — STACK IS FULL");
            return;
        }
        const value = Math.floor(Math.random() * 90) + 10;
        setItems((curr)=>[
                ...curr,
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
        setItems((curr)=>curr.slice(0, -1));
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
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Which item leaves first?"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "In LIFO, the newest top item is removed first."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: push,
                                type: "button",
                                children: "+ PUSH"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pop,
                                type: "button",
                                disabled: !items.length,
                                children: "− POP"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "question-stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "TOP ↓"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            ...items
                        ].reverse().map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: item
                            }, `${item}-${items.length - index}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 51,
                                columnNumber: 57
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "BOTTOM"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(StackQuestionVisual, "33WWxqPaeLoENUV9tX/M0u0BwCM=");
_c = StackQuestionVisual;
function QueueInteractiveVisualizer() {
    _s1();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        14,
        28,
        42
    ]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("FIFO: Front exits first");
    function enqueue() {
        if (items.length >= 6) {
            setStatus("QUEUE FULL (MAX 6)");
            return;
        }
        const val = Math.floor(Math.random() * 90) + 10;
        setItems((curr)=>[
                ...curr,
                val
            ]);
        setStatus(`ENQUEUE ${val} AT REAR`);
    }
    function dequeue() {
        if (!items.length) {
            setStatus("QUEUE EMPTY (UNDERFLOW)");
            return;
        }
        const val = items[0];
        setItems((curr)=>curr.slice(1));
        setStatus(`DEQUEUE ${val} FROM FRONT`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "queue-lab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        style: {
                            color: "#46d8e7",
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "1.5px"
                        },
                        children: "INTERACTIVE FIFO QUEUE LAB"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        style: {
                            color: "#46d8e7",
                            fontSize: 10
                        },
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "queue-lane",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "queue-tag",
                        children: "FRONT →"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "queue-item",
                            children: it
                        }, `${it}-${idx}`, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)),
                    !items.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#555",
                            fontSize: 11
                        },
                        children: "[ EMPTY QUEUE ]"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 86,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "queue-tag",
                        style: {
                            marginLeft: "auto"
                        },
                        children: "← REAR"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: enqueue,
                        className: "adm-btn adm-btn-primary",
                        type: "button",
                        children: "+ ENQUEUE (REAR)"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: dequeue,
                        className: "adm-btn",
                        type: "button",
                        disabled: !items.length,
                        children: "− DEQUEUE (FRONT)"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s1(QueueInteractiveVisualizer, "8aI2GRCgLSYdx5hcLdS1VXK/FLk=");
_c1 = QueueInteractiveVisualizer;
function LinkedListInteractiveVisualizer() {
    _s2();
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        10,
        25,
        40
    ]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("HEAD → 10 → 25 → 40 → NULL");
    function insertHead() {
        const val = Math.floor(Math.random() * 90) + 10;
        const next = [
            val,
            ...nodes
        ];
        setNodes(next);
        setStatus(`INSERTED ${val} AT HEAD (O(1))`);
    }
    function insertTail() {
        const val = Math.floor(Math.random() * 90) + 10;
        const next = [
            ...nodes,
            val
        ];
        setNodes(next);
        setStatus(`APPENDED ${val} AT TAIL (O(1) with tail ptr)`);
    }
    function deleteHead() {
        if (!nodes.length) {
            setStatus("LIST IS EMPTY");
            return;
        }
        const removed = nodes[0];
        setNodes(nodes.slice(1));
        setStatus(`DELETED HEAD NODE ${removed}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ll-lab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        style: {
                            color: "#b377ff",
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "1.5px"
                        },
                        children: "SINGLY LINKED LIST LAB"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        style: {
                            color: "#b377ff",
                            fontSize: 10
                        },
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ll-chain",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#a9ff43",
                            font: "700 11px var(--font-mono)"
                        },
                        children: "HEAD →"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    nodes.map((val, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ll-node",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: val
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "next*"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ll-arrow",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, `${val}-${idx}`, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#ff7875",
                            font: "700 11px var(--font-mono)"
                        },
                        children: "NULL"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: insertHead,
                        className: "adm-btn",
                        type: "button",
                        children: "+ INSERT HEAD"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: insertTail,
                        className: "adm-btn",
                        type: "button",
                        children: "+ APPEND TAIL"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: deleteHead,
                        className: "adm-btn adm-btn-danger",
                        type: "button",
                        disabled: !nodes.length,
                        children: "− DELETE HEAD"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s2(LinkedListInteractiveVisualizer, "Lf3ZwlgYHE6admgKVZZ/U0Hr/rY=");
_c2 = LinkedListInteractiveVisualizer;
function Home() {
    _s3();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hint, setHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginOpen, setLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingMode, setPendingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa");
    const [pendingLevel, setPendingLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stackItems, setStackItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        12,
        27,
        41
    ]);
    const [stackMessage, setStackMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("TOP → 41");
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [createMode, setCreateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Rewards & Shop feedback
    const [rewardToast, setRewardToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Subjective practice filters & local open states
    const [practiceTopic, setPracticeTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [revealedSolutions, setRevealedSolutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [revealedHints, setRevealedHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [checkedRubrics, setCheckedRubrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [writtenAnswers, setWrittenAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // 50/50 lifeline used in current level
    const [eliminatedChoices, setEliminatedChoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { user, stats, loading, login, loginWithPassword, createAccount, resetPassword, logout, saveRun, completeLevel, finishRun, claimReward, togglePerk, setPracticeStatus, savePracticeNote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const campaign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(mode);
    const current = campaign[level] || campaign[0];
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRank"])(xp);
    const tier = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierConfig"][current?.tier || 0] || __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierConfig"][0];
    const hasResumed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const totalClearedLevels = Object.values(stats.campaigns || {}).reduce((total, run)=>total + (run.completedLevels?.length || 0), 0);
    const hasExtraHeartPerk = stats.equippedPerks?.includes("perk-extra-heart") && stats.claimedRewards?.includes("perk-extra-heart");
    const maxLives = hasExtraHeartPerk ? 4 : 3;
    const has5050Perk = stats.equippedPerks?.includes("perk-50-50") && stats.claimedRewards?.includes("perk-50-50");
    const hasNeonTheme = stats.equippedPerks?.includes("perk-cyber-glow") && stats.claimedRewards?.includes("perk-cyber-glow");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (hasResumed.current) return;
            if (!loading && user) {
                const activeGame = stats.activeGame;
                if (activeGame && activeGame.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(activeGame.mode).length) {
                    hasResumed.current = true;
                    const run = activeGame;
                    const resume = window.setTimeout({
                        "Home.useEffect.resume": ()=>{
                            setMode(run.mode);
                            setLevel(run.currentLevel || 0);
                            setLives(run.lives || maxLives);
                            setXp(run.xp || 0);
                            setChoice(Number.isInteger(run.selectedChoice) ? run.selectedChoice : null);
                            setHint(Boolean(run.hint));
                            setScreen("game");
                        }
                    }["Home.useEffect.resume"], 0);
                    return ({
                        "Home.useEffect": ()=>window.clearTimeout(resume)
                    })["Home.useEffect"];
                } else {
                    hasResumed.current = true;
                }
            }
        }
    }["Home.useEffect"], [
        loading,
        user,
        stats.activeGame,
        maxLives
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (user && screen === "game") {
                saveRun(mode, {
                    currentLevel: level,
                    lives,
                    xp,
                    selectedChoice: choice,
                    hint
                });
            }
        }
    }["Home.useEffect"], [
        choice,
        hint,
        level,
        lives,
        mode,
        saveRun,
        screen,
        user,
        xp
    ]);
    function triggerRewardToast(msg) {
        setRewardToast(msg);
        setTimeout(()=>setRewardToast(""), 3000);
    }
    function enterCampaign(nextMode, targetLevel = null) {
        const queuedTopic = typeof nextMode === "string" && nextMode.startsWith("topic:") ? nextMode.split(":") : null;
        const queuedLevel = queuedTopic ? Number(queuedTopic[2]) : typeof nextMode === "string" && nextMode.startsWith("level:") ? Number(nextMode.split(":")[1]) : null;
        const campaignMode = queuedTopic ? queuedTopic[1] : queuedLevel === null ? nextMode : "dsa";
        const selectedLevel = targetLevel ?? queuedLevel;
        const saved = stats.campaigns?.[campaignMode];
        const canResume = saved && saved.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(campaignMode).length;
        const startingHearts = hasExtraHeartPerk ? 4 : 3;
        const run = {
            currentLevel: selectedLevel ?? (canResume ? saved.currentLevel : 0),
            lives: canResume ? saved.lives || startingHearts : startingHearts,
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
        setEliminatedChoices([]);
        saveRun(campaignMode, run);
    }
    function start(nextMode = "dsa") {
        const mapLevel = screen === "home" ? ({
            dsa: 0,
            code: 1,
            bugs: 2,
            boss: 0
        })[nextMode] : null;
        const campaignMode = mapLevel === null || mapLevel === undefined ? nextMode : nextMode;
        if (!user) {
            setPendingMode(campaignMode);
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
    function use5050Lifeline() {
        if (!current || eliminatedChoices.length > 0) return;
        const wrongIndices = current.choices.map((_, i)=>i).filter((i)=>i !== current.answer);
        const toEliminate = wrongIndices.slice(0, 2);
        setEliminatedChoices(toEliminate);
        setMessage("🔮 ORACLE ELIMINATED 2 WRONG CHOICES");
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
                "auth/operation-not-allowed": "Email/password login is disabled in Firebase Console.",
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
            setAuthError("Password reset failed. Check the email entered.");
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
            setEliminatedChoices([]);
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
    const filteredPractices = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$practiceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subjectivePracticeQuestions"].filter((q)=>practiceTopic === "All" || q.topic === practiceTopic);
    const masteredPracticeCount = Object.values(stats.practiceStatus || {}).filter((s)=>s === "mastered").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `shell ${screen === "home" ? "storefront" : ""} ${hasNeonTheme ? "neon-glow" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            rewardToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "adm-toast",
                children: rewardToast
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 423,
                columnNumber: 23
            }, this),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "profile-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "PROFILE"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: user.displayName || user.email?.split("@")[0] || "Player"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    stats.totalXp,
                                    " XP · ",
                                    totalClearedLevels,
                                    " / 200 LEVELS CLEARED"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            [
                                "dsa",
                                "code",
                                "bugs",
                                "boss"
                            ].map((campaignMode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        campaignMode.toUpperCase(),
                                        ": ",
                                        stats.campaigns?.[campaignMode]?.completedLevels?.length || 0,
                                        " COMPLETE"
                                    ]
                                }, campaignMode, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                style: {
                                    color: "#a9ff43"
                                },
                                children: [
                                    "REWARDS CLAIMED: ",
                                    stats.claimedRewards?.length || 0,
                                    " · PRACTICES MASTERED: ",
                                    masteredPracticeCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 426,
                columnNumber: 9
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
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            " DSA DUNGEON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("quests"),
                                children: "Quests"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("practice"),
                                children: "Practice (0 XP)"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("benefits"),
                                children: "Rewards & Shop"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("top"),
                                children: "Dungeon Map"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigateTo("about"),
                                children: "How it works"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            (user?.uid === "ayush1212" || user?.email?.toLowerCase() === "ayushkumard31@gmail.com") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "admin-nav-btn",
                                onClick: ()=>window.location.href = "/admin",
                                children: "⚙ ADMIN"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "account",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "account-loading",
                            children: "LOADING..."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "avatar",
                                    children: user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "P"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "user-name",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: user.displayName || user.email?.split("@")[0] || "Player"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                stats.totalXp,
                                                " XP · HIGH ",
                                                stats.highScore
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    children: "LOG OUT"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 463,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "login-nav",
                            onClick: ()=>{
                                setPendingMode("dsa");
                                setLoginOpen(true);
                            },
                            children: "SIGN IN"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "top",
                        className: "dungeon-map",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "THE LEARNING PATH & DUNGEON MAP"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Master the dungeon, one structure at a time."
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Click any node to explore interactive visualizer labs or start campaign trials."
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "map-progress",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: totalClearedLevels
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "CHALLENGES",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 493,
                                                        columnNumber: 33
                                                    }, this),
                                                    "CLEARED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 485,
                                columnNumber: 13
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
                                                lineNumber: 503,
                                                columnNumber: 19
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
                                                        lineNumber: 505,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: topic.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: topic.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 504,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 509,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, topic.name, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "quests",
                        className: "hs-quests",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hs-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hs-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "CAMPAIGNS & BOSS RAIDS"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Pick your quest type"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Four challenge modes for mastering DSA in C from novice trials to the Final DSA Boss Test."
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mode-cards",
                                    style: {
                                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
                                    },
                                    children: [
                                        {
                                            mode: "dsa",
                                            icon: "?",
                                            label: "DSA Trial",
                                            sub: "Concept quizzes across all core DSA topics",
                                            color: "#a9ff43"
                                        },
                                        {
                                            mode: "code",
                                            icon: "</>",
                                            label: "Code Forge",
                                            sub: "Complete fragments of real C code",
                                            color: "#46d8e7"
                                        },
                                        {
                                            mode: "bugs",
                                            icon: "!",
                                            label: "Bug Hunt",
                                            sub: "Spot and fix common memory & pointer bugs",
                                            color: "#ff7875"
                                        },
                                        {
                                            mode: "boss",
                                            icon: "👹",
                                            label: "Final DSA Test",
                                            sub: "10-Stage Boss Raid: Time attacks & complexity battles",
                                            color: "#ff5340",
                                            isBoss: true
                                        }
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `mode-card ${m.isBoss ? "boss-mode-card" : ""}`,
                                            style: {
                                                "--mc": m.color
                                            },
                                            onClick: ()=>start(m.mode),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: m.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 536,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: m.label
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: m.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 538,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "START QUEST →"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 539,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, m.mode, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 530,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tier-info",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveTierConfig"])().map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tier-info-row",
                                            style: {
                                                borderLeftColor: t.color
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    style: {
                                                        color: t.color
                                                    },
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 546,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        t.count,
                                                        " questions · +",
                                                        t.xp,
                                                        " XP each"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 547,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 545,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 516,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "practice",
                        className: "hs-practice",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hs-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "zero-xp-badge",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0 XP"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        " · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "TEST YOUR LEARNING (NO XP / NO PRESSURE)"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 558,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hs-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "SUBJECTIVE DSA DEEP DIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Self-Evaluation & Conceptual Mastery"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Write out your algorithmic reasoning, proof of complexity, and architectural trade-offs. The primary goal is testing genuine comprehension."
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "practice-progress-strip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "YOUR MASTERY TRACKER"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    style: {
                                                        display: "block",
                                                        marginTop: 4
                                                    },
                                                    children: [
                                                        masteredPracticeCount,
                                                        " / ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$practiceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subjectivePracticeQuestions"].length,
                                                        " Questions Mastered (",
                                                        Math.round(masteredPracticeCount / __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$practiceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subjectivePracticeQuestions"].length * 100),
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 567,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "adm-btn adm-sm",
                                            onClick: ()=>{
                                                const allKeys = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$practiceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subjectivePracticeQuestions"].map((q)=>q.id);
                                                const allOpen = allKeys.every((k)=>revealedSolutions[k]);
                                                const next = {};
                                                allKeys.forEach((k)=>{
                                                    next[k] = !allOpen;
                                                });
                                                setRevealedSolutions(next);
                                            },
                                            children: "TOGGLE ALL SOLUTIONS"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 573,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 566,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "practice-filter-bar",
                                    children: [
                                        "All",
                                        "Arrays & Memory",
                                        "Linked Lists",
                                        "Stacks & Queues",
                                        "Trees & BST",
                                        "Hash Tables",
                                        "Graphs & Searching",
                                        "Sorting & Complexity",
                                        "System & Architecture"
                                    ].map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `practice-pill ${practiceTopic === top ? "active" : ""}`,
                                            onClick: ()=>setPracticeTopic(top),
                                            children: top
                                        }, top, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 590,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "practice-list",
                                    children: filteredPractices.map((q)=>{
                                        const isRevealed = Boolean(revealedSolutions[q.id]);
                                        const isHintRevealed = Boolean(revealedHints[q.id]);
                                        const currentStatus = stats.practiceStatus?.[q.id] || "unattempted";
                                        const savedNote = writtenAnswers[q.id] ?? (stats.practiceNotes?.[q.id] || "");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "practice-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "practice-card-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "practice-topic-tag",
                                                            children: q.topic
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 611,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `practice-diff diff-${q.difficulty}`,
                                                            children: q.difficulty
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 612,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 610,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: q.title
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 614,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "practice-prompt",
                                                    children: q.prompt
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 615,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "practice-textarea",
                                                    placeholder: "Type your explanation, algorithmic approach, and time/space complexity analysis...",
                                                    value: savedNote,
                                                    onChange: (e)=>{
                                                        const val = e.target.value;
                                                        setWrittenAnswers((prev)=>({
                                                                ...prev,
                                                                [q.id]: val
                                                            }));
                                                        savePracticeNote(q.id, val);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 618,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "practice-actions-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "practice-hint-btn",
                                                            onClick: ()=>setRevealedHints((prev)=>({
                                                                        ...prev,
                                                                        [q.id]: !isHintRevealed
                                                                    })),
                                                            children: [
                                                                "💡 ",
                                                                isHintRevealed ? "HIDE HINT" : "SHOW HINT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 630,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "practice-reveal-btn",
                                                            onClick: ()=>setRevealedSolutions((prev)=>({
                                                                        ...prev,
                                                                        [q.id]: !isRevealed
                                                                    })),
                                                            children: isRevealed ? "HIDE MODEL SOLUTION" : "👁️ CHECK CONCEPTS & REVEAL SOLUTION"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 629,
                                                    columnNumber: 23
                                                }, this),
                                                isHintRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "hint",
                                                    style: {
                                                        marginBottom: 16
                                                    },
                                                    children: [
                                                        "// HINT: ",
                                                        q.hint
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 647,
                                                    columnNumber: 25
                                                }, this),
                                                isRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "practice-solution-box",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: "KEY CONCEPTS CHECKLIST (Did you include these?):"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 655,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "checklist-group",
                                                            children: q.keyConcepts.map((item, idx)=>{
                                                                const checkKey = `${q.id}-rubric-${idx}`;
                                                                const isChecked = Boolean(checkedRubrics[checkKey]);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `checklist-item ${isChecked ? "checked" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: isChecked,
                                                                            onChange: (e)=>{
                                                                                setCheckedRubrics((prev)=>({
                                                                                        ...prev,
                                                                                        [checkKey]: e.target.checked
                                                                                    }));
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                                            lineNumber: 662,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: item
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                                            lineNumber: 669,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, checkKey, true, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 661,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 656,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: "DETAILED ARCHITECTURE & MODEL PROOF:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 675,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            className: "practice-model-code",
                                                            children: q.modelAnswer
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 676,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "self-eval-box",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "HOW DID YOU DO?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 680,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `self-eval-btn ${currentStatus === "mastered" ? "eval-active-mastered" : ""}`,
                                                                    onClick: ()=>{
                                                                        setPracticeStatus(q.id, "mastered");
                                                                        triggerRewardToast(`Marked "${q.title}" as Mastered!`);
                                                                    },
                                                                    children: "🟢 Mastered Concept"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 681,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `self-eval-btn ${currentStatus === "review" ? "eval-active-review" : ""}`,
                                                                    onClick: ()=>{
                                                                        setPracticeStatus(q.id, "review");
                                                                        triggerRewardToast(`Marked "${q.title}" for Practice`);
                                                                    },
                                                                    children: "🟡 Needs Practice"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 691,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `self-eval-btn ${currentStatus === "revisit" ? "eval-active-revisit" : ""}`,
                                                                    onClick: ()=>{
                                                                        setPracticeStatus(q.id, "revisit");
                                                                        triggerRewardToast(`Marked "${q.title}" to Revisit Later`);
                                                                    },
                                                                    children: "⏳ Revisit Later"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 701,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 679,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 654,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, q.id, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 609,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 556,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 555,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "benefits",
                        className: "hs-benefits",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hs-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hs-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "WORKABLE REWARDS & SHOP"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 725,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Claim Badges, Equip In-Game Perks"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Earn XP and clear levels to unlock badges, life containers, and tactical lifelines."
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 727,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 724,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rewards-grid",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$rewardsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewardBadges"].map((badge)=>{
                                        const isClaimed = stats.claimedRewards?.includes(badge.id);
                                        const isPerk = badge.type === "perk" || badge.type === "theme";
                                        const isEquipped = isPerk && stats.equippedPerks?.includes(badge.id);
                                        const meetsReq = badge.reqType === "xp" ? (stats.totalXp || 0) >= badge.reqVal : totalClearedLevels >= badge.reqVal;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `reward-card ${meetsReq ? "unlocked" : ""} ${isClaimed ? "claimed" : ""}`,
                                            style: {
                                                "--rc": badge.color
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reward-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "reward-icon",
                                                            children: badge.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 749,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "reward-type-chip",
                                                            children: badge.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 750,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 748,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: badge.name
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 752,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: badge.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 753,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reward-perk",
                                                    children: [
                                                        "⚡ ",
                                                        badge.perk
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 754,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reward-req",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "REQUIREMENT:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 756,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: badge.reqType === "xp" ? `${badge.reqVal.toLocaleString()} XP (${stats.totalXp || 0}/${badge.reqVal})` : `${badge.reqVal} Levels Cleared (${totalClearedLevels}/${badge.reqVal})`
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 757,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 755,
                                                    columnNumber: 23
                                                }, this),
                                                !isClaimed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "reward-action-btn",
                                                    disabled: !meetsReq,
                                                    onClick: ()=>{
                                                        if (!user) {
                                                            setLoginOpen(true);
                                                            return;
                                                        }
                                                        claimReward(badge.id);
                                                        triggerRewardToast(`🎉 Claimed reward: ${badge.name}!`);
                                                    },
                                                    children: meetsReq ? "CLAIM REWARD" : "LOCKED"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 765,
                                                    columnNumber: 25
                                                }, this) : isPerk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `reward-action-btn ${isEquipped ? "btn-perk-active" : "btn-claimed"}`,
                                                    onClick: ()=>{
                                                        togglePerk(badge.id);
                                                        triggerRewardToast(isEquipped ? `Unequipped ${badge.name}` : `⚡ Equipped ${badge.name}!`);
                                                    },
                                                    children: isEquipped ? "EQUIPPED ⚡ (CLICK TO UNEQUIP)" : "EQUIP PERK"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 778,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "reward-action-btn btn-claimed",
                                                    disabled: true,
                                                    children: "CLAIMED ✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 789,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, badge.id, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 743,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rank-ladder",
                                    children: [
                                        {
                                            name: "ROOKIE",
                                            xp: 0,
                                            color: "#7d827c"
                                        },
                                        {
                                            name: "CODE EXPLORER",
                                            xp: 500,
                                            color: "#58d68d"
                                        },
                                        {
                                            name: "ALGORITHM KNIGHT",
                                            xp: 1200,
                                            color: "#4ec9e8"
                                        },
                                        {
                                            name: "BUG SLAYER",
                                            xp: 2500,
                                            color: "#b377ff"
                                        },
                                        {
                                            name: "CODE MASTER",
                                            xp: 4500,
                                            color: "#ffb627"
                                        },
                                        {
                                            name: "LEGEND",
                                            xp: 5500,
                                            color: "#ff5340"
                                        }
                                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rank-row${(0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRank"])(stats.totalXp || 0).name === r.name ? " rank-active" : ""}`,
                                            style: {
                                                "--rc": r.color
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rank-num",
                                                    children: String(i + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 813,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: r.name
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: r.xp === 0 ? "Starting rank" : `${r.xp.toLocaleString()}+ XP required`
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 815,
                                                    columnNumber: 21
                                                }, this),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRank"])(stats.totalXp || 0).name === r.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                    children: "YOUR RANK"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 816,
                                                    columnNumber: 69
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 808,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 723,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 722,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "hs-about",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hs-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hs-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "HOW IT WORKS"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 827,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Master Data Structures in 3 Dimensions"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "steps-grid",
                                    children: [
                                        {
                                            n: "01",
                                            icon: "⌘",
                                            title: "Visualizer & Practice",
                                            body: "Play with live Stack, Queue and Linked List machines. Complete 0 XP subjective concept tests."
                                        },
                                        {
                                            n: "02",
                                            icon: "◎",
                                            title: "Campaign Quests",
                                            body: "Solve concept trials, complete real C code, and fix pointer bugs without running out of lives."
                                        },
                                        {
                                            n: "03",
                                            icon: "★",
                                            title: "Boss Raids & Perks",
                                            body: "Fight the Algorithmic Overlord in the Final DSA Test, earn XP, and unlock workable Heart Containers and 50/50 sight."
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "step-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "step-num",
                                                    children: s.n
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 837,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: s.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 838,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 839,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: s.body
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 840,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, s.n, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 836,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 824,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 482,
                columnNumber: 9
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
                    className: "topic-modal stack-topic-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "topic-close",
                            onClick: ()=>setSelectedTopic(null),
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 861,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "topic-symbol",
                            children: selectedTopic.icon
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 862,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: [
                                "TOPIC LAB ",
                                String(selectedTopic.index + 1).padStart(2, "0")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 863,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "topic-title",
                            children: selectedTopic.name
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 864,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                selectedTopic.detail,
                                ". Test the interactive machine or launch campaign challenges."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 865,
                            columnNumber: 13
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
                                            lineNumber: 871,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Last in, first out"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Push adds to the top. Pop removes the top item."
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 873,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stack-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: pushStack,
                                                    children: "+ PUSH"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 875,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: popStack,
                                                    disabled: !stackItems.length,
                                                    children: "− POP"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 876,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 874,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: stackMessage
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 878,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 870,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stack-machine",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stack-top",
                                            children: "TOP ↓"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 881,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stack-values",
                                            children: [
                                                ...stackItems
                                            ].reverse().map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: item
                                                }, `${item}-${stackItems.length - index}`, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 884,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 882,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "STACK"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 887,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 880,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 869,
                            columnNumber: 15
                        }, this),
                        selectedTopic.name === "Queues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueueInteractiveVisualizer, {}, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 892,
                            columnNumber: 49
                        }, this),
                        selectedTopic.name === "Linked Lists" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedListInteractiveVisualizer, {}, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 893,
                            columnNumber: 55
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
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "DSA Trial"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 898,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Test your concepts"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 898,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 896,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("code"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "</>"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 902,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Code Forge"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 903,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Complete the C code"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 903,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 901,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("bugs"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "!"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Bug Hunt"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 908,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Find and fix errors"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 908,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 908,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 909,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 906,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>launchTopic("boss"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "👹"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 912,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Final DSA Boss"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 913,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Engage boss battle"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 913,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 914,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 895,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 860,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 851,
                columnNumber: 9
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
                                lineNumber: 925,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: current.type
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 926,
                                columnNumber: 13
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
                                lineNumber: 927,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "counter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: String(current.tierQuestion || level + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    " / ",
                                    String(current.tierTotal || campaign.length).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 930,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    style: {
                                        width: `${(level + 1) / campaign.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 933,
                                columnNumber: 13
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
                                                lineNumber: 937,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 937,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "RANK ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: rank.name
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 938,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 938,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 936,
                                columnNumber: 13
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
                                        lineNumber: 941,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: rank.name === "LEGEND" ? "MAX RANK" : `${rank.next - xp} XP TO NEXT RANK`
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 942,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 940,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "life",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hearts",
                                        children: [
                                            "♥".repeat(lives),
                                            "♡".repeat(Math.max(0, maxLives - lives))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 945,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    lives,
                                                    " LIVES LEFT ",
                                                    hasExtraHeartPerk ? "(HEART CONTAINER ACTIVE)" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 950,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "WRONG ANSWERS COST ONE"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 951,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 949,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 944,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setScreen("home"),
                                children: "× EXIT QUEST"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 954,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 924,
                        columnNumber: 11
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
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "REWARD +",
                                            current.xpReward,
                                            " XP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 960,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 958,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: current.title
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 962,
                                columnNumber: 13
                            }, this),
                            current.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 965,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 965,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 965,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "challenge.c"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 965,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 965,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        children: current.code
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 966,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 964,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "instruction",
                                children: current.prompt
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 969,
                                columnNumber: 13
                            }, this),
                            current.title === "Stack behavior" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackQuestionVisual, {
                                prompt: current.prompt
                            }, `${mode}-${level}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 972,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "options",
                                children: current.choices.map((item, i)=>{
                                    const isEliminated = eliminatedChoices.includes(i);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${choice === i ? "active" : ""} ${isEliminated ? "option-hidden" : ""}`,
                                        disabled: isEliminated,
                                        onClick: ()=>setChoice(i),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: String.fromCharCode(65 + i)
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 985,
                                                columnNumber: 21
                                            }, this),
                                            item,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 987,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 979,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 975,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "submit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10,
                                            alignItems: "center"
                                        },
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
                                                lineNumber: 995,
                                                columnNumber: 17
                                            }, this),
                                            has5050Perk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "lifeline-5050",
                                                disabled: eliminatedChoices.length > 0,
                                                onClick: use5050Lifeline,
                                                children: "🔮 50/50 LIFELINE"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 999,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: message.includes("CLEAR") ? "success" : "error",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 1009,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "primary",
                                        disabled: choice === null || message.includes("CLEAR"),
                                        onClick: submit,
                                        children: "CONFIRM →"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 1010,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint",
                                children: [
                                    "// HINT: ",
                                    current.hint
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 1018,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 957,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 923,
                columnNumber: 9
            }, this),
            (screen === "win" || screen === "lost") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `ending ${screen === "lost" ? "lost" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: screen === "win" ? "CAMPAIGN_COMPLETE" : "RUN_ENDED"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1026,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: screen === "win" ? "QUEST\nCLEARED." : "OUT OF\nLIVES."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1027,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: screen === "win" ? `You earned ${xp} XP and finished as ${rank.name}.` : `You reached ${rank.name} with ${xp} XP. Refill your hearts and try again.`
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1028,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary",
                        onClick: ()=>start(mode),
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1033,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ghost",
                        onClick: ()=>setScreen("home"),
                        children: "LOBBY"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1034,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 1025,
                columnNumber: 9
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
                            lineNumber: 1042,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-logo",
                            children: "DS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1043,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "PLAYER ACCESS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1044,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "login-title",
                            children: createMode ? "Create your account" : "Sign in to play"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1045,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-copy",
                            children: "Save your XP, claimed rewards, perks, and learning progress."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1046,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "google-login",
                            onClick: handleLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 1048,
                                    columnNumber: 15
                                }, this),
                                " CONTINUE WITH GOOGLE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1047,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-divider",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OR USE EMAIL"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 1050,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1050,
                            columnNumber: 13
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
                                            lineNumber: 1054,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 1052,
                                    columnNumber: 15
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
                                            lineNumber: 1065,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 1063,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    children: createMode ? "CREATE ACCOUNT" : "SIGN IN WITH PASSWORD"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 1075,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1051,
                            columnNumber: 13
                        }, this),
                        !createMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "forgot-password",
                            onClick: handlePasswordReset,
                            children: "FORGOT PASSWORD?"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1080,
                            columnNumber: 15
                        }, this),
                        authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: authError.includes("sent") ? "auth-success" : "auth-error",
                            children: authError
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1085,
                            columnNumber: 15
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
                            lineNumber: 1089,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "Login is required before entering a campaign or claiming rewards."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 1095,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 1041,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 1040,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 DSA DUNGEON"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LEARN C · MASTER DSA · CLAIM REWARDS · FIX BUGS"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 1102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 1100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_s3(Home, "nmK+kYtmL4tdhVZ/d0qWgc0R3lo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c3 = Home;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StackQuestionVisual");
__turbopack_context__.k.register(_c1, "QueueInteractiveVisualizer");
__turbopack_context__.k.register(_c2, "LinkedListInteractiveVisualizer");
__turbopack_context__.k.register(_c3, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/app/practiceData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subjectivePracticeQuestions",
    ()=>subjectivePracticeQuestions
]);
const subjectivePracticeQuestions = [
    {
        id: "prac-1",
        topic: "Arrays & Memory",
        title: "Dynamic Array Resizing & Amortized Complexity",
        difficulty: "Medium",
        prompt: "Explain how dynamic arrays (e.g. std::vector in C++ or dynamic realloc in C) achieve O(1) amortized insertion time even though copying an array takes O(n). What would happen if we increased the array capacity by a fixed constant (e.g. +10) instead of doubling (*2)?",
        hint: "Think about how often expensive resizes occur when doubling vs adding a fixed constant.",
        keyConcepts: [
            "Doubling capacity geometrically decreases the frequency of resizes.",
            "Inserting N elements triggers copies: 1 + 2 + 4 + 8 + ... + N ≈ 2N total operations.",
            "Total work 2N / N elements = O(1) amortized time per push.",
            "Adding a fixed constant (+K) leads to N/K resizes, totaling O(N²) overall work = O(N) per insertion."
        ],
        modelAnswer: `1. Geometric Growth Strategy:
When the dynamic array is full, its capacity is multiplied by a factor (usually 2x or 1.5x). A new block of memory is allocated and existing elements are copied.

2. Amortized O(1) Proof:
For N insertions, reallocations occur at sizes 1, 2, 4, 8, ..., N.
The total number of element copies is 1 + 2 + 4 + 8 + ... + N/2 = N - 1.
Adding the N direct insertions gives (2N - 1) total operations.
Divided by N elements, the average cost per insertion is O(1).

3. Pitfall of Constant Increment (+K):
If capacity grows by +K each time, inserting N elements requires N/K resizes.
The copy cost becomes K + 2K + 3K + ... + (N/K)*K ≈ K * (N/K)² / 2 = O(N² / K).
The amortized time per insertion degrades from O(1) to O(N).`
    },
    {
        id: "prac-2",
        topic: "Linked Lists",
        title: "Floyd's Cycle Detection Algorithm (Tortoise & Hare)",
        difficulty: "Medium",
        prompt: "How does Floyd's Tortoise and Hare algorithm detect a cycle in a singly linked list in O(N) time and O(1) space? Why is the fast pointer guaranteed not to skip over the slow pointer inside the cycle?",
        hint: "Consider the relative speed between the two pointers once both have entered the cycle.",
        keyConcepts: [
            "Slow pointer advances 1 step (s = s->next); Fast pointer advances 2 steps (f = f->next->next).",
            "Relative speed: with each iteration, the distance between Fast and Slow decreases by exactly 1 node.",
            "Since distance decreases by 1 step every turn, the distance must become 0 without jumping over.",
            "Runs in O(N) time and O(1) auxiliary space without modifying node structure or using hash tables."
        ],
        modelAnswer: `1. Algorithm Mechanics:
Initialize two pointers, slow and fast, at head.
In each step:
  slow = slow->next;
  fast = fast->next ? fast->next->next : NULL;
If fast reaches NULL, there is no cycle. If slow == fast, a cycle exists.

2. Why Fast cannot skip Slow:
Once both pointers are inside a cycle of length C:
Let the distance from fast to slow (moving forward along the cycle) be 'd' nodes.
In the next step, slow moves +1 and fast moves +2.
The new distance becomes (d - 2 + 1) = d - 1.
Because the distance reduces by exactly 1 node per iteration, 'd' counts down: d, d-1, d-2, ..., 1, 0.
It is impossible for fast to leap past slow without first landing on the exact same node (d = 0).

3. Complexity:
Time: O(N) where N is total node count.
Space: O(1) as only two pointer variables are used.`
    },
    {
        id: "prac-3",
        topic: "Stacks & Queues",
        title: "Implementing Undo/Redo & Monotonic Stack Use Cases",
        difficulty: "Hard",
        prompt: "1) How do you design an Undo/Redo mechanism using two stacks?\n2) What is a Monotonic Stack and in what scenarios (e.g. Next Greater Element, Daily Temperatures) does it reduce time complexity from O(n²) to O(n)?",
        hint: "Think about what happens to the Redo stack when a brand new action is performed.",
        keyConcepts: [
            "Undo Stack stores performed actions; Redo Stack stores reverted actions.",
            "Performing a new action pushes to Undo and clears the Redo stack.",
            "Monotonic Stack maintains elements in strictly increasing or decreasing order.",
            "Each element is pushed and popped at most once, guaranteeing O(n) total time."
        ],
        modelAnswer: `1. Two-Stack Undo/Redo Architecture:
- Execute(action): Apply action, push action state to UndoStack, clear RedoStack.
- Undo(): Pop top from UndoStack, revert state, push state to RedoStack.
- Redo(): Pop top from RedoStack, re-apply state, push state to UndoStack.
Clearing the Redo stack upon new execution is necessary because performing a new branch invalidates forward history.

2. Monotonic Stack Mechanics:
A monotonic stack keeps elements monotonically increasing or decreasing.
For 'Next Greater Element':
- Iterate through the array. While current element > stack.top(), pop stack.top() — the current element is its next greater element!
- Push current element onto stack.
Even though there is a nested while loop, each index enters and leaves the stack at most once, yielding linear O(N) time complexity instead of brute-force O(N²).`
    },
    {
        id: "prac-4",
        topic: "Trees & BST",
        title: "BST Worst-Case Degeneration & Self-Balancing Trees",
        difficulty: "Medium",
        prompt: "When does a standard Binary Search Tree degenerate into O(n) search time? How do self-balancing trees (AVL / Red-Black) maintain O(log n) height and search complexity?",
        hint: "Consider inserting already sorted numbers [1, 2, 3, 4, 5] into an unbalancing BST.",
        keyConcepts: [
            "Inserting sorted or reverse-sorted data creates a skewed tree resembling a linked list of height N.",
            "Search time in a skewed BST degrades from O(log n) to O(n).",
            "AVL trees maintain strict balance factor (|left_height - right_height| <= 1).",
            "Tree rotations (Left, Right, Left-Right, Right-Left) restore height in O(1) time per insertion/deletion."
        ],
        modelAnswer: `1. Degeneration to Linked List:
If keys are inserted in strictly ascending or descending order (e.g., 10, 20, 30, 40, 50), every new node is inserted as a right child.
The tree height becomes H = N.
Search, insertion, and deletion degrade from ideal O(log N) to worst-case O(N).

2. Self-Balancing Mechanism (AVL & Red-Black Trees):
- AVL Trees track the balance factor: BF = height(left) - height(right).
- If |BF| > 1 after an insert or delete, tree rotations (Single Left/Right or Double Left-Right/Right-Left) are performed.
- Rotations rearrange parent-child pointers in O(1) time without violating BST order (Left < Root < Right).
- By ensuring H <= 1.44 * log2(N), all lookup, insertion, and deletion operations remain guaranteed O(log N).`
    },
    {
        id: "prac-5",
        topic: "Hash Tables",
        title: "Hash Collisions: Chaining vs Open Addressing & Load Factors",
        difficulty: "Medium",
        prompt: "Compare Separate Chaining vs Open Addressing (Linear Probing) for hash table collision resolution. What is the 'load factor' (alpha = n/m), and why is rehashing triggered when alpha exceeds 0.7 - 0.75?",
        hint: "Think about cache locality and primary clustering in linear probing.",
        keyConcepts: [
            "Separate Chaining uses linked lists/buckets at each index; degrades gracefully under high load.",
            "Open Addressing finds alternative slots in the array directly (better cache locality, no pointer overhead).",
            "Linear Probing suffers from Primary Clustering where contiguous blocks of occupied buckets grow.",
            "Rehashing (allocating 2x table and re-inserting) keeps search time O(1) on average."
        ],
        modelAnswer: `1. Separate Chaining:
- Each hash table bucket contains a pointer to a linked list (or BST) of entries with matching hash codes.
- Pros: Simple deletion, handles alpha > 1 without failing.
- Cons: Extra pointer memory overhead, worse CPU cache locality.

2. Open Addressing (e.g. Linear Probing):
- All items live directly in the main array. On collision at index i, probe i+1, i+2, ...
- Pros: Excellent cache locality and zero pointer overhead.
- Cons: Suffers from Primary Clustering (runs of filled slots merge, causing long probe sequences). Deletions require tombstone markers.

3. Load Factor (alpha = n / m):
- Ratio of stored elements (n) to total bucket capacity (m).
- When alpha > 0.75 in open addressing, collisions spike exponentially and probe length increases, degrading lookups towards O(n).
- Rehashing allocates a new table of size ~2m and re-hashes all keys to restore O(1) average performance.`
    },
    {
        id: "prac-6",
        topic: "Graphs & Searching",
        title: "BFS vs DFS: Data Structure Choice & Shortest Path Properties",
        difficulty: "Hard",
        prompt: "Why does Breadth-First Search (BFS) guarantee the shortest path in unweighted graphs while Depth-First Search (DFS) does not? Why does BFS require a Queue while DFS uses a Stack/Recursion?",
        hint: "Think about the order of exploration: level-by-level concentric circles vs branch-by-branch plunge.",
        keyConcepts: [
            "BFS visits nodes in order of increasing distance (0, 1, 2, ... hops) from the source.",
            "Queue enforces FIFO order, ensuring all nodes at depth k are processed before depth k+1.",
            "DFS plunges as deep as possible along a single branch before backtracking, easily finding long paths first.",
            "Both algorithms run in O(V + E) time with adjacency lists."
        ],
        modelAnswer: `1. Shortest Path Property in Unweighted Graphs:
- BFS explores nodes in concentric layers: first all nodes at distance 1, then all nodes at distance 2, and so on.
- The first time BFS encounters target vertex T, it is guaranteed to be reached via the minimum possible number of edges.
- DFS explores deeply along one path until reaching a dead end. It may reach T after taking 20 edges even if a 1-edge direct shortcut existed.

2. Data Structure Role:
- BFS (FIFO Queue): Adding neighbors to the back of the queue ensures layer 'k' is completely exhausted before layer 'k+1' starts.
- DFS (LIFO Stack / Call Stack): Pushing neighbors to the stack causes the most recently discovered vertex to be investigated next, producing the plunge-and-backtrack behavior.

3. Complexity:
Time: O(V + E) using adjacency list representation.
Space: O(V) for visited set and queue/stack state.`
    },
    {
        id: "prac-7",
        topic: "Sorting & Complexity",
        title: "QuickSort vs MergeSort Trade-offs & Worst Case Pitfalls",
        difficulty: "Medium",
        prompt: "Why is MergeSort guaranteed O(n log n) while standard QuickSort can degrade to O(n²)? Why is QuickSort often preferred in practice for internal sorting despite its worst-case risk?",
        hint: "Consider in-place partitioning, cache locality, and auxiliary memory allocation.",
        keyConcepts: [
            "MergeSort always divides array into equal halves (T(n) = 2T(n/2) + O(n) = O(n log n)).",
            "MergeSort requires O(n) auxiliary memory for merging buffers.",
            "QuickSort with worst-case pivot (e.g. smallest element each time) produces subproblems of size (n-1) and 0 -> O(n²).",
            "Randomized pivot / Median-of-three prevents O(n²). QuickSort has superior cache locality and O(1) auxiliary space."
        ],
        modelAnswer: `1. Why QuickSort can degrade to O(n²):
If the chosen pivot is consistently the maximum or minimum element (e.g., picking the last element in an already sorted array), partition sizes are 0 and n-1.
Recurrence becomes T(n) = T(n-1) + O(n) = O(n²).
MergeSort always splits exactly in half: T(n) = 2T(n/2) + O(n) = O(n log n) in all cases (best, average, worst).

2. Why QuickSort is preferred in practice:
- In-place sorting: QuickSort requires O(log n) stack space and 0 extra buffer memory, whereas MergeSort requires O(n) temporary buffer allocation.
- Cache Locality: QuickSort partitions sequentially in contiguous memory blocks, resulting in fewer CPU cache misses.
- Mitigations: Using Randomized Pivoting, Median-of-Three, or IntroSort (switching to HeapSort if recursion depth exceeds 2*log n) eliminates the O(n²) risk completely.`
    },
    {
        id: "prac-8",
        topic: "System & Architecture",
        title: "Designing an O(1) LRU (Least Recently Used) Cache",
        difficulty: "Hard",
        prompt: "How do you design a Least Recently Used (LRU) Cache where both get(key) and put(key, value) operations execute in O(1) time complexity? Explain why neither a Hash Map alone nor a Doubly Linked List alone is sufficient.",
        hint: "One data structure provides O(1) key lookup, while the other allows O(1) node detachment and insertion.",
        keyConcepts: [
            "Hash Map alone cannot maintain order of recency in O(1) during arbitrary middle deletions.",
            "Doubly Linked List alone requires O(n) linear search to find a key by value.",
            "Combining Hash Map (Key -> Node pointer) + Doubly Linked List achieves O(1) get and put.",
            "Recent access moves node to head; eviction removes node from tail in O(1)."
        ],
        modelAnswer: `1. Why single structures fail:
- Array / Vector: O(1) index access, but removing an item and shifting elements takes O(N).
- Doubly Linked List alone: O(1) insertion/deletion once the pointer is known, but finding the node requires O(N) scan.
- Hash Map alone: O(1) key lookup, but has no inherent ordering to track which key was accessed least recently.

2. The Combined O(1) Architecture:
- Doubly Linked List (DLL): Head represents Most Recently Used (MRU); Tail represents Least Recently Used (LRU).
- Hash Map: Maps key -> Doubly Linked List Node*.

3. Operations:
- get(key):
  Look up node in Hash Map (O(1)). If missing, return -1.
  Detach node from current DLL position and prepend to Head (O(1)). Return node->value.
- put(key, value):
  If key exists, update value and move node to Head.
  If key is new:
    If capacity is full, remove Tail node from DLL and erase its key from Hash Map (O(1)).
    Create new node, insert at Head of DLL, and add to Hash Map (O(1)).`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/app/questionBank.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCampaign",
    ()=>buildCampaign,
    "getActiveTierConfig",
    ()=>getActiveTierConfig,
    "getCustomQuestions",
    ()=>getCustomQuestions,
    "getCustomTiers",
    ()=>getCustomTiers,
    "getRank",
    ()=>getRank,
    "saveCustomQuestions",
    ()=>saveCustomQuestions,
    "saveCustomTiers",
    ()=>saveCustomTiers,
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
function getCustomTiers() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const t = localStorage.getItem("bytequest-tiers");
        return t ? JSON.parse(t) : null;
    } catch  {
        return null;
    }
}
function saveCustomTiers(tiers) {
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem("bytequest-tiers", JSON.stringify(tiers));
}
function getActiveTierConfig() {
    return getCustomTiers() || tierConfig;
}
function getCustomQuestions(mode) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return JSON.parse(localStorage.getItem(`bytequest-q-${mode}`) || "[]");
    } catch  {
        return [];
    }
}
function saveCustomQuestions(mode, questions) {
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem(`bytequest-q-${mode}`, JSON.stringify(questions));
}
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
                "O(n\u00b2)"
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
            "To insert at the head of a singly linked list, what must the new node point to?",
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
            "Which event usually hurts hash-table lookup performance?",
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
                "O(n\u00b2)",
                "O(1)",
                "O(log n)"
            ],
            0,
            "It divides, then performs linear merging."
        ],
        [
            "Recursion",
            "What prevents a recursive function from calling itself forever?",
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
            'char word[] = "code";\nint n = _____;',
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
            "int *items = _____;",
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
            "int temp = a;\na = b;\n_____",
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
            "int square(int n) {\n  _____\n}",
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
            "struct Node *node = malloc(sizeof *node);\n_____",
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
            'struct Node *head = NULL;\nprintf("%d", head->data);',
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
            'if (score = 100) puts("max");',
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
            'int *p = malloc(sizeof(int));\nfree(p);\nprintf("%d", *p);',
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
const bossQuestion = (i, tier)=>{
    const set = [
        [
            "Boss 1: Array Forest 🌲",
            "You face 10,000 unsorted integers. Which strategy guarantees finding the maximum element in minimum worst-case comparisons?",
            [
                "Linear Scan O(n)",
                "Binary Search O(log n)",
                "BFS O(V+E)",
                "DFS O(V+E)"
            ],
            0,
            "Unsorted data requires inspecting every single element at least once."
        ],
        [
            "Boss 2: Search Arena ⚔️",
            "Array is sorted: [2, 4, 7, 9, 15, 21, 30, 42, 60]. You need to find target 21 in under 4 steps. Which algorithm is your weapon?",
            [
                "Binary Search O(log n)",
                "Linear Search O(n)",
                "Bubble Sort O(n²)",
                "Hash Collision"
            ],
            0,
            "Binary search halves the search space at each comparison."
        ],
        [
            "Boss 3: Stack Void 🥞",
            "To evaluate Reverse Polish Notation '4 5 + 7 * 2 -', which data structure evaluates operations without backtracking?",
            [
                "LIFO Stack",
                "FIFO Queue",
                "Min-Heap",
                "Binary Search Tree"
            ],
            0,
            "Push operands; pop the two top items when an operator is encountered."
        ],
        [
            "Boss 4: Queue Gauntlet 🚶",
            "Enemies arrive in a line. The system must process each enemy strictly in arrival order while allowing emergency high-priority interrupts. What structure works best?",
            [
                "Priority Queue",
                "Single Array",
                "Standard Stack",
                "Singly Linked List"
            ],
            0,
            "Priority queues order items by importance while preserving FIFO for equal priorities."
        ],
        [
            "Boss 5: Tree Citadel ⌘",
            "In a Binary Search Tree, given nodes with keys 20 and 40 with root 50, where is the Lowest Common Ancestor located?",
            [
                "In the left subtree of root",
                "At the root itself",
                "In the right subtree",
                "At node 40 directly"
            ],
            0,
            "Since both keys (20 and 40) are strictly less than root 50, their LCA must reside in root's left subtree."
        ],
        [
            "Boss 6: Graph Labyrinth 🗺️",
            "The dungeon map is an unweighted cyclic graph with 50 rooms. Which traversal guarantees the shortest path from Entrance to Boss Chamber?",
            [
                "Breadth-First Search (BFS)",
                "Depth-First Search (DFS)",
                "Inorder Traversal",
                "Insertion Sort"
            ],
            0,
            "BFS explores layer-by-layer, finding the minimum hops in unweighted graphs."
        ],
        [
            "Boss 7: Priority Colosseum 🏆",
            "From a live stream of 1,000,000 player scores, find the top 10 scores with minimum memory overhead. What structure is optimal?",
            [
                "Min-Heap of size 10",
                "Max-Heap of size 1,000,000",
                "Sorting entire array every insert",
                "Linked List scan"
            ],
            0,
            "A Min-Heap of size K retains only the K largest items seen so far in O(log K) per score."
        ],
        [
            "Boss 8: Hash Titan 💥",
            "A hash table has 100 buckets and 2,000 elements (load factor = 20). Lookups have degraded to O(n). What is the definitive fix?",
            [
                "Rehash into larger table (e.g. 4,000 buckets)",
                "Switch to recursive binary search",
                "Reduce memory allocation",
                "Use a single stack"
            ],
            0,
            "Rehashing lowers the load factor below 0.75, restoring O(1) average lookup."
        ],
        [
            "Boss 9: Dynamic Sanctum ⚡",
            "A problem has overlapping subproblems and optimal substructure (e.g. Longest Common Subsequence). Which paradigm avoids exponential recomputation?",
            [
                "Dynamic Programming (Memoization/Tabulation)",
                "Brute Force DFS",
                "Greedy without check",
                "Bubble Sort"
            ],
            0,
            "DP caches solutions to subproblems to achieve polynomial time."
        ],
        [
            "Boss 10: Final Overlord 👹",
            "You must implement an LRU Cache supporting both get(k) and put(k,v) in guaranteed O(1) time. Which combination defeats the Overlord?",
            [
                "Hash Map + Doubly Linked List",
                "Single Array + Binary Search",
                "Single Queue + Stack",
                "AVL Tree + Min-Heap"
            ],
            0,
            "Hash Map provides O(1) key indexing; Doubly Linked List gives O(1) node relocation and eviction."
        ]
    ][i % 10];
    return question("FINAL DSA TEST", set[0], set[1], set[2], set[3], set[4], null, i + tier * 3);
};
const builders = {
    dsa: dsaQuestion,
    code: codeQuestion,
    bugs: bugQuestion,
    boss: bossQuestion
};
function buildCampaign(mode) {
    const activeTiers = getActiveTierConfig();
    let globalIndex = 0;
    const builtIn = activeTiers.flatMap((tier, tierIndex)=>Array.from({
            length: tier.count
        }, (_, localIndex)=>({
                ...builders[mode](globalIndex++, tierIndex),
                tier: tierIndex,
                tierQuestion: localIndex + 1,
                tierTotal: tier.count,
                xpReward: tier.xp
            })));
    const custom = getCustomQuestions(mode);
    const customMapped = custom.map((q, i)=>({
            type: q.type || "DSA TRIAL",
            title: q.title || "Custom Question",
            prompt: q.prompt || "",
            choices: q.choices || [
                "",
                "",
                "",
                ""
            ],
            answer: q.answer ?? 0,
            hint: q.hint || "",
            code: q.code || null,
            tier: 0,
            tierQuestion: builtIn.length + i + 1,
            tierTotal: builtIn.length + custom.length,
            xpReward: q.xpReward || 50,
            isCustom: true,
            customId: q.id
        }));
    return [
        ...builtIn,
        ...customMapped
    ];
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
"[project]/my-code-game/src/app/rewardsData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rewardBadges",
    ()=>rewardBadges
]);
const rewardBadges = [
    {
        id: "badge-first-blood",
        name: "Dungeon Novice",
        type: "badge",
        category: "Milestone",
        icon: "⚔️",
        color: "#58d68d",
        reqType: "levels",
        reqVal: 1,
        desc: "Clear your very first challenge in any campaign mode.",
        perk: "Unlocks Rookie Hall entry badge"
    },
    {
        id: "badge-stack-master",
        name: "LIFO Operator",
        type: "badge",
        category: "Mastery",
        icon: "▤",
        color: "#a9ff43",
        reqType: "levels",
        reqVal: 5,
        desc: "Demonstrate solid grasp of Stack Push/Pop mechanics.",
        perk: "Stack Visualizer Turbo Mode"
    },
    {
        id: "perk-extra-heart",
        name: "Heart Container",
        type: "perk",
        category: "Power-up",
        icon: "💖",
        color: "#ff5340",
        reqType: "xp",
        reqVal: 500,
        desc: "Equip this perk to grant +1 Bonus Life (4 Hearts Total) on starting quests!",
        perk: "+1 Maximum Life in all campaigns"
    },
    {
        id: "perk-50-50",
        name: "Oracle's Sight (50/50)",
        type: "perk",
        category: "Power-up",
        icon: "🔮",
        color: "#4ec9e8",
        reqType: "xp",
        reqVal: 1200,
        desc: "Reveals direct hints and narrows down choices in difficult boss questions.",
        perk: "Extended hints on expert tiers"
    },
    {
        id: "badge-tree-sage",
        name: "Tree Arcanist",
        type: "badge",
        category: "Mastery",
        icon: "⌘",
        color: "#b377ff",
        reqType: "levels",
        reqVal: 20,
        desc: "Master Tree traversals (Inorder, Preorder, Postorder, BST).",
        perk: "Arcane Tree crest in player profile"
    },
    {
        id: "perk-cyber-glow",
        name: "Neon Matrix Theme",
        type: "theme",
        category: "Cosmetic",
        icon: "✨",
        color: "#00f0ff",
        reqType: "xp",
        reqVal: 2500,
        desc: "Unlock cyberpunk ambient lighting and high-contrast styling across the app.",
        perk: "Neon UI glow modifier"
    },
    {
        id: "badge-boss-slayer",
        name: "Boss Slayer",
        type: "badge",
        category: "Epic",
        icon: "👹",
        color: "#ff7875",
        reqType: "xp",
        reqVal: 4500,
        desc: "Defeat high-tier algorithmic trials and conquer expert DSA puzzles.",
        perk: "Golden Boss Slayer banner"
    },
    {
        id: "badge-legend",
        name: "DSA Legend",
        type: "badge",
        category: "Grandmaster",
        icon: "👑",
        color: "#ffb627",
        reqType: "xp",
        reqVal: 5500,
        desc: "Attain the highest attainable rank and conquer all dungeon trials.",
        perk: "Legend Crown & Hall of Fame status"
    }
];
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
    activeGame: null,
    claimedRewards: [],
    equippedPerks: [
        "perk-extra-heart"
    ],
    practiceStatus: {},
    practiceNotes: {}
};
const storageKey = (uid)=>`bytequest-player-${uid}`;
function normaliseStats(value) {
    return {
        ...emptyStats,
        ...value,
        campaigns: value?.campaigns || {},
        activeGame: value?.activeGame || null,
        claimedRewards: Array.isArray(value?.claimedRewards) ? value.claimedRewards : [],
        equippedPerks: Array.isArray(value?.equippedPerks) ? value.equippedPerks : [
            "perk-extra-heart"
        ],
        practiceStatus: value?.practiceStatus || {},
        practiceNotes: value?.practiceNotes || {}
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
    const updateStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayer.useCallback[updateStats]": (updater)=>{
            if (!auth.currentUser) return;
            setStats({
                "usePlayer.useCallback[updateStats]": (previous)=>{
                    const next = normaliseStats(updater(normaliseStats(previous)));
                    localStorage.setItem(storageKey(auth.currentUser.uid), JSON.stringify(next));
                    return next;
                }
            }["usePlayer.useCallback[updateStats]"]);
        }
    }["usePlayer.useCallback[updateStats]"], []);
    const saveRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayer.useCallback[saveRun]": (mode, run)=>{
            updateStats({
                "usePlayer.useCallback[saveRun]": (previous)=>({
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
                    })
            }["usePlayer.useCallback[saveRun]"]);
        }
    }["usePlayer.useCallback[saveRun]"], [
        updateStats
    ]);
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
    function claimReward(rewardId) {
        updateStats((previous)=>({
                ...previous,
                claimedRewards: [
                    ...new Set([
                        ...previous.claimedRewards || [],
                        rewardId
                    ])
                ]
            }));
    }
    function togglePerk(perkId) {
        updateStats((previous)=>{
            const current = previous.equippedPerks || [];
            const next = current.includes(perkId) ? current.filter((id)=>id !== perkId) : [
                ...current,
                perkId
            ];
            return {
                ...previous,
                equippedPerks: next
            };
        });
    }
    function setPracticeStatus(questionId, status) {
        updateStats((previous)=>({
                ...previous,
                practiceStatus: {
                    ...previous.practiceStatus || {},
                    [questionId]: status
                }
            }));
    }
    function savePracticeNote(questionId, note) {
        updateStats((previous)=>({
                ...previous,
                practiceNotes: {
                    ...previous.practiceNotes || {},
                    [questionId]: note
                }
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
        finishRun,
        claimReward,
        togglePerk,
        setPracticeStatus,
        savePracticeNote
    };
}
_s(usePlayer, "wbLUtraHARdXr+xqbmAcUTCu5do=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-code-game_src_app_0jr_klp._.js.map