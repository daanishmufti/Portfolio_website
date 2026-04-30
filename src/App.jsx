import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { socialLinks, skillIconMap } from './iconLibrary'
import { loadPortfolio } from './dataUtils'
import { navigation } from './portfolioData'
import PortfolioView from './components/PortfolioView'

function App() {
  const [portfolio] = useState(() => loadPortfolio())
  const [projectSearch, setProjectSearch] = useState('')
  const [projectFilter, setProjectFilter] = useState('All')
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const sections = document.querySelectorAll('.section-3d, .footer-bar')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.16 }
    )

    sections.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const topbar = document.querySelector('.topbar')
    if (!topbar) return undefined

    const root = document.documentElement
    const updateOffset = () => {
      const top = Number.parseFloat(window.getComputedStyle(topbar).top || '0') || 0
      const height = topbar.getBoundingClientRect().height
      const offset = Math.ceil(height + top + 12)
      root.style.setProperty('--nav-offset', `${offset}px`)

      const brand = topbar.querySelector('.brand-pill')
      const brandWidth = brand ? Math.ceil(brand.getBoundingClientRect().width) : 0
      topbar.style.setProperty('--brand-slot-width', `${brandWidth}px`)
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)
    window.addEventListener('orientationchange', updateOffset)

    let resizeObserver
    if (typeof window.ResizeObserver === 'function') {
      resizeObserver = new window.ResizeObserver(updateOffset)
      resizeObserver.observe(topbar)
    }

    return () => {
      window.removeEventListener('resize', updateOffset)
      window.removeEventListener('orientationchange', updateOffset)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || '#home')
    window.addEventListener('hashchange', syncHash)
    syncHash()
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.tilt-surface'))
    if (elements.length === 0) return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const cleanups = []
    let rafId = 0
    const states = new Map()

    const tick = () => {
      states.forEach((state, element) => {
        state.currentX += (state.targetX - state.currentX) * 0.13
        state.currentY += (state.targetY - state.currentY) * 0.13
        element.style.setProperty('--rx', `${state.currentY.toFixed(2)}deg`)
        element.style.setProperty('--ry', `${state.currentX.toFixed(2)}deg`)
      })
      rafId = window.requestAnimationFrame(tick)
    }

    elements.forEach((element) => {
      states.set(element, {
        targetX: 0,
        targetY: 0,
        currentX: 0,
        currentY: 0,
      })

      const move = (event) => {
        const rect = element.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const midX = rect.width / 2
        const midY = rect.height / 2
        const maxTilt = 8
        const nextY = ((midY - y) / midY) * maxTilt
        const nextX = ((x - midX) / midX) * maxTilt
        const state = states.get(element)
        if (state) {
          state.targetX = nextX
          state.targetY = nextY
        }
      }

      const leave = () => {
        const state = states.get(element)
        if (state) {
          state.targetX = 0
          state.targetY = 0
        }
      }

      element.addEventListener('pointermove', move)
      element.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        element.removeEventListener('pointermove', move)
        element.removeEventListener('pointerleave', leave)
      })
    })

    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(rafId)
      cleanups.forEach((cleanup) => cleanup())
      states.clear()
    }
  }, [portfolio])

  const projectFilters = useMemo(() => {
    const stacks = portfolio.projects.map((item) => item.stack).filter(Boolean)
    return ['All', ...new Set(stacks)]
  }, [portfolio.projects])

  const filteredProjects = useMemo(() => {
    const query = projectSearch.toLowerCase().trim()
    return portfolio.projects.filter((project) => {
      const matchesFilter =
        projectFilter === 'All' || project.stack === projectFilter
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.toLowerCase().includes(query)
      return matchesFilter && matchesSearch
    })
  }, [portfolio.projects, projectSearch, projectFilter])

  const keyStats = [
    { label: 'Projects', value: String(portfolio.projects.length) },
    { label: 'Certifications', value: String(portfolio.certifications.length) },
    { label: 'Skills', value: String(portfolio.skills.length) },
  ]

  return (
    <>
      <div className="backdrop-glow backdrop-glow-1" />
      <div className="backdrop-glow backdrop-glow-2" />
      <div className="digital-mesh-layer" />
      <div className="scanline-layer" />

      <div className="page-shell">
        <header className="topbar">
          <a
            className="brand-pill"
            href="#home"
            aria-label="Homepage"
            onClick={() => setActiveHash('#home')}
          >
            <img src="/media/profile.jpg" alt="Daanish profile" />
            <span>Daanish Mufti</span>
          </a>
          <nav className="nav-links" aria-label="Section navigation">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={activeHash === item.href ? 'active' : ''}
                aria-current={activeHash === item.href ? 'page' : undefined}
                onClick={() => setActiveHash(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className="topbar-spacer" aria-hidden="true" />
        </header>

        <PortfolioView
          portfolio={portfolio}
          filteredProjects={filteredProjects}
          keyStats={keyStats}
          projectSearch={projectSearch}
          setProjectSearch={setProjectSearch}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          projectFilters={projectFilters}
          socialLinks={socialLinks}
          skillIconMap={skillIconMap}
        />

        <footer className="footer-bar">
          <p>&copy; {new Date().getFullYear()} Daanish Ahmad Mufti</p>
        </footer>
      </div>
    </>
  )
}

export default App
