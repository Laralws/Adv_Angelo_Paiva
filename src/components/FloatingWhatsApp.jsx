import React, { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisivel(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx="true">{`
        @keyframes pulse-prata-reluzente {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        .bg-prata-brilhoso {
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 45%, #94a3b8 100%);
          border: 1px solid #ffffff;
        }

        @keyframes sweepContinuous {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40%, 100% { transform: translateX(150%) skewX(-30deg); }
        }

        .shimmer-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 50%;
          z-index: 5;
        }

        .shimmer-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 40%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: sweepContinuous 3s infinite ease-in-out;
        }
      `}</style>

      <a 
        href="https://wa.me/5584998339633"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] transition-all duration-1000 transform ${
          visivel ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-20 pointer-events-none"
        }`}
      >
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-prata-brilhoso shadow-2xl animate-[pulse-prata-reluzente_2s_infinite]">
          
          {/* CAMADA DE BRILHO (Recortada internamente) */}
          <div className="shimmer-layer">
            <div className="shimmer-line"></div>
          </div>

          {/* ÍCONE (Escurecido) */}
          <i className="ri-whatsapp-line text-[#050C16] text-2xl md:text-3xl drop-shadow-sm relative z-10"></i>
          
          {/* NOTIFICAÇÃO (Fora do overflow-hidden para não ser comida) */}
          <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-red-600 border-2 border-white rounded-full flex items-center justify-center text-[10px] md:text-[11px] text-white font-bold animate-bounce shadow-lg z-20">
            1
          </span>
        </div>
      </a>
    </>
  );
};

export default FloatingWhatsApp;