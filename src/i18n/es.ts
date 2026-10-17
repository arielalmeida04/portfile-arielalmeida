/**
 * Textos del sitio en español (idioma por defecto).
 * Es la fuente de verdad de la estructura de traducciones:
 * los demás idiomas deben cumplir con este mismo formato (`satisfies Textos`).
 */
export const es = {
	meta: {
		titulo: 'Ariel Almeida | Desarrollador Java Backend',
		descripcion:
			'Desarrollador front-end especializado en Astro y back-end con Java. Landing personal, proyectos y contacto.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'ariel@almeida:~',
		inicio: 'Inicio',
		sobreMi: 'Sobre mí',
		proyectos: 'Proyectos',
		contacto: 'Contacto',
		alternativa: 'Saltar al contenido principal',
		principal: 'Navegación principal',
		menu: 'Abrir menú',
		cambiarTema: 'Cambiar entre tema claro y oscuro',
		cambiarIdioma: 'Cambiar idioma',
		cerrarMenu: 'Cerrar menú',
	},

	hero: {
		terminal: {
			titulo: 'ariel@almeida: ~',
			prompt: 'ariel@almeida:~$',
			comandos: ['sudo apt update', 'sudo apt install ariel-almeida'],
			actualizar: [
				'Leyendo listas de paquetes... Hecho',
				'Construyendo árbol de dependencias... Hecho',
				'Todos los paquetes están actualizados.',
			],
			instalar: ['  ariel-almeida  soporte 24/7  fiabilidad  adaptabilidad'],
			etiqueta: 'Terminal Debian simulada con mi presentación',
		},
		nombre: 'Ariel Almeida',
		rol: 'Desarrollador Java Backend',
		subtitulo: 'Construyo experiencias web rápidas, accesibles, eficientes y escalables.',
		acciones: {
			proyectos: 'Ver proyectos',
			contacto: 'Contactarme',
		},
	},

	sobreMi: {
		titulo: 'Sobre mí',
		altFoto: 'Foto profesional de Martín Ariel Almeida',
		nombre: 'Martín Ariel Almeida',
		rol: 'Desarrollador Backend Java',
		presentacion: [
			'Soy Martín Ariel Almeida, Técnico Universitario en Programación por la Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'Oriento mi carrera al desarrollo backend, con especial interés en el ecosistema Java y Spring Boot, la construcción de APIs REST, la gestión de bases de datos y el desarrollo de aplicaciones web robustas, seguras y escalables.',
			'Me interesa desarrollar soluciones que resuelvan problemas reales, aplicando buenas prácticas de programación, principios de diseño, arquitectura de software y herramientas modernas de desarrollo.',
		],
		formacion: {
			etiqueta: 'Formación académica',
			titulo: 'Técnico Universitario en Programación',
			campos: [
				{ etiqueta: 'Institución', valor: 'Universidad Tecnológica Nacional (UTN)' },
				{ etiqueta: 'Facultad', valor: 'Facultad Regional Paraná' },
				{ etiqueta: 'Ubicación', valor: 'Paraná, Entre Ríos, Argentina' },
				{ etiqueta: 'Estado', valor: 'Título finalizado' },
			],
		},
		certificaciones: {
			etiqueta: 'Certificaciones',
			descripcion: 'Certificaciones y cursos completados.',
		},
		stacks: {
			principal: {
				etiqueta: 'Stack principal',
				descripcion: 'Tecnologías con las que desarrollo mis proyectos con mayor profundidad.',
				items: [
					{
						nombre: 'Java',
						destacado: true,
					},
					{
						nombre: 'MongoDB',
						destacado: true,
					},
					{
						nombre: 'Spring Boot',
						destacado: true,
					},
					{
						nombre: 'Spring Security',
						destacado: true,
					},
					{
						nombre: 'JWT',
						destacado: true,
					},
					{
						nombre: 'MySQL',
						destacado: true,
					},
					{
						nombre: 'REST API',
						destacado: true,
					},
					{
						nombre: 'Docker',
						destacado: true,
					},
					{
						nombre: 'Angular',
						destacado: false,
					},
					{
						nombre: 'Git',
						destacado: false,
					},
					{
						nombre: 'Debian',
						destacado: false,
					},
					{
						nombre: 'Linux',
						destacado: false,
					},
					{
						nombre: 'Ubuntu',
						destacado: false,
					},
				],
			},
			secundario: {
				etiqueta: 'Stack secundario',
				descripcion: 'Tecnologías que complementan mi stack principal.',
				items: [
					'JUnit 5',
					'Mockito',
					'HTML5',
					'CSS',
					'JavaScript',
					'Maven',
					'Hibernate',
					'GitHub',
					'Python',
					'Bootstrap',
					'Postman',
					'Swagger',
				],
			},
			complementario: {
				etiqueta: 'Stack complementario',
				descripcion: 'Herramientas y tecnologias que use o estoy aprendiendo',
				items: [
					'TypeScript',
					'FastAPI',
					'AWS',
					'Node.js',
					'npm',
					'Zsh',
					'Ciberseguridad',
					'PostgreSQL',
					'React',
				],
			},
		},
		idiomas: {
			etiqueta: 'Idiomas',
			valores: ['Español', 'Inglés', 'Portugués'],
		},
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
			{
				titulo: 'Proyecto 4',
				descripcion: 'Descripción de ejemplo. Será reemplazada por un proyecto real.',
				tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto 4',
			},
		],
		etiquetaTecnologias: 'Tecnologías',
		vistaPrevia: 'vista previa',
		prompt: 'ariel@almeida:~/proyectos$',
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
