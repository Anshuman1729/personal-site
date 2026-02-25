'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const GCAL_SRC = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0vTzBYZYcol8Ip7c38ckb5SDCFxPti4xVGS01XzllGxxLuFgFdkvD4Nx7KV85J4oZEM_QBGKgt?gv=true"

const SERVICES = [
  {
    id: 'audit',
    tag: '01',
    name: 'Performance Audit',
    duration: 'One-time · 1 week',
    price: 'From ₹25,000',
    tagline: 'Find where your growth is leaking — and exactly what to fix.',
    desc: 'A deep forensic review of your paid channels, CAC structure, creative performance, and audience segmentation. You get a prioritised action plan, not a slide deck full of observations.',
    deliverables: [
      'Full channel audit — Meta, Google, or both',
      'nCAC and LTV:CAC analysis by cohort',
      'Creative performance breakdown',
      'Audience overlap and segmentation diagnosis',
      'Written action plan with prioritised fixes',
      '60-minute walkthrough call',
    ],
    best: "Best for brands spending ₹5L–₹50L/month on paid who feel something is off but cannot pinpoint what.",
  },
  {
    id: 'strategy',
    tag: '02',
    name: '1-on-1 Strategy Call',
    duration: '60 minutes',
    price: '₹5,000 / call',
    tagline: 'One hour. One problem. A clear way forward.',
    desc: "Bring your hardest growth problem — a channel that has stopped scaling, a CAC that has crept up, a funnel that is leaking. We will diagnose it live and leave with a concrete next step.",
    deliverables: [
      'Pre-call intake form to make the hour count',
      '60-minute focused session via Google Meet',
      'Written summary of decisions and action items',
      'One follow-up thread within 48 hours',
    ],
    best: "Best for founders or marketers who have a specific problem and need a sharp outside perspective fast.",
  },
  {
    id: 'fractional',
    tag: '03',
    name: 'Fractional CMO',
    duration: 'Ongoing · 3-month minimum',
    price: 'From ₹60,000 / month',
    tagline: 'Senior marketing leadership without the full-time cost.',
    desc: "I embed in your team as a part-time growth lead — owning the acquisition strategy, managing agency or in-house execution, and keeping everything anchored to unit economics. Typically 2–3 days per week.",
    deliverables: [
      'Weekly strategy sessions with your team',
      'Ownership of paid channel strategy and budget',
      'CAC and LTV tracking framework set up',
      'Creative direction and testing roadmap',
      'Monthly performance review and board-ready summary',
      'Slack access for async questions',
    ],
    best: "Best for D2C brands between ₹50L–₹5Cr MRR who need senior marketing leadership but are not ready for a full-time CMO hire.",
  },
]

const FAQS = [
  {
    q: 'Do you take on clients while working full-time?',
    a: 'Yes — selectively. I take on a maximum of 2 consulting clients at a time to make sure the work is actually good. If my capacity is full, I will tell you upfront and we can discuss timeline.',
  },
  {
    q: 'What industries do you focus on?',
    a: "Primarily D2C — consumer brands where paid acquisition, lifecycle, and unit economics are the core levers. I have worked across beauty, lifestyle, spiritual, and marketplace categories.",
  },
  {
    q: 'What does the intro call involve?',
    a: "It is a 20-minute intro call — no commitment, no pitch. I want to understand your situation and make sure I am actually the right fit before either of us moves forward.",
  },
  {
    q: 'Do you work with agencies?',
    a: 'Occasionally, if the brief fits. Most of my work is directly with founders and in-house teams.',
  },
]

