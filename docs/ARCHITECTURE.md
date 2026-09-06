# Arquitectura

## Objetivo

Portfolio profesional full stack que sirve a la vez como proyecto demostrable y laboratorio progresivo para GitHub Actions GH-200.

## Componentes

```text
Browser
  |
  +--> Astro static frontend
  |       |
  |       +--> CV / experiencia / formación / certificaciones
  |       +--> formulario de contacto
  |
  +---------------------- HTTP/JSON ---------------------> Spring Boot API
                                                           |
                                                           +--> PostgreSQL
```

## Backend

Arquitectura por funcionalidad:

- `health`: endpoint técnico.
- `profile`: información profesional consumible por API.
- `contact`: validación y persistencia de mensajes.
- `config`: CORS y configuración transversal.

## Frontend

Astro genera HTML estático para maximizar rendimiento, SEO y simplicidad operativa. JavaScript se reserva para el formulario de contacto y navegación.

## Datos

Flyway administra el esquema de PostgreSQL. La primera migración crea `contact_message`.

## Seguridad inicial

- Validación server-side.
- Honeypot contra bots básicos.
- CORS configurable.
- No existe endpoint público para listar mensajes.
- No se guardan secretos en el repositorio.

Antes de exponer el formulario a tráfico real deben añadirse rate limiting, protección anti-spam y una política de privacidad.
