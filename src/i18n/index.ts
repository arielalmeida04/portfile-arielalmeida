import { es } from './es';
import { en } from './en';
import { pt } from './pt';
import type { Idioma, Textos } from './tipos';

/** Idiomas soportados por el sitio. */
export const idiomas: readonly Idioma[] = ['es', 'en', 'pt'];

/** Idioma por defecto y actual del contenido. */
export const idiomaPorDefecto: Idioma = 'es';

const diccionarios: Record<Idioma, Textos> = { es, en, pt };

/**
 * Devuelve el diccionario completo del idioma solicitado.
 * Si el idioma no existe, cae en el idioma por defecto.
 */
export function obtenerTextos(idioma: Idioma = idiomaPorDefecto): Textos {
	return diccionarios[idioma] ?? diccionarios[idiomaPorDefecto];
}

/** Ruta correspondiente al idioma para el cambio entre /, /en/, /pt/. */
export function rutaIdioma(idioma: Idioma): string {
	if (idioma === 'en') return '/en/';
	if (idioma === 'pt') return '/pt/';
	return '/';
}

export type { Idioma, Textos };
