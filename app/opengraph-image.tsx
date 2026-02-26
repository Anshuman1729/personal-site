import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Anshuman Khare — Performance Marketing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(#e8e8e4 1px, transparent 1px), linear-gradient(90deg, #e8e8e4 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.5,
          display: 'flex',
        }} />

        {/* Top: availability badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0057FF' }}>
            Available · Bengaluru, India
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#0a0a0a' }}>
            Performance
          </div>
          <div style={{ fontSize: 72, fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 0.95, color: '#0057FF' }}>
            that compounds.
          </div>
        </div>

        {/* Bottom: name + role */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em' }}>Anshuman Khare</span>
            <span style={{ fontSize: 18, color: '#888880' }}>Performance Marketing · Meesho</span>
          </div>
          <span style={{ fontSize: 18, color: '#c0c0b8', letterSpacing: '0.04em' }}>anshumankhare.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
