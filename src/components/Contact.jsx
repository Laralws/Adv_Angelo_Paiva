import React from 'react';

const Contact = () => {
  const coresEstatua = {
    azulGrafite: '#1A242F',
    prataBase: '#A7B7C8',    
    brilhoMaximo: '#FFFFFF', 
    azulFundo: '#050C16'
  };

  const estiloAcoSolida = {
    backgroundImage: `linear-gradient(135deg, #7a8c9f 0%, #ffffff 50%, #7a8c9f 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'contrast(1.6) brightness(1.2) drop-shadow(0 2px 10px rgba(255,255,255,0.2))'
  };

  return (
    <section 
      id="contato" 
      className="relative w-full py-20 md:py-32 bg-cover bg-center flex items-center overflow-hidden" 
      style={{ backgroundImage: "url('/back-04.png')", backgroundColor: coresEstatua.azulFundo }}
    >
      <div className="absolute inset-0 bg-black/65 z-0"></div>
      
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        
        {/* LADO ESQUERDO: Textos Claros */}
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <div className="w-12 h-[2px] bg-white mb-6 mx-auto md:mx-0 opacity-100"></div>
          
          <h5 className="font-serif-lux text-white leading-tight mb-8">
            <span className="text-xl md:text-3xl block mb-2 uppercase tracking-wide opacity-100">
              Seus interesses e seu patrimônio exigem
            </span>
            <span className="text-2xl md:text-[38px] block font-semibold uppercase tracking-tight opacity-100">
              Base jurídica <span style={estiloAcoSolida} className="inline-block font-bold">sólida</span>
            </span>
          </h5>
          
          <p className="text-white font-sans-lux text-[14px] md:text-base leading-relaxed mb-10 opacity-100">
            Em questões jurídicas complexas, o tempo e a estratégia são os seus maiores aliados. Antecipe riscos e tenha a tranquilidade de contar com uma advocacia focada em resultados.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-white">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white bg-white/10">
              <i className="ri-shield-star-line text-xl md:text-2xl text-white"></i>
            </div>
            <span className="font-serif-lux text-[9px] md:text-[11px] uppercase tracking-widest text-left leading-tight opacity-100">
              Sigilo, Estratégia<br className="md:hidden"/> e Agilidade.
            </span>
          </div>
        </div>

        {/* LADO DIREITO: Card */}
        <div className="md:justify-self-end w-full max-w-md bg-white/[0.05] backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl mx-auto md:mx-0">
          <div className="text-center mb-6 md:mb-8">
            <h4 className="text-white font-sans-lux uppercase tracking-[0.3em] text-[10px] font-bold mb-2 opacity-100">
              Plantão e Atendimento
            </h4>
            <h3 className="font-serif-lux text-2xl md:text-3xl text-white leading-tight opacity-100">
              Fale com o advogado
            </h3>
            <p className="text-white font-sans-lux text-xs mt-4 opacity-100">
              Atuação 100% digital em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="tel:+5584998339633" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-sans-lux text-[10px] font-bold uppercase tracking-wider shadow-lg">
              <i className="ri-phone-fill text-lg"></i> Ligar
            </a>
            <a href="https://www.instagram.com/angelopaivaadv/" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-sans-lux text-[10px] font-bold uppercase tracking-wider shadow-lg">
              <i className="ri-instagram-line text-lg"></i> Instagram
            </a>
          </div>

          {/* BOTÃO WHATSAPP: PRATA COM TEXTO PRETO ABSOLUTO */}
          <a 
            href="https://wa.me/5584998339633" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-full py-4 rounded-xl font-sans-lux font-bold text-[11px] md:text-[13px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 overflow-hidden hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-2 shadow-2xl border border-white/40 animate-piscarBotao"
            style={{ 
              backgroundColor: coresEstatua.prataBase,
              color: '#000000', // Texto preto absoluto
            }}
          >
            {/* Efeito shimmer (brilho corrido) */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-brilhoCorrido"></div>
            </div>
            
            {/* Ícone também em preto */}
            <i className="ri-whatsapp-line text-xl relative z-10" style={{ color: '#000000' }}></i> 
            <span className="relative z-10 font-black">Agendar Consultoria</span>
          </a>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes brilhoCorrido {
          0% { transform: translateX(-100%); }
          30% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes piscarBotao {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
          100% { filter: brightness(1); }
        }
        .animate-brilhoCorrido {
          animation: brilhoCorrido 3s infinite ease-in-out;
        }
        .animate-piscarBotao {
          animation: piscarBotao 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;