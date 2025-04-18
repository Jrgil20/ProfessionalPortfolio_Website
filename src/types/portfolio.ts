export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: Technology[];
  role: string;
  duration: string;
  liveUrl?: string;
  repoUrl?: string;
  features: string[];
  category: 'academic' | 'personal' | 'professional';
  lastUpdated?: string;
  stars?: number;
  forks?: number;
};

export type Certificate = {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  expirationDate?: string;
  credentialUrl?: string;
  skills: string[];
  published?: boolean;
};