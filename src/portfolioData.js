export const STORAGE_KEY = 'portfolio-data-2026-v1'

const uid = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const skillLogoOptions = [
  { label: 'Python', value: '/skill-icons/python.svg' },
  { label: 'C++', value: '/skill-icons/cplusplus.svg' },
  { label: 'React', value: '/skill-icons/react.svg' },
  { label: 'Node.js', value: '/skill-icons/nodedotjs.svg' },
  { label: 'MongoDB', value: '/skill-icons/mongodb.svg' },
  { label: 'PostgreSQL', value: '/skill-icons/postgresql.svg' },
  { label: 'OpenCV', value: '/skill-icons/opencv.svg' },
  { label: 'Arduino', value: '/skill-icons/arduino.svg' },
  { label: 'Raspberry Pi', value: '/skill-icons/raspberrypi.svg' },
  { label: 'Pandas', value: '/skill-icons/pandas.svg' },
  { label: 'SFML', value: '/skill-icons/sfml.png' },
  { label: 'LeetCode', value: '/skill-icons/leetcode.svg' },
  { label: 'JavaScript', value: '/skill-icons/javascript.svg' },
  { label: 'HTML5', value: '/skill-icons/html5.svg' },
  { label: 'CSS', value: '/skill-icons/css.svg' },
  { label: 'Git', value: '/skill-icons/git.svg' },
  { label: 'Linux', value: '/skill-icons/linux.svg' },
]

