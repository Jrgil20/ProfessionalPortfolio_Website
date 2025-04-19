# Gestión de Certificados

Este documento proporciona información detallada sobre cómo gestionar los certificados en tu portafolio académico.

## Formatos de Archivo Admitidos

Los certificados pueden almacenarse en los siguientes formatos:

- **Documentos**: PDF (recomendado), PNG, JPEG
- **Tamaño máximo**: 5MB por archivo
- **Resolución recomendada para imágenes**: 1200x800 píxeles (mínimo)

## Estructura del Directorio de Almacenamiento

Los certificados deben almacenarse en el siguiente directorio:

```
/public/certificates/
```

Se recomienda organizar los certificados por categorías:

```
/public/certificates/
  ├── academic/           # Certificados académicos
  ├── courses/            # Cursos en línea
  ├── professional/       # Certificaciones profesionales
  └── conferences/        # Eventos y conferencias
```

## Cómo Añadir un Nuevo Certificado

### Paso 1: Preparar el Archivo

1. Guarda tu certificado en formato PDF (preferentemente) o como imagen de alta calidad
2. Nombra el archivo siguiendo el formato: `[año]-[nombre-descriptivo].[extensión]`
   - Ejemplo: `2024-react-advanced-certification.pdf`

### Paso 2: Subir el Archivo

1. Coloca el archivo en el directorio correspondiente dentro de `/public/certificates/`
2. Si utilizas control de versiones (Git), asegúrate de incluir el archivo en tu commit

### Paso 3: Registrar el Certificado

Añade la información del certificado en el archivo `/src/data/certificationsData.ts`:

```typescript
export const certificationsData: Certificate[] = [
  // Certificados existentes...
  {
    id: 'cert-unique-id',                    // ID único para el certificado
    name: 'Nombre del Certificado',          // Título completo
    organization: 'Entidad Emisora',         // Organización que lo otorga
    issueDate: 'Abril 2024',                 // Fecha de emisión
    expirationDate: 'Abril 2026',            // Fecha de expiración (si aplica)
    credentialUrl: 'https://credencial.com', // URL de verificación (opcional)
    skills: [                                // Habilidades relacionadas
      'Habilidad 1', 
      'Habilidad 2'
    ],
    pdfPath: '/certificates/courses/2024-react-advanced-certification.pdf' // Ruta al archivo
  }
];
```

## Validación y Visualización de Certificados

Los certificados se visualizan en la página de Certificaciones. Cuando añadas un nuevo certificado:

1. Verifica que se muestra correctamente en la interfaz
2. Comprueba que el enlace al PDF o imagen funciona adecuadamente
3. Asegúrate de que la información mostrada es precisa y completa

## Actualizaciones y Eliminaciones

### Para actualizar un certificado existente:

1. Modifica los datos correspondientes en el array `certificationsData`
2. Si necesitas reemplazar el archivo PDF/imagen:
   - Sube el nuevo archivo
   - Actualiza la ruta en el campo `pdfPath`
   - Opcionalmente, elimina el archivo antiguo si ya no es necesario

### Para eliminar un certificado:

1. Elimina la entrada correspondiente del array `certificationsData`
2. Opcionalmente, elimina el archivo PDF/imagen asociado

## Certificados con Caducidad

Para certificados que tienen fecha de caducidad:

1. Asegúrate de incluir la fecha de expiración en el campo `expirationDate`
2. El componente de visualización puede mostrar automáticamente un indicador para certificados activos/caducados
3. Para renovaciones, crea una nueva entrada manteniendo el histórico

## Buenas Prácticas

- **Optimización**: Comprime los archivos PDF grandes para mejorar el rendimiento
- **Metadatos**: Incluye información relevante en los campos `skills` para facilitar la búsqueda
- **Privacidad**: No incluyas información personal sensible en los archivos cargados
- **Respaldo**: Mantén una copia de seguridad de tus certificados originales

## Solución de Problemas Comunes

### El certificado no aparece después de subirlo

- Verifica que la ruta en `pdfPath` es correcta y comienza con `/`
- Comprueba que el archivo existe en la ubicación especificada
- Reinicia el servidor de desarrollo

### El PDF no se visualiza correctamente

- Asegúrate de que el archivo no está dañado
- Intenta convertir el PDF a un formato de imagen si el visor PDF da problemas
- Verifica que el tamaño del archivo no exceda los límites