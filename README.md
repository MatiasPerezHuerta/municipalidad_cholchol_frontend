# Evaluación U2 - Desarrollo Frontend

## Proyecto
Rediseño de la página principal de la Municipalidad de Cholchol.

## Framework/Bibliotecas utilizadas
- Bootstrap 5.3 para grilla responsive, botones, utilidades y componentes visuales.
- JavaScript ES Modules.
- Web Components nativos para aplicar estructura por componentes y ciclo de vida mediante `connectedCallback()`.


## Estructura de carpetas
```text
evau2_cholchol_frontend/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── data.js
│   └── components/
│       ├── navbar.js
│       ├── hero.js
│       ├── services.js
│       ├── news.js
│       ├── accessibility-summary.js
│       ├── contact-form.js
│       └── footer.js
└── assets/
    └── logo-cholchol.svg
```

## Eventos implementados para CE1
1. `click` en botón de alto contraste: cambia el tema visual y actualiza `aria-pressed`.
2. `click` en botones del hero: actualiza el aviso destacado dinámicamente.
3. `click` en filtros de servicios: renderiza servicios por categoría.
4. `mouseenter` y `mouseleave` en tarjetas de servicio: aplica efecto visual interactivo.
5. `focus` y `blur` en tarjetas de servicio: mejora navegación por teclado.
6. `click` en “Agregar a favoritos”: agrega elementos al DOM.
7. `click` en eliminar favorito: elimina elementos del DOM.
8. `input` y `blur` en formulario: valida campos en tiempo real.
9. `submit` en formulario: valida antes de simular envío.
10. `scroll` en ventana: muestra u oculta botón “volver arriba”.
11. `click` en botón “volver arriba”: desplaza la página al inicio.

## Validaciones implementadas para CE2
- Nombre obligatorio con mínimo 3 caracteres.
- Correo obligatorio con formato válido.
- Mensaje obligatorio con mínimo 10 caracteres.
- Mensajes de error y éxito en tiempo real.

## Modificaciones DOM para CE3
- Renderizado de tarjetas de servicio por filtro seleccionado.
- Actualización del aviso destacado del hero.
- Agregar servicios a la lista de favoritos.
- Eliminar servicios de la lista de favoritos.
- Actualizar contador de servicios seleccionados.
- Mostrar u ocultar feedback visual del formulario.
- Mostrar u ocultar botón “volver arriba”.

## Accesibilidad
- Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Atributos `aria-label`, `aria-live`, `aria-invalid`, `aria-describedby`.
- Textos alternativos en imágenes.
- Link “Saltar al contenido principal”.
- Navegación por teclado y estilos `:focus-visible`.
- Botón de alto contraste.

## Convención de código
- Variables y funciones en inglés descriptivo.
- Componentes en archivos independientes.
- Separación entre datos, lógica, estilos y estructura HTML.
- Uso de patrón de componentes mediante Web Components.
