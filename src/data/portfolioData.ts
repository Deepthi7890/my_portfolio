import { Project, SkillCategory, CareerRole, PracticalTool, EducationInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Katta Deepthi',
  monogram: 'KD',
  title: 'Artificial Intelligence & Data Science Student',
  supportingTitle: 'Data Analyst | AI/ML Enthusiast | AI Engineer',
  tagline: 'Building practical solutions with Data, AI, Machine Learning & Software Development.',
  bioShort: 'Final-year B.Tech student specializing in Artificial Intelligence & Data Science, building practical projects across data analysis, machine learning, AI applications, NLP, computer vision, and software development.',
  aboutLong: 'I am a final-year Artificial Intelligence & Data Science student interested in applying data, machine learning, and AI to practical problems. My projects span data analysis, NLP, computer vision, AI applications, and backend development. I am continuously improving my programming, data analysis, machine learning, and software development skills.',
  email: 'kattadeepthi2006@gmail.com',
  phone: '+91 8247802502',
  githubUsername: 'Deepthi7890',
  githubUrl: 'https://github.com/Deepthi7890',
  linkedinUsername: 'kattadeepthi',
  linkedinUrl: 'https://www.linkedin.com/in/kattadeepthi',
  location: 'Kakinada, Andhra Pradesh, India',
  resumePath: '/resume.pdf',
};

