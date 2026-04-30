import {
  Binary,
  BookOpen,
  Bot,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  HardDrive,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Network,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Wrench,
} from 'lucide-react'

export const skillIconMap = {
  Code2,
  Database,
  Cpu,
  BrainCircuit,
  Gamepad2,
  Wrench,
  Globe,
  Monitor,
  Server,
  Sparkles,
  Layers,
  HardDrive,
  Binary,
  Network,
  BookOpen,
  Bot,
  ShieldCheck,
  Rocket,
  SquareTerminal,
  Settings,
}

export const skillIconOptions = Object.keys(skillIconMap)

export const socialLinks = [
  { label: 'Email', href: 'mailto:daanish.mufti@gmail.com', Icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daanish-mufti-1451a0290/',
    Icon: Briefcase,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/daanishmufti/daanishmufti',
    Icon: SquareTerminal,
  },
  {
    label: 'Location',
    href: 'https://www.google.com/maps?q=34.06916962357048,72.64412803584531',
    Icon: MapPin,
  },
]
