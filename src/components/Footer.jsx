import React from 'react';

const Footer = ({ cores }) => {
  return (
    <footer className="pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/10" style={{ backgroundColor: cores.azulNoite }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10 md:mb-12">
          
          {/* COLUNA 1: Logo e Descrição */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:col-start-2 text-center md:text-left flex flex-col items-center md:items-start">
            <img src="/logo-AP.png" alt="Ângelo Paiva" className="h-12 md:h-16 w-auto mb-6 md:mb-10 opacity-90" />
            <p className="text-[#EFE6DA]/70 font-sans-lux text-[11px] md:text-[12px] leading-relaxed px-4 md:px-0 md:pr-10">
              Ângelo Paiva — Advocacia Estratégica & Defesa de Alta Performance. Atuação em todo o Brasil.
            </p>
          </div>

          {/* COLUNA 2: Acompanhe (Tons de Prata) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:col-start-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-[#94A3B8] font-serif-lux text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6 font-bold">Acompanhe</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/angelopaivaadv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-[#EFE6DA]/20 flex items-center justify-center text-[#EFE6DA] hover:border-[#94A3B8] hover:text-[#94A3B8] hover:bg-white/5 transition-all">
                <i className="ri-instagram-line text-base md:text-sm"></i>
              </a>
              <a href="https://wa.me/5584998339633" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-[#EFE6DA]/20 flex items-center justify-center text-[#EFE6DA] hover:border-[#94A3B8] hover:text-[#94A3B8] hover:bg-white/5 transition-all">
                <i className="ri-whatsapp-line text-base md:text-sm"></i>
              </a>
            </div>
          </div>
          
        </div>

        {/* LINHA INFERIOR (Copyright e Link Include) */}
        <div className="border-t border-white/5 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 lg:px-8">
          <p className="text-[9px] md:text-[10px] text-[#EFE6DA]/40 uppercase tracking-[0.1em] md:tracking-[0.2em] font-sans-lux text-center">
            &copy; {new Date().getFullYear()} Ângelo Paiva. Desenvolvido por {' '}
            <a 
              href="https://includeengenharia.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
            >
              INCLUDE ENGENHARIA
            </a>.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#EFE6DA]/40 hover:text-white text-[9px] md:text-[10px] uppercase tracking-widest transition-all font-sans-lux flex items-center gap-2 py-2 px-4 border border-white/10 rounded-full md:border-none md:p-0"
          >
            Voltar ao topo <i className="ri-arrow-up-line"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;