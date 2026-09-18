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
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/app/usePlayer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HomePage() {
    _s();
    const { stats, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const totalXp = stats?.totalXp || 0;
    const streak = stats?.streak || 1;
    const currentRank = totalXp >= 5000 ? "Legendary Grandmaster" : totalXp >= 3000 ? "Boss Slayer" : totalXp >= 1500 ? "Systems Architect" : totalXp >= 500 ? "Algorithm Knight" : "Novice Explorer";
    const dailyGoalTarget = 100;
    const dailyGoalCurrent = Math.min(dailyGoalTarget, totalXp % 200);
    const dailyPercent = Math.round(dailyGoalCurrent / dailyGoalTarget * 100);
    const hubs = [
        {
            title: "Learning Path",
            icon: "🗺️",
            href: "/path",
            tag: "4 TRACKS",
            color: "#a9ff43",
            desc: "Structured roadmaps from computational basics and C/C++/Java/Python to DSA and advanced distributed systems.",
            stats: "5 Modules · 18 Milestones"
        },
        {
            title: "Video Lectures",
            icon: "🎥",
            href: "/lectures",
            tag: "CLASSROOM",
            color: "#46d8e7",
            desc: "Curated engineering video lectures with timestamped chapters, key takeaways, and sidecar code snippets.",
            stats: "5 Core Lectures · +XP Rewards"
        },
        {
            title: "Theory / Notes",
            icon: "📖",
            href: "/notes",
            tag: "HANDBOOK",
            color: "#ffb627",
            desc: "Digital cheat sheets, asymptotic Big-O matrices, process memory segments, and multi-language comparisons.",
            stats: "Verified Reference Guide"
        },
        {
            title: "Code Practice",
            icon: "💻",
            href: "/practice",
            tag: "4 MODES",
            color: "#f052b5",
            desc: "Interactive drills spanning MCQs, output prediction puzzles, bug forensics, and algorithmic problem solving.",
            stats: "MCQ · Output · Debug · Coding"
        },
        {
            title: "Real-World Projects",
            icon: "🛠️",
            href: "/projects",
            tag: "3 TIERS",
            color: "#ff5340",
            desc: "Build production-caliber software: CLI expression calculators, custom malloc allocators, and mini-Redis engines.",
            stats: "Beginner · Intermediate · Advanced"
        },
        {
            title: "Interview Preparation",
            icon: "🧠",
            href: "/interview",
            tag: "FAANG & TOP TECH",
            color: "#6c35e8",
            desc: "Curated interview questions tagged by difficulty and company (Google, Amazon, Meta, Uber) with mock timer.",
            stats: "Easy · Medium · Hard · Company Tags"
        },
        {
            title: "Gamified Quests",
            icon: "🎯",
            href: "/quests",
            tag: "DUNGEON CAMPAIGN",
            color: "#a9ff43",
            desc: "High-stakes gamified dungeon trials with life hearts, combo multipliers, perks, and interactive stack machines.",
            stats: "4 Trial Modes · Live Hearts"
        },
        {
            title: "Global Leaderboard",
            icon: "🥇",
            href: "/leaderboard",
            tag: "HALL OF FAME",
            color: "#ffd700",
            desc: "Compare your streak, XP, and solved challenges against developers and algorithm masters worldwide.",
            stats: "Weekly & All-Time Rankings"
        },
        {
            title: "Developer Profile",
            icon: "👤",
            href: "/profile",
            tag: "PORTFOLIO",
            color: "#46d8e7",
            desc: "Personal statistics cockpit: streak flame calendar, mastery breakdown chart, and unlocked badge showcase.",
            stats: "Level & Badges Showcase"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg"
            }, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nexus-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "40px 0 30px",
                            display: "grid",
                            gridTemplateColumns: "minmax(0, 1.3fr) minmax(320px, 0.7fr)",
                            gap: 36,
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 8,
                                            padding: "5px 12px",
                                            borderRadius: 9999,
                                            background: "rgba(169, 255, 67, 0.1)",
                                            border: "1px solid rgba(169, 255, 67, 0.3)",
                                            color: "#a9ff43",
                                            fontSize: 11,
                                            fontFamily: "var(--font-mono)",
                                            fontWeight: 800,
                                            marginBottom: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            " ALL-IN-ONE CODE LEARNING ECOSYSTEM"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "clamp(38px, 5.5vw, 64px)",
                                            fontWeight: 900,
                                            letterSpacing: "-3px",
                                            lineHeight: 1.05,
                                            margin: "0 0 18px",
                                            color: "#fff"
                                        },
                                        children: [
                                            "MASTER COMPUTER SCIENCE ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 144,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#a9ff43"
                                                },
                                                children: "FROM FIRST PRINCIPLES."
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 16,
                                            color: "#9ca59e",
                                            lineHeight: 1.65,
                                            maxWidth: 620,
                                            margin: "0 0 28px"
                                        },
                                        children: "Accelerate your engineering journey. Navigate structured learning paths, dive into systems lectures and cheat sheets, solve interactive coding drills, and construct production-grade projects."
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 14,
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/path",
                                                className: "btn-primary",
                                                style: {
                                                    padding: "14px 26px",
                                                    fontSize: 13
                                                },
                                                children: "🗺️ Explore Learning Paths"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/practice",
                                                className: "btn-secondary",
                                                style: {
                                                    padding: "14px 26px",
                                                    fontSize: 13
                                                },
                                                children: "💻 Code Practice Arena"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/quests",
                                                className: "btn-secondary",
                                                style: {
                                                    padding: "14px 26px",
                                                    fontSize: 13
                                                },
                                                children: "🎯 Enter Dungeon Quest"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nexus-card",
                                style: {
                                    background: "linear-gradient(145deg, #151c16, #0e120f)",
                                    border: "1px solid #28382a",
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.6)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: "#a9ff43",
                                                    fontFamily: "var(--font-mono)",
                                                    fontWeight: 800,
                                                    letterSpacing: 1
                                                },
                                                children: "DEVELOPER COCKPIT"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag-badge tag-dsa",
                                                children: currentRank
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: 12,
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#090c0a",
                                                    padding: "14px",
                                                    borderRadius: 8,
                                                    border: "1px solid #1c261e"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        style: {
                                                            color: "#7a847b",
                                                            fontSize: 10,
                                                            fontFamily: "var(--font-mono)",
                                                            display: "block"
                                                        },
                                                        children: "ACTIVE STREAK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        style: {
                                                            color: "#ff7047",
                                                            fontSize: 24,
                                                            fontFamily: "var(--font-mono)"
                                                        },
                                                        children: [
                                                            "🔥 ",
                                                            streak,
                                                            " Days"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#090c0a",
                                                    padding: "14px",
                                                    borderRadius: 8,
                                                    border: "1px solid #1c261e"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        style: {
                                                            color: "#7a847b",
                                                            fontSize: 10,
                                                            fontFamily: "var(--font-mono)",
                                                            display: "block"
                                                        },
                                                        children: "TOTAL EXPERIENCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        style: {
                                                            color: "#ffb627",
                                                            fontSize: 24,
                                                            fontFamily: "var(--font-mono)"
                                                        },
                                                        children: [
                                                            "⭐ ",
                                                            totalXp,
                                                            " XP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 191,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    fontSize: 11,
                                                    fontFamily: "var(--font-mono)",
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#8a948b"
                                                        },
                                                        children: "DAILY GOAL (100 XP)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        style: {
                                                            color: "#a9ff43"
                                                        },
                                                        children: [
                                                            dailyGoalCurrent,
                                                            " / ",
                                                            dailyGoalTarget,
                                                            " XP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 6,
                                                    background: "#1c231d",
                                                    borderRadius: 3,
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: "100%",
                                                        width: `${dailyPercent}%`,
                                                        background: "#a9ff43"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingTop: 12,
                                            borderTop: "1px solid #1f2a21",
                                            fontSize: 11
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#788279",
                                                    fontFamily: "var(--font-mono)"
                                                },
                                                children: [
                                                    "Logged in as ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: user?.displayName || user?.email?.split("@")[0] || "Guest Pioneer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-code-game/src/app/page.js",
                                                        lineNumber: 215,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/profile",
                                                style: {
                                                    color: "#a9ff43",
                                                    textDecoration: "none",
                                                    fontWeight: 700
                                                },
                                                children: "Profile →"
                                            }, void 0, false, {
                                                fileName: "[project]/my-code-game/src/app/page.js",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            marginTop: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: "#a9ff43",
                                            fontSize: 10,
                                            letterSpacing: 2,
                                            fontFamily: "var(--font-mono)",
                                            fontWeight: 800
                                        },
                                        children: "PLATFORM DIRECTORY"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: 28,
                                            color: "#fff",
                                            fontWeight: 800,
                                            margin: "6px 0 0"
                                        },
                                        children: "Explore Platform Modules"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                    gap: 20
                                },
                                children: hubs.map((hub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: hub.href,
                                        style: {
                                            textDecoration: "none",
                                            color: "inherit"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "nexus-card",
                                            style: {
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                borderLeft: `3px solid ${hub.color}`,
                                                transition: "transform 0.2s, border-color 0.2s"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                marginBottom: 12
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 28
                                                                    },
                                                                    children: hub.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 259,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "tag-badge",
                                                                    style: {
                                                                        background: `${hub.color}15`,
                                                                        color: hub.color,
                                                                        border: `1px solid ${hub.color}35`
                                                                    },
                                                                    children: hub.tag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                                    lineNumber: 260,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 258,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                margin: "0 0 8px",
                                                                fontSize: 19,
                                                                color: "#fff",
                                                                fontWeight: 800
                                                            },
                                                            children: hub.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "0 0 16px",
                                                                color: "#8d968e",
                                                                fontSize: 13,
                                                                lineHeight: 1.5
                                                            },
                                                            children: hub.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        paddingTop: 12,
                                                        borderTop: "1px solid #1a221b",
                                                        fontSize: 11,
                                                        fontFamily: "var(--font-mono)",
                                                        color: "#747d75"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: hub.stats
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: hub.color,
                                                                fontWeight: 800
                                                            },
                                                            children: "Open →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-code-game/src/app/page.js",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-code-game/src/app/page.js",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-code-game/src/app/page.js",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    }, hub.title, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            marginTop: 60,
                            padding: "32px 36px",
                            borderRadius: 12,
                            background: "linear-gradient(135deg, rgba(70, 216, 231, 0.08), #101411)",
                            border: "1px solid #1f3336",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag-badge tag-dsa",
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: "🎯 TODAY'S SPOTLIGHT CHALLENGE"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: "4px 0 6px",
                                            fontSize: 22,
                                            color: "#fff",
                                            fontWeight: 800
                                        },
                                        children: "Two Sum & Hash Table Traversal"
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            color: "#8a9792",
                                            fontSize: 13,
                                            maxWidth: 540
                                        },
                                        children: "Solve today's featured algorithmic challenge in under 15 minutes to earn +80 XP and maintain your daily flame streak."
                                    }, void 0, false, {
                                        fileName: "[project]/my-code-game/src/app/page.js",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/practice",
                                className: "btn-primary",
                                style: {
                                    padding: "14px 24px"
                                },
                                children: "Start Challenge Now →"
                            }, void 0, false, {
                                fileName: "[project]/my-code-game/src/app/page.js",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-code-game/src/app/page.js",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-code-game/src/app/page.js",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-code-game/src/app/page.js",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(HomePage, "b9Y6DHsN6LRAXrW7zaPKSS+DlIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$app$2f$usePlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
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
]);

//# sourceMappingURL=my-code-game_src_app_0_r1i1y._.js.map