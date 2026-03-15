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
        <div className="absolute inset-0 z-0 bg-[url('/back-01.png')] bg-cover bg-center bg-no-repeat opacity-30 md:opacity-100"></div>

        {/* 2ª CAMADA: O Advogado - ZOOM FORÇADO PARA ESTICAR TOTALMENTE NO MOBILE */}
        <div className="absolute inset-0 z-10 
          /* Mobile: Força a imagem a esticar 100% na largura e altura */
          bg-[url('/back02.png')] bg-no-repeat 
          bg-[length:100%_100%] bg-[position:center_bottom]
          
          /* Tablet: Mantém o preenchimento mas com ajuste de corte (cover) */
          sm:bg-[length:cover] sm:bg-[position:center_top]
          
          /* Desktop: Volta ao padrão original para não distorcer */
          md:bg-[length:contain] md:bg-right-bottom md:mr-[5%]
          pointer-events-none"
        ></div>

        {/* GRADIENTE DE ESCURECIMENTO: Garante que o texto seja legível sobre a imagem esticada */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#050C16] via-[#050C16]/60 to-transparent md:bg-none"></div>

        {/* CONTEÚDO */}
        <div className="w-full max-w-6xl mx-auto px-6 z-20 relative pt-20 md:pt-0">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            
            <h1 className="font-serif-lux text-[32px] sm:text-[42px] md:text-6xl text-white leading-[1.1] mb-4 md:mb-6 drop-shadow-2xl font-bold uppercase tracking-tight">
              Segurança jurídica <br className="hidden md:block"/> construída com estratégia
            </h1>
            
            <p className="font-sans-lux text-white text-[15px] sm:text-[17px] md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm md:max-w-lg mx-auto md:mx-0 font-light drop-shadow-md">
              Orientação estratégica para empresas e profissionais que precisam agir com segurança e previsibilidade.
            </p>
            
            <div className="inline-block relative z-30">
              <a 
                href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-serif-lux font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-lg group shadow-[0_10px_30_rgba(0,0,0,0.5)]"
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