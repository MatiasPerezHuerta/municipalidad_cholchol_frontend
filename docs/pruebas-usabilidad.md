# Pruebas de usabilidad y accesibilidad

## Objetivo

Validar que la landing page sea clara, usable y accesible en las funciones principales solicitadas para la Evaluacion 3.

## Pruebas realizadas

| Area | Prueba | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Navegacion | Usar enlaces del menu principal | La pagina se desplaza a la seccion correspondiente | Aprobado |
| Responsive | Revisar vista desktop y movil | El contenido se adapta sin desbordes | Aprobado |
| Alto contraste | Activar boton de contraste | El sitio cambia a una version de mayor contraste | Aprobado |
| Servicios | Filtrar tarjetas por categoria | Se muestran solo los servicios de la categoria seleccionada | Aprobado |
| Contacto | Usar boton "Contactanos" desde una tarjeta | El formulario recibe el servicio seleccionado | Aprobado |
| Formulario | Enviar campos vacios | Se muestran errores de validacion | Aprobado |
| Formulario | Enviar datos validos | El endpoint responde con mensaje exitoso | Aprobado |
| FAQ | Abrir y cerrar preguntas | La respuesta aparece y se oculta correctamente | Aprobado |
| Carrusel | Cambiar testimonios | El testimonio visible cambia con controles | Aprobado |

## Accesibilidad aplicada

- Enlace para saltar al contenido principal.
- Uso de landmarks semanticos.
- Controles con etiquetas accesibles.
- Mensajes dinamicos con `aria-live`.
- FAQ con `aria-expanded`.
- Formulario con `aria-invalid` y `aria-describedby`.
- Estados de foco visibles.
- Soporte para usuarios con reduccion de movimiento.

## Observaciones

La prueba fue realizada en entorno local con la aplicacion ejecutandose en:

```text
http://localhost:3000
```

Para una siguiente iteracion, se recomienda complementar con Lighthouse y pruebas con usuarios externos.
