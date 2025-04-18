export type SkillCategory = {
  id: string;
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // 1-5
  projects: Project[];
  certifications: Certification[];
};

type Project = {
  name: string;
  description: string;
};

type Certification = {
  name: string;
  issuer: string;
  type: 'curso' | 'diploma' | 'título universitario' | 'certificación profesional';
  level: 'básico' | 'intermedio' | 'avanzado';
  date: string;
};

export const skillsData: SkillCategory[] = [
  {
    id: 'prog-langs',
    name: 'Lenguajes de Programación',
    skills: [
      {
        name: 'JavaScript/TypeScript',
        level: 5,
        projects: [
          {
            name: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico con React y Node.js'
          },
          {
            name: 'Task Management Application',
            description: 'Aplicación de gestión de tareas con TypeScript y Firebase'
          }
        ],
        certifications: [
          {
            name: 'Advanced React Patterns',
            issuer: 'Platzi',
            type: 'curso',
            level: 'avanzado',
            date: 'Octubre 2022'
          },
          {
            name: 'Full-Stack Web Development',
            issuer: 'Udemy',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Enero 2023'
          }
        ]
      },
      {
        name: 'Python',
        level: 4,
        projects: [
          {
            name: 'Neural Network Image Classifier',
            description: 'Modelo de deep learning para clasificación de imágenes'
          }
        ],
        certifications: [
          {
            name: 'Machine Learning Professional',
            issuer: 'Google',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Octubre 2023'
          },
          {
            name: 'Deep Learning Specialization',
            issuer: 'Coursera',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Marzo 2023'
          }
        ]
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Desarrollo Frontend',
    skills: [
      {
        name: 'React',
        level: 5,
        projects: [
          {
            name: 'Task Management Application',
            description: 'Aplicación de gestión de tareas con TypeScript y Firebase'
          },
          {
            name: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico con React y Node.js'
          }
        ],
        certifications: [
          {
            name: 'Advanced React Patterns',
            issuer: 'Platzi',
            type: 'curso',
            level: 'avanzado',
            date: 'Octubre 2022'
          }
        ]
      },
      {
        name: 'Tailwind CSS',
        level: 4,
        projects: [
          {
            name: 'Professional Portfolio',
            description: 'Portafolio profesional con diseño responsivo'
          }
        ],
        certifications: [
          {
            name: 'Modern CSS with Tailwind',
            issuer: 'Platzi',
            type: 'curso',
            level: 'intermedio',
            date: 'Julio 2023'
          }
        ]
      }
    ]
  },
  {
    id: 'backend',
    name: 'Desarrollo Backend',
    skills: [
      {
        name: 'Node.js',
        level: 5,
        projects: [
          {
            name: 'E-commerce Platform',
            description: 'Backend de plataforma de comercio electrónico'
          },
          {
            name: 'Smart Home Monitoring System',
            description: 'Sistema IoT para monitoreo de dispositivos del hogar'
          }
        ],
        certifications: [
          {
            name: 'Backend Development with Node.js',
            issuer: 'Platzi',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Junio 2023'
          }
        ]
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud y DevOps',
    skills: [
      {
        name: 'AWS',
        level: 4,
        projects: [
          {
            name: 'E-commerce Platform',
            description: 'Despliegue y escalamiento de aplicación en AWS'
          }
        ],
        certifications: [
          {
            name: 'AWS Certified Solutions Architect',
            issuer: 'AWS',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Diciembre 2023'
          }
        ]
      },
      {
        name: 'Docker/Kubernetes',
        level: 4,
        projects: [
          {
            name: 'Microservices Architecture',
            description: 'Implementación de arquitectura de microservicios'
          }
        ],
        certifications: [
          {
            name: 'DevOps Engineering Professional',
            issuer: 'Others',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Noviembre 2022'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Ciencia de Datos e IA',
    skills: [
      {
        name: 'Machine Learning',
        level: 4,
        projects: [
          {
            name: 'Neural Network Image Classifier',
            description: 'Sistema de clasificación de imágenes con deep learning'
          }
        ],
        certifications: [
          {
            name: 'Machine Learning Professional',
            issuer: 'Google',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Octubre 2023'
          },
          {
            name: 'Deep Learning Specialization',
            issuer: 'Coursera',
            type: 'certificación profesional',
            level: 'avanzado',
            date: 'Marzo 2023'
          }
        ]
      }
    ]
  }
];