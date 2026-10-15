/**
 * Formulario de contacto (Web3Forms):
 * validación en cliente, protección anti-spam (honeypot) y mensajes
 * de éxito/error sin recargar la página.
 */

const ENDPOINT_WEB3FORMS = 'https://api.web3forms.com/submit';
const LONGITUD_MINIMA_MENSAJE = 10;

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EXPRESION_TELEFONO = /^[+()\-.\s\d]{6,20}$/;
const EXPRESION_ENLACE = /^https?:\/\/\S+$/i;

type ControlCampo = HTMLInputElement | HTMLTextAreaElement;

interface TextosEstado {
	enviando: string;
	exito: string;
	error: string;
}

export function iniciarFormularioContacto(): void {
	const formulario = document.querySelector<HTMLFormElement>('[data-formulario-contacto]');
	if (!formulario) return;

	const estado = formulario.querySelector<HTMLElement>('[data-estado]');
	const boton = formulario.querySelector<HTMLButtonElement>('button[type="submit"]');
	const textosEstado: TextosEstado = {
		enviando: formulario.dataset.enviando ?? '',
		exito: formulario.dataset.exito ?? '',
		error: formulario.dataset.errorEnvio ?? '',
	};

	const controles = Array.from(formulario.querySelectorAll<ControlCampo>('[data-campo]'));

	function mostrarEstado(mensaje: string, tipo: 'exito' | 'error' | ''): void {
		if (!estado) return;
		estado.textContent = mensaje;
		estado.classList.toggle('contacto__estado--exito', tipo === 'exito');
		estado.classList.toggle('contacto__estado--error', tipo === 'error');
	}

	function mostrarErrorCampo(control: ControlCampo, mensaje: string): void {
		const contenedor = control.closest<HTMLElement>('.campo');
		const etiquetaError = contenedor?.querySelector<HTMLElement>('[data-error]');
		if (!etiquetaError) return;

		etiquetaError.textContent = mensaje;
		etiquetaError.hidden = mensaje === '';

		if (mensaje) {
			control.setAttribute('aria-invalid', 'true');
			control.setAttribute('aria-describedby', etiquetaError.id);
		} else {
			control.removeAttribute('aria-invalid');
			control.removeAttribute('aria-describedby');
		}
	}

	function validarCampo(control: ControlCampo): boolean {
		const mensajeError = control.dataset.mensajeError ?? '';
		const valor = control.value.trim();
		let valido = true;

		if (control.hasAttribute('required') && valor === '') {
			valido = false;
		} else if (valor !== '') {
			if (control.type === 'email') valido = EXPRESION_CORREO.test(valor);
			if (control.type === 'tel') valido = EXPRESION_TELEFONO.test(valor);
			if (control.type === 'url') valido = EXPRESION_ENLACE.test(valor);
			if (control instanceof HTMLTextAreaElement) valido = valor.length >= LONGITUD_MINIMA_MENSAJE;
		}

		mostrarErrorCampo(control, valido ? '' : mensajeError);
		return valido;
	}

	// Al salir del campo se valida; al escribir de nuevo se limpia el error.
	controles.forEach((control) => {
		control.addEventListener('blur', () => validarCampo(control));
		control.addEventListener('input', () => {
			if (control.getAttribute('aria-invalid') === 'true') mostrarErrorCampo(control, '');
		});
	});

	formulario.addEventListener('submit', async (evento) => {
		evento.preventDefault();
		mostrarEstado('', '');

		// Validación de todos los campos (sin cortar el bucle).
		let primerCampoInvalido: ControlCampo | null = null;
		controles.forEach((control) => {
			const valido = validarCampo(control);
			if (!valido && !primerCampoInvalido) primerCampoInvalido = control;
		});

		if (primerCampoInvalido) {
			(primerCampoInvalido as ControlCampo).focus();
			return;
		}

		const datos = new FormData(formulario);

		// Anti-spam: si el honeypot está lleno, no se envía nada.
		if (datos.get('botcheck')) return;

		if (!datos.get('access_key')) {
			console.warn('Falta la variable PUBLIC_WEB3FORMS_ACCESS_KEY en el entorno.');
			mostrarEstado(textosEstado.error, 'error');
			return;
		}

		if (boton) {
			boton.disabled = true;
			boton.textContent = textosEstado.enviando;
		}
		formulario.dataset.ocupado = 'true';

		try {
			const respuesta = await fetch(ENDPOINT_WEB3FORMS, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(Object.fromEntries(datos)),
			});

			const resultado: { success?: boolean; message?: string } = await respuesta.json();

			if (respuesta.ok && resultado.success) {
				formulario.reset();
				controles.forEach((control) => mostrarErrorCampo(control, ''));
				mostrarEstado(textosEstado.exito, 'exito');
			} else {
				console.warn('Web3Forms respondió:', resultado.message ?? respuesta.status);
				mostrarEstado(textosEstado.error, 'error');
			}
		} catch (error) {
			console.warn('No se pudo enviar el formulario:', error);
			mostrarEstado(textosEstado.error, 'error');
		} finally {
			if (boton) {
				boton.disabled = false;
				boton.textContent = boton.dataset.textoOriginal ?? boton.textContent ?? '';
			}
			formulario.dataset.ocupado = 'false';
		}
	});
}
