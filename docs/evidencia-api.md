# Evidencia de consumo de API

La aplicacion usa API Routes de Next.js para simular el consumo de endpoints internos. Esto permite cumplir el requisito de manejar datos dinamicos desde una API sin depender de servicios externos.

## Endpoint de contenido

```http
GET /api/site-content
```

Uso:

```bash
curl http://localhost:3000/api/site-content
```

Respuesta esperada:

```json
{
  "about": {
    "title": "Una portada municipal clara, moderna y cercana"
  },
  "services": [],
  "news": [],
  "testimonials": [],
  "faqs": [],
  "summaryItems": []
}
```

En la aplicacion, `ServicesGrid` consulta este endpoint desde el cliente para actualizar los servicios renderizados en tarjetas reutilizables.

## Endpoint de contacto

```http
POST /api/contact
```

Uso:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Matias Perez\",\"email\":\"matias@example.com\",\"service\":\"Tramites municipales\",\"message\":\"Necesito informacion sobre este servicio.\",\"website\":\"\"}"
```

Respuesta esperada:

```json
{
  "message": "Solicitud recibida correctamente. Se simula el registro seguro en servidor."
}
```

## Validaciones del endpoint

El servidor valida:

- nombre minimo de 3 caracteres
- correo con formato valido
- servicio seleccionado
- mensaje minimo de 10 caracteres
- campo honeypot `website` vacio

Si algun dato no cumple, responde con estado `422` y un objeto `errors`.

Ejemplo:

```json
{
  "message": "Revise los campos marcados.",
  "errors": {
    "email": "Ingrese un correo electronico valido."
  }
}
```

## Relacion con la interfaz

- Las tarjetas de servicios se alimentan desde `/api/site-content`.
- El formulario envia datos a `/api/contact`.
- La validacion se aplica en cliente para retroalimentacion inmediata y en servidor para seguridad.
- El campo honeypot ayuda a detectar envios automatizados.
