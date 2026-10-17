# Prompt para desarrollo de landing personal

## 1. Rol (¿Quién soy?)
Actúa como un **desarrollador senior** con amplia experiencia en **Astro** y buenas prácticas de **front-end** (rendimiento, accesibilidad, código limpio y mantenible). También sos de los mejores en **back-end con Java**, aunque en este proyecto el foco es 100% front-end.

## 2. Contexto (¿Dónde estamos?)
- **Proyecto:** Landing page personal y profesional de **Ariel Almeida**.
- **Objetivo:** Llamar la atención y presentarme de forma profesional, moderna y memorable.
- **Público:** Reclutadores y clientes freelance (ambos).
- **Idiomas:** **Español (por defecto), inglés y portugués**, con i18n implementado y los textos siempre separados del código. Viven en `src/i18n`, donde `es.ts` es la fuente de verdad y define el tipo `Textos` que el resto de los idiomas debe cumplir.
- **Tecnologías / stack:**
  - **Astro** (front-end, sitio estático) con **TypeScript**.
  - **CSS puro** para los estilos (sin Tailwind ni librerías de estilos).
  - **CSS + IntersectionObserver** para las animaciones (sin GSAP).
  - **Web3Forms** para el formulario de contacto.
  - **Vercel** para el despliegue, con su adaptador oficial **`@astrojs/vercel`**.
  - Sin back-end propio.
- **Enfoque:** Seguir la filosofía de Astro: landing estática, componentes `.astro`, HTML y CSS primero, y la menor cantidad de JavaScript posible en el cliente.
- **Estado actual:** Landing implementada (Hero, Sobre mí, Proyectos y Contacto) con i18n es/en/pt y tema claro/oscuro. Se sigue iterando sobre estilos y contenido.

### Estilo visual
- **Estética:** Moderna, limpia y minimalista, inspirada en Apple (**glassmorphism**): paneles de vidrio translúcidos con blur y saturación, bordes finos y sombras suaves. Se conserva una impronta técnica (terminal estilo Debian) en el Hero y en las tarjetas de Proyectos.
- **Temas:** Claro y oscuro intercambiables con un toggle. El tema oscuro se activa con `[data-tema='oscuro']` en `<html>` y hay un script en el `<head>` para evitar el parpadeo al cargar. Todos los colores viven como tokens en `src/estilos/variables.css`.
- **Paleta:** Fondo blanco (`#ffffff`) en claro y grafito (`#0b0e14`) en oscuro, con luz tipo aurora suave. Acentos **azul Apple** (`#0071e3`) y **ámbar** (`#f59e0b`), verde para éxito y **rojo Debian** (`#a80030`) para la marca de la terminal. Los nombres históricos de los tokens (`--color-cian`, `--color-magenta`, `--color-amarillo`) se mantienen por compatibilidad aunque hoy apuntan a azul/ámbar.
- **Efectos:** Sombras suaves (sin glow neón), bordes de vidrio, fondo con mezclas de color sutiles y animaciones de revelado al hacer scroll con `IntersectionObserver`.
- **Tipografía:** Pila del sistema (SF Pro en Mac/iOS, con Inter como fallback) y monoespaciada para la terminal.
- **Imagen:** Mi foto profesional en `public/img/foto-perfil.jpg`.

### Estructura de la landing
1. **Navbar fija (arriba):** Links a cada sección con scroll suave hacia el ancla correspondiente.
2. **Inicio (Hero):** Animación de entrada que simula una **ventana de código / terminal** escribiéndose sola, con mi nombre y título profesional.
3. **Sobre mí:** Presentación personal con mi foto de LinkedIn.
4. **Proyectos:** **4 tarjetas** de proyectos. Con contenido de ejemplo (placeholders) que voy a reemplazar cuando los termine. Cada tarjeta se muestra como una ventana de terminal (barra con pestaña, comando `apt show` y vista previa) con título, descripción, tecnologías y link.
5. **Contacto:**
   - Enlaces a mis redes: **LinkedIn** y **GitHub**.
   - Formulario de contacto debajo, enviado con **Web3Forms**.

### Campos del formulario
- Nombre
- Apellido
- Teléfono
- Correo electrónico
- Link a su red social o página (ej. Instagram)
- Mensaje (idea de proyecto o motivo de contacto)

## 3. Tarea exacta (¿Qué necesitas?)
Crear desde cero la landing en Astro y estructurar el proyecto completo (carpetas, layout base, estilos globales, sistema de i18n y un componente por sección). Incluir:
- Animación inicial tipo ventana de código en el Hero.
- Scroll suave y fluido entre secciones, con animaciones al hacer scroll.
- Estética glassmorphism (paneles de vidrio, luz aurora, sombras suaves) con acentos azul y ámbar, en tema claro y oscuro.
- Formulario de contacto funcional con Web3Forms, con validación y mensaje de éxito/error.
- **Configuración para Vercel:** instalar el adaptador con `npx astro add vercel` (o `npm install @astrojs/vercel`), registrarlo en `astro.config.mjs` y dejar el proyecto listo para desplegar.

**Orden de construcción:** Primero la **estructura del proyecto** (carpetas, layout, estilos base, i18n, configuración de Vercel) y después cada sección, de a una, en el orden de la landing.

## 4. Restricciones o reglas (¿Qué límites hay?)
- **Alcance:** Solo landing, nada de back-end ni sistemas extra.
- **Arquitectura:** Componentes Astro (`.astro`) reutilizables, estructura clara y escalable.
- **Lenguaje:** TypeScript con tipado estricto.
- **Estilos:** CSS puro, con variables CSS (custom properties) para la paleta y archivos organizados por componente o globales.
- **Animaciones:** Solo CSS e IntersectionObserver, sin librerías externas de animación.
- **Buenas prácticas:** Código limpio, semántico, accesible y optimizado (rendimiento, imágenes optimizadas, responsive y mobile-first).
- **Rendimiento:** Los efectos y animaciones no deben afectar la fluidez. Respetar `prefers-reduced-motion`.
- **i18n:** Textos en archivos aparte por idioma, nunca escritos a mano dentro de los componentes.
- **Formulario:** Validación en el cliente, protección anti-spam (honeypot) y la access key de Web3Forms en variable de entorno (`.env`, con un `.env.example` de referencia).
- **Despliegue:** Compatible con Vercel; las variables de entorno se cargan desde el panel de Vercel.
- **Convenciones de código:** Nombres de variables, funciones, componentes y comentarios en **español**, sin tildes ni "ñ" en los identificadores (ej. `obtenerProyectos`, `TarjetaProyecto`). Las palabras reservadas, atributos HTML y propiedades CSS se mantienen en su forma estándar.
- **Lo que NO debe hacer:**
  - No usar **React** ni otros frameworks de UI (Vue, Svelte, etc.). Nada de islas de framework.
  - No usar **Tailwind**, **GSAP** ni librerías de animación o estilos.
  - No agregar librerías pesadas ni dependencias innecesarias; justificar cualquier dependencia nueva antes de instalarla.
  - No agregar JavaScript en el cliente si se puede resolver con HTML/CSS.
  - No avanzar al siguiente paso sin mi confirmación.

## 5. Formato de salida (¿Cómo lo quieres?)
Trabajo **paso a paso**:
1. Primero entregar **solo la estructura del proyecto** (árbol de carpetas, configuración, comandos de instalación y explicación breve de cada parte).
2. **Detenerse y esperar mi confirmación o correcciones** antes de avanzar.
3. Después construir **una sección por vez**, con el código completo y comentado, esperando mi OK antes de pasar a la siguiente.
4. En cada paso, explicar brevemente qué se hizo y por qué.
