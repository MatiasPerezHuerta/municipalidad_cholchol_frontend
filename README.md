# Municipalidad de Cholchol Frontend

Proyecto frontend academico para redisenar la experiencia digital de la Municipalidad de Cholchol.

El repositorio conserva la evolucion del mismo proyecto:

- `eva2-final`: version HTML, CSS, JavaScript, Bootstrap y Web Components.
- `main`: migracion a Next.js y React para la Evaluacion 3.

## Version actual

La version actual migra el trabajo anterior a Next.js/React e incorpora componentes reutilizables, consumo de endpoints internos, validacion cliente/servidor y documentacion de buenas practicas.

## Tecnologias

- Next.js 14 con App Router.
- React 18.
- CSS propio responsive.
- API Routes de Next.js.
- Git y GitHub para control de versiones.

## Instalacion

```bash
npm install
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Estructura principal

```text
evau2_cholchol_frontend/
|-- app/
|   |-- api/
|   |   |-- contact/route.js
|   |   `-- site-content/route.js
|   |-- globals.css
|   |-- layout.jsx
|   `-- page.jsx
|-- components/
|   |-- AccessibilitySummary.jsx
|   |-- BackToTop.jsx
|   |-- ContactSection.jsx
|   |-- FaqSection.jsx
|   |-- Footer.jsx
|   |-- Hero.jsx
|   |-- Navbar.jsx
|   |-- NewsPanel.jsx
|   |-- ServicesGrid.jsx
|   `-- TestimonialsCarousel.jsx
|-- docs/
|   |-- buenas-practicas.md
|   `-- retrospectiva.md
|-- lib/
|   `-- site-data.js
|-- public/
|   `-- logo-cholchol.svg
|-- package.json
`-- README.md
```

## Componentes desarrollados

- `Navbar`: navegacion responsive y boton de alto contraste.
- `Hero`: presentacion institucional con aviso dinamico.
- `ServicesGrid`: tarjetas reutilizables de servicio con filtros, seleccionados y boton de contacto.
- `TestimonialsCarousel`: carrusel accesible para testimonios.
- `NewsPanel`: tarjetas informativas renderizadas desde datos.
- `FaqSection`: preguntas frecuentes interactivas.
- `ContactSection`: formulario con validacion en cliente y envio a endpoint interno.
- `BackToTop`: boton dinamico para volver al inicio.

## Consumo de endpoints

La aplicacion expone endpoints internos:

```text
GET /api/site-content
POST /api/contact
```

`/api/site-content` entrega datos centralizados de servicios, noticias, testimonios, preguntas frecuentes e indicadores.

`/api/contact` valida el formulario del lado servidor y simula el registro seguro de una solicitud.

## Ejemplo de componente reutilizable

```jsx
<ServicesGrid initialServices={content.services} />
```

Cada servicio incluye imagen, titulo, categoria, descripcion, boton para agregar a seleccionados y boton "Contactanos" que rellena el campo servicio del formulario.

## Accesibilidad y usabilidad

- Enlace para saltar al contenido principal.
- Boton de alto contraste.
- Formulario con errores asociados a cada campo.
- Carrusel con controles etiquetados.
- FAQ con `aria-expanded`.
- Diseno adaptable a movil, tablet y escritorio.

## Seguridad

- Validacion del lado cliente para retroalimentacion inmediata.
- Validacion del lado servidor en `/api/contact`.
- Campo honeypot para detectar robots.
- No se exponen credenciales ni variables sensibles.

## Optimizacion

- Uso de `next/image` en tarjetas de servicios y noticias.
- CSS global organizado por componentes visuales.
- Renderizado inicial con datos locales para carga rapida.
- Endpoint interno para simular integracion CMS/API.

## Evidencia de continuidad

La version de Evaluacion 2 queda marcada con:

```bash
git checkout eva2-final
```

La version de Evaluacion 3 queda en la rama principal:

```bash
git checkout main
```

## Entrega

Para la entrega final, comprimir el proyecto en formato `.zip`, excluyendo:

- `node_modules`
- `.next`
- archivos `.env`
- logs temporales
