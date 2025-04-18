export type Certification = {
  id: string;
  title: string;
  provider: string;
  date: string;
  description: string;
  skills: string[];
  imageUrl: string;
  certificateUrl?: string;
};

export const providers = [
  'All',
  'AWS',
  'Google',
  'Microsoft',
  'Platzi',
  'Coursera',
  'Udemy',
  'Others'
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Solutions Architect',
    provider: 'AWS',
    date: 'December 2023',
    description: 'Professional certification validating expertise in designing distributed systems on AWS.',
    skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-1'
  },
  {
    id: 'cert-2',
    title: 'Machine Learning Professional',
    provider: 'Google',
    date: 'October 2023',
    description: 'Advanced certification covering machine learning concepts, models, and implementation on Google Cloud.',
    skills: ['Machine Learning', 'TensorFlow', 'Data Science', 'Python'],
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-2'
  },
  {
    id: 'cert-3',
    title: 'Azure Data Engineer Associate',
    provider: 'Microsoft',
    date: 'August 2023',
    description: 'Certification focused on designing and implementing the management, monitoring, security, and privacy of data solutions on Microsoft Azure.',
    skills: ['Azure', 'Data Engineering', 'ETL', 'Data Warehousing'],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-3'
  },
  {
    id: 'cert-4',
    title: 'Backend Development with Node.js',
    provider: 'Platzi',
    date: 'June 2023',
    description: 'Comprehensive course on building scalable backend applications using Node.js, Express, and MongoDB.',
    skills: ['Node.js', 'Express', 'MongoDB', 'API Development'],
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-4'
  },
  {
    id: 'cert-5',
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    date: 'March 2023',
    description: 'Five-course specialization covering deep learning fundamentals, CNNs, sequence models, and practical applications.',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Computer Vision'],
    imageUrl: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-5'
  },
  {
    id: 'cert-6',
    title: 'Full-Stack Web Development',
    provider: 'Udemy',
    date: 'January 2023',
    description: 'Comprehensive bootcamp covering frontend and backend development with modern frameworks and tools.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-6'
  },
  {
    id: 'cert-7',
    title: 'DevOps Engineering Professional',
    provider: 'Others',
    date: 'November 2022',
    description: 'Professional certification validating skills in implementing DevOps practices, CI/CD pipelines, and infrastructure automation.',
    skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Infrastructure as Code'],
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-7'
  },
  {
    id: 'cert-8',
    title: 'Advanced React Patterns',
    provider: 'Platzi',
    date: 'October 2022',
    description: 'Deep dive into advanced React patterns including compound components, render props, and hooks.',
    skills: ['React', 'JavaScript', 'Frontend Architecture', 'Performance Optimization'],
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    certificateUrl: '#certificate-8'
  }
];