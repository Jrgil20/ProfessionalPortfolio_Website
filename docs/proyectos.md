# Documentación de Proyectos

Este documento describe cómo añadir y gestionar proyectos en tu portafolio académico.

## Estructura de un Proyecto

Un proyecto en tu portafolio se define mediante la interfaz `Project` en `/src/types/portfolio.ts`. Cada proyecto incluye los siguientes campos:

### Campos Obligatorios

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador único para el proyecto |
| `title` | string | Título descriptivo del proyecto |
| `description` | string | Resumen breve del proyecto (1-2 oraciones) |
| `longDescription` | string | Descripción detallada del proyecto |
| `imageUrl` | string | URL o ruta a la imagen destacada |
| `technologies` | Technology[] | Tecnologías utilizadas en el proyecto |
| `role` | string | Tu rol en el proyecto |
| `duration` | string | Duración o periodo del proyecto |
| `features` | string[] | Lista de características destacadas |
| `category` | 'academic' \| 'personal' \| 'professional' | Categoría del proyecto |

### Campos Opcionales

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `liveUrl` | string | URL al sitio en vivo |
| `repoUrl` | string | URL al repositorio de código |
| `lastUpdated` | string | Fecha de última actualización |
| `stars` | number | Número de estrellas (si es de GitHub) |
| `forks` | number | Número de forks (si es de GitHub) |

## Plantilla para Nuevo Proyecto

Para añadir un proyecto nuevo, usa esta plantilla en el archivo `/src/data/projectsData.ts`:

```typescript
{
  id: 'project-id',           // Identificador único, ej: 'project-weather-app'
  title: 'Título del Proyecto',
  description: 'Descripción breve del proyecto que resuma sus objetivos y características principales en 1-2 oraciones.',
  longDescription: `
    Descripción detallada del proyecto que incluya:
    - El problema que resuelve
    - La solución implementada
    - Los desafíos técnicos superados
    - Metodología utilizada
    - Resultados o impacto del proyecto
  `,
  imageUrl: '/path/to/project-image.jpg',  // Ruta a la imagen destacada
  technologies: [
    { name: 'React', color: 'blue' },
    { name: 'TypeScript', color: 'navy' }
    // Añade todas las tecnologías relevantes
  ],
  role: 'Desarrollador Principal',  // Tu rol en el proyecto
  duration: 'Enero 2024 - Marzo 2024',  // Duración del proyecto
  liveUrl: 'https://ejemplo.com',  // Opcional: URL al sitio en vivo
  repoUrl: 'https://github.com/usuario/repo',  // Opcional: URL al repositorio
  features: [
    'Característica principal 1',
    'Característica principal 2',
    'Característica principal 3'
    // Añade más características según sea necesario
  ],
  category: 'academic',  // Categoría: 'academic', 'personal', 'professional'
  lastUpdated: '2024-03-15'  // Fecha de última actualización
}
```

## Organización de Imágenes

Las imágenes de los proyectos deben almacenarse en el directorio:

```
/public/projects/
```

Recomendaciones para las imágenes:
- Resolución: 1200x630px (proporción 16:9) o 1080x1080px (proporción 1:1)
- Formato: JPEG o PNG (con compresión optimizada)
- Tamaño: < 500KB para mejor rendimiento
- Nombre de archivo: Usar el ID del proyecto, ej: `project-weather-app.jpg`

## Categorías de Proyectos

Los proyectos pueden clasificarse en tres categorías principales:

1. **academic**: Proyectos realizados en contexto educativo (tesis, trabajos de clase, investigaciones)
2. **personal**: Proyectos personales y experimentos (side projects, open source, hobbies)
3. **professional**: Proyectos realizados en contexto laboral o para clientes

## Tecnologías

Las tecnologías se definen con un nombre y un color asociado:

```typescript
technologies: [
  { name: 'React', color: 'blue' },
  { name: 'Node.js', color: 'green' },
  { name: 'MongoDB', color: 'leaf' }
]
```

Los colores disponibles son:
- `blue` - Azul
- `red` - Rojo
- `green` - Verde
- `yellow` - Amarillo
- `purple` - Púrpura
- `orange` - Naranja
- `pink` - Rosa
- `gray` - Gris
- `navy` - Azul marino
- `leaf` - Verde hoja

## Ejemplos de Código

Para incluir ejemplos de código en la descripción larga, puedes utilizar markdown:

```typescript
longDescription: `
  # Título del Proyecto
  
  Este proyecto implementa un sistema de...
  
  ## Características principales
  
  - Feature 1
  - Feature 2
  
  ## Ejemplo de código clave
  
  \`\`\`javascript
  function calculateSomething() {
    // Implementación
    return result;
  }
  \`\`\`
`
```

## Destacar un Proyecto

Para destacar proyectos importantes en la página principal:

1. Añade un campo adicional `featured: true` al objeto del proyecto
2. Asegúrate de tener una imagen de alta calidad
3. Proporciona una descripción detallada y atractiva

## Vincular Proyectos con Certificados o Educación

Para vincular un proyecto con certificados o logros educativos:

```typescript
{
  // ... campos estándar del proyecto ...
  
  relatedCertifications: ['cert-1', 'cert-2'],  // IDs de certificados relacionados
  relatedEducation: ['edu-1'],                  // IDs de logros académicos relacionados
  
  // ... otros campos ...
}
```

## Flujo de Trabajo para Añadir un Proyecto

1. **Preparación de Contenido**:
   - Escribe la descripción del proyecto
   - Crea/optimiza la imagen principal
   - Define las tecnologías y características
   
2. **Agregar Datos**:
   - Añade el proyecto al archivo `/src/data/projectsData.ts`
   - Coloca la imagen en `/public/projects/`
   
3. **Verificación**:
   - Ejecuta la aplicación en modo desarrollo (`npm run dev`)
   - Verifica que el proyecto aparece correctamente en la página de Proyectos
   - Comprueba los enlaces y la visualización de la imagen

4. **Optimización**:
   - Ajusta textos y formatos según sea necesario
   - Asegúrate de que todos los enlaces funcionan correctamente