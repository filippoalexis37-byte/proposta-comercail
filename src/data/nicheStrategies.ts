import { NicheType, ServiceType } from '../types/proposal';

export interface NicheServiceStrategy {
  nicho: NicheType;
  servico: ServiceType;
  objetivo: string;
  oQueSeraFeito: string[];
  comoSeraExecutado: string;
  porQueFoiEscolhido: string;
  comoSeraAcompanhado: string;
  indicadores: string[];
  cuidados: string;
  descricaoComercial: string;
}

export const NICHE_SERVICE_STRATEGIES: NicheServiceStrategy[] = [
  // --- COMPRA DE OURO (LAZARO CARVALHO) ---
  {
    nicho: 'compra_ouro',
    servico: 'google_business',
    objetivo: 'Dominar as buscas "compro ouro perto de mim" e eliminar a desconfiança imediata do cliente através de autoridade e transparência local.',
    oQueSeraFeito: [
      'Otimização completa das categorias primárias e secundárias ("Comprador de joias", "Avaliador de metais preciosos")',
      'Fotos profissionais do guichê de atendimento privativo, balança de precisão calibrada e ambiente seguro com monitoramento',
      'Campanha ativa de coleta de avaliações 5 estrelas enfatizando honestidade, discrição e pagamento imediato via PIX',
      'Inserção de mapa de rotas, orientações de estacionamento seguro e botão de contato sigiloso no WhatsApp'
    ],
    comoSeraExecutado: 'Configuração dos atributos de segurança e privacidade do local, atualização semanal de cotações educativas e monitoramento de reputação.',
    porQueFoiEscolhido: 'Quem decide vender ouro pesquisa no Google Maps com urgência e só comparece a lojas que demonstrem endereço fixo, segurança e reputação impecável.',
    comoSeraAcompanhado: 'Acompanhamento do volume de rotas traçadas até a loja, chamadas diretas e cliques no botão do WhatsApp.',
    indicadores: ['Solicitações de rotas no Maps', 'Ligações diretas', 'Avaliações 5 estrelas', 'Visualizações do perfil local'],
    cuidados: 'Garantir discrição e nunca expor dados de clientes em avaliações públicas.',
    descricaoComercial: 'Presença no topo das pesquisas locais para capturar quem precisa vender ouro hoje com total segurança.'
  },
  {
    nicho: 'compra_ouro',
    servico: 'meta_ads',
    objetivo: 'Despertar pessoas com joias antigas, peças quebradas e cautelas de penhor paradas em casa, superando restrições de anúncio com compliance ético.',
    oQueSeraFeito: [
      'Campanhas regionais segmentadas para um raio de 3 a 7 km da loja física',
      'Criativos elegantes focados em "Avaliação Gratuita e Sem Compromisso na sua presença"',
      'Comunicação de desapego inteligente de alianças antigas, joias sem par e cautelas de penhor da Caixa',
      'Link direto para conversa privada no WhatsApp com mensagem de boas-vindas acolhedora'
    ],
    comoSeraExecutado: 'Veiculação de criativos institucionais de alto padrão que cumprem as políticas de publicidade do Meta sem parecerem empréstimo ou sensacionalismo.',
    porQueFoiEscolhido: 'Muitas pessoas possuem patrimônio parado em gavetas e não sabem seu valor real; os anúncios despertam essa oportunidade adormecida.',
    comoSeraAcompanhado: 'Monitoramento do custo por conversa iniciada no WhatsApp e taxa de conversão em visitas à loja.',
    indicadores: ['Conversas iniciadas no WhatsApp', 'Custo por conversa (CPA)', 'Alcance hiperlocal qualificado'],
    cuidados: 'Evitar palavras-gatilho financeiras proibidas pelas plataformas ("dinheiro rápido", "empréstimo").',
    descricaoComercial: 'Geração ativa de oportunidades de compra trazendo para a loja clientes que tinham peças esquecidas.'
  },

  // --- SERRALHERIA ---
  {
    nicho: 'serralheria',
    servico: 'google_ads',
    objetivo: 'Captar orçamentos de alto ticket para portões basculantes, grades, coberturas e estruturas metálicas na cidade.',
    oQueSeraFeito: [
      'Campanhas de pesquisa segmentadas para "serralheria em campinas", "fabricação de portão basculante" e "cobertura metálica"',
      'Negativação rigorosa de buscas por ferramentas, tutoriais ou materiais usados',
      'Extensões de chamada telefônica e links diretos para solicitação de visita técnica no WhatsApp'
    ],
    comoSeraExecutado: 'Divisão em grupos de anúncios por tipo de projeto (Residencial, Comercial e Estruturas), maximizando o índice de qualidade e reduzindo o CPC.',
    porQueFoiEscolhido: 'Quem precisa de um portão ou cobertura busca diretamente no Google por serralherias qualificadas na região.',
    comoSeraAcompanhado: 'Volume de mensagens de orçamento geradas e custo por contato qualificado.',
    indicadores: ['Orçamentos solicitados no WhatsApp', 'CPC médio regional', 'Taxa de conversão de cliques em leads'],
    cuidados: 'Negativar palavras como "curso de solda", "máquina de serralheria" e "trabalhos escolares".',
    descricaoComercial: 'Posicionamento no topo do Google para atender quem está construindo ou reformando e precisa de orçamento rápido.'
  },
  {
    nicho: 'serralheria',
    servico: 'google_business',
    objetivo: 'Destacar a serralheria no mapa da região com portfólio visual de projetos entregues e avaliações de clientes satisfeitos.',
    oQueSeraFeito: [
      'Cadastro detalhado de todos os serviços (grades, portões automáticos, mezaninos, corrimãos)',
      'Galeria de fotos reais de antes/depois de instalações concluídas com acabamento de alta qualidade',
      'Incentivo a avaliações de arquitetos, construtores e proprietários residenciais'
    ],
    comoSeraExecutado: 'Atualização periódica de fotos de obras entregues e otimização das tags de relevância geográfica.',
    porQueFoiEscolhido: 'O cliente local quer ver obras prontas perto de sua casa para confiar na pontualidade e na solidez da serralheria.',
    comoSeraAcompanhado: 'Cliques para chamada e visualizações das fotos de serviços.',
    indicadores: ['Chamadas telefônicas', 'Rotas solicitadas', 'Visualizações das fotos de portfólio'],
    cuidados: 'Manter fotos sempre com boa resolução e foco nos detalhes da solda e pintura.',
    descricaoComercial: 'Transformação do Google Meu Negócio em uma vitrine permanente de obras entregues.'
  }
];
