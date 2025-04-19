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
  'Udemy',
  'Others'
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Aprende Lenguaje C de CERO a EXPERTO',
    provider: 'Udemy',
    date: '7 de mayo de 2023',
    description: 'Certificado de finalización de Udemy. Duración: 2.5 horas en total.',
    skills: ['C (lenguaje de programación)', 'Desarrollo backend'],
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-dbdd0133-33b9-47ce-b0d0-442f53dd7f03.jpg?v=1683449779000',
    certificateUrl: 'https://www.udemy.com/certificate/UC-dbdd0133-33b9-47ce-b0d0-442f53dd7f03/'
  },
  {
    id: 'cert-2',
    title: 'Github Basics',
    provider: 'Udemy',
    date: '23 de octubre de 2024',
    description: 'Certificado de finalización de Udemy. Duración: 1 hora en total.',
    skills: ['Control de versiones', 'Github'],
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e05cdb24-ef21-46e7-b6ff-653e276ef402.jpg?v=1729722776000',
    certificateUrl: 'https://www.udemy.com/certificate/UC-e05cdb24-ef21-46e7-b6ff-653e276ef402/'
  },
  {
    id: 'cert-3',
    title: 'Curso de Java - Nivel Básico',
    provider: 'Udemy',
    date: '24 de septiembre de 2023',
    description: 'Certificado de finalización de Udemy. Duración: 4.5 horas en total.',
    skills: ['Lenguaje de programación: JAVA'],
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-70267a58-44f7-47b4-9f5a-cd4aaf73d135.jpg?v=1695561503000',
    certificateUrl: 'https://www.udemy.com/certificate/UC-70267a58-44f7-47b4-9f5a-cd4aaf73d135/'
  }
];