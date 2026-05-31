# Control de versiones

## Repositorio

Repositorio publico:

```text
https://github.com/MatiasPerezHuerta/municipalidad_cholchol_frontend
```

## Estrategia usada

El proyecto mantiene continuidad entre evaluaciones usando Git:

- `eva2-final`: tag que conserva la version final de Evaluacion 2.
- `main`: rama principal con la version migrada a Next.js/React para Evaluacion 3.

## Historial relevante

Commits principales:

- `Entrega evaluacion unidad 2 frontend`
- `Migra proyecto a Next.js para evaluacion 3`
- `Limpia version legacy de evaluacion 2`
- `Agrega evidencia de endpoints internos`
- `Agrega datos de entrega al README`

## Flujo de trabajo recomendado para equipo

Para un equipo de hasta 3 integrantes, el flujo esperado seria:

1. Crear una rama por funcionalidad.
2. Implementar cambios pequenos y verificables.
3. Ejecutar `npm run build` antes de abrir un Pull Request.
4. Revisar el codigo de otro integrante.
5. Fusionar a `main` solo cuando la funcionalidad este lista.

Ejemplos de ramas:

```text
feature/tarjetas-servicio
feature/formulario-contacto
feature/api-contenido
feature/accesibilidad
```

## Comandos utiles

```bash
git checkout -b feature/api-contenido
git add .
git commit -m "Agrega endpoint interno de contenido"
git push origin feature/api-contenido
```

## Evidencia de continuidad

La version anterior se puede revisar con:

```bash
git checkout eva2-final
```

La version actual se puede revisar con:

```bash
git checkout main
```
