# Preguntas Frecuentes (FAQ)

En esta sección encontrarás respuestas a preguntas comunes y soluciones a problemas habituales al gestionar tu portafolio académico.

## Problemas Generales

### ¿Por qué no se muestran mis cambios al editar los archivos de datos?

**Posibles causas y soluciones:**

1. **Servidor de desarrollo no está en ejecución**
   - Asegúrate de tener el servidor en ejecución con `npm run dev`
   - Verifica que no hay errores en la consola del servidor

2. **Error de sintaxis en el archivo modificado**
   - Verifica que no falten comas, paréntesis o llaves
   - Asegúrate de que todas las cadenas de texto estén correctamente entrecomilladas
   - Comprueba la consola del navegador para ver errores específicos

3. **Cache del navegador**
   - Intenta hacer un hard refresh (Ctrl+F5 o Cmd+Shift+R)
   - Alternativamente, abre DevTools y desactiva la caché mientras estás en modo desarrollador

4. **TypeScript no reconoce la estructura**
   - Asegúrate de que los nuevos datos cumplen con las interfaces definidas
   - Comprueba que todos los campos requeridos están presentes

### ¿Cómo puedo añadir una nueva sección que no está contemplada actualmente?

Para añadir una nueva sección (por ejemplo, "Publicaciones" o "Reconocimientos"):

1. Define el tipo de datos en `/src/types/portfolio.ts`
2. Crea un nuevo archivo de datos en `/src/data/` (ej: `publicationsData.ts`)
3. Crea el componente de página en `/src/pages/` (ej: `Publications.tsx`)
4. Añade la ruta en el enrutador principal
5. Actualiza la navegación en el componente `Navbar.tsx`

## Problemas con Imágenes y Archivos

### Los certificados o imágenes no se muestran después de subirlos

**Comprobaciones a realizar:**

1. **Ruta incorrecta**:
   - Verifica que la ruta comienza con `/` (ej: `/certificates/cert1.pdf`)
   - Asegúrate de usar barras hacia adelante, no backslashes

2. **Archivo no disponible**:
   - Comprueba que el archivo existe físicamente en la carpeta especificada
   - Verifica permisos de lectura

3. **Formato no compatible**:
   - Asegúrate de usar formatos web estándar (JPEG, PNG, PDF)
   - Si es PDF, verifica que el visor PDF está correctamente implementado

4. **Tamaño excesivo**:
   - Optimiza imágenes grandes (>1MB)
   - Considera usar servicios de optimización como TinyPNG

### ¿Cómo puedo incluir videos o presentaciones en mi portafolio?

Para incluir contenido multimedia como videos o presentaciones:

1. **Para videos**:
   - Sube tu video a plataformas como YouTube o Vimeo
   - Integra el video usando un iframe o un componente específico
   - Ejemplo de integración en la descripción del proyecto:

   ```typescript
   longDescription: `
     # Mi Proyecto Awesome
     
     ## Demostración en video
     
     <div class="video-container">
       <iframe 
         src="https://www.youtube.com/embed/VIDEO_ID" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
         allowfullscreen>
       </iframe>
     </div>
     
     ## Más información...
   `
   ```

2. **Para presentaciones**:
   - Usa servicios como SlideShare, Google Slides o Canva
   - Integra usando un iframe o componente específico
   - Alternativamente, convierte a PDF y ofrece un enlace de descarga

## Problemas de Despliegue

### Mi portafolio no se despliega correctamente en producción

**Soluciones comunes:**

1. **Rutas base incorrectas**:
   - Verifica el valor de `base` en `vite.config.ts` si usas un subdirectorio
   - Asegúrate de usar rutas relativas o configura correctamente el `publicPath`

2. **Errores en la compilación**:
   - Ejecuta `npm run build` localmente y corrige cualquier error
   - Verifica los logs de CI/CD si estás usando GitHub Actions u otro servicio

3. **Archivos estáticos no encontrados**:
   - Comprueba que todos los recursos estáticos están incluidos en la carpeta `/public`
   - Verifica que las rutas a los recursos son correctas en producción

## Problemas de Datos y Estructura

### Aparece un error "Cannot read property of undefined" al navegar por el portafolio

Este error suele ocurrir cuando:

1. **Datos faltantes o incompletos**:
   - Asegúrate de que todos los objetos tienen los campos requeridos
   - Inicializa arrays vacíos en lugar de dejarlos como `undefined`

2. **Acceso a propiedades anidadas no seguro**:
   - Usa el operador de encadenamiento opcional (`?.`) para acceder a propiedades que pueden ser nulas
   - Usa el operador coalescente nulo (`??`) para proporcionar valores por defecto

   ```tsx
   // En lugar de:
   <span>{project.relatedCertifications[0].name}</span>
   
   // Usa:
   <span>{project.relatedCertifications?.[0]?.name || 'Sin certificado relacionado'}</span>
   ```

### ¿Cómo puedo filtrar o buscar en mis proyectos/certificados?

Si deseas implementar funcionalidad de búsqueda o filtrado:

1. **Crea un componente de búsqueda/filtro**:
   - Implementa un estado para la consulta de búsqueda
   - Filtra los datos basados en la consulta

   ```tsx
   // Ejemplo simplificado
   const [searchQuery, setSearchQuery] = useState('');
   
   const filteredProjects = projectsData.filter(project => 
     project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     project.description.toLowerCase().includes(searchQuery.toLowerCase())
   );
   ```

2. **Añade etiquetas/categorías a tus entidades**:
   - Extiende las interfaces para incluir etiquetas o categorías
   - Implementa filtros basados en estas etiquetas

## Respaldo y Seguridad

### ¿Cómo puedo hacer un respaldo de mis datos?

1. **Control de versiones**:
   - Usa Git para mantener un historial de cambios
   - Haz commits frecuentes cada vez que actualices datos importantes

2. **Exportación periódica**:
   - Implementa una función para exportar todos los datos a JSON
   - Guarda copias de certificados y otros recursos en almacenamiento externo

3. **Backup automatizado**:
   - Configura GitHub Actions u otro servicio de CI para crear respaldos periódicos
   - Almacena los respaldos en un servicio seguro como Google Drive o Dropbox

### ¿Es seguro incluir información personal en mi portafolio?

**Consideraciones importantes:**

1. **Información sensible**:
   - Evita incluir número de teléfono personal, dirección domiciliaria o documentos de identidad
   - Utiliza formularios de contacto en lugar de exponer tu email directamente

2. **Certificados y títulos**:
   - Redacta o oculta números de identificación personal en certificados
   - Considera usar versiones específicas para web sin información sensible

3. **Información de proyectos confidenciales**:
   - Obtén permiso antes de compartir detalles de proyectos corporativos
   - Enfócate en tu contribución sin revelar detalles confidenciales o propietarios