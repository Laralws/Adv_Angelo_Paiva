import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fecharMenu = () => setMenuAberto(false);

  const menuItems = [
    { nome: 'home', link: 'home' },
    { nome: 'sobre', link: 'sobre' },
    { nome: 'serviços', link: 'servicos' },
    { nome: 'contato', link: 'contato' },
    { nome: 'faq', link: 'faq' }
  ];

  // MENSAGEM ATUALIZADA: Identificação de origem + Sofisticação
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full flex justify-center transition-all duration-500 z-[1000] 
          ${scrolled || menuAberto 
            ? "bg-[#050C16]/95 backdrop-blur-md shadow-2xl py-3 md:py-4" 
            : "bg-gradient-to-b from-black/80 to-transparent py-6 md:py-8"
          }`}
      >
        <div className="w-full max-w-6xl flex justify-between items-center px-6 md:px-10">
          <div className="flex-shrink-0">
            <a href="#home">
              <img 
                src="/logo-AP.png" 
                alt="Ângelo Paiva" 
                className={`w-auto transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-14 md:h-18"}`} 
              />
            </a>
          </div>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8 text-[11px] font-serif-lux tracking-[0.25em] uppercase">
              {menuItems.map((item) => (
                <a 
                  key={item.link} 
                  href={`#${item.link}`} 
                  className="text-[#EFE6DA] hover:text-[#94A3B8] transition-colors relative group"
                >
                  {item.nome}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#94A3B8] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* BOTÃO AGENDAR REUNIÃO */}
            <a 
              href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-7 py-3 overflow-hidden transition-all duration-300 rounded-lg shadow-xl group flex items-center justify-center"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                color: '#000000',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none"></div>
              
              <span className="relative z-10 text-[10px] font-serif-lux uppercase tracking-[0.2em] font-bold">
                Agendar Reunião
              </span>
            </a>
          </div>

          {/* BOTÃO HAMBÚRGUER MOBILE */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuAberto(!menuAberto)} className="text-[#94A3B8] text-3xl focus:outline-none p-2">
              <i className={menuAberto ? "ri-close-line" : "ri-menu-3-line"}></i>
            </button>
          </div>
        </div>
      </nav>

      <style jsx="true">{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* OVERLAY MENU MOBILE */}
      <div className={`fixed inset-0 bg-[#050C16] z-[998] transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${menuAberto ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-10 text-center">
          {menuItems.map((item) => (
            <a 
              key={item.link} 
              href={`#${item.link}`} 
              onClick={fecharMenu} 
              className="text-[#EFE6DA] font-serif-lux tracking-[0.4em] uppercase text-lg hover:text-[#94A3B8] transition-colors"
            >
              {item.nome}
            </a>
          ))}
          
          <a 
            onClick={fecharMenu} 
            href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 shadow-2xl rounded-lg font-serif-lux uppercase tracking-[0.2em] text-[12px] mt-6 font-bold"
            style={{ 
              backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
              color: '#000000'
            }}
          >
            Agendar Reunião
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;