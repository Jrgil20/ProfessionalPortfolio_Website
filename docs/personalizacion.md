# Guía de Personalización

Este documento proporciona detalles técnicos para editar y personalizar la información personal en tu portafolio académico.

## Estructura de Datos Personales

Los datos personales y profesionales se almacenan en varios archivos TypeScript en el directorio `/src/data/`. Cada archivo contiene un tipo específico de información estructurada según interfaces TypeScript definidas en `/src/types/portfolio.ts`.

## Personalización del Perfil Principal

Para personalizar la información principal de tu perfil, puedes crear un archivo `profileData.ts` en el directorio `/src/data/` con la siguiente estructura:

```typescript
export type Profile = {
  name: string;
  title: string;
  summary: string;
  photoUrl: string;
  location: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
};

export const profileData: Profile = {
  name: "Tu Nombre Completo",
  title: "Tu Título Profesional",
  summary: "Una breve descripción profesional de ti mismo (150-200 palabras)...",
  photoUrl: "/ruta/a/tu/foto.jpg",
  location: "Ciudad, País",
  email: "tu.email@ejemplo.com",
  socialLinks: {
    linkedin: "https://linkedin.com/in/tu-usuario",
    github: "https://github.com/tu-usuario",
    twitter: "https://twitter.com/tu-usuario",
    website: "https://tu-sitio-web.com"
  }
};
```

## Personalización de Colores y Tema

### Colores Principales

El tema del portafolio se configura a través de Tailwind CSS. Para ajustar los colores principales, modifica el archivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... otros tonos
          900: '#0c4a6e',
        },
        secondary: {
          // Define tus colores secundarios
        },
        accent: {
          // Define tus colores de acento
        }
      }
    }
  }
};
```

### Fuentes Personalizadas

Para cambiar las fuentes utilizadas en el portafolio:

1. Añade las fuentes deseadas en el archivo `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono&display=swap');
```

2. Configura las fuentes en `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    }
  }
};
```

## Personalización del Diseño

### Estructura de Componentes

Los componentes de la interfaz se encuentran en `/src/components/`. La estructura es:

- `layout/`: Componentes estructurales (navbar, footer, etc.)
- `ui/`: Componentes de interfaz reutilizables
- Otros componentes específicos de sección

Para modificar la apariencia de una sección específica, edita el componente correspondiente.

## Mejores Prácticas para la Personalización

1. **Imágenes**: Utiliza imágenes optimizadas (máx. 1MB) con una relación de aspecto consistente
2. **Consistencia**: Mantén un estilo visual coherente en todo el portafolio
3. **Texto**: Limita las descripciones largas a 200-300 palabras para mejorar la legibilidad
4. **Datos sensibles**: No incluyas información personal sensible como números de teléfono o domicilios

## Advertencia sobre Modificaciones Críticas

⚠️ **PRECAUCIÓN**:
- No modifiques los nombres de los campos en los archivos de datos sin actualizar también los tipos correspondientes
- No cambies las rutas base de importación sin actualizar todas las referencias
- Realiza siempre una copia de seguridad antes de hacer cambios estructurales importantes