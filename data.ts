
/**
 * RE-EDIT THIS FILE TO CHANGE ALL PORTFOLIO CONTENT
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
    tagline: "Crafting digital experiences with precision, passion, and a touch of Indian soul.",
    bioShort: "I am a high-performance software engineer based in India, specializing in building premium, scalable web applications that merge world-class aesthetics with technical excellence.",
    bioLong: "With a deep-rooted passion for craftsmanship, I've spent the last 6 years transforming complex challenges into elegant, user-centric solutions. My approach is defined by a commitment to quality, a refined design sensibility, and a constant pursuit of innovation. I believe that software isn't just code; it's a digital manifestation of intent and excellence.",
    location: "Odisha, India",
    email: "soumya.das@example.com",
    phone: "+91 98765 43210",
    office: "Nimapada, Puri, Odisha, India",
    profileImage: "profile.png",
  },
  socials: [
    { name: "LinkedIn", url: "#", icon: "Linkedin" },
    { name: "GitHub", url: "#", icon: "Github" },
    { name: "Twitter", url: "#", icon: "Twitter" },
    { name: "Instagram", url: "#", icon: "Instagram" },
  ],
  skills: [
    { name: "React / Next.js", level: 95, icon: "Cpu" },
    { name: "TypeScript", level: 92, icon: "Code2" },
    { name: "Node.js", level: 88, icon: "Terminal" },
    { name: "PostgreSQL / Prisma", level: 85, icon: "Database" },
    { name: "AWS / DevOps", level: 80, icon: "Cloud" },
    { name: "UI/UX Design", level: 90, icon: "Layers" },
  ],
  projects: [
    {
      id: 1,
      title: "Vanguard Finance",
      category: "FinTech SaaS",
      description: "A luxury wealth management platform featuring real-time analytics and a bespoke investor portal.",
      image: "project1.png",
      tags: ["Next.js", "Tailwind", "D3.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Lumina AI",
      category: "Artificial Intelligence",
      description: "Cloud-native AI integration platform for enterprise-level operational efficiency.",
      image: "project2.png",
      tags: ["Python", "React", "Docker"],
      link: "#"
    },
    {
      id: 3,
      title: "Silk Route E-commerce",
      category: "Luxury Retail",
      description: "High-end marketplace for handcrafted Indian artisanal products with global logistics.",
      image: "project3.png",
      tags: ["TypeScript", "Shopify", "Node.js"],
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      company: "Innovate India Tech",
      role: "Lead Software Architect",
      period: "2021 — Present",
      description: "Directing the development of mission-critical cloud infrastructure for Fortune 500 clients."
    },
    {
      id: 2,
      company: "Nexus Digital Studio",
      role: "Senior Full Stack Engineer",
      period: "2018 — 2021",
      description: "Pioneered high-performance web solutions and mentored a team of 12 junior developers."
    },
    {
      id: 3,
      company: "StartUp Hub",
      role: "Full Stack Developer",
      period: "2016 — 2018",
      description: "Built the initial MVP for three venture-backed startups in the fintech space."
    }
  ],
  services: [
    {
      title: "Full Stack Development",
      description: "Building robust, scalable, and secure applications from the ground up using modern technology stacks.",
      icon: "Code"
    },
    {
      title: "UI/UX Architecture",
      description: "Designing premium digital interfaces that prioritize user experience without compromising on aesthetic luxury.",
      icon: "Palette"
    },
    {
      title: "CTO as a Service",
      description: "Strategic technical leadership and architectural consulting for growing startups and established brands.",
      icon: "ShieldCheck"
    }
  ],
  achievements: [
    {
      title: "Developer of the Year",
      organization: "India Tech Awards",
      year: "2023"
    },
    {
      title: "Open Source Contributor",
      organization: "React Foundation",
      year: "2022"
    },
    {
      title: "Best Fintech UI",
      organization: "Design Excellence Forum",
      year: "2021"
    }
  ]
};
