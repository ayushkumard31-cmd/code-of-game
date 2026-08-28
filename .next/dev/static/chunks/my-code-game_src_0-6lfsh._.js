(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-code-game/src/app/FirebaseAnalytics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirebaseAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-code-game/src/lib/firebase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FirebaseAnalytics() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirebaseAnalytics.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeFirebaseAnalytics"])().catch({
                "FirebaseAnalytics.useEffect": (error)=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("Firebase Analytics could not start:", error);
                    }
                }
            }["FirebaseAnalytics.useEffect"]);
        }
    }["FirebaseAnalytics.useEffect"], []);
    return null;
}
_s(FirebaseAnalytics, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = FirebaseAnalytics;
var _c;
__turbopack_context__.k.register(_c, "FirebaseAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-code-game/src/lib/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseApp",
    ()=>firebaseApp,
    "firebaseConfig",
    ()=>firebaseConfig,
    "initializeFirebaseAnalytics",
    ()=>initializeFirebaseAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-code-game/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
;
const firebaseConfig = {
    apiKey: "AIzaSyCGM9VSm2hxI9H9SxGSUSBhx9P8mOAktEI",
    authDomain: "code-of-game.firebaseapp.com",
    projectId: "code-of-game",
    storageBucket: "code-of-game.firebasestorage.app",
    messagingSenderId: "116431841767",
    appId: "1:116431841767:web:bdfc1c1ee21c311c75b542",
    measurementId: "G-P394F37DM6"
};
const firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$code$2d$game$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
async function initializeFirebaseAnalytics() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { getAnalytics, isSupported } = await __turbopack_context__.A("[project]/my-code-game/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript, async loader)");
    if (!await isSupported()) return null;
    return getAnalytics(firebaseApp);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-code-game_src_0-6lfsh._.js.map