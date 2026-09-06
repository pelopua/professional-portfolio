# Estrategia de GitHub y despliegue

## Fase 1 — Subir el código al repositorio

El repositorio GitHub contendrá el monorepo completo. Para un repositorio nuevo y vacío:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial professional portfolio"
git remote add origin https://github.com/TU_USUARIO/professional-portfolio.git
git push -u origin main
```

## Fase 2 — GitHub Actions / GH-200

La carpeta `.github/workflows` está vacía intencionadamente. Los primeros laboratorios crearán:

1. `backend-ci.yml`: Java 21 + Maven + tests + cache.
2. `frontend-ci.yml`: Node + npm + build Astro.
3. Matrices de Java/OS.
4. Artifacts.
5. Reusable workflows y composite actions.
6. Permissions, secrets, environments y OIDC.
7. Workflow de deployment.

## Fase 3 — Publicar frontend

Astro genera un directorio `frontend/dist` estático, adecuado para GitHub Pages. El workflow de Pages construirá el frontend, subirá `dist` como Pages artifact y lo desplegará.

Para un project site (`usuario.github.io/repositorio`) configuraremos `PUBLIC_BASE_PATH=/repositorio/`. Para un user site (`usuario.github.io`) usaremos `/`.

## Fase 4 — Publicar backend

GitHub Pages no ejecuta procesos Java. La API Spring Boot deberá desplegarse en un servicio capaz de ejecutar el JAR o una imagen OCI. El servicio recibirá como variables de entorno:

- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`
- `CORS_ALLOWED_ORIGINS`
- `PORT` cuando la plataforma lo requiera

## Fase 5 — Conectar frontend y API

En el build de Astro:

```text
PUBLIC_API_BASE_URL=https://api.tu-dominio.example
```

En el backend:

```text
CORS_ALLOWED_ORIGINS=https://tu-usuario.github.io
```

No se almacenarán credenciales de producción en el repositorio; cuando lleguemos al laboratorio correspondiente se gestionarán mediante GitHub Secrets / Environments u OIDC según el proveedor.