export const defaultPortfolio = {
  hero: {
    eyebrow: 'Software Engineer | GIKI Computer Science',
    title: 'Daanish Ahmad Mufti',
    subtitle:
      'I build full-stack products and practical systems across MERN, Python, and modern web architecture.',
  },
  about:
    "I am a Computer Science undergraduate at GIKI (2023-2027) with hands-on software engineering experience from Synergy-IT Pakistan. My focus is full-stack engineering, scalable web systems, and turning product ideas into reliable real-world software.",
  experiences: [
    {
      id: uid(),
      role: 'Software Engineer Intern',
      company: 'Synergy-IT Pakistan',
      period: 'Jul 2025 - Aug 2025',
      location: 'Pakistan',
      highlights: [
        'Contributed across React frontend and full-stack modules using MERN, Python, and .NET.',
        'Helped deliver .NET 4 to .NET 8 migration work with Umbraco CMS modernization.',
        'Built production-focused tooling including Stripe payments and OCR-based document comparison utilities.',
      ],
      docs: [
        {
          label: 'Internship Letter',
          href: 'https://www.linkedin.com/in/daanish-mufti-1451a0290/',
        },
        {
          label: 'Completion Certificate',
          href: 'https://www.linkedin.com/in/daanish-mufti-1451a0290/',
        },
      ],
    },
  ],
  projects: [
    {
      id: uid(),
      title: 'BorrowBee',
      stack: 'Full-Stack Web',
      description: 'Book lending and borrowing platform for communities.',
      href: 'https://www.borrowbee.site/',
      image: '/media/project-borrowbee.png',
    },
    {
      id: uid(),
      title: 'Sorting Visualiser',
      stack: 'C++ / SFML',
      description: 'Interactive sorting visualizer with speed and dataset controls.',
      href: 'https://github.com/daanishmufti/Sorting-Visualiser',
      image: '/media/project-sorting.jpg',
    },
    {
      id: uid(),
      title: 'SnakeNopolis',
      stack: 'Game Dev',
      description: 'Retro style 2D snake game with multiple difficulty levels.',
      href: 'https://github.com/daanishmufti/SnakeNopolis',
      image: '/media/project-snakenopolis.jpg',
    },
    {
      id: uid(),
      title: 'Cluster Analysis Tool',
      stack: 'Data Systems',
      description: 'C++ clustering workflow and correlation analysis tool.',
      href: 'https://github.com/daanishmufti/OOP/tree/main/Cluster%20Analysis%20Tool',
      image: '/media/project-cluster.jpg',
    },
    {
      id: uid(),
      title: 'GOMUKU AI',
      stack: 'Algorithms',
      description: 'Command line strategy game with PvP and AI modes.',
      href: 'https://github.com/daanishmufti/OOP/tree/main/Advannced%20%20pvp%2C%20pvp%20Ai%20tic%20cross%20game',
      image: '/media/project-gomoku.jpg',
    },
    {
      id: uid(),
      title: 'GIKI-OLX Marketplace',
      stack: 'React + Express',
      description: 'Marketplace platform for the GIKI community, built as a structured alternative to WhatsApp-based buying/selling.',
      href: 'https://github.com/daanishmufti',
      image: '/media/project-gomoku.jpg',
    },
    {
      id: uid(),
      title: 'TutorMate',
      stack: 'React + FastAPI + LangChain',
      description: 'Learning companion with assistant flows, notes, quizzes, and progress tracking for student-focused study workflows.',
      href: 'https://github.com/daanishmufti',
      image: '/media/project-cluster.jpg',
    },
  ],
  certifications: [
    {
      id: uid(),
      title: 'Udemy Certification 1',
      href: 'https://www.udemy.com/certificate/UC-59f4484b-502a-4835-b88d-56b6d739a1cc/',
      image: '/media/cert-1.jpg',
    },
    {
      id: uid(),
      title: 'Udemy Certification 2',
      href: 'https://www.udemy.com/certificate/UC-99c3c959-51f6-41c3-8fb2-aae56dffcd06/',
      image: '/media/cert-2.jpg',
    },
    {
      id: uid(),
      title: 'Udemy Certification 3',
      href: 'https://www.udemy.com/certificate/UC-8404e7fe-061d-4540-8cde-5713e93be548/',
      image: '/media/cert-3.jpg',
    },
    {
      id: uid(),
      title: 'Udemy Certification 4',
      href: 'https://www.udemy.com/certificate/UC-0ad63a60-0e70-4ed4-8dd6-6a8b6dd64c3c/',
      image: '/media/cert-4.jpg',
    },
    {
      id: uid(),
      title: 'Udemy Certification 5',
      href: 'https://www.udemy.com/certificate/UC-2b376eea-4aaf-403c-ac5b-2f9bb9f7ec97/',
      image: '/media/cert-5.jpg',
    },
  ],
  skills: [
    {
      id: uid(),
      name: 'Python',
      category: 'Language',
      icon: 'Code2',
      logo: '/skill-icons/python.svg',
    },
    {
      id: uid(),
      name: 'C / C++',
      category: 'Language',
      icon: 'Binary',
      logo: '/skill-icons/cplusplus.svg',
    },
    {
      id: uid(),
      name: 'React',
      category: 'Frontend',
      icon: 'Layers',
      logo: '/skill-icons/react.svg',
    },
    {
      id: uid(),
      name: 'Node.js',
      category: 'Backend',
      icon: 'Server',
      logo: '/skill-icons/nodedotjs.svg',
    },
    {
      id: uid(),
      name: 'MongoDB',
      category: 'Database',
      icon: 'Database',
      logo: '/skill-icons/mongodb.svg',
    },
    {
      id: uid(),
      name: 'PostgreSQL',
      category: 'Database',
      icon: 'HardDrive',
      logo: '/skill-icons/postgresql.svg',
    },
    {
      id: uid(),
      name: 'OpenCV',
      category: 'Computer Vision',
      icon: 'Cpu',
      logo: '/skill-icons/opencv.svg',
    },
    {
      id: uid(),
      name: 'SFML / Game Dev',
      category: 'Game Systems',
      icon: 'Gamepad2',
      logo: '/skill-icons/sfml.png',
    },
    {
      id: uid(),
      name: 'Arduino',
      category: 'Hardware',
      icon: 'Wrench',
      logo: '/skill-icons/arduino.svg',
    },
    {
      id: uid(),
      name: 'Raspberry Pi',
      category: 'Embedded',
      icon: 'Monitor',
      logo: '/skill-icons/raspberrypi.svg',
    },
    {
      id: uid(),
      name: 'Pandas',
      category: 'Data',
      icon: 'Network',
      logo: '/skill-icons/pandas.svg',
    },
    {
      id: uid(),
      name: 'Problem Solving',
      category: 'Core',
      icon: 'BrainCircuit',
      logo: '/skill-icons/leetcode.svg',
    },
  ],
  blogs: [
    {
      id: uid(),
      title: 'Building a Hardware Tic Tac Toe System',
      date: '2026-01-17',
      summary:
        'A digital logic design project using breadboard circuits, logic ICs, LEDs, and push buttons with reset and turn-control logic.',
      href: 'https://www.linkedin.com/posts/daanish-mufti-1451a0290_tic-tac-toe-dld-project-activity-7285941952821235713-k4KQ',
    },
    {
      id: uid(),
      title: 'Mess Management Status App with Flask + Twilio',
      date: '2025-08-12',
      summary:
        'A lightweight utility that keeps mess status visible in real time and demonstrates practical backend integration for campus operations.',
      href: 'https://www.linkedin.com/posts/daanish-mufti-1451a0290_softwaredevelopment-flask-python-activity-7361041580991635456-B8fN',
    },
    {
      id: uid(),
      title: 'What I Learned During My Synergy-IT Internship',
      date: '2025-08-25',
      summary:
        'Key takeaways from working on .NET migration, Stripe modules, OCR-based document comparison, and full-stack product delivery.',
      href: 'https://www.linkedin.com/in/daanish-mufti-1451a0290/',
    },
  ],
  resume: {
    file: '/media/daanish-resume.pdf',
    reviewedOn: 'March 2026',
    strengths: [
      'Strong internship impact with real product contributions (.NET migration, Stripe module, OCR tooling).',
      'Clear full-stack breadth across React, Node.js, Python, FastAPI, GraphQL, and databases.',
      'Good mix of academic and practical projects, including marketplace, education, and automation use cases.',
    ],
    improvements: [
      'Standardize formatting and spelling to remove visual noise and improve readability.',
      'Add measurable outcomes for each experience item (time saved, performance gains, users served).',
      'Attach direct GitHub/live links for major projects to improve recruiter verification speed.',
    ],
  },
}

export const blankProject = {
  title: '',
  stack: '',
  description: '',
  href: '',
  image: '',
}

export const blankCertification = {
  title: '',
  href: '',
  image: '',
}

export const blankSkill = {
  name: '',
  category: '',
  icon: 'Code2',
  logo: '',
}

export const blankBlog = {
  title: '',
  date: '',
  summary: '',
  href: '',
}
