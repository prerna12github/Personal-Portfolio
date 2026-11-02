export const personalInfo = {
  name: "Prerna Kumari Sharma",
  preferredName: "Prerna",
  title: "AI & Full-Stack Developer",
  subtitle: "Exploring Agentic AI, LLMs & RAG",
  status: "Open to AI & Full-Stack Opportunities",
  badge: "Currently exploring AI ✨",
  location: "Kalyani, West Bengal, India",
  email: "prernakumarisharma2003@gmail.com",
  github: "https://github.com/prerna12github",
  linkedin: "https://linkedin.com/in/prerna-kumari-sharma",
  resumePath: "/Prerna_Kumari_Sharma_Resume.pdf",
  profileImage: "/prerna.jpg",
  avatarImage: "/prernapic.png",
  collegeImage: "/kgec.jpg",
  bscCollegeImage: "/clg.jpg",
  
  heroIntro: "Hey, I'm Prerna! A developer curious about how intelligent systems work and how technology can solve real-world problems.\n\nCurrently pursuing my MCA, I'm exploring the world of AI Agents, Agentic Workflows, RAG, Large Language Models (LLMs), Machine Learning, and full-stack development.\n\nI enjoy building practical projects, experimenting with AI technologies, optimizing deep learning models, and turning interesting ideas into working applications.\n\nI'm always learning, experimenting, and building something new.",

  aboutParagraphs: [
    "I'm an MCA student at Kalyani Government Engineering College with a strong interest in Artificial Intelligence, Machine Learning, and full-stack development.",
    "My current learning journey revolves around building intelligent AI systems, experimenting with LLMs, exploring Agentic AI and RAG architectures, and understanding how multiple AI agents can collaborate to solve complex problems.",
    "I also enjoy backend engineering, database optimization, and building scalable web applications.",
    "I believe the best way to learn technology is by building real projects."
  ],

  highlights: [
    { title: "AI & Agentic Systems", desc: "Multi-agent orchestration, LangGraph, tool calling & human-in-the-loop flows", color: "pink" },
    { title: "LLMs & RAG", desc: "Vector embeddings, retrieval pipelines, semantic chunking & anti-hallucination", color: "yellow" },
    { title: "Machine Learning", desc: "Computer vision, MobileNetV2, CNNs & post-training quantization", color: "green" },
    { title: "Backend Engineering", desc: "FastAPI, PostgreSQL persistence, Redis/Valkey caching & async APIs", color: "blue" },
    { title: "Full-Stack Development", desc: "React, Next.js, modern component architectures & delightful UX", color: "peach" }
  ]
};

