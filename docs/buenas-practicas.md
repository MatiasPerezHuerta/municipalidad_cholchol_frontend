# Buenas practicas aplicadas

## Componentes

- Mantener componentes con responsabilidad unica.
- Nombrar componentes en PascalCase.
- Separar componentes interactivos con `"use client"` solo cuando requieren estado, eventos o efectos.
- Reutilizar datos desde `lib/site-data.js` en lugar de duplicar contenido.

## Estructura

- Usar `app/` para rutas y layout principal de Next.js.
- Usar `components/` para piezas reutilizables de interfaz.
- Usar `app/api/` para endpoints internos.
- Usar `public/` para recursos estaticos.

## Accesibilidad

- Mantener estructura semantica con `header`, `nav`, `main`, `section`, `article` y `footer`.
- Asociar errores de formulario con `aria-describedby`.
- Usar `aria-live` para mensajes dinamicos.
- Mantener foco visible con `:focus-visible`.
- Respetar `prefers-reduced-motion`.

## Usabilidad

- Priorizar navegacion simple y visible.
- Mantener tarjetas con titulos claros, textos breves y acciones directas.
- Permitir que el boton "Contactanos" complete automaticamente el servicio seleccionado.
- Validar el formulario antes de enviar para reducir errores.

## Seguridad

- Validar datos en cliente y servidor.
- Usar un campo honeypot para reducir envios automatizados.
- No guardar credenciales ni datos sensibles en el repositorio.
- Mantener endpoints con respuestas controladas.

## Rendimiento

- Usar `next/image` para imagenes remotas.
- Evitar dependencias innecesarias.
- Centralizar datos para facilitar cache o reemplazo futuro por CMS/API real.
- Ejecutar `npm run build` antes de entregar.
