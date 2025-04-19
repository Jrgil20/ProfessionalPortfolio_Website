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
  'Platzi',
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
  },
  {
    id: 'cert-4',
    title: 'Gestión Del Tiempo: Productividad y Planificación Objetivos',
    provider: 'Udemy',
    date: '7 de febrero de 2023',
    description: 'Certificado de finalización de Udemy. Duración: 1 hora en total.',
    skills: ['Gestión del tiempo', 'Productividad'],
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-50268fcd-d61a-4dfb-9d44-2f8d22cf9897.jpg?v=1675826844000',
    certificateUrl: 'https://www.udemy.com/certificate/UC-50268fcd-d61a-4dfb-9d44-2f8d22cf9897/'
  },
  {
    id: 'cert-5',
    title: 'Curso de Git y GitHub',
    provider: 'Platzi',
    date: '15 de marzo de 2025',
    description: 'Certificado de aprobación de Platzi. Duración: 6 horas de contenido.',
    skills: ['Control de versiones', 'Git', 'Github'],
    imageUrl: 'https://static.platzi.com/media/achievements/badge-8-738d990a-87e0-488a-b069-6ac164a2790c.png',
    certificateUrl: 'https://platzi.com/p/jrgil/curso/11059-gitgithub/diploma/detalle/'
  },
  {
    id: 'cert-6',
    title: 'Curso de C++ Básico',
    provider: 'Platzi',
    date: '17 de noviembre de 2024',
    description: 'Certificado de aprobación de Platzi.  Duración: 2 horas de contenido. ',
    skills: ['C++'],
    imageUrl: 'https://static.platzi.com/media/achievements/badges-curso-c-basico-9e53cb3b-acf8-4842-bedd-9210ffaba942.png',
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2372-c-plus-plus/diploma/detalle/'
  },
  {
    id: 'cert-7',
    title: 'Curso Básico de Programación en Go',
    provider: 'Platzi',
    date: '15 de marzo de 2025',
    description: 'Certificado de aprobación de Platzi. Duración: 4 horas de contenido. Nivel básico.',
    skills: ['Golang'],
    imageUrl: 'https://static.platzi.com/media/achievements/badge-go-57d6b6ee-c9de-4d9e-9e2c-29a0c879748d-1859b16d-1c87-4b38-bf0a-aee1256cc355.webp',
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2232-programacion-golang/diploma/detalle/'
  },
  {
    id: 'cert-8',
    title: 'Curso de Go Intermedio: Programación Orientada a Objetos y Concurrencia',
    provider: 'Platzi',
    date: '16 de marzo de 2025',
    description: 'Certificado de aprobación de Platzi. Duración: 5 horas de contenido.',
    skills: ['Golang', 'Programación Orientada a Objetos', 'Concurrencia'],
    imageUrl: 'https://static.platzi.com/media/achievements/badge-intermedio-golang-20f7fb00-da03-47a1-b62d-4dd583308c52.png',
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2357-golang-intermedio/diploma/detalle/'
  }
];