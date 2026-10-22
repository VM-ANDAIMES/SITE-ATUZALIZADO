import { useState, useEffect, useRef, createContext, useContext, type FC } from 'react'
import { translations, type Lang } from './translations';
import { motion } from 'motion/react';

// Language Context
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'pt', setLang: () => {} })
const useLang = () => useContext(LangContext)

// Scroll Progress Bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const el = document.documentElement
        const total = el.scrollHeight - el.clientHeight
        setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0)
        frame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // ... restante do código do ScrollProgress
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(to right, #F97316, #EA580C)', transition: 'width 0.1s linear', boxShadow: '0 0 8px rgba(249,115,22,0.7)' }} />
    </div>
  )
}

// ─── Icons ──────────────────────────────────────────────────────────────────

const MenuIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.117 1.532 5.845L.057 23.887l6.204-1.627A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.36-.213-3.682.965.982-3.591-.234-.371A9.818 9.818 0 1112 21.818z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)


const TruckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const SearchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PlanIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

const AttendantIcon = ({ size = 48 }: { size?: number }) => (
  <img
    src="cal_center.png"
    alt="Atendente"
    width={size}
    height={size}
    style={{ objectFit: 'contain', userSelect: 'none', pointerEvents: 'none' }}
  />
)

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

// ─── Service icons array (stable, not translated) ────────────────────────────

const SERVICE_ICONS: FC[] = [ShieldIcon, TruckIcon, WrenchIcon, BuildingIcon, SearchIcon, PlanIcon]

// ─── Vacancy icons (module-level FC[] to avoid render timeouts) ──────────────

const VacancyIcon0: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const VacancyIcon1: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const VacancyIcon2: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)
const VacancyIcon3: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const VACANCY_ICONS: FC[] = [VacancyIcon0, VacancyIcon1, VacancyIcon2, VacancyIcon3]

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold, rootMargin: '0px 0px 10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, visible])

  return { ref, visible }
}

function revealUp(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  }
}

function revealLeft(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-48px)',
    transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  }
}

function revealRight(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(48px)',
    transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  }
}

function revealScale(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1)' : 'scale(0.88)',
    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  }
}

// ─── Language Switcher ───────────────────────────────────────────────────────

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
]

function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGS.find(l => l.code === lang)!

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 12px',
          borderRadius: 24,
          background: open ? 'rgba(249,115,22,0.18)' : 'rgba(255,255,255,0.08)',
          border: `1.5px solid ${open ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.15)'}`,
          color: '#fff',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          transition: 'all 0.2s ease',
        }}
      >
        <GlobeIcon />
        <span style={{ fontSize: '1rem', lineHeight: 1 }}>{current.flag}</span>
        <span>{current.label}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          minWidth: 130,
          borderRadius: 12,
          background: 'rgba(28,28,30,0.97)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          overflow: 'hidden',
          zIndex: 100,
        }}>
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false) }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '10px 16px',
                background: lang === l.code ? 'rgba(249,115,22,0.15)' : 'transparent',
                border: 'none',
                borderLeft: lang === l.code ? '3px solid #F97316' : '3px solid transparent',
                color: lang === l.code ? '#F97316' : 'rgba(255,255,255,0.75)',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: lang === l.code ? 700 : 500,
                fontSize: '0.85rem',
                textAlign: 'left',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{l.flag}</span>
              <span>{l.label === 'PT' ? 'Português' : l.label === 'EN' ? 'English' : 'Español'}</span>
              {lang === l.code && (
                <svg style={{ marginLeft: 'auto' }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const { lang } = useLang()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#sobre', label: t.about },
    { href: '#servicos', label: t.services },
    { href: '#diferenciais', label: t.differentials },
    { href: '#galeria', label: t.gallery },
    { href: '#contato', label: t.contact },
  ]

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        frame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(28,28,30,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            src="/logo_vm-1.png"
            alt="VM Andaimes"
            className="navbar-logo"
            style={{ height: 68, width: 'auto', objectFit: 'contain', border: 'none' }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <div className="flex flex-col gap-1.5">
            <a
              href="#contato"
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow, sans-serif', lineHeight: 1.2 }}
            >
              {t.cta}
            </a>
            <a
              href="#trabalhe-conosco"
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow, sans-serif', lineHeight: 1.2 }}
            >
              {t.careers}
            </a>
          </div>
        </div>

        <button type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} className="lg:hidden text-white p-1" onClick={() => setOpen(!open)} style={{ lineHeight: 0 }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden" style={{ background: 'rgba(20,20,22,0.98)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(255,255,255,0.08)', maxHeight: 'calc(100dvh - 80px)', overflowY: 'auto' }}>
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-base py-1" onClick={() => setOpen(false)}>{l.label}</a>
            ))}

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
            </div>

            <a
              href="#contato"
              className="w-full text-center py-3.5 rounded-xl text-white font-bold tracking-wide"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', letterSpacing: '0.08em', boxShadow: '0 6px 20px rgba(249,115,22,0.35)' }}
              onClick={() => setOpen(false)}
            >
              {t.cta}
            </a>

            <a
              href="#trabalhe-conosco"
              className="w-full text-center py-3.5 rounded-xl text-white font-bold tracking-wide"
              style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid rgba(249,115,22,0.4)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', letterSpacing: '0.08em', color: '#F97316' }}
              onClick={() => setOpen(false)}
            >
              {t.careers}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const { lang } = useLang()
  const t = translations[lang]
  const th = t.hero
  const stats = t.stats

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#1C1C1E' }}
    >
      <div className="ambient-smoke ambient-smoke-hero" aria-hidden="true" />
      <img
        src="https://images.unsplash.com/photo-1713593930871-e21d7f9ef4a1?w=1600&h=1000&fit=crop&auto=format"
        alt="Montagem de andaimes industriais"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
        style={{ opacity: 0.35 }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,28,30,0.92) 40%, rgba(28,28,30,0.5) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #1C1C1E, transparent)' }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'linear-gradient(to bottom, transparent, #F97316, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F97316', display: 'inline-block', boxShadow: '0 0 8px #F97316' }} className="animate-pulse" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{th.badge}</span>
          </div>

          <motion.h1 style={{
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 0.95,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: '1.75rem',
            textShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}>
            {th.title1}<br />
            <span style={{ color: '#F97316' }}>{th.title2}</span><br />
            {th.title3}
          </motion.h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            maxWidth: '480px',
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}>
            {th.subtitle}
          </p>

          <div className="hero-buttons flex flex-wrap gap-4">
            <a
              href="#contato"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow, sans-serif', boxShadow: '0 8px 32px rgba(249,115,22,0.4)' }}
            >
              {th.cta1}
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {stats.slice(0, 3).map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#F97316', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-white opacity-40" style={{ background: 'linear-gradient(to bottom, transparent, white)' }} />
      </div>
    </motion.section>
  )
}

