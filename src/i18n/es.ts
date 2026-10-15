/**
 * Textos del sitio en español (idioma por defecto).
 * Es la fuente de verdad de la estructura de traducciones:
 * los demás idiomas deben cumplir con este mismo formato (`satisfies Textos`).
 */
export const es = {
	meta: {
		titulo: 'Ariel Almeida | Desarrollador Full Stack',
		descripcion:
			'Desarrollador front-end especializado en Astro y back-end con Java. Landing personal, proyectos y contacto.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'Ariel Almeida',
		inicio: 'Inicio',
		sobreMi: 'Sobre mí',
		proyectos: 'Proyectos',
		contacto: 'Contacto',
		alternativa: 'Saltar al contenido principal',
		principal: 'Navegación principal',
		menu: 'Abrir menú',
		cambiarTema: 'Cambiar entre tema claro y oscuro',
		cerrarMenu: 'Cerrar menú',
	},

	hero: {
		terminal: {
			titulo: 'ariel@debian: ~',
			prompt: 'ariel@debian:~$',
			comandos: ['sudo apt update', 'sudo apt install ariel-almeida'],
			actualizar: [
				'Leyendo listas de paquetes... Hecho',
				'Construyendo árbol de dependencias... Hecho',
				'Todos los paquetes están actualizados.',
			],
			instalar: [
				'Leyendo listas de paquetes... Hecho',
				'Se instalarán los siguientes paquetes NUEVOS:',
				'  ariel-almeida',
			],
			etiqueta: 'Terminal Debian simulada con mi presentación',
		},
		insignia: 'Disponible para nuevos proyectos',
		nombre: 'Ariel Almeida',
		rol: 'Desarrollador Full Stack',
		subtitulo: 'Construyo experiencias web rápidas, accesibles y con personalidad.',
		acciones: {
			proyectos: 'Ver proyectos',
			contacto: 'Contactarme',
		},
	},

	sobreMi: {
		titulo: 'Sobre mí',
		estado: 'Disponible para nuevos proyectos',
		pieFoto: 'Ariel Almeida',
		altFoto: 'Foto profesional de Ariel Almeida',
		parrafos: [
			'Soy un desarrollador apasionado por crear productos digitales con impacto. Me desempeño cómodamente en el front-end con Astro y CSS, y en el back-end con Java.',
			'Busco oportunidades como desarrollador o proyectos freelance donde aplicar buenas prácticas, rendimiento y atención al detalle.',
		],
		datos: [
			{ etiqueta: 'Ubicación', valor: 'Argentina' },
			{ etiqueta: 'Enfoque', valor: 'Front-end / Back-end Java' },
			{ etiqueta: 'Idiomas', valor: 'Español, Inglés, Portugués' },
		],
	},

	proyectos: {
		titulo: 'Proyectos',
		placeholders: [
			{
				titulo: 'Proyecto 1',
				descripcion: 'Descripción de ejemplo. Será reemplazada por un proyecto real.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto 1',
			},
			{
				titulo: 'Proyecto 2',
				descripcion: 'Descripción de ejemplo. Será reemplazada por un proyecto real.',
				tecnologias: ['Java', 'Spring Boot', 'MySQL'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto 2',
			},
			{
				titulo: 'Proyecto 3',
				descripcion: 'Descripción de ejemplo. Será reemplazada por un proyecto real.',
				tecnologias: ['React', 'API REST', 'Vercel'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto 3',
			},
		],
		etiquetaTecnologias: 'Tecnologías',
		abreNuevaPestana: 'Se abre en una nueva pestaña',
	},

	contacto: {
		titulo: 'Contacto',
		descripcion: '¿Tenés una idea o una oportunidad? Escribime y te respondo a la brevedad.',
		redes: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			verPerfil: 'Ver perfil',
		},
		formulario: {
			titulo: 'Formulario de contacto',
			asunto: 'Nuevo mensaje desde la landing',
			campos: {
				nombre: { etiqueta: 'Nombre', error: 'Ingresá tu nombre.' },
				apellido: { etiqueta: 'Apellido', error: 'Ingresá tu apellido.' },
				telefono: { etiqueta: 'Teléfono', error: 'Ingresá un teléfono válido.' },
				correo: { etiqueta: 'Correo electrónico', error: 'Ingresá un correo válido.' },
				redSocial: {
					etiqueta: 'Link a tu red social o página',
					ayuda: 'Ejemplo: https://instagram.com/tuusuario',
					error: 'Ingresá un enlace válido (debe empezar con http).',
				},
				mensaje: {
					etiqueta: 'Mensaje',
					ayuda: 'Contame tu idea de proyecto o el motivo del contacto.',
					error: 'Escribí un mensaje de al menos 10 caracteres.',
				},
			},
			enviar: 'Enviar mensaje',
			enviando: 'Enviando...',
			exito: '¡Mensaje enviado! Te respondo a la brevedad.',
			error: 'No se pudo enviar el mensaje. Probá de nuevo o escribime por LinkedIn.',
		},
	},

	pie: {
		texto: 'Diseñado y desarrollado por Ariel Almeida.',
		anio: 'Todos los derechos reservados.',
	},
};
