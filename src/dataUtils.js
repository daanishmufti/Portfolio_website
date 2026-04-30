import {
  blankSkill,
  defaultPortfolio,
  STORAGE_KEY,
} from './portfolioData'
import { skillIconMap } from './iconLibrary'

const deepClone = (value) => JSON.parse(JSON.stringify(value))

const uid = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

const inferSkillLogo = (name = '') => {
  const normalized = name.toLowerCase()
  const candidates = [
    { key: 'python', logo: '/skill-icons/python.svg' },
    { key: 'c++', logo: '/skill-icons/cplusplus.svg' },
    { key: 'react', logo: '/skill-icons/react.svg' },
    { key: 'node', logo: '/skill-icons/nodedotjs.svg' },
    { key: 'mongo', logo: '/skill-icons/mongodb.svg' },
    { key: 'postgres', logo: '/skill-icons/postgresql.svg' },
    { key: 'opencv', logo: '/skill-icons/opencv.svg' },
    { key: 'arduino', logo: '/skill-icons/arduino.svg' },
    { key: 'raspberry', logo: '/skill-icons/raspberrypi.svg' },
    { key: 'pandas', logo: '/skill-icons/pandas.svg' },
    { key: 'sfml', logo: '/skill-icons/sfml.png' },
    { key: 'problem', logo: '/skill-icons/leetcode.svg' },
  ]
  const match = candidates.find((item) => normalized.includes(item.key))
  return match ? match.logo : ''
}

export const normalizePortfolio = (raw) => {
  if (!raw || typeof raw !== 'object') {
    return deepClone(defaultPortfolio)
  }

  const safeProjects = Array.isArray(raw.projects)
    ? raw.projects
        .filter((item) => item && item.title && item.href)
        .map((item) => ({ id: item.id || uid(), ...item }))
    : deepClone(defaultPortfolio.projects)

  const safeCerts = Array.isArray(raw.certifications)
    ? raw.certifications
        .filter((item) => item && item.title && item.href)
        .map((item) => ({ id: item.id || uid(), ...item }))
    : deepClone(defaultPortfolio.certifications)

  const safeSkills = Array.isArray(raw.skills)
    ? raw.skills
        .filter((item) => item && item.name)
        .map((item) => ({
          id: item.id || uid(),
          name: item.name,
          category: item.category || 'General',
          icon: skillIconMap[item.icon] ? item.icon : blankSkill.icon,
          logo:
            typeof item.logo === 'string' && item.logo.trim().length > 0
              ? item.logo
              : inferSkillLogo(item.name),
        }))
    : deepClone(defaultPortfolio.skills)

  const safeBlogs = Array.isArray(raw.blogs)
    ? raw.blogs
        .filter((item) => item && item.title && item.href)
        .map((item) => ({
          id: item.id || uid(),
          title: item.title,
          date: item.date || '',
          summary: item.summary || '',
          href: item.href,
        }))
    : deepClone(defaultPortfolio.blogs)

  const safeExperiences = Array.isArray(raw.experiences)
    ? raw.experiences
        .filter((item) => item && item.role && item.company)
        .map((item) => ({
          id: item.id || uid(),
          role: item.role,
          company: item.company,
          period: item.period || '',
          location: item.location || '',
          highlights: Array.isArray(item.highlights)
            ? item.highlights.filter(Boolean)
            : [],
          docs: Array.isArray(item.docs)
            ? item.docs
                .filter((doc) => doc && doc.label && doc.href)
                .map((doc) => ({ label: doc.label, href: doc.href }))
            : [],
        }))
    : deepClone(defaultPortfolio.experiences)

  const safeResume =
    raw.resume && typeof raw.resume === 'object'
      ? {
          ...defaultPortfolio.resume,
          ...raw.resume,
          strengths: Array.isArray(raw.resume.strengths)
            ? raw.resume.strengths.filter(Boolean)
            : defaultPortfolio.resume.strengths,
          improvements: Array.isArray(raw.resume.improvements)
            ? raw.resume.improvements.filter(Boolean)
            : defaultPortfolio.resume.improvements,
        }
      : deepClone(defaultPortfolio.resume)

  return {
    hero: {
      ...defaultPortfolio.hero,
      ...(raw.hero || {}),
    },
    about: typeof raw.about === 'string' ? raw.about : defaultPortfolio.about,
    projects: safeProjects,
    certifications: safeCerts,
    skills: safeSkills,
    experiences: safeExperiences,
    blogs: safeBlogs,
    resume: safeResume,
  }
}

export const loadPortfolio = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return deepClone(defaultPortfolio)
    }
    return normalizePortfolio(JSON.parse(raw))
  } catch {
    return deepClone(defaultPortfolio)
  }
}

export const uidValue = uid
export const cloneValue = deepClone
