export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI / Computer Vision' | 'AI / Document Analysis' | 'NLP / Machine Learning' | 'AI Application' | 'Full-Stack Web Development' | 'Web Development / Backend';
  filterCategory: 'ai-ml' | 'data' | 'nlp' | 'computer-vision' | 'web-dev';
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  isTeamProject?: boolean;
  roleHighlight?: string;
  importantNote?: string;
  backendTechnologies?: string[];
  frontendTechnologies?: string[];
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CareerRole {
  title: string;
  description: string;
  tags: string[];
}

export interface PracticalTool {
  category: string;
  items: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  college: string;
  university: string;
  duration: string;
  cgpa: string;
  percentage: string;
  status: string;
}
