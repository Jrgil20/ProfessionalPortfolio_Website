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
        name: 'C',
        level: 4,
        projects: [],
        certifications: [
          {
            name: 'Aprende Lenguaje C de CERO a EXPERTO',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Mayo 2023'
          }
        ]
      },
      {
        name: 'Java',
        level: 3,
        projects: [],
        certifications: [
          {
            name: 'Curso de Java - Nivel Básico',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Septiembre 2023'
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
        name: 'Control de Versiones (Git/Github)',
        level: 3,
        projects: [],
        certifications: [
          {
            name: 'Github Basics',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Octubre 2024'
          }
        ]
      }
    ]
  },
  {
    id: 'soft-skills',
    name: 'Habilidades Blandas',
    skills: [
      {
        name: 'Gestión del Tiempo',
        level: 3,
        projects: [],
        certifications: [
          {
            name: 'Gestión Del Tiempo: Productividad y Planificación Objetivos',
            issuer: 'Udemy',
            type: 'curso',
            level: 'intermedio',
            date: 'Febrero 2023'
          }
        ]
      }
    ]
  }
];