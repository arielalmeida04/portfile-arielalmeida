import type { Textos } from './tipos';

/** Textos en inglés (pendiente de revisión final). */
export const en: Textos = {
	meta: {
		titulo: 'Ariel Almeida | Java Backend Developer',
		descripcion:
			'Front-end developer specialized in Astro and back-end with Java. Personal portfolio, projects and contact.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'ariel@almeida:~',
		inicio: 'Home',
		sobreMi: 'About me',
		proyectos: 'Projects',
		contacto: 'Contact',
		alternativa: 'Skip to main content',
		principal: 'Main navigation',
		menu: 'Open menu',
		cambiarTema: 'Switch between light and dark theme',
		cambiarIdioma: 'Change language',
		cerrarMenu: 'Close menu',
	},

	hero: {
		terminal: {
			titulo: 'ariel@almeida: ~',
			prompt: 'ariel@almeida:~$',
			comandos: ['sudo apt update', 'sudo apt install ariel-almeida'],
			actualizar: [
				'Reading package lists... Done',
				'Building dependency tree... Done',
				'All packages are up to date.',
			],
			instalar: ['  ariel-almeida  24/7 support  reliability  adaptability'],
			etiqueta: 'Simulated Debian terminal with my introduction',
		},
		nombre: 'Ariel Almeida',
		rol: 'Java Backend Developer',
		subtitulo: 'I build fast, accessible, efficient and scalable web experiences.',
		acciones: {
			proyectos: 'View projects',
			contacto: 'Get in touch',
		},
	},

	sobreMi: {
		titulo: 'About me',
		altFoto: 'Professional photo of Martín Ariel Almeida',
		nombre: 'Martín Ariel Almeida',
		rol: 'Java Backend Developer',
		presentacion: [
			'University Technician in Programming from the Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'I chose the Backend Developer path, with a special interest in the Java and Spring Boot ecosystem, REST API design, database management and the development of robust, secure and scalable web applications. I have also been using FastAPI with Python, since we had to build several projects at university, and that reinforced my strong interest in backend development.',
			'I am interested in building solutions that solve real problems, applying good programming practices, design principles, software architecture and modern development tools.',
		],
		formacion: {
			etiqueta: 'Education',
			titulo: 'University Technician in Programming',
			campos: [
				{ etiqueta: 'Institution', valor: 'Universidad Tecnológica Nacional (UTN)' },
				{ etiqueta: 'Faculty', valor: 'Facultad Regional Paraná' },
				{ etiqueta: 'Location', valor: 'Paraná, Entre Ríos, Argentina' },
				{ etiqueta: 'Status', valor: 'Degree completed' },
			],
		},
		certificaciones: {
			etiqueta: 'Certifications',
			descripcion: 'Certifications and completed courses.',
		},
		stacks: {
			principal: {
				etiqueta: 'Main stack',
				descripcion: 'Technologies I work with in the greatest depth.',
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
				etiqueta: 'Secondary stack',
				descripcion: 'Technologies that complement my main stack.',
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
				etiqueta: 'Complementary stack',
				descripcion: 'Tools and technologies I have used or am learning',
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
			etiqueta: 'Languages',
			valores: ['Spanish (native)', 'English (A2)', 'Portuguese (B1)'],
		},
	},

	proyectos: {
		titulo: 'Projects',
		placeholders: [
			{
				titulo: 'Coco Beautty',
				descripcion: 'Makeup e-commerce with product catalog, cart and checkout.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'View project',
				imagen: '/img/proyectos/coco-beautty.svg',
				altImagen: 'Preview of the Coco Beautty makeup e-commerce',
				estado: 'desarrollo',
			},
			{
				titulo: 'Veltoro Novano',
				descripcion: 'Watches and collectible pieces e-commerce: catalog and product pages.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'View project',
				imagen: '/img/proyectos/veltoro-novano.svg',
				altImagen: 'Preview of the Veltoro Novano watches and collectibles e-commerce',
				estado: 'desarrollo',
			},
			{
				titulo: 'Appointment booking system',
				descripcion: 'Appointment booking for a clinic with multiple specialists: schedule, availability and confirmation.',
				tecnologias: ['Java', 'Spring Boot', 'MySQL'],
				enlace: '#',
				etiquetaEnlace: 'View project',
				imagen: '/img/proyectos/turnos-consultorio.svg',
				altImagen: 'Preview of the clinic appointment booking system',
				estado: 'desarrollo',
			},
		],
		etiquetaTecnologias: 'Technologies',
		prompt: 'ariel@almeida:~/projects$',
		abreNuevaPestana: 'Opens in a new tab',
		cintaDesarrollo: 'IN DEVELOPMENT',
	},

	contacto: {
		titulo: 'Contact',
		descripcion: 'Got an idea or an opportunity? Drop me a message and I will get back to you.',
		redes: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			verPerfil: 'View profile',
			descargarCv: 'Download CV',
		},
		formulario: {
			titulo: 'Contact form',
			asunto: 'New message from the landing page',
			campos: {
				nombre: { etiqueta: 'First name', error: 'Please enter your first name.' },
				apellido: { etiqueta: 'Last name', error: 'Please enter your last name.' },
				telefono: { etiqueta: 'Phone', error: 'Please enter a valid phone number.' },
				correo: { etiqueta: 'Email', error: 'Please enter a valid email address.' },
				redSocial: {
					etiqueta: 'Link to your social profile or website',
					ayuda: 'Example: https://instagram.com/yourusername',
					error: 'Please enter a valid link (it must start with http).',
				},
				mensaje: {
					etiqueta: 'Message',
					ayuda: 'Tell me about your project idea or why you are reaching out.',
					error: 'Please write a message of at least 10 characters.',
				},
			},
			enviar: 'Send message',
			enviando: 'Sending...',
			exito: 'Message sent! I will get back to you shortly.',
			error: 'The message could not be sent. Try again or reach out on LinkedIn.',
		},
	},

	pie: {
		texto: 'Designed and developed by Ariel Almeida.',
		anio: 'All rights reserved.',
	},
};
