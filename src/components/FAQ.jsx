import React, { useState } from 'react';

const FAQ = () => {
  const [faqAberto, setFaqAberto] = useState(null);

  // Paleta unificada
  const coresEstatua = {
    azulGrafite: '#1A242F', // Tom denso para os títulos
    prataAco: '#94A3B8',    // Tom metálico para ícones e bordas
    cinzaFundo: '#F8FAFC',  // Fundo muito claro e limpo
    branco: '#FFFFFF'
  };

  const faqs = [
    {
      pergunta: "Como funciona o primeiro atendimento?",
      resposta: "O primeiro contato serve para entendermos o seu caso. Realizamos uma triagem inicial para direcionar a melhor estratégia jurídica."
    },
    {
      pergunta: "O atendimento pode ser 100% online?",
      resposta: "Sim. Utilizamos ferramentas seguras de videoconferência para atender clientes em qualquer localidade com a mesma eficiência."
    },
    {
      pergunta: "Quais documentos preciso apresentar?",
      resposta: "Isso varia conforme o caso. Após o agendamento, enviaremos uma lista objetiva do que é necessário para a análise inicial."
    },
    {
      pergunta: "Qual o prazo médio para resolução?",
      resposta: "Cada processo tem seu tempo, que depende do judiciário. Nosso compromisso é com a agilidade e acompanhamento constante."
    },
    {
      pergunta: "Como são definidos os honorários?",
      resposta: "Seguimos a tabela da OAB, considerando a complexidade e a urgência do caso, sempre com total transparência em contrato."
    }
  ];

  const toggleFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: coresEstatua.cinzaFundo }}>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h4 style={{ color: coresEstatua.prataAco }} className="font-serif-lux uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-2 md:mb-3 font-bold">
            Tire suas Dúvidas
          </h4>
          <h2 style={{ color: coresEstatua.azulGrafite }} className="font-serif-lux text-2xl md:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-[1px] bg-slate-300 mx-auto mt-6"></div>
        </div>

        <div className="space-y-1 md:space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-2">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group gap-4"
              >
                <span className={`font-serif-lux text-[13px] md:text-base tracking-wide transition-colors pr-2 ${faqAberto === index ? 'text-[#334155] font-bold' : 'text-[#1A242F] group-hover:text-slate-500'}`}>
                  {faq.pergunta}
                </span>
                
                {/* ÍCONE CIRCULAR EM PRATA/AÇO */}
                <span className={`flex-shrink-0 flex items-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full border transition-all duration-300 ${faqAberto === index ? 'bg-slate-800 border-slate-800 text-white rotate-45' : 'border-slate-300 text-slate-400 group-hover:border-slate-800 group-hover:text-slate-800'}`}>
                  <i className="ri-add-line text-sm md:text-base"></i>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${faqAberto === index ? 'max-h-40 opacity-100 pb-4 md:pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 font-sans-lux text-[12px] md:text-sm leading-relaxed pr-4 md:pr-8 border-l-2 border-slate-200 pl-4 ml-1">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;