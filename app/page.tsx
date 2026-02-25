'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/* ── tiny hooks ─────────────────────────────────────── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

/* ── Newsletter form ─────────────────────────────────── */
const BEEHIIV_PUB_ID = 'pub_1209a3dd-cebb-4f60-b283-177893e6a2cb'
const BEEHIIV_API_KEY = 'LUeYUUu3sqIuQMbdBlnh46rcDzFPhAhC9dDKKmqnAyMqebYZCUf9eaHp4F6Joj7Q'

function NewsletterForm({ id }: { id: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrMsg('Please enter a valid email address.')
      setStatus('err')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) { setStatus('ok'); setEmail('') }
      else {
        setErrMsg(data?.error ?? 'Something went wrong. Please try again.')
        setStatus('err')
      }
    } catch {
      setErrMsg('Network error. Please try again.')
      setStatus('err')
    }
  }

  const done = status === 'ok'

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com" disabled={done || status === 'loading'} id={id}
        style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontFamily: 'var(--sans)', fontSize: '0.9rem', padding: '14px 16px', outline: 'none' }}
      />
      {status === 'ok'  && <div style={{ fontSize: '0.82rem', padding: '12px 16px', borderRadius: 8, background: 'rgba(34,197,94,0.08)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.2)' }}>You are on the list — first issue coming soon.</div>}
      {status === 'err' && <div style={{ fontSize: '0.82rem', padding: '12px 16px', borderRadius: 8, background: 'rgba(239,68,68,0.08)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>{errMsg}</div>}
      <button type="submit" disabled={done || status === 'loading'} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 700, padding: '15px 24px', borderRadius: 8, background: done ? 'var(--text-4)' : 'var(--blue)', color: '#fff', border: 'none', cursor: done || status === 'loading' ? 'default' : 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
        {done ? 'Subscribed' : status === 'loading' ? 'Subscribing...' : "Subscribe — it's free →"}
      </button>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-4)', textAlign: 'center' }}>Free forever · One email a month · Unsubscribe anytime</p>
    </form>
  )
}

/* ── Ticker ──────────────────────────────────────────── */
const TICKER_ITEMS = ['Performance Marketing', 'Meta Ads', 'Google Ads', 'Lifecycle & CRM', 'Unit Economics', 'Growth Strategy', 'ROAS Optimisation', 'CAC Reduction', 'Audience Segmentation', 'Revenue Growth']

