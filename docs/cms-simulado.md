# CMS simulado y contenido administrable

## Objetivo

La pauta solicita integrar un sistema de gestion de contenido con la landing page. En esta version academica se implementa un CMS simulado mediante datos centralizados y un endpoint interno de Next.js.

## Implementacion

El contenido editable esta centralizado en:

```text
lib/site-data.js
```

Ese archivo contiene:

- informacion institucional
- servicios
- noticias
- testimonios
- preguntas frecuentes
- indicadores

El endpoint que expone esos datos es:

```text
GET /api/site-content
```

## Ventajas de esta aproximacion

- Permite separar contenido y componentes visuales.
- Facilita reemplazar el origen de datos por un CMS real en el futuro.
- Permite consumir contenido mediante API desde componentes React.
- Evita depender de credenciales o servicios externos para la entrega academica.

## Como se administraria el contenido

En esta version, el equipo de contenido puede modificar `lib/site-data.js` manteniendo la misma estructura de datos.

Ejemplo de servicio:

```js
{
  id: 'tramites',
  title: 'Tramites municipales',
  category: 'Tramites',
  image: 'https://...',
  description: 'Orientacion para certificados, solicitudes y permisos.'
}
```

## Evolucion a CMS real

La estructura actual permite reemplazar `lib/site-data.js` por una fuente externa como:

- Strapi
- Sanity
- Contentful
- Google Sheets como fuente administrable
- una API propia

Para esa evolucion, el componente `ServicesGrid` podria seguir consumiendo `/api/site-content`, mientras el endpoint cambia internamente su fuente de datos.

## Relacion con Postman

Postman puede usarse para revisar el endpoint:

```text
GET http://localhost:3000/api/site-content
```

Tambien puede usarse para probar el formulario:

```text
POST http://localhost:3000/api/contact
```
