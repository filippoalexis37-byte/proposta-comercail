export type FunnelStage = 
  | 'lead_novo' 
  | 'primeiro_contato' 
  | 'respondeu' 
  | 'qualificado' 
  | 'reuniao' 
  | 'proposta_enviada' 
  | 'negociacao' 
  | 'fechado' 
  | 'cliente' 
  | 'pos_venda';

export type LeadOrigin = 'Google Ads' | 'Instagram' | 'Indicação' | 'Prospecção Ativa' | 'WhatsApp Direto' | 'Evento';

export interface FollowUpTask {
  id: string;
  leadId: string;
  empresa: string;
  data: string;
  horario: string;
  tipo: 'WhatsApp' | 'Ligação' | 'Reunião' | 'Email' | 'Enviar Proposta';
  descricao: string;
  status: 'pendente' | 'concluida' | 'reagendada';
  resultado?: string;
}

export interface TimelineEvent {
  id: string;
  dataHora: string;
  tipo: 'criacao' | 'contato' | 'diagnostico' | 'reuniao' | 'proposta' | 'followup' | 'fechamento' | 'financeiro';
  titulo: string;
  descricao: string;
  usuario: string;
}

export interface DigitalAudit {
  id: string;
  leadId: string;
  googleMeuNegocio: { status: 'nao_possui' | 'desatualizado' | 'otimizado'; notas: string; avaliacoesQtd: number };
  instagram: { status: 'inativo' | 'sem_estrategia' | 'ativo'; seguidoresAprox: number; frequenciaPost: string };
  siteLandingPage: { possui: boolean; tipo: 'nenhum' | 'site_antigo' | 'landing_page'; velocidadeNota: 'lenta' | 'media' | 'rapida' };
  anuncios: { googleAds: boolean; metaAds: boolean };
  seoLocal: { rankeado: boolean; palavrasChaveMapeadas: string[] };
  whatsapp: { possuiBot: boolean; tempoRespostaMedio: string };
  pontosFortes: string[];
  problemasEncontrados: string[];
  oportunidadesIdentificadas: string[];
  servicosSugeridos: string[];
}

export interface FinancialEntry {
  id: string;
  leadId: string;
  empresa: string;
  descricao: string;
  valorTotal: number;
  entrada: number;
  saldoRestante: number;
  vencimento: string;
  recorrenciaMensal: number;
  status: 'pendente' | 'pago' | 'atrasado';
}

export interface LeadRecord {
  id: string;
  empresa: string;
  responsavel: string;
  cargo: string;
  telefone: string;
  email: string;
  nicho: string;
  cidade: string;
  bairro: string;
  origem: LeadOrigin;
  etapaFunil: FunnelStage;
  valorPotencial: number;
  servicosInteresse: string[];
  ultimaInteracao: string;
  proximaAcao: string;
  proximaAcaoData: string;
  diagnostico?: DigitalAudit;
  tarefas: FollowUpTask[];
  historico: TimelineEvent[];
  propostaVinculadaId?: string;
  financeiro?: FinancialEntry;
}
