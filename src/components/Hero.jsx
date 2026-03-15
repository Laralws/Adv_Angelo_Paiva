import React from 'react';

const Hero = ({ cores }) => {
  // Mantendo a sua frase estratégica de consultoria
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <>
      <header 
        id="home" 
        className="h-[100svh] w-full flex items-end pb-12 md:items-center md:pb-0 relative overflow-hidden"
        style={{ backgroundColor: '#000000' }} 
      >
        
        {/* 1ª CAMADA: Cenário (back-01.png) - bg-cover é ideal aqui */}
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-100"></div>

        {/* 2ª CAMADA: O Advogado (back02.png) - IMAGEM RESPONSIVA */}
        <div className="absolute inset-0 z-10 flex items-end justify-center md:justify-end pointer-events-none">
          <img 
            src="/back02.png" 
            alt="Ângelo Paiva" 
            className="
              /* Mobile: imagem menor e centralizada embaixo */
              w-auto h-[55%] md:h-[80%] 
              /* Tablet e Desktop: maior e alinhada à direita */
              md:mr-[5%] lg:mr-[10%] 
              /* Evita que a imagem cubra o texto no mobile */
              opacity-100 
            "
          />
        </div>

        {/* GRADIENTE DE CONTRASTE: Garante leitura do texto no mobile */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden"></div>

        {/* CONTEÚDO */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 z-20 md:mt-24 mb-10 md:mb-0">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            
            <h1 className="font-serif-lux text-3xl md:text-6xl text-white leading-tight mb-4 md:mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
              Segurança jurídica <br className="hidden md:block"/> construída com estratégia
            </h1>
            
            <p className="font-sans-lux text-white text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,1)] opacity-95">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            <div className="inline-block relative z-30">
              {/* BOTÃO ATUALIZADO: PRATA ACETINADO COM LETRA PRETA */}
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
                {/* Efeito shimmer (Cintilante) */}
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