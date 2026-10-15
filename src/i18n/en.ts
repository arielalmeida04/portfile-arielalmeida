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
			instalar: [
				'Reading package lists... Done',
				'The following NEW packages will be installed:',
				'  ariel-almeida',
			],
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
		estado: 'Available for new projects',
		altFoto: 'Professional photo of Martín Ariel Almeida',
		nombre: 'Martín Ariel Almeida',
		rol: 'Java Backend Developer',
		presentacion: [
			'I am Martín Ariel Almeida, a University Technician in Programming from the Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'I am focusing my career on backend development, with a special interest in the Java and Spring Boot ecosystem, REST API design, database management and the development of robust, secure and scalable web applications.',
			'I am interested in building solutions that solve real problems, applying good programming practices, design principles, software architecture and modern development tools.',
			'My professional goal is to join a development team where I can contribute my knowledge, keep growing as a backend developer and take part in quality projects, especially in fintech, banking and enterprise environments.',
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
		stacks: {
			principal: {
				etiqueta: 'Main stack',
				descripcion: 'Technologies I work with in the greatest depth.',
				items: [
					{
						nombre: 'Java',
						descripcion: 'Primary language for business logic and backend applications.',
						destacado: true,
					},
					{
						nombre: 'Spring Boot',
						descripcion: 'Backend applications, services and REST APIs.',
						destacado: true,
					},
					{
						nombre: 'Spring Security',
						descripcion: 'Authentication, authorization and endpoint protection.',
						destacado: true,
					},
					{
						nombre: 'JWT',
						descripcion: 'Tokens for authentication and secure sessions.',
						destacado: true,
					},
					{
						nombre: 'MySQL',
						descripcion: 'Relational modeling, queries and data persistence.',
						destacado: true,
					},
					{
						nombre: 'REST API',
						descripcion: 'Design and implementation of services between applications.',
						destacado: true,
					},
					{
						nombre: 'Hibernate',
						descripcion: 'Object-relational mapping (JPA) and database access.',
						destacado: false,
					},
					{
						nombre: 'Maven',
						descripcion: 'Dependency management and building Java projects.',
						destacado: false,
					},
					{
						nombre: 'Angular',
						descripcion: 'Web interfaces and integration with backend services.',
						destacado: false,
					},
					{
						nombre: 'TypeScript',
						descripcion: 'Static typing in frontend development.',
						destacado: false,
					},
					{ nombre: 'Git', descripcion: 'Source code version control.', destacado: false },
					{ nombre: 'GitHub', descripcion: 'Repositories and collaboration.', destacado: false },
					{
						nombre: 'Debian',
						descripcion: 'Base distribution of my development environment.',
						destacado: false,
					},
					{
						nombre: 'Linux',
						descripcion: 'Primary operating system and command line.',
						destacado: false,
					},
					{
						nombre: 'Ubuntu',
						descripcion: 'Distribution used on servers and development.',
						destacado: false,
					},
				],
			},
			secundario: {
				etiqueta: 'Secondary stack',
				descripcion: 'Technologies that complement my main stack.',
				items: [
					'PostgreSQL',
					'MongoDB',
					'Docker',
					'JUnit 5',
					'Mockito',
					'HTML5',
					'CSS',
					'JavaScript',
				],
			},
			complementario: {
				etiqueta: 'Complementary stack',
				descripcion: 'Tools and knowledge that broaden my profile.',
				items: [
					'Python',
					'FastAPI',
					'AWS',
					'Node.js',
					'npm',
					'Bootstrap',
					'Zsh',
					'Cybersecurity',
					'React',
					'Postman',
					'Swagger',
					'Javadoc',
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
