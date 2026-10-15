import type { Textos } from './tipos';

/** Textos en portugués (pendiente de revisión final). */
export const pt: Textos = {
	meta: {
		titulo: 'Ariel Almeida | Desenvolvedor Full Stack',
		descripcion:
			'Desenvolvedor front-end especializado em Astro e back-end com Java. Landing pessoal, projetos e contato.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'Ariel Almeida',
		inicio: 'Início',
		sobreMi: 'Sobre mim',
		proyectos: 'Projetos',
		contacto: 'Contato',
		alternativa: 'Pular para o conteúdo principal',
		principal: 'Navegação principal',
		menu: 'Abrir menu',
		cambiarTema: 'Alternar entre tema claro e escuro',
		cerrarMenu: 'Fechar menu',
	},

	hero: {
		terminal: {
			titulo: 'ariel@debian: ~',
			prompt: 'ariel@debian:~$',
			comandos: ['sudo apt update', 'sudo apt install ariel-almeida'],
			actualizar: [
				'Lendo listas de pacotes... Feito',
				'Construindo árvore de dependências... Feito',
				'Todos os pacotes estão atualizados.',
			],
			instalar: [
				'Lendo listas de pacotes... Feito',
				'Os seguintes pacotes NOVOS serão instalados:',
				'  ariel-almeida',
			],
			etiqueta: 'Terminal Debian simulada com a minha apresentação',
		},
		insignia: 'Disponível para novos projetos',
		nombre: 'Ariel Almeida',
		rol: 'Desenvolvedor Full Stack',
		subtitulo: 'Crio experiências web rápidas, acessíveis e com personalidade.',
		acciones: {
			proyectos: 'Ver projetos',
			contacto: 'Entrar em contato',
		},
	},

	sobreMi: {
		titulo: 'Sobre mim',
		estado: 'Disponível para novos projetos',
		pieFoto: 'Ariel Almeida',
		altFoto: 'Foto profissional de Ariel Almeida',
		parrafos: [
			'Sou um desenvolvedor apaixonado por criar produtos digitais com impacto. Atuo confortavelmente no front-end com Astro e CSS, e no back-end com Java.',
			'Procuro oportunidades como desenvolvedor ou projetos freelancers onde aplicar boas práticas, desempenho e atenção aos detalhes.',
		],
		datos: [
			{ etiqueta: 'Localização', valor: 'Argentina' },
			{ etiqueta: 'Foco', valor: 'Front-end / Back-end Java' },
			{ etiqueta: 'Idiomas', valor: 'Espanhol, Inglês, Português' },
		],
	},

	proyectos: {
		titulo: 'Projetos',
		placeholders: [
			{
				titulo: 'Projeto 1',
				descripcion: 'Descrição de exemplo. Será substituída por um projeto real.',
				tecnologias: ['Astro', 'TypeScript', 'CSS'],
				enlace: '#',
				etiquetaEnlace: 'Ver projeto 1',
			},
			{
				titulo: 'Projeto 2',
				descripcion: 'Descrição de exemplo. Será substituída por um projeto real.',
				tecnologias: ['Java', 'Spring Boot', 'MySQL'],
				enlace: '#',
				etiquetaEnlace: 'Ver projeto 2',
			},
			{
				titulo: 'Projeto 3',
				descripcion: 'Descrição de exemplo. Será substituída por um projeto real.',
				tecnologias: ['React', 'API REST', 'Vercel'],
				enlace: '#',
				etiquetaEnlace: 'Ver projeto 3',
			},
		],
		etiquetaTecnologias: 'Tecnologias',
		abreNuevaPestana: 'Abre em uma nova aba',
	},

	contacto: {
		titulo: 'Contato',
		descripcion: 'Tem uma ideia ou uma oportunidade? Me escreva e retorno o mais breve possível.',
		redes: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			verPerfil: 'Ver perfil',
		},
		formulario: {
			titulo: 'Formulário de contato',
			asunto: 'Nova mensagem vindo da landing page',
			campos: {
				nombre: { etiqueta: 'Nome', error: 'Informe seu nome.' },
				apellido: { etiqueta: 'Sobrenome', error: 'Informe seu sobrenome.' },
				telefono: { etiqueta: 'Telefone', error: 'Informe um telefone válido.' },
				correo: { etiqueta: 'E-mail', error: 'Informe um e-mail válido.' },
				redSocial: {
					etiqueta: 'Link da sua rede social ou página',
					ayuda: 'Exemplo: https://instagram.com/seuusuario',
					error: 'Informe um link válido (deve começar com http).',
				},
				mensaje: {
					etiqueta: 'Mensagem',
					ayuda: 'Conte sua ideia de projeto ou o motivo do contato.',
					error: 'Escreva uma mensagem com pelo menos 10 caracteres.',
				},
			},
			enviar: 'Enviar mensagem',
			enviando: 'Enviando...',
			exito: 'Mensagem enviada! Retorno o mais breve possível.',
			error: 'Não foi possível enviar a mensagem. Tente novamente ou fale pelo LinkedIn.',
		},
	},

	pie: {
		texto: 'Design e desenvolvimento por Ariel Almeida.',
		anio: 'Todos os direitos reservados.',
	},
};
