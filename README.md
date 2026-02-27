# TC Logistix — Sitio Web Corporativo

Sitio web oficial de **TRACTOCAR LOGISTICS S.A.S.**, empresa colombiana
de transporte de carga, almacenamiento y distribución con más de 30 años
de trayectoria y sede principal en Cartagena, Colombia.

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Estilos | Tailwind CSS v3 |
| Animaciones | Framer Motion |
| Backend/API | Express (Node.js) + tsx |
| Email | Resend API |
| Router | React Router DOM v6 |
| Dev runner | concurrently |

## Requisitos

- Node.js >= 20.17
- npm >= 9

## Instalación
```bash
git clone 
cd tc-logistix
npm install
cp .env.example .env   # completar variables
npm run dev
```

## Variables de Entorno

Crear archivo `.env` en la raíz:
```env
# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Servidor Express
PORT=3001

# URL del frontend (para CORS en producción)
FRONTEND_URL=http://localhost:5173
```

## Scripts
```bash
npm run dev          # Inicia Express (3001) + Vite (5173) en paralelo
npm run dev:server   # Solo Express con hot-reload (tsx watch)
npm run dev:client   # Solo Vite
npm run build        # Build de producción
npm run start        # Producción (requiere npm run build primero)
```

## Estructura del Proyecto
```
/
├── server.ts              # API Express (puerto 3001)
├── vite.config.ts         # Config Vite (puerto 5173)
├── src/
│   ├── app/               # Páginas y layout principal
│   ├── components/
│   │   ├── ui/            # Átomos: Button, Badge, ThemeToggle...
│   │   ├── sections/      # Secciones de página: Hero, Servicios...
│   │   └── layout/        # Header, Footer
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Constantes, animaciones, utilidades
│   ├── providers/         # ThemeProvider
│   └── types/             # Interfaces TypeScript
├── .env                   # Variables de entorno (no subir a git)
├── .env.example           # Template de variables
└── README.md
```

## Rutas del Sitio

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/empresa` | Empresa (Historia, Misión, Visión, Políticas) |
| `/servicios` | Servicios logísticos |
| `/vacantes` | Vacantes disponibles |
| `/contacto` | Contacto y directorio |
| `/cotizar` | Formulario de cotización |

## API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/contact` | Formulario de contacto general |
| POST | `/api/postulacion` | Postulación a vacante con CV adjunto |
| POST | `/api/cotizar` | Solicitud de cotización |

## Diseño

El sistema de diseño usa CSS custom properties para soporte de
**Dark Mode / Light Mode**. Los tokens están definidos en
`src/styles/globals.css` y mapeados en `tailwind.config.ts`
bajo el namespace `brand.*`.

## Licencia

Uso interno — TRACTOCAR LOGISTICS S.A.S. © 2026
