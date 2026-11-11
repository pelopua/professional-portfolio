export const portfolio = {
  name: 'Fermín Bermejo González',
  initials: 'FB',
  linkedinUrl: 'https://www.linkedin.com/in/ferm%C3%ADn-bermejo-gonz%C3%A1lez-a4891a66',
  headline: 'Analista Funcional y Técnico Senior · Java · PSPO I',
  location: 'España',
  intro:
    'Más de 20 años de trayectoria profesional, con experiencia reciente en aplicaciones empresariales para la Administración Pública. Combino análisis funcional y técnico, desarrollo backend y orientación a producto.',
  journey: [
    { phase: 'Base técnica', text: 'Comencé en informática práctica: sistemas, redes, reparación de equipos, soporte y mantenimiento web.' },
    { phase: 'Personas y operaciones', text: 'Durante años evolucioné desde soporte y back office hasta Team Manager, desarrollando liderazgo, comunicación, priorización y gestión de incidencias.' },
    { phase: 'Ingeniería de software', text: 'Reorienté la trayectoria hacia el desarrollo empresarial Java, participando en proyectos críticos de la DGT y posteriormente de la Generalitat de Catalunya.' },
    { phase: 'Producto', text: 'La experiencia técnica y el análisis funcional, reforzados por PSPO I, impulsan mi evolución hacia responsabilidades de Product Owner y gestión de producto.' }
  ],
  value: [
    'Análisis funcional y técnico de principio a fin',
    'Visión de producto reforzada por PSPO I',
    'Experiencia en sistemas críticos de la Administración Pública',
    'Capacidad para conectar negocio, desarrollo y calidad'
  ],
  featuredProject: {
    name: 'Portfolio profesional full stack',
    summary: 'Aplicación personal para presentar mi perfil profesional y ofrecer un canal de contacto, construida como proyecto demostrable y laboratorio de aprendizaje de GitHub Actions.',
    role: 'Análisis funcional y técnico, diseño de la solución e implementación full stack.',
    challenge: 'Publicar contenido profesional en una web rápida y sencilla de mantener, con un formulario que persiste los mensajes en un backend propio.',
    decisions: [
      { title: 'Frontend estático', detail: 'Astro genera HTML estático para las secciones de perfil, experiencia, formación y certificaciones.' },
      { title: 'API separada', detail: 'Spring Boot expone endpoints REST para salud, perfil y recepción de mensajes de contacto.' },
      { title: 'Persistencia controlada', detail: 'Spring Data JPA y PostgreSQL almacenan los mensajes; Flyway versiona el esquema y Bean Validation valida las solicitudes.' },
      { title: 'Entorno reproducible', detail: 'Docker Compose levanta PostgreSQL en local y la configuración permite ajustar conexión, puerto y orígenes CORS por entorno.' }
    ],
    evidence: ['Arquitectura frontend/API', 'Contrato REST y validaciones', 'Persistencia relacional y migraciones', 'Documentación de arquitectura y despliegue'],
    stack: ['Astro', 'TypeScript', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Docker Compose'],
    status: 'La aplicación funciona en local y el frontend compila como sitio estático. El despliegue público y los workflows de GitHub Actions están pendientes.'
  },
  technologies: [
    { category: 'Backend', items: ['Java 7/8', 'Java EE', 'Spring', 'Spring Boot'] },
    { category: 'Persistencia', items: ['JPA', 'Hibernate', 'JDBC'] },
    { category: 'Datos', items: ['Oracle', 'PL/SQL', 'SQL', 'MySQL'] },
    { category: 'Integración', items: ['APIs REST', 'Servicios corporativos'] },
    { category: 'Calidad y entrega', items: ['SonarQube', 'Git', 'CI/CD', 'Maven', 'Gradle', 'SVN'] },
    { category: 'Frontend', items: ['JavaScript', 'JSP', 'JSF', 'HTML5', 'CSS3'] },
    { category: 'Plataformas', items: ['JBoss', 'WebSphere', 'Tomcat'] }
  ],
  experience: [
    {
      company: 'T-Systems Iberia',
      role: 'Analista Programador',
      period: '2025 — Actualidad',
      context: 'Proyecto Esfer@ · Generalitat de Catalunya · Sector Educación',
      highlights: [
        'Análisis funcional y técnico de evolutivos e incidencias sobre plataformas corporativas de gestión académica.',
        'Diseño e implementación de soluciones backend con Java, Spring/Spring Boot, JPA y Oracle PL/SQL.',
        'Desarrollo y mantenimiento de APIs REST e integraciones con sistemas corporativos.',
        'Estimaciones técnicas, documentación, diagnóstico de incidencias y revisión de código con SonarQube.'
      ]
    },
    {
      company: 'Inetum',
      role: 'Analista Programador',
      period: '2023 — 2025',
      context: 'Proyectos CRCT, GCME y CADR · Dirección General de Tráfico',
      highlights: [
        'Análisis, desarrollo y pruebas de evolutivos y correctivos.',
        'Desarrollo Java EE con JSF, JSP, JavaScript, HTML y CSS.',
        'Oracle, WebSphere, pruebas de integración y mantenimiento evolutivo.'
      ]
    },
    {
      company: 'Sitel',
      role: 'Soporte Técnico · Back Office · Team Manager',
      period: '2006 — 2023',
      context: 'Servicios para ya.com, Orange, Carrefour e Iberia',
      highlights: [
        'Evolución desde soporte técnico y back office hasta coordinación operativa y Team Manager.',
        'Gestión de equipos, calidad, incidencias, priorización y resolución de conflictos.'
      ]
    },
    {
      company: 'Proydea Technology S.L.',
      role: 'Técnico informático / Comercial',
      period: 'Etapa inicial',
      context: 'Sector privado',
      highlights: [
        'Montaje de redes, configuración y reparación de equipos, software y mantenimiento web.',
        'Gestión comercial y soporte técnico a clientes.'
      ]
    }
  ],
  education: [
    { title: 'CFGS Desarrollo de Aplicaciones Web', center: 'CES Ilerna', period: '2021 — 2023' },
    { title: 'Programador de aplicaciones Internet / Intranet / Extranet', center: 'C.S.I. Centro de Estudios', period: '2005 — 2006' },
    { title: 'GM Explotación de Sistemas Informáticos', center: 'IES La Marisma', period: '2004 — 2006' }
  ],
  complementaryTraining: [
    'Java 8 desde cero · OpenWebinars · 2023',
    'Java 8 para programadores Java · 2023',
    'Desarrollo Web con Java EE · 2023',
    'SQL desde cero · 2023',
    'JavaScript · 2023',
    'Git · Coursera · 2025',
    'PL/SQL · Udemy · 2025'
  ],
  certifications: [
    {
      name: 'Professional Scrum Product Owner™ I',
      code: 'PSPO I',
      issuer: 'Scrum.org',
      date: '24 julio 2026',
      status: 'Obtenida'
    },
    {
      name: 'GitLab Certified CI/CD Associate',
      code: 'CI/CD Associate',
      issuer: 'GitLab',
      date: '',
      status: 'Obtenida'
    },
    {
      name: 'GitHub Actions',
      code: 'GH-200',
      issuer: 'GitHub',
      date: 'En preparación',
      status: 'En preparación'
    }
  ],
  skills: ['Pensamiento analítico', 'Estimación técnica', 'Documentación', 'Resolución de incidencias', 'Trabajo en equipo', 'Mejora continua'],
  objective:
    'Mi siguiente paso profesional es evolucionar desde el análisis funcional y técnico hacia responsabilidades de Product Owner. Aporto experiencia en proyectos empresariales, una base sólida en desarrollo Java y la certificación PSPO I para conectar las necesidades del negocio con soluciones técnicas que generen valor.'
};
