# Retrospectiva del proyecto

## Contexto

La Evaluacion 3 continua el proyecto de Evaluacion 2. El objetivo fue migrar la solucion original HTML/CSS/JS a un framework moderno, manteniendo el caso de la Municipalidad de Cholchol.

## Que funciono bien

- El proyecto anterior ya tenia contenido, estilos y logica interactiva reutilizable.
- La migracion a React permitio convertir secciones en componentes mas claros.
- Next.js permitio agregar endpoints internos sin crear un backend separado.
- La estructura actual facilita mantener servicios, noticias, FAQ y testimonios desde un archivo central.

## Dificultades

- Separar que interacciones debian ser componentes de cliente y que partes podian renderizarse desde servidor.
- Mantener la continuidad con EVA 2 sin mezclar el historial de forma confusa.
- Simular consumo de API y CMS sin depender de servicios externos.

## Mejoras aplicadas

- Se agrego `GET /api/site-content` para contenido dinamico.
- Se agrego `POST /api/contact` para validacion del lado servidor.
- Se migro la interfaz a componentes React reutilizables.
- Se documento la version EVA 2 con un tag y la version EVA 3 en `main`.

## Proxima iteracion

- Conectar servicios y FAQ a un CMS real.
- Agregar pruebas automatizadas de componentes.
- Mejorar auditoria de accesibilidad con Lighthouse.
- Publicar la app en Vercel o Netlify para facilitar revision externa.
