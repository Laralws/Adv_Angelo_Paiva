import React from 'react';

const Hero = ({ cores }) => {
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <>
      <header 
        id="home" 
        className="h-[100svh] w-full flex items-end md:items-center relative overflow-hidden pb-12 md:pb-0"
        style={{ backgroundColor: '#050C16' }} 
      >
        
        {/* 1ª CAMADA: Cenário de fundo */}
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>

        {/* 2ª CAMADA: O Advogado */}
        <div className="absolute inset-0 z-10 flex items-end justify-center md:justify-end">
          <img 
            src="/back02.png" 
            alt="Ângelo Paiva" 
            className="
              w-auto h-[90svh] max-w-none scale-125 -translate-x-[20%] 
              md:scale-100 md:translate-x-0 md:h-[95svh] md:mr-[5%]
              object-contain object-bottom pointer-events-none
            "
          />
        </div>

        {/* GRADIENTE: Escurecido na base para facilitar a leitura do texto em baixo */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#050C16] via-[#050C16]/80 to-transparent md:via-[#050C16]/40"></div>

        {/* CONTEÚDO: Ajustado para ficar embaixo no mobile */}
        <div className="w-full max-w-6xl mx-auto px-6 z-20 relative">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            
            {/* Título menor no mobile (text-[22px]) */}
            <h1 className="font-serif-lux text-[22px] sm:text-[26px] md:text-6xl text-white leading-[1.2] mb-3 md:mb-6 drop-shadow-2xl font-bold uppercase tracking-tight">
              Segurança jurídica <br className="hidden md:block"/> construída com estratégia
            </h1>
            
            {/* Parágrafo menor no mobile (text-[13px]) */}
            <p className="font-sans-lux text-white text-[13px] sm:text-[14px] md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xs sm:max-w-sm md:max-w-lg mx-auto md:mx-0 font-light drop-shadow-md opacity-90">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            {/* Botão mais compacto no mobile */}
            <div className="inline-block relative z-30">
              <a 
                href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 overflow-hidden font-serif-lux font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-lg group shadow-2xl"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                  color: '#000000',
                  fontSize: '10px' // Diminuído de 11px para 10px
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                <span className="relative z-10">Falar com o advogado</span>
              </a>
            </div>

          </div>
        </div>
      </header>
      
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