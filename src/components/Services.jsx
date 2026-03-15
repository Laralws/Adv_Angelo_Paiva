import React from 'react'; 
import { useInView } from 'react-intersection-observer'; 

const Services = ({ cores }) => {
  
  const { ref, inView: servicosVisiveis } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const areasAtuacao = [
    {
      titulo: "Direito Penal Econômico",
      descricao: "Atuação especializada na defesa de empresas e executivos em crimes contra a ordem tributária, sistema financeiro e lavagem de capitais.",
      icone: "ri-scales-3-line"
    },
    {
      titulo: "Medidas de Liberdade",
      descricao: "Atuação ágil e estratégica em pedidos de habeas corpus, revogação de prisões preventivas e temporárias, focada na garantia dos direitos fundamentais.",
      icone: "ri-key-2-line"
    },
    {
      titulo: "Defesas em Processos Criminais",
      descricao: "Representação técnica e humanizada em todas as fases do processo penal, garantindo o contraditório e a ampla defesa.",
      icone: "ri-shield-cross-line"
    },
    {
      titulo: "Atuação Cível",
      descricao: "Assessoria jurídica na prevenção e solução de conflitos. Foco na defesa dos interesses patrimoniais e obrigacionais de pessoas físicas e jurídicas. Consultoria preventiva, elaboração de peças processuais e condução de demandas judiciais e extrajudiciais.",
      icone: "ri-line-chart-line"
    },
    {
      titulo: "Consultoria Jurídica Preventiva",
      descricao: "Orientação estratégica para prevenção de riscos e tomada de decisões mais seguras no âmbito empresarial e patrimonial.",
      icone: "ri-briefcase-line"
    },
    {
      titulo: "Elaboração e Revisão de Contratos",
      descricao: "Análise jurídica de contratos de compra, venda, locação e demais negociações para garantir segurança na operação.",
      icone: "ri-file-text-line"
    }
  ];

  return (
    <section 
      id="servicos" 
      ref={ref} 
      className="relative py-16 md:py-24 bg-fixed bg-center bg-cover overflow-hidden" 
      style={{ 
        backgroundImage: "url('/back-02.png')"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 w-full">
        
        <div className={`mb-10 md:mb-16 text-center transition-all duration-1000 ${servicosVisiveis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}> 
          <h4 style={{ color: cores.cinzaExecutivo }} className="font-serif-lux uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] mb-3 md:mb-4 opacity-80">
            Especialidades
          </h4>
          <h2 className="font-serif-lux text-2xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
            Áreas de Atuação
          </h2>
          <div style={{ backgroundColor: cores.cinzaExecutivo }} className="w-16 md:w-24 h-[1px] mx-auto opacity-50 shadow-[0_0_10px_rgba(141,144,149,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {areasAtuacao.map((area, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-black/50 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-sm transition-all duration-500 hover:bg-black/70 flex flex-col justify-between ${servicosVisiveis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              {/* Efeito de brilho de fundo no card */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]"></div>
              
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-white/5 border border-white/30 transition-colors group-hover:border-white/60">
                  <i className={`${area.icone} text-white text-lg md:text-xl`}></i>
                </div>

                <h3 className="font-serif-lux text-base md:text-lg text-white mb-3 tracking-wide group-hover:text-gray-300 transition-colors leading-snug">
                  {area.titulo}
                </h3>

                <p className="text-gray-200 font-channe-lux text-[14px] md:text-[15px] leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity text-justify">
                  {area.descricao}
                </p>
              </div>
              
              {/* CORREÇÃO DO SAIBA MAIS: Removido as bordas individuais e o brilho "quadrado" */}
              <a 
                href={`https://wa.me/5584998339633?text=Olá Dr. Ângelo Paiva, gostaria de saber mais sobre: ${area.titulo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-serif-lux text-[10px] uppercase tracking-[0.2em] w-fit mt-auto pt-4 group/link transition-all duration-300"
                style={{ color: cores.cinzaExecutivo }}
              >
                <div className="flex flex-col">
                  <span className="group-hover/link:text-white transition-colors duration-300">
                    Saiba Mais
                  </span>
                  {/* Linha de brilho refletível que cresce no hover */}
                  <div className="h-[1px] w-0 group-hover/link:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_white]"></div>
                </div>
                
                {/* Ícone do WhatsApp integrado ao fluxo, sem ser excluído */}
                <i className="ri-whatsapp-line text-base group-hover/link:text-white group-hover/link:scale-110 transition-all duration-300"></i>
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;