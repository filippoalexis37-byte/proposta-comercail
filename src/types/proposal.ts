export type NicheType = 
  | 'compra_ouro' 
  | 'serralheria' 
  | 'ar_condicionado' 
  | 'hamburgueria' 
  | 'imobiliaria' 
  | 'salao_beleza' 
  | 'clinica' 
  | 'pet_shop' 
  | 'outro';

export type ServiceType = 
  | 'google_ads' 
  | 'meta_ads' 
  | 'google_business' 
  | 'seo' 
  | 'landing_page' 
  | 'social_media' 
  | 'whatsapp_automation' 
  | 'consultoria' 
  | 'marketing_local' 
  | 'pesquisa_mercado' 
  | 'prospeccao_comercial';

export type DiagnosticPriority = 'alta' | 'media' | 'estrategica';

export interface DiagnosticItem {
  id: string;
  category: string;
  situacaoIdentificada: string;
  impactoPotencial: string;
  oportunidade: string;
  prioridade: DiagnosticPriority;
}

export interface ServiceDetail {
  serviceId: ServiceType;
  nome: string;
  objetivo: string;
  oQueSeraFeito: string[];
  comoSeraExecutado: string;
  porQueFoiEscolhido: string;
  comoSeraAcompanhado: string;
  indicadores: string[];
}

export interface InvestmentItem {
  servico: string;
  descricao: string;
  periodicidade: 'Mensal' | 'Setup / Implantação' | 'Pontual';
  valor: number;
}

export interface CommercialProposal {
  id: string;
  numeroProposta: string;
  versao: number;
  status: 'rascunho' | 'enviada' | 'aprovada' | 'recusada';
  dataEmissao: string;
  validadeDias: number;
  consultor: {
    nome: string;
    empresa: string;
    cargo: string;
    contato: string;
  };
  cliente: {
    empresa: string;
    responsavel?: string;
    nicho: NicheType;
    subnicho?: string;
    cidade: string;
    bairro: string;
    publicoAlvo: string;
    objetivoPrincipal: string;
  };
  diagnostico: DiagnosticItem[];
  doresIdentificadas: string[];
  objetivosEstrategia: string[];
  estrategiaRecomendada: string;
  servicosSelecionados: ServiceType[];
  detalhamentoServicos: ServiceDetail[];
  itensInvestimento: InvestmentItem[];
  descontoAplicado: number;
  condicoesPagamento: {
    forma: string;
    parcelamento: string;
    vencimento: string;
  };
  naoIncluso: string[];
}