function About() {
  const { lang } = useLang()
  const t = translations[lang].about
  const { ref, visible } = useInView()

  return (
    <section id="sobre" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div style={revealLeft(visible)}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#F97316' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            </div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1C1C1E', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              {t.title1}<br />
              <span style={{ color: '#F97316' }}>{t.title2}</span><br />
              {t.title3}
            </h2>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              {t.p1}
            </p>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
              {t.p2}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '+18', l: t.stat1l, sub: '' },
                { n: '+500', l: t.stat2l, sub: '' },
                { n: 'NR-18', l: t.nr18l, sub: t.certified },
                { n: 'NR-35', l: t.nr35l, sub: t.certified },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: i >= 2 ? 'rgba(249,115,22,0.06)' : '#F5F5F7', border: i >= 2 ? '1.5px solid rgba(249,115,22,0.2)' : '1.5px solid transparent' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F97316', lineHeight: 1 }}>{item.n}</div>
                    {item.sub && (
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: '#fff', background: '#F97316', borderRadius: 4, padding: '1px 5px', marginTop: 4, display: 'inline-block', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.sub}</div>
                    )}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#555', lineHeight: 1.4, fontWeight: 500, paddingTop: 2, whiteSpace: 'pre-line', textAlign: i === 2 ? 'center' : 'left' }}>{item.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={revealRight(visible, 0.2)}>
            <div className="relative">
              <div className="about-image-wrap overflow-hidden rounded-2xl" style={{ height: 480 }}>
                <img
                  src="https://images.unsplash.com/photo-1646608220368-c604d8e8130f?w=700&h=560&fit=crop&auto=format"
                  alt="Trabalhador em andaime"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.4), transparent)' }} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl" style={{ background: '#1C1C1E', minWidth: 180, boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.15)' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#F97316', lineHeight: 1 }}>{t.badge100}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', marginTop: 4, whiteSpace: 'pre-line' }}>{t.badgeLabel}</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl -z-10" style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', opacity: 0.2 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { lang } = useLang()
  const t = translations[lang].services
  const { ref, visible } = useInView()

  return (
    <section id="servicos" className="py-28" style={{ background: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref} style={revealUp(visible)}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#F97316' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            <div className="h-px w-12" style={{ background: '#F97316' }} />
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1C1C1E', letterSpacing: '-0.01em' }}>
            {t.title1}<br />
            <span style={{ color: '#F97316' }}>{t.title2}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((svc, i) => (
            <div
              key={i}
              className="service-card rounded-2xl p-8 cursor-default relative overflow-hidden"
              style={{
                background: '#fff',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.09}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.09}s`,
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, background: 'linear-gradient(to bottom, #F97316, #EA580C)', borderRadius: '0 2px 2px 0' }} />
              <div className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(234,88,12,0.06))' }}>
                {(() => { const Icon = SERVICE_ICONS[i]; return <Icon /> })()}
              </div>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#1C1C1E', letterSpacing: '0.02em', marginBottom: '0.7rem', textTransform: 'uppercase' }}>
                {svc.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#777', lineHeight: 1.75 }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const { lang } = useLang()
  const t = translations[lang].differentials
  const { ref, visible } = useInView()

  return (
    <section id="diferenciais" className="py-28 relative overflow-hidden" style={{ background: '#1C1C1E' }}>
      <div className="ambient-smoke ambient-smoke-dark" aria-hidden="true" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)',
      }} />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20" style={{ background: 'radial-gradient(ellipse at right, rgba(249,115,22,0.4), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center" ref={ref}>
          <div style={revealLeft(visible)}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#F97316' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            </div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              {t.title1}<br />
              <span style={{ color: '#F97316' }}>{t.title2}</span>
            </h2>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              {t.body}
            </p>
            <a
              href="#equipe-whatsapp"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', color: '#fff', fontFamily: 'Barlow, sans-serif', boxShadow: '0 8px 24px rgba(249,115,22,0.35)' }}
            >
              {t.cta}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3" style={revealRight(visible, 0.15)}>
            {t.items.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', transition: `background 0.25s, opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s`, opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,88,12,0.1))', border: '1px solid rgba(249,115,22,0.25)' }}>
                  <CheckIcon />
                </div>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', letterSpacing: '0.01em' }}>{d}</span>
                <div style={{ marginLeft: 'auto', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', color: 'rgba(249,115,22,0.4)', fontWeight: 700 }}>0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const { lang } = useLang()
  const t = translations[lang].gallery
  const { ref, visible } = useInView()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 639px)').matches)
  const [lightbox, setLightbox] = useState<{ url: string; alt: string } | null>(null)
  const dragMoved = useRef(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox])
  const [scrollLeft, setScrollLeft] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const galleryUrls = [
  "/foto1.png",
  "/foto2.png",
  "/foto3.png",
  "/foto4.jpeg",
  "foto5.jpeg",
  "/foto9.jpeg",
  "/foto10.jpeg",
  "/foto11.jpeg",
  "/foto12.jpeg",
  "/foto13.jpeg"
]  
const galleryImages = galleryUrls.map((url, index) => ({ url: url as unknown as string, alt: t.imageAlts[index] }))

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
    setActiveIndex(Math.round(el.scrollLeft / (240 + 16)))
  }

  const slide = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
  }

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current
    if (!el) return
    setIsDragging(true)
    dragMoved.current = false
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeft(el.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    dragMoved.current = true
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft - (x - startX)
  }

  const stopDrag = () => setIsDragging(false)

  const onTouchStart = (e: React.TouchEvent) => {
    const el = trackRef.current
    if (!el) return
    dragMoved.current = false
    setStartX(e.touches[0].pageX - el.offsetLeft)
    setScrollLeft(el.scrollLeft)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    const el = trackRef.current
    if (!el) return
    const x = e.touches[0].pageX - el.offsetLeft
    if (Math.abs(x - startX) > 8) dragMoved.current = true
    el.scrollLeft = scrollLeft - (x - startX)
  }

  return (
    <section id="galeria" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" ref={ref} style={revealUp(visible)}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#F97316' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            <div className="h-px w-12" style={{ background: '#F97316' }} />
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1C1C1E' }}>
            {t.title1} <span style={{ color: '#F97316' }}>{t.title2}</span>
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: '#aaa', marginTop: 8 }}>
            {t.hint}
          </p>
        </div>

        <div style={{ position: 'relative', ...revealUp(visible, 0.2) }}>
          {/* Desktop prev arrow */}
          {canScrollLeft && (
            <button className="gallery-arrow"
              onClick={() => slide('left')}
              style={{
                position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 44, height: 44, borderRadius: '50%',
                background: '#1C1C1E', border: '2px solid rgba(249,115,22,0.4)',
                color: '#F97316', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)', transition: 'background 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          )}

          {/* Desktop next arrow */}
          {canScrollRight && (
            <button className="gallery-arrow"
              onClick={() => slide('right')}
              style={{
                position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 44, height: 44, borderRadius: '50%',
                background: '#1C1C1E', border: '2px solid rgba(249,115,22,0.4)',
                color: '#F97316', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)', transition: 'background 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          )}

          <div
            ref={trackRef}
            className="gallery-scroll-track"
            onScroll={updateArrows}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              cursor: isDragging ? 'grabbing' : 'grab',
              paddingBottom: 8,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item flex-shrink-0"
                onClick={() => { if (!dragMoved.current) setLightbox(img) }}
                style={{
                  width: isMobile ? 240 : 360,
                  height: isMobile ? 300 : 420,
                  scrollSnapAlign: 'start',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 16,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                  background: '#2a2a2a',
                  flexShrink: 0,
                  cursor: 'zoom-in',
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease', userSelect: 'none', pointerEvents: 'none' }}
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.8), transparent)' }}
                >
                  <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>{img.alt}</span>
                </div>
                {/* zoom hint */}
                <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(0,0,0,0.5)', borderRadius: 8, padding: '4px 6px', backdropFilter: 'blur(6px)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile nav buttons — shown only on small screens */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 20 }}>
              <button
                onClick={() => slide('left')}
                disabled={!canScrollLeft}
                style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: canScrollLeft ? '#1C1C1E' : 'rgba(28,28,30,0.4)',
                  border: `2px solid ${canScrollLeft ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  color: canScrollLeft ? '#F97316' : 'rgba(255,255,255,0.2)',
                  cursor: canScrollLeft ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: canScrollLeft ? '0 4px 20px rgba(0,0,0,0.35)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>

              {/* dot indicators */}
              <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                {galleryImages.map((_, i) => {
                  const active = activeIndex === i
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const el = trackRef.current
                        if (el) { el.scrollTo({ left: i * (240 + 16), behavior: 'smooth' }); updateArrows() }
                      }}
                      style={{
                        width: active ? 22 : 7, height: 7,
                        borderRadius: 4, border: 'none', padding: 0,
                        background: active ? '#F97316' : 'rgba(28,28,30,0.25)',
                        cursor: 'pointer',
                        transition: 'width 0.3s ease, background 0.3s ease',
                      }}
                    />
                  )
                })}
              </div>

              <button
                onClick={() => slide('right')}
                disabled={!canScrollRight}
                style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: canScrollRight ? '#1C1C1E' : 'rgba(28,28,30,0.4)',
                  border: `2px solid ${canScrollRight ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  color: canScrollRight ? '#F97316' : 'rgba(255,255,255,0.2)',
                  cursor: canScrollRight ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: canScrollRight ? '0 4px 20px rgba(0,0,0,0.35)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            animation: 'lbFadeIn 0.2s ease',
          }}
        >
          {/* close button */}
          <button
            onClick={() => setLightbox(null)}
            type="button"
            aria-label="Fechar imagem"
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 1,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(249,115,22,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* image */}
          <img
            src={lightbox.url}
            alt={lightbox.alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '92vw', maxHeight: '88vh',
              borderRadius: 16,
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
              objectFit: 'contain',
              animation: 'lbZoomIn 0.25s cubic-bezier(0.22,1,0.36,1)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />

          {/* caption */}
          <div className="lightbox-caption" style={{
            position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.4)',
            padding: '6px 16px', borderRadius: 20, backdropFilter: 'blur(6px)',
            whiteSpace: 'nowrap',
          }}>
            {lightbox.alt}
          </div>
        </div>
      )}
    </section>
  )
}

function Stats() {
  const { lang } = useLang()
  const stats = translations[lang].stats
  const { ref, visible } = useInView()

  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1C1E' }}>
      <div style={{ height: 4, background: 'linear-gradient(to right, #F97316, #EA580C)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(249,115,22,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(249,115,22,0.06) 0%, transparent 50%)',
      }} />
      <div className="relative max-w-7xl mx-auto px-6 py-20" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center py-8 px-4"
              style={{
                ...revealScale(visible, i * 0.12),
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#F97316', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ width: 32, height: 2, background: 'rgba(249,115,22,0.4)', margin: '10px auto' }} />
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Ricardo Almeida', role: 'Gerente de Obras — Construtora Norte', text: 'Excelente atendimento e equipe extremamente profissional. A VM Andaimes superou nossas expectativas em todos os aspectos.' },
    { name: 'Fernanda Costa', role: 'Diretora de Engenharia — IndusPetro', text: 'Cumpriram todos os prazos com muita qualidade. Profissionais treinados e equipamentos sempre em perfeito estado.' },
    { name: 'Marcos Oliveira', role: 'Coordenador de Manutenção — Refinor', text: 'Empresa organizada e comprometida com a segurança. São o nosso parceiro preferencial há mais de 6 anos consecutivos.' },
  ]
  const { ref, visible } = useInView()
  return (
    <section className="py-28" style={{ background: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref} style={revealUp(visible)}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#F97316' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>Depoimentos</span>
            <div className="h-px w-12" style={{ background: '#F97316' }} />
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1C1C1E' }}>
            O QUE NOSSOS <span style={{ color: '#F97316' }}>CLIENTES DIZEM</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 relative"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all 0.6s ease ${i * 0.15}s`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', color: '#F97316', opacity: 0.15, lineHeight: 0.8, marginBottom: '0.5rem', userSelect: 'none' }}>"</div>
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1C1C1E' }}>{t.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#F97316', marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CONTACT_ICONS: FC[] = [PhoneIcon, MailIcon, MapPinIcon, ClockIcon]
const CONTACT_VALUES = [
  { value: '(42) 98804-1745', href: 'tel:5542988041745' },
  { value: 'VMandaimes@gmail.com', href: 'mailto:VMandaimes@gmail.com' },
  {
    value: 'Rua Vinte e Um de Setembro, 697 — Centro\nSão Mateus do Sul, PR — CEP 83900-000',
    href: 'https://www.google.com/maps/search/?api=1&query=Rua+Vinte+e+Um+de+Setembro%2C+697%2C+Centro%2C+S%C3%A3o+Mateus+do+Sul%2C+PR%2C+83900-000',
  },
]

function Contact() {
  const { lang } = useLang()
  const t = translations[lang].contact
  const tServices = translations[lang].services
  const { ref, visible } = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const contactLabels = [t.labels.phone, t.labels.email, t.labels.address, t.labels.hours]
  const contactValues = [...CONTACT_VALUES, { value: t.hoursValue, href: '#' }]

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `🔔 Novo Orçamento — ${form.name}`,
          Nome: form.name,
          Telefone: form.phone,
          Email: form.email || 'Não informado',
          Servico: form.service || 'Não informado',
          Mensagem: form.message || 'Não informado',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setSent(true)
    } catch (_) {
      alert(t.submitError)
    } finally {
      setSending(false)
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: `1.5px solid ${focused === field ? '#F97316' : 'rgba(255,255,255,0.1)'}`,
    fontFamily: 'Barlow, sans-serif',
    fontSize: '0.95rem',
    color: '#fff',
    background: 'rgba(255,255,255,0.05)',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxShadow: focused === field ? '0 0 0 3px rgba(249,115,22,0.15)' : 'none',
  })

  return (
    <section id="contato" style={{ background: '#131315', position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-smoke ambient-smoke-dark" aria-hidden="true" />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #F97316, transparent)' }} />
      <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16" ref={ref} style={revealUp(visible)}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10" style={{ background: '#F97316' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.14em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            </div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.0, letterSpacing: '-0.01em' }}>
              {t.title1}<br />
              <span style={{ color: '#F97316' }}>{t.title2}</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 340 }}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6" style={revealUp(visible, 0.2)}>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              {contactValues.map((item, i) => {
                const Icon = CONTACT_ICONS[i]
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', border: '1px solid rgba(249,115,22,0.2)' }}>
                      <Icon />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{contactLabels[i]}</div>
                      <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', marginTop: 3, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="rounded-2xl overflow-hidden flex-1" style={{ minHeight: 240, border: '1px solid rgba(255,255,255,0.08)' }}>
              <iframe
                title={t.mapTitle}
                src="https://maps.google.com/maps?q=Rua+Vinte+e+Um+de+Setembro%2C+697%2C+Centro%2C+S%C3%A3o+Mateus+do+Sul%2C+PR%2C+83900-000&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: 240, filter: 'grayscale(20%) invert(5%)' }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(249,115,22,0.12)', border: '2px solid rgba(249,115,22,0.3)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#fff', marginBottom: 10 }}>{t.success.title}</h3>
                  <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: 28 }}>{t.success.body}</p>
                  <button onClick={() => setSent(false)}
                    className="px-7 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow, sans-serif', boxShadow: '0 6px 20px rgba(249,115,22,0.35)' }}>
                    {t.success.btn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{t.form.name}</label>
                      <input required style={inputStyle('name')} placeholder={t.form.namePh}
                        value={form.name}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{t.form.phone}</label>
                      <input required style={inputStyle('phone')} placeholder={t.form.phonePh}
                        value={form.phone}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{t.form.email}</label>
                    <input type="email" style={inputStyle('email')} placeholder={t.form.emailPh}
                      value={form.email}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{t.form.service}</label>
                    <select style={{ ...inputStyle('service'), cursor: 'pointer' }}
                      value={form.service}
                      onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                      <option value="" style={{ background: '#1C1C1E' }}>{t.form.servicePh}</option>
                      {tServices.items.map(s => <option key={s.title} value={s.title} style={{ background: '#1C1C1E' }}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{t.form.message}</label>
                    <textarea
                      rows={4}
                      style={{ ...inputStyle('message'), resize: 'vertical' }}
                      placeholder={t.form.messagePh}
                      value={form.message}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: sending ? 'rgba(249,115,22,0.5)' : 'linear-gradient(135deg,#F97316,#EA580C)', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em', fontSize: '1.1rem', boxShadow: '0 8px 32px rgba(249,115,22,0.4)', cursor: sending ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                  >
                    {sending ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                        {t.sending}
                      </>
                    ) : t.form.submit}
                  </button>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.73rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
                    {t.form.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div style={{ height: 80 }} />
      </div>
    </section>
  )
}

const WA_TEAM = [
  { name: 'Vanderlei', phone: '5542988041745' },
  { name: 'Antônio',   phone: '5542998682009' },
  { name: 'Márcio',    phone: '5542999850210' },
  { name: 'Guilherme', phone: '5542999470347' },
]

const FORMSUBMIT_EMAIL = 'VMandaimes@gmail.com'
function WhatsAppTeam() {
  const { lang } = useLang()
  const t = translations[lang].team
  const { ref, visible } = useInView()
  const message = encodeURIComponent(t.message)
  return (
    <section id="equipe-whatsapp" style={{ background: '#1C1C1E', position: 'relative', overflow: 'hidden' }}>
      {/* background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249,115,22,0.06) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(37,211,102,0.05) 0%, transparent 50%)',
      }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-24" ref={ref}>
        {/* heading */}
        <div className="text-center mb-14" style={revealUp(visible)}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#F97316' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.14em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
            <div className="h-px w-12" style={{ background: '#F97316' }} />
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            {t.title1} <span style={{ color: '#F97316' }}>{t.title2}</span>
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.45)', marginTop: 10, maxWidth: 480, margin: '10px auto 0' }}>
            {t.subtitle}
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WA_TEAM.map((m, i) => (
            <a
              key={i}
              href={`https://wa.me/${m.phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-team-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
                borderRadius: 20,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(16px)',
                textDecoration: 'none',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(249,115,22,0.35)'
                el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,115,22,0.15)'
                el.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.09)'
                el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.25)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* card top stripe */}
              <div style={{ width: '100%', height: 4, background: 'linear-gradient(to right, #F97316, #EA580C)', flexShrink: 0 }} />

              <div style={{ padding: '2rem 1.5rem 1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}>
                {/* avatar */}
                <div style={{
                  width: 82, height: 82, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.08))',
                  border: '2px solid rgba(249,115,22,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 0 6px rgba(249,115,22,0.06)',
                  flexShrink: 0,
                  animationDelay: `${i * 0.18}s`,
                }}>
                  <AttendantIcon size={48} />
                </div>

                {/* name + role */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '0.02em', lineHeight: 1.1 }}>{m.name}</div>
                </div>

                {/* divider */}
                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.07)' }} />

                {/* cta button */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  width: '100%', padding: '11px 0', borderRadius: 50,
                  background: 'linear-gradient(135deg, #25D366, #1aad52)',
                  color: '#fff',
                  fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.88rem',
                  letterSpacing: '0.03em',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.117 1.532 5.845L.057 23.887l6.204-1.627A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.36-.213-3.682.965.982-3.591-.234-.371A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  {t.start}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* bottom note */}
        <div className="text-center mt-10" style={revealUp(visible, 0.4)}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em' }}>
            {t.availability}
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  const tf = t.footer
  const navT = t.nav

  const navLinks = [
    { href: '#sobre', label: navT.about },
    { href: '#servicos', label: navT.services },
    { href: '#diferenciais', label: navT.differentials },
    { href: '#galeria', label: navT.gallery },
    { href: '#contato', label: navT.contact },
  ]

  return (
    <footer style={{ background: '#111113', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="footer-grid grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-5">
              <img src="logo_vm-1.png" alt="VM Andaimes" style={{ height: 72, width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 320, marginBottom: '1.5rem' }}>
              {tf.desc}
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/vmandaimes?igsh=MWNsYjEyYml2dDVwcw==' },
                { label: 'Facebook', href: 'https://www.facebook.com/share/19Gn5SNd9Q/' },
                { label: 'LinkedIn', href: 'https://br.linkedin.com/in/vm-andaimes-b6562b62' },
              ].map(sn => (
                <a key={sn.label} href={sn.href} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', fontFamily: 'Barlow, sans-serif', border: '1.5px solid rgba(249,115,22,0.4)', letterSpacing: '0.04em', textDecoration: 'none' }}>
                  {sn.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F97316', marginBottom: '1rem' }}>{tf.quickLinks}</h4>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="block mb-2 transition-colors hover:text-orange-400"
                style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F97316', marginBottom: '1rem' }}>{tf.servicesTitle}</h4>
            {t.services.items.slice(0, 5).map(s => (
              <a key={s.title} href="#servicos" className="block mb-2 transition-colors hover:text-orange-400"
                style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            {tf.copyright}
          </span>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            {[tf.privacy, tf.terms].map(l => (
              <a key={l} href="#" className="transition-colors hover:text-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Trabalhe Conosco ────────────────────────────────────────────────────────

function TrabalheConosco() {
  const { lang } = useLang()
  const t = translations[lang].careers
  const { ref, visible } = useInView()
  const [form, setForm] = useState({ name: '', phone: '', email: '', position: '', message: '' })
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (f: File | null) => {
    if (!f) return
    const ok = f.type === 'application/pdf' || f.type.startsWith('image/')
    if (!ok) return alert(t.invalidFile)
    if (f.size > 5 * 1024 * 1024) return alert(t.largeFile)
    setFile(f)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert(t.missingFile)
    setSending(true)
    const fd = new FormData()
    fd.append('_subject', `Candidatura — ${form.name} | VM Andaimes`)
    fd.append('Nome', form.name)
    fd.append('Telefone', form.phone)
    fd.append('Email', form.email)
    fd.append('Cargo desejado', form.position || 'Não informado')
    fd.append('Mensagem', form.message || 'Não informado')
    fd.append('_captcha', 'false')
    fd.append('_template', 'table')
    fd.append('attachment', file)
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, { method: 'POST', body: fd })
      if (!response.ok) throw new Error('Request failed')
      setSent(true)
    } catch (_) {
      alert(t.submitError)
    } finally {
      setSending(false)
    }
  }

  const iStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: `1.5px solid ${focused === field ? '#F97316' : 'rgba(255,255,255,0.08)'}`,
    fontFamily: 'Barlow, sans-serif', fontSize: '0.92rem', color: '#fff',
    background: focused === field ? 'rgba(249,115,22,0.04)' : 'rgba(255,255,255,0.04)',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
    boxShadow: focused === field ? '0 0 0 3px rgba(249,115,22,0.12)' : 'none',
  })

  return (
    <section id="trabalhe-conosco" style={{ background: '#141416', position: 'relative', overflow: 'hidden' }}>
      {/* top accent bar */}
      <div style={{ height: 3, background: 'linear-gradient(90deg,#F97316 0%,#EA580C 60%,transparent 100%)' }} />

      {/* background texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(249,115,22,0.06) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(249,115,22,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-6 py-24" ref={ref} style={{ position: 'relative' }}>

        {/* header */}
        <div className="mb-16" style={revealUp(visible)}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 3, height: 28, background: 'linear-gradient(to bottom,#F97316,#EA580C)', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.16em', color: '#F97316', textTransform: 'uppercase', fontWeight: 600 }}>{t.tag}</span>
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#fff', lineHeight: 1, letterSpacing: '-0.01em' }}>
            {t.title1} <span style={{ color: '#F97316' }}>{t.title2}</span>
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.45)', marginTop: 12, maxWidth: 480, lineHeight: 1.65 }}>
            {t.subtitle}
          </p>
        </div>

        <div className="tc-grid grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — vacancy cards */}
          <div className="flex flex-col gap-4">
            {t.vacancies.map((v, i) => {
              const VIcon = VACANCY_ICONS[i]
              return (
              <div key={i}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 18,
                  padding: '20px 22px',
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.1}s, border-color 0.25s, background 0.25s`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.3)'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(249,115,22,0.04)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <VIcon />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="vacancy-heading" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#fff', letterSpacing: '0.02em' }}>{v.title}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, color: '#F97316', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 6, padding: '2px 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{v.tag}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 6 }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              )
            })}

            {/* bottom note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderRadius: 12, background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)', marginTop: 4, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.55s' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>
                {t.note}
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ borderRadius: 20, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s', transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
            {/* form header stripe */}
            <div style={{ padding: '22px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(249,115,22,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg,#F97316,#EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#fff', letterSpacing: '0.04em' }}>{t.formTitle}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{t.fileTypes}</div>
                </div>
              </div>
            </div>

            <div className="tc-form-inner" style={{ padding: '24px 28px' }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-5">
                  <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'rgba(249,115,22,0.1)', border: '2px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.9rem', color: '#fff', marginBottom: 8 }}>{t.successTitle}</div>
                    <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.successBody}</p>
                  </div>
                  <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', position: '', message: '' }); setFile(null) }}
                    style={{ padding: '12px 28px', borderRadius: 50, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.06em', color: '#fff', background: 'linear-gradient(135deg,#F97316,#EA580C)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="tc-fields-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.name}</label>
                      <input required style={iStyle('name')} placeholder={t.placeholders.name}
                        value={form.name} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.phone}</label>
                      <input required style={iStyle('phone')} placeholder={t.placeholders.phone}
                        value={form.phone} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.email}</label>
                    <input required type="email" style={iStyle('email')} placeholder={t.placeholders.email}
                      value={form.email} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.position}</label>
                    <select style={{ ...iStyle('position'), cursor: 'pointer', appearance: 'none' as const }}
                      value={form.position} onFocus={() => setFocused('position')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, position: e.target.value }))}>
                      <option value="" style={{ background: '#1a1a1c' }}>{t.placeholders.position}</option>
                      {t.positions.map(o => (
                        <option key={o} value={o} style={{ background: '#1a1a1c' }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.message}</label>
                    <textarea rows={2} style={{ ...iStyle('message'), resize: 'none' }}
                      placeholder={t.placeholders.message}
                      value={form.message} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                  </div>

                  {/* drag & drop upload */}
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{t.labels.resume}</label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
                      style={{
                        border: `2px dashed ${dragOver ? '#F97316' : file ? 'rgba(249,115,22,0.45)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: 12, padding: '20px 18px',
                        background: dragOver ? 'rgba(249,115,22,0.06)' : file ? 'rgba(249,115,22,0.04)' : 'rgba(255,255,255,0.02)',
                        cursor: 'pointer', transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', gap: 14,
                      }}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: 11, background: file ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${file ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.07)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {file ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 18 15 15"/><line x1="12" y1="12" x2="12" y2="18"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                          </svg>
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {file ? (
                          <>
                            <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.87rem', color: '#F97316', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</div>
                            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{(file.size / 1024).toFixed(0)} KB · {t.replaceFile}</div>
                          </>
                        ) : (
                          <>
                            <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)' }}>{t.upload}</div>
                            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>{t.fileTypes}</div>
                          </>
                        )}
                      </div>
                      {file && (
                        <button type="button" onClick={e => { e.stopPropagation(); setFile(null) }}
                          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      )}
                    </div>
                    <input ref={fileInputRef} type="file" accept=".pdf,image/*" style={{ display: 'none' }}
                      onChange={e => handleFile(e.target.files?.[0] ?? null)} />
                  </div>

                  <button type="submit" disabled={sending}
                    style={{
                      padding: '15px 0', borderRadius: 12, border: 'none',
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em', color: '#fff',
                      background: sending ? 'rgba(249,115,22,0.45)' : 'linear-gradient(135deg,#F97316,#EA580C)',
                      boxShadow: sending ? 'none' : '0 8px 28px rgba(249,115,22,0.35)',
                      cursor: sending ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                      transition: 'transform 0.15s, box-shadow 0.15s', marginTop: 4,
                    }}
                    onMouseEnter={e => { if (!sending) (e.currentTarget.style.transform = 'scale(1.02)') }}
                    onMouseLeave={e => { (e.currentTarget.style.transform = 'scale(1)') }}>
                    {sending ? (
                      <>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        {t.submit}
                      </>
                    )}
                  </button>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: 2 }}>
                    {t.privacy}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Floating WhatsApp Menu ──────────────────────────────────────────────────

function WhatsAppFloat() {
  const { lang } = useLang()
  const t = translations[lang].team
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const message = encodeURIComponent(t.message)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="whatsapp-float" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>

      {/* team popup */}
      {open && (
        <div style={{
          background: 'rgba(20,20,22,0.97)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(20px)',
          boxShadow: '0 16px 56px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          width: 240,
          animation: 'waPopIn 0.22s cubic-bezier(0.22,1,0.36,1)',
          transformOrigin: 'bottom right',
        }}>
          {/* header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', boxShadow: '0 0 6px #25D366' }} className="animate-pulse" />
            <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#fff', letterSpacing: '0.02em' }}>{t.floatTitle}</span>
          </div>

          {/* contacts */}
          <div style={{ padding: '8px 0' }}>
            {WA_TEAM.map((m, i) => (
              <a
                key={i}
                href={`https://wa.me/${m.phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* avatar */}
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,88,12,0.1))',
                  border: '1.5px solid rgba(249,115,22,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <AttendantIcon size={22} />
                </div>

                {/* name + cta */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.1 }}>{m.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#25D366', fontWeight: 600, marginTop: 2 }}>{t.floatCta}</div>
                </div>

                {/* wa icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0, opacity: 0.8 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.117 1.532 5.845L.057 23.887l6.204-1.627A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.36-.213-3.682.965.982-3.591-.234-.371A9.818 9.818 0 1112 21.818z"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* main button */}
      <button
        onClick={() => setOpen(o => !o)}
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Fechar contatos do WhatsApp' : t.buttonTitle}
        className="whatsapp-btn"
        title={t.buttonTitle}
        style={{ position: 'static', transform: open ? 'scale(1.1) rotate(0deg)' : 'scale(1)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <WhatsAppIcon />
        )}
      </button>
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('vm-language')
    return saved === 'en' || saved === 'es' || saved === 'pt' ? saved : 'pt'
  })

  useEffect(() => {
    localStorage.setItem('vm-language', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Stats />
      <Contact />
      <WhatsAppTeam />
      <TrabalheConosco />
      <Footer />

      <WhatsAppFloat />
    </LangContext.Provider>
  )
}
