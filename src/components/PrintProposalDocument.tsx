import React from 'react';
import { CommercialProposal } from '../types/proposal';
import { ProposalEngine } from '../services/proposalEngine';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface Props {
  proposal: CommercialProposal;
}

export const PrintProposalDocument: React.FC<Props> = ({ proposal }) => {
  const totalInvestimento = proposal.itensInvestimento.reduce((acc, curr) => acc + curr.valor, 0) - proposal.descontoAplicado;

  return (
    <div className="bg-white text-slate-800 font-sans max-w-[210mm] mx-auto text-sm leading-relaxed p-8 print:p-0">
      
      {/* 1. CABEÇALHO EXECUTIVO */}
      <header className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center font-black text-amber-400 text-xl">
            S
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-950 tracking-wider">SANTOS MKTPRO</h1>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">
              Estratégia & Inteligência Comercial
            </span>
          </div>
        </div>
        <div className="text-right text-xs">
          <span className="font-extrabold text-slate-900 text-sm block">{proposal.numeroProposta}</span>
          <span className="text-slate-500">{proposal.dataEmissao} • Versão {proposal.versao}</span>
        </div>
      </header>

      {/* 2. DADOS DO CLIENTE */}
      <section className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 grid grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-slate-500 block uppercase font-bold text-[10px]">Cliente / Empresa</span>
          <strong className="text-slate-900 text-sm">{proposal.cliente.empresa}</strong>
          <span className="text-slate-600 block mt-0.5">Responsável: {proposal.cliente.responsavel || 'Diretoria'}</span>
        </div>
        <div>
          <span className="text-slate-500 block uppercase font-bold text-[10px]">Segmento & Localização</span>
          <strong className="text-amber-800 text-sm capitalize">{proposal.cliente.nicho.replace('_', ' ')}</strong>
          <span className="text-slate-600 block mt-0.5">{proposal.cliente.bairro}, {proposal.cliente.cidade}</span>
        </div>
      </section>

      {/* 3. GARGALOS IDENTIFICADOS NO DIAGNÓSTICO */}
      <section className="mb-6 space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-l-4 border-amber-500 pl-2">
          Gargalos Identificados — {proposal.cliente.nicho.replace('_', ' ')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {proposal.doresIdentificadas.map((dor, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded bg-amber-50/50 border border-amber-200/60 text-slate-800">
              <span className="text-amber-600 font-bold">•</span>
              <span>{dor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NOSSA SOLUÇÃO ESTRATÉGICA (CONSULTIVA E DETALHADA) */}
      <section className="mb-6 space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h2 className="text-base font-black text-slate-950 uppercase tracking-wide flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-700" /> Nossa Solução Estratégica
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {ProposalEngine.gerarEstrategiaRecomendada(proposal)}
          </p>
        </div>

        {/* DETALHAMENTO CIRÚRGICO DE CADA SERVIÇO */}
        <div className="space-y-4">
          {proposal.detalhamentoServicos.map((serv, index) => (
            <div key={index} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-indigo-900 text-white flex items-center justify-center text-[10px]">
                    {index + 1}
                  </span>
                  {serv.nome}
                </h3>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Ação Personalizada
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">Objetivo Estratégico:</strong>
                  <p className="text-slate-600">{serv.objetivo}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">Por que foi escolhido:</strong>
                  <p className="text-slate-600">{serv.porQueFoiEscolhido}</p>
                </div>
              </div>

              <div className="text-xs space-y-1">
                <strong className="text-slate-900 block font-semibold">O Que Será Executado:</strong>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  {serv.oQueSeraFeito.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2 border-t">
                <div>
                  <strong className="text-slate-900 block font-semibold">Como Será Acompanhado:</strong>
                  <p className="text-slate-600">{serv.comoSeraAcompanhado}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">Indicadores Acompanhados:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {serv.indicadores.map((ind, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] border border-slate-200">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TABELA DE INVESTIMENTO */}
      <section className="mb-6 space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-l-4 border-amber-500 pl-2">
          Investimento Comercial
        </h2>
        <table className="w-full text-left border-collapse border border-slate-200 text-xs">
          <thead>
            <tr className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
              <th className="p-2.5 border border-slate-200">Serviço</th>
              <th className="p-2.5 border border-slate-200">Periodicidade</th>
              <th className="p-2.5 border border-slate-200 text-right w-28">Total</th>
            </tr>
          </thead>
          <tbody>
            {proposal.itensInvestimento.map((item, idx) => (
              <tr key={idx} className="border-b border-slate-200">
                <td className="p-2.5 font-bold text-slate-900 border border-slate-200">{item.servico}</td>
                <td className="p-2.5 border border-slate-200 text-slate-600">{item.periodicidade}</td>
                <td className="p-2.5 border border-slate-200 text-right font-bold text-slate-900">
                  {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
              </tr>
            ))}
            <tr className="bg-slate-50 font-black text-slate-950">
              <td colSpan={2} className="p-2.5 border border-slate-200 text-right uppercase text-[11px]">Investimento Total</td>
              <td className="p-2.5 border border-slate-200 text-right text-sm text-indigo-950">
                {totalInvestimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 6. CONDIÇÕES E OBSERVAÇÕES */}
      <section className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 mb-8">
        <h3 className="font-bold text-slate-900">Condições e Observações:</h3>
        <p className="text-slate-700">Forma de pagamento: <strong>{proposal.condicoesPagamento.forma}</strong>.</p>
        <p className="text-slate-700">Início operacional: <strong>Em até 7 dias úteis após aprovação</strong>.</p>
        <p className="text-amber-800 font-semibold">* Proposta válida até 16/10/2026.</p>
      </section>

      {/* 7. RODAPÉ INSTITUCIONAL COM AUTORIA E DIREITOS RESERVADOS */}
      <footer className="border-t border-slate-300 pt-6 text-center text-xs text-slate-500 space-y-1">
        <div className="font-bold text-slate-800 text-sm">
          Santos MktPro — Estratégia Comercial & Inteligência Digital
        </div>
        <p className="text-[11px] text-slate-500">
          Documento confidencial elaborado exclusivamente para uso do cliente. Proibida a reprodução sem autorização prévia.
        </p>
        <p className="text-[10px] text-slate-400 font-semibold pt-1">
          © 2026 Santos MktPro. Criado por Santos MktPro. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
};
