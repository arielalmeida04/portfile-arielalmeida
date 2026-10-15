import { es } from './es';

/**
 * Formato obligatorio de todos los diccionarios de traducción.
 * Si se agrega una clave en `es`, el resto de idiomas debe sumarla.
 */
export type Textos = typeof es;

export type Idioma = 'es' | 'en' | 'pt';
