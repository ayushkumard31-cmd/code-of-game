(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-code-game/src/app/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar,
    "isAdminUser",
    ()=>isAdminUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ADMIN_UIDS = [
    "ayush1212"
];
const ADMIN_EMAILS = [
    "ayushkumard31@gmail.com"
];
function isAdminUser(user) {
    if (!user) return false;
    if (ADMIN_UIDS.includes(user.uid)) return true;
    if (user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())) return true;
    return false;
}
function Navbar({ onOpenLogin, onLaunchMode }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, stats, loading, login, loginWithPassword, createAccount, resetPassword, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [loginOpen, setLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createMode, setCreateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const totalCleared = Object.values(stats?.campaigns || {}).reduce((total, run)=>total + (run.completedLevels?.length || 0), 0);
    async function handleGoogleLogin() {
        setAuthError("");
        try {
            await login();
            setLoginOpen(false);
        } catch (error) {
            if (error?.code !== "auth/popup-closed-by-user") {
                setAuthError("Google sign-in failed. Please try again.");
            }
        }
    }
    async function handlePasswordLogin(event) {
        event.preventDefault();
        setAuthError("");
        try {
            if (createMode) await createAccount(email.trim(), password);
            else await loginWithPassword(email.trim(), password);
            setLoginOpen(false);
        } catch (error) {
            const messages = {
                "auth/invalid-credential": "Wrong password or invalid credentials.",
                "auth/user-not-found": "No account found with this email.",
                "auth/wrong-password": "The password is incorrect.",
                "auth/email-already-in-use": "This email already has an account.",
                "auth/weak-password": "Password must be at least 6 characters.",
                "auth/invalid-email": "Enter a valid email address.",
                "auth/network-request-failed": "Network error. Check connection."
            };
            setAuthError(messages[error?.code] || `Authentication failed (${error?.code || "unknown"}).`);
        }
    }
    async function handlePasswordReset() {
        setAuthError("");
        if (!email.trim()) {
            setAuthError("Enter your email above first.");
            return;
        }
        try {
            await resetPassword(email.trim());
            setAuthError("Password reset email sent. Check inbox.");
        } catch  {
            setAuthError("Failed to send reset email.");
        }
    }
    async function handleLogout() {
        await logout();
        router.push("/");
    }
    const navItems = [
        {
            href: "/",
            label: "Home",
            icon: "🏠"
        },
        {
            href: "/path",
            label: "Learning Path",
            icon: "🗺️"
        },
        {
            href: "/lectures",
            label: "Lectures",
            icon: "🎥"
        },
        {
            href: "/notes",
            label: "Notes",
            icon: "📖"
        },
        {
            href: "/practice",
            label: "Practice",
            icon: "💻"
        },
        {
            href: "/projects",
            label: "Projects",
            icon: "🛠️"
        },
        {
            href: "/interview",
            label: "Interview",
            icon: "🧠"
        },
        {
            href: "/quests",
            label: "Quests",
            icon: "🎯"
        },
        {
            href: "/leaderboard",
            label: "Leaderboard",
            icon: "🥇"
        },
        {
            href: "/rewards",
            label: "Badges",
            icon: "🏆"
        },
        {
            href: "/profile",
            label: "Profile",
            icon: "👤"
        }
    ];
    const activePath = pathname;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "wordmark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "</>"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            " CODE NEXUS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "topbar-nav-scroll",
                        children: [
                            navItems.map((item)=>{
                                const isActive = activePath === item.href || item.href !== "/" && activePath.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `topbar-nav-link ${isActive ? "active" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginRight: 4
                                            },
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        item.label
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this);
                            }),
                            isAdminUser(user) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: "admin-nav-btn",
                                children: "⚙ ADMIN"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "account",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/profile",
                                className: "hud-pill streak-pill",
                                title: "Daily Streak",
                                children: [
                                    "🔥 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            stats?.streak || 1,
                                            "d"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 136,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/profile",
                                className: "hud-pill xp-pill",
                                title: "Total XP",
                                children: [
                                    "⭐ ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: stats?.totalXp || 0
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rewards",
                                className: "hud-pill badge-pill",
                                title: "Badges",
                                children: [
                                    "🏆 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: (stats?.unlockedBadges?.length || 1) + (stats?.claimedRewards?.length || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 142,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "account-loading",
                                children: "LOADING..."
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-menu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        className: "avatar",
                                        title: "View Profile",
                                        children: user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "P"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-name",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/profile",
                                                style: {
                                                    textDecoration: "none",
                                                    color: "inherit"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: user.displayName || user.email?.split("@")[0] || "Player"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    stats?.totalXp || 0,
                                                    " XP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        type: "button",
                                        children: "LOG OUT"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "login-nav",
                                type: "button",
                                onClick: ()=>{
                                    if (onOpenLogin) onOpenLogin();
                                    else setLoginOpen(true);
                                },
                                children: "SIGN IN"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/Navbar.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/Navbar.js",
                lineNumber: 109,
                columnNumber: 7
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
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-logo",
                            children: "DS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "PLAYER ACCESS"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "login-title",
                            children: createMode ? "Create your account" : "Sign in to play"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "login-copy",
                            children: "Save your XP, claimed rewards, perks, and learning progress."
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "google-login",
                            onClick: handleGoogleLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                " CONTINUE WITH GOOGLE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-divider",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OR USE EMAIL"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/Navbar.js",
                                lineNumber: 186,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 186,
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
                                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                    lineNumber: 188,
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
                                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    children: createMode ? "CREATE ACCOUNT" : "SIGN IN WITH PASSWORD"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        !createMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "forgot-password",
                            onClick: handlePasswordReset,
                            type: "button",
                            children: "FORGOT PASSWORD?"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 216,
                            columnNumber: 15
                        }, this),
                        authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: authError.includes("sent") ? "auth-success" : "auth-error",
                            children: authError
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 221,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "auth-switch",
                            type: "button",
                            onClick: ()=>{
                                setCreateMode(!createMode);
                                setAuthError("");
                            },
                            children: createMode ? "Already registered? Sign in" : "New player? Create an account"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/Navbar.js",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/Navbar.js",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/Navbar.js",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/Navbar.js",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(Navbar, "aFlLS8F4LLgtrffWZREVRyzZlQ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable react/jsx-no-comment-textnodes */ var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$components$2f$smoothui$2f$dynamic$2d$island$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/questionBank.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
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
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Which item leaves first?"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "In LIFO, the newest top item is removed first."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 32,
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
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pop,
                                type: "button",
                                disabled: !items.length,
                                children: "− POP"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "question-stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "TOP ↓"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            ...items
                        ].reverse().map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: item
                            }, `${item}-${items.length - index}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 40,
                                columnNumber: 57
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "BOTTOM"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(StackQuestionVisual, "33WWxqPaeLoENUV9tX/M0u0BwCM=");
_c = StackQuestionVisual;
function GameContent() {
    _s1();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hint, setHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginOpen, setLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingMode, setPendingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dsa");
    const [pendingLevel, setPendingLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [eliminatedChoices, setEliminatedChoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { user, stats, loading, saveRun, completeLevel, finishRun } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const campaign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(mode);
    const current = campaign[level] || campaign[0];
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRank"])(xp);
    const tier = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierConfig"][current?.tier || 0] || __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierConfig"][0];
    const hasResumed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasExtraHeartPerk = stats?.equippedPerks?.includes("perk-extra-heart") && stats?.claimedRewards?.includes("perk-extra-heart");
    const maxLives = hasExtraHeartPerk ? 4 : 3;
    const has5050Perk = stats?.equippedPerks?.includes("perk-50-50") && stats?.claimedRewards?.includes("perk-50-50");
    const hasNeonTheme = stats?.equippedPerks?.includes("perk-cyber-glow") && stats?.claimedRewards?.includes("perk-cyber-glow");
    // Handle URL parameters (e.g. from Map page redirect)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameContent.useEffect": ()=>{
            const qMode = searchParams.get("mode");
            const qLevel = searchParams.get("level");
            if (qMode) {
                const parsedLevel = qLevel ? parseInt(qLevel, 10) : 0;
                enterCampaign(qMode, parsedLevel);
            }
        }
    }["GameContent.useEffect"], [
        searchParams
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    // Resume in-progress game
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameContent.useEffect": ()=>{
            if (hasResumed.current) return;
            if (!loading && user) {
                const activeGame = stats?.activeGame;
                if (activeGame && activeGame.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(activeGame.mode).length) {
                    hasResumed.current = true;
                    const run = activeGame;
                    const resume = window.setTimeout({
                        "GameContent.useEffect.resume": ()=>{
                            setMode(run.mode);
                            setLevel(run.currentLevel || 0);
                            setLives(run.lives || maxLives);
                            setXp(run.xp || 0);
                            setChoice(Number.isInteger(run.selectedChoice) ? run.selectedChoice : null);
                            setHint(Boolean(run.hint));
                            setScreen("game");
                        }
                    }["GameContent.useEffect.resume"], 0);
                    return ({
                        "GameContent.useEffect": ()=>window.clearTimeout(resume)
                    })["GameContent.useEffect"];
                } else {
                    hasResumed.current = true;
                }
            }
        }
    }["GameContent.useEffect"], [
        loading,
        user,
        stats?.activeGame,
        maxLives
    ]);
    // Save game progress on each step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameContent.useEffect": ()=>{
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
    }["GameContent.useEffect"], [
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
    function enterCampaign(nextMode, targetLevel = null) {
        const campaignMode = nextMode || "dsa";
        const saved = stats?.campaigns?.[campaignMode];
        const canResume = saved && saved.currentLevel < (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$questionBank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCampaign"])(campaignMode).length;
        const startingHearts = hasExtraHeartPerk ? 4 : 3;
        const run = {
            currentLevel: targetLevel ?? (canResume ? saved.currentLevel : 0),
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
        if (!user) {
            setPendingMode(nextMode);
            setPendingLevel(0);
            setLoginOpen(true);
            return;
        }
        enterCampaign(nextMode, 0);
    }
    function use5050Lifeline() {
        if (!current || eliminatedChoices.length > 0) return;
        const wrongIndices = current.choices.map((_, i)=>i).filter((i)=>i !== current.answer);
        const toEliminate = wrongIndices.slice(0, 2);
        setEliminatedChoices(toEliminate);
        setMessage("🔮 ORACLE ELIMINATED 2 WRONG CHOICES");
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
            const alreadyCompleted = stats?.campaigns?.[mode]?.completedLevels?.includes(level);
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
        className: `shell ${screen === "home" ? "storefront" : ""} ${hasNeonTheme ? "neon-glow" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenLogin: ()=>setLoginOpen(true)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 203,
                columnNumber: 29
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hs-quests dynamic-island-section",
                style: {
                    borderTop: 0,
                    paddingBottom: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hs-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "LIVE SYSTEMS"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Dynamic Island"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Switch between live alerts, timers, calls, and music from one compact control."
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$components$2f$smoothui$2f$dynamic$2d$island$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 207,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hs-quests",
                style: {
                    borderTop: 0,
                    paddingTop: 48
                },
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
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Pick your quest type"
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Four challenge modes for mastering DSA in C from novice trials to the Final DSA Boss Test."
                                }, void 0, false, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 222,
                            columnNumber: 13
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
                                    type: "button",
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
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: m.sub
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "START QUEST →"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, m.mode, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 228,
                            columnNumber: 13
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
                                            lineNumber: 253,
                                            columnNumber: 19
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
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: 14,
                                marginTop: 40
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/practice",
                                    className: "mode-card",
                                    style: {
                                        "--mc": "#a9ff43"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "◉"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Practice Hub (0 XP)"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Subjective deep-dive & self-evaluation"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "EXPLORE PRACTICE →"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/rewards",
                                    className: "mode-card",
                                    style: {
                                        "--mc": "#ffb627"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "♜"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Rewards & Perks"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Claim badges & equip Heart Containers"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "VIEW REWARDS →"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/map",
                                    className: "mode-card",
                                    style: {
                                        "--mc": "#4ec9e8"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "◇"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Dungeon Map"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Interactive Stack, Queue & List labs"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "OPEN MAP →"
                                        }, void 0, false, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-code-game/src/app/page.js",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-code-game/src/app/page.js",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/app/page.js",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 220,
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
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: current.type
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 289,
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
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "counter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: String(current.tierQuestion || level + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    " / ",
                                    String(current.tierTotal || campaign.length).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 293,
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
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 296,
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
                                                lineNumber: 300,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "RANK ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: rank.name
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 301,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 299,
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
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: rank.name === "LEGEND" ? "MAX RANK" : `${rank.next - xp} XP TO NEXT RANK`
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 303,
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
                                        lineNumber: 308,
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
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "WRONG ANSWERS COST ONE"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setScreen("home"),
                                type: "button",
                                children: "× EXIT QUEST"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 287,
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
                                        lineNumber: 322,
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
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: current.title
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            current.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "challenge.c"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        children: current.code
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "instruction",
                                children: current.prompt
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            current.title === "Stack behavior" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackQuestionVisual, {
                                prompt: current.prompt
                            }, `${mode}-${level}`, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "options",
                                children: current.choices.map((item, i)=>{
                                    const isEliminated = eliminatedChoices.includes(i);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${choice === i ? "active" : ""} ${isEliminated ? "option-hidden" : ""}`,
                                        disabled: isEliminated,
                                        onClick: ()=>setChoice(i),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: String.fromCharCode(65 + i)
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 349,
                                                columnNumber: 21
                                            }, this),
                                            item,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 351,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 342,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 338,
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
                                                type: "button",
                                                onClick: ()=>setHint(!hint),
                                                children: [
                                                    "💡 ",
                                                    hint ? "HIDE HINT" : "USE HINT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 359,
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
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: message.includes("CLEAR") ? "success" : "error",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "primary",
                                        type: "button",
                                        disabled: choice === null || message.includes("CLEAR"),
                                        onClick: submit,
                                        children: "CONFIRM →"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 357,
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
                                lineNumber: 383,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 286,
                columnNumber: 9
            }, this),
            (screen === "win" || screen === "lost") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `ending ${screen === "lost" ? "lost" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: screen === "win" ? "CAMPAIGN_COMPLETE" : "RUN_ENDED"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: screen === "win" ? "QUEST\nCLEARED." : "OUT OF\nLIVES."
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: screen === "win" ? `You earned ${xp} XP and finished as ${rank.name}.` : `You reached ${rank.name} with ${xp} XP. Refill your hearts and try again.`
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary",
                        onClick: ()=>start(mode),
                        type: "button",
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ghost",
                        onClick: ()=>setScreen("home"),
                        type: "button",
                        children: "LOBBY"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 390,
                columnNumber: 9
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 DSA DUNGEON"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LEARN C · MASTER DSA · CLAIM REWARDS · FIX BUGS"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 404,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s1(GameContent, "wa3Fz3EKKVBQlZB8JnP1SCr9TTA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = GameContent;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "adm-loading",
            children: "LOADING DUNGEON..."
        }, void 0, false, {
            fileName: "[project]/my-code-game/src/app/page.js",
            lineNumber: 415,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContent, {}, void 0, false, {
            fileName: "[project]/my-code-game/src/app/page.js",
            lineNumber: 416,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_c2 = Home;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StackQuestionVisual");
__turbopack_context__.k.register(_c1, "GameContent");
__turbopack_context__.k.register(_c2, "Home");
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
    streak: 1,
    longestStreak: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    campaigns: {},
    activeGame: null,
    claimedRewards: [],
    unlockedBadges: [
        "badge-first-blood"
    ],
    equippedPerks: [
        "perk-extra-heart"
    ],
    practiceStatus: {},
    practiceNotes: {},
    completedRoadmaps: [],
    watchedLectures: [],
    solvedProblems: {},
    completedProjects: []
};
const storageKey = (uid)=>uid ? `bytequest-player-${uid}` : "bytequest-player-guest";
function calculateStreak(previousStreak = 1, lastDateStr) {
    if (!lastDateStr) return {
        streak: 1,
        date: new Date().toISOString().split("T")[0]
    };
    const today = new Date().toISOString().split("T")[0];
    if (lastDateStr === today) return {
        streak: Math.max(1, previousStreak),
        date: today
    };
    const last = new Date(lastDateStr);
    const now = new Date(today);
    const diffTime = Math.abs(now - last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
        return {
            streak: previousStreak + 1,
            date: today
        };
    } else if (diffDays > 1) {
        return {
            streak: 1,
            date: today
        };
    }
    return {
        streak: Math.max(1, previousStreak),
        date: today
    };
}
function normaliseStats(value) {
    const base = {
        ...emptyStats,
        ...value || {}
    };
    return {
        ...base,
        streak: typeof base.streak === "number" ? base.streak : 1,
        longestStreak: typeof base.longestStreak === "number" ? base.longestStreak : 1,
        lastActiveDate: base.lastActiveDate || new Date().toISOString().split("T")[0],
        campaigns: base?.campaigns || {},
        activeGame: base?.activeGame || null,
        claimedRewards: Array.isArray(base?.claimedRewards) ? base.claimedRewards : [],
        unlockedBadges: Array.isArray(base?.unlockedBadges) ? base.unlockedBadges : [
            "badge-first-blood"
        ],
        equippedPerks: Array.isArray(base?.equippedPerks) ? base.equippedPerks : [
            "perk-extra-heart"
        ],
        practiceStatus: base?.practiceStatus || {},
        practiceNotes: base?.practiceNotes || {},
        completedRoadmaps: Array.isArray(base?.completedRoadmaps) ? base.completedRoadmaps : [],
        watchedLectures: Array.isArray(base?.watchedLectures) ? base.watchedLectures : [],
        solvedProblems: base?.solvedProblems || {},
        completedProjects: Array.isArray(base?.completedProjects) ? base.completedProjects : []
    };
}
function usePlayer() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "usePlayer.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const stored = localStorage.getItem(storageKey(null));
                    if (stored) return normaliseStats(JSON.parse(stored));
                } catch  {}
            }
            return emptyStats;
        }
    }["usePlayer.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayer.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$CvXU3_1x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(auth, {
                "usePlayer.useEffect": (nextUser)=>{
                    setUser(nextUser);
                    const key = storageKey(nextUser ? nextUser.uid : null);
                    try {
                        const saved = localStorage.getItem(key);
                        if (saved) {
                            setStats(normaliseStats(JSON.parse(saved)));
                        } else if (!nextUser) {
                            setStats({
                                "usePlayer.useEffect": (prev)=>prev || emptyStats
                            }["usePlayer.useEffect"]);
                        }
                    } catch  {
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
            setStats({
                "usePlayer.useCallback[updateStats]": (previous)=>{
                    const next = normaliseStats(updater(normaliseStats(previous)));
                    const key = storageKey(auth.currentUser ? auth.currentUser.uid : null);
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            localStorage.setItem(key, JSON.stringify(next));
                        } catch  {}
                    }
                    return next;
                }
            }["usePlayer.useCallback[updateStats]"]);
        }
    }["usePlayer.useCallback[updateStats]"], []);
    const addXp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayer.useCallback[addXp]": (amount)=>{
            updateStats({
                "usePlayer.useCallback[addXp]": (previous)=>{
                    const newXp = (previous.totalXp || 0) + Number(amount);
                    const { streak, date } = calculateStreak(previous.streak, previous.lastActiveDate);
                    const longest = Math.max(previous.longestStreak || 1, streak);
                    // Auto badges check
                    const unlocked = new Set(previous.unlockedBadges || []);
                    if (newXp >= 100) unlocked.add("badge-first-blood");
                    if (newXp >= 500) unlocked.add("badge-stack-master");
                    if (newXp >= 1500) unlocked.add("badge-tree-sage");
                    if (newXp >= 3000) unlocked.add("badge-boss-slayer");
                    if (newXp >= 5000) unlocked.add("badge-legend");
                    if (streak >= 7) unlocked.add("badge-streak-7");
                    if (streak >= 30) unlocked.add("badge-streak-30");
                    return {
                        ...previous,
                        totalXp: newXp,
                        highScore: Math.max(previous.highScore || 0, newXp),
                        streak,
                        longestStreak: longest,
                        lastActiveDate: date,
                        unlockedBadges: Array.from(unlocked)
                    };
                }
            }["usePlayer.useCallback[addXp]"]);
        }
    }["usePlayer.useCallback[addXp]"], [
        updateStats
    ]);
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
            const newTotalXp = previous.totalXp + earned;
            const { streak, date } = calculateStreak(previous.streak, previous.lastActiveDate);
            return {
                ...previous,
                totalXp: newTotalXp,
                highScore: Math.max(previous.highScore, campaign.xp),
                streak,
                longestStreak: Math.max(previous.longestStreak || 1, streak),
                lastActiveDate: date,
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
    function toggleRoadmapNode(nodeId, xpReward = 50) {
        updateStats((previous)=>{
            const current = previous.completedRoadmaps || [];
            const exists = current.includes(nodeId);
            const next = exists ? current.filter((id)=>id !== nodeId) : [
                ...current,
                nodeId
            ];
            const xpGained = !exists ? xpReward : 0;
            return {
                ...previous,
                completedRoadmaps: next,
                totalXp: previous.totalXp + xpGained
            };
        });
    }
    function markLectureWatched(lectureId, xpReward = 50) {
        updateStats((previous)=>{
            const current = previous.watchedLectures || [];
            if (current.includes(lectureId)) return previous;
            return {
                ...previous,
                watchedLectures: [
                    ...current,
                    lectureId
                ],
                totalXp: previous.totalXp + xpReward
            };
        });
    }
    function recordSolvedProblem(problemId, type, xpReward = 40) {
        updateStats((previous)=>{
            const current = previous.solvedProblems || {};
            const wasAlreadySolved = !!current[problemId];
            const next = {
                ...current,
                [problemId]: {
                    type,
                    passedAt: new Date().toISOString()
                }
            };
            return {
                ...previous,
                solvedProblems: next,
                totalXp: previous.totalXp + (wasAlreadySolved ? 5 : xpReward)
            };
        });
    }
    function recordProjectCompleted(projectId, xpReward = 200) {
        updateStats((previous)=>{
            const current = previous.completedProjects || [];
            if (current.includes(projectId)) return previous;
            return {
                ...previous,
                completedProjects: [
                    ...current,
                    projectId
                ],
                totalXp: previous.totalXp + xpReward
            };
        });
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
        savePracticeNote,
        addXp,
        toggleRoadmapNode,
        markLectureWatched,
        recordSolvedProblem,
        recordProjectCompleted
    };
}
_s(usePlayer, "i6rW5nh//XO17o00URf8rV5OT3M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DynamicIsland
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/cloud-lightning.mjs [app-client] (ecmascript) <export default as CloudLightning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/music-2.mjs [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/skip-back.mjs [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/skip-forward.mjs [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/thermometer.mjs [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BOUNCE_VARIANTS = {
    idle: 0.5,
    "idle-ring": 0.5,
    "idle-timer": 0.3,
    "ring-idle": 0.5,
    "ring-timer": 0.35,
    "timer-idle": 0.3,
    "timer-ring": 0.35
};
const DEFAULT_BOUNCE = 0.5;
const TIMER_INTERVAL_MS = 1000;
// Idle Component with Weather
const DefaultIdle = ()=>{
    _s();
    const [showTemp, setShowTemp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "flex items-center gap-2 px-3 py-2",
        layout: true,
        onHoverEnd: ()=>setShowTemp(false),
        onHoverStart: ()=>setShowTemp(true),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "text-white",
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__["CloudLightning"], {
                        className: "h-5 w-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "storm", false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showTemp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        opacity: 1,
                        width: "auto"
                    },
                    className: "flex items-center gap-1 overflow-hidden text-white",
                    exit: {
                        opacity: 0,
                        width: 0
                    },
                    initial: {
                        opacity: 0,
                        width: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pointer-events-none whitespace-nowrap text-white text-xs",
                            children: "12°C"
                        }, void 0, false, {
                            fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DefaultIdle, "UqD+FrPtOVDGqJzuu+NWPzZGV2M=");
_c = DefaultIdle;
// Ring Component
const DefaultRing = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-64 items-center gap-3 overflow-hidden px-4 py-2 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                className: "h-5 w-5 text-green-500"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none font-medium text-sm text-white",
                        children: "Incoming Call"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none text-white text-xs opacity-70",
                        children: "Guillermo Rauch"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 80,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 w-2 animate-pulse rounded-full bg-green-500"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = DefaultRing;
// Timer Component
const DefaultTimer = ()=>{
    _s1();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultTimer.useMemo": ()=>{
            const timer = setInterval({
                "DefaultTimer.useMemo.timer": ()=>{
                    setTime({
                        "DefaultTimer.useMemo.timer": (t)=>t > 0 ? t - 1 : 0
                    }["DefaultTimer.useMemo.timer"]);
                }
            }["DefaultTimer.useMemo.timer"], TIMER_INTERVAL_MS);
            return ({
                "DefaultTimer.useMemo": ()=>clearInterval(timer)
            })["DefaultTimer.useMemo"];
        }
    }["DefaultTimer.useMemo"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-64 items-center gap-3 overflow-hidden px-4 py-2 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                className: "h-5 w-5 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pointer-events-none font-medium text-sm text-white",
                    children: [
                        time,
                        "s remaining"
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-24 overflow-hidden rounded-full bg-white/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        width: "0%"
                    },
                    className: "h-full bg-amber-500",
                    initial: {
                        width: "100%"
                    },
                    transition: {
                        duration: time,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DefaultTimer, "QWDsbFaJGS6xid/ctyKYbaoV4sw=");
_c2 = DefaultTimer;
// Notification Component
const Notification = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-64 items-center gap-3 overflow-hidden px-4 py-2 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "h-5 w-5 text-yellow-400"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 122,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none font-medium text-sm text-white",
                        children: "New Message"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 124,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none text-white text-xs opacity-70",
                        children: "You have a new notification!"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 127,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 123,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full bg-yellow-400/40 px-2 py-0.5 text-xs text-yellow-500",
                children: "1"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 131,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Notification;
// Music Player Component
const MusicPlayer = ()=>{
    _s2();
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-72 items-center gap-3 overflow-hidden px-4 py-2 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                className: "h-5 w-5 text-pink-500"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none truncate font-medium text-sm text-white",
                        children: "Lofi Chill Beats"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none truncate text-white text-xs opacity-70",
                        children: "DJ Smooth"
                    }, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded-full p-1 hover:bg-white/30",
                onClick: ()=>setPlaying(false),
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                    className: "h-4 w-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded-full p-1 hover:bg-white/30",
                onClick: ()=>setPlaying((p)=>!p),
                type: "button",
                children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    className: "h-4 w-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    className: "h-4 w-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded-full p-1 hover:bg-white/30",
                onClick: ()=>setPlaying(true),
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                    className: "h-4 w-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(MusicPlayer, "bO5Z3IxdEKeH4QFKmWW4BYnCYss=");
_c4 = MusicPlayer;
function DynamicIsland({ view: controlledView, onViewChange, idleContent, ringContent, timerContent, className = "" }) {
    _s3();
    const [internalView, setInternalView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [variantKey, setVariantKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const view = controlledView ?? internalView;
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DynamicIsland.useMemo[content]": ()=>{
            switch(view){
                case "ring":
                    return ringContent ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultRing, {}, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 197,
                        columnNumber: 31
                    }, this);
                case "timer":
                    return timerContent ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultTimer, {}, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 199,
                        columnNumber: 32
                    }, this);
                case "notification":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Notification, {}, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 201,
                        columnNumber: 16
                    }, this);
                case "music":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicPlayer, {}, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 203,
                        columnNumber: 16
                    }, this);
                default:
                    return idleContent ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultIdle, {}, void 0, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 205,
                        columnNumber: 31
                    }, this);
            }
        }
    }["DynamicIsland.useMemo[content]"], [
        view,
        idleContent,
        ringContent,
        timerContent
    ]);
    const handleViewChange = (newView)=>{
        if (view === newView) {
            return;
        }
        setVariantKey(`${view}-${newView}`);
        if (onViewChange) {
            onViewChange(newView);
        } else {
            setInternalView(newView);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-[200px] ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-full w-full flex-col justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black",
                    layout: true,
                    style: {
                        borderRadius: 32
                    },
                    transition: shouldReduceMotion ? {
                        duration: 0
                    } : {
                        bounce: BOUNCE_VARIANTS[variantKey] ?? DEFAULT_BOUNCE,
                        duration: 0.25,
                        type: "spring"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        animate: shouldReduceMotion ? {
                            opacity: 1,
                            scale: 1
                        } : {
                            filter: "blur(0px)",
                            opacity: 1,
                            originX: 0.5,
                            originY: 0.5,
                            scale: 1,
                            transition: {
                                delay: 0.05
                            }
                        },
                        initial: {
                            filter: "blur(5px)",
                            opacity: 0,
                            originX: 0.5,
                            originY: 0.5,
                            scale: 0.9
                        },
                        transition: {
                            bounce: BOUNCE_VARIANTS[variantKey] ?? DEFAULT_BOUNCE,
                            type: "spring"
                        },
                        children: content
                    }, view, false, {
                        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-1 rounded-full border bg-background p-1",
                    children: [
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__["CloudLightning"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                                lineNumber: 275,
                                columnNumber: 21
                            }, this),
                            key: "idle"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                                lineNumber: 276,
                                columnNumber: 21
                            }, this),
                            key: "ring"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, this),
                            key: "timer"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            key: "notification"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                                lineNumber: 279,
                                columnNumber: 21
                            }, this),
                            key: "music"
                        }
                    ].map(({ key, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "aria-label": key,
                            className: "flex size-8 cursor-pointer items-center justify-center rounded-full border bg-primary px-2",
                            onClick: ()=>{
                                if (view !== key) {
                                    setVariantKey(`${view}-${key}`);
                                    handleViewChange(key);
                                }
                            },
                            type: "button",
                            children: icon
                        }, key, false, {
                            fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
            lineNumber: 223,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-code-game/src/components/smoothui/dynamic-island/index.jsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s3(DynamicIsland, "Oxxu6diwfYTEBLcfoJUa5q0yudY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c5 = DynamicIsland;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "DefaultIdle");
__turbopack_context__.k.register(_c1, "DefaultRing");
__turbopack_context__.k.register(_c2, "DefaultTimer");
__turbopack_context__.k.register(_c3, "Notification");
__turbopack_context__.k.register(_c4, "MusicPlayer");
__turbopack_context__.k.register(_c5, "DynamicIsland");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-code-game_src_0wtfbeo._.js.map