import type { Textos } from './tipos';

/** Textos en portugués (pendiente de revisión final). */
export const pt: Textos = {
	meta: {
		titulo: 'Ariel Almeida | Desenvolvedor Java Backend',
		descripcion:
			'Desenvolvedor front-end especializado em Astro e back-end com Java. Landing pessoal, projetos e contato.',
		autor: 'Ariel Almeida',
	},

	navegacion: {
		marca: 'ariel@almeida:~',
		inicio: 'Início',
		sobreMi: 'Sobre mim',
		proyectos: 'Projetos',
		contacto: 'Contato',
		alternativa: 'Pular para o conteúdo principal',
		principal: 'Navegação principal',
		menu: 'Abrir menu',
		cambiarTema: 'Alternar entre tema claro e escuro',
		cambiarIdioma: 'Alterar idioma',
		cerrarMenu: 'Fechar menu',
	},

	hero: {
		terminal: {
			titulo: 'ariel@almeida: ~',
			prompt: 'ariel@almeida:~$',
			comandos: ['sudo apt update', 'sudo apt install ariel-almeida'],
			actualizar: [
				'Lendo listas de pacotes... Feito',
				'Construindo árvore de dependências... Feito',
				'Todos os pacotes estão atualizados.',
			],
			instalar: ['  ariel-almeida  suporte 24/7  fiabilidade  adaptabilidade'],
			etiqueta: 'Terminal Debian simulada com a minha apresentação',
		},
		nombre: 'Ariel Almeida',
		rol: 'Desenvolvedor Java Backend',
		subtitulo: 'Crio experiências web rápidas, acessíveis, eficientes e escaláveis.',
		acciones: {
			proyectos: 'Ver projetos',
			contacto: 'Entrar em contato',
		},
	},

	sobreMi: {
		titulo: 'Sobre mim',
		estado: 'Disponível para novos projetos',
		altFoto: 'Foto profissional de Martín Ariel Almeida',
		nombre: 'Martín Ariel Almeida',
		rol: 'Desenvolvedor Backend Java',
		presentacion: [
			'Sou Martín Ariel Almeida, Técnico Universitário em Programação pela Universidad Tecnológica Nacional (UTN), Facultad Regional Paraná, Entre Ríos, Argentina.',
			'Direciono minha carreira ao desenvolvimento backend, com especial interesse no ecossistema Java e Spring Boot, na construção de APIs REST, no gerenciamento de bancos de dados e no desenvolvimento de aplicações web robustas, seguras e escaláveis.',
			'Tenho interesse em desenvolver soluções que resolvam problemas reais, aplicando boas práticas de programação, princípios de design, arquitetura de software e ferramentas modernas de desenvolvimento.',
		],
		formacion: {
			etiqueta: 'Formação acadêmica',
			titulo: 'Técnico Universitário em Programação',
			campos: [
				{ etiqueta: 'Instituição', valor: 'Universidad Tecnológica Nacional (UTN)' },
				{ etiqueta: 'Faculdade', valor: 'Facultad Regional Paraná' },
				{ etiqueta: 'Localização', valor: 'Paraná, Entre Ríos, Argentina' },
				{ etiqueta: 'Status', valor: 'Título concluído' },
			],
		},
		stacks: {
			principal: {
				etiqueta: 'Stack principal',
				descripcion: 'Tecnologias com as quais desenvolvo meus projetos com maior profundidade.',
				items: [
					{
						nombre: 'Java',
						descripcion: 'Linguagem principal para a lógica de negócio e as aplicações backend.',
						destacado: true,
					},
					{
						nombre: 'Spring Boot',
						descripcion: 'Aplicações backend, serviços e APIs REST.',
						destacado: true,
					},
					{
						nombre: 'Spring Security',
						descripcion: 'Autenticação, autorização e proteção de endpoints.',
						destacado: true,
					},
					{
						nombre: 'JWT',
						descripcion: 'Tokens para autenticação e sessões seguras.',
						destacado: true,
					},
					{
						nombre: 'MySQL',
						descripcion: 'Modelagem relacional, consultas e persistência de dados.',
						destacado: true,
					},
					{
						nombre: 'REST API',
						descripcion: 'Design e implementação de serviços entre aplicações.',
						destacado: true,
					},
					{
						nombre: 'Hibernate',
						descripcion: 'Mapeamento objeto-relacional (JPA) e acesso a bancos de dados.',
						destacado: false,
					},
					{
						nombre: 'Maven',
						descripcion: 'Gerenciamento de dependências e build de projetos Java.',
						destacado: false,
					},
					{
						nombre: 'Angular',
						descripcion: 'Interfaces web e integração com serviços backend.',
						destacado: false,
					},
					{
						nombre: 'TypeScript',
						descripcion: 'Tipagem estática no desenvolvimento frontend.',
						destacado: false,
					},
					{ nombre: 'Git', descripcion: 'Controle de versão do código-fonte.', destacado: false },
					{ nombre: 'GitHub', descripcion: 'Repositórios e colaboração.', destacado: false },
					{
						nombre: 'Debian',
						descripcion: 'Distribuição base do meu ambiente de desenvolvimento.',
						destacado: false,
					},
					{
						nombre: 'Linux',
						descripcion: 'Sistema operacional principal e linha de comando.',
						destacado: false,
					},
					{
						nombre: 'Ubuntu',
						descripcion: 'Distribuição usada em servidores e desenvolvimento.',
						destacado: false,
					},
				],
			},
			secundario: {
				etiqueta: 'Stack secundário',
				descripcion: 'Tecnologias que complementam meu stack principal.',
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
				etiqueta: 'Stack complementar',
				descripcion: 'Ferramentas e conhecimentos que ampliam meu perfil.',
				items: [
					'Python',
					'FastAPI',
					'AWS',
					'Node.js',
					'npm',
					'Bootstrap',
					'Zsh',
					'Cibersegurança',
					'React',
					'Postman',
					'Swagger',
					'Javadoc',
				],
			},
		},
		idiomas: {
			etiqueta: 'Idiomas',
			valores: ['Espanhol', 'Inglês', 'Português'],
		},
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
