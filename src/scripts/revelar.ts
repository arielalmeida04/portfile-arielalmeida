/**
 * Animación de aparición al hacer scroll.
 * Observa los elementos con la clase `.revelar` y les agrega `.es-visible`
 * cuando entran en el viewport. Sin librerías: solo IntersectionObserver.
 */
/** true si el usuario pidió reducir el movimiento (o si no hay soporte). */
function prefiereMenosMovimiento(): boolean {
	if (typeof window.matchMedia !== 'function') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function iniciarRevelado(): void {
	const elementos = document.querySelectorAll<HTMLElement>('.revelar');
	if (elementos.length === 0) return;

	// Sin IntersectionObserver o con movimiento reducido: todo visible de una.
	if (prefiereMenosMovimiento() || typeof IntersectionObserver === 'undefined') {
		elementos.forEach((elemento) => elemento.classList.add('es-visible'));
		return;
	}

	const observador = new IntersectionObserver(
		(entradas) => {
			entradas.forEach((entrada) => {
				if (!entrada.isIntersecting) return;
				entrada.target.classList.add('es-visible');
				observador.unobserve(entrada.target);
			});
		},
		{ rootMargin: '0px 0px -15% 0px', threshold: 0.15 }
	);

	elementos.forEach((elemento) => observador.observe(elemento));
}
