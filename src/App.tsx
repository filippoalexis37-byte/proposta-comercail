import React, { useState } from 'react';
import { CommercialProposal, NicheType } from './types/proposal';
import { ProposalEngine } from './services/proposalEngine';
import { PrintProposalDocument } from './components/PrintProposalDocument';
import { 
  Eye, 
  Printer, 
  Send, 
  FileDown, 
  RotateCcw, 
  Check, 
  Briefcase, 
  Sparkles,
  PhoneCall,
  LayoutDashboard
} from 'lucide-react';

// Proposta Real para Lazaro Carvalho (Compra de Ouro) com Solução Consultiva e Robusta
export const mockProposalLazaro: CommercialProposal = {
  id: 'prop-0002',
  numeroProposta: 'PROPOSTA COMERCIAL Nº 0002',
  versao: 1,
  status: 'enviada',
  dataEmissao: '30/09/2026',
  validadeDias: 16,
  consultor: {
    nome: 'Lucas Santos',
    empresa: 'Santos MktPro',
    cargo: 'Head de Estratégia Digital',
    contato: 'contato@santosmktpro.com.br'
  },
  cliente: {
    empresa: 'Lazaro Carvalho — Compra de Ouro',
    responsavel: 'Lazaro Carvalho',
    nicho: 'compra_ouro',
    cidade: 'Campinas e Região',
    bairro: 'Centro',
    publicoAlvo: 'Pessoas com joias antigas, peças quebradas, cautelas de penhor da Caixa e moedas de ouro',
    objetivoPrincipal: 'Superar desconfiança, dominar o Google Maps e atrair avaliações de joias via WhatsApp'
  },
  diagnostico: [
    {
      id: 'd1',
      category: 'Google Maps',
      situacaoIdentificada: 'Baixa visibilidade para termos "compro ouro perto de mim"',
      impactoPotencial: 'Perda diária de clientes que buscam endereço físico com urgência para vender',
      oportunidade: 'Otimização com fotos de guichê seguro, balança calibrada e avaliações 5 estrelas',
      prioridade: 'alta'
    },
    {
      id: 'd2',
      category: 'Meta Ads',
      situacaoIdentificada: 'Sem captação ativa regional; dependência exclusiva do fluxo de rua',
      impactoPotencial: 'Falta de novos clientes que têm joias paradas sem saber o valor atual',
      oportunidade: 'Anúncios sofisticados de avaliação gratuita e cotação sem compromisso',
      prioridade: 'alta'
    }
  ],
  doresIdentificadas: [
    'Desconfiança natural do cliente em relação à pesagem e segurança física',
    'Não comunica cotação e avaliação gratuita transparente de forma atrativa',
    'Sem captação ativa, dependendo de quem passa na frente da loja',
    'Baixa visibilidade no Google Maps para "compro ouro perto de mim"',
    'Restrições de anúncios em plataformas exigindo abordagem estratégica e ética',
    'Necessidade urgente de transmitir segurança, solidez e credibilidade'
  ],
  objetivosEstrategia: [
    'Posicionar o negócio como autoridade e referência segura de avaliação na região',
    'Dominar as pesquisas de intenção imediata de venda no Google Maps',
    'Despertar oportunidades adormecidas via Meta Ads com foco em desapego e sigilo',
    'Direcionar todos os interessados para um atendimento acolhedor e ágil no WhatsApp'
  ],
  estrategiaRecomendada: '',
  servicosSelecionados: ['google_business', 'meta_ads'],
  detalhamentoServicos: [],
  itensInvestimento: [
    {
      servico: 'Meta Ads (Instagram & Facebook Estratégico)',
      descricao: 'Campanhas hiperlocais focadas em avaliação gratuita, sigilo e pagamento imediato via PIX',
      periodicidade: 'Mensal',
      valor: 600
    },
    {
      servico: 'Google Business Profile (Google Meu Negócio & Maps)',
      descricao: 'Otimização de presença no mapa, fotos do ambiente seguro e rotina de avaliações 5 estrelas',
      periodicidade: 'Mensal',
      valor: 200
    }
  ],
  descontoAplicado: 0,
  condicoesPagamento: {
    forma: 'Pagamento mensal via PIX',
    parcelamento: 'Mensalidade recorrente sem fidelidade',
    vencimento: 'Início em até 7 dias úteis após aprovação'
  },
  naoIncluso: [
    'Verba de mídia paga diretamente às plataformas (Google/Meta)',
    'Materiais gráficos físicos impressos'
  ]
};

// Resolver detalhamento com a estratégia profunda
mockProposalLazaro.detalhamentoServicos = ProposalEngine.resolverDetalhamentoServicos(
  'compra_ouro', 
  ['google_business', 'meta_ads']
);

export default function App() {
  const [proposal, setProposal] = useState<CommercialProposal>(mockProposalLazaro);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const texto = `Olá, Lazaro! Segue a proposta comercial consultiva atualizada da Santos MktPro com a estratégia completa para Compra de Ouro. Ficamos à disposição para iniciar!`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* BARRA SUPERIOR (NO-PRINT) */}
      <header className="no-print bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">
              S
            </div>
            <div>
              <h1 className="font-extrabold text-white text-sm">SANTOS MKTPRO</h1>
              <span className="text-xs text-amber-400 font-medium">Proposta Comercial Consultiva • Lazaro Carvalho</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow transition-all"
            >
              <FileDown className="w-4 h-4" /> Gerar / Baixar PDF
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" /> Imprimir
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow"
            >
              <Send className="w-4 h-4" /> Enviar WhatsApp
            </button>
          </div>
        </div>
      </header>

      {/* ÁREA DA PROPOSTA IMPRIMÍVEL */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
          <PrintProposalDocument proposal={proposal} />
        </div>
      </main>
    </div>
  );
}
