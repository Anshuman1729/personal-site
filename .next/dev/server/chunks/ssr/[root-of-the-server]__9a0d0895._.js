module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Nav({ activePage }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = ()=>setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handler, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: scrolled ? '16px 40px' : '28px 40px',
                maxWidth: 1080,
                margin: '0 auto',
                transition: 'padding 0.4s cubic-bezier(0.16,1,0.3,1)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text)',
                        letterSpacing: '-0.02em'
                    },
                    children: "Anshuman Khare"
                }, void 0, false, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        display: 'flex',
                        gap: 32,
                        listStyle: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        color: 'var(--text-3)'
                    },
                    children: [
                        [
                            {
                                href: '/#experience',
                                label: 'Work',
                                key: 'work'
                            },
                            {
                                href: '/#principles',
                                label: 'Thinking',
                                key: 'thinking'
                            },
                            {
                                href: '/writing',
                                label: 'Writing',
                                key: 'writing'
                            }
                        ].map(({ href, label, key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    style: {
                                        color: activePage === key ? 'var(--text)' : 'var(--text-3)',
                                        fontWeight: activePage === key ? 600 : 500,
                                        transition: 'color 0.2s'
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, key, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                style: {
                                    color: 'var(--blue)',
                                    padding: '8px 18px',
                                    border: '1.5px solid var(--blue)',
                                    borderRadius: 100,
                                    transition: 'background 0.2s, color 0.2s',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                },
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Nav.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ReadingProgress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ReadingProgress() {
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = ()=>{
            const d = document.documentElement;
            setWidth(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100);
        };
        window.addEventListener('scroll', handler, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'var(--blue)',
            width: width + '%',
            zIndex: 300,
            transition: 'width 0.1s linear'
        }
    }, void 0, false, {
        fileName: "[project]/components/ReadingProgress.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ArticleNewsletterCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleNewsletterCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ArticleNewsletterCTA() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const submit = (e)=>{
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('err');
            return;
        }
        // Swap for Beehiiv fetch() when ready
        setStatus('ok');
        setDone(true);
        setEmail('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '40px 44px',
            marginTop: 64,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--blue)',
                            marginBottom: 10
                        },
                        children: "Enjoyed this?"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            color: 'var(--text)',
                            marginBottom: 8
                        },
                        children: "Get the next essay in your inbox."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.85rem',
                            color: 'var(--text-3)',
                            lineHeight: 1.6,
                            margin: 0
                        },
                        children: "One essay a month on performance marketing and growth systems. No fluff."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    status === 'ok' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: '0.82rem',
                            color: '#16a34a'
                        },
                        children: "You're on the list — first issue coming soon."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    status === 'err' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: '0.82rem',
                            color: 'var(--red)'
                        },
                        children: "Please enter a valid email address."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                style: {
                    display: 'flex',
                    gap: 10,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "your@email.com",
                        disabled: done,
                        style: {
                            background: 'var(--bg)',
                            border: '1.5px solid var(--border)',
                            borderRadius: 8,
                            color: 'var(--text)',
                            fontFamily: 'var(--sans)',
                            fontSize: '0.88rem',
                            padding: '12px 16px',
                            outline: 'none',
                            width: 220
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: done,
                        style: {
                            fontFamily: 'var(--sans)',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            padding: '12px 20px',
                            borderRadius: 8,
                            background: done ? 'var(--text-4)' : 'var(--blue)',
                            color: '#fff',
                            border: 'none',
                            cursor: done ? 'default' : 'pointer',
                            whiteSpace: 'nowrap'
                        },
                        children: done ? 'Subscribed ✓' : 'Subscribe →'
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/articles/ROASTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ROASTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const WEEKS = [
    {
        label: 'Wk 1–2',
        pills: [
            {
                text: 'Spend doubled',
                color: 'blue'
            },
            {
                text: 'New creatives live',
                color: 'blue'
            },
            {
                text: 'Team is excited',
                color: 'gray'
            }
        ],
        roasWidth: 76,
        roasValue: '3.8x → 4.0x ↑',
        roasColor: 'var(--blue)',
        signal: '↳ Hidden signal: nCAC starting to creep up. No one checks.',
        signalColor: 'var(--text-3)'
    },
    {
        label: 'Wk 3–4',
        pills: [
            {
                text: 'New CAC up 28%',
                color: 'amber'
            },
            {
                text: 'Coupon-driven orders spike',
                color: 'amber'
            },
            {
                text: 'Revenue looks great',
                color: 'gray'
            }
        ],
        roasWidth: 82,
        roasValue: '4.1x ↑ (still green)',
        roasColor: 'var(--blue)',
        signal: '↳ Hidden signal: 30-day repeat rate for this cohort: 21%. Organic cohort sits at 62%. Nobody\'s looking.',
        signalColor: 'var(--red)'
    },
    {
        label: 'Wk 5',
        pills: [
            {
                text: 'Repeat rate drops',
                color: 'red'
            },
            {
                text: 'LTV cohort diverges',
                color: 'red'
            },
            {
                text: 'CS tickets up 35%',
                color: 'amber'
            }
        ],
        roasWidth: 82,
        roasValue: '4.1x (still green)',
        roasColor: 'var(--blue)',
        signal: '↳ Hidden signal: Projected 12-month LTV has fallen ₹800 per customer. ROAS cannot see any of this.',
        signalColor: 'var(--red)'
    },
    {
        label: 'Wk 6',
        pills: [
            {
                text: 'Net profit compressed',
                color: 'red'
            },
            {
                text: '₹40L burned',
                color: 'red'
            },
            {
                text: 'ROAS finally dips',
                color: 'red'
            }
        ],
        roasWidth: 62,
        roasValue: '3.1x ↓ — the alarm rings 6 weeks late',
        roasColor: 'var(--red)',
        signal: '↳ ROAS finally signals the problem. By now ₹40L is gone and the damage is done.',
        signalColor: 'var(--red)',
        signalBold: true
    }
];
const PILL_STYLES = {
    blue: {
        background: 'var(--blue-light)',
        color: 'var(--blue)'
    },
    green: {
        background: '#dcfce7',
        color: '#15803d'
    },
    red: {
        background: '#fee2e2',
        color: 'var(--red)'
    },
    amber: {
        background: '#fef3c7',
        color: '#92400e'
    },
    gray: {
        background: 'var(--bg-card)',
        color: 'var(--text-3)'
    }
};
function ROASTimeline() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const week = WEEKS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 6
                },
                children: "Interactive · Kaaya's 6-week timeline"
            }, void 0, false, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.82rem',
                    color: 'var(--text-3)',
                    marginBottom: 24,
                    lineHeight: 1.5
                },
                children: "Click each week to see what was happening beneath the surface while ROAS showed green."
            }, void 0, false, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 4,
                    marginBottom: 24,
                    background: 'var(--bg-card)',
                    padding: 4,
                    borderRadius: 10,
                    border: '1px solid var(--border)'
                },
                children: WEEKS.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(i),
                        style: {
                            flex: 1,
                            padding: '9px 8px',
                            border: 'none',
                            borderRadius: 7,
                            background: active === i ? 'var(--bg)' : 'transparent',
                            fontFamily: 'var(--sans)',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: active === i ? 'var(--text)' : 'var(--text-3)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: active === i ? '0 1px 4px rgba(0,0,0,0.08)' : 'none'
                        },
                        children: w.label
                    }, i, false, {
                        fileName: "[project]/components/articles/ROASTimeline.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 18
                },
                children: week.pills.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '4px 12px',
                            borderRadius: 100,
                            ...PILL_STYLES[p.color]
                        },
                        children: p.text
                    }, i, false, {
                        fileName: "[project]/components/articles/ROASTimeline.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg-card)',
                    borderRadius: 8,
                    padding: '16px 20px',
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: 'var(--text-4)',
                            marginBottom: 10
                        },
                        children: "ROAS"
                    }, void 0, false, {
                        fileName: "[project]/components/articles/ROASTimeline.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 8,
                            background: 'var(--border)',
                            borderRadius: 100,
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                borderRadius: 100,
                                background: week.roasColor,
                                width: week.roasWidth + '%',
                                transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/articles/ROASTimeline.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/articles/ROASTimeline.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: week.roasColor
                        },
                        children: week.roasValue
                    }, void 0, false, {
                        fileName: "[project]/components/articles/ROASTimeline.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.82rem',
                    fontWeight: week.signalBold ? 700 : 500,
                    color: week.signalColor,
                    lineHeight: 1.5
                },
                children: week.signal
            }, void 0, false, {
                fileName: "[project]/components/articles/ROASTimeline.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/ROASTimeline.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/articles/MetricFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetricFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const METRICS = [
    {
        name: 'ROAS',
        type: 'lag',
        desc: 'Did revenue justify spend? Tells you what already happened — weeks or months after.'
    },
    {
        name: 'Revenue',
        type: 'lag',
        desc: 'How much money came in? A symptom, not a cause. Always reflects past decisions.'
    },
    {
        name: 'MoM Growth',
        type: 'lag',
        desc: 'How fast did we grow vs. last month? Useful for board decks, useless for daily decisions.'
    },
    {
        name: 'nCAC',
        type: 'lead',
        desc: 'What does it actually cost to acquire one net-new customer? Signals quality drift within 72h.'
    },
    {
        name: 'LTV : nCAC ratio',
        type: 'lead',
        desc: 'Are the customers you\'re buying worth more than you\'re paying? The single most important D2C ratio.'
    },
    {
        name: '30-day repeat rate',
        type: 'lead',
        desc: 'What % of new customers reorder within 30 days? The fastest cohort-quality signal available.'
    }
];
function MetricFilter() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 20
                },
                children: "Interactive · Filter by indicator type"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetricFilter.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 4,
                    marginBottom: 20,
                    background: 'var(--bg-card)',
                    padding: 4,
                    borderRadius: 10,
                    border: '1px solid var(--border)'
                },
                children: [
                    'all',
                    'lag',
                    'lead'
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(f),
                        style: {
                            flex: 1,
                            padding: '9px 12px',
                            border: 'none',
                            borderRadius: 7,
                            background: filter === f ? 'var(--bg)' : 'transparent',
                            fontFamily: 'var(--sans)',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: filter === f ? 'var(--text)' : 'var(--text-3)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: filter === f ? '0 1px 4px rgba(0,0,0,0.08)' : 'none'
                        },
                        children: f === 'all' ? 'All metrics' : f === 'lag' ? 'Lagging only' : 'Leading only'
                    }, f, false, {
                        fileName: "[project]/components/articles/MetricFilter.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/MetricFilter.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                },
                children: METRICS.map((m)=>{
                    const dimmed = filter !== 'all' && m.type !== filter;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '140px 1fr auto',
                            alignItems: 'center',
                            gap: 16,
                            padding: '16px 18px',
                            borderRadius: 8,
                            border: '1px solid var(--border)',
                            background: 'var(--bg)',
                            opacity: dimmed ? 0.15 : 1,
                            transform: dimmed ? 'scale(0.99)' : 'scale(1)',
                            transition: 'opacity 0.3s, transform 0.3s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.88rem',
                                    fontWeight: 700,
                                    color: 'var(--text)'
                                },
                                children: m.name
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetricFilter.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.82rem',
                                    color: 'var(--text-3)',
                                    lineHeight: 1.5
                                },
                                children: m.desc
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetricFilter.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    padding: '3px 10px',
                                    borderRadius: 100,
                                    whiteSpace: 'nowrap',
                                    background: m.type === 'lag' ? '#fee2e2' : '#dcfce7',
                                    color: m.type === 'lag' ? 'var(--red)' : 'var(--green)'
                                },
                                children: m.type === 'lag' ? 'Lagging' : 'Leading'
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetricFilter.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.name, true, {
                        fileName: "[project]/components/articles/MetricFilter.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/articles/MetricFilter.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetricFilter.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/articles/RatioCalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RatioCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function RatioCalculator() {
    const [ltv, setLtv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3000);
    const [cac, setCac] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000);
    const ratio = ltv / cac;
    const r = ratio.toFixed(1);
    const verdict = ratio >= 3 ? {
        text: '✓ Healthy — safe to scale',
        bg: '#dcfce7',
        color: 'var(--green)',
        border: '#86efac',
        numColor: 'var(--green)',
        dispBg: 'var(--green-light)'
    } : ratio >= 2 ? {
        text: '⚠ Borderline — fix before scaling',
        bg: '#fef3c7',
        color: '#92400e',
        border: '#fcd34d',
        numColor: 'var(--amber)',
        dispBg: '#fffbeb'
    } : {
        text: '✗ Danger — buying revenue at a loss',
        bg: '#fee2e2',
        color: 'var(--red)',
        border: '#fca5a5',
        numColor: 'var(--red)',
        dispBg: 'var(--red-light)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 6
                },
                children: "Interactive · LTV : nCAC calculator"
            }, void 0, false, {
                fileName: "[project]/components/articles/RatioCalculator.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.82rem',
                    color: 'var(--text-3)',
                    marginBottom: 24,
                    lineHeight: 1.5
                },
                children: "Drag the sliders to see your ratio and the verdict it triggers."
            }, void 0, false, {
                fileName: "[project]/components/articles/RatioCalculator.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 20,
                    marginBottom: 24
                },
                children: [
                    {
                        label: '12-month LTV (₹)',
                        value: ltv,
                        min: 500,
                        max: 8000,
                        step: 100,
                        set: setLtv
                    },
                    {
                        label: 'Net CAC (₹)',
                        value: cac,
                        min: 200,
                        max: 5000,
                        step: 50,
                        set: setCac
                    }
                ].map(({ label, value, min, max, step, set })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: 'block',
                                    fontSize: '0.68rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-3)',
                                    marginBottom: 10
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/RatioCalculator.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: min,
                                max: max,
                                value: value,
                                step: step,
                                onChange: (e)=>set(+e.target.value),
                                style: {
                                    width: '100%',
                                    accentColor: 'var(--blue)',
                                    cursor: 'pointer'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/articles/RatioCalculator.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '1.4rem',
                                    fontWeight: 800,
                                    color: 'var(--text)',
                                    marginTop: 6,
                                    display: 'inline-block',
                                    letterSpacing: '-0.02em'
                                },
                                children: [
                                    "₹",
                                    value.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/articles/RatioCalculator.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/components/articles/RatioCalculator.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/RatioCalculator.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: verdict.dispBg,
                    borderRadius: 12,
                    padding: 28,
                    textAlign: 'center',
                    border: `2px solid ${verdict.border}`,
                    transition: 'all 0.3s'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                            marginBottom: 6,
                            color: verdict.numColor,
                            transition: 'color 0.3s'
                        },
                        children: [
                            r,
                            "x"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/RatioCalculator.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.78rem',
                            color: 'var(--text-4)',
                            marginBottom: 14
                        },
                        children: "LTV : nCAC ratio"
                    }, void 0, false, {
                        fileName: "[project]/components/articles/RatioCalculator.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            padding: '8px 20px',
                            borderRadius: 100,
                            background: verdict.bg,
                            color: verdict.color,
                            display: 'inline-block',
                            transition: 'all 0.3s'
                        },
                        children: verdict.text
                    }, void 0, false, {
                        fileName: "[project]/components/articles/RatioCalculator.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/RatioCalculator.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/RatioCalculator.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/articles/CohortVisualiser.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CohortVisualiser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const COHORTS = {
    organic: {
        label: '🌱 Organic / Referral',
        sub: 'Word of mouth, organic social',
        rows: [
            {
                label: 'Acquired',
                width: 100,
                text: '100 customers',
                pct: '100%'
            },
            {
                label: '30d repeat',
                width: 62,
                text: '62 customers',
                pct: '62%'
            },
            {
                label: '90d repeat',
                width: 48,
                text: '48 customers',
                pct: '48%'
            }
        ],
        color: 'var(--blue)',
        tabActive: 'act-blue',
        insight: {
            bold: 'Organic cohort:',
            text: ' Strong repeat rates. Projected LTV:nCAC ≈ 4.8x. This is the customer profile worth scaling into.',
            bg: 'var(--blue-light)',
            border: 'var(--border)',
            color: 'var(--text-2)'
        }
    },
    paid: {
        label: '📢 Paid / Discount',
        sub: 'Q3 scale-up creatives',
        rows: [
            {
                label: 'Acquired',
                width: 100,
                text: '100 customers',
                pct: '100%'
            },
            {
                label: '30d repeat',
                width: 21,
                text: '21 customers',
                pct: '21%'
            },
            {
                label: '90d repeat',
                width: 11,
                text: '11 customers',
                pct: '11%'
            }
        ],
        color: 'var(--red)',
        tabActive: 'act-red',
        insight: {
            bold: 'Paid / Discount cohort:',
            text: ' Collapse after first order. Projected LTV:nCAC ≈ 1.6x. This cohort quietly destroyed the brand\'s margins at scale.',
            bg: 'var(--red-light)',
            border: '#fecaca',
            color: '#7f1d1d'
        }
    }
};
function CohortVisualiser() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('organic');
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [widths, setWidths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnimated(false);
        setWidths([
            0,
            0,
            0
        ]);
        const t = setTimeout(()=>{
            setAnimated(true);
            setWidths(COHORTS[active].rows.map((r)=>r.width));
        }, 80);
        return ()=>clearTimeout(t);
    }, [
        active
    ]);
    const cohort = COHORTS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 6
                },
                children: "Interactive · 90-day repeat rate by cohort"
            }, void 0, false, {
                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.82rem',
                    color: 'var(--text-3)',
                    marginBottom: 24,
                    lineHeight: 1.5
                },
                children: "Toggle between cohorts to see how customer quality diverges over 90 days."
            }, void 0, false, {
                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    marginBottom: 24
                },
                children: Object.keys(COHORTS).map((key)=>{
                    const c = COHORTS[key];
                    const isActive = active === key;
                    const borderColor = isActive ? key === 'organic' ? 'var(--blue)' : 'var(--red)' : 'var(--border)';
                    const bg = isActive ? key === 'organic' ? 'var(--blue-light)' : 'var(--red-light)' : 'var(--bg)';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(key),
                        style: {
                            flex: 1,
                            padding: 16,
                            borderRadius: 10,
                            border: `1.5px solid ${borderColor}`,
                            background: bg,
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.2s',
                            fontFamily: 'var(--sans)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.88rem',
                                    fontWeight: 700,
                                    color: 'var(--text)',
                                    marginBottom: 3
                                },
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: 'var(--text-3)'
                                },
                                children: c.sub
                            }, void 0, false, {
                                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/components/articles/CohortVisualiser.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14
                },
                children: cohort.rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '110px 1fr 52px',
                            alignItems: 'center',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.82rem',
                                    color: 'var(--text-2)',
                                    fontWeight: 500
                                },
                                children: row.label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 36,
                                    background: 'var(--bg-card)',
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        borderRadius: 8,
                                        width: widths[i] + '%',
                                        background: cohort.color,
                                        transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: 12,
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        whiteSpace: 'nowrap'
                                    },
                                    children: widths[i] > 20 ? row.text : ''
                                }, void 0, false, {
                                    fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.95rem',
                                    fontWeight: 800,
                                    color: 'var(--text)'
                                },
                                children: row.pct
                            }, void 0, false, {
                                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, row.label, true, {
                        fileName: "[project]/components/articles/CohortVisualiser.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    padding: '14px 18px',
                    borderRadius: 8,
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    border: `1px solid ${cohort.insight.border}`,
                    background: cohort.insight.bg,
                    color: cohort.insight.color,
                    transition: 'all 0.3s'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: cohort.insight.bold
                    }, void 0, false, {
                        fileName: "[project]/components/articles/CohortVisualiser.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    cohort.insight.text
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/CohortVisualiser.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/CohortVisualiser.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a0d0895._.js.map