import React from 'react';

const Hero = ({ cores }) => {
  return (
    <>
      <header 
        id="home" 
        className="h-[100svh] w-full flex items-end pb-2 md:items-center md:pb-0 relative overflow-hidden"
        style={{ backgroundColor: '#000000' }} 
      >
        
        {/* 1ª CAMADA: O Cenário (back-01.png) - 100% OPACIDADE */}
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-100"></div>

        {/* 2ª CAMADA: O Advogado (back02.png) - MOVIDO PARA A DIREITA NO DESKTOP */}
        <div className="absolute inset-0 z-10 bg-[url('/back02.png')] bg-contain bg-right_bottom md:bg-center bg-no-repeat pointer-events-none md:ml-40 opacity-100"></div>

        {/* CONTEÚDO (No topo de tudo, z-20) */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 z-20 md:mt-24">
          <div className="max-w-2xl text-center md:text-left px-2 md:px-0">
            
            <h1 className="font-serif-lux text-2xl md:text-5xl text-white leading-tight mb-3 md:mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,1)] relative z-20">
              Segurança jurídica construída com estratégia
            </h1>
            
            <p className="font-sans-lux text-white text-xs md:text-base leading-relaxed mb-6 md:mb-10 max-w-lg mx-auto md:mx-0 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,1)] relative z-20">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            <div className="inline-block relative z-20">
              {/* BOTÃO ATUALIZADO: PRATA COM LETRA PRETA */}
              <a 
                href="https://wa.me/5584998339633" 
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-serif-lux font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm group shadow-2xl"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #7a8c9f 0%, #ffffff 50%, #7a8c9f 100%)',
                  color: '#000000',
                  fontSize: '11px'
                }}
              >
                {/* Efeito de brilho que percorre o botão (Cintilante) */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                
                <span className="relative z-10">Falar com o advogado</span>
              </a>
            </div>

          </div>
        </div>
      </header>
      
      {/* DIVISOR PREMIUM */}
      <div className="divisor-premium"></div>

      {/* Adicione este CSS global ou no seu arquivo de estilos para o efeito shimmer */}
      <style jsx="true">{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default Hero;