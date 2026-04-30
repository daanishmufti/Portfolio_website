import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Layers3,
  Search,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from 'lucide-react'

function SectionIntro({ label, title, copy }) {
  return (
    <div className="section-intro">
      {label ? <p className="section-label">{label}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  )
}

function PortfolioView({
  portfolio,
  filteredProjects,
  keyStats,
  projectSearch,
  setProjectSearch,
  projectFilter,
  setProjectFilter,
  projectFilters,
  socialLinks,
  skillIconMap,
}) {
  const [certPageIndex, setCertPageIndex] = useState(0)
  const stacks = projectFilters.filter((item) => item !== 'All').slice(0, 5)
  const certsPerView = 3
  const certPages = useMemo(() => {
    const items = portfolio.certifications || []
    if (items.length === 0) return []
    const pages = []
    const totalPages = Math.ceil(items.length / certsPerView)

    for (let page = 0; page < totalPages; page += 1) {
      const startIndex = page * certsPerView
      const windowItems = Array.from({ length: certsPerView }, (_, offset) => {
        const itemIndex = (startIndex + offset) % items.length
        return items[itemIndex]
      })
      pages.push(windowItems)
    }
    return pages
  }, [portfolio.certifications, certsPerView])
  const certPageCount = certPages.length
  const activeCertPage = certPageCount > 0 ? certPageIndex % certPageCount : 0

  useEffect(() => {
    if (certPageCount <= 1) return undefined
    const intervalId = window.setInterval(() => {
      setCertPageIndex((current) => (current + 1) % certPageCount)
    }, 4800)
    return () => window.clearInterval(intervalId)
  }, [certPageCount])

  const goToNextCert = () => {
    if (certPageCount <= 1) return
    setCertPageIndex((current) => (current + 1) % certPageCount)
  }

  const goToPrevCert = () => {
    if (certPageCount <= 1) return
    setCertPageIndex((current) => (current - 1 + certPageCount) % certPageCount)
  }
  const latestBlogs = useMemo(() => {
    return [...(portfolio.blogs || [])].sort((a, b) => {
      const aTime = Date.parse(a.date || '')
      const bTime = Date.parse(b.date || '')
      return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime)
    })
  }, [portfolio.blogs])

  const formatBlogDate = (value) => {
    const parsed = Date.parse(value || '')
    if (Number.isNaN(parsed)) return value || 'Update'
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
      new Date(parsed)
    )
  }

  return (
    <main className="neo-main">
      <section id="home" className="hero-shell section-3d">
        <div className="hero-content tilt-surface">
          <p className="hero-kicker">{portfolio.hero.eyebrow}</p>
          <h1>{portfolio.hero.title}</h1>
          <p className="hero-lead">{portfolio.hero.subtitle}</p>

          <div className="hero-cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects <ArrowRight size={16} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Connect
            </a>
          </div>

          <div className="hero-chip-row">
            {stacks.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>

          <div className="hero-metric-row">
            {keyStats.map((stat) => (
              <article className="metric-tile" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-visual" aria-label="Profile snapshot">
          <div className="avatar-sphere">
            <img src="/media/profile.jpg" alt="Portrait of Daanish Mufti" />
          </div>
        </aside>
      </section>

      <section id="about" className="section-shell section-3d">
        <SectionIntro title="About" />

        <article className="about-slab tilt-surface">
          <p>{portfolio.about}</p>
          <div className="about-badges">
            <span>
              <Sparkles size={15} /> Problem solving
            </span>
            <span>
              <Layers3 size={15} /> Full-stack delivery
            </span>
            <span>
              <Workflow size={15} /> Systems mindset
            </span>
          </div>
        </article>
      </section>

      <section id="experience" className="section-shell section-3d">
        <SectionIntro title="Experience" />

        <div className="experience-grid">
          {(portfolio.experiences || []).map((experience) => (
            <article key={experience.id} className="experience-card tilt-surface">
              <div className="experience-head">
                <div>
                  <p>
                    <Briefcase size={13} /> {experience.company}
                  </p>
                  <h3>{experience.role}</h3>
                </div>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul>
                {experience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {Array.isArray(experience.docs) && experience.docs.length > 0 ? (
                <div className="experience-docs">
                  {experience.docs.map((doc) => (
                    <a key={doc.label} href={doc.href} target="_blank" rel="noreferrer">
                      {doc.label} <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell section-3d">
        <div className="projects-header">
          <SectionIntro title="Projects" />

          <div className="project-controls">
            <label className="control-field">
              <span>
                <Search size={12} /> Search
              </span>
              <input
                type="search"
                value={projectSearch}
                onChange={(event) => setProjectSearch(event.target.value)}
                placeholder="title, stack, keyword"
              />
            </label>

            <label className="control-field">
              <span>
                <SlidersHorizontal size={12} /> Filter
              </span>
              <select
                value={projectFilter}
                onChange={(event) => setProjectFilter(event.target.value)}
              >
                {projectFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="empty-state">No project matched this search.</p>
        ) : (
          <div className="project-original-grid">
            {filteredProjects.map((project) => (
              <article className="project-original-card tilt-surface" key={project.id}>
                <a href={project.href} target="_blank" rel="noreferrer" className="project-original-link">
                  <div className="project-original-media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-original-body">
                    <div className="project-original-top">
                      <p>{project.stack}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <span className="project-original-open">
                      Open <ExternalLink size={14} />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="skills" className="section-shell section-3d">
        <SectionIntro
          title="Skills"
        />

        <div className="skills-matrix">
          {portfolio.skills.map((skill) => {
            const SkillIcon = skillIconMap[skill.icon] || Layers3
            return (
              <article className="skill-tile tilt-surface" key={skill.id}>
                <div className="skill-icon">
                  {skill.logo ? (
                    <img src={skill.logo} alt={`${skill.name} icon`} className="skill-logo" />
                  ) : (
                    <SkillIcon size={20} />
                  )}
                </div>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="certifications" className="section-shell section-3d">
        <SectionIntro title="Credentials" />

        <div className="cert-grid">
          <div className="cert-carousel tilt-surface" aria-label="Certifications carousel">
            <button
              type="button"
              className="cert-nav cert-nav-left"
              onClick={goToPrevCert}
              aria-label="Previous certification"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="cert-viewport">
              <div
                className="cert-track"
                style={{ transform: `translateX(-${activeCertPage * 100}%)` }}
              >
                {certPages.map((page, pageIndex) => (
                  <article className="cert-slide" key={`cert-page-${pageIndex}`}>
                    <div className="cert-page-grid">
                      {page.map((certification) => (
                        <a
                          key={certification.id}
                          className="cert-page-item"
                          href={certification.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={certification.image} alt={certification.title} loading="lazy" />
                          <span>
                            <GraduationCap size={14} />
                            {certification.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="cert-nav cert-nav-right"
              onClick={goToNextCert}
              aria-label="Next certification"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="cert-dots" aria-label="Certification slide indicators">
            {certPages.map((_, index) => (
              <button
                key={`cert-dot-${index}`}
                type="button"
                className={index === activeCertPage ? 'cert-dot active' : 'cert-dot'}
                onClick={() => setCertPageIndex(index)}
                aria-label={`Go to certification page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="section-shell section-3d">
        <SectionIntro title="Blog" />

        <div className="blog-grid">
          {latestBlogs.map((blog) => (
            <article key={blog.id} className="blog-card tilt-surface">
              <p className="blog-date">
                <CalendarDays size={13} /> {formatBlogDate(blog.date)}
              </p>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a href={blog.href} target="_blank" rel="noreferrer">
                Read <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="section-shell section-3d">
        <SectionIntro title="Resume" />

        <div className="resume-grid single">
          <article className="resume-card tilt-surface">
            <p className="resume-date">Updated: {portfolio.resume.reviewedOn}</p>
            <div className="resume-actions">
              <a className="btn btn-primary" href={portfolio.resume.file} download>
                Download Resume
              </a>
            </div>

            <div className="resume-preview-wrap">
              <iframe src={portfolio.resume.file} title="Daanish resume preview" />
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-shell section-3d">
        <SectionIntro
          label="Contact"
          copy="Internships, project work, and engineering partnerships."
        />

        <div className="contact-dock tilt-surface">
          {socialLinks.map((item) => {
            const SocialIcon = item.Icon
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span>
                  <SocialIcon size={15} />
                  {item.label}
                </span>
                <ArrowRight size={15} />
              </a>
            )
          })}
        </div>

      </section>
    </main>
  )
}

export default PortfolioView
