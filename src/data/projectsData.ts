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
};

export const categories = ['All', 'Academic', 'Personal', 'Professional'];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Neural Network Image Classifier',
    description: 'Deep learning model for image recognition using TensorFlow and Keras',
    longDescription: 'This academic project involved developing a convolutional neural network (CNN) for image classification. The model was trained on the CIFAR-10 dataset and achieved 94% accuracy. The project included data preprocessing, model architecture design, hyperparameter tuning, and performance evaluation.',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: [
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'Keras', color: 'bg-red-600' },
      { name: 'NumPy', color: 'bg-cyan-600' },
      { name: 'Matplotlib', color: 'bg-purple-600' }
    ],
    role: 'Lead Developer',
    duration: '3 months',
    repoUrl: 'https://github.com/',
    features: [
      'CNN architecture with multiple convolutional layers',
      'Data augmentation to improve model generalization',
      'Batch normalization and dropout for regularization',
      'Learning rate scheduling for optimization',
      'Confusion matrix and performance metrics visualization'
    ],
    category: 'academic'
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, product catalog, and payment processing',
    longDescription: 'Developed a comprehensive e-commerce platform from scratch using React for the frontend and Node.js for the backend. The application features a responsive design, user authentication system, product catalog with filtering and sorting, shopping cart functionality, and secure payment processing with Stripe.',
    imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'MongoDB', color: 'bg-emerald-600' },
      { name: 'Express', color: 'bg-neutral-600' },
      { name: 'Stripe', color: 'bg-purple-500' }
    ],
    role: 'Full-stack Developer',
    duration: '6 months',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    features: [
      'User authentication and profile management',
      'Product catalog with search, filter, and sort functionalities',
      'Shopping cart and wishlist features',
      'Secure payment processing with Stripe',
      'Order management and tracking',
      'Admin dashboard for product and user management'
    ],
    category: 'personal'
  },
  {
    id: 'project-3',
    title: 'Smart Home Monitoring System',
    description: 'IoT-based system for monitoring and controlling home appliances',
    longDescription: 'This project involved developing an IoT-based smart home monitoring system that allows users to monitor and control various home appliances remotely. The system uses ESP32 microcontrollers, various sensors, and a mobile application for user interaction. Data is collected and analyzed in real-time to provide insights on energy usage and suggest optimizations.',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: [
      { name: 'React Native', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'MQTT', color: 'bg-red-500' },
      { name: 'MongoDB', color: 'bg-emerald-600' },
      { name: 'ESP32/Arduino', color: 'bg-cyan-600' }
    ],
    role: 'IoT Developer',
    duration: '4 months',
    repoUrl: 'https://github.com/',
    features: [
      'Real-time monitoring of temperature, humidity, and electricity usage',
      'Remote control of lights, thermostats, and other appliances',
      'Energy usage analytics and optimization suggestions',
      'Automated routines based on time or sensor values',
      'Alert system for unusual activity or values'
    ],
    category: 'academic'
  },
  {
    id: 'project-4',
    title: 'Task Management Application',
    description: 'Web application for task management with team collaboration features',
    longDescription: 'Developed a task management application that helps teams organize and track their work. The application includes features such as task creation and assignment, due date tracking, priority levels, task categories, team collaboration tools, and progress reporting. It was built using React with TypeScript for the frontend and Firebase for the backend services.',
    imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'TypeScript', color: 'bg-blue-700' },
      { name: 'Firebase', color: 'bg-amber-500' },
      { name: 'Redux', color: 'bg-purple-600' },
      { name: 'Tailwind CSS', color: 'bg-cyan-500' }
    ],
    role: 'Frontend Developer',
    duration: '3 months',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    features: [
      'User authentication and team management',
      'Task creation, assignment, and tracking',
      'Kanban board for visual task management',
      'Real-time updates and collaboration',
      'Progress reporting and analytics',
      'Mobile-responsive design'
    ],
    category: 'professional'
  }
];