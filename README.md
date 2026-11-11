# Professional Portfolio — Fermín Bermejo González

Portfolio profesional full stack preparado como proyecto de laboratorio para GitHub Actions GH-200.

## Stack

- Backend: Java 21, Spring Boot 4.1.1, Spring MVC, Bean Validation, Spring Data JPA, Flyway, PostgreSQL.
- Frontend: Astro 7.2, TypeScript, HTML y CSS.
- Desarrollo local: Docker Compose para PostgreSQL.
- CI: GitHub Actions valida el backend con Maven y el frontend con Astro en cada push o pull request que afecte a sus archivos. El despliegue automático sigue pendiente y será parte de los laboratorios GH-200.

## Estructura

```text
professional-portfolio/
├── backend/
├── frontend/
├── docs/
├── .github/workflows/
└── docker-compose.yml
```

## 1. Requisitos locales

- Java 21
- Maven 3.9+
- Node.js 22+
- npm
- Docker Desktop o Docker Engine con Compose

## 2. Arrancar PostgreSQL

Desde la raíz:

```bash
docker compose up -d postgres
```

Base de datos local:

- Host: `localhost`
- Puerto: `5432`
- DB: `portfolio`
- Usuario: `portfolio`
- Password: `portfolio`

## 3. Arrancar backend

```bash
cd backend
mvn spring-boot:run
```

Comprobación:

```bash
curl http://localhost:8080/api/v1/health
```

## 4. Arrancar frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Abrir `http://localhost:4321`.

El formulario de contacto usa por defecto `http://localhost:8080`. Para cambiarlo:

```bash
PUBLIC_API_BASE_URL=https://api.example.com npm run build
```

## 5. Tests y build

Backend:

```bash
cd backend
mvn clean verify
```

Frontend:

```bash
cd frontend
npm install
npm run build
```

## 6. Subirlo a GitHub

Crea un repositorio vacío en GitHub, por ejemplo `professional-portfolio`, y desde esta carpeta ejecuta:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial professional portfolio"
git remote add origin https://github.com/TU_USUARIO/professional-portfolio.git
git push -u origin main
```

No marques README, `.gitignore` ni licencia al crear el repositorio remoto, porque ya existen localmente.

## 7. Despliegue real

GitHub almacena y versiona el código, pero un repositorio no ejecuta permanentemente un backend Spring Boot. La estrategia prevista es:

1. Frontend Astro estático: GitHub Pages mediante GitHub Actions.
2. Backend Spring Boot: plataforma que ejecute Java o contenedores.
3. PostgreSQL: base de datos gestionada o contenedor persistente.
4. `PUBLIC_API_BASE_URL`: URL pública del backend.
5. CORS del backend: permitir únicamente el dominio del frontend.

La automatización de esos despliegues será parte de los laboratorios GH-200.

## 8. Contenido profesional

El contenido inicial procede del CV profesional actualizado en julio de 2026. Los enlaces sociales se han dejado sin inventar; se pueden añadir cuando se disponga de las URLs reales de GitHub y LinkedIn.
