import {
  iiitm,
  writecream,
  medisync,
  cypherflow,
  socialsphere,
  nexus,
  peervault,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiC,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAmazonwebservices,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiSocketdotio,
  SiMongodb,
  SiJsonwebtokens,
  SiVercel,
  SiWebrtc,
  SiGo,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiRedis,
  SiApachekafka,
} from "react-icons/si";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";

import { BiLogoVisualStudio, BiSolidHardHat } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/drive/folders/1RkEmiBPuCNwlHORFOUHEvuDFg3JhaSRJ?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/rahul643";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: iiitm,
    title: "ABV-Indian Institute of Information Technology and Management, Gwalior",
    link: "https://www.iiitm.ac.in/",
    degree: "Integrated B.Tech + M.Tech",
    duration: "November 2022 - May 2027",
    content1: "Major: Information Technology",
    content2: "CGPA: 8.28/10",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: FaGolang,
        name: "Go",
      },
      {
        id: "pl-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "pl-6",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-7",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-8",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-5",
        icon: SiNextdotjs,
        name: "Next.js",
      },
    ],
  },
   {
    title: "Databases",
    items: [
      { id: "db-1",
        icon: DiMongodb, 
        name: "MongoDB" 
      },
      { id: "db-2",
        icon: SiMysql, 
        name: "MySQL" 
      },
      { id: "db-3",
        icon: DiPostgresql, 
        name: "PostgreSQL" 
      },
      {
        id: "db-4",
        icon: DiRedis,
        name: "Redis",
      }
    ]
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiAmazonwebservices,
        name: "AWS",
      },
      {
        id: "t-2",
        icon: SiLinux,
        name: "Linux",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-8",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "t-8",
        icon: SiNginx,
        name: "Nginx",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "WriteCream, India",
    logo: writecream,
    link: "https://www.writecream.com/",
    positions: [
      {
        title: "Full Stack Development Intern",
        duration: "October 2024 - January 2025",
        content: [
          {
            text: "Developed a full-stack AI tool listing platform using Node.js, Express, MongoDB, and Handlebars, enabling dynamic server-rendered pages and efficient categorization workflows.",
            link: "",
          },
          {
            text: "Implemented secure authentication and role-based authorization with JWT, bcrypt, and middleware guards to enforce controlled access and strengthen application security.",
            link: "",
          },
        ],
      },
    ],
  },
  
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Cipher Flow",
    github: "https://github.com/rawlx/Remote-code-executor-microservices",
    link: "",
    image: cypherflow,
    content:
      "A scalable microservice-based remote code execution platform featuring Go-based worker services, Redis-backed task queues, event-driven architecture, secure containerized sandboxing, and real-time collaborative coding for reliable, high-performance multi-language execution.",
    stack: [
      {
        id: "icon-1",
        icon: SiGo,
        name: "Golang",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-5",
        icon: SiAmazonwebservices,
        name: "AWS EC-2",
      },
      {
        id: "icon-6",
        icon: SiSocketdotio,
        name: "Socket.io",
      },
      {
        id: "icon-7",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "icon-8",
        icon: SiRedis,
        name: "Redis",
      },
      {
        id: "icon-9",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-10",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
    ],
  },
  {
    id: "project-2",
    title: "Social Sphere",
    github: "https://github.com/rawlx/Social-Sphere-scalable",
    link: "https://social-sphere-green.vercel.app/",
    image: socialsphere,
    content:
      "A Distributed real-time group chat platform built with a decoupled microservices architecture — stateless WebSocket gateways, Kafka-backed async message streaming, Redis Pub/Sub for cross-instance fan-out, and a batched persistence pipeline for high-throughput, fault-tolerant delivery.",
    stack: [
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-9",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-1",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
      {
        id: "icon-6",
        icon: SiSocketdotio,
        name: "Socket.io",
      },
      {
        id: "icon-8",
        icon: SiRedis,
        name: "Redis",
      },
      {
        id: "icon-5",
        icon: SiApachekafka,
        name: "Kafka",
      },
    ],
  },
  {
    id: "project-3",
    title: "Medi-Sync",
    github: "https://github.com/rawlx/Decentralised-Unified-Medical-Records-System-DUMRS-",
    link: "https://medi-sync-one.vercel.app/",
    image: medisync,
    content:
      "A secure medical record system using React, Node.js, and blockchain, featuring role-based access, dynamic forms, AWS S3 file storage, and on-chain hash verification for data integrity.",
    stack: [
      {
        id: "icon-1",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-5",
        icon: SiAmazonwebservices,
        name: "AWS S3",
      },
      {
        id: "icon-6",
        icon: BiSolidHardHat,
        name: "Hardhat",
      },
      {
        id: "icon-7",
        icon: DiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-4",
    title: "Peer-Vault",
    github: "https://github.com/rawlx/peer-vault",
    link: "",
    image: peervault,
    content:
      "Developed a low level, decentralized, peer-to-peer file storage and sharing system in Go, leveraging content-addressable storage, distributed replication, and secure client-side encryption for fast, private, and resilient data access.",
    stack: [
      {
        id: "icon-1",
        icon: SiGo,
        name: "Golang",
      },
    ],
  },
  
  {
    id: "project-5",
    title: "Nexus",
    github: "https://github.com/rawlx/Nexus",
    link: "https://nexus-chi-eight.vercel.app/",
    image: nexus,
    content:
      "A feature-rich video calling application using the MERN stack and WebRTC, enabling seamless, real-time peer-to-peer communication with high-quality video, audio, and an intuitive user interface.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiSocketdotio,
        name: "Socket.io",
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-5",
        icon: SiWebrtc,
        name: "WebRTC",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rahul643/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    title: "GitHub",
    link: "https://github.com/rawlx",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    title: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rahulsreekumar03@gmail.com",
  },
  {
    id: "social-media-6",
    icon: SiLeetcode,
    title: "LeetCode",
    link: "https://leetcode.com/u/rahulsreekumar03",
  },
  {
    id: "social-media-7", 
    icon: SiCodechef,
    title: "CodeChef",
    link: "https://www.codechef.com/users/rauuuul_643",
  },{
    id: "social-media-8",
    icon: SiCodeforces,
    title: "Codeforces",
    link: "https://codeforces.com/profile/rahulsreekumar03",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Rahul",
  fullName: "Rahul Sreekumar",
  githubUsername: "rawlx",
  tagLine:
    "Full stack Developer | Blockchain Enthusiast | IIIT Gwalior",
  intro:
    "A pre-final year student and an aspiring Software Engineer with a passion for full-stack development, blockchain technology and Competitive Programming from IIIT Gwalior.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
];
