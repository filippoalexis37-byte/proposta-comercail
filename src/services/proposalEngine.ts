import { CommercialProposal, NicheType, ServiceType, ServiceDetail } from '../types/proposal';
import { NICHE_SERVICE_STRATEGIES } from '../data/nicheStrategies';

export class ProposalEngine {
  static gerarResumoExecutivo(prop: CommercialProposal): string {
    const dores = prop.doresIdentificadas.length > 0 
      ? prop.doresIdentificadas.join(', ')
      : 'oportunidades pontuais de presença digital';
    
    return `Com base nas informações levantadas sobre a empresa ${prop.cliente.empresa}, identificamos oportunidades fundamentais no segmento de ${prop.cliente.nicho.replace('_', ' ')}. O plano estratégico tem como objetivo atacar diretamente gargalos como ${dores}, estruturando canais de atração qualificada e segurança comercial na cidade de ${prop.cliente.cidade}.`;
  }

  static gerarEstrategiaRecomendada(prop: CommercialProposal): string {
    if (prop.cliente.nicho === 'compra_ouro') {
      return `A estratégia recomendada para a ${prop.cliente.empresa} ataca a principal barreira do mercado de ouro: o medo e a desconfiança. Unimos o Google Meu Negócio para captar quem já tem urgência em vender com máxima reputação no mapa, e o Meta Ads regional para despertar quem possui peças paradas em casa, sempre direcionando para um atendimento sigiloso e acolhedor via WhatsApp.`;
    }

    return `A estratégia para a ${prop.cliente.empresa} (${prop.cliente.nicho.replace('_', ' ')}) foca na integração dos canais contratados para gerar previsibilidade de contatos em ${prop.cliente.cidade}, com foco em ${prop.cliente.objetivoPrincipal.toLowerCase()}.`;
  }

  static resolverDetalhamentoServicos(nicho: NicheType, servicos: ServiceType[]): ServiceDetail[] {
    return servicos.map(sId => {
      const customizado = NICHE_SERVICE_STRATEGIES.find(n => n.nicho === nicho && n.servico === sId);
      if (customizado) {
        return {
          serviceId: sId,
          nome: customizado.servico === 'google_business' ? 'Google Perfil de Empresa (Google Meu Negócio & Maps)' :
                customizado.servico === 'meta_ads' ? 'Meta Ads Estratégico (Instagram & Facebook)' :
                customizado.servico === 'google_ads' ? 'Tráfego Pago Google Ads (Rede de Pesquisa)' : customizado.servico.toUpperCase(),
          objetivo: customizado.objetivo,
          oQueSeraFeito: customizado.oQueSeraFeito,
          comoSeraExecutado: customizado.comoSeraExecutado,
          porQueFoiEscolhido: customizado.porQueFoiEscolhido,
          comoSeraAcompanhado: customizado.comoSeraAcompanhado,
          indicadores: customizado.indicadores
        };
      }

      return {
        serviceId: sId,
        nome: sId.replace('_', ' ').toUpperCase(),
        objetivo: 'Buscar ampliação da presença digital e geração de oportunidades para o negócio.',
        oQueSeraFeito: [
          'Diagnóstico preliminar e mapeamento de personas locais',
          'Configurações técnicas e de rastreamento',
          'Otimização periódica baseada em métricas consolidadas'
        ],
        comoSeraExecutado: 'Planejamento semanal e validação prévia de materiais.',
        porQueFoiEscolhido: 'Identificado no diagnóstico como peça importante para a maturidade digital.',
        comoSeraAcompanhado: 'Relatórios periódicos de métricas reais.',
        indicadores: ['Interações qualificadas', 'Contatos gerados']
      };
    });
  }
}
