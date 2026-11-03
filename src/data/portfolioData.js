export const personalInfo = {
  name: "Prerna Kumari Sharma",
  preferredName: "Prerna",
  headline: "Hey, I'm Prerna.",
  title: "AI & Full-Stack Developer",
  supportingLine: "Exploring Agentic AI, LLMs, RAG, and intelligent applications.",
  location: "Kalyani, West Bengal, India",
  email: "prernakumarisharma2003@gmail.com",
  github: "https://github.com/prerna12github",
  linkedin: "https://linkedin.com/in/prerna-kumari-sharma",
  resumePath: "/Prerna_Kumari_Sharma_Resume.pdf",
  profileImage: "/prerna_new_pic.jpeg",
  avatarImage: "/prernapic.png",
  collegeImage: "/kgec.jpg",
  bscCollegeImage: "/clg.jpg",

  heroIntro: "I'm an MCA student who enjoys building practical software and exploring how AI systems work. Currently, I'm experimenting with agentic workflows, LLM-powered applications, RAG, and machine learning while building projects that solve real problems.",

  aboutParagraphs: [
    "I'm an MCA student at Kalyani Government Engineering College with a strong interest in Artificial Intelligence, Machine Learning, and full-stack development.",
    "My current learning journey revolves around building intelligent AI systems, experimenting with LLMs, exploring Agentic AI and RAG architectures, and understanding how multiple AI agents can collaborate to solve complex problems.",
    "I also enjoy backend engineering, database optimization, and building scalable web applications.",
    "I believe the best way to learn technology is by building real projects."
  ]
};

export const featuredProjects = {
  flagship: {
    id: "agentic-literature-review",
    title: "LitReviwe --- Agentic Literature Review Assistant",
    category: "Featured Engineering Project · Agentic AI",
    github: "https://github.com/prerna12github/agentic-literature-review",
    problem: "Academic literature reviews require researchers to synthesize dozens of complex research papers, identify hidden contradictions, and maintain meticulous citation accuracy—a labor-intensive process vulnerable to oversight and hallucination.",
    solution: "A stateful multi-agent system orchestrating specialized agents via LangGraph. The pipeline decomposes research queries, ingests and chunks papers with page-level provenance, clusters claims using local embeddings, analyzes conflicts via Gemini, and pauses at critical checkpoints for human validation.",
    architectureSteps: [
      {
        step: "01",
        name: "Query Planner",
        desc: "Deconstructs research topics into targeted search sub-queries and exploration branches."
      },
      {
        step: "02",
        name: "Paper Ingestion & Chunking",
        desc: "Parses PDF documents and tags every text chunk deterministically with page and section metadata."
      },
      {
        step: "03",
        name: "MiniLM Claim Clustering",
        desc: "Generates local embeddings using all-MiniLM-L6-v2 to cluster semantically related scientific claims with zero API cost."
      },
      {
        step: "04",
        name: "Gemini Conflict Analysis",
        desc: "Evaluates clustered claims using Gemini to identify contradictions, nuances, and divergent findings across authors."
      },
      {
        step: "05",
        name: "Human-in-the-Loop Checkpoint",
        desc: "Halts workflow state to allow the researcher to verify claim clusters, approve inferences, or guide synthesis."
      },
      {
        step: "06",
        name: "Verified Synthesis",
        desc: "Outputs structured literature synthesis with immutable page/chunk provenance to prevent hallucinated citations."
      }
    ],
    techStack: ["Python", "LangGraph", "Google Gemini API", "Sentence-Transformers", "all-MiniLM-L6-v2"]
  },
  secondary: [
    {
      id: "accident-detection-cnn",
      title: "Accident Detection Using CNN",
      category: "Computer Vision & Edge Optimization",
      github: "https://github.com/prerna12github/accident-detection-using-cnn",
      description: "A real-time CCTV accident detection pipeline using a MobileNetV2 deep learning model optimized for edge hardware.",
      technicalDetails: [
        "Lightweight MobileNetV2 architecture chosen for low parameter count and high edge suitability.",
        "Post-training quantization (INT8) applied to maximize inference throughput and decrease latency on constrained hardware.",
        "OpenCV-based frame difference buffering and preprocessing to filter static frames before inference."
      ],
      techStack: ["Python", "TensorFlow", "MobileNetV2", "OpenCV", "Quantization"]
    },
    {
      id: "u-short",
      title: "U-Short — URL Shortener",
      category: "Backend Systems & Caching",
      github: "https://github.com/prerna12github/u-short",
      description: "A low-latency URL shortening service featuring custom aliases, automated link expiry, and caching for faster redirections.",
      technicalDetails: [
        "Valkey/Redis in-memory caching integrated alongside PostgreSQL to achieve sub-millisecond redirect lookups.",
        "Automated 30-day link lifecycle management and background database purging implemented with pg_cron.",
        "Clean RESTful API built on FastAPI with validation for custom collision-free aliases."
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Valkey / Redis", "pg_cron"]
    }
  ]
};

export const skillsData = {
  resumeSkills: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Node.js", "REST APIs"]
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "Redis / Valkey", "MySQL", "SQLite", "Supabase"]
    },
    {
      category: "Tools & ML Frameworks",
      skills: ["Git", "GitHub", "TensorFlow", "OpenCV", "Postman"]
    }
  ],
  currentlyExploring: [
    {
      topic: "Agentic AI",
      detail: "Multi-agent workflows, state graphs, tool invocation, and human-in-the-loop review loops using LangGraph."
    },
    {
      topic: "RAG & Semantic Retrieval",
      detail: "Chunking strategies, local sentence embeddings, vector indexing, and citation provenance verification."
    },
    {
      topic: "Large Language Models (LLMs)",
      detail: "Prompt engineering, structured JSON outputs, context window management, and foundation model APIs."
    },
    {
      topic: "AI Engineering & Practical ML",
      detail: "Integrating deep learning models into robust backend services, edge model quantization, and production APIs."
    }
  ]
};

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kalyani Government Engineering College",
    period: "2025 – Present",
    location: "Kalyani, West Bengal",
    notes: "Focusing on advanced computing systems, AI engineering, and scalable software architectures."
  },
  {
    degree: "B.Sc. (Honours) in Computer Science",
    institution: "Kalyani Mahavidyalaya, University of Kalyani",
    period: "2022 – 2025",
    location: "Kalyani, West Bengal",
    notes: "Graduated with CGPA 7.96. Strong foundations in Data Structures, Algorithms, DBMS, and Operating Systems."
  }
];

export const achievementData = {
  title: "WBJECA 2025 — All-Bengal Merit Rank 62",
  organization: "West Bengal Joint Entrance Examinations Board",
  description: "Secured statewide General Merit Rank 62 in the WBJECA entrance examination for MCA admission."
};