function scrollToBooking() {
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function WorkWithMePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeService, setActiveService] = useState(0)

  return (
    <>
      <Nav />
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>

      {/* HERO */}
      <header style={{ paddingTop: 160, paddingBottom: 100, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 0.4, maskImage: 'radial-gradient(ellipse 70% 60% at 20% 100%, black 30%, transparent 100%)' }} />
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'blink 2.4s ease-in-out infinite' }} />
            Taking on clients · 2 spots available
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 28, maxWidth: 800 }}>
            Work with me.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-3)', lineHeight: 1.7, maxWidth: 520, marginBottom: 48 }}>
            I work with D2C founders who want their paid growth anchored in unit economics — not vanity metrics. Three ways to engage, depending on where you are.
          </p>
          <button onClick={scrollToBooking} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', fontWeight: 700, padding: '16px 32px', borderRadius: 100, background: 'var(--blue)', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Book a free intro call →
          </button>
          <p style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--text-4)' }}>20 minutes · No commitment · I will tell you if I am not the right fit</p>
        </div>
      </header>

      {/* SERVICES */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="grid-services">
            <div className="services-sidebar">
              <div style={{ padding: '0 40px', marginBottom: 32, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-4)' }}>Services</div>
              {SERVICES.map((s, i) => (
                <button key={s.id} onClick={() => setActiveService(i)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '20px 40px', border: 'none', cursor: 'pointer', background: activeService === i ? 'var(--blue-light)' : 'transparent', borderRight: activeService === i ? '2px solid var(--blue)' : '2px solid transparent', transition: 'all 0.2s' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeService === i ? 'var(--blue)' : 'var(--text-4)', marginBottom: 4 }}>{s.tag}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: activeService === i ? 'var(--text)' : 'var(--text-3)', letterSpacing: '-0.01em' }}>{s.name}</div>
                  <div style={{ fontSize: '0.75rem', color: activeService === i ? 'var(--blue)' : 'var(--text-4)', marginTop: 3 }}>{s.price}</div>
                </button>
              ))}
            </div>

            {SERVICES.map((s, i) => (
              <div key={s.id} className="services-detail" style={{ display: i === activeService ? 'block' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', background: 'var(--blue-light)', padding: '4px 12px', borderRadius: 100 }}>{s.duration}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>{s.price}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 12 }}>{s.name}</h2>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--blue)', fontWeight: 300, marginBottom: 20, lineHeight: 1.5 }}>{s.tagline}</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>{s.desc}</p>
                <div style={{ marginBottom: 36 }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 16 }}>What is included</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)' }}>Best for · </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>{s.best}</span>
                </div>
                <button onClick={scrollToBooking} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', fontWeight: 700, padding: '14px 28px', borderRadius: 100, background: 'var(--blue)', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  Book intro call →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="grid-credibility">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 14 }}>Why me</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 24 }}>
                I have run the playbook.<br />
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>At real scale.</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.75, marginBottom: 20 }}>
                I have managed ₹1Cr+ monthly Meta spends, scaled a brand from ₹80L to ₹2.5Cr non-peak MRR, and hit ₹5Cr in peak periods — all while keeping CAC and ROAS moving in the right direction simultaneously.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.75 }}>
                Most consultants advise from frameworks. I advise from having done it — and from continuing to do it at Meesho every day.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
              {[
                { num: '3.1x', label: 'Revenue baseline growth' },
                { num: '₹5Cr', label: 'Peak-period revenue hit' },
                { num: '200%', label: 'ROAS achieved' },
                { num: '-20%', label: 'CAC reduction' },
              ].map((s) => (
                <div key={s.num} style={{ background: 'var(--bg)', padding: '32px 28px' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--border)', background: 'var(--bg-off)' }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 14 }}>The process</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 64 }}>How it works</h2>
          <div className="grid-how-it-works">
            {[
              { step: '01', title: 'Book intro call', body: 'Pick a slot below. A free 20-minute call to understand your situation — no pitch, no commitment.' },
              { step: '02', title: 'Scope the work',  body: 'If there is a fit, I will send a short brief outlining what we will do, what it costs, and what you will walk away with.' },
              { step: '03', title: 'We get to work',  body: 'Depending on the engagement — audit, call, or retainer — we start within the week. No long onboarding.' },
              { step: '04', title: 'You get clarity',  body: 'Every engagement ends with a clear picture of what is working, what is not, and exactly what to do next.' },
            ].map((s) => (
              <div key={s.step} style={{ background: 'var(--bg)', padding: '40px 32px' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 16 }}>{s.step}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', lineHeight: 1.7 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 14 }}>Book a call</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 14 }}>Pick a time that works.</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto' }}>
              20 minutes. Free. We will figure out if and how I can help.
            </p>
          </div>
          <div className="iframe-wrapper">
            <iframe src={GCAL_SRC} width="100%" frameBorder={0} title="Book a call with Anshuman Khare" />
          </div>
          <p style={{ marginTop: 16, fontSize: '0.78rem', color: 'var(--text-4)', textAlign: 'center' }}>
            Prefer email? <a href="mailto:khare.anshuman47@gmail.com" style={{ color: 'var(--blue)' }}>khare.anshuman47@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="grid-faq">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 14 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05 }}>Common<br />questions.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '24px 0', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-4)', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 24, fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.7 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
