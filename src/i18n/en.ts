import type { Textos } from './tipos';

/** Textos en inglés (pendiente de revisión final). */
export const en: Textos = {
	meta: {
		titulo: 'Ariel Almeida | Full Stack Developer',
		descripcion:
			'Front-end developer specialized in Astro and back-end with Java. Personal portfolio, projects and contact.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'Ariel Almeida',
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
			titulo: 'ariel@debian: ~',
			prompt: 'ariel@debian:~$',
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
		insignia: 'Available for new projects',
		nombre: 'Ariel Almeida',
		rol: 'Full Stack Developer',
		subtitulo: 'I build fast, accessible web experiences with personality.',
		acciones: {
			proyectos: 'View projects',
			contacto: 'Get in touch',
		},
	},

	sobreMi: {
		titulo: 'About me',
		estado: 'Available for new projects',
		pieFoto: 'Ariel Almeida',
		altFoto: 'Professional photo of Ariel Almeida',
		parrafos: [
			'I am a developer passionate about building digital products that make an impact. I am comfortable working on the front-end with Astro and CSS, and on the back-end with Java.',
			'I am looking for developer roles or freelance projects where I can apply best practices, performance and attention to detail.',
		],
		datos: [
			{ etiqueta: 'Location', valor: 'Argentina' },
			{ etiqueta: 'Focus', valor: 'Front-end / Java Back-end' },
			{ etiqueta: 'Languages', valor: 'Spanish, English, Portuguese' },
		],
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
