import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/pagination';

const About = ({ cores }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { ref, inView: sobreVisivel } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mensagem personalizada para o WhatsApp
  const mensagemWpp = encodeURIComponent("Olá, Dr. Ângelo. Vim pelo site e gostaria de solicitar uma consultoria estratégica.");

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: cores.brancoPuro }}
    >
      {/* ONDA DE TOPO - Azul Profundo */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-20">
        <svg className="relative block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,120C300,120,0,0,0,0H1200S900,120,600,120Z" fill={cores.azulNoite}></path>
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          {/* BLOCO DE TEXTO */}
          <div className={`w-full md:w-1/2 order-1 transition-all duration-1000 ${sobreVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} text-center md:text-left`}>
            <h4 style={{ color: '#94A3B8' }} className="font-serif-lux uppercase tracking-widest text-xs md:text-sm mb-3 font-bold">
              Conheça o Profissional
            </h4>
            <h2 style={{ color: cores.azulProfundo }} className="font-serif-lux text-3xl md:text-5xl mb-6 leading-tight">
              Ângelo Paiva
            </h2>
            <div className="space-y-6 text-gray-800 font-sans-lux leading-relaxed text-sm md:text-lg text-justify px-2 md:px-0">
              <p>
                Assessoria jurídica voltada à prevenção e solução de conflitos nas diversas áreas do Direito Civil. 
                Foco na defesa dos interesses patrimoniais e obrigacionais de pessoas físicas e jurídicas. 
                O trabalho envolve consultoria preventiva, elaboração de peças processuais e condução de demandas judiciais e extrajudiciais.
              </p>
            </div>

            {/* BOTÃO DESKTOP: IGUAL À IMAGEM DE REFERÊNCIA */}
            <div className="hidden md:block mt-10">
              <a 
                href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative px-10 py-4 overflow-hidden transition-all duration-300 rounded-lg shadow-xl group flex items-center justify-center border border-white/30 inline-flex"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                  color: '#000000'
                }}
              >
                {/* Efeito de brilho cintilante */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none"></div>
                
                <span className="relative z-10 font-serif-lux text-[11px] font-bold uppercase tracking-[0.2em]">Falar com o advogado</span>
              </a>
            </div>
          </div>

          {/* CARROSSEL */}
          <div className={`w-full md:w-1/2 order-2 relative transition-all duration-1000 delay-300 ${sobreVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div style={{ borderColor: `#94A3B84D` }} className="absolute -inset-3 md:-inset-4 border translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl md:rounded-3xl pointer-events-none"></div>
            
            <div className="relative z-10 shadow-2xl overflow-hidden rounded-2xl md:rounded-3xl" style={{ borderRadius: "18px 18px 18px 0px" }}>
              <Swiper
                modules={[Pagination, Autoplay]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="w-full h-[350px] md:h-[500px] relative"
              >
                <SwiperSlide><img src="/sobre03.jpg" className="w-full h-full object-cover" alt="Ângelo Paiva" /></SwiperSlide>
                <SwiperSlide><img src="/sobre01.jpg" className="w-full h-full object-cover" alt="Ângelo Paiva" /></SwiperSlide>
                <SwiperSlide><img src="/sobre02.jpg" className="w-full h-full object-cover" alt="Ângelo Paiva" /></SwiperSlide>

                <button 
                  type="button" 
                  onClick={(e) => { e.preventDefault(); if (swiperInstance) swiperInstance.slidePrev(); }} 
                  style={{ backgroundColor: `${cores.azulNoite}80`, color: "#FFFFFF", borderColor: `#94A3B84D` }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full border"
                >
                  <i className="ri-arrow-left-s-line text-2xl"></i>
                </button>
                
                <button 
                  type="button" 
                  onClick={(e) => { e.preventDefault(); if (swiperInstance) swiperInstance.slideNext(); }} 
                  style={{ backgroundColor: `${cores.azulNoite}80`, color: "#FFFFFF", borderColor: `#94A3B84D` }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full border"
                >
                  <i className="ri-arrow-right-s-line text-2xl"></i>
                </button>
              </Swiper>
            </div>
          </div>

          {/* BOTÃO MOBILE: IGUAL À IMAGEM DE REFERÊNCIA */}
          <div className={`w-full md:hidden order-3 flex justify-center mt-8 transition-all duration-1000 ${sobreVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a 
              href={`https://wa.me/5584998339633?text=${mensagemWpp}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative px-10 py-4 overflow-hidden transition-all duration-300 rounded-lg shadow-xl flex items-center justify-center border border-white/30"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #a1aab3 0%, #ffffff 50%, #a1aab3 100%)',
                color: '#000000'
              }}
            >
              <span className="relative z-10 font-serif-lux text-[11px] font-bold uppercase tracking-[0.2em]">Falar com o advogado</span>
            </a>
          </div>

        </div>
      </div>

      <style jsx="true">{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .animate-\\[shimmer_4s_infinite\\] {
          animation: shimmer 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default About;