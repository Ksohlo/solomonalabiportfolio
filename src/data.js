import profileImg from "./assets/img.png";
import img1 from "./assets/projects/addre.png";
import motfam from "./assets/projects/motfam.png";
import img2 from "./assets/projects/pp.png";
import img3 from "./assets/projects/Edusafe.png";
import img4 from "./assets/projects/first_choice.png";

// export interface PersonalInfo {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   location: string;
//   profileImage: string;
//   resumeUrl: string;
//   socials: {
//     github: string;
//     linkedin: string;
//     twitter: string;
//   };
// }

export const personalInfo = {
  name: "Solomon Alabi",
  title: "Senior Full Stack & Mobile Engineer",
  email: "alabisolomon@outlook.com",
  phone: "+2348026865926",
  location: "Remote / Worldwide",
  profileImage: profileImg,
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1XU7boFyQXG6gPTnIqD99k3I9TU1dHlJl",
  socials: {
    github: "https://github.com/Ksohlo",
    linkedin: "https://www.linkedin.com/in/k-sohlo/",
    twitter: "https://twitter.com/ALABISo71513241",
  },
};

// export interface ProjectItem {
//   id: number;
//   category: "all" | "web" | "app";
//   image: string;
//   name: string;
//   tagline: string;
//   des: string;
//   stack: string[];
//   link: {
//     live: string;
//     code: string;
//   };
//   type: "WEB" | "APP";
//   appLink: {
//     android: string;
//     ios: string;
//   };
//   highlights?: string[];
// }