export const featuredProjects = [
  {
    id: "agentic-literature-review",
    title: "Agentic Literature Review Assistant",
    tagline: "Flagship Agentic AI System",
    isFlagship: true,
    github: "https://github.com/prerna12github/agentic-literature-review",
    liveDemo: null, // As requested: only when deployment is available
    status: "Active Exploration & Development",
    description: "A human-in-the-loop multi-agent system built with LangGraph that automates end-to-end literature reviews with human review checkpoints.",
    keyFeatures: [
      "Multi-agent workflow orchestration using LangGraph.",
      "Human-in-the-loop review checkpoints.",
      "Contradiction detection using local MiniLM embeddings for claim clustering.",
      "Gemini-powered conflict analysis.",
      "Strict citation provenance using chunk and page metadata.",
      "Anti-hallucination source verification."
    ],
    techStack: ["Python", "LangGraph", "Google Gemini API", "Sentence-Transformers", "MiniLM", "RAG"],
    accentColor: "lavender",
    visualType: "langgraph-agent-workflow",
    workflowSteps: [
      { step: "01", name: "Query Decomposer", role: "Plans literature search paths & sub-topics", agent: "Planner Agent" },
      { step: "02", name: "Paper Ingestion", role: "Parses PDFs, extracts chunks & metadata", agent: "Chunker Agent" },
      { step: "03", name: "Claim Clustering", role: "Local MiniLM zero-cost embeddings", agent: "Embedding Cluster" },
      { step: "04", name: "Conflict Detection", role: "Gemini analyzes contradictions in claims", agent: "Conflict Agent" },
      { step: "05", name: "Human Review", role: "Interactive checkpoint to approve/refine", agent: "Human-in-the-Loop" },
      { step: "06", name: "Provenance Synthesis", role: "Deterministic citations with chunk/page tags", agent: "Synthesizer" }
    ]
  },
  {
    id: "accident-detection-cnn",
    title: "Accident Detection Using CNN",
    tagline: "Computer Vision & Edge ML Pipeline",
    isFlagship: false,
    github: "https://github.com/prerna12github/accident-detection-using-cnn",
    liveDemo: null,
    status: "Completed Prototype",
    description: "A real-time CCTV accident detection pipeline using a MobileNetV2 deep learning model optimized for edge hardware.",
    keyFeatures: [
      "Real-time accident detection pipeline.",
      "MobileNetV2 model.",
      "Post-training quantization.",
      "OpenCV-based frame preprocessing.",
      "Optimized inference throughput and reduced latency."
    ],
    techStack: ["Python", "TensorFlow", "MobileNetV2", "OpenCV", "Quantization"],
    accentColor: "sage",
    visualType: "cctv-edge-cv"
  },
  {
    id: "u-short",
    title: "U-Short — URL Shortener",
    tagline: "High-Performance Backend Service",
    isFlagship: false,
    github: "https://github.com/prerna12github/u-short",
    liveDemo: null,
    status: "Completed Service",
    description: "A low-latency URL shortening service featuring custom aliases, automated link expiry, and caching for faster redirections.",
    keyFeatures: [
      "Custom URL aliases.",
      "Automated 30-day link expiry using pg_cron.",
      "PostgreSQL persistence.",
      "Valkey/Redis caching.",
      "Optimized URL redirection."
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Valkey / Redis", "pg_cron"],
    accentColor: "sky",
    visualType: "url-shortener-backend"
  }
];

export const exploringAreas = [
  {
    number: "01",
    title: "Agentic AI",
    subtitle: "Multi-agent systems, tool calling, workflows & orchestration",
    detail: "Diving deep into stateful multi-agent architectures where specialized agents collaborate, execute tools, reflect on mistakes, and respect human checkpoints using LangGraph.",
    tags: ["LangGraph", "Tool Use", "Multi-Agent Workflows", "Human-in-the-Loop"],
    color: "pink",
    icon: "Bot"
  },
  {
    number: "02",
    title: "RAG (Retrieval-Augmented Generation)",
    subtitle: "Document retrieval, embeddings & vector search",
    detail: "Building robust context-aware systems with intelligent chunking, cross-encoder re-ranking, provenance tracking, and zero-hallucination citations.",
    tags: ["Sentence-Transformers", "Vector Search", "Chunking", "Semantic Search"],
    color: "blue",
    icon: "Database"
  },
  {
    number: "03",
    title: "LLMs (Large Language Models)",
    subtitle: "Understanding models, embeddings, inference & optimization",
    detail: "Exploring foundation model capabilities, structured JSON outputs, prompt evaluation, context window optimization, and prompt caching with Gemini & open weights.",
    tags: ["Gemini API", "Prompt Engineering", "Structured Output", "Model Inference"],
    color: "yellow",
    icon: "Sparkles"
  },
  {
    number: "04",
    title: "AI Engineering",
    subtitle: "Building practical AI apps & real-world integrations",
    detail: "Bridging the gap between AI prototypes and production-grade applications with robust backend services, graceful fallbacks, and real user utility.",
    tags: ["FastAPI", "Full-Stack AI", "API Design", "System Architecture"],
    color: "peach",
    icon: "Wrench"
  },
  {
    number: "05",
    title: "Machine Learning",
    subtitle: "Deep learning, computer vision & model optimization",
    detail: "Experimenting with convolutional neural networks, transfer learning with MobileNetV2, and post-training quantization (INT8) for fast edge deployment.",
    tags: ["TensorFlow", "MobileNetV2", "OpenCV", "Edge Quantization"],
    color: "green",
    icon: "Cpu"
  }
];

export const skillsData = {
  resumeSkills: [
    {
      category: "Programming Languages",
      color: "yellow",
      items: [
        { name: "Python", level: "Core", icon: "SiPython" },
        { name: "JavaScript", level: "Proficient", icon: "SiJavascript" },
        { name: "TypeScript", level: "Proficient", icon: "SiTypescript" },
        { name: "Java", level: "Foundational", icon: "SiOpenjdk" }
      ]
    },
    {
      category: "Frontend",
      color: "pink",
      items: [
        { name: "React", level: "Proficient", icon: "SiReact" },
        { name: "Next.js", level: "Working Knowledge", icon: "SiNextdotjs" },
        { name: "Tailwind CSS", level: "Proficient", icon: "SiTailwindcss" },
        { name: "HTML5", level: "Core", icon: "SiHtml5" },
        { name: "CSS3", level: "Core", icon: "SiCss3" }
      ]
    },
    {
      category: "Backend",
      color: "blue",
      items: [
        { name: "FastAPI", level: "Proficient", icon: "SiFastapi" },
        { name: "Node.js", level: "Proficient", icon: "SiNodedotjs" },
        { name: "REST APIs", level: "Core", icon: "Globe" }
      ]
    },
    {
      category: "Databases",
      color: "peach",
      items: [
        { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql" },
        { name: "Redis / Valkey", level: "Working Knowledge", icon: "SiRedis" },
        { name: "MySQL", level: "Proficient", icon: "SiMysql" },
        { name: "SQLite", level: "Proficient", icon: "SiSqlite" },
        { name: "Supabase", level: "Working Knowledge", icon: "SiSupabase" }
      ]
    },
    {
      category: "Tools & Machine Learning",
      color: "green",
      items: [
        { name: "Git", level: "Core", icon: "SiGit" },
        { name: "GitHub", level: "Core", icon: "SiGithub" },
        { name: "TensorFlow", level: "Working Knowledge", icon: "SiTensorflow" },
        { name: "OpenCV", level: "Working Knowledge", icon: "SiOpencv" },
        { name: "Postman", level: "Proficient", icon: "SiPostman" }
      ]
    }
  ],
  activelyExploring: [
    { name: "LangGraph", focus: "Multi-Agent Workflows & Graph State", badge: "Agentic AI", color: "pink" },
    { name: "LLMs", focus: "Prompting, Structured Outputs & Inference", badge: "Language Models", color: "yellow" },
    { name: "RAG", focus: "Chunking, Vector Embeddings & Provenance", badge: "Retrieval", color: "blue" },
    { name: "Sentence Transformers", focus: "Local MiniLM Vector Representations", badge: "Embeddings", color: "green" },
    { name: "Agentic AI", focus: "Human-in-the-Loop & Autonomous Checkpoints", badge: "Systems", color: "peach" }
  ]
};

export const educationTimeline = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kalyani Government Engineering College",
    affiliation: "MAKAUT, West Bengal",
    period: "2025 – Present",
    status: "Currently Pursuing",
    location: "Kalyani, Nadia, West Bengal",
    image: "/kgec.jpg",
    details: "Focusing on advanced computing, intelligent systems, software architecture, and distributed systems. Actively building projects in Agentic AI and deep learning.",
    badge: "Current Degree 🎓",
    badgeColor: "pink"
  },
  {
    degree: "B.Sc. (Honours) in Computer Science",
    institution: "Kalyani Mahavidyalaya",
    affiliation: "University of Kalyani",
    period: "2022 – 2025",
    status: "Graduated",
    score: "CGPA: 7.96",
    location: "Kalyani, Nadia, West Bengal",
    image: "/clg.jpg",
    details: "Built solid fundamentals in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    badge: "CGPA 7.96 ⭐",
    badgeColor: "blue"
  }
];

export const achievements = [
  {
    title: "WBJECA 2025 — All-Bengal Merit Rank 62",
    category: "State-Level Competitive Rank",
    organization: "West Bengal Joint Entrance Examinations Board",
    year: "2025",
    description: "Secured All-Bengal General Merit Rank 62 in WBJECA 2025, qualifying for MCA admission into prestigious Kalyani Government Engineering College.",
    highlightBadge: "Rank 62 statewide 🏆",
    color: "yellow"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    handle: "@prerna12github",
    url: "https://github.com/prerna12github",
    desc: "Code repositories, experiments & agentic workflows",
    type: "github"
  },
  {
    name: "LinkedIn",
    handle: "prerna-kumari-sharma",
    url: "https://linkedin.com/in/prerna-kumari-sharma",
    desc: "Professional updates, connections & learning milestones",
    type: "linkedin"
  },
  {
    name: "Email",
    handle: "prernakumarisharma2003@gmail.com",
    url: "mailto:prernakumarisharma2003@gmail.com",
    desc: "Direct inquiries, collaboration & project chats",
    type: "email"
  }
];
