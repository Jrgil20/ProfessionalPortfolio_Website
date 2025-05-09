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
  certificateUrl?: string;
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
    startDate: 'feb. 2025',
    endDate: 'may. 2025',
    description: 'Programa intensivo para el desarrollo de aplicaciones descentralizadas y comprensión del ecosistema blockchain.',
    achievements: [
      'Desarrollo de proyecto final: DApp con Smart Contracts',
      'Certificado obtenido con mención honorífica'
    ],
    certificateUrl: '/DiplomadoDesarrolloBlockChianWeb3.pdf',
    coursework: [
      'Fundamentos de Blockchain',
      'Smart Contracts con Solidity',
      'Desarrollo de DApps',
      'Web3 y Ecosistema Ethereum',
      'Tokenización de activos'
    ]
  }
];