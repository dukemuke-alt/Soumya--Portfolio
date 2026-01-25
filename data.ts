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
    location: "Odisha, India",
    email: "soumyaranjan.baroda@gmail.com",
    phone: "+91 73775 04790",
    office: "Badagan, Nimapada, Puri, Odisha",
    // Premium Profile Image URL
    profileImage: "https://i.ibb.co/Qvn1t6Kq/profile.png",
    // Premium Logo Image URL (Using profile as placeholder, replace with actual logo)
    logo: "https://i.ibb.co/ch3mTNxs/daslogo.png",
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
      title: "A Cloth Store",
      category: "E-Commerce",
      description: "A premium clothing store website built with React and TypeScript, featuring an elegant, responsive UI, smooth animations, and a scalable frontend architecture inspired by modern e-commerce experiences.",
      image: "https://i.ibb.co/yn95g82w/image.png",
      tags: ["Next.js", "Highcharts", "PostgreSQL"],
      link: "https://pixel-print.store/?i=1"
    },
    {
      id: 2,
      title: "Salon Landing Page",
      category: "Beauty Parlour & Saloon",
      description: "A modern salon landing page designed with a premium, aesthetic UI, smooth animations, and a responsive layout to showcase services, pricing, and brand identity with elegance.",
      image: "https://i.ibb.co/gZqH4nGY/project1.jpg",
      tags: ["TypeScript", "Canvas API", "WebWorkers"],
      link: "https://getthelookunisexsaloon.gt.tc/index.php"
    },
    {
      id: 3,
      title: "Salon Landing Page",
      category: "Wellness SaaS",
      description: "A modern salon landing page designed with a premium, aesthetic UI, smooth animations, and a responsive layout to showcase services, pricing, and brand identity with elegance.",
      image: "https://i.ibb.co/pvWCC74Y/project2.png",
      tags: ["React", "Stripe Connect", "Node.js"],
      link: "https://dainasaloon.page.gd/"
    },
    {
      id: 4,
      title: "Dental Clinic Landing Page",
      category: "Dental Clinic",
      description: "A professional dental clinic website featuring a clean, modern UI, responsive design, and clear service presentation to build trust and enhance patient engagement.",
      image: "https://i.ibb.co/CKjs65sN/image.png",
      tags: ["React", "Stripe Connect", "Node.js"],
      link: "https://sample-dental-2.vercel.app/"
    },
    {
      id: 5,
      title: "Dental Clinic Landing Page",
      category: "Dental Clinic",
      description: "A professional dental clinic website featuring a clean, modern UI, responsive design, and clear service presentation to build trust and enhance patient engagement.",
      image: "https://i.ibb.co/ynYbt4f2/image.png",
      tags: ["React", "Stripe Connect", "Node.js"],
      link: "#"
    },
    {
      id: 6,
      title: "Dental Clinic Landing Page",
      category: "Dental Clinic",
      description: "A professional dental clinic website featuring a clean, modern UI, responsive design, and clear service presentation to build trust and enhance patient engagement.",
      image: "https://i.ibb.co/KxKp0rNN/image.png",
      tags: ["React", "Stripe Connect", "Node.js"],
      link: "https://dr-ma-an-s-superspeciality-dental-i.vercel.app/"
    },
    {
      id: 7,
      title: "Tatto Studio Landing Page",
      category: "Tatto Studio",
      description: "Your story, our canvas. Specializing in custom, unique tattoos with passionate artists, a commitment to cleanliness, and an unforgettable experience. Let's create your forever art.",
      image: "https://i.ibb.co/DxvtN12/image.png",
      tags: ["React", "Node.js"],
      link: "https://stylontattoo-com.vercel.app/"
    },
    {
      id: 8,
      title: "Tatto Studio Landing Page",
      category: "Tatto Studio",
      description: "Your story, our canvas. Specializing in custom, unique tattoos with passionate artists, a commitment to cleanliness, and an unforgettable experience. Let's create your forever art.",
      image: "https://i.ibb.co/4RsDrnjb/image.png",
      tags: ["React", "Node.js"],
      link: "https://soumya-tattoz.vercel.app/"
    },
    {
      id: 9,
      title: "Physiotherapy Clinic Landing Page",
      category: "Physiotherapy Clinic",
      description: "Premium physiotherapy clinic offering personalized rehabilitation, pain relief, and movement recovery using advanced techniques and expert care.",
      image: "https://i.ibb.co/svLwTwj6/image.png",
      tags: ["React", "Node.js"],
      link: "https://elite-physio-fawn.vercel.app/"
    },
    {
      id: 10,
      title: "Travel Agency Landing Page",
      category: "Travel Agency",
      description: "Modern travel agency offering personalized global itineraries, luxury tour packages, and seamless booking experiences using AI-driven planning and expert local insights.",
      image: "https://i.ibb.co/Xr5RyHwn/2461-FE2-F-AF4-E-4-A6-B-8-AA2-4-D0-D3-ABF61-E7.png",
      tags: ["React", "Node.js"],
      link: "https://kukreti-travels.vercel.app/"
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