export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga?: string;
  imagens: string[];
  tecnologias: string[];
  link?: string;
  github?: string;
  categoria: 'web' | 'mobile' | 'fullstack' | 'design';
  destaque: boolean;
  dataCriacao: string;
}

export const projetos: Projeto[] = [
  {
    id: 'delivery-app',
    titulo: 'App de Delivery',
    descricao: 'Aplicativo completo de delivery com rastreamento em tempo real, pagamentos integrados e painel administrativo.',
    descricaoLonga: 'Sistema completo de delivery desenvolvido com React Native, incluindo app para clientes, entregadores e painel administrativo. Funcionalidades incluem geolocalização em tempo real, integração com Stripe para pagamentos, notificações push e analytics detalhados.',
    imagens: [
      '/projetos/delivery-1.jpg',
      '/projetos/delivery-2.jpg',
      '/projetos/delivery-3.jpg',
      '/projetos/delivery-4.jpg',
      '/projetos/delivery-5.jpg',
    ],
    tecnologias: ['React Native', 'Node.js', 'Firebase', 'Stripe', 'Google Maps API'],
    link: 'https://delivery-app.com',
    github: 'https://github.com/seu-usuario/delivery-app',
    categoria: 'mobile',
    destaque: true,
    dataCriacao: '2024-01-15'
  },
  {
    id: 'analytics-dashboard',
    titulo: 'Dashboard Analytics',
    descricao: 'Dashboard para visualização de métricas de negócio em tempo real, com gráficos interativos e exportação de relatórios.',
    descricaoLonga: 'Dashboard empresarial desenvolvido com Next.js e D3.js, oferecendo visualizações interativas de dados, relatórios personalizáveis, exportação em múltiplos formatos e integração com APIs de terceiros.',
    imagens: [
      '/projetos/analytics-1.jpg',
      '/projetos/analytics-2.jpg',
      '/projetos/analytics-3.jpg',
    ],
    tecnologias: ['Next.js', 'D3.js', 'Tailwind CSS', 'Supabase', 'Chart.js'],
    link: 'https://analytics-dashboard.com',
    github: 'https://github.com/seu-usuario/analytics-dashboard',
    categoria: 'web',
    destaque: true,
    dataCriacao: '2024-02-20'
  },
  {
    id: 'ecommerce-moderno',
    titulo: 'E-commerce Moderno',
    descricao: 'Plataforma de e-commerce responsiva, com checkout otimizado, integração com gateways de pagamento e painel de vendas.',
    descricaoLonga: 'Plataforma completa de e-commerce com design responsivo, sistema de carrinho otimizado, múltiplos gateways de pagamento, gestão de estoque, sistema de cupons e painel administrativo completo.',
    imagens: [
      '/projetos/ecommerce-1.jpg',
      '/projetos/ecommerce-2.jpg',
      '/projetos/ecommerce-3.jpg',
      '/projetos/ecommerce-4.jpg',
    ],
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Vercel', 'PayPal API'],
    link: 'https://ecommerce-moderno.com',
    github: 'https://github.com/seu-usuario/ecommerce-moderno',
    categoria: 'fullstack',
    destaque: false,
    dataCriacao: '2024-03-10'
  },
  {
    id: 'portfolio-design',
    titulo: 'Portfolio Criativo',
    descricao: 'Portfolio interativo com animações fluidas e design moderno, desenvolvido com Framer Motion.',
    descricaoLonga: 'Portfolio pessoal com design minimalista e interativo, utilizando Framer Motion para animações suaves, design responsivo e otimização para performance.',
    imagens: [
      '/projetos/portfolio-1.jpg',
      '/projetos/portfolio-2.jpg',
    ],
    tecnologias: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    link: 'https://portfolio-criativo.com',
    github: 'https://github.com/seu-usuario/portfolio-criativo',
    categoria: 'web',
    destaque: false,
    dataCriacao: '2024-04-05'
  }
];

// Funções utilitárias
export const getProjetosDestaque = () => projetos.filter(p => p.destaque);
export const getProjetosPorCategoria = (categoria: Projeto['categoria']) => 
  projetos.filter(p => p.categoria === categoria);
export const getProjetoPorId = (id: string) => projetos.find(p => p.id === id); 