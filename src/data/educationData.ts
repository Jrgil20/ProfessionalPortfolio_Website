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
    institution: 'Universidad Catolica Andres Bello',
    degree: 'Grado en Ingeniería',
    field: 'Ingeniería informática',
    startDate: 'mar. 2020',
    endDate: 'ene. 2026',
    description: 'Actividades y grupos: vive la U, Protocolo Ucab, Club Programación, maratón local de Programación, Game jam, micro cursos',
    achievements: [
      'Participante recurrente de las actividades de DIDES.',
      'Trabajando en actividad protocolar con cultura UCAB.'
    ],
    coursework: []
  },
  {
    id: 'edu-2',
    institution: 'Universidad Catolica Andres Bello',
    degree: 'Diplomado',
    field: 'Diplomado en Desarrollo Blockchain y WEB3',
    startDate: '',
    endDate: '',
    description: '',
    achievements: [],
    coursework: []
  }
];