/* ── Main page ───────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const S = { section: { padding: '110px 0', borderBottom: '1px solid var(--border)' } as React.CSSProperties }
  const wrap = { maxWidth: 1080, margin: '0 auto', padding: '0 40px' }
  const eyebrow = { fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--blue)', marginBottom: 14 }
  const sectionH = { fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05 }

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: '100svh', display: 'grid', alignContent: 'end', paddingTop: 120, paddingBottom: 100, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* grid bg */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 0.5, maskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 40%, transparent 100%)' }} />
        {/* orb */}
        <div aria-hidden style={{ position: 'absolute', width: 600, height: 600, right: -80, top: '50%', transform: 'translateY(-60%)', background: 'radial-gradient(circle, rgba(0,87,255,0.09) 0%, transparent 70%)', borderRadius: '50%', animation: 'orb 8s ease-in-out infinite', pointerEvents: 'none' }} />
        <style>{`@keyframes orb{0%,100%{transform:translateY(-60%) scale(1)}50%{transform:translateY(-55%) scale(1.06)}} @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}} @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>

        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'blink 2.4s ease-in-out infinite' }} />
            Available · Bengaluru, India
          </div>
          <h1 style={{ fontSize: 'clamp(56px, 8.5vw, 116px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 40 }}>
            I build growth<br />systems that<br />
            <span style={{ color: 'var(--blue)', fontStyle: 'italic', fontWeight: 300 }}>compound.</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-3)', lineHeight: 1.65, maxWidth: 440, margin: 0 }}>
              Performance marketing, lifecycle, and acquisition — anchored in <strong style={{ color: 'var(--text-2)', fontWeight: 500 }}>unit economics</strong>, not vanity metrics. Currently scaling growth at Meesho.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#experience" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', fontWeight: 600, padding: '14px 26px', borderRadius: 100, background: 'var(--blue)', color: '#fff', transition: 'all 0.25s' }}>See My Work</Link>
              <Link href="#contact"    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', fontWeight: 600, padding: '14px 26px', borderRadius: 100, background: 'transparent', color: 'var(--text-2)', border: '1.5px solid var(--border-mid)', transition: 'all 0.25s' }}>Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px 0', background: 'var(--bg-off)' }} aria-hidden>
        <div style={{ display: 'flex', animation: 'tick 30s linear infinite', width: 'max-content' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, padding: '0 36px', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>
              {item} <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── METRICS ── */}
      <section id="metrics" style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 48 }}>By the numbers</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
            {[
              { num: '3.1×', desc: 'Revenue baseline growth', sub: '₹80L → ₹2.5Cr non-peak monthly' },
              { num: '₹5Cr', desc: 'Peak-period revenue',     sub: 'via global & NRI audience expansion' },
              { num: '200%', desc: 'ROAS achieved',            sub: 'up from 150%, with –15% CAC' },
              { num: '–20%', desc: 'CAC reduction',            sub: '+25% new users for Urban Company' },
            ].map((m, i) => (
              <FadeUp key={i} delay={i * 80} style={{ background: 'var(--bg)', padding: '40px 32px' }}>
                <div style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 10 }}>{m.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.5 }}><strong style={{ color: 'var(--text-2)', fontWeight: 500 }}>{m.desc}</strong><br />{m.sub}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section id="principles" style={S.section}>
        <div style={wrap}>
          <div style={{ marginBottom: 64 }}>
            <div style={eyebrow}>How I Think</div>
            <h2 style={sectionH}>Principles</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
            {[
              { n: '01', title: ['Predictability', ' over volatility'], body: 'A channel that delivers 80% of target every month beats one that swings 50–150%. Compounding needs a stable foundation before it needs a higher ceiling.' },
              { n: '02', title: ['Segment', ' before you scale'],       body: 'Scaling on blended averages is a trap. Know exactly which cohorts carry the numbers before you pour fuel — otherwise you\'re growing your worst customers fastest.' },
              { n: '03', title: ['Economics', '-first growth'],          body: 'ROAS and CAC aren\'t just reporting metrics — they\'re the guardrails that determine whether growth is real or accounting fiction.' },
              { n: '04', title: ['Structure', ' beats hacks'],           body: 'Creative fatigue, audience overlap, bid cannibalization — most performance problems are structural, not tactical. Fix the system, not the symptom.' },
            ].map((p, i) => (
              <FadeUp key={i} delay={i * 80} style={{ background: 'var(--bg)', padding: '52px 44px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--blue)', marginBottom: 20, fontStyle: 'italic' }}>{p.n} —</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>{p.title[0]}</em>{p.title[1]}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.75, maxWidth: 340, margin: 0 }}>{p.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={S.section}>
        <div style={wrap}>
          <div style={{ marginBottom: 64 }}>
            <div style={eyebrow}>Work History</div>
            <h2 style={sectionH}>Experience</h2>
          </div>
          {[
            {
              period: 'Mar 2026 — Present', co: 'Meesho', loc: 'Bengaluru, KA',
              role: 'Senior Associate — Performance Marketing',
              bullets: ['Leading performance marketing initiatives focused on scalable, efficient growth across paid ecosystems.', 'Driving acquisition systems anchored in contribution margins and long-term unit economics.', 'Optimizing channel mix and experimentation velocity to surface and resolve structural inefficiencies.'],
            },
            {
              period: 'Aug 2024 — Mar 2026', co: 'AppsForBharat', loc: 'Bengaluru, KA',
              role: 'Performance Marketing Associate',
              bullets: ['Scaled non-peak monthly revenue from ₹80L → ₹2.5Cr through structured channel and audience expansion.', 'Drove peak-period revenue to ₹5Cr via global and NRI market targeting.', 'Managed ₹1Cr+ monthly Meta ad spends across geographies with disciplined budget governance.', 'Doubled Email revenue to ₹17L/month; scaled WhatsApp and Push notification programs from scratch.', 'Improved ROAS 150% → 200% while reducing CAC by 15% simultaneously.'],
            },
            {
              period: 'Jan 2024 — Aug 2024', co: 'ET Medialabs', loc: 'Noida, UP',
              role: 'Associate — Business Strategy & Analysis',
              bullets: ['Reduced CAC by 20% and grew new users by 25% for Urban Company via audience restructuring.', 'Delivered 22% revenue growth for a luxury fashion brand through intent-layered campaign architecture.', 'Maintained 6.4 ROAS across Performance Max and Search using structured intent frameworks.'],
            },
          ].map((exp, i) => (
            <FadeUp key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, padding: '52px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ paddingTop: 3 }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.06em', color: 'var(--text-4)', textTransform: 'uppercase', marginBottom: 6 }}>{exp.period}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>{exp.co}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{exp.loc}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 22 }}>{exp.role}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: 'var(--text-3)', lineHeight: 1.65, paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: 11, width: 5, height: 1, background: 'var(--border-mid)', display: 'block' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── NOW ── */}
      <section id="now" style={S.section}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div><div style={eyebrow}>Right Now</div><h2 style={sectionH}>Currently</h2></div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-4)' }}>Updated Feb 2026</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
            {[
              { tag: 'Working on',     title: 'Acquisition efficiency at Meesho',       body: 'Building contribution-margin-led growth systems at scale. Thinking deeply about how paid and organic interact at high volume.' },
              { tag: 'Exploring',      title: 'Growth loops & compounding systems',      body: 'What makes an acquisition loop self-sustaining vs. one that needs constant fuel? Working through this with live data from paid channels.' },
              { tag: 'Building toward', title: 'Writing consistently',                   body: 'Turning patterns I see in performance data into ideas worth publishing. First essays coming soon — one sharp piece per month.' },
            ].map((c, i) => (
              <FadeUp key={i} delay={i * 80} style={{ background: 'var(--bg)', padding: '44px 36px' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 18 }}>{c.tag}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.3 }}>{c.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-3)', lineHeight: 1.7 }}>{c.body}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITING ── */}
      <section id="writing" style={S.section}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div><div style={eyebrow}>Essays & Notes</div><h2 style={sectionH}>Writing</h2></div>
            <Link href="/writing" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-3)', borderBottom: '1px solid var(--border-mid)', paddingBottom: 2 }}>All writing →</Link>
          </div>
          {[
            { tag: 'Performance', title: 'Why ROAS is a lagging indicator', href: '/writing/roas-lagging-indicator', date: 'Feb 2026', live: true },
            { tag: 'Acquisition', title: 'The segmentation trap in Meta campaigns', href: '/writing', date: 'Coming soon', live: false },
            { tag: 'Lifecycle',   title: 'Lifecycle channels are not an afterthought', href: '/writing', date: 'Coming soon', live: false },
          ].map((w, i) => (
            <Link key={i} href={w.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--border)', borderTop: i === 0 ? '1px solid var(--border)' : 'none', textDecoration: 'none', color: 'inherit', transition: 'padding-left 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', background: 'var(--bg-card)', padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap' }}>{w.tag}</span>
                <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{w.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-4)', whiteSpace: 'nowrap' }}>{w.date}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-4)' }}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: 'var(--bg-off)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '72px 0' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeUp>
              <div style={eyebrow}>The Newsletter</div>
              <div style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 14 }}>
                Growth thinking, <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>once a month.</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', lineHeight: 1.7, maxWidth: 380, margin: 0 }}>
                One essay per month on performance marketing, acquisition systems, and unit economics. No fluff. Written for marketers who think in frameworks.
              </p>
            </FadeUp>
            <FadeUp delay={100}><NewsletterForm id="hp-nl" /></FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '110px 0 80px' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <FadeUp>
              <div style={eyebrow}>Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Let&apos;s build<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>something real.</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 44, maxWidth: 380 }}>
                If you&apos;re working on growth where unit economics matter — acquisition, lifecycle, or strategy — I&apos;d like to hear about it.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { href: 'mailto:khare.anshuman47@gmail.com', label: 'khare.anshuman47@gmail.com' },
                  { href: 'https://linkedin.com/in/anshuman-khare', label: 'LinkedIn' },
                  { href: 'https://twitter.com/anshumankhare', label: 'Twitter / X' },
                ].map(({ href, label }) => (
                  <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-3)', transition: 'color 0.2s' }}>
                    {label} <span style={{ color: 'var(--text-4)' }}>↗</span>
                  </Link>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <FadeUp>
              <div style={{ ...eyebrow, marginBottom: 10 }}>Education</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.015em', marginBottom: 6 }}>SRM Institute of Science and Technology</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-3)', lineHeight: 1.6 }}>B.Tech, Electrical & Electronics Engineering<br />CGPA 9.19 · 2020 – 2024</div>
            </FadeUp>
            <div aria-hidden style={{ fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 800, color: 'var(--blue)', opacity: 0.15, letterSpacing: '-0.04em', userSelect: 'none' }}>9.19</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

/* ── Contact form ─────────────────────────────────────── */
function ContactForm() {
  const [vals, setVals] = useState({ name: '', email: '', context: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')
  const [done, setDone] = useState(false)
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setVals(v => ({ ...v, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!vals.name || !vals.email || !vals.message) { setStatus('err'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) { setStatus('err'); return }
    const body = `Name: ${vals.name}\nEmail: ${vals.email}\nContext: ${vals.context || '—'}\n\n${vals.message}`
    window.location.href = `mailto:khare.anshuman47@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from ' + vals.name)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setStatus('ok'); setDone(true) }, 1400)
  }

  const inputStyle: React.CSSProperties = { width: '100%', background: 'var(--bg-off)', border: '1.5px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontFamily: 'var(--sans)', fontSize: '0.9rem', padding: '13px 16px', outline: 'none' }
  const labelStyle: React.CSSProperties = { fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: 7 }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div><label style={labelStyle}>Name *</label><input style={inputStyle} value={vals.name} onChange={set('name')} placeholder="Your name" required /></div>
        <div><label style={labelStyle}>Email *</label><input style={inputStyle} type="email" value={vals.email} onChange={set('email')} placeholder="you@company.com" required /></div>
      </div>
      <div><label style={labelStyle}>What&apos;s this about?</label><input style={inputStyle} value={vals.context} onChange={set('context')} placeholder="Role, project, collaboration…" /></div>
      <div><label style={labelStyle}>Message *</label><textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }} value={vals.message} onChange={set('message')} placeholder="Tell me what you're building." required /></div>
      {status === 'ok'  && <div style={{ fontSize: '0.82rem', padding: '12px 16px', borderRadius: 8, background: 'rgba(34,197,94,0.08)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.2)' }}>Mail client opened — or email khare.anshuman47@gmail.com directly.</div>}
      {status === 'err' && <div style={{ fontSize: '0.82rem', padding: '12px 16px', borderRadius: 8, background: 'rgba(239,68,68,0.08)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>Please fill in all required fields with a valid email.</div>}
      <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 700, padding: '14px 24px', borderRadius: 8, background: 'var(--blue)', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Send Message →
      </button>
    </form>
  )
}
