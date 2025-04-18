export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  coursework: string[];
  logo?: string;
};

export const educationData: Education[] = [
  {
    id: 'edu-1',
    institution: 'Stanford University',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2021',
    endDate: '2023',
    description: 'Specialized in Artificial Intelligence and Machine Learning with emphasis on computer vision and natural language processing.',
    achievements: [
      'Graduated with distinction (GPA: 3.92/4.0)',
      'Outstanding Research Award for thesis on "Neural Networks for Image Recognition"',
      'Teaching Assistant for Machine Learning and Algorithms courses'
    ],
    coursework: [
      'Advanced Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning',
      'Distributed Systems'
    ],
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'edu-2',
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science and Engineering',
    startDate: '2017',
    endDate: '2021',
    description: 'Comprehensive undergraduate education covering fundamentals of computer science, software engineering, and systems design.',
    achievements: [
      'Summa Cum Laude graduate (GPA: 3.87/4.0)',
      'Dean\'s List for all eight semesters',
      'Undergraduate Research Opportunity Program fellowship',
      'First Place in Berkeley Hackathon 2019'
    ],
    coursework: [
      'Data Structures and Algorithms',
      'Computer Architecture',
      'Operating Systems',
      'Database Systems',
      'Software Engineering',
      'Web Development',
      'Mobile Application Development'
    ],
    logo: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];