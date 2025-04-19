# Guía de Enlaces entre Actividades

Este documento describe la lógica y metodología para relacionar diferentes entidades en tu portafolio académico.

## Concepto de Enlaces

En un portafolio académico, es fundamental establecer relaciones entre las diferentes actividades, logros y proyectos. Estas conexiones permiten contar una historia coherente sobre tu trayectoria profesional y académica.

## Sistema de IDs Únicos

Cada entidad en el portafolio (proyecto, certificado, logro académico, etc.) tiene un identificador único (ID) que permite referenciarla. Este sistema de IDs es la base del mecanismo de enlaces.

### Formato Recomendado para IDs

| Tipo de Entidad | Prefijo | Ejemplo |
|-----------------|---------|---------|
| Proyectos | project- | project-ml-vision |
| Certificados | cert- | cert-aws-cloud |
| Educación | edu- | edu-masters-cs |
| Habilidades | skill- | skill-python |
| Publicaciones | pub- | pub-research-ai |
| Actividades | act- | act-conference-2024 |

## Tipos de Enlaces

### 1. Enlaces Directos por ID

El método más simple es referenciar directamente el ID de otra entidad:

```typescript
// En projectsData.ts
{
  id: 'project-ml-vision',
  // ... otros campos ...
  relatedCertifications: ['cert-tensorflow', 'cert-python-ml'],
  relatedEducation: ['edu-masters-cs']
}
```

### 2. Enlaces en Descripciones

Puedes incluir referencias a otras entidades dentro de las descripciones utilizando un formato especial que luego puede ser procesado:

```typescript
// En educationData.ts
{
  id: 'edu-masters-cs',
  // ... otros campos ...
  description: 'Durante este programa, desarrollé varios proyectos importantes [ref:project-ml-vision] y obtuve certificaciones clave [ref:cert-tensorflow].'
}
```

Para procesar estas referencias, se puede implementar una función que busque y reemplace estos patrones con enlaces:

```typescript
function processReferences(text: string, data: AllPortfolioData): string {
  return text.replace(/\[ref:([a-z0-9-]+)\]/g, (match, id) => {
    // Buscar la entidad por ID y generar un enlace apropiado
    const entity = findEntityById(id, data);
    if (entity) {
      return `<a href="#/entity/${id}" class="reference-link">${entity.name || entity.title}</a>`;
    }
    return match; // Mantener el texto original si no se encuentra
  });
}
```

## Implementación de Enlaces Bidireccionales

Para mantener la consistencia, se recomienda establecer enlaces bidireccionales entre entidades relacionadas:

```typescript
// En src/hooks/useEntityRelations.ts
export function useEntityRelations(entityId: string) {
  // Obtener todas las entidades del portafolio
  const allEntities = useAllEntities();
  
  // Entidades que referencian a esta entidad
  const referencedBy = allEntities.filter(entity => 
    entity.relatedEntities?.includes(entityId) ||
    (entity.description && entity.description.includes(`[ref:${entityId}]`))
  );
  
  return { referencedBy };
}
```

## Visualización de Enlaces

### Componente de Enlaces Relacionados

Puedes crear un componente reutilizable para mostrar entidades relacionadas:

```tsx
// En src/components/ui/RelatedEntities.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedEntitiesProps {
  entityIds: string[];
  entityType: 'projects' | 'certifications' | 'education';
  title: string;
}

export const RelatedEntities: React.FC<RelatedEntitiesProps> = ({ 
  entityIds, 
  entityType,
  title
}) => {
  const entities = useEntitiesByIds(entityIds, entityType);
  
  if (!entities.length) return null;
  
  return (
    <div className="related-entities-container">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="list-disc pl-5 mt-2">
        {entities.map(entity => (
          <li key={entity.id}>
            <Link 
              to={`/${entityType}/${entity.id}`} 
              className="text-blue-600 hover:text-blue-800"
            >
              {entity.title || entity.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## Navegación Entre Entidades Relacionadas

Para facilitar la navegación entre entidades relacionadas, implementa enlaces en las páginas de detalle:

```tsx
// En páginas de detalle como ProjectDetail.tsx
<div className="related-content mt-8">
  <RelatedEntities 
    entityIds={project.relatedCertifications || []}
    entityType="certifications"
    title="Certificaciones relacionadas"
  />
  
  <RelatedEntities 
    entityIds={project.relatedEducation || []}
    entityType="education"
    title="Formación académica relacionada"
  />
</div>
```

## Mejores Prácticas para Enlaces

1. **Consistencia**: Utiliza siempre el mismo formato de ID para cada tipo de entidad
2. **Bidireccionalidad**: Cuando sea posible, establece enlaces en ambas direcciones
3. **Relevancia**: Enlaza solo entidades que tienen una conexión significativa
4. **Moderación**: Limita el número de enlaces a los más relevantes (3-5 como máximo)
5. **Mantenimiento**: Actualiza los enlaces cuando elimines o renombres entidades

## Validación de Enlaces

Para evitar enlaces rotos, implementa una utilidad de validación:

```typescript
// En src/utils/validateLinks.ts
export function validateEntityLinks(data: AllPortfolioData): {valid: boolean, errors: string[]} {
  const errors: string[] = [];
  const allIds = getAllEntityIds(data);
  
  // Buscar referencias a IDs que no existen
  Object.entries(data).forEach(([category, entities]) => {
    entities.forEach(entity => {
      // Validar enlaces directos
      const relatedFields = ['relatedCertifications', 'relatedEducation', 'relatedProjects'];
      relatedFields.forEach(field => {
        if (entity[field]) {
          entity[field].forEach(relatedId => {
            if (!allIds.includes(relatedId)) {
              errors.push(`Error en ${entity.id}: Enlace a ${relatedId} no existe`);
            }
          });
        }
      });
      
      // Validar enlaces en descripciones
      if (entity.description) {
        const refMatches = entity.description.match(/\[ref:([a-z0-9-]+)\]/g) || [];
        refMatches.forEach(match => {
          const referencedId = match.replace(/\[ref:|]/g, '');
          if (!allIds.includes(referencedId)) {
            errors.push(`Error en ${entity.id}: Enlace en descripción a ${referencedId} no existe`);
          }
        });
      }
    });
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

## Flujo de Trabajo Recomendado

1. Planifica las relaciones entre entidades antes de implementarlas
2. Establece primero todas las entidades (proyectos, certificados, etc.)
3. Añade relaciones utilizando IDs consistentes
4. Valida los enlaces para detectar errores
5. Implementa la visualización de relaciones en la interfaz