import React from 'react';

const Hero = ({ cores }) => {
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <>
      <header 
        id="home" 
        className="h-[100svh] w-full flex items-center relative overflow-hidden"
        style={{ backgroundColor: '#050C16' }} 
      >
        
        {/* 1ª CAMADA: Cenário de fundo */}
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-40 md:opacity-100"></div>

        {/* 2ª CAMADA: O Advogado - CENTRALIZADO E GRANDE NO MOBILE */}
        <div className="absolute inset-0 z-10 flex items-end justify-center md:justify-end pointer-events-none">
          <img 
            src="/back02.png" 
            alt="Ângelo Paiva" 
            className="
              /* Mobile: Ocupa quase a tela toda, centralizado */
              w-auto h-[85%] object-contain object-bottom
              /* Desktop: Vai para a direita */
              md:h-[95%] md:mr-[5%] lg:mr-[10%] 
              opacity-100 
            "
          />
        </div>

        {/* GRADIENTE ESCURO: Crucial para ler o texto sobre a roupa do advogado */}
        <div className="absolute inset-0 z-15 bg-black/40 md:bg-transparent"></div>
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#050C16] via-transparent to-transparent opacity-80"></div>

        {/* CONTEÚDO: Agora centralizado verticalmente sobre a foto */}
        <div className="w-full max-w-6xl mx-auto px-6 z-20 relative">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            
            <h1 className="font-serif-lux text-[32px] md:text-6xl text-white leading-[1.1] mb-4 md:mb-6 drop-shadow-2xl">
              Segurança jurídica <br /> construída com estratégia
            </h1>
            
            <p className="font-sans-lux text-white text-[14px] md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm md:max-w-lg mx-auto md:mx-0 font-light drop-shadow-md">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            <div className="inline-block relative z-30">
              <a 
                href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-serif-lux font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-lg group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                  color: '#000000',
                  fontSize: '11px'
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                <span className="relative z-10">Agendar Consultoria</span>
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