/**
 * Redes y enlaces externos.
 * Están acá (y no en i18n) porque una URL no cambia con el idioma.
 */
export interface RedSocial {
	id: 'linkedin' | 'github';
	/** URL del perfil. Reemplazar por la URL real. */
	url: string;
}

export const redes: readonly RedSocial[] = [
	{ id: 'linkedin', url: '#' },
	{ id: 'github', url: '#' },
];
