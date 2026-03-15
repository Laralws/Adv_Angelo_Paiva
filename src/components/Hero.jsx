import React from 'react';

const Hero = ({ cores }) => {
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <>
      <header 
        id="home" 
        className="min-h-[100svh] w-full flex flex-col md:flex-row md:items-center relative overflow-hidden pt-20 md:pt-0"
        style={{ backgroundColor: '#050C16' }} 
      >
        
        {/* FUNDO (Cenário/Prédios) */}
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-20 md:opacity-100"></div>

        {/* CONTAINER PRINCIPAL RESPONSIVO */}
        <div className="w-full max-w-6xl mx-auto px-6 z-20 flex flex-col items-center md:flex-row md:justify-between relative h-full">
          
          {/* IMAGEM DO ADVOGADO: PRIMEIRO NO MOBILE, DIREITA NO DESKTOP */}
          <div className="w-full md:absolute md:inset-0 md:z-10 flex justify-center md:justify-end items-end pointer-events-none order-1 md:order-2">
            <img 
              src="/back02.png" 
              alt="Ângelo Paiva" 
              className="w-auto h-[35vh] sm:h-[45vh] md:h-[85vh] lg:h-[95vh] object-contain object-bottom md:mr-[5%]"
            />
          </div>

          {/* TEXTO E BOTÃO: ABAIXO DA IMAGEM NO MOBILE */}
          <div className="w-full md:max-w-2xl text-center md:text-left mt-6 md:mt-24 order-2 md:order-1 relative z-30 pb-12 md:pb-0">
            
            <h1 className="font-serif-lux text-[28px] sm:text-[36px] md:text-6xl text-white leading-[1.2] mb-4 md:mb-6 font-bold uppercase tracking-tight">
              Segurança jurídica <br className="hidden md:block"/> construída com estratégia
            </h1>
            
            <p className="font-sans-lux text-white text-[14px] sm:text-[16px] md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm md:max-w-lg mx-auto md:mx-0 font-light opacity-90">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            <div className="inline-block">
              <a 
                href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-serif-lux font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-lg group shadow-2xl"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                  color: '#000000',
                  fontSize: '11px'
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                <span className="relative z-10">Falar com o advogado</span>
              </a>
            </div>

          </div>
        </div>

        {/* GRADIENTE DE FINALIZAÇÃO NO MOBILE */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#050C16] via-transparent to-transparent md:hidden"></div>
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