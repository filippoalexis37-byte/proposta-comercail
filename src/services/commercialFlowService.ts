import { LeadRecord, DigitalAudit, TimelineEvent } from '../types/commercialOS';

export class CommercialFlowService {
  static processarDiagnostico(audit: Partial<DigitalAudit>): { servicos: string[]; dores: string[] } {
    const servicos: string[] = [];
    const dores: string[] = [];

    if (audit.googleMeuNegocio?.status !== 'otimizado') {
      servicos.push('Google Perfil de Empresa (Maps)');
      dores.push('Baixa presença e poucas avaliações nas buscas locais do Google');
    }

    if (!audit.siteLandingPage?.possui || audit.siteLandingPage.tipo !== 'landing_page') {
      servicos.push('Landing Page de Alta Conversão');
      dores.push('Inexistência de página rápida com foco em conversão e WhatsApp');
    }

    if (!audit.anuncios?.googleAds) {
      servicos.push('Tráfego Pago Google Ads');
      dores.push('Perda de clientes que já estão buscando ativamente pelo serviço na cidade');
    }

    if (!audit.anuncios?.metaAds && audit.instagram?.status !== 'ativo') {
      servicos.push('Meta Ads (Instagram & Facebook)');
      dores.push('Falta de alcance e atração de novos potenciais clientes da região');
    }

    if (audit.whatsapp?.tempoRespostaMedio === 'lenta' || !audit.whatsapp?.possuiBot) {
      servicos.push('Automação e Triagem WhatsApp');
      dores.push('Demora no primeiro atendimento de interessados');
    }

    return { servicos, dores };
  }

  static calcularCondicoesComerciais(servicosSelecionados: { nome: string; valor: number; tipo: 'setup' | 'mensal' }[], cupomDesconto: number = 0) {
    const setupTotal = servicosSelecionados
      .filter(s => s.tipo === 'setup')
      .reduce((acc, s) => acc + s.valor, 0);

    const mensalTotal = servicosSelecionados
      .filter(s => s.tipo === 'mensal')
      .reduce((acc, s) => acc + s.valor, 0);

    const subtotal = setupTotal + mensalTotal;
    const valorComDesconto = Math.max(0, subtotal - cupomDesconto);
    const entradaSugerida = setupTotal > 0 ? (setupTotal / 2) + mensalTotal : valorComDesconto;
    const saldoSugerido = valorComDesconto - entradaSugerida;

    return {
      subtotal,
      desconto: cupomDesconto,
      valorFinal: valorComDesconto,
      recorrenciaMensal: mensalTotal,
      taxaSetup: setupTotal,
      entrada: entradaSugerida,
      saldo: saldoSugerido
    };
  }

  static registrarEventoHistorico(lead: LeadRecord, tipo: TimelineEvent['tipo'], titulo: string, descricao: string): LeadRecord {
    const novoEvento: TimelineEvent = {
      id: `evt-${Date.now()}`,
      dataHora: new Date().toLocaleString('pt-BR'),
      tipo,
      titulo,
      descricao,
      usuario: 'Lucas Santos'
    };

    return {
      ...lead,
      ultimaInteracao: new Date().toLocaleDateString('pt-BR'),
      historico: [novoEvento, ...lead.historico]
    };
  }
}
