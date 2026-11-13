import {
  BookOpen,
  CodeXml,
  Database,
  GraduationCap,
  Home,
  MonitorSmartphone,
  Rocket,
  Search,
  Server,
  Wrench,
} from "lucide-react";
import { InfoCardProps, SkillCard } from "./types/types";
import App from "next/app";
import Navbar from "./components/Navbar";
import app from "next/app";
import { it } from "node:test";
import { title } from "process";
import style from "styled-jsx/style";
import page from "./page";

export const infoCards = [
  {
    icon: CodeXml,
    title: "Clean code",
    text: "Maintainable and scalable development.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive design",
    text: "Consistent experiences across devices.",
  },
  {
    icon: GraduationCap,
    title: "Problem solving",
    text: "Practical solutions to real problems.",
  },
  {
    icon: BookOpen,
    title: "Continuous learning",
    text: "Always improving development skills.",
  },
] satisfies InfoCardProps[];

export const skillCards = [
  {
    icon: CodeXml,
    title: "Frontend Development",
    skillsets: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skillsets: ["Node.js", "REST APIs", "Next.js API Routes", "Authentication"],
  },
  {
    icon: Database,
    title: "Database",
    skillsets: ["Supabase", "PostgreSQL", "Prisma", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    skillsets: ["Git", "GitHub", "VS Code", "Vercel", "npm"],
  },
] satisfies SkillCard[];

export const achievements = [
  {
    icon: GraduationCap,
    title: "Web Development Education",
    text: "Completed web developer education and developed a foundation in modern web technologies.",
  },
  {
    icon: CodeXml,
    title: "Full-Stack Development",
    text: "Built responsive applications with Next.js, TypeScript, Tailwind CSS, Supabase, and Prisma through practical project work.",
  },
  {
    icon: Rocket,
    title: "Freelance Developer Journey",
    text: "Developing real-world portfolio projects and preparing to offer web development services on freelance platforms.",
  },
] satisfies InfoCardProps[];

export const experience = [
  {
    icon: GraduationCap,
    title: "At my startup",
    subTitle: "Web Development Education",
    text: "Completed web developer education and developed a foundation in modern web technologies.",
  },
  {
    icon: CodeXml,
    title: "Full-Stack Development",
    text: "Built responsive applications with Next.js, TypeScript, Tailwind CSS, Supabase, and Prisma through practical project work.",
  },
  {
    icon: Rocket,
    title: "Freelance Developer Journey",
    text: "Developing real-world portfolio projects and preparing to offer web development services on freelance platforms.",
  },
] satisfies InfoCardProps[];

export const projectCards = [
  {
    projectId: "expense-tracker",
    icon: "/images/exp_trker.ico",
    title: "Expense Tracker",
    imageSrc: "/images/expense_tracker.png",
    skillsets: [
      "Full-stack personal finance management application",
      "User authentication and protected routes",
      "Dashboard with financial summary cards",
      "Total balance and monthly expense calculations",
      "Income vs Expenses charts",
      "Spending by category analytics",
      "Transaction CRUD operations",
      "Transaction search, filtering and pagination",
      "Account management and balance tracking",
      "Income and expense category management",
      "Category-based budget management",
      "Recent transactions and monthly budget overview",
      "Supabase database integration",
      "Row Level Security (RLS)",
      "Responsive dashboard and reusable UI components",
    ],
    TechStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Lucide React",
      "Recharts",
    ],
  },
  {
    projectId: "project-tracker",
    icon: "/images/proj_traker_icon.ico",
    title: "Project Tracker",
    imageSrc: "/images/projt_tracker.png",
    skillsets: [
      "Full-stack project management application",
      "GitHub authentication using NextAuth.js",
      "Protected routes and authenticated dashboard",
      "User-specific project management",
      "Create, read, update and delete projects (CRUD)",
      "Project search by name, client and description",
      "Project status filtering",
      "Project progress tracking",
      "Project status and progress synchronization",
      "Project value and due date management",
      "Dashboard statistics and project overview",
      "User-specific API authorization",
      "Prisma ORM database integration",
      "Loading states and error handling",
      "Form validation and submission handling",
      "Responsive dashboard and reusable components",
    ],
    TechStack: ["Next.js", "TypeScript", "Prisma ORM", "SQLite", "NextAuth.js", "GitHub OAuth", "CSS Modules", "React"],
  },
  {
    projectId: "socially",
    icon: "/images/social_ico.png",
    title: "Socially",
    imageSrc: "/images/socially.png",
    skillsets: [
      "Clerk authentication and user sync",
      "Create posts with optional image upload",
      "Interactive social feed with likes and comments",
      "Follow/unfollow users",
      "User profile pages with stats and edit form",
      "Post and liked-post tabs on profiles",
      "Notification center for likes, comments, and follows",
      "Responsive navbar and mobile/desktop layouts",
      "Dark mode support",
      "Prisma-powered PostgreSQL data model",
      "UploadThing image handling",
      "Realtime-like optimistic UI updates for likes and comments",
    ],
    TechStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS 3",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "UploadThing",
      "next-themes",
    ],
  },

  {
    projectId: "stock-market-data",
    icon: "/images/stock_ico.png",
    title: "Stock Market Data",
    imageSrc: "/images/stocks.png",
    skillsets: [
      "Displays a market overview, stock heatmap, top market stories, and market quotes using TradingView widgets.",
      "Authentication: Better Auth with email/password authentication.",
      "TradingView widgets and a list of popular stock symbols.",
      "MongoDB, accessed through Mongoose and Better Auth’s MongoDB adapter.",
      "Market data and charts: Embedded TradingView widgets.",
      "Background jobs and AI: Inngest handles signup events and uses Gemini to generate a personalized welcome-email introduction.",
    ],
    TechStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "React Hook Form",
      "MongoDB",
      "AI: Inngest, Gemini",
    ],
  },
  {
    projectId: "moviecorn",
    icon: "/images/movie_ico.png",
    title: "MovieCorn",
    imageSrc: "/images/movie.png",
    skillsets: [
      "React movie app built with Vite. ",
      "Loads popular movies from TMDB on first render",
      "Search form filters movies by title",
      "Favorites functionality-Users can add or remove movies from favorites",
      "A dedicated favorites view lists all saved movies",
      "Each movie card shows poster, title, and release year",
      "Nav bar with Home and Favorite links",
      "Uses React Router for client-side page switching",
    ],
    TechStack: [
      "React 19",
      "react-router-dom",
      "Vite 7",
      "JavaScript",
      "CSS",
      "Browser localStorage",
      "TMDB API",
      "Movie data source",
    ],
  },
];
