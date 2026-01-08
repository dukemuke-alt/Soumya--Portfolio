/**
 * RE-EDIT THIS FILE TO CHANGE ALL PORTFOLIO CONTENT
 * This is the single source of truth for the entire static website.
 */

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
}

export const portfolioData = {
  identity: {
    firstName: "Soumya",
    lastName: "Ranjan Das",
    role: "Full-Stack Architect",
    tagline: "Engineering luxury digital experiences with a modern Indian craftsmanship.",
    bioShort: "Based in Odisha, India, I architect high-performance digital systems that blend world-class technical precision with sophisticated aesthetic design.",
    bioLong: "For over 6 years, I have been obsessed with the intersection of performance and elegance. My philosophy is simple: software should feel like a finely tailored suit—bespoke, reliable, and effortless. I bring a uniquely Indian sense of patience and attention to detail to every line of code, ensuring that the final product is not just functional, but a piece of digital art.",
    location: "Bhubaneswar, India",
    email: "contact@soumyadas.com",
    phone: "+91 99370 00000",
    office: "Luxe Suite, Nimapada, Puri, Odisha",
    // Premium Profile Image URL
    profileImage: "https://i.ibb.co/Qvn1t6Kq/profile.png",
  },
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
  ],
  skills: [
    { name: "React / Next.js", level: 98, icon: "Cpu" },
    { name: "TypeScript", level: 94, icon: "Code2" },
    { name: "Node.js", level: 89, icon: "Terminal" },
    { name: "PostgreSQL", level: 86, icon: "Database" },
    { name: "UI/UX Design", level: 92, icon: "Layers" },
    { name: "System Design", level: 95, icon: "Layout" },
  ],
  projects: [
    {
      id: 1,
      title: "Royal Bengal Finance",
      category: "FinTech Platform",
      description: "A premium wealth management system designed for HNIs, featuring real-time portfolio tracking and elegant data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda540d3b9?q=80&w=1000&auto=format&fit=crop",
      tags: ["Next.js", "Highcharts", "PostgreSQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Nirvana OS",
      category: "Operating System UI",
      description: "A conceptual browser-based operating system focusing on mindfulness and minimal cognitive load.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      tags: ["TypeScript", "Canvas API", "WebWorkers"],
      link: "#"
    },
    {
      id: 3,
      title: "Ayurveda Digital",
      category: "Wellness SaaS",
      description: "A high-end marketplace and diagnostic tool for authentic Ayurvedic health practitioners globally.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Stripe Connect", "Node.js"],
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      company: "Elite Tech Solutions",
      role: "Lead Software Architect",
      period: "2022 — Present",
      description: "Spearheading the transition to micro-frontend architecture for global luxury brands."
    },
    {
      id: 2,
      company: "Dharma Digital Studio",
      role: "Senior Developer",
      period: "2019 — 2022",
      description: "Built and scaled 15+ premium web applications from inception to successful launch."
    },
    {
      id: 3,
      company: "Innovation Lab",
      role: "Software Engineer",
      period: "2017 — 2019",
      description: "Developed experimental UI components that were later adopted by major design systems."
    }
  ],
  services: [
    {
      title: "Bespoke Web Engineering",
      description: "End-to-end development of high-performance applications tailored to specific business luxury requirements.",
      icon: "Code"
    },
    {
      title: "Digital Brand Architecture",
      description: "Translating brand values into a visual language that speaks elegance and confidence through the screen.",
      icon: "Palette"
    },
    {
      title: "Technical Strategy",
      description: "Providing high-level architectural guidance to ensure your product is built on a foundation of timeless code.",
      icon: "ShieldCheck"
    }
  ],
  achievements: [
    {
      title: "Architect of Excellence",
      organization: "National Tech Forum",
      year: "2024"
    },
    {
      title: "Top 1% Contributor",
      organization: "StackOverflow Global",
      year: "2023"
    },
    {
      title: "Design Vanguard Award",
      organization: "Modern UI Collective",
      year: "2022"
    }
  ]
};