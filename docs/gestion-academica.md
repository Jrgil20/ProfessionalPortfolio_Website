# Gestión Académica

Este documento describe el flujo de trabajo para actualizar y gestionar tu información académica en el portafolio.

## Estructura de Datos Académicos

Los datos académicos se definen en `/src/data/educationData.ts` y siguen la interfaz `Education` definida en `/src/types/portfolio.ts`.

## Añadir Nueva Educación

Para añadir un nuevo registro educativo:

1. Abre el archivo `/src/data/educationData.ts`
2. Añade una nueva entrada al array `educationData` siguiendo la estructura existente:

```typescript
{
  id: 'edu-nuevo',                          // Asigna un ID único (incremental)
  institution: 'Nombre de la Universidad',  // Nombre de la institución
  degree: 'Título Obtenido',                // Grado académico
  field: 'Área de Estudio',                 // Especialidad
  startDate: '2023',                        // Año de inicio
  endDate: '2026',                          // Año de finalización (o 'Presente')
  description: 'Descripción del programa...',  // Descripción del programa
  achievements: [                           // Lista de logros (opcional)
    'Logro académico 1',
    'Logro académico 2'
  ],
  coursework: [                             // Cursos relevantes (opcional)
    'Curso relevante 1',
    'Curso relevante 2'
  ],
  logo: '/ruta/al/logo.png'                 // Ruta al logo de la institución
}
```

## Modificar Educación Existente

Para editar un registro educativo existente:

1. Localiza la entrada correspondiente en el array `educationData`
2. Actualiza los campos necesarios manteniendo la estructura del objeto

## Añadir Publicaciones Académicas

Para crear una sección de publicaciones académicas:

1. Crea un nuevo archivo `/src/data/publicationsData.ts` con la siguiente estructura:

```typescript
export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  doi?: string;
  abstract: string;
  keywords: string[];
  url?: string;
};

export const publicationsData: Publication[] = [
  {
    id: 'pub-1',
    title: 'Título de la Publicación',
    authors: ['Tu Nombre', 'Coautor 1', 'Coautor 2'],
    journal: 'Nombre de la Revista o Conferencia',
    year: '2024',
    doi: '10.1000/xyz123', // Opcional
    abstract: 'Resumen de la publicación...',
    keywords: ['Palabra clave 1', 'Palabra clave 2'],
    url: 'https://enlace-a-la-publicacion.com'
  },
  // Más publicaciones...
];
```

2. Crea el componente correspondiente para mostrar las publicaciones en `/src/pages/Publications.tsx`

## Mostrar Actividades Académicas Adicionales

Para añadir otras actividades académicas como conferencias, seminarios o talleres:

1. Crea un nuevo archivo `/src/data/academicActivitiesData.ts`:

```typescript
export type AcademicActivity = {
  id: string;
  name: string;
  type: 'conference' | 'seminar' | 'workshop' | 'research' | 'other';
  organization: string;
  date: string;
  location?: string;
  description: string;
  role: 'attendee' | 'presenter' | 'organizer' | 'collaborator';
  certificateId?: string; // Referencia a un certificado si existe
};

export const academicActivitiesData: AcademicActivity[] = [
  {
    id: 'act-1',
    name: 'Nombre de la Actividad',
    type: 'conference',
    organization: 'Organización',
    date: 'Mayo 2024',
    location: 'Ciudad, País',
    description: 'Descripción de la actividad...',
    role: 'presenter',
    certificateId: 'cert-1' // Opcional: enlace a un certificado
  },
  // Más actividades...
];
```

2. Implementa el componente correspondiente para visualizar estas actividades

## Orden y Visualización de Logros Académicos

Para controlar el orden en que se muestran los logros académicos:

- Los registros se mostrarán en el orden en que aparecen en el array
- Coloca los logros más recientes primero para destacarlos
- Para cambiar la visualización temporal, actualiza los componentes en `/src/pages/Education.tsx`

## Integración con Certificados

Puedes relacionar logros académicos con certificados utilizando el ID del certificado:

```typescript
{
  id: 'edu-4',
  institution: 'Universidad Online',
  degree: 'Especialización',
  field: 'Inteligencia Artificial',
  // ... otros campos ...
  relatedCertificates: ['cert-1', 'cert-2'] // Referencias a certificados relacionados
}
```

## Flujo de Trabajo Recomendado

1. **Planificación**: Organiza tu información académica en orden cronológico
2. **Preparación de Imágenes**: Recopila logos de instituciones (formato cuadrado, preferiblemente PNG con fondo transparente)
3. **Actualización de Datos**: Edita los archivos correspondientes
4. **Verificación**: Comprueba la visualización en la interfaz
5. **Revisión**: Asegúrate de que la información sea precisa y esté bien presentada

⚠️ **Nota importante**: Verifica siempre que todos los nuevos registros incluyan un ID único para evitar conflictos y facilitar la vinculación con otras entidades del portafolio.