export const CAREER_INTERESTS: CareerRole[] = [
  {
    title: 'Data Analyst',
    description: 'Extracting actionable insights from complex datasets, performing EDA, and building intuitive analytical dashboards.',
    tags: ['Python', 'SQL', 'Pandas', 'EDA', 'Trend Analysis']
  },
  {
    title: 'Data Analytics Intern',
    description: 'Contributing to data cleaning, ETL pipeline assistance, data validation, and exploratory data reporting.',
    tags: ['Excel', 'Data Cleaning', 'NumPy', 'Data Interpretation']
  },
  {
    title: 'AI/ML Intern',
    description: 'Training, evaluating, and implementing machine learning models and NLP pipelines for real-world tasks.',
    tags: ['Scikit-learn', 'PyTorch', 'Model Evaluation', 'NLP']
  },
  {
    title: 'AI Engineer',
    description: 'Developing end-to-end AI applications integrating Vision-Language models and LLMs with web interfaces.',
    tags: ['Vision-Language Models', 'LLM Integration', 'Flask', 'Streamlit']
  },
  {
    title: 'AI Analyst',
    description: 'Evaluating AI system performance, analyzing model outputs, and applying AI tooling for operational workflows.',
    tags: ['Model Benchmarking', 'Data Pipelines', 'AI Tooling']
  },
  {
    title: 'Agentic AI Analyst',
    description: 'Investigating autonomous workflows, LLM orchestration, and modern AI agent paradigms.',
    tags: ['Agentic Workflows', 'Prompt Optimization', 'AI Systems']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Query Languages',
    iconName: 'Code',
    skills: ['Python', 'SQL']
  },
  {
    title: 'Data Analysis',
    iconName: 'Database',
    skills: [
      'Excel',
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Data Analysis',
      'Data Interpretation',
      'Exploratory Data Analysis',
      'Trend Analysis'
    ]
  },
  {
    title: 'Machine Learning',
    iconName: 'BrainCircuit',
    skills: [
      'Scikit-learn',
      'Machine Learning Fundamentals'
    ]
  },
  {
    title: 'Data Visualization & Reporting',
    iconName: 'BarChart3',
    skills: [
      'Dashboard Development',
      'Charts',
      'Graphs',
      'Data Visualization'
    ]
  },
  {
    title: 'AI / Application Development',
    iconName: 'Sparkles',
    skills: [
      'AI Applications',
      'Flask',
      'Streamlit'
    ]
  },
  {
    title: 'Developer Tools',
    iconName: 'Terminal',
    skills: [
      'Git',
      'GitHub'
    ]
  },
  {
    title: 'Web / Backend Technologies',
    iconName: 'Server',
    skills: [
      'Node.js',
      'Express.js'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'visual-qa',
    number: '01',
    title: 'Visual Question Answering using Vision-Language Models',
    category: 'AI / Computer Vision',
    filterCategory: 'computer-vision',
    description: 'Developed an AI application that allows users to ask natural-language questions about an image and receive relevant answers using a Vision-Language Model.',
    technologies: ['Python', 'PyTorch', 'Vision-Language Model', 'Flask'],
    features: [
      'Image input & preprocessing pipeline',
      'Natural-language question parsing',
      'AI-based image understanding using VLM',
      'Natural-language contextual answer generation',
      'Flask-based application interface and REST API'
    ],
    githubUrl: 'https://github.com/Deepthi7890/visual_question_answering',
    accentColor: 'from-purple-500/20 via-violet-500/10 to-transparent'
  },
  {
    id: 'doc-analysis',
    number: '02',
    title: 'Intelligent Document Analysis using LLM',
    category: 'AI / Document Analysis',
    filterCategory: 'ai-ml',
    description: 'Developed an AI-based document analysis application designed to process documents and extract useful information for analysis using LLM-based processing.',
    technologies: ['Python', 'OpenCV', 'LLM-based processing'],
    features: [
      'Document preprocessing & visual layout handling',
      'AI-assisted structured document understanding',
      'Information extraction and semantic analysis',
      'LLM-based contextual content interpretation'
    ],
    githubUrl: 'https://github.com/Deepthi7890/Document_Analysis',
    importantNote: 'Utilizes deep LLM-based understanding and OpenCV visual preprocessing for structured document analysis.',
    accentColor: 'from-violet-500/20 via-fuchsia-500/10 to-transparent'
  },
  {
    id: 'spam-email',
    number: '03',
    title: 'Spam Email Detection using NLP',
    category: 'NLP / Machine Learning',
    filterCategory: 'nlp',
    description: 'Built a machine-learning/NLP-oriented application focused on identifying potentially fraudulent or unwanted emails.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
    features: [
      'Email text preprocessing, tokenization & vectorization',
      'NLP feature extraction and TF-IDF representation',
      'Machine-learning classification algorithms',
      'Spam and fraudulent email identification with high precision'
    ],
    githubUrl: 'https://github.com/Deepthi7890/spam_email_detection',
    accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'voice-assistant',
    number: '04',
    title: 'Smart AI Voice-Controlled Home Assistant',
    category: 'AI Application',
    filterCategory: 'ai-ml',
    description: 'Developed a software-based AI voice assistant application with a Flask backend and Streamlit frontend.',
    technologies: ['Python', 'Flask', 'Streamlit', 'AI / Voice Interaction'],
    features: [
      'Voice input recognition & speech processing',
      'AI assistant conversational logic & command execution',
      'Flask backend architecture for intent routing',
      'Interactive Streamlit web frontend for status visualization',
      'Pure software-based system architecture'
    ],
    githubUrl: 'https://github.com/Deepthi7890/AI-Smart-Voice-Controlled-Home-System',
    importantNote: 'Purely software-based AI interaction system implemented using modern Python web frameworks.',
    accentColor: 'from-purple-600/20 via-violet-600/10 to-transparent'
  },
  {
    id: 'contact-mgmt',
    number: '05',
    title: 'Contact-Message-Management-System',
    category: 'Full-Stack Web Development',
    filterCategory: 'web-dev',
    description: 'Built a full-stack contact and message management system with a public contact form and secure admin dashboard for managing messages.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt'],
    features: [
      'Responsive public contact submission form',
      'Secure message intake & PostgreSQL relational storage',
      'Protected Admin Dashboard for message triage & moderation',
      'JWT token authentication with bcrypt password hashing',
      'Modular full-stack client-server architecture'
    ],
    githubUrl: 'https://github.com/Deepthi7890/Contact-Message-Management-System',
    accentColor: 'from-violet-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'shift-scheduler',
    number: '06',
    title: 'Employee Shift Scheduler',
    category: 'Web Development / Backend',
    filterCategory: 'web-dev',
    description: 'Developed an employee shift scheduling application as part of a team project with primary focus on the backend architecture.',
    technologies: ['Node.js', 'Express.js', 'Controllers', 'Routes', 'Services', 'Middleware', 'JSON Storage'],
    features: [
      'RESTful API endpoints for employee shift allocation',
      'Structured controllers, route handlers, and middleware',
      'Validation and shift conflict resolution algorithms',
      'JSON-based reliable data storage engine'
    ],
    isTeamProject: true,
    roleHighlight: 'My Role: Backend Development',
    backendTechnologies: ['Node.js', 'Express.js', 'Controllers', 'Routes', 'Services', 'Middleware', 'JSON-based data storage'],
    frontendTechnologies: ['React 18', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Lucide React Icons'],
    accentColor: 'from-purple-500/20 via-pink-500/10 to-transparent'
  }
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech)',
  specialization: 'Artificial Intelligence & Data Science',
  college: "Kakinada Institute of Engineering and Technology for Women's College",
  university: 'JNTUK (Jawaharlal Nehru Technological University Kakinada)',
  duration: '2023 – 2027',
  cgpa: '7.89',
  percentage: '71.38%',
  status: 'Final-Year Undergraduate'
};

export const PRACTICAL_LEARNING_DATA: PracticalTool[] = [
  {
    category: 'Career & Profile Engineering',
    items: [
      'ATS-Friendly Resume Optimization',
      'Resume Tailoring Based on Job Descriptions',
      'Overleaf / LaTeX Resume Development',
      'Portfolio Development',
      'Mock Interview Preparation Tools'
    ]
  },
  {
    category: 'AI Models & Foundation Systems',
    items: [
      'Gemini',
      'NotebookLM',
      'Gemma',
      'Ollama',
      'Hugging Face',
      'Sarvam AI',
      'Minimax'
    ]
  },
  {
    category: 'Generative & Creative AI Productivity',
    items: [
      'Google AI Studio',
      'Gamma AI',
      'Suno AI',
      'Opal AI',
      'AI-Assisted Development Workflows'
    ]
  }
];

export const NCC_DATA = {
  title: 'NCC — C Certificate',
  coreCompetencies: [
    'Leadership',
    'Discipline',
    'Teamwork',
    'Time Management'
  ],
  description: 'National Cadet Corps certification emphasizing structured leadership, mission execution, discipline, and collaborative team stewardship.'
};

export const SOFT_SKILLS = [
  'Analytical Thinking',
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Leadership',
  'Time Management'
];
