# Landing Ariel Almeida

Landing personal y profesional construida con **Astro + TypeScript**, estilos en **CSS puro**, animaciones con **CSS + IntersectionObserver**, formulario con **Web3Forms** y despliegue en **Vercel**.

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo
npm run build        # build de producción (salida en dist/ y .vercel/)
npm run preview      # previsualizar el build
npm run check        # chequeo de tipos (TypeScript estricto)
```

## Variables de entorno

Copiá `.env.example` a `.env` y completá la access key de Web3Forms:

```bash
WEB3FORMS_ACCESS_KEY=
```

En Vercel se configura desde **Settings > Environment Variables**.

## Estructura

```
src/
├── componentes/     # componentes Astro por sección (BarraNavegacion, Hero, ...)
├── estilos/         # variables.css (paleta/tokens) + globales.css (reset y utilidades)
├── i18n/            # textos por idioma: es.ts, en.ts, pt.ts + index.ts (obtenerTextos)
├── layouts/         # BaseLayout.astro (html base, meta, navbar, slot)
├── pages/           # rutas del sitio (index.astro)
└── scripts/         # JavaScript mínimo del cliente (IntersectionObserver, formulario)
```

## Convenciones

- Identificadores y comentarios en **español**, sin tildes ni `ñ` (`obtenerProyectos`, `TarjetaProyecto`).
- Textos **nunca** escritos dentro de los componentes: siempre desde `src/i18n`.
- Sin frameworks de UI (React/Vue/Svelte), sin Tailwind ni GSAP.