export const ProjectList = [
  {
    id: 1,
    category: "app",
    image:
      "https://play-lh.googleusercontent.com/h9EjcgKPcBWNS1H46tuxsOFbQVyrlZxrpRIAXOZi1dqlykVCcq0TOun7gJ_a_QpZzwZy2Nc94_mPHWCdk_nEOoE=w240-h480-rw",
    name: "Air Force Alumni Mobile App",
    tagline: "Community & Alumni Engagement Platform",
    des: "A cross-platform mobile app for NAF Alumni to connect, share memories, track events, celebrate achievements, and facilitate secure donations.",
    stack: ["React Native", "Expo", "Firebase", "EAS Build", "Tailwind CSS"],
    link: {
      live: "",
      code: "",
    },
    type: "APP",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.CHSG.AFSS",
      ios: "https://apps.apple.com/ng/app/afss-kaduna-alumni/id6753322024",
    },
    highlights: [
      "Cross-platform iOS & Android distribution via Expo EAS",
      "Realtime messaging and newsfeed powered by Firebase",
      "Integrated donation payment gateways and member verification",
    ],
  },
  {
    id: 2,
    category: "app",
    image: "https://sayemtransportlogistics.com/assets/img/favicon.png",
    name: "Sayem Route App",
    tagline: "Global Ride-Hailing & Logistics Mobile Solution",
    des: "A ride-hailing and parcel logistics mobile application enabling seamless international transport, instant booking dispatch, and automated payment gateways.",
    stack: ["React Native", "Expo CLI", "Firebase", "Payaza Gateway", "EAS"],
    link: {
      live: "",
      code: "",
    },
    type: "APP",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.chsg.sayemroute",
      ios: "https://apps.apple.com/us/app/sayem-route/id6765875582",
    },
    highlights: [
      "Realtime geolocation tracking & automated route calculation",
      "Multi-currency instant payment checkout via Payaza SDK",
      "High performance mobile state management",
    ],
  },
  {
    id: 3,
    category: "web",
    image: "https://admin.afcskdalumni.com/logo.svg",
    name: "AFSS Alumni Admin Portal",
    tagline: "Enterprise Data & Operations Management Dashboard",
    des: "An intuitive enterprise admin console engineered for full data management, user verification, financial audit logs, and push notification moderation for AFSS Kaduna Alumni.",
    stack: ["React.js", "Tanstack Query", "Tailwind CSS", "RESTful API"],
    link: {
      live: "https://admin.afcskdalumni.com",
      code: "",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
    highlights: [
      "Optimized query caching and pagination with Tanstack React Query",
      "Role-based access control (RBAC) and security token management",
      "Data export engines and real-time activity audit log",
    ],
  },
  {
    id: 4,
    category: "web",
    image: img4,
    name: "FirstChoice Super Store",
    tagline: "E-Commerce Suite with Custom CMS & Payment Gateway",
    des: "Full-scale modern e-commerce platform built with Next.js, incorporating a custom administrative CMS, inventory management, dynamic cart, and secure online payments.",
    stack: ["Next.js", "Prisma ORM", "Express.js", "Node.js", "Tailwind CSS"],
    link: {
      live: "https://firstchoicesupermart.com/",
      code: "",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
    highlights: [
      "Server-side rendering (SSR) for ultra-fast SEO indexing",
      "Custom relational schema with Prisma ORM and Node.js backend",
      "Seamless payment gateway integration and instant invoice generation",
    ],
  },
  {
    id: 5,
    category: "app",
    image: img3,
    name: "Edusafe App",
    tagline: "Realtime educational transport app for parents and Drivers",
    des: "A mobile app that allows parents onboard their wards and monitor them in realtime whenever they are taken to school.",
    stack: ["React.js", "Express.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    link: {
      live: "",
      code: "",
    },
    type: "APP",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.ksohlo.Edusafe",
      ios: "",
    },
    highlights: [
      "Docker for Containerization",
      "PostgreSQL relational database architecture",
      "Parent and Driver's interactive dashboard & realtime tracking",
    ],
  },
  {
    id: 6,
    category: "web",
    image: img2,
    name: "Project Pulse",
    tagline: "Academic Research & Thesis Repository Engine",
    des: "A centralized cloud store for indexing, publishing, and archiving undergraduate & postgraduate research papers with advanced search and preview functionality.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    link: {
      live: "https://projectpulse.pages.dev/",
      code: "https://github.com/AOTRA68/projectPulse",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
    highlights: [
      "Full-text search indexing across research titles and document metadata",
      "Document upload and PDF viewer integration",
      "RESTful microservice architecture",
    ],
  },
  {
    id: 7,
    category: "web",
    image: motfam,
    name: "Motfam Suites",
    tagline: "Hotel Website for booking and enquires.",
    des: "An Informational website for motfam suites to get the location of the hotel, make bookings, make inquiries, and send the contact email to the hotel.",
    stack: ["React", "php", "Tailwind", "Typescript", ""],
    link: {
      live: "https://motfamsuites.com",
      code: "",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
    highlights: [
      "Hotel information and location Design",
      "Enquires medium",
      "Room bookings and price list",
    ],
  },
  {
    id: 8,
    category: "web",
    image: img1,
    name: "Addre RFID Attendance System",
    tagline: "Hardware-Integrated Attendance & Identity Tracker",
    des: "An IoT hardware and web-based RFID management system for automated attendance tracking, instant logging, student profiles, and analytical reporting.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "IoT/RFID APIs"],
    link: {
      live: "https://addre.pages.dev/",
      code: "https://github.com/Ksohlo/Addre",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
    highlights: [
      "Hardware RFID card reader integration with realtime WebSockets",
      "Automated attendance report generation in CSV/PDF",
      "High scalability and sub-second attendance verification",
    ],
  },
];

export const TechCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & DB" },
  { id: "cloud", label: "Cloud & Tools" },
];

// export interface TechItem {
//   id: number;
//   category: string;
//   name: string;
//   icon: string;
//   badge: "Expert" | "Advanced" | "Intermediate";
//   des: string;
// }

export const TechList = [
  {
    id: 1,
    category: "frontend",
    name: "React.js / Next.js",
    icon: "bx bxl-react",
    badge: "Expert",
    des: "Building high-performance SSR & SPA web applications with modern state management, SSR, ISR, and component architectures.",
  },
  {
    id: 2,
    category: "frontend",
    name: "React Native (Expo)",
    icon: "bx bxl-react",
    badge: "Advanced",
    des: "Cross-platform iOS and Android mobile engineering with native modules, Expo EAS builds, and push notification pipelines.",
  },
  {
    id: 3,
    category: "frontend",
    name: "TypeScript",
    icon: "bx bxl-typescript",
    badge: "Advanced",
    des: "Type-safe codebases, strict interfaces, generics, and seamless API contract enforcement for enterprise scale applications.",
  },
  {
    id: 4,
    category: "frontend",
    name: "Tailwind CSS",
    icon: "bx bxl-tailwind-css",
    badge: "Expert",
    des: "Utility-first design system crafting glassmorphic, responsive, high-class user interfaces with fine micro-interactions.",
  },
  {
    id: 5,
    category: "frontend",
    name: "Zustand & Tanstack Query",
    icon: "query",
    badge: "Advanced",
    des: "Atomic global state management, server-state caching, optimistic updates, and offline data persistence.",
  },
  {
    id: 6,
    category: "backend",
    name: "Node.js & Express.js",
    icon: "bx bx-server",
    badge: "Advanced",
    des: "Designing scalable RESTful APIs, authentication middleware (JWT, OAuth), rate limiting, and microservice architectures.",
  },
  {
    id: 7,
    category: "backend",
    name: "PostgreSQL & SQL",
    icon: "SiPostgresql",
    badge: "Advanced",
    des: "Relational database design, query optimization, indexing, foreign key constraints, and Prisma ORM integration.",
  },
  {
    id: 8,
    category: "backend",
    name: "MongoDB",
    icon: "bx bxl-mongodb",
    badge: "Advanced",
    des: "NoSQL document modeling, aggregation pipelines, indexing strategies, and high-concurrency database management.",
  },
  {
    id: 9,
    category: "cloud",
    name: "AWS (S3, Beanstalk)",
    icon: "bx bxl-aws",
    badge: "Intermediate",
    des: "Cloud infrastructure setup, S3 bucket storage policies, EC2 deployment, Elastic Beanstalk hosting, and asset CDN.",
  },
  {
    id: 10,
    category: "cloud",
    name: "Git & GitHub Workflow",
    icon: "bx bxl-git",
    badge: "Expert",
    des: "Version control mastery, feature branch strategy, CI/CD pipeline triggers, code reviews, and release management.",
  },
];

// export interface JourneyItem {
//   id: number;
//   date: string;
//   title: string;
//   des: string;
// }

export const Journeys = [
  {
    id: 1,
    date: "September 2021",
    title: "Inception & Core Fundamentals",
    des: "Embarked on software engineering, mastering web algorithms, computer science principles, and JavaScript fundamentals.",
  },
  {
    id: 2,
    date: "May 2023",
    title: "freeCodeCamp Professional Certification",
    des: "Earned formal credentials in Responsive Web Design and Frontend Algorithms, building production web interfaces.",
  },
  {
    id: 3,
    date: "May 2023 - June 2024",
    title: "Open Source & Collaborative Development",
    des: "Engineered full-stack solutions, contributing to repositories, developing backend APIs, and mastering React & Node architectures.",
  },
  {
    id: 4,
    date: "July 2024",
    title: "Software Engineer Intern at CHSG Tech USA",
    des: "Joined CHSG Tech USA to build cross-platform mobile apps, enterprise dashboard tools, and scalable cloud integrations.",
  },
  {
    id: 5,
    date: "October 2024 - Present",
    title: "Team Lead & Mobile Engineer at LOEM Health Insurance",
    des: "Directing mobile application architecture, managing engineering workflows, and leading cross-functional teams building healthcare systems.",
  },
];
