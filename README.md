# Landing personal — Ariel Almeida

Landing profesional de **Ariel Almeida**, desarrollador **Backend Java**. El front-end está hecho con **Astro + TypeScript** y estilos en **CSS puro**.

**Sitio en vivo:** https://portfile-arielalmeida.vercel.app/

## Perfil

Desarrollador **Backend Java**, con foco en el ecosistema **Java + Spring Boot**, APIs REST y bases de datos. En este proyecto también trabajo el front-end con Astro, TypeScript y CSS.

## Tecnologías

- **Astro** — framework del sitio (HTML estático y componentes `.astro`).
- **TypeScript** — tipado estricto.
- **CSS puro** — glassmorphism, tema claro/oscuro con variables CSS.
- **i18n** — español, inglés y portugués.
- **CSS + IntersectionObserver** — animaciones de revelado al hacer scroll.
- **Web3Forms** — formulario de contacto.
- **Vercel** — despliegue.

## Cómo iniciarlo en local

Requisitos: **Node.js 22.22 o superior** y **npm**.

```bash
git clone https://github.com/arielalmeida04/portfile-arielalmeida.git
cd portfile-arielalmeida
npm install
npm run dev
```

Abrí `http://localhost:4321` en el navegador.

### Otros comandos

```bash
npm run build     # build de producción (dist/ y .vercel/)
npm run preview   # previsualizar el build
npm run check     # chequeo de tipos
```

## Formulario de contacto

Funciona sin configuración: la access key de Web3Forms es pública y va embebida en el componente. Si querés sobreescribirla en local, creá un `.env` con `PUBLIC_WEB3FORMS_ACCESS_KEY`.

## Estructura

```
src/
├── componentes/   # secciones y componentes Astro
├── estilos/       # variables y estilos por componente
├── i18n/          # textos en es, en y pt
├── layouts/       # layout base
├── pages/         # ruta principal
└── scripts/       # JS mínimo del cliente
public/
└── img/           # imágenes y recursos estáticos
```
