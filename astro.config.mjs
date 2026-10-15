// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Configuración del sitio: estático + adaptador de Vercel.
// https://docs.astro.build/en/guides/deploy/vercel/
export default defineConfig({
	output: 'static',
	adapter: vercel(),
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'pt'],
		routing: {
			// Mientras solo exista la versión en español, todo queda en la raíz.
			prefixDefaultLocale: false,
		},
	},
});
