# Portafolio Académico Profesional

## Descripción
Este proyecto es un portafolio web profesional diseñado para mostrar logros académicos, certificados, proyectos y actividades profesionales. La aplicación está construida con React, TypeScript y Tailwind CSS, utilizando Vite como herramienta de construcción.

## Configuración Inicial

### Requisitos Previos
- [Node.js](https://nodejs.org/) (v18 o superior)
- [Git](https://git-scm.com/)
- Editor de código (recomendado: StackBlitz ⚡️)

### Instalación
1. Clona este repositorio:
```bash
git clone https://github.com/username/ProfessionalPortfolio_Website.git
cd ProfessionalPortfolio_Website
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre http://localhost:5173 en tu navegador para ver la aplicación.

## Cómo Agregar Información Personal

La información personal y profesional se almacena en archivos TypeScript ubicados en la carpeta `/src/data/`. Cada tipo de datos tiene su propio archivo:

- `educationData.ts` - Información académica
- `certificationsData.ts` - Certificados obtenidos
- `projectsData.ts` - Proyectos realizados
- `skillsData.ts` - Habilidades técnicas

### Formato de Datos
Todos los archivos siguen un formato de arreglo de objetos TypeScript que respetan tipos definidos en el directorio `/src/types/portfolio.ts`.

## Modificar Información Académica

Para añadir o editar tu información educativa, modifica el archivo `/src/data/educationData.ts`:

```typescript
export const educationData: Education[] = [
  {
    id: 'edu-3',                               // Identificador único
    institution: 'Tu Universidad',             // Nombre de la institución
    degree: 'Tu Grado',                        // Tipo de grado
    field: 'Tu Especialidad',                  // Campo de estudio
    startDate: '2023',                         // Año de inicio
    endDate: '2025',                           // Año de finalización (o 'Presente')
    description: 'Descripción de los estudios',// Breve descripción
    achievements: [                            // Logros notables
      'Primer logro',
      'Segundo logro'
    ],
    coursework: [                              // Cursos relevantes
      'Curso 1',
      'Curso 2'
    ],
    logo: 'https://ruta-a-tu-logo.jpg'         // URL del logo (opcional)
  }
];
```

## Cargar Nuevos Certificados

Para añadir nuevos certificados:

1. Asegúrate de tener una imagen o PDF del certificado disponible en línea (puedes usar servicios como Google Drive, Dropbox o subir el archivo a la carpeta `/public/certificates/`)

2. Edita el archivo `/src/data/certificationsData.ts` y añade una nueva entrada:

```typescript
export const certificationsData: Certificate[] = [
  // Certificados existentes...
  {
    id: 'cert-nuevo',                       // Identificador único
    name: 'Nombre del Certificado',         // Nombre del certificado
    organization: 'Organización Emisora',   // Quien lo emitió
    issueDate: 'Enero 2025',                // Fecha de emisión
    expirationDate: 'Enero 2028',           // Fecha de expiración (opcional)
    credentialUrl: 'https://url-verificacion.com', // URL para verificar (opcional)
    skills: ['Habilidad 1', 'Habilidad 2'], // Habilidades relacionadas
    published: true                          // Visibilidad del certificado
  }
];
```

## Crear un Proyecto

Para añadir un nuevo proyecto a tu portafolio, edita el archivo `/src/data/projectsData.ts`:

```typescript
export const projectsData: Project[] = [
  // Proyectos existentes...
  {
    id: 'project-nuevo',                    // Identificador único
    title: 'Nombre del Proyecto',           // Título del proyecto
    description: 'Breve descripción',       // Descripción corta
    longDescription: 'Descripción detallada del proyecto y sus objetivos...', // Descripción larga
    imageUrl: '/ruta/a/imagen.jpg',         // Imagen representativa
    technologies: [                         // Tecnologías utilizadas
      { name: 'React', color: 'blue' },
      { name: 'TypeScript', color: 'navy' }
    ],
    role: 'Desarrollador principal',        // Tu rol en el proyecto
    duration: 'Ene 2025 - Mar 2025',        // Duración del proyecto
    liveUrl: 'https://demo-proyecto.com',   // URL del demo (opcional)
    repoUrl: 'https://github.com/user/repo', // URL del repositorio (opcional)
    features: [                             // Características principales
      'Característica 1',
      'Característica 2'
    ],
    category: 'academic',                   // Categoría: 'academic', 'personal', 'professional'
    lastUpdated: '2025-04-01'               // Fecha de última actualización
  }
];
```

## Enlazar Actividades

Las actividades pueden estar relacionadas entre sí mediante sus IDs únicos. Por ejemplo, puedes relacionar un proyecto con un certificado o con estudios realizados en la descripción del proyecto.

Para vincular efectivamente estas entidades, utiliza los IDs como referencia en las descripciones o crea estructuras de datos personalizadas que establezcan estas relaciones.

## Contribución

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
5. Haz push a la rama (`git push origin feature/amazing-feature`)
6. Abre un Pull Request

## Más Información

Consulta los documentos específicos en la carpeta `/docs` para obtener información más detallada sobre cada funcionalidad:

- [Personalización](/docs/personalizacion.md)
- [Gestión Académica](/docs/gestion-academica.md)
- [Certificados](/docs/certificados.md)
- [Proyectos](/docs/proyectos.md)
- [Enlaces](/docs/enlaces.md)
- [Preguntas Frecuentes (FAQ)](/docs/faq.md)

---

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Jrgil20/ProfessionalPortfolio_Website)
