/**
 * Redes y enlaces externos.
 * Están acá (y no en i18n) porque una URL no cambia con el idioma.
 */
export interface RedSocial {
	id: 'linkedin' | 'github';
	/** URL del perfil. */
	url: string;
}

export const redes: readonly RedSocial[] = [
	{ id: 'linkedin', url: 'https://www.linkedin.com/in/arielalmeida04/' },
	{ id: 'github', url: 'https://github.com/arielalmeida04' },
];
