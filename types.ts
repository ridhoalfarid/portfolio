
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  category: 'Data Science' | 'Database' | 'Data Visualization' | 'Natural Language Processing' | 'Computer Vision';
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
