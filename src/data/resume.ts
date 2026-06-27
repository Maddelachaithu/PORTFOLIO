/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: number; // Percentage 0-100
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcomes: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  iconType: "security" | "cloud" | "network" | "ethical";
}

export interface EducationItem {
  university: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  details: string[];
}

export interface AchievementItem {
  title: string;
  value: string; // e.g., "1st", "99%", "15+"
  metric: string; // e.g., "Rank", "Percentile", "Projects"
  description: string;
}

export interface ResumeData {
  fullName: string;
  title: string;
  brandStatement: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  about: {
    journey: string;
    passion: string;
    mission: string;
    goals: string[];
    strengths: string[];
    learningTimeline: { year: string; event: string; details: string }[];
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificateItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
}

export const resumeData: ResumeData = {
  fullName: "Chaitanya Kumar",
  title: "Cyber Security Analyst & Secure Developer",
  brandStatement: "Cyber Security student with experience in penetration testing, cloud security, vulnerability assessment, and secure software development. Skilled in Python, AWS security fundamentals, network analysis, and AI-powered application development.",
  email: "chaithunaidu333@gmail.com",
  phone: "+91 8688733720",
  location: "Prakasam, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/chaitanya-kumar-99333b307/",
  github: "https://github.com/Maddelachaithu",
  about: {
    journey: "I am a dedicated Cyber Security student with experience in penetration testing, cloud security, vulnerability assessment, and secure software development. My journey is focused on mastering threat detection, defensive engineering, and continuous learning in cyber resilience.",
    passion: "I love exploring vulnerability research, reverse engineering, cloud architecture governance, and integrating AI into security systems to pre-filter threats and protect applications.",
    mission: "To secure digital environments by applying rigorous offensive security methodologies, secure coding practices, and proactive defensive measures.",
    goals: [
      "Acquire professional experience as a Cyber Security Analyst, SOC Analyst, or Penetration Tester.",
      "Expand knowledge in advanced penetration testing, malware analysis, and DevSecOps compliance.",
      "Stay at the forefront of AI, data security, and emerging threat vectors."
    ],
    strengths: [
      "Penetration Testing (VAPT)",
      "Vulnerability Assessment & Mitigation",
      "Network Packet Analysis (Wireshark)",
      "Secure Software Development & Coding",
      "AI & LLM Integration (LangChain)"
    ],
    learningTimeline: [
      {
        year: "2023",
        event: "Programming & Web Fundamentals",
        details: "Built strong foundation in C-Language, Python-Basics, Java-Basics, HTML, and CSS. Explored system designs and security postures."
      },
      {
        year: "2024",
        event: "Ethical Hacking & Cloud Virtual Experience",
        details: "Conducted virtual internships in Ethical Hacking & Penetration Testing, and Cloud Infrastructure. Explored cloud security governance, OWASP Top 10, and Wireshark log analysis."
      },
      {
        year: "2025",
        event: "Full Stack & Secure Systems Development",
        details: "Completed Java Full Stack Developer Internship with JPMorgan Chase (Forage). Built secure REST APIs, JDBC integrations, and database access controls."
      },
      {
        year: "2027",
        event: "Academic Graduation & Proactive Defenses",
        details: "Completing Bachelor of Technology (Cyber Security) at Kakinada Institute of Engineering and Technology (KIET) with 70% aggregate."
      }
    ]
  },
  experience: [
    {
      company: "JPMorgan Chase & Co. (Forage)",
      role: "Java Full Stack Development Intern",
      duration: "Virtual Internship",
      location: "Remote",
      responsibilities: [
        "Developed secure JDBC integrations and robust backend components.",
        "Applied secure coding practices and implemented rigorous database access controls to prevent authorization bypasses.",
        "Created scalable Java modules conforming to industry-standard security architectures."
      ],
      technologies: ["Java", "JDBC", "Secure Coding", "Database Security", "Full Stack Development"],
      achievements: [
        "Successfully integrated secure backend components validating access controls."
      ]
    },
    {
      company: "Virtual Experience",
      role: "Ethical Hacking & Penetration Testing Virtual Intern",
      duration: "Virtual Internship",
      location: "Remote",
      responsibilities: [
        "Conducted comprehensive vulnerability assessments on simulated environments using Wireshark.",
        "Simulated SQL Injection (SQLi) and Cross-Site Scripting (XSS) attacks to evaluate defensive postures.",
        "Documented precise remediation measures and security hardening guides."
      ],
      technologies: ["Wireshark", "SQL Injection", "XSS Mitigation", "Vulnerability Assessment", "Penetration Testing"],
      achievements: [
        "Identified and cataloged key web application vulnerabilities, providing actionable remediation reports."
      ]
    },
    {
      company: "Virtual Experience",
      role: "Cloud Infrastructure Virtual Intern",
      duration: "Virtual Internship",
      location: "Remote",
      responsibilities: [
        "Applied cloud security governance principles across multi-tenant infrastructures.",
        "Implemented strict identity and access control principles following the principle of least privilege.",
        "Audited cloud configurations to ensure alignment with cloud security best practices."
      ],
      technologies: ["Cloud Security", "Access Control", "Governance", "AWS Security", "IAM Policies"],
      achievements: [
        "Secured cloud architectures by auditing access control policies and configurations."
      ]
    }
  ],
  skills: [
    {
      category: "Cyber Security",
      skills: [
        { name: "Penetration Testing", level: 85 },
        { name: "Vulnerability Assessment", level: 88 },
        { name: "Risk Assessment", level: 82 },
        { name: "Security Monitoring", level: 80 },
        { name: "OWASP Top 10", level: 86 },
        { name: "Secure Coding", level: 85 }
      ]
    },
    {
      category: "Programming & Web",
      skills: [
        { name: "Python (Basics)", level: 85 },
        { name: "C-Language", level: 80 },
        { name: "Java (Basics)", level: 75 },
        { name: "HTML & CSS", level: 88 }
      ]
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git / GitHub", level: 85 }
      ]
    },
    {
      category: "AI, Data & Databases",
      skills: [
        { name: "LangChain", level: 84 },
        { name: "Vector Databases", level: 80 },
        { name: "MySQL / Relational DBs", level: 82 }
      ]
    },
    {
      category: "Soft Skills & Analysis",
      skills: [
        { name: "Analytical Problem Solving", level: 90 },
        { name: "Technical Documentation", level: 85 },
        { name: "Remediation Documentation", level: 88 }
      ]
    }
  ],
  projects: [
    {
      id: "ai-startup-validator",
      title: "AI Startup Validator Chatbot",
      category: "AI & Data",
      thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd33a?auto=format&fit=crop&q=80&w=800",
      problem: "Assessing startup viability involves parsing massive volumes of market trend data, verifying technical feasibility, and ensuring insights are backed by secure, private data retrieval.",
      solution: "Developed an AI-driven chatbot using Python and LangChain that safely retrieves market intelligence, validates startup models, and displays secure, structured feasibility reports.",
      technologies: ["Python", "LangChain", "Vector Databases", "Secure APIs", "Streamlit"],
      features: [
        "Interactive LLM prompt routing for technical feasibility checking.",
        "Secure retrieval of verified business intelligence without data leakage.",
        "Automated market competitor and risk assessment analyzer."
      ],
      challenges: "Ensuring secure API handling and preventing LLM context pollution or prompt injection when users input untrusted ideas.",
      outcomes: "Successfully deployed a fast, secure validation chatbot capable of providing detailed, data-backed insights with verified safety controls.",
      githubUrl: "https://github.com/Maddelachaithu/ai-startup-validator"
    },
    {
      id: "deep-fake-detection",
      title: "Deep Fake Detection System",
      category: "AI & Cybersecurity",
      thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
      problem: "The rapid proliferation of synthetic media and deepfakes poses critical threats to authentic information streams, requiring robust, real-time media forensics.",
      solution: "Developed an AI-driven video and image analyzer using machine learning and computer vision to inspect subtle visual anomalies, temporal inconsistencies, and synthetic artifacts.",
      technologies: ["Python", "PyTorch", "OpenCV", "Machine Learning", "Computer Vision"],
      features: [
        "Frame-by-frame analysis of facial landmarks and facial boundary blending.",
        "Convolutional Neural Network (CNN) classifiers for forgery detection.",
        "Mitigation pipelines to protect media repositories from synthetic injection."
      ],
      challenges: "Generalizing detectors to unseen deepfake generation algorithms and handling low-resolution compressed video feeds.",
      outcomes: "Engineered a high-precision model capable of isolating synthetic features with reliable classification confidence scores.",
      githubUrl: "https://github.com/Maddelachaithu/deep-fake-detection"
    },
    {
      id: "secure-ai-app",
      title: "End-to-End Secure AI Application",
      category: "AI & Cybersecurity",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      problem: "Enterprise document lookup platforms often lack secure access bounds, exposing sensitive intellectual property to unauthorized LLM queries.",
      solution: "Built a fully secure document intelligence portal using Python, LangChain, and vector databases, integrating precise role-based document access and secure retrieval pipelines.",
      technologies: ["Python", "LangChain", "Vector Databases", "ChromaDB", "FastAPI"],
      features: [
        "End-to-end encrypted document ingest and chunk indexing.",
        "Metadata-filtered vector retrieval to enforce user access permissions.",
        "Robust input scrubbing and sanitization to block indirect injection attacks."
      ],
      challenges: "Maintaining document search efficiency while dynamically calculating and injecting security controls inside LangChain retrieval chains.",
      outcomes: "Constructed a hardened RAG (Retrieval-Augmented Generation) system demonstrating secure document isolation across user access boundaries.",
      githubUrl: "https://github.com/Maddelachaithu/secure-ai-app"
    },
    {
      id: "game-memory-analysis",
      title: "Game Memory Security Analysis Suite",
      category: "Cyber Security / Tools",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
      problem: "Auditing executable binaries for vulnerabilities, cheat exploits, or memory corruption requires complex tools to profile runtime memory space.",
      solution: "Developed a memory-profiling and binary inspection suite using Python and reverse engineering methodologies to dissect executable behaviors and detect subverted control flows.",
      technologies: ["Python", "Reverse Engineering", "Binary Analysis", "GDB", "Memory Profiling"],
      features: [
        "Real-time memory scanning and address space mapping.",
        "Dynamic hooking of function calls to profile memory reading/writing.",
        "Security validation reports of compiler defense configurations (ASLR, DEP)."
      ],
      challenges: "Handling operating system level memory protection policies and preventing kernel panic when accessing system processes.",
      outcomes: "Completed a reliable security analysis suite capable of inspecting execution streams and identifying vulnerable buffer manipulation risks.",
      githubUrl: "https://github.com/Maddelachaithu/game-memory-analysis"
    },
    {
      id: "secure-weather-portal",
      title: "Secure Weather Portal & REST API Integration",
      category: "Secure Web Development",
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
      problem: "Public web portals integrating external REST APIs are frequent targets for injection attacks (XSS) and parameter manipulation.",
      solution: "Developed a weather visualization portal powered by external REST APIs, featuring custom client-side sanitization libraries and input validation to completely eliminate XSS vectors.",
      technologies: ["REST APIs", "XSS Mitigation", "Input Validation", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Secure external API query handling with automated request rate-limiting.",
        "Deep parameter validation and content security policy (CSP) integration.",
        "Responsive graphical charts representing historical weather indexes safely."
      ],
      challenges: "Sanitizing dynamic, rich-text API payloads without breaking native formatting or degrading dashboard response times.",
      outcomes: "Delivered an elegant, 100% XSS-immune weather portal validating inputs against custom regular-expression rules.",
      githubUrl: "https://github.com/Maddelachaithu/secure-weather-portal"
    }
  ],
  certifications: [
    {
      name: "Java Full Stack Developer Certification",
      issuer: "SmartInternz",
      date: "2024",
      verificationUrl: "https://smartinternz.com",
      iconType: "ethical"
    },
    {
      name: "Certified Ethical Hacking Virtual Experience",
      issuer: "Virtual Experience",
      date: "2024",
      verificationUrl: "https://www.virtualinternships.com",
      iconType: "security"
    },
    {
      name: "Cloud Infrastructure Virtual Experience",
      issuer: "Virtual Experience",
      date: "2024",
      verificationUrl: "https://www.virtualinternships.com",
      iconType: "cloud"
    },
    {
      name: "Advanced AI-ML Virtual Experience",
      issuer: "Virtual Experience",
      date: "2024",
      verificationUrl: "https://www.virtualinternships.com",
      iconType: "network"
    },
    {
      name: "Fundamentals of Game Hacking Development",
      issuer: "Virtual Experience / Academy",
      date: "2024",
      verificationUrl: "https://github.com",
      iconType: "ethical"
    }
  ],
  education: [
    {
      university: "Kakinada Institute of Engineering and Technology (KIET)",
      degree: "Bachelor of Technology (B.Tech) in Cyber Security",
      duration: "Expected Apr 2027",
      location: "JNTU Kakinada, Andhra Pradesh, India",
      gpa: "70% Aggregate",
      details: [
        "Specialized academic focus: Cryptography, Penetration Testing, Cloud Security, Threat Analysis, and Network Forensics.",
        "Active student participant in secure software workshops and ethical hacking simulation drills."
      ]
    }
  ],
  achievements: [
    {
      title: "CTF Challenges",
      value: "Top 50",
      metric: "Rank",
      description: "Consistent high ranker in cybersecurity CTF challenges, specializing in web exploit mitigation."
    },
    {
      title: "Responsible Disclosure",
      value: "10+",
      metric: "Reports",
      description: "Reported critical misconfigurations and vulnerabilities to organizations via ethical paths."
    },
    {
      title: "Hands-on Practical Labs",
      value: "100+",
      metric: "Labs",
      description: "Successfully solved practical network and vulnerability labs across TryHackMe and HackTheBox."
    }
  ]
};
