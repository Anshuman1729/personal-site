(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Nav({ activePage }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const handler = {
                "Nav.useEffect.handler": ()=>setScrolled(window.scrollY > 60)
            }["Nav.useEffect.handler"];
            window.addEventListener('scroll', handler, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('scroll', handler)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
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
                                href: '/work-with-me',
                                label: 'Work With Me',
                                key: 'work-with-me'
                            },
                            {
                                href: '/writing',
                                label: 'Writing',
                                key: 'writing'
                            }
                        ].map(({ href, label, key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    style: {
                                        color: activePage === key ? 'var(--text)' : 'var(--text-3)',
                                        fontWeight: activePage === key ? 600 : 500,
                                        transition: 'color 0.2s'
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, key, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 53,
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
_s(Nav, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReadingProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ReadingProgress() {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadingProgress.useEffect": ()=>{
            const handler = {
                "ReadingProgress.useEffect.handler": ()=>{
                    const d = document.documentElement;
                    setWidth(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100);
                }
            }["ReadingProgress.useEffect.handler"];
            window.addEventListener('scroll', handler, {
                passive: true
            });
            return ({
                "ReadingProgress.useEffect": ()=>window.removeEventListener('scroll', handler)
            })["ReadingProgress.useEffect"];
        }
    }["ReadingProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ReadingProgress, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");
_c = ReadingProgress;
var _c;
__turbopack_context__.k.register(_c, "ReadingProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ArticleNewsletterCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleNewsletterCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ArticleNewsletterCTA() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errMsg, setErrMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const submit = async (e)=>{
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrMsg('Please enter a valid email address.');
            setStatus('err');
            return;
        }
        setStatus('loading');
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('ok');
                setEmail('');
            } else {
                setErrMsg(data?.error ?? 'Something went wrong. Please try again.');
                setStatus('err');
            }
        } catch  {
            setErrMsg('Network error. Please try again.');
            setStatus('err');
        }
    };
    const done = status === 'ok';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.85rem',
                            color: 'var(--text-3)',
                            lineHeight: 1.6,
                            margin: 0
                        },
                        children: "One essay a month on performance marketing and growth systems. No fluff."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    status === 'ok' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: '0.82rem',
                            color: '#16a34a'
                        },
                        children: "You are on the list — first issue coming soon."
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 41,
                        columnNumber: 29
                    }, this),
                    status === 'err' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: '0.82rem',
                            color: 'var(--red)'
                        },
                        children: errMsg
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 42,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                style: {
                    display: 'flex',
                    gap: 10,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "your@email.com",
                        disabled: done || status === 'loading',
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
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: done || status === 'loading',
                        style: {
                            fontFamily: 'var(--sans)',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            padding: '12px 20px',
                            borderRadius: 8,
                            background: done ? 'var(--text-4)' : 'var(--blue)',
                            color: '#fff',
                            border: 'none',
                            cursor: done || status === 'loading' ? 'default' : 'pointer',
                            whiteSpace: 'nowrap',
                            opacity: status === 'loading' ? 0.7 : 1
                        },
                        children: done ? 'Subscribed' : status === 'loading' ? 'Subscribing...' : 'Subscribe'
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleNewsletterCTA.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArticleNewsletterCTA.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ArticleNewsletterCTA, "ogzj8P7F8qnXv182cARMXoyoMW0=");
_c = ArticleNewsletterCTA;
var _c;
__turbopack_context__.k.register(_c, "ArticleNewsletterCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/ROASTimeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ROASTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const week = WEEKS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 4,
                    marginBottom: 24,
                    background: 'var(--bg-card)',
                    padding: 4,
                    borderRadius: 10,
                    border: '1px solid var(--border)'
                },
                children: WEEKS.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 18
                },
                children: week.pills.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg-card)',
                    borderRadius: 8,
                    padding: '16px 20px',
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 8,
                            background: 'var(--border)',
                            borderRadius: 100,
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ROASTimeline, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = ROASTimeline;
var _c;
__turbopack_context__.k.register(_c, "ROASTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/MetricFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetricFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                },
                children: METRICS.map((m)=>{
                    const dimmed = filter !== 'all' && m.type !== filter;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(MetricFilter, "W/UjwQokI5qYZ80z+yO8skpbfNg=");
_c = MetricFilter;
var _c;
__turbopack_context__.k.register(_c, "MetricFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/RatioCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RatioCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RatioCalculator() {
    _s();
    const [ltv, setLtv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3000);
    const [cac, setCac] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map(({ label, value, min, max, step, set })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: verdict.dispBg,
                    borderRadius: 12,
                    padding: 28,
                    textAlign: 'center',
                    border: `2px solid ${verdict.border}`,
                    transition: 'all 0.3s'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(RatioCalculator, "UwhEfz9fExWmJd7Aw/X7WpugAsU=");
_c = RatioCalculator;
var _c;
__turbopack_context__.k.register(_c, "RatioCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/CohortVisualiser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CohortVisualiser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('organic');
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [widths, setWidths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CohortVisualiser.useEffect": ()=>{
            setAnimated(false);
            setWidths([
                0,
                0,
                0
            ]);
            const t = setTimeout({
                "CohortVisualiser.useEffect.t": ()=>{
                    setAnimated(true);
                    setWidths(COHORTS[active].rows.map({
                        "CohortVisualiser.useEffect.t": (r)=>r.width
                    }["CohortVisualiser.useEffect.t"]));
                }
            }["CohortVisualiser.useEffect.t"], 80);
            return ({
                "CohortVisualiser.useEffect": ()=>clearTimeout(t)
            })["CohortVisualiser.useEffect"];
        }
    }["CohortVisualiser.useEffect"], [
        active
    ]);
    const cohort = COHORTS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 32,
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14
                },
                children: cohort.rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '110px 1fr 52px',
                            alignItems: 'center',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 36,
                                    background: 'var(--bg-card)',
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
_s(CohortVisualiser, "Fw1WxeB7xbsumaDw6QXH2S2h5Pw=");
_c = CohortVisualiser;
var _c;
__turbopack_context__.k.register(_c, "CohortVisualiser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/Callout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Callout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Callout({ variant = 'default', children }) {
    const isWarning = variant === 'warning';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: isWarning ? '#fffbeb' : 'var(--blue-light)',
            borderLeft: `3px solid ${isWarning ? '#f59e0b' : 'var(--blue)'}`,
            borderRadius: '0 8px 8px 0',
            padding: '20px 24px',
            margin: '32px 0',
            fontSize: '0.95rem',
            color: isWarning ? '#92400e' : 'var(--text-2)',
            lineHeight: 1.7
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/articles/Callout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Callout;
var _c;
__turbopack_context__.k.register(_c, "Callout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/BeforeAfter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeforeAfter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function BeforeAfter({ before, after }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            margin: '40px 0'
        },
        children: [
            {
                side: before,
                color: 'var(--red)',
                bg: '#fff5f5',
                badge: 'Before'
            },
            {
                side: after,
                color: 'var(--green)',
                bg: '#f0fdf4',
                badge: 'After'
            }
        ].map(({ side, color, bg, badge })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg)',
                    padding: '32px 28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color,
                                    background: bg,
                                    padding: '4px 10px',
                                    borderRadius: 100
                                },
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/components/articles/BeforeAfter.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.88rem',
                                    fontWeight: 700,
                                    color: 'var(--text)'
                                },
                                children: side.label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/BeforeAfter.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/BeforeAfter.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        },
                        children: side.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    fontSize: '0.85rem',
                                    color: 'var(--text-2)',
                                    lineHeight: 1.55
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color,
                                            fontWeight: 700,
                                            flexShrink: 0,
                                            marginTop: 1
                                        },
                                        children: badge === 'Before' ? '✕' : '✓'
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/BeforeAfter.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this),
                                    item
                                ]
                            }, i, true, {
                                fileName: "[project]/components/articles/BeforeAfter.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/articles/BeforeAfter.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, badge, true, {
                fileName: "[project]/components/articles/BeforeAfter.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/articles/BeforeAfter.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = BeforeAfter;
var _c;
__turbopack_context__.k.register(_c, "BeforeAfter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/Chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chart
]);
'use client';
function Chart() {
    return null;
}
_c = Chart;
var _c;
__turbopack_context__.k.register(_c, "Chart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/articles/MetaSegmentationCharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditCalculator",
    ()=>AuditCalculator,
    "CreativePerformanceChart",
    ()=>CreativePerformanceChart,
    "LearningPhaseChart",
    ()=>LearningPhaseChart,
    "ResultsComparison",
    ()=>ResultsComparison,
    "SegmentationBeforeAfter",
    ()=>SegmentationBeforeAfter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
'use client';
;
// ── Shared: animated bar hook
function useCountUp(target, duration = 900, trigger) {
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!trigger) return;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval({
                "useCountUp.useEffect.timer": ()=>{
                    start += step;
                    if (start >= target) {
                        setVal(target);
                        clearInterval(timer);
                    } else setVal(Math.round(start));
                }
            }["useCountUp.useEffect.timer"], 16);
            return ({
                "useCountUp.useEffect": ()=>clearInterval(timer)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        trigger,
        target,
        duration
    ]);
    return val;
}
_s(useCountUp, "J9W7PNt/cWQtiNkcKYTpkMkMUx4=");
function useInView(ref) {
    _s1();
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        io.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold: 0.2
            });
            io.observe(el);
            return ({
                "useInView.useEffect": ()=>io.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], []);
    return inView;
}
_s1(useInView, "rykVwRgl7aPMRtEuUWD6RY+y4KQ=");
function LearningPhaseChart() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref);
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const data = [
        {
            label: 'Ad set 1',
            value: 68,
            below: false
        },
        {
            label: 'Ad set 2',
            value: 54,
            below: false
        },
        {
            label: 'Ad set 3',
            value: 47,
            below: true
        },
        {
            label: 'Ad set 4',
            value: 38,
            below: true
        },
        {
            label: 'Ad set 5',
            value: 31,
            below: true
        },
        {
            label: 'Ad set 6',
            value: 29,
            below: true
        },
        {
            label: 'Ad set 7',
            value: 22,
            below: true
        },
        {
            label: 'Ad set 8',
            value: 19,
            below: true
        },
        {
            label: 'Ad set 9',
            value: 17,
            below: true
        },
        {
            label: 'Ad set 10',
            value: 14,
            below: true
        },
        {
            label: 'Sets 11-23',
            value: 8,
            below: true
        }
    ];
    const threshold = 50;
    const max = 68 * 1.15;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '28px 32px',
            margin: '40px 0',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 4
                },
                children: "Weekly purchase events per ad set — Fortis Fuel"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.7rem',
                    color: 'var(--text-4)',
                    marginBottom: 16,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                },
                children: "Purchase events / week · hover bars for detail"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 6,
                    height: 200,
                    paddingBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 32 + threshold / max * 168,
                            borderTop: '2px dashed var(--red)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: 'absolute',
                                right: 0,
                                top: -18,
                                fontSize: '0.62rem',
                                color: 'var(--red)',
                                fontWeight: 700,
                                background: 'var(--bg-off)',
                                padding: '0 6px',
                                whiteSpace: 'nowrap'
                            },
                            children: "Exit learning threshold (50 events)"
                        }, void 0, false, {
                            fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    data.map((d, i)=>{
                        const targetH = d.value / max * 168;
                        const h = inView ? targetH : 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: '100%',
                                position: 'relative',
                                cursor: 'pointer'
                            },
                            onMouseEnter: (e)=>setTooltip({
                                    i,
                                    x: e.currentTarget.getBoundingClientRect().left,
                                    y: e.currentTarget.getBoundingClientRect().top
                                }),
                            onMouseLeave: ()=>setTooltip(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '100%',
                                        height: h,
                                        background: d.below ? '#fee2e2' : '#dcfce7',
                                        borderRadius: '4px 4px 0 0',
                                        border: `1.5px solid ${d.below ? 'var(--red)' : 'var(--green)'}`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'height 0.8s cubic-bezier(0.16,1,0.3,1)',
                                        transitionDelay: `${i * 60}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '40%',
                                                background: d.below ? 'var(--red)' : 'var(--green)',
                                                opacity: 0.2
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        tooltip?.i === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: '105%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: 'var(--text)',
                                                color: 'var(--bg)',
                                                fontSize: '0.72rem',
                                                fontWeight: 700,
                                                padding: '6px 10px',
                                                borderRadius: 6,
                                                whiteSpace: 'nowrap',
                                                zIndex: 10,
                                                pointerEvents: 'none'
                                            },
                                            children: [
                                                d.label,
                                                ": ",
                                                d.value,
                                                " events",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: 2,
                                                        fontSize: '0.62rem',
                                                        fontWeight: 400,
                                                        color: d.below ? '#fca5a5' : '#86efac'
                                                    },
                                                    children: d.below ? 'Stuck in learning' : 'Exiting learning'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        bottom: -4,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 8,
                                                        height: 8,
                                                        background: 'var(--text)',
                                                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: 0,
                                        fontSize: '0.55rem',
                                        color: 'var(--text-4)',
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        padding: '0 1px'
                                    },
                                    children: d.label
                                }, void 0, false, {
                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 16,
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.72rem',
                            color: 'var(--text-3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: 2,
                                    background: 'var(--green)',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            "Exiting learning (2 of 23)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.72rem',
                            color: 'var(--text-3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: 2,
                                    background: 'var(--red)',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            "Stuck in learning (21 of 23)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s2(LearningPhaseChart, "eTA8QzAJsVsKEHlS2ZQrp8yjYzw=", false, function() {
    return [
        useInView
    ];
});
_c = LearningPhaseChart;
function CreativePerformanceChart() {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref);
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const data = [
        {
            label: 'Hook A',
            sublabel: 'Men 22-30, gym-goers',
            value: 43
        },
        {
            label: 'Hook B',
            sublabel: 'Women 25-38, fitness',
            value: 31
        },
        {
            label: 'Hook C',
            sublabel: 'Mixed, 28-42',
            value: 26
        }
    ];
    const max = 43 * 1.2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '28px 32px',
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    marginBottom: 4
                },
                children: "Creative performance inside Broad ad set — week 4 post-consolidation"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.7rem',
                    color: 'var(--text-4)',
                    marginBottom: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                },
                children: "% of ad set conversions · hover to see audience segment"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 32,
                    height: 180,
                    paddingBottom: 44
                },
                children: data.map((d, i)=>{
                    const targetH = d.value / max * 136;
                    const h = inView ? targetH : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            height: '100%',
                            position: 'relative',
                            cursor: 'pointer'
                        },
                        onMouseEnter: ()=>setTooltip(i),
                        onMouseLeave: ()=>setTooltip(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    color: 'var(--blue)',
                                    marginBottom: 6,
                                    transition: 'transform 0.2s',
                                    transform: tooltip === i ? 'scale(1.15)' : 'scale(1)'
                                },
                                children: [
                                    d.value,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '100%',
                                    height: h,
                                    background: tooltip === i ? 'var(--blue)' : 'var(--blue-light)',
                                    borderRadius: '6px 6px 0 0',
                                    border: '1.5px solid var(--blue)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'height 0.9s cubic-bezier(0.16,1,0.3,1), background 0.2s',
                                    transitionDelay: `${i * 100}ms`
                                },
                                children: tooltip === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(0,0,0,0.7)',
                                            color: '#fff',
                                            fontSize: '0.65rem',
                                            padding: '6px 10px',
                                            borderRadius: 6,
                                            textAlign: 'center',
                                            lineHeight: 1.4
                                        },
                                        children: d.sublabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 146,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 0,
                                    textAlign: 'center',
                                    lineHeight: 1.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        },
                                        children: d.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.62rem',
                                            color: 'var(--text-4)'
                                        },
                                        children: d.sublabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.78rem',
                    color: 'var(--text-3)',
                    lineHeight: 1.5,
                    fontStyle: 'italic'
                },
                children: "Meta self-selected distinct audience pockets for each hook — no separate ad sets needed."
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s3(CreativePerformanceChart, "eTA8QzAJsVsKEHlS2ZQrp8yjYzw=", false, function() {
    return [
        useInView
    ];
});
_c1 = CreativePerformanceChart;
function ResultsComparison() {
    _s4();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('before');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref);
    const rows = [
        {
            metric: 'Active ad sets',
            before: 23,
            after: 4,
            unit: '',
            lowerBetter: true
        },
        {
            metric: 'Ad sets in learning',
            before: 19,
            after: 0,
            unit: '',
            lowerBetter: true
        },
        {
            metric: 'Avg CPM',
            before: 312,
            after: 198,
            unit: '₹',
            lowerBetter: true
        },
        {
            metric: 'Weekly purchases',
            before: 184,
            after: 441,
            unit: '',
            lowerBetter: false
        },
        {
            metric: 'Blended ROAS',
            before: 2.9,
            after: 3.8,
            unit: 'x',
            lowerBetter: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '28px 32px',
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    flexWrap: 'wrap',
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--text-4)'
                        },
                        children: "Fortis Fuel — 6 weeks after consolidation"
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 1,
                            background: 'var(--border)',
                            borderRadius: 8,
                            overflow: 'hidden'
                        },
                        children: [
                            'before',
                            'after'
                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView(v),
                                style: {
                                    padding: '8px 18px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    background: view === v ? v === 'before' ? 'var(--red)' : 'var(--green)' : 'var(--bg)',
                                    color: view === v ? '#fff' : 'var(--text-3)',
                                    transition: 'all 0.2s',
                                    textTransform: 'capitalize'
                                },
                                children: v
                            }, v, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    background: 'var(--border)',
                    borderRadius: 8,
                    overflow: 'hidden'
                },
                children: rows.map((row, i)=>{
                    const val = view === 'before' ? row.before : row.after;
                    const improved = row.lowerBetter ? row.after < row.before : row.after > row.before;
                    const pct = Math.round(Math.abs((row.after - row.before) / row.before) * 100);
                    const barMax = row.lowerBetter ? row.before : row.after;
                    const barWidth = inView ? val / barMax * 100 : 0;
                    const barColor = view === 'before' ? 'var(--red)' : improved ? 'var(--green)' : 'var(--red)';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg)',
                            padding: '16px 16px 12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.88rem',
                                            fontWeight: 600,
                                            color: 'var(--text)'
                                        },
                                        children: row.metric
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '1rem',
                                                    fontWeight: 800,
                                                    color: view === 'before' ? 'var(--red)' : 'var(--green)',
                                                    transition: 'color 0.3s'
                                                },
                                                children: [
                                                    row.unit === '₹' ? '₹' : '',
                                                    val,
                                                    row.unit !== '₹' ? row.unit : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this),
                                            view === 'after' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.65rem',
                                                    fontWeight: 700,
                                                    padding: '2px 7px',
                                                    borderRadius: 100,
                                                    background: improved ? '#dcfce7' : '#fee2e2',
                                                    color: improved ? 'var(--green)' : 'var(--red)'
                                                },
                                                children: [
                                                    improved ? '+' : '-',
                                                    pct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 4,
                                    background: 'var(--border)',
                                    borderRadius: 2,
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        width: barWidth + '%',
                                        background: barColor,
                                        borderRadius: 2,
                                        transition: 'width 0.7s cubic-bezier(0.16,1,0.3,1), background 0.3s',
                                        transitionDelay: `${i * 80}ms`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.75rem',
                    color: 'var(--text-4)',
                    marginTop: 12,
                    textAlign: 'center'
                },
                children: "Toggle between before and after to see the full impact"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s4(ResultsComparison, "EHNKIgQRGY+SUocxvaU4/DHxhrE=", false, function() {
    return [
        useInView
    ];
});
_c2 = ResultsComparison;
function SegmentationBeforeAfter() {
    _s5();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('before');
    const before = {
        label: "The segmentation trap",
        items: [
            "23 ad sets, each targeting a narrow slice",
            "Same creative running in most ad sets",
            "Budget fragmented — median ₹800/day per ad set",
            "19 of 23 ad sets stuck in learning phase",
            "CPM ₹312 — 60% above category benchmark",
            "Delivery erratic, scaling impossible"
        ]
    };
    const after = {
        label: "Consolidated structure",
        items: [
            "4 ad sets — broad, LAL, retargeting 7d, retargeting 30d",
            "5–6 creative variants per ad set, differentiated by hook",
            "Budget consolidated — ₹4,500/day per ad set minimum",
            "All 4 ad sets exiting learning within 10 days",
            "CPM ₹198 — within category benchmark",
            "Delivery stable, scaled spend 2.4x in 6 weeks"
        ]
    };
    const active = view === 'before' ? before : after;
    const color = view === 'before' ? 'var(--red)' : 'var(--green)';
    const bg = view === 'before' ? '#fee2e2' : '#dcfce7';
    const icon = view === 'before' ? '✕' : '✓';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 0,
                    background: 'var(--bg-off)',
                    borderBottom: '1px solid var(--border)'
                },
                children: [
                    'before',
                    'after'
                ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setView(v),
                        style: {
                            flex: 1,
                            padding: '14px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            background: view === v ? v === 'before' ? 'var(--red)' : 'var(--green)' : 'transparent',
                            color: view === v ? '#fff' : 'var(--text-4)',
                            transition: 'all 0.25s',
                            textTransform: 'capitalize',
                            letterSpacing: '0.04em'
                        },
                        children: v === 'before' ? 'Before — The trap' : 'After — Consolidated'
                    }, v, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg)',
                    padding: '28px 32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color,
                                    background: bg,
                                    padding: '4px 10px',
                                    borderRadius: 100
                                },
                                children: view
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.92rem',
                                    fontWeight: 700,
                                    color: 'var(--text)'
                                },
                                children: active.label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: active.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 12,
                                    fontSize: '0.88rem',
                                    color: 'var(--text-2)',
                                    lineHeight: 1.6,
                                    animation: 'fadeIn 0.3s ease'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color,
                                            fontWeight: 700,
                                            flexShrink: 0,
                                            marginTop: 2,
                                            fontSize: '0.9rem'
                                        },
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, i, true, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s5(SegmentationBeforeAfter, "K418GdU8voFT1rhZn4mnWggTGn8=");
_c3 = SegmentationBeforeAfter;
function AuditCalculator() {
    _s6();
    const [cpa, setCpa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(650);
    const [adSets, setAdSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [dailyBudget, setDailyBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10000);
    const minBudgetPerAdSet = Math.round(cpa * 50 / 7);
    const totalNeeded = minBudgetPerAdSet * adSets;
    const affordable = Math.floor(dailyBudget / minBudgetPerAdSet);
    const stuck = Math.max(0, adSets - affordable);
    const overBudget = totalNeeded > dailyBudget;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-off)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '28px 32px',
            margin: '40px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--blue)',
                    marginBottom: 4
                },
                children: "Live Audit Calculator"
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.88rem',
                    color: 'var(--text-3)',
                    marginBottom: 28,
                    lineHeight: 1.5
                },
                children: "Enter your numbers to see how many of your ad sets are stuck in learning."
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: 20,
                    marginBottom: 28
                },
                children: [
                    {
                        label: 'Your avg CPA (₹)',
                        value: cpa,
                        setter: setCpa,
                        min: 100,
                        max: 5000,
                        step: 50
                    },
                    {
                        label: 'Active ad sets',
                        value: adSets,
                        setter: setAdSets,
                        min: 1,
                        max: 50,
                        step: 1
                    },
                    {
                        label: 'Daily budget (₹)',
                        value: dailyBudget,
                        setter: setDailyBudget,
                        min: 1000,
                        max: 200000,
                        step: 1000
                    }
                ].map(({ label, value, setter, min, max, step })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-4)',
                                    display: 'block',
                                    marginBottom: 8
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: min,
                                max: max,
                                step: step,
                                value: value,
                                onChange: (e)=>setter(Number(e.target.value)),
                                style: {
                                    width: '100%',
                                    accentColor: 'var(--blue)',
                                    cursor: 'pointer'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    color: 'var(--text)',
                                    marginTop: 4
                                },
                                children: [
                                    label.includes('₹') || label.includes('budget') ? '₹' : '',
                                    value.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: 1,
                    background: 'var(--border)',
                    borderRadius: 8,
                    overflow: 'hidden',
                    marginBottom: 20
                },
                children: [
                    {
                        label: 'Min budget per ad set',
                        value: `₹${minBudgetPerAdSet.toLocaleString()}/day`,
                        sub: 'to exit learning in 7 days',
                        warn: false
                    },
                    {
                        label: 'Ad sets you can fund',
                        value: `${affordable} of ${adSets}`,
                        sub: 'at current budget',
                        warn: overBudget
                    },
                    {
                        label: 'Stuck in learning',
                        value: `${stuck} ad sets`,
                        sub: stuck > 0 ? 'burning budget inefficiently' : 'all funded',
                        warn: stuck > 0
                    }
                ].map(({ label, value, sub, warn })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: warn ? '#fff5f5' : 'var(--bg)',
                            padding: '20px 20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-4)',
                                    marginBottom: 6
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1.3rem',
                                    fontWeight: 800,
                                    color: warn ? 'var(--red)' : 'var(--green)',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1
                                },
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.72rem',
                                    color: 'var(--text-4)',
                                    marginTop: 4
                                },
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            overBudget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#fff5f5',
                    border: '1px solid #fca5a5',
                    borderRadius: 8,
                    padding: '14px 18px',
                    fontSize: '0.85rem',
                    color: '#991b1b',
                    lineHeight: 1.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "You have too many ad sets."
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    " At your current CPA and budget, you can only properly fund ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            affordable,
                            " ad sets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 348,
                        columnNumber: 114
                    }, this),
                    ". The other ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: stuck
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 348,
                        columnNumber: 163
                    }, this),
                    " will be stuck in learning — wasting spend without converging. Consider consolidating to ",
                    affordable,
                    " ad sets maximum."
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#f0fdf4',
                    border: '1px solid #86efac',
                    borderRadius: 8,
                    padding: '14px 18px',
                    fontSize: '0.85rem',
                    color: '#166534',
                    lineHeight: 1.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Your structure looks fundable."
                    }, void 0, false, {
                        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    " At ₹",
                    minBudgetPerAdSet.toLocaleString(),
                    "/day per ad set, your ₹",
                    dailyBudget.toLocaleString(),
                    " budget can support all ",
                    adSets,
                    " ad sets exiting learning. Make sure each has distinct targeting logic and creative."
                ]
            }, void 0, true, {
                fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/articles/MetaSegmentationCharts.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_s6(AuditCalculator, "YfaZOc7mgh5dOD1YRJxTyyiw7b8=");
_c4 = AuditCalculator;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "LearningPhaseChart");
__turbopack_context__.k.register(_c1, "CreativePerformanceChart");
__turbopack_context__.k.register(_c2, "ResultsComparison");
__turbopack_context__.k.register(_c3, "SegmentationBeforeAfter");
__turbopack_context__.k.register(_c4, "AuditCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_7a1d3797._.js.map