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
			'I am Martín Ariel Almeida, a University Technician in Programming from the Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'I am focusing my career on backend development, with a special interest in the Java and Spring Boot ecosystem, REST API design, database management and the development of robust, secure and scalable web applications.',
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
			etiqueta: 'Languages',
			valores: ['Spanish', 'English', 'Portuguese'],
		},
	},

	proyectos: {
		titulo: 'Projects',
		placeholders: [
			{
				titulo: 'Project 1',
				descripcion: 'Sample description. It will be replaced with a real project.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'View project 1',
			},
			{
				titulo: 'Project 2',
				descripcion: 'Sample description. It will be replaced with a real project.',
				tecnologias: ['Java', 'Spring Boot', 'MySQL'],
				enlace: '#',
				etiquetaEnlace: 'View project 2',
			},
			{
				titulo: 'Project 3',
				descripcion: 'Sample description. It will be replaced with a real project.',
				tecnologias: ['React', 'REST API', 'Vercel'],
				enlace: '#',
				etiquetaEnlace: 'View project 3',
			},
		],
		etiquetaTecnologias: 'Technologies',
		vistaPrevia: 'preview',
		prompt: 'ariel@almeida:~/projects$',
		abreNuevaPestana: 'Opens in a new tab',
	},

	contacto: {
		titulo: 'Contact',
		descripcion: 'Got an idea or an opportunity? Drop me a message and I will get back to you.',
		redes: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			verPerfil: 'View profile',
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
