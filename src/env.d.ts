/// <reference types="astro/client" />

// Variables de entorno públicas del sitio (visibles en el cliente).
interface ImportMetaEnv {
	readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
