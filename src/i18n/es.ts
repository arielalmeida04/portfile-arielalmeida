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
			'Técnico Universitario en Programación por la Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'Elegí el camino de Desarrollador Backend, con especial interés en el ecosistema Java y Spring Boot, la construcción de APIs REST, la gestión de bases de datos y el desarrollo de aplicaciones web robustas, seguras y escalables. También estuve usando FastAPI en Python, ya que en la facultad tuvimos que hacer varios proyectos, y eso reforzó mi gran interés por el backend.',
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
					'TypeScript',
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
					'FastAPI',
					'AWS',
					'Node.js',
					'npm',
					'Zsh',
					'Redis',
					'Thymeleaf',
					'JaCoCo',
					'C#',
					'WinForms',
					'.NET',
					'SQL Server',
					'PostgreSQL',
					'React',
				],
			},
		},
		idiomas: {
			etiqueta: 'Idiomas',
			valores: ['Español (nativo)', 'Inglés (A2)', 'Portugués (B1)'],
		},
	},

	proyectos: {
		titulo: 'Proyectos',
		placeholders: [
			{
				titulo: 'Coco Beautty',
				descripcion: 'E-commerce de maquillaje con catálogo, carrito y checkout.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto',
				imagen: '/img/proyectos/coco-beautty.svg',
				altImagen: 'Vista previa del e-commerce de maquillaje Coco Beautty',
				estado: 'desarrollo',
			},
			{
				titulo: 'Veltoro Novano',
				descripcion: 'E-commerce de relojes y piezas de colección: catálogo y fichas de producto.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto',
				imagen: '/img/proyectos/veltoro-novano.svg',
				altImagen: 'Vista previa del e-commerce de relojes y piezas de colección Veltoro Novano',
				estado: 'desarrollo',
			},
			{
				titulo: 'Sistema de reserva de turnos',
				descripcion: 'Turnos para un consultorio con múltiples especialistas: agenda, disponibilidad y confirmación.',
				tecnologias: ['Java', 'Spring Boot', 'MySQL'],
				enlace: '#',
				etiquetaEnlace: 'Ver proyecto',
				imagen: '/img/proyectos/turnos-consultorio.svg',
				altImagen: 'Vista previa del sistema de reserva de turnos para un consultorio',
				estado: 'desarrollo',
			},
		],
		etiquetaTecnologias: 'Tecnologías',
		prompt: 'ariel@almeida:~/proyectos$',
		abreNuevaPestana: 'Se abre en una nueva pestaña',
		cintaDesarrollo: 'EN DESARROLLO',
	},

	contacto: {
		titulo: 'Contacto',
		descripcion: '¿Tenés una idea o una oportunidad? Escribime y te respondo a la brevedad.',
		redes: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			verPerfil: 'Ver perfil',
			descargarCv: 'Descargar CV',
